import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Container } from '../ui/Container';
import HeroImage from '../../assets/Hero.avif';
import VanguardImage from '../../assets/vanguard.webp';
import BalticImage from '../../assets/baltic.webp';
import OffshoreImage from '../../assets/offshore-v2.webp';

const zephyrEase = [0.23, 1, 0.32, 1] as const;

const history = [
  {
    year: '2018',
    title: 'Venture Foundation & Direct-Drive R&D',
    event: 'Zephyr founded in Oslo by offshore marine engineers to pioneer gearbox-free direct-drive offshore wind platforms.',
    capacity: '0 MW (Lab R&D)',
    turbines: 'Proto 01 Nacelle',
    region: 'Oslo Test Facility',
    image: OffshoreImage,
  },
  {
    year: '2021',
    title: 'First Commercial 500 MW Array',
    event: 'Commissioned the North Sea Alpha Array in 45m water depth, achieving 98.2% availability in its first year of continuous grid feed.',
    capacity: '500 MW Operational',
    turbines: '34 Direct-Drive Turbines',
    region: 'North Sea Basin',
    image: VanguardImage,
  },
  {
    year: '2024',
    title: 'Multi-Regional Grid Expansion',
    event: 'Operating fleet expanded past 3,000 MW across three regional transmission systems in the North Sea, Baltic, and US Atlantic.',
    capacity: '3,100 MW Operational',
    turbines: '110 Direct-Drive Turbines',
    region: 'Baltic & Atlantic Interconnects',
    image: BalticImage,
  },
  {
    year: '2026',
    title: 'Z-Class 15 MW Platform Rollout',
    event: 'Active commercial deployment of the next-generation Z-Class 15 MW platform featuring 236m rotor diameters and 35-year design lifetimes.',
    capacity: '4,150 MW Synchronized',
    turbines: '142 Active Turbines',
    region: 'Global Offshore Fleet',
    image: HeroImage,
  },
];

const facts = [
  { label: 'Corporate Entity', value: 'Zephyr Energy Systems AS' },
  { label: 'Global HQ', value: 'Oslo, Norway (Karenslyst Allé 49)' },
  { label: 'Engineering Hubs', value: 'Hamburg · Seattle · Taipei' },
  { label: 'Operating Regions', value: 'North Sea · Baltic · US Atlantic' },
  { label: 'Patents in Portfolio', value: '42 Registered Innovations' },
];

export function CompanyProfileSection() {
  const [selectedMilestone, setSelectedMilestone] = useState(3); // default to 2026
  const reduceMotion = useReducedMotion();
  const current = history[selectedMilestone];

  return (
    <section id="company" aria-labelledby="company-heading" className="border-b border-border-strong bg-white">
      <Container className="py-20 tablet:py-28 desktop:py-32">
        
        {/* Section Header with Generous Spacing */}
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-border pb-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
              <p className="font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-black">
                Organization & Track Record
              </p>
            </div>
            <h2
              id="company-heading"
              className="mt-4 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-medium uppercase leading-[0.95] tracking-[-0.03em] text-black"
            >
              The organization behind the infrastructure
            </h2>
          </div>

          <p className="max-w-[42ch] font-sans text-[0.9375rem] leading-[1.7] text-text-secondary">
            Eight years of disciplined engineering execution scaling from proprietary direct-drive R&D to 4,150 MW of synchronized offshore power.
          </p>
        </div>

        {/* Interactive Fleet Expansion History & Timeline Explorer */}
        <div className="mt-12 grid grid-cols-1 gap-10 desktop:mt-16 desktop:grid-cols-12 desktop:gap-14">
          
          {/* Left: Milestone Timeline Navigation (5 cols) */}
          <div className="flex flex-col justify-between border-t border-border-strong desktop:col-span-5">
            <div>
              <p className="border-b border-border py-3.5 font-mono text-[0.625rem] uppercase tracking-wider text-text-secondary">
                Select Milestone Phase [2018—2026]
              </p>

              <div className="flex flex-col divide-y divide-border">
                {history.map((item, index) => {
                  const isSelected = selectedMilestone === index;
                  return (
                    <button
                      key={item.year}
                      onClick={() => setSelectedMilestone(index)}
                      className={`btn-tactile group flex items-start gap-4 py-5 text-left transition-colors ${
                        isSelected ? 'bg-surface-soft px-4' : 'hover:bg-surface-soft/50 hover:px-2'
                      }`}
                    >
                      <time className={`font-mono text-[1.25rem] font-bold tabular-nums ${isSelected ? 'text-primary' : 'text-text-secondary'}`}>
                        {item.year}
                      </time>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-display text-[1.05rem] font-medium uppercase tracking-tight text-black">
                            {item.title}
                          </h3>
                          <span className={`h-1.5 w-1.5 ${isSelected ? 'bg-primary' : 'bg-transparent'}`} />
                        </div>
                        <p className="mt-1 font-sans text-[0.8125rem] text-text-secondary line-clamp-2">
                          {item.event}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Corporate Fact Sheet Minimal Box */}
            <div className="mt-8 border border-border bg-surface-soft p-4">
              <span className="font-mono text-[0.625rem] uppercase text-text-secondary">Corporate Governance</span>
              <p className="mt-1 font-mono text-[0.75rem] font-bold text-black uppercase">
                Registered AS (Norway) · Org. No. 921 482 104 · Independent Engineering Board
              </p>
            </div>
          </div>

          {/* Right: Dynamic Historical Visual Plate & Capacity Tracker (7 cols) */}
          <div className="desktop:col-span-7">
            <div className="border border-border-strong bg-white">
              
              {/* Visual Plate Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.year}
                    src={current.image}
                    alt={current.title}
                    width="1200"
                    height="750"
                    loading="lazy"
                    decoding="async"
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: zephyrEase }}
                    className="h-full w-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="absolute left-3 top-3 border border-white/20 bg-black/80 px-3 py-1.5 text-white backdrop-blur-md">
                  <span className="font-mono text-[0.625rem] font-bold uppercase text-primary">
                    {current.year} / {current.region}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="font-mono text-[0.5625rem] uppercase text-white/70">Milestone Highlight</span>
                  <p className="font-sans text-[0.9375rem] font-semibold uppercase text-white">{current.title}</p>
                </div>
              </div>

              {/* Milestone Details & Fleet Metrics */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 border-b border-border pb-5 font-mono text-[0.6875rem] uppercase">
                  <div>
                    <span className="block text-text-secondary">Fleet Capacity</span>
                    <span className="mt-1 block text-[1.25rem] font-bold text-primary tabular-nums">{current.capacity}</span>
                  </div>
                  <div>
                    <span className="block text-text-secondary">Deployed Fleet</span>
                    <span className="mt-1 block text-[1.25rem] font-bold text-black tabular-nums">{current.turbines}</span>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4 text-[0.6875rem] sm:grid-cols-3 font-mono uppercase text-text-secondary">
                  {facts.slice(0, 3).map((f) => (
                    <div key={f.label}>
                      <span className="block text-[0.5625rem]">{f.label}</span>
                      <span className="mt-0.5 block font-semibold text-black">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
