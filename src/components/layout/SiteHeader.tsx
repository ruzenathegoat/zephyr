import React, { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowUpRight, Menu, X, BookOpen } from 'lucide-react';
import { Container } from '../ui/Container';
import { useSmoothScroll } from '../providers/smoothScrollContext';

const navigation = [
  { index: '01', label: 'Technology', href: '#systems' },
  { index: '02', label: 'Fleet Data', href: '#performance' },
  { index: '03', label: 'Projects', href: '#projects' },
  { index: '04', label: 'Lifecycle', href: '#process' },
  { index: '05', label: 'Company', href: '#company' },
];

interface SiteHeaderProps {
  onOpenDocs?: () => void;
}

export function SiteHeader({ onOpenDocs }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('');
  const { stopScrolling, startScrolling } = useSmoothScroll();

  useEffect(() => {
    if (mobileMenuOpen) {
      stopScrolling();
    } else {
      startScrolling();
    }

    return () => startScrolling();
  }, [mobileMenuOpen, startScrolling, stopScrolling]);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) setActiveHref(`#${visibleSection.target.id}`);
      },
      { rootMargin: '-18% 0px -62% 0px', threshold: [0, 0.2, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = (href: string) => {
    setActiveHref(href);
    setMobileMenuOpen(false);
  };

  return (
    <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <header className="sticky top-0 z-50 border-b border-border-strong bg-white">
        <Container>
          <div className="grid h-16 grid-cols-[1fr_auto] items-stretch desktop:grid-cols-12">
            <a
              href="#top"
              className="group col-span-1 flex min-h-11 items-center gap-3 pr-5 desktop:col-span-3 desktop:border-r desktop:border-border"
              aria-label="Zephyr — back to top"
            >
              <span className="h-3 w-3 bg-primary transition-transform duration-base group-hover:rotate-45" aria-hidden="true" />
              <span className="font-display text-[1.125rem] font-semibold leading-none tracking-[-0.035em] text-black">
                ZEPHYR
              </span>
            </a>

            <nav className="hidden items-stretch desktop:col-span-6 desktop:flex" aria-label="Primary navigation">
              {navigation.map((item) => {
                const isActive = activeHref === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={() => setActiveHref(item.href)}
                    className={`group relative flex min-h-11 flex-1 items-center justify-center gap-2 border-r border-border px-3 font-sans text-[0.8125rem] font-medium uppercase tracking-[0.02em] transition-colors duration-fast active:scale-[0.98] focus-visible:z-10 ${
                      isActive ? 'text-primary font-semibold' : 'text-black hover:text-primary'
                    }`}
                  >
                    <span className="font-mono text-[0.625rem] font-normal text-text-tertiary" aria-hidden="true">
                      {item.index}
                    </span>
                    {item.label}
                    <span
                      className={`absolute inset-x-0 bottom-[-1px] h-0.5 origin-left bg-primary transition-transform duration-fast ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </nav>

            <div className="hidden desktop:col-span-3 desktop:flex desktop:items-stretch desktop:justify-end desktop:gap-4">
              {onOpenDocs && (
                <button
                  type="button"
                  onClick={onOpenDocs}
                  className="btn-tactile flex min-h-11 items-center gap-2 font-mono text-[0.75rem] font-bold uppercase tracking-wider text-primary hover:text-black"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Docs ↗</span>
                </button>
              )}

              <a
                href="#contact"
                className="group flex min-h-11 items-center gap-1.5 font-sans text-[0.8125rem] font-medium uppercase tracking-[0.025em] text-black transition-colors duration-fast active:scale-[0.98] hover:text-primary"
              >
                Intake Desk
                <ArrowUpRight className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>

            <Dialog.Trigger asChild>
              <button
                type="button"
                className="flex min-h-11 min-w-11 items-center justify-end text-black desktop:hidden"
                aria-label="Open navigation menu"
              >
                <span className="mr-3 font-mono text-[0.625rem] font-bold uppercase tracking-[0.04em]">Menu</span>
                <Menu className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </button>
            </Dialog.Trigger>
          </div>
        </Container>
      </header>

      <Dialog.Portal>
        <Dialog.Content className="mobile-sheet fixed inset-0 z-[70] overflow-y-auto bg-black text-white desktop:hidden">
          <Dialog.Title className="sr-only">Zephyr navigation</Dialog.Title>
          <Dialog.Description className="sr-only">
            Navigate to Zephyr technology, projects, delivery process, and methodology.
          </Dialog.Description>

          <Container className="flex min-h-[100dvh] flex-col">
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/25">
              <a href="#top" onClick={() => closeMenu('#top')} className="flex min-h-11 items-center gap-3" aria-label="Zephyr — back to top">
                <span className="h-3 w-3 bg-primary" aria-hidden="true" />
                <span className="font-display text-[1.125rem] font-semibold leading-none tracking-[-0.035em]">ZEPHYR</span>
              </a>
              <Dialog.Close asChild>
                <button type="button" className="flex min-h-11 min-w-11 items-center justify-end" aria-label="Close navigation menu">
                  <span className="mr-3 font-mono text-[0.625rem] font-bold uppercase tracking-[0.04em]">Close</span>
                  <X className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </button>
              </Dialog.Close>
            </div>

            <nav className="my-auto py-10" aria-label="Mobile navigation">
              <ul className="flex flex-col gap-6">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => closeMenu(item.href)}
                      className="group flex items-baseline gap-4 py-2 font-display text-[clamp(1.75rem,7vw,2.5rem)] font-medium uppercase leading-[0.95] tracking-[-0.03em] text-white transition-colors duration-fast active:scale-[0.98] hover:text-primary"
                    >
                      <span className="font-mono text-[0.875rem] font-bold text-primary">{item.index}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
                {onOpenDocs && (
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenDocs();
                      }}
                      className="group flex items-baseline gap-4 py-2 font-display text-[clamp(1.75rem,7vw,2.5rem)] font-medium uppercase leading-[0.95] tracking-[-0.03em] text-primary transition-colors duration-fast active:scale-[0.98]"
                    >
                      <span className="font-mono text-[0.875rem] font-bold text-white">06</span>
                      Technical Docs ↗
                    </button>
                  </li>
                )}
              </ul>
            </nav>

            <div className="border-t border-white/25 py-6">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-tactile flex min-h-12 w-full items-center justify-center bg-primary px-6 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.03em] text-white"
              >
                Project Intake Desk →
              </a>
            </div>
          </Container>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
