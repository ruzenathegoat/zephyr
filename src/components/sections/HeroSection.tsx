import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Container } from '../ui/Container';
import HeroImage from '../../assets/Hero.avif';

const zephyrEase = [0.23, 1, 0.32, 1] as const;

const metrics = [
  { value: '4,150 MW', label: 'Active Fleet Capacity', note: 'North Sea · Baltic · Atlantic' },
  { value: '98.6%', label: 'Technical Availability', note: 'DNV Certified Baseline' },
  { value: '236 M', label: 'Rotor Diameter', note: 'ZP-15 Direct-Drive Class' },
  { value: '35+ YRS', label: 'Design Asset Life', note: 'Deepwater Marine Standard' },
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const revealFrom = reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 };
  const revealTo = { opacity: 1, y: 0 };

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-border-strong bg-white"
    >
      <Container className="flex flex-col">
        
        {/* Top Header Bar: Clean 1px Border with Pure Typography */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: zephyrEase }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-border py-4 font-mono text-[0.6875rem] uppercase tracking-wider"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
            <span className="font-bold text-black">Offshore Wind Infrastructure</span>
            <span className="text-text-secondary">/</span>
            <span className="text-text-secondary">Direct-Drive Fleet Systems</span>
          </div>
          <div className="text-text-secondary">
            <span>Operating Telemetry: </span>
            <span className="font-bold text-black">4,150 MW Synchronized</span>
          </div>
        </motion.div>

        {/* Main Editorial Body: Balanced 6/6 Grid with Generous Whitespace */}
        <div className="grid grid-cols-1 items-center gap-12 py-14 tablet:py-20 desktop:grid-cols-12 desktop:gap-16 desktop:py-24">
          
          {/* Left Column: Bounded Grand Display Typography & Message (6 cols) */}
          <div className="flex flex-col justify-between desktop:col-span-6">
            <div>
              <motion.p
                initial={reduceMotion ? false : revealFrom}
                animate={revealTo}
                transition={{ duration: 0.4, delay: 0.05, ease: zephyrEase }}
                className="font-mono text-[0.6875rem] font-bold uppercase tracking-widest text-primary"
              >
                Industrial Marine Energy
              </motion.p>

              <h1
                id="hero-title"
                className="mt-5 font-display text-[clamp(2.25rem,3.4vw,3.25rem)] font-medium uppercase leading-[0.94] tracking-[-0.03em] text-black"
              >
                <motion.span
                  className="block"
                  initial={reduceMotion ? false : revealFrom}
                  animate={revealTo}
                  transition={{ duration: 0.4, delay: 0.1, ease: zephyrEase }}
                >
                  Offshore
                </motion.span>
                <motion.span
                  className="block"
                  initial={reduceMotion ? false : revealFrom}
                  animate={revealTo}
                  transition={{ duration: 0.4, delay: 0.15, ease: zephyrEase }}
                >
                  Infrastructure
                </motion.span>
                <motion.span
                  className="block text-primary"
                  initial={reduceMotion ? false : revealFrom}
                  animate={revealTo}
                  transition={{ duration: 0.4, delay: 0.2, ease: zephyrEase }}
                >
                  Built for decades
                </motion.span>
              </h1>

              <motion.p
                initial={reduceMotion ? false : revealFrom}
                animate={revealTo}
                transition={{ duration: 0.4, delay: 0.25, ease: zephyrEase }}
                className="mt-8 max-w-[44ch] font-sans text-[0.9375rem] leading-[1.75] text-text-secondary desktop:text-[1rem]"
              >
                Zephyr engineers, builds, and operates utility-scale direct-drive wind systems designed for predictable baseload power in the world’s harshest marine environments.
              </motion.p>
            </div>

            {/* CTAs: Clean Brutalist Rectangular Buttons */}
            <motion.div
              initial={reduceMotion ? false : revealFrom}
              animate={revealTo}
              transition={{ duration: 0.4, delay: 0.3, ease: zephyrEase }}
              className="mt-10 flex flex-wrap items-center gap-4 desktop:mt-12"
            >
              <a
                href="#projects"
                className="btn-tactile inline-flex min-h-12 items-center justify-center bg-black px-6 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.03em] text-white transition-colors hover:bg-primary active:scale-[0.97]"
              >
                Explore Active Fleet →
              </a>

              <a
                href="#systems"
                className="btn-tactile inline-flex min-h-12 items-center justify-center border border-border bg-white px-5 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.03em] text-black transition-colors hover:border-black hover:bg-surface-soft active:scale-[0.97]"
              >
                Technical Systems →
              </a>
            </motion.div>
          </div>

          {/* Right Column: High-Resolution Photographic Plate (6 cols) */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15, ease: zephyrEase }}
            className="flex flex-col justify-between desktop:col-span-6"
          >
            <div className="overflow-hidden border border-border-strong bg-surface-soft">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={HeroImage}
                  alt="Zephyr offshore wind turbine array installation operating in deep marine waters"
                  width="1332"
                  height="832"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-zephyr hover:scale-[1.02]"
                />
              </div>

              {/* Clean Documentary Plate Caption Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border-strong bg-white px-4 py-3.5 font-mono text-[0.625rem] uppercase">
                <span className="font-bold text-black">
                  Plate 01 / Vanguard Alpha Array
                </span>
                <span className="text-text-secondary">
                  North Sea Basin · 1,200 MW Class
                </span>
              </div>
            </div>

            <p className="mt-3 font-mono text-[0.625rem] uppercase text-text-secondary">
              Telemetry reconciliation: DNV Verified · Continuous 50.0 Hz Grid Interconnect
            </p>
          </motion.div>

        </div>

        {/* Bottom Performance Strip: 4 Minimalist Columns with Generous Spacing */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.35, ease: zephyrEase }}
          className="border-t border-border-strong py-10 tablet:py-14"
        >
          <div className="grid grid-cols-2 gap-8 tablet:grid-cols-4 tablet:gap-10">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`flex flex-col justify-between ${index !== 0 ? 'tablet:border-l tablet:border-border tablet:pl-8' : ''}`}
              >
                <span className="font-mono text-[1.5rem] font-normal leading-none tracking-[-0.04em] text-black tabular-nums desktop:text-[2rem]">
                  {metric.value}
                </span>
                <span className="mt-2.5 font-sans text-[0.8125rem] font-semibold uppercase tracking-tight text-black">
                  {metric.label}
                </span>
                <span className="mt-1 font-mono text-[0.6875rem] text-text-secondary">
                  {metric.note}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
