import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Container } from '../ui/Container';

const zephyrEase = [0.23, 1, 0.32, 1] as const;

const steps = [
  {
    number: '01',
    title: 'Site assessment',
    phase: 'Geophysical & Wind Resource Modeling',
    description: 'High-resolution seabed bathymetry, LiDAR wind-velocity profiling, subsea geotechnical drilling, and environmental baseline surveys define the engineering boundary conditions.',
    duration: '18—24 Months',
    deliverable: 'Certified Site Engineering Basis (Rev. A)',
    schematicTitle: 'Subsea Sonar & LiDAR Bathymetry Grid',
    parameters: [
      { label: 'LiDAR Sampling', value: '1 Hz Continuous' },
      { label: 'Seabed Core Depth', value: '80m Penetration' },
      { label: 'Met-Ocean Baseline', value: '10-Yr Historical' },
    ],
  },
  {
    number: '02',
    title: 'System design',
    phase: 'Array Layout & Substation Architecture',
    description: 'Turbine spatial positioning, wake loss minimization modeling, monopile structural sizing, and subsea inter-array cable topology are resolved as an integrated electrical system.',
    duration: '12—18 Months',
    deliverable: 'Issued for Construction (IFC) Dossier',
    schematicTitle: 'Turbine Wake Optimization & HVDC Routing',
    parameters: [
      { label: 'Array Wake Loss', value: '< 4.2% Estimated' },
      { label: 'HVDC Topology', value: '±525 kV Subsea' },
      { label: 'Foundation Standard', value: 'DNV-ST-0126' },
    ],
  },
  {
    number: '03',
    title: 'Marine deployment',
    phase: 'Heavy-Lift Offshore Installation',
    description: 'Specialized Jack-Up and DP-2 heavy-lift vessels execute foundation driving, nacelle lifting, and blade mounting under precision dynamic positioning in deep marine water.',
    duration: '10—16 Months',
    deliverable: 'Grid Energization & COD Certificate',
    schematicTitle: 'DP-2 Heavy-Lift Jack-Up Positioning',
    parameters: [
      { label: 'Vessel Class', value: '3,200T Crane DP2' },
      { label: 'Cable Laying Speed', value: '1.2 km / Day' },
      { label: 'Commissioning Cycle', value: '14 Days / Turbine' },
    ],
  },
  {
    number: '04',
    title: 'Asset operations',
    phase: 'Long-Term Telemetry & Predictive O&M',
    description: 'Continuous real-time vibration analytics, blade health acoustics, and autonomous drone inspections maximize fleet availability and deliver baseload power across a 35+ year design life.',
    duration: '35+ Year Lifecycle',
    deliverable: 'Real-time TSO Dispatch Integration',
    schematicTitle: 'Edge SCADA Health & Vibration Telemetry',
    parameters: [
      { label: 'SCADA Telemetry', value: '850 Sensor Nodes' },
      { label: 'Service Interval', value: '5-Year Major O&M' },
      { label: 'Availability Target', value: '≥ 98.5% Uptime' },
    ],
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = steps[activeStep];

  return (
    <section id="process" aria-labelledby="process-heading" className="border-b border-border-strong bg-white">
      <Container className="py-20 tablet:py-28 desktop:py-32">
        
        {/* Section Header with Generous Spacing */}
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-border pb-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
              <p className="font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-black">
                Deployment Lifecycle
              </p>
            </div>
            <h2
              id="process-heading"
              className="mt-4 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-medium uppercase leading-[0.95] tracking-[-0.03em] text-black"
            >
              From seabed to grid
            </h2>
          </div>

          <p className="max-w-[42ch] font-sans text-[0.9375rem] leading-[1.7] text-text-secondary">
            A disciplined four-stage engineering sequence engineered to de-risk capital deployment and accelerate time-to-first-power.
          </p>
        </div>

        {/* Interactive 4-Phase Stepper */}
        <div className="mt-12 grid grid-cols-1 gap-10 desktop:mt-16 desktop:grid-cols-12 desktop:gap-14">
          
          {/* Left Column: Phase Navigation Tabs (5 cols) */}
          <div className="flex flex-col justify-between border-t border-border-strong desktop:col-span-5">
            <div>
              <p className="border-b border-border py-3.5 font-mono text-[0.625rem] uppercase tracking-wider text-text-secondary">
                Select Lifecycle Phase [01—04]
              </p>

              <div className="flex flex-col divide-y divide-border">
                {steps.map((step, idx) => {
                  const isCurrent = activeStep === idx;
                  return (
                    <button
                      key={step.number}
                      onClick={() => setActiveStep(idx)}
                      className={`btn-tactile group flex items-start gap-4 py-5 text-left transition-colors ${
                        isCurrent ? 'bg-surface-soft px-3.5' : 'hover:bg-surface-soft/50 hover:px-2'
                      }`}
                    >
                      <span className={`font-mono text-[1.125rem] font-bold ${isCurrent ? 'text-primary' : 'text-text-secondary'}`}>
                        {step.number}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-display text-[1.125rem] font-medium uppercase tracking-tight text-black">
                            {step.title}
                          </h3>
                          <span className={`h-1.5 w-1.5 ${isCurrent ? 'bg-primary' : 'bg-transparent'}`} />
                        </div>
                        <p className="mt-1 font-mono text-[0.625rem] uppercase text-text-secondary">
                          {step.duration} · {step.phase}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 border-t border-border bg-surface-soft p-4">
              <span className="font-mono text-[0.5625rem] uppercase text-text-secondary">Milestone Output</span>
              <p className="mt-1 font-mono text-[0.8125rem] font-bold text-black uppercase">
                {current.deliverable}
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Phase Vector Schematic (7 cols) */}
          <div className="desktop:col-span-7">
            <div className="border border-border-strong bg-black p-6 tablet:p-8">
              
              <div className="flex items-center justify-between border-b border-white/20 pb-3">
                <span className="font-mono text-[0.625rem] uppercase text-primary font-bold">
                  Phase 0{current.number} Technical Schematic
                </span>
                <span className="font-mono text-[0.625rem] text-white/70">
                  {current.duration}
                </span>
              </div>

              {/* Dynamic Animated Vector Stage Illustration */}
              <div className="relative aspect-[16/10] w-full mt-4 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid Lines */}
                  <defs>
                    <pattern id="processGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#processGrid)" />

                  {/* Sea Surface & Seabed Layers */}
                  <line x1="20" y1="100" x2="480" y2="100" stroke="#003BFF" strokeWidth="1.5" strokeDasharray="4 4" />
                  <text x="25" y="90" fill="#003BFF" fontSize="9" fontFamily="monospace">SEA SURFACE (0.0 M)</text>

                  <line x1="20" y1="240" x2="480" y2="240" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                  <text x="25" y="230" fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="monospace">SEABED STRATA (-50.0 M)</text>

                  {/* Stage-Specific Vector Diagrams */}
                  {activeStep === 0 && (
                    /* Stage 1: LiDAR & Sonar Bathymetry */
                    <g transform="translate(250, 95)">
                      {/* Vessel */}
                      <rect x="-40" y="-15" width="80" height="15" fill="#ffffff" />
                      <polygon points="-40,0 -50,-15 -40,-15" fill="#ffffff" />
                      <polygon points="40,0 50,-15 40,-15" fill="#ffffff" />
                      {/* Sonar Cone */}
                      <polygon points="0,0 -120,145 120,145" fill="rgba(0,59,255,0.15)" stroke="#003BFF" strokeWidth="1" strokeDasharray="4 2" className="animate-pulse" />
                      <circle cx="0" cy="70" r="3" fill="#003BFF" />
                      <circle cx="0" cy="110" r="3" fill="#003BFF" />
                    </g>
                  )}

                  {activeStep === 1 && (
                    /* Stage 2: Turbine Array & Wake Loss */
                    <g transform="translate(100, 170)">
                      {[0, 150, 300].map((offset, i) => (
                        <g key={i} transform={`translate(${offset}, 0)`}>
                          <line x1="0" y1="-80" x2="0" y2="70" stroke="#ffffff" strokeWidth="3" />
                          <circle cx="0" cy="-80" r="8" fill="#003BFF" />
                          <path d="M 0 -80 C 40 -80, 80 -60, 120 -40" fill="none" stroke="#003BFF" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                        </g>
                      ))}
                    </g>
                  )}

                  {activeStep === 2 && (
                    /* Stage 3: Heavy-Lift Jack-Up */
                    <g transform="translate(250, 90)">
                      {/* Jackup Legs */}
                      <line x1="-50" y1="-30" x2="-50" y2="150" stroke="#ffffff" strokeWidth="4" />
                      <line x1="50" y1="-30" x2="50" y2="150" stroke="#ffffff" strokeWidth="4" />
                      {/* Platform */}
                      <rect x="-70" y="-10" width="140" height="20" fill="#003BFF" />
                      {/* Crane */}
                      <line x1="20" y1="-10" x2="80" y2="-70" stroke="#ffffff" strokeWidth="3" />
                      <line x1="80" y1="-70" x2="80" y2="20" stroke="#003BFF" strokeWidth="1.5" strokeDasharray="2 2" className="animate-bounce" />
                    </g>
                  )}

                  {activeStep === 3 && (
                    /* Stage 4: Continuous SCADA Telemetry Flow */
                    <g transform="translate(150, 160)">
                      <line x1="0" y1="-70" x2="0" y2="80" stroke="#ffffff" strokeWidth="3" />
                      <circle cx="0" cy="-70" r="10" fill="#003BFF" />
                      {/* Optical Pulse Ring */}
                      <circle cx="0" cy="-70" r="30" fill="none" stroke="#003BFF" strokeWidth="1.5" className="animate-ping" />
                      {/* Power Flow to Right */}
                      <path d="M 0 80 L 250 80" stroke="#003BFF" strokeWidth="3" strokeDasharray="6 4" className="animate-pulse" />
                      <rect x="230" y="65" width="30" height="30" fill="#ffffff" />
                      <text x="245" y="83" fill="#000000" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">TSO</text>
                    </g>
                  )}
                </svg>

                {/* Bottom Overlay Description */}
                <div className="absolute bottom-2 left-2 right-2 border border-white/20 bg-black/90 p-3 text-white backdrop-blur-md">
                  <h4 className="font-sans text-[0.875rem] font-semibold uppercase tracking-tight text-white">
                    {current.schematicTitle}
                  </h4>
                  <p className="mt-1 font-sans text-[0.75rem] leading-[1.5] text-white/80 line-clamp-2">
                    {current.description}
                  </p>
                </div>
              </div>

              {/* Parameters Strip */}
              <div className="grid grid-cols-3 divide-x divide-white/20 border-t border-white/20 mt-4 pt-4">
                {current.parameters.map((p) => (
                  <div key={p.label} className="px-3 first:pl-1">
                    <span className="block font-mono text-[0.5625rem] uppercase text-white/60">{p.label}</span>
                    <span className="mt-1 block font-mono text-[0.8125rem] font-bold text-white tabular-nums">{p.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
