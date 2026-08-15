import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Container } from '../ui/Container';
import VanguardImage from '../../assets/vanguard.webp';
import DoggerImage from '../../assets/dogger.webp';
import BalticImage from '../../assets/baltic.webp';
import AtlanticImage from '../../assets/atlantic.webp';

const zephyrEase = [0.23, 1, 0.32, 1] as const;

const disclosures = [
  {
    index: '01',
    title: 'Operational capacity verification',
    summary: 'Grid-connected capacity is independently audited annually and reconciled against continuous SCADA telemetry shared with transmission system operators.',
    source: 'DNV Verified / Fleet Telemetry',
    cadence: 'Annual + Continuous SCADA Polling',
    image: VanguardImage,
    standard: 'DNV-ST-0145 / IEC 61400-26-1',
    auditBody: 'Det Norske Veritas (DNV)',
    verificationHash: '0x8F92...DNV-2026',
  },
  {
    index: '02',
    title: 'Avoided-emissions accounting',
    summary: 'Avoided greenhouse gas emissions are calculated using a rolling 12-month window based on empirical marginal grid-intensity factors at each regional point of interconnection.',
    source: 'Regional Grid Transmission Factor',
    cadence: 'Rolling 12-Month Audited Basis',
    image: BalticImage,
    standard: 'ISO 14064-2 / GHG Protocol Scope 1-3',
    auditBody: 'Bureau Veritas Quality International',
    verificationHash: '0x3C41...GHG-2026',
  },
  {
    index: '03',
    title: 'End-of-life material recovery',
    summary: 'Zephyr mandates a minimum 95% lifecycle material-recovery baseline, incorporating circular thermoplastic bio-resins across all new ZP-15 rotor blade systems.',
    source: 'Lifecycle Bill of Materials (BOM)',
    cadence: 'Commissioning & Closeout Audit',
    image: DoggerImage,
    standard: 'EN 15804+A2 Environmental EPD',
    auditBody: 'TÜV Rheinland Energy & Environment',
    verificationHash: '0x7B19...EPD-2026',
  },
  {
    index: '04',
    title: 'Levelized cost of energy (LCOE)',
    summary: 'Published LCOE metrics represent unsubsidized, all-in lifecycle costs including capital expenditure, balance-of-plant, marine logistics, scheduled maintenance, and decommissioning reserves.',
    source: 'Unsubsidized Financial Fleet Model',
    cadence: 'Quarterly Revaluation',
    image: AtlanticImage,
    standard: 'IRENA Renewable Power Cost Methodology',
    auditBody: 'Ernst & Young Infrastructure Advisory',
    verificationHash: '0x5A88...LCOE-2026',
  },
];

export function TransparencySection() {
  const [activeItem, setActiveItem] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = disclosures[activeItem];

  return (
    <section id="transparency" aria-labelledby="transparency-heading" className="border-b border-border-strong bg-surface-soft">
      <Container className="py-14 tablet:py-20 desktop:py-24">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
              <p className="font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-black">
                Governance & Methodology
              </p>
            </div>
            <h2
              id="transparency-heading"
              className="mt-3 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-medium uppercase leading-[0.95] tracking-[-0.03em] text-black"
            >
              Claims require evidence
            </h2>
          </div>

          <p className="max-w-[42ch] font-sans text-[0.875rem] leading-[1.6] text-text-secondary">
            Every published engineering metric is grounded in verifiable audit trails, independent certifications, and empirical operating datasets.
          </p>
        </div>

        {/* Interactive Audit & Disclosure Registry */}
        <div className="mt-10 grid grid-cols-1 gap-8 desktop:grid-cols-12 desktop:gap-10">
          
          {/* Left Column: Interactive Audit List (6 cols) */}
          <div className="flex flex-col justify-between border-t border-border-strong desktop:col-span-6">
            <div>
              <p className="border-b border-border py-3 font-mono text-[0.625rem] uppercase tracking-wider text-text-secondary">
                Audited Verification Dossiers [01—04]
              </p>

              <div className="flex flex-col divide-y divide-border">
                {disclosures.map((item, index) => {
                  const isSelected = activeItem === index;
                  return (
                    <button
                      key={item.index}
                      onClick={() => setActiveItem(index)}
                      className={`btn-tactile group flex items-start gap-4 py-4 text-left transition-colors ${
                        isSelected ? 'bg-white px-3.5 shadow-sm' : 'hover:bg-white/50 hover:px-2'
                      }`}
                    >
                      <span className={`font-mono text-[0.75rem] font-bold ${isSelected ? 'text-primary' : 'text-text-secondary'}`}>
                        {item.index}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-display text-[1.125rem] font-medium uppercase tracking-tight text-black">
                            {item.title}
                          </h3>
                          <span className={`h-1.5 w-1.5 ${isSelected ? 'bg-primary' : 'bg-transparent'}`} />
                        </div>
                        <p className="mt-1 font-sans text-[0.8125rem] text-text-secondary line-clamp-2">
                          {item.summary}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 border border-border bg-white p-4">
              <span className="font-mono text-[0.625rem] uppercase text-text-secondary">Compliance Framework</span>
              <p className="mt-1 font-mono text-[0.75rem] font-bold text-black uppercase">
                Third-Party Auditing: DNV · IEC · ISO 14064 · TÜV Rheinland
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Certification Preview & Visual Plate (6 cols) */}
          <div className="desktop:col-span-6">
            <div className="border border-border-strong bg-white">
              
              {/* Visual Plate Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.index}
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

                <div className="absolute left-3 top-3 border border-white/20 bg-black/80 px-3 py-1 text-white backdrop-blur-md">
                  <span className="font-mono text-[0.625rem] font-bold uppercase text-primary">
                    Dossier {current.index} / Active Certificate
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="font-mono text-[0.5625rem] uppercase text-white/70">Certified Standard</span>
                  <p className="font-mono text-[0.875rem] font-bold text-white uppercase">{current.standard}</p>
                </div>
              </div>

              {/* Certificate Verification Details Card */}
              <div className="p-5">
                <div className="grid grid-cols-2 gap-4 border-b border-border pb-4 font-mono text-[0.6875rem] uppercase">
                  <div>
                    <span className="block text-text-secondary">Auditing Body</span>
                    <span className="mt-0.5 block font-bold text-black">{current.auditBody}</span>
                  </div>
                  <div>
                    <span className="block text-text-secondary">Review Cadence</span>
                    <span className="mt-0.5 block font-bold text-black">{current.cadence}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="block font-mono text-[0.5625rem] uppercase text-text-secondary">Registry Hash</span>
                    <span className="font-mono text-[0.6875rem] font-bold text-primary">{current.verificationHash}</span>
                  </div>

                  <a
                    href="mailto:compliance@zephyr-energy.com?subject=Methodology%20Audit%20Request"
                    className="btn-tactile inline-flex min-h-9 items-center justify-center bg-black px-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.02em] text-white hover:bg-primary"
                  >
                    Request Full Dossier →
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
