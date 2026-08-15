import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Container } from '../ui/Container';

const zephyrEase = [0.23, 1, 0.32, 1] as const;

const inquiryTracks = [
  { index: '01', label: 'Transmission Grid Interconnect', detail: 'HVDC/HVAC subsea routing & capacity allocation' },
  { index: '02', label: 'Commercial Fleet Co-Development', detail: 'Joint venture equity & concession tender bids' },
  { index: '03', label: 'Technical Fact Sheet & Data Room', detail: 'DNV certification files & aerodynamic models' },
];

export function FinalCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-b border-border-strong bg-surface-soft">
      <Container className="py-20 tablet:py-28 desktop:py-36">
        
        {/* Section Top Border */}
        <motion.div
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45, ease: zephyrEase }}
          className="h-px origin-left bg-border-strong"
          aria-hidden="true"
        />

        {/* Section Header */}
        <div className="grid grid-cols-4 gap-x-4 pt-6 tablet:grid-cols-8 tablet:gap-x-5 desktop:grid-cols-12 desktop:gap-x-6">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, ease: zephyrEase }}
            className="col-span-4 tablet:col-span-8 desktop:col-span-12"
          >
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
              <p className="font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-black">
                Partnership & Project Intake
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: 0.05, ease: zephyrEase }}
            className="col-span-4 mt-8 tablet:col-span-8 tablet:mt-12 desktop:col-span-12 desktop:mt-16"
          >
            <h2
              id="contact-heading"
              className="font-display text-[clamp(2.5rem,6.5vw,5.5rem)] font-medium uppercase leading-[0.92] tracking-[-0.035em] text-black"
            >
              Build the next<br />
              <span className="text-primary">wind generation</span> system
            </h2>
          </motion.div>
        </div>

        {/* Main Content Grid: Balanced Left + Right with Generous Whitespace */}
        <div className="mt-16 grid grid-cols-1 gap-12 tablet:mt-20 tablet:grid-cols-8 tablet:gap-x-8 desktop:mt-24 desktop:grid-cols-12 desktop:gap-x-12">
          
          {/* Left Column: Intake Information & Tracks */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: 0.08, ease: zephyrEase }}
            className="col-span-1 flex flex-col justify-between tablet:col-span-8 desktop:col-span-6"
          >
            <div>
              <p className="font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-black">Open Collaboration Channels</p>
              <p className="mt-4 max-w-[44ch] font-sans text-[1rem] leading-[1.7] text-text-secondary">
                We work alongside transmission operators, offshore developers, and institutional capital to engineer high-yield wind infrastructure.
              </p>

              {/* Inquiry Tracks List */}
              <ul className="mt-8 divide-y divide-border border-y border-border">
                {inquiryTracks.map((track) => (
                  <li key={track.label} className="flex items-start gap-4 py-4">
                    <span className="font-mono text-[0.75rem] font-bold text-primary">{track.index}</span>
                    <div>
                      <h4 className="font-sans text-[0.875rem] font-semibold text-black">{track.label}</h4>
                      <p className="mt-0.5 font-sans text-[0.8125rem] text-text-secondary">{track.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office & SLA Badge */}
            <div className="mt-10 grid grid-cols-1 gap-6 border-t border-border-strong pt-6 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[0.625rem] uppercase text-text-secondary">Response SLA</p>
                <p className="mt-1 font-mono text-[0.875rem] font-bold text-black">&lt; 24 Business Hours</p>
              </div>
              <div>
                <p className="font-mono text-[0.625rem] uppercase text-text-secondary">Global Desk</p>
                <p className="mt-1 font-mono text-[0.875rem] font-bold text-black">Oslo, Norway (CET)</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Intake Desk Card */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: 0.12, ease: zephyrEase }}
            className="col-span-1 flex flex-col justify-between border border-border-strong bg-white p-8 tablet:col-span-8 tablet:p-10 desktop:col-span-6"
          >
            <div>
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-emerald-500" />
                  <span className="font-mono text-[0.6875rem] font-semibold uppercase text-black">Direct Intake Desk</span>
                </div>
                <span className="font-mono text-[0.625rem] uppercase text-text-secondary">Active Intake</span>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="font-mono text-[0.6875rem] uppercase text-text-secondary">Commercial & Development Inquiries</p>
                  <a
                    href="mailto:partners@zephyr-energy.com"
                    className="btn-tactile mt-2 inline-flex items-center gap-2 font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium uppercase text-black transition-colors hover:text-primary"
                  >
                    partners@zephyr-energy.com
                    <ArrowUpRight className="h-5 w-5 text-primary" />
                  </a>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="font-mono text-[0.6875rem] uppercase text-text-secondary">Technical Data Room & Compliance</p>
                  <a
                    href="mailto:compliance@zephyr-energy.com"
                    className="btn-tactile mt-2 inline-flex items-center gap-2 font-sans text-[0.9375rem] font-semibold text-black transition-colors hover:text-primary"
                  >
                    compliance@zephyr-energy.com
                    <ArrowUpRight className="h-4 w-4 text-primary" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-border-strong pt-6">
              <a
                href="mailto:partners@zephyr-energy.com?subject=Direct%20Intake%20Inquiry"
                className="group btn-tactile flex min-h-12 w-full items-center justify-center gap-3 bg-primary px-6 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.03em] text-white hover:bg-primary-hover active:scale-[0.97]"
              >
                Initiate Project Discussion
                <ArrowUpRight className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
              </a>
            </div>
          </motion.div>

        </div>

      </Container>
    </section>
  );
}
