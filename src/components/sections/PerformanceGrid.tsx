import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Container } from '../ui/Container';

const zephyrEase = [0.23, 1, 0.32, 1] as const;

const benchmarkModes = [
  {
    id: 'direct-drive',
    title: 'Zephyr Z-Class 15 MW',
    sub: 'Permanent-Magnet Direct-Drive Baseline',
    capacityFactor: '52.4%',
    availability: '98.8%',
    lcoe: '$32 / MWh',
    ltif: '0.00 / Zero Incidents',
    responseSpeed: '12 ms Synthetic Inertia',
    description: 'Direct-drive powertrain combined with wake-steering algorithms maximizes offshore kinetic conversion and delivers utility-grade baseload stability.',
    bars: [85, 92, 98, 100, 96, 94, 98, 92, 96, 100, 98, 94],
  },
  {
    id: 'legacy-geared',
    title: 'Legacy Geared Fleet (Industry Avg)',
    sub: 'Multi-stage 8-10 MW Gearbox Turbines',
    capacityFactor: '41.2%',
    availability: '93.5%',
    lcoe: '$48 / MWh',
    ltif: '1.42 / Mill. Hours',
    responseSpeed: '120 ms Mechanical Response',
    description: 'High gearbox mechanical stress in deep marine waters leads to unplanned offshore service interventions and lower annual energy yields.',
    bars: [60, 68, 74, 80, 72, 70, 78, 75, 70, 82, 76, 72],
  },
  {
    id: 'thermal-baseload',
    title: 'Conventional Combined-Cycle Grid',
    sub: 'Natural Gas Baseload Generation Benchmark',
    capacityFactor: '58.0%',
    availability: '88.0%',
    lcoe: '$76 / MWh',
    ltif: '0.85 / Mill. Hours',
    responseSpeed: '850 ms Thermal Ramp',
    description: 'High carbon fuel exposure and volatile feedstock pricing make conventional fossil thermal power uneconomical over 30+ year investment horizons.',
    bars: [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75],
  },
];

export function PerformanceGrid() {
  const [selectedBenchmark, setSelectedBenchmark] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = benchmarkModes[selectedBenchmark];

  return (
    <section
      id="operating-performance"
      aria-labelledby="operating-performance-heading"
      className="border-y border-white/20 bg-black text-white"
    >
      <Container className="py-14 tablet:py-20 desktop:py-24">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/20 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
              <p className="font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-white/90">
                Operational Benchmarks
              </p>
            </div>
            <h2
              id="operating-performance-heading"
              className="mt-3 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-medium uppercase leading-[0.95] tracking-[-0.03em] text-white"
            >
              Output is measured. Reliability is earned.
            </h2>
          </div>

          <p className="max-w-[42ch] font-sans text-[0.875rem] leading-[1.6] text-white/70">
            Interactive comparative performance benchmarks audited against independent third-party offshore operating datasets.
          </p>
        </div>

        {/* Interactive Benchmark Mode Switcher */}
        <div className="mt-10 grid grid-cols-1 border border-white/20 bg-zinc-950 tablet:grid-cols-3">
          {benchmarkModes.map((mode, idx) => {
            const isSelected = selectedBenchmark === idx;
            return (
              <button
                key={mode.id}
                onClick={() => setSelectedBenchmark(idx)}
                className={`btn-tactile flex flex-col justify-between border-b border-white/15 p-5 text-left transition-colors last:border-b-0 tablet:border-b-0 tablet:border-r tablet:last:border-r-0 ${
                  isSelected ? 'bg-zinc-900 text-white' : 'text-white/60 hover:bg-zinc-900/50 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-[0.625rem] font-bold uppercase ${isSelected ? 'text-primary' : 'text-white/40'}`}>
                    Benchmark 0{idx + 1}
                  </span>
                  <span className={`h-1.5 w-1.5 ${isSelected ? 'bg-primary' : 'bg-white/20'}`} />
                </div>
                <div className="mt-3">
                  <p className="font-sans text-[0.875rem] font-semibold uppercase tracking-tight text-white">
                    {mode.title}
                  </p>
                  <p className="font-mono text-[0.625rem] text-white/60">
                    {mode.sub}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Benchmark Data Display */}
        <div className="mt-8 grid grid-cols-1 border border-white/20 bg-zinc-950 p-6 tablet:p-8 desktop:grid-cols-12 desktop:gap-10">
          
          {/* Left Column: Big Highlight & Metric Matrix (6 cols) */}
          <div className="flex flex-col justify-between desktop:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: zephyrEase }}
              >
                <div>
                  <span className="font-mono text-[0.625rem] uppercase tracking-wider text-primary font-bold">
                    Comparative Performance Envelope
                  </span>
                  <h3 className="mt-1 font-display text-[1.65rem] font-medium uppercase leading-tight text-white">
                    {current.title}
                  </h3>
                  <p className="mt-3 font-sans text-[0.875rem] leading-[1.65] text-white/75">
                    {current.description}
                  </p>
                </div>

                {/* Metric Matrix */}
                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/15 pt-5">
                  <div>
                    <span className="font-mono text-[0.625rem] uppercase text-white/60">Capacity Factor</span>
                    <p className="font-mono text-[1.5rem] font-bold text-primary tabular-nums">{current.capacityFactor}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[0.625rem] uppercase text-white/60">Fleet Availability</span>
                    <p className="font-mono text-[1.5rem] font-bold text-white tabular-nums">{current.availability}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[0.625rem] uppercase text-white/60">Levelized Cost (LCOE)</span>
                    <p className="font-mono text-[1.5rem] font-bold text-white tabular-nums">{current.lcoe}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[0.625rem] uppercase text-white/60">Response Latency</span>
                    <p className="font-mono text-[1.5rem] font-bold text-white tabular-nums">{current.responseSpeed}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Dynamic Yield Distribution Graph (6 cols) */}
          <div className="mt-6 flex flex-col justify-between border-t border-white/15 pt-6 desktop:col-span-6 desktop:mt-0 desktop:border-l desktop:border-t-0 desktop:border-white/15 desktop:pl-10 desktop:pt-0">
            <div>
              <div className="flex items-center justify-between font-mono text-[0.625rem] uppercase text-white/70">
                <span>Annual Output Simulation (P50 Yield)</span>
                <span className="text-primary font-bold">{current.capacityFactor} Cap. Factor</span>
              </div>

              {/* Dynamic Bar Curve */}
              <div className="mt-6 flex h-36 items-end gap-2 border-b border-white/20 pb-2">
                {current.bars.map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                    <motion.div
                      initial={reduceMotion ? false : { height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.4, delay: i * 0.02, ease: zephyrEase }}
                      className={`w-full ${selectedBenchmark === 0 ? 'bg-primary' : 'bg-white/40'}`}
                    />
                    <span className="font-mono text-[0.5rem] text-white/50">M0{i+1}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between font-mono text-[0.625rem] uppercase text-white/60">
                <span>Month 01 (Jan)</span>
                <span>Month 06 (Jun)</span>
                <span>Month 12 (Dec)</span>
              </div>
            </div>

            <div className="mt-6 border-t border-white/15 pt-3 font-mono text-[0.625rem] uppercase text-white/60">
              Benchmark Source: Consolidated Marine Energy Analytics & DNV-ST-0145 Database
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
