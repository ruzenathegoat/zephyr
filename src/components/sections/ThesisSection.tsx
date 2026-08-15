import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Container } from '../ui/Container';
import OffshoreImage from '../../assets/offshore-v2.webp';
import DoggerImage from '../../assets/dogger.webp';
import AtlanticImage from '../../assets/atlantic.webp';
import VanguardImage from '../../assets/vanguard.webp';

const zephyrEase = [0.23, 1, 0.32, 1] as const;

const engineeringLayers = [
  {
    index: '01',
    domain: 'Material integrity',
    headline: 'Carbon-Glass Composite Architecture',
    description: 'Continuous structural monitoring of rotor blade fatigue envelopes under extreme cyclic aerodynamic loading, engineered for 35+ years of zero delamination.',
    image: OffshoreImage,
    metrics: [
      { label: 'Fatigue Limit', value: '10^8 Cycles' },
      { label: 'Blade Mass', value: '54.2 Tons' },
      { label: 'Resin Type', value: 'Thermoplastic Bio-Resin' },
    ],
  },
  {
    index: '02',
    domain: 'Aerodynamic performance',
    headline: 'Computational Wake & Flow Dynamics',
    description: 'High-fidelity aerodynamic wake steering algorithms dynamically adjust individual turbine yaw angles to eliminate turbulence losses across multi-GW arrays.',
    image: VanguardImage,
    metrics: [
      { label: 'Array Efficiency', value: '+4.8% Net Yield' },
      { label: 'Wake Recovery', value: '< 4 Rotor Diameters' },
      { label: 'Tip Speed Ratio', value: '8.4 Optimal' },
    ],
  },
  {
    index: '03',
    domain: 'Grid integration',
    headline: 'Synthetic Inertia & High-Voltage DC',
    description: 'Direct-drive permanent magnet synchronous generation paired with co-located battery buffering delivers millisecond frequency regulation to regional TSO grids.',
    image: AtlanticImage,
    metrics: [
      { label: 'Response Latency', value: '12 ms' },
      { label: 'HVDC Voltage', value: '±525 kV Subsea' },
      { label: 'Grid Code Compliance', value: 'ENTSO-E Class A' },
    ],
  },
  {
    index: '04',
    domain: 'Operational intelligence',
    headline: 'Continuous Edge SCADA Telemetry',
    description: 'Over 850 optical and vibration sensors per nacelle continuously stream acoustic and load telemetries into edge inference nodes, predicting maintenance needs 90 days ahead.',
    image: DoggerImage,
    metrics: [
      { label: 'Sensor Channels', value: '850+ Points' },
      { label: 'Lead Time', value: '90 Days Predictive' },
      { label: 'Availability Delta', value: '+1.4% Uptime' },
    ],
  },
];

export function ThesisSection() {
  const [selectedLayer, setSelectedLayer] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = engineeringLayers[selectedLayer];

  return (
    <section
      id="engineering-thesis"
      aria-labelledby="thesis-heading"
      className="border-b border-border-strong bg-white"
    >
      <Container className="py-14 tablet:py-20 desktop:py-24">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
              <p className="font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-black">
                System Philosophy
              </p>
            </div>
            <h2
              id="thesis-heading"
              className="mt-3 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-medium uppercase leading-[0.95] tracking-[-0.03em] text-black"
            >
              Renewable energy is an engineering discipline
            </h2>
          </div>

          <p className="max-w-[42ch] font-sans text-[0.875rem] leading-[1.6] text-text-secondary">
            Zephyr treats wind infrastructure as one unified engineering system—materials, aerodynamics, controls, and grid integration resolved synchronously.
          </p>
        </div>

        {/* Interactive 4-Layer Engineering System Explorer */}
        <div className="mt-10 grid grid-cols-1 gap-8 desktop:grid-cols-12 desktop:gap-12">
          
          {/* Left Column: Interactive Layer Navigation (5 cols) */}
          <div className="flex flex-col justify-between border-t border-border-strong desktop:col-span-5">
            <div>
              <p className="border-b border-border py-3 font-mono text-[0.625rem] uppercase tracking-wider text-text-secondary">
                Select Architectural Subsystem
              </p>

              <div className="flex flex-col divide-y divide-border">
                {engineeringLayers.map((layer, index) => {
                  const isSelected = selectedLayer === index;
                  return (
                    <button
                      key={layer.index}
                      onClick={() => setSelectedLayer(index)}
                      className={`btn-tactile group flex items-start gap-4 py-4 text-left transition-colors ${
                        isSelected ? 'bg-surface-soft px-3' : 'hover:bg-surface-soft/50 hover:px-2'
                      }`}
                    >
                      <span className={`font-mono text-[0.75rem] font-bold ${isSelected ? 'text-primary' : 'text-text-secondary'}`}>
                        {layer.index}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-display text-[1.125rem] font-medium uppercase tracking-tight text-black">
                            {layer.domain}
                          </h3>
                          <span className={`h-1.5 w-1.5 ${isSelected ? 'bg-primary' : 'bg-transparent'}`} />
                        </div>
                        <p className="mt-1 font-mono text-[0.625rem] uppercase text-text-secondary">
                          {layer.headline}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 border-t border-border bg-surface-soft p-4">
              <p className="font-mono text-[0.625rem] uppercase text-text-secondary">
                System Synthesis Principle
              </p>
              <p className="mt-1 font-sans text-[0.8125rem] font-medium text-black">
                Zero component isolation. Every physical turbine parameter is co-designed against electrical grid stabilization.
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Architectural Visual Plate (7 cols) */}
          <div className="desktop:col-span-7">
            <div className="border border-border-strong bg-surface-soft">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.index}
                    src={current.image}
                    alt={current.domain}
                    width="1200"
                    height="750"
                    loading="lazy"
                    decoding="async"
                    initial={reduceMotion ? false : { opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: zephyrEase }}
                    className="h-full w-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* Top Badge on Visual Plate */}
                <div className="absolute left-3 top-3 border border-white/20 bg-black/80 px-3 py-1 text-white backdrop-blur-md">
                  <span className="font-mono text-[0.625rem] font-bold uppercase text-primary">
                    Layer {current.index} / {current.domain}
                  </span>
                </div>

                {/* Bottom Overlay Description */}
                <div className="absolute bottom-3 left-3 right-3 border border-white/20 bg-black/90 p-4 text-white backdrop-blur-md">
                  <h4 className="font-sans text-[0.9375rem] font-semibold uppercase tracking-tight text-white">
                    {current.headline}
                  </h4>
                  <p className="mt-1.5 max-w-[50ch] font-sans text-[0.8125rem] leading-[1.55] text-white/80">
                    {current.description}
                  </p>
                </div>
              </div>

              {/* Sub-system Parameter Metrics Strip */}
              <div className="grid grid-cols-3 divide-x divide-border border-t border-border-strong bg-white p-3.5">
                {current.metrics.map((m) => (
                  <div key={m.label} className="px-3 first:pl-1">
                    <span className="block font-mono text-[0.5625rem] uppercase text-text-secondary">{m.label}</span>
                    <span className="mt-0.5 block font-mono text-[0.875rem] font-bold text-black tabular-nums">{m.value}</span>
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
