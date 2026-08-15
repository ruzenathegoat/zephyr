import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Container } from '../ui/Container';

const zephyrEase = [0.23, 1, 0.32, 1] as const;

const regions = [
  {
    id: 'north-sea',
    name: 'North Sea Cluster',
    capacity: '2,400 MW',
    turbines: '160 Units',
    availability: '98.8%',
    depth: '35—55 m',
    coordinates: '54°22\'N · 02°18\'E',
    gridSync: '50.02 Hz Active Grid Interconnect',
    hvdcVoltage: '±525 kV Subsea',
    tsoPartner: 'TenneT / Statnett Interconnect',
    activePills: [85, 92, 98, 95, 88, 94, 98, 100, 96, 90, 94, 98],
  },
  {
    id: 'baltic',
    name: 'Baltic Interconnect',
    capacity: '1,100 MW',
    turbines: '74 Units',
    availability: '98.4%',
    depth: '22—40 m',
    coordinates: '55°10\'N · 14°45\'E',
    gridSync: '50.00 Hz Continuous Synced Feed',
    hvdcVoltage: '220 kV HVAC',
    tsoPartner: '50Hertz / Energinet',
    activePills: [60, 72, 85, 88, 92, 86, 90, 94, 91, 85, 89, 92],
  },
  {
    id: 'atlantic',
    name: 'US Atlantic Basin',
    capacity: '750 MW',
    turbines: '50 Units',
    availability: '98.2%',
    depth: '45—68 m',
    coordinates: '41°12\'N · 70°50\'W',
    gridSync: '60.01 Hz ISO-NE Interconnect Feed',
    hvdcVoltage: '±400 kV Subsea',
    tsoPartner: 'ISO New England / NYISO',
    activePills: [75, 80, 88, 95, 98, 92, 88, 94, 97, 95, 96, 98],
  },
];

export function EvidenceGrid() {
  const [activeTab, setActiveTab] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = regions[activeTab];

  return (
    <section
      id="performance"
      aria-labelledby="performance-heading"
      className="border-b border-border-strong bg-surface-soft"
    >
      <Container className="py-20 tablet:py-28 desktop:py-32">
        
        {/* Section Header with Generous Spacing */}
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-border pb-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
              <p className="font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-black">
                Verified Fleet Metrics
              </p>
            </div>
            <h2
              id="performance-heading"
              className="mt-4 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-medium uppercase leading-[0.95] tracking-[-0.03em] text-black"
            >
              Real-Time Grid Dispatch Network
            </h2>
          </div>

          <p className="max-w-[42ch] font-sans text-[0.9375rem] leading-[1.7] text-text-secondary">
            Interactive transmission telemetry reconciled across 142 offshore turbines and three regional subsea interconnections.
          </p>
        </div>

        {/* Interactive Regional Grid Dispatch Explorer */}
        <div className="mt-12 border border-border-strong bg-white desktop:mt-16">
          
          {/* Top Region Switcher Tabs */}
          <div className="grid grid-cols-1 border-b border-border-strong tablet:grid-cols-3">
            {regions.map((region, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={region.id}
                  onClick={() => setActiveTab(idx)}
                  className={`btn-tactile flex flex-col justify-between border-b border-border p-5 text-left transition-colors last:border-b-0 tablet:border-b-0 tablet:border-r tablet:p-6 tablet:last:border-r-0 ${
                    isActive ? 'bg-black text-white' : 'bg-white text-black hover:bg-surface-soft'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-[0.625rem] font-bold uppercase ${isActive ? 'text-primary' : 'text-text-secondary'}`}>
                      Transmission Node 0{idx + 1}
                    </span>
                    <span className={`h-1.5 w-1.5 ${isActive ? 'bg-primary' : 'bg-border'}`} />
                  </div>
                  <div className="mt-4">
                    <p className="font-sans text-[0.9375rem] font-semibold uppercase tracking-tight">
                      {region.name}
                    </p>
                    <p className={`mt-1 font-mono text-[1.35rem] font-bold tabular-nums ${isActive ? 'text-white' : 'text-black'}`}>
                      {region.capacity}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Main Interactive Telemetry & Transmission Vector Schematic */}
          <div className="grid grid-cols-1 items-center desktop:grid-cols-12">
            
            {/* Left: Dynamic Animated Vector Transmission Diagram (7 cols) */}
            <div className="relative overflow-hidden border-b border-border-strong bg-black p-6 tablet:p-8 desktop:col-span-7 desktop:border-b-0 desktop:border-r">
              
              <div className="flex items-center justify-between border-b border-white/20 pb-3">
                <span className="font-mono text-[0.625rem] uppercase text-white/70">Subsea HVDC Dispatch Topology</span>
                <span className="font-mono text-[0.625rem] font-bold text-primary">{current.gridSync}</span>
              </div>

              {/* Animated SVG Network Flow */}
              <div className="relative aspect-[16/10] w-full mt-4 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid Lines */}
                  <defs>
                    <pattern id="gridPattern" width="25" height="25" patternUnits="userSpaceOnUse">
                      <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#gridPattern)" />

                  {/* Offshore Substation Node */}
                  <g transform="translate(80, 150)">
                    <circle r="36" fill="rgba(0,59,255,0.15)" stroke="#003BFF" strokeWidth="1.5" className="animate-pulse" />
                    <circle r="14" fill="#003BFF" />
                    <text x="0" y="55" fill="#ffffff" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                      OFFSHORE ARRAY
                    </text>
                    <text x="0" y="70" fill="rgba(255,255,255,0.6)" fontSize="8" fontFamily="monospace" textAnchor="middle">
                      {current.turbines}
                    </text>
                  </g>

                  {/* Subsea Transmission Cable Line with Flow Animation */}
                  <path
                    d="M 116 150 C 200 150, 280 150, 380 150"
                    fill="none"
                    stroke="#003BFF"
                    strokeWidth="3"
                    strokeDasharray="8 6"
                    className="animate-pulse"
                  />

                  {/* Onshore Grid Interconnect Node */}
                  <g transform="translate(420, 150)">
                    <circle r="28" fill="rgba(255,255,255,0.1)" stroke="#ffffff" strokeWidth="1.5" />
                    <circle r="10" fill="#ffffff" />
                    <text x="0" y="50" fill="#ffffff" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                      ONSHORE GRID
                    </text>
                    <text x="0" y="65" fill="#003BFF" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                      {current.hvdcVoltage}
                    </text>
                  </g>

                  {/* Flowing Energy Packets */}
                  <circle r="4" fill="#ffffff" className="animate-ping" cx="240" cy="150" />
                </svg>

                {/* Coordinates Tag */}
                <div className="absolute top-2 left-2 border border-white/20 bg-black/80 px-2.5 py-1 text-[0.5625rem] font-mono text-white/90">
                  Node: {current.coordinates}
                </div>

                <div className="absolute bottom-2 right-2 border border-white/20 bg-black/80 px-2.5 py-1 text-[0.5625rem] font-mono text-primary">
                  TSO Partner: {current.tsoPartner}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between font-mono text-[0.5625rem] uppercase text-white/60">
                <span>Direct Subsea Ingestion</span>
                <span>Loss Factor: &lt; 1.8% per 100 km</span>
              </div>
            </div>

            {/* Right: Live Telemetry Dispatch Metrics (5 cols) */}
            <div className="p-8 tablet:p-10 desktop:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: zephyrEase }}
                  className="flex flex-col justify-between"
                >
                  <div className="border-b border-border pb-5">
                    <p className="font-mono text-[0.625rem] uppercase tracking-wider text-text-secondary">
                      Active Telemetry Stream
                    </p>
                    <h3 className="mt-1.5 font-display text-[1.5rem] font-medium uppercase leading-tight text-black">
                      {current.name} Performance
                    </h3>
                  </div>

                  {/* 4 Telemetry Metrics */}
                  <div className="mt-6 grid grid-cols-2 gap-5 border-b border-border pb-6">
                    <div>
                      <span className="font-mono text-[0.625rem] uppercase text-text-secondary">Grid Capacity</span>
                      <p className="mt-1 font-mono text-[1.35rem] font-bold text-black tabular-nums">{current.capacity}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[0.625rem] uppercase text-text-secondary">Fleet Units</span>
                      <p className="mt-1 font-mono text-[1.35rem] font-bold text-black tabular-nums">{current.turbines}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[0.625rem] uppercase text-text-secondary">Availability</span>
                      <p className="mt-1 font-mono text-[1.35rem] font-bold text-primary tabular-nums">{current.availability}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[0.625rem] uppercase text-text-secondary">Water Depth</span>
                      <p className="mt-1 font-mono text-[1.35rem] font-bold text-black tabular-nums">{current.depth}</p>
                    </div>
                  </div>

                  {/* Sparkline Power Generation Curve */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between font-mono text-[0.625rem] uppercase text-text-secondary">
                      <span>24-Hour Baseload Profile</span>
                      <span className="font-bold text-black">P50 Stable Generation</span>
                    </div>
                    <div className="mt-3 flex h-14 items-end gap-2 border-b border-border pb-1.5">
                      {current.activePills.map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-primary/20 transition-all duration-300 hover:bg-primary"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="mt-6 font-mono text-[0.625rem] uppercase text-text-secondary">
                    Audited by DNV GL · Continuous Substation SCADA Polling
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
