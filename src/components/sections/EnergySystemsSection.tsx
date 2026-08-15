import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Container } from '../ui/Container';

const zephyrEase = [0.23, 1, 0.32, 1] as const;

const subsystems = [
  {
    id: 'rotor',
    number: '01',
    name: '236m Rotor & Aero-blades',
    spec: '236 M Swept Diameter · 115m Carbon-Glass Blades',
    description: 'Custom low-induction blade geometry with serrated trailing edges minimizes acoustic noise while extracting maximum kinetic energy in turbulent marine wind regimes.',
    efficiency: '58.2% Betz Yield',
    stress: 'Nominal 42 MPa',
    schematicLabel: 'Aerodynamic Rotor Assembly',
    telemetryLeft: (rpm: number) => `Rotor Velocity: ${rpm} RPM`,
    telemetryRight: (ws: number) => ws < 3 ? 'CUT-IN STANDBY' : ws > 25 ? 'STORM CUT-OUT' : 'ACTIVE GENERATION',
  },
  {
    id: 'generator',
    number: '02',
    name: 'Permanent Magnet Direct-Drive',
    spec: '15.0 MW Direct-Drive · Zero Multi-stage Gearbox',
    description: 'Eliminating the mechanical gearbox removes the primary failure mode of offshore turbines, increasing mechanical reliability and extending service intervals to 5 years.',
    efficiency: '98.4% Electrical',
    stress: '21.5 MN·m Torque',
    schematicLabel: 'PMSG Generator Cross-Section',
    telemetryLeft: () => 'Stator Coils: 96 Phase Windings',
    telemetryRight: () => 'RATED 15.0 MW CONTINUOUS',
  },
  {
    id: 'foundation',
    number: '03',
    name: 'Deepwater Monopile Base',
    spec: '10.5m Diameter · 65m Seabed Penetration',
    description: 'Fatigue-optimized heavy marine steel monopiles with rock-fill scour protection engineered to endure 100-year storm surges and extreme wave crest dynamics.',
    efficiency: '50+ Year Life',
    stress: 'S355ML Marine Steel',
    schematicLabel: 'Monopile Structural Profile',
    telemetryLeft: () => 'Pile Diameter: 10.5m · Wall: 120mm',
    telemetryRight: () => 'SEABED PENETRATION −65.0 M',
  },
  {
    id: 'telemetry',
    number: '04',
    name: 'Optical SCADA Sensor Array',
    spec: '850+ Strain & Vibration Fiber-Optic Nodes',
    description: 'Real-time structural health monitoring continuously feeds load telemetries into edge models to autonomously damp resonance vibrations during high wind events.',
    efficiency: '< 5 ms Latency',
    stress: '10 kHz Continuous',
    schematicLabel: 'Fiber-Optic Telemetry Network',
    telemetryLeft: () => 'Active Nodes: 850+ Sensors',
    telemetryRight: () => 'EDGE PROCESSING < 5 MS',
  },
];

/* ── Blade path: tapered aerofoil pointing upward from hub ── */
const BLADE_PATH = 'M 0,-4 C 2,-4 4,-10 4.5,-35 C 5,-60 4,-85 3,-100 C 2,-108 0.5,-112 0,-112 C -0.5,-112 -2,-108 -3,-100 C -4,-85 -5,-60 -4.5,-35 C -4,-10 -2,-4 0,-4 Z';

/* ═══════════════════════════════════════════════════════
   SVG Sub-illustrations — one per subsystem
   ═══════════════════════════════════════════════════════ */

/* 01: Spinning Rotor with airflow */
function RotorIllustration({ rotorRef, windSpeed }: { rotorRef: React.RefObject<SVGGElement | null>; windSpeed: number }) {
  return (
    <>
      <defs>
        <linearGradient id="airflowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#003BFF" stopOpacity="0" />
          <stop offset="40%" stopColor="#003BFF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#003BFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Airflow streamlines */}
      {[...Array(8)].map((_, i) => {
        const y = 30 + i * 48;
        const speed = Math.max(0.8, 4 - windSpeed / 7);
        return (
          <line key={`af-${i}`} x1="0" y1={y} x2="600" y2={y + (i % 2 === 0 ? 6 : -4)}
            stroke="url(#airflowGrad)" strokeWidth={windSpeed > 10 ? 1.8 : 1} strokeDasharray="14 10" opacity={0.35}>
            <animate attributeName="stroke-dashoffset" from="0" to="-48" dur={`${speed}s`} repeatCount="indefinite" />
          </line>
        );
      })}
      {/* Nacelle */}
      <rect x="280" y="192" width="40" height="16" rx="2" fill="#3f3f46" stroke="#71717a" strokeWidth="1" />
      <text x="300" y="203" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="monospace" fontWeight="bold">ZP-15</text>
      {/* Tower */}
      <rect x="295" y="208" width="10" height="180" fill="#52525b" />
      {/* Sea level */}
      <line x1="0" y1="340" x2="600" y2="340" stroke="#003BFF" strokeWidth="1" strokeDasharray="6 4" opacity="0.3" />
      <text x="12" y="334" fill="#003BFF" fontSize="7" fontFamily="monospace" opacity="0.6">MSL 0.0 M</text>
      {/* Rotor assembly */}
      <g transform="translate(300, 200)">
        <g ref={rotorRef} style={{ willChange: 'transform' }}>
          {[0, 120, 240].map((deg) => (
            <path key={deg} d={BLADE_PATH} fill="#e4e4e7" transform={`rotate(${deg})`} />
          ))}
          <circle r="8" fill="#d4d4d8" stroke="#18181b" strokeWidth="2" />
        </g>
      </g>
    </>
  );
}

/* 02: Generator PMSG cross-section with rotating magnet ring */
function GeneratorIllustration({ generatorRef }: { generatorRef: React.RefObject<SVGGElement | null> }) {
  return (
    <>
      <defs>
        <radialGradient id="emField" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#003BFF" stopOpacity="0" />
          <stop offset="60%" stopColor="#003BFF" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#003BFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* EM field background */}
      <circle cx="300" cy="200" r="160" fill="url(#emField)" />
      {/* Outer Stator Housing */}
      <circle cx="300" cy="200" r="140" fill="none" stroke="#3f3f46" strokeWidth="8" />
      <text x="300" y="42" textAnchor="middle" fill="#71717a" fontSize="8" fontFamily="monospace">STATOR CASING (Ø 10.2 M)</text>
      {/* Stator coil windings — 12 positions */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30) * Math.PI / 180;
        const cx = 300 + 130 * Math.cos(angle);
        const cy = 200 + 130 * Math.sin(angle);
        return (
          <g key={`coil-${i}`}>
            <rect x={cx - 8} y={cy - 12} width="16" height="24" rx="2" fill="#27272a" stroke="#003BFF" strokeWidth="1" opacity="0.9" />
            <line x1={cx} y1={cy - 6} x2={cx} y2={cy + 6} stroke="#003BFF" strokeWidth="1.5" opacity="0.7" />
          </g>
        );
      })}
      <text x="300" y="370" textAnchor="middle" fill="#52525b" fontSize="8" fontFamily="monospace">96 PHASE WINDINGS · 3-PHASE AC OUTPUT</text>
      {/* Rotating permanent magnet ring */}
      <g transform="translate(300, 200)">
        <g ref={generatorRef} style={{ willChange: 'transform' }}>
          <circle r="90" fill="none" stroke="#52525b" strokeWidth="3" strokeDasharray="12 8" />
          {/* 8 magnet pole pairs */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45) * Math.PI / 180;
            const mx = 90 * Math.cos(angle);
            const my = 90 * Math.sin(angle);
            const isNorth = i % 2 === 0;
            return (
              <g key={`mag-${i}`}>
                <rect x={mx - 10} y={my - 6} width="20" height="12" rx="2"
                  fill={isNorth ? '#003BFF' : '#dc2626'}
                  transform={`rotate(${i * 45}, ${mx}, ${my})`} />
                <text x={mx} y={my + 3} textAnchor="middle" fill="#ffffff" fontSize="6"
                  fontFamily="monospace" fontWeight="bold"
                  transform={`rotate(${i * 45}, ${mx}, ${my})`}>
                  {isNorth ? 'N' : 'S'}
                </text>
              </g>
            );
          })}
        </g>
      </g>
      {/* Central shaft */}
      <circle cx="300" cy="200" r="22" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
      <text x="300" y="203" textAnchor="middle" fill="#003BFF" fontSize="7" fontFamily="monospace" fontWeight="bold">SHAFT</text>
      {/* EM flux lines — pulsing */}
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const r1 = 95;
        const r2 = 125;
        const rad = deg * Math.PI / 180;
        return (
          <line key={`flux-${deg}`}
            x1={300 + r1 * Math.cos(rad)} y1={200 + r1 * Math.sin(rad)}
            x2={300 + r2 * Math.cos(rad)} y2={200 + r2 * Math.sin(rad)}
            stroke="#003BFF" strokeWidth="1" opacity="0.3">
            <animate attributeName="opacity" values="0.15;0.6;0.15" dur="1.2s" repeatCount="indefinite" begin={`${deg / 360}s`} />
          </line>
        );
      })}
    </>
  );
}

/* 03: Deepwater Monopile structural profile */
function MonopileIllustration() {
  return (
    <>
      {/* Sky / water gradient zones */}
      <rect x="0" y="0" width="600" height="130" fill="#0a0a0a" />
      <rect x="0" y="130" width="600" height="120" fill="#09111f" />
      <rect x="0" y="250" width="600" height="162" fill="#1a1205" opacity="0.6" />
      {/* Surface line */}
      <line x1="0" y1="130" x2="600" y2="130" stroke="#003BFF" strokeWidth="1.5" />
      <text x="12" y="124" fill="#003BFF" fontSize="8" fontFamily="monospace" fontWeight="bold">MEAN SEA LEVEL (0.0 M)</text>
      {/* Mudline */}
      <line x1="0" y1="250" x2="600" y2="250" stroke="#a16207" strokeWidth="1.5" strokeDasharray="8 4" />
      <text x="12" y="244" fill="#a16207" fontSize="8" fontFamily="monospace">MUDLINE (−45.0 M)</text>
      {/* Geological strata layers */}
      <rect x="0" y="290" width="600" height="40" fill="rgba(120,90,40,0.15)" />
      <text x="520" y="310" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="monospace">CLAY / TILL</text>
      <rect x="0" y="330" width="600" height="82" fill="rgba(100,80,50,0.2)" />
      <text x="520" y="370" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="monospace">CHALK / ROCK</text>
      {/* Water particles */}
      {[...Array(12)].map((_, i) => {
        const cx = 50 + i * 50;
        const cy = 150 + (i % 3) * 30;
        return (
          <circle key={`wp-${i}`} cx={cx} cy={cy} r="1.5" fill="#003BFF" opacity="0.25">
            <animate attributeName="cy" values={`${cy};${cy - 8};${cy}`} dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        );
      })}
      {/* Monopile shaft — the star of this illustration */}
      <rect x="270" y="60" width="60" height="340" rx="2" fill="#52525b" stroke="#71717a" strokeWidth="1.5" />
      {/* Inner structural detail lines */}
      {[80, 130, 180, 230, 280, 330, 370].map((y) => (
        <line key={`rib-${y}`} x1="275" y1={y} x2="325" y2={y} stroke="#71717a" strokeWidth="0.5" opacity="0.6" />
      ))}
      {/* Transition piece */}
      <rect x="265" y="115" width="70" height="25" rx="1" fill="#3f3f46" stroke="#003BFF" strokeWidth="1" />
      <text x="300" y="131" textAnchor="middle" fill="#003BFF" fontSize="7" fontFamily="monospace" fontWeight="bold">TRANSITION PIECE</text>
      {/* Scour protection rocks */}
      {[-50, -30, -10, 10, 30, 50, -40, -20, 0, 20, 40].map((offset, i) => (
        <circle key={`scour-${i}`} cx={300 + offset} cy={252 + Math.abs(offset) * 0.15}
          r={4 + (i % 3)} fill="#78716c" stroke="#57534e" strokeWidth="0.5" opacity="0.7" />
      ))}
      <text x="390" y="260" fill="#a8a29e" fontSize="7" fontFamily="monospace">SCOUR PROTECTION</text>
      {/* Dimension annotations */}
      {/* Pile depth */}
      <line x1="220" y1="250" x2="220" y2="400" stroke="#003BFF" strokeWidth="0.8" markerEnd="url(#arrowDown)" />
      <line x1="215" y1="250" x2="225" y2="250" stroke="#003BFF" strokeWidth="0.8" />
      <line x1="215" y1="400" x2="225" y2="400" stroke="#003BFF" strokeWidth="0.8" />
      <text x="210" y="330" fill="#003BFF" fontSize="7" fontFamily="monospace" textAnchor="end" transform="rotate(-90, 210, 330)">−65 M EMBEDMENT</text>
      {/* Diameter */}
      <line x1="270" y1="50" x2="330" y2="50" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
      <line x1="270" y1="46" x2="270" y2="54" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
      <line x1="330" y1="46" x2="330" y2="54" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
      <text x="300" y="46" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="7" fontFamily="monospace">Ø 10.5 M · 120 MM WALL</text>
      {/* Wave action indicator */}
      <path d="M 360 125 Q 380 115, 400 125 Q 420 135, 440 125 Q 460 115, 480 125" fill="none" stroke="#003BFF" strokeWidth="1" opacity="0.4">
        <animate attributeName="d"
          values="M 360 125 Q 380 115, 400 125 Q 420 135, 440 125 Q 460 115, 480 125;M 360 125 Q 380 135, 400 125 Q 420 115, 440 125 Q 460 135, 480 125;M 360 125 Q 380 115, 400 125 Q 420 135, 440 125 Q 460 115, 480 125"
          dur="3s" repeatCount="indefinite" />
      </path>
      <text x="420" y="118" fill="#003BFF" fontSize="7" fontFamily="monospace" opacity="0.6">WAVE ACTION</text>
    </>
  );
}

/* 04: SCADA sensor network topology */
function ScadaIllustration() {
  const nodes = [
    { x: 300, y: 80, label: 'NACELLE HUB', r: 18 },
    { x: 140, y: 160, label: 'BLADE A STRAIN', r: 12 },
    { x: 460, y: 160, label: 'BLADE B STRAIN', r: 12 },
    { x: 300, y: 200, label: 'YAW BEARING', r: 12 },
    { x: 160, y: 280, label: 'TOWER MID', r: 10 },
    { x: 440, y: 280, label: 'CONVERTER', r: 10 },
    { x: 300, y: 320, label: 'FOUNDATION', r: 10 },
    { x: 80, y: 360, label: 'SUBSEA CABLE', r: 10 },
    { x: 520, y: 360, label: 'SUBSTATION', r: 10 },
    { x: 300, y: 390, label: 'EDGE PROCESSOR', r: 14 },
  ];
  const links: [number, number][] = [
    [0, 1], [0, 2], [0, 3], [3, 4], [3, 5], [4, 6], [5, 6], [6, 7], [6, 8], [7, 9], [8, 9], [4, 7],
  ];
  return (
    <>
      <defs>
        <radialGradient id="nodePulse" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#003BFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#003BFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Grid background */}
      <defs>
        <pattern id="scadaGrid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="600" height="412" fill="url(#scadaGrid)" />
      {/* Data flow links */}
      {links.map(([a, b], i) => {
        const n1 = nodes[a];
        const n2 = nodes[b];
        return (
          <g key={`link-${i}`}>
            <line x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y} stroke="#003BFF" strokeWidth="1" opacity="0.25" />
            {/* Flowing data packet */}
            <circle r="2.5" fill="#003BFF">
              <animateMotion dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite" path={`M ${n1.x} ${n1.y} L ${n2.x} ${n2.y}`} />
              <animate attributeName="opacity" values="0;1;1;0" dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite" />
            </circle>
          </g>
        );
      })}
      {/* Sensor nodes */}
      {nodes.map((node, i) => {
        const isHub = i === 0;
        const isEdge = i === nodes.length - 1;
        return (
          <g key={`node-${i}`}>
            {/* Pulse ring */}
            <circle cx={node.x} cy={node.y} r={node.r} fill="url(#nodePulse)">
              <animate attributeName="r" from={String(node.r)} to={String(node.r + 12)} dur="2s" begin={`${i * 0.15}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.5" to="0" dur="2s" begin={`${i * 0.15}s`} repeatCount="indefinite" />
            </circle>
            {/* Core node */}
            <circle cx={node.x} cy={node.y} r={node.r}
              fill={isHub || isEdge ? '#003BFF' : '#27272a'}
              stroke={isHub || isEdge ? '#ffffff' : '#003BFF'}
              strokeWidth={isHub || isEdge ? 2 : 1} />
            {/* Label */}
            <text x={node.x} y={node.y + node.r + 12} textAnchor="middle"
              fill={isHub || isEdge ? '#ffffff' : '#a1a1aa'}
              fontSize="7" fontFamily="monospace" fontWeight={isHub || isEdge ? 'bold' : 'normal'}>
              {node.label}
            </text>
            {/* Data rate */}
            <text x={node.x} y={node.y + 4} textAnchor="middle" fill="#ffffff" fontSize="6" fontFamily="monospace" fontWeight="bold">
              {isHub ? '10K' : isEdge ? 'EDGE' : String(i * 120 + 80)}
            </text>
          </g>
        );
      })}
      {/* Status labels */}
      <text x="12" y="20" fill="#003BFF" fontSize="8" fontFamily="monospace" fontWeight="bold">FIBER-OPTIC SCADA NETWORK TOPOLOGY</text>
      <text x="12" y="32" fill="#71717a" fontSize="7" fontFamily="monospace">850+ SENSOR NODES · REDUNDANT SUBSEA FIBER BUS</text>
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   Main Section Component
   ═══════════════════════════════════════════════════════ */

export function EnergySystemsSection() {
  const [activeSubsystem, setActiveSubsystem] = useState(0);
  const [windSpeed, setWindSpeed] = useState(12.5);
  const reduceMotion = useReducedMotion();

  /* Refs for rAF-driven rotation — zero re-renders */
  const rotorRef = useRef<SVGGElement>(null);
  const generatorRef = useRef<SVGGElement>(null);
  const angleRef = useRef(0);
  const genAngleRef = useRef(0);
  const rafRef = useRef<number>(0);
  const windRef = useRef(windSpeed);
  const lastTimeRef = useRef(0);

  useEffect(() => { windRef.current = windSpeed; }, [windSpeed]);

  const powerOutput = windSpeed < 3.0
    ? 0
    : windSpeed >= 11.8
      ? 15.0
      : Number((15.0 * Math.pow((windSpeed - 3.0) / (11.8 - 3.0), 2.4)).toFixed(2));

  const rpm = windSpeed < 3.0 ? 0 : Number((4.5 + (windSpeed / 12.0) * 4.2).toFixed(1));

  /* ── requestAnimationFrame loop ── */
  const tick = useCallback((timestamp: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    const delta = (timestamp - lastTimeRef.current) / 1000;
    lastTimeRef.current = timestamp;

    const currentWind = windRef.current;

    // Rotor rotation
    if (currentWind >= 3.0) {
      const currentRpm = 4.5 + (currentWind / 12.0) * 4.2;
      angleRef.current = (angleRef.current + currentRpm * 6 * delta) % 360;
    }
    if (rotorRef.current) {
      rotorRef.current.setAttribute('transform', `rotate(${angleRef.current})`);
    }

    // Generator magnet ring rotation (slower, constant)
    genAngleRef.current = (genAngleRef.current + 18 * delta) % 360;
    if (generatorRef.current) {
      generatorRef.current.setAttribute('transform', `rotate(${genAngleRef.current})`);
    }

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick, reduceMotion]);

  const current = subsystems[activeSubsystem];

  return (
    <section id="systems" aria-labelledby="systems-heading" className="border-b border-border-strong bg-white">
      <Container className="py-20 tablet:py-28 desktop:py-32">

        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-border pb-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
              <p className="font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-black">
                Platform Architecture
              </p>
            </div>
            <h2
              id="systems-heading"
              className="mt-4 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-medium uppercase leading-[0.95] tracking-[-0.03em] text-black"
            >
              Interactive Subsystem Explorer
            </h2>
          </div>

          <p className="max-w-[42ch] font-sans text-[0.9375rem] leading-[1.7] text-text-secondary">
            Inspect the four primary engineering subsystems of the Z-Class 15 MW Direct-Drive offshore platform.
          </p>
        </div>

        {/* Interactive Simulation & Vector Schematic Grid */}
        <div className="mt-12 grid grid-cols-1 gap-10 desktop:mt-16 desktop:grid-cols-12 desktop:gap-14">

          {/* Left: Animated Vector Schematic (7 cols) */}
          <div className="border border-border-strong bg-surface-soft p-6 tablet:p-8 desktop:col-span-7">

            {/* Wind Speed Slider — only visible on Rotor tab */}
            {activeSubsystem === 0 ? (
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
                <div>
                  <span className="font-mono text-[0.625rem] uppercase text-text-secondary">Wind Velocity Input</span>
                  <p className="font-mono text-[1.125rem] font-bold text-black tabular-nums">{windSpeed.toFixed(1)} m/s</p>
                </div>
                <div className="flex items-center gap-4 flex-1 max-w-xs">
                  <span className="font-mono text-[0.5625rem] text-text-secondary">0</span>
                  <input type="range" min="0" max="25" step="0.5" value={windSpeed}
                    onChange={(e) => setWindSpeed(parseFloat(e.target.value))}
                    className="w-full accent-primary cursor-pointer" aria-label="Adjust wind speed" />
                  <span className="font-mono text-[0.5625rem] text-text-secondary">25</span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[0.625rem] uppercase text-text-secondary">Grid Output</span>
                  <p className="font-mono text-[1.125rem] font-bold text-primary tabular-nums">{powerOutput} MW</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-primary" />
                  <span className="font-mono text-[0.6875rem] font-bold uppercase text-black">{current.schematicLabel}</span>
                </div>
                <span className="font-mono text-[0.625rem] uppercase text-text-secondary">Subsystem 0{current.number} / 04</span>
              </div>
            )}

            {/* ─── SVG Illustration Viewport ─── */}
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-black mt-6 border border-border">
              <AnimatePresence mode="wait">
                <motion.svg
                  key={current.id}
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 600 412"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label={current.schematicLabel}
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: zephyrEase }}
                >
                  {activeSubsystem === 0 && <RotorIllustration rotorRef={rotorRef} windSpeed={windSpeed} />}
                  {activeSubsystem === 1 && <GeneratorIllustration generatorRef={generatorRef} />}
                  {activeSubsystem === 2 && <MonopileIllustration />}
                  {activeSubsystem === 3 && <ScadaIllustration />}
                </motion.svg>
              </AnimatePresence>

              {/* Bottom Telemetry Bar */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between border border-white/20 bg-black/90 px-4 py-2 text-white backdrop-blur-md">
                <span className="font-mono text-[0.625rem] text-white/80">
                  {current.telemetryLeft(rpm)}
                </span>
                <span className="font-mono text-[0.625rem] text-primary font-bold">
                  {current.telemetryRight(windSpeed)}
                </span>
              </div>
            </div>

            <p className="mt-3 font-mono text-[0.5625rem] uppercase text-text-secondary">
              {current.schematicLabel} · Interactive Engineering Visualization
            </p>
          </div>

          {/* Right: Subsystem Inspector & Parameters (5 cols) */}
          <div className="flex flex-col justify-between border-t border-border-strong pt-8 desktop:col-span-5 desktop:border-t-0 desktop:pt-0">
            <div>
              <div className="flex items-center justify-between border-b border-border pb-3.5">
                <span className="font-mono text-[0.625rem] uppercase tracking-wider text-text-secondary">Subsystem Inspector</span>
                <span className="font-mono text-[0.6875rem] font-bold text-primary">Component 0{current.number} / 04</span>
              </div>

              {/* Subsystem Selectors */}
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                {subsystems.map((sub, idx) => (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSubsystem(idx)}
                    className={`btn-tactile border p-3 text-left transition-colors ${
                      activeSubsystem === idx
                        ? 'border-black bg-black text-white'
                        : 'border-border bg-surface-soft text-black hover:border-black'
                    }`}
                  >
                    <span className={`block font-mono text-[0.5625rem] uppercase ${activeSubsystem === idx ? 'text-primary' : 'text-text-secondary'}`}>
                      Part 0{sub.number}
                    </span>
                    <span className="mt-1 block font-sans text-[0.75rem] font-semibold uppercase tracking-tight truncate">
                      {sub.name}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Subsystem Detail */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: zephyrEase }}
                  className="mt-8 border-t border-border pt-6"
                >
                  <span className="font-mono text-[0.625rem] uppercase text-primary font-bold">Subsystem 0{current.number}</span>
                  <h3 className="mt-1.5 font-display text-[1.4rem] font-medium uppercase leading-tight text-black">
                    {current.name}
                  </h3>
                  <p className="mt-1.5 font-mono text-[0.6875rem] text-text-secondary">
                    {current.spec}
                  </p>
                  <p className="mt-4 font-sans text-[0.9375rem] leading-[1.7] text-text-secondary">
                    {current.description}
                  </p>

                  {/* Component Spec Matrix */}
                  <div className="mt-8 border-t border-border bg-surface-soft p-4">
                    <p className="font-mono text-[0.5625rem] uppercase text-text-secondary">Electromechanical Parameters</p>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div>
                        <span className="block font-mono text-[0.5625rem] uppercase text-text-secondary">Efficiency Standard</span>
                        <span className="mt-1 block font-mono text-[0.8125rem] font-bold text-black">{current.efficiency}</span>
                      </div>
                      <div>
                        <span className="block font-mono text-[0.5625rem] uppercase text-text-secondary">Mechanical Rating</span>
                        <span className="mt-1 block font-mono text-[0.8125rem] font-bold text-black">{current.stress}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="mt-8 border-t border-border pt-4 font-mono text-[0.625rem] uppercase text-text-secondary">
              Permanent-Magnet Direct-Drive · Zero Gearbox Wear Assembly
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
}
