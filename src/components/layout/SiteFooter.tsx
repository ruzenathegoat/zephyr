import React from 'react';
import { ArrowRight, ArrowUp, BookOpen } from 'lucide-react';
import { Container } from '../ui/Container';

interface SiteFooterProps {
  onOpenDocs?: () => void;
}

const footerNavigation = [
  { index: '01', label: 'Platform Architecture', href: '#systems' },
  { index: '02', label: 'Fleet Telemetry', href: '#performance' },
  { index: '03', label: 'Live Projects', href: '#projects' },
  { index: '04', label: 'Deployment Lifecycle', href: '#process' },
  { index: '05', label: 'Company Track Record', href: '#company' },
];

export function SiteFooter({ onOpenDocs }: SiteFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" aria-labelledby="footer-heading" className="overflow-hidden bg-black text-white">
      <Container>
        <div className="grid grid-cols-4 border-b border-white/25 py-12 tablet:grid-cols-8 tablet:py-16 desktop:grid-cols-12 desktop:py-20">
          <div className="col-span-4 mb-10 tablet:col-span-3 tablet:mb-0 desktop:col-span-4">
            <p className="font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-primary">
              Zephyr Energy Systems AS
            </p>
          </div>

          <div className="col-span-4 tablet:col-span-5 desktop:col-span-8">
            <h2
              id="footer-heading"
              className="font-display text-[clamp(2.75rem,6vw,5.75rem)] font-medium uppercase leading-[0.93] tracking-[-0.04em] text-white"
            >
              Built for weather.<br />
              Engineered for decades.
            </h2>
          </div>
        </div>

        <div className="border-b border-white/25 py-6 tablet:py-8" aria-label="Zephyr">
          <p className="select-none whitespace-nowrap font-display text-[clamp(5.25rem,18vw,17rem)] font-semibold uppercase leading-[0.7] tracking-[-0.065em] text-white">
            Zephyr
          </p>
        </div>

        <div className="grid grid-cols-1 border-b border-white/25 desktop:grid-cols-12">
          <nav className="desktop:col-span-7 desktop:pr-10" aria-label="Footer navigation">
            {footerNavigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group grid min-h-[68px] grid-cols-[3rem_1fr_auto] items-center border-b border-white/25 py-4 transition-transform duration-fast active:scale-[0.98] last:border-b-0 desktop:min-h-[76px]"
              >
                <span className="font-mono text-[0.6875rem] font-bold text-primary">{item.index}</span>
                <span className="font-sans text-[0.875rem] font-medium uppercase tracking-[0.02em] text-white transition-colors duration-fast group-hover:text-primary">
                  {item.label}
                </span>
                <ArrowRight className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-1" strokeWidth={1.5} aria-hidden="true" />
              </a>
            ))}
          </nav>

          <div className="border-t border-white/25 p-6 desktop:col-span-5 desktop:border-l desktop:border-t-0 desktop:border-white/25 desktop:p-10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[0.625rem] uppercase text-primary font-bold">Engineering Governance</span>
              <p className="mt-2 font-display text-[1.25rem] font-medium uppercase text-white">
                Technical Dossier & Compliance
              </p>
              <p className="mt-2 font-sans text-[0.8125rem] leading-[1.6] text-white/70">
                Explore complete electromechanical parameters, DNV audit verifications, and ISO 14064 avoided-emission accounting baselines.
              </p>
            </div>

            {onOpenDocs && (
              <button
                type="button"
                onClick={onOpenDocs}
                className="btn-tactile mt-6 inline-flex items-center justify-between border border-white/40 bg-zinc-900 p-4 font-mono text-[0.75rem] uppercase text-white hover:border-primary hover:text-primary"
              >
                <span className="flex items-center gap-2 font-bold">
                  <BookOpen className="h-4 w-4 text-primary" />
                  Open Technical Documentation
                </span>
                <span>↗</span>
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 py-6 tablet:grid-cols-[1fr_auto] tablet:items-center desktop:py-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[0.625rem] uppercase leading-[1.4] text-white/60">
            <p>
              © <time dateTime={String(currentYear)}>{currentYear}</time> Zephyr Energy Systems AS (Oslo, Norway)
            </p>
            <a href="mailto:legal@zephyr-energy.com?subject=Privacy%20enquiry" className="transition-colors duration-base hover:text-white">
              Privacy
            </a>
            <a href="mailto:legal@zephyr-energy.com?subject=Terms%20enquiry" className="transition-colors duration-base hover:text-white">
              Terms
            </a>
          </div>

          <a
            href="#top"
            className="group inline-flex min-h-11 items-center gap-3 justify-self-start font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.025em] text-white transition-colors duration-base hover:text-primary tablet:justify-self-end"
          >
            Return to top
            <ArrowUp className="h-4 w-4 transition-transform duration-base group-hover:-translate-y-1" strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
