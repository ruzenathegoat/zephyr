import React, { useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ArrowUpRight, Download, ShieldCheck, Zap, Waves, Activity } from 'lucide-react';
import { useSmoothScroll } from '../providers/smoothScrollContext';

export interface ProjectData {
  code: string;
  region: string;
  title: string;
  capacity: string;
  status: string;
  image: string;
  aspect?: string;
  className?: string;
  imageSize: { width: number; height: number };
  details?: {
    foundationType: string;
    turbineCount: string;
    turbineModel: string;
    annualYield: string;
    waterDepth: string;
    interconnection: string;
    codYear: string;
    environmentalApproval: string;
    description: string;
  };
}

interface ProjectDetailsModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  const { stopScrolling, startScrolling } = useSmoothScroll();

  // Scroll prevent for both Lenis smooth scrolling and native document body
  useEffect(() => {
    if (isOpen) {
      stopScrolling();
      document.body.style.overflow = 'hidden';
    } else {
      startScrolling();
      document.body.style.overflow = '';
    }

    return () => {
      startScrolling();
      document.body.style.overflow = '';
    };
  }, [isOpen, startScrolling, stopScrolling]);

  if (!project) return null;

  const details = project.details || {
    foundationType: 'Monopile & Jacket Structure',
    turbineCount: `${Math.round(parseInt(project.capacity.replace(/[^0-9]/g, '')) / 15)} Units`,
    turbineModel: 'Zephyr ZP-15 Direct-Drive (15 MW / 236m Rotor)',
    annualYield: '5,140 GWh / yr (P50)',
    waterDepth: '32 — 58 meters',
    interconnection: 'HVDC 320 kV Subsea Export Link',
    codYear: '2025 — 2026',
    environmentalApproval: 'DNV-ST-0145 · IEC 61400-22 Certified',
    description: `The ${project.title} offshore wind infrastructure installation delivers high-efficiency renewable energy generation into regional transmission networks using Zephyr's direct-drive turbine architecture.`,
  };

  const handleDownloadSheet = () => {
    alert(`Downloading Technical Fact Sheet (PDF) for ${project.title}...`);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        {/* Overlay backdrop with overscroll contain */}
        <Dialog.Overlay className="dialog-overlay fixed inset-0 z-[100] bg-black/65 backdrop-blur-sm overscroll-contain" />

        {/* Centered Scrollable Viewport Wrapper with scroll containment */}
        <div className="fixed inset-0 z-[101] flex items-center justify-center overflow-y-auto overscroll-contain p-3 sm:p-5 md:p-6">
          <Dialog.Content className="dialog-card relative my-auto flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden border border-border-strong bg-white shadow-2xl focus:outline-none overscroll-contain">
            
            {/* 1. Header Bar (Fixed at Top) */}
            <div className="flex shrink-0 items-center justify-between border-b border-border bg-white px-5 py-3.5 sm:px-6">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[0.6875rem] font-bold text-primary sm:text-[0.75rem]">{project.code}</span>
                <span className="h-3 w-px bg-border" aria-hidden="true" />
                <span className="font-mono text-[0.625rem] uppercase text-text-secondary sm:text-[0.6875rem]">{project.region} · Offshore</span>
              </div>
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="btn-tactile -mr-1 flex h-8 w-8 items-center justify-center border border-border/50 text-black transition-colors hover:border-black hover:bg-surface-soft active:scale-[0.95]"
                  aria-label="Close dialog"
                >
                  <X className="h-4 w-4" strokeWidth={1.75} />
                </button>
              </Dialog.Close>
            </div>

            {/* 2. Scrollable Modal Body: Compact 2-Column on Desktop */}
            <div className="overflow-y-auto overscroll-contain p-5 sm:p-6 md:p-7">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-7">
                
                {/* Left Column: Image, Metric Badges, Fact Sheet Action (5 cols) */}
                <div className="flex flex-col gap-4 md:col-span-5">
                  <div className="relative aspect-[16/10] w-full overflow-hidden border border-border bg-surface-soft">
                    <img
                      src={project.image}
                      alt={`${project.title} offshore installation`}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/85 px-2 py-0.5 font-mono text-[0.5625rem] uppercase text-white backdrop-blur-sm">
                      Verified Fleet Plate
                    </div>
                  </div>

                  {/* Capacity & Status Row */}
                  <div className="flex items-center justify-between border border-border bg-surface-soft p-3">
                    <span className="bg-black px-2 py-0.5 font-mono text-[0.625rem] uppercase text-white">
                      {project.status}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-mono text-[1.125rem] font-bold leading-none tracking-[-0.03em] text-black tabular-nums">{project.capacity.split(' ')[0]}</span>
                      <span className="font-mono text-[0.625rem] font-bold uppercase text-primary">{project.capacity.split(' ')[1]}</span>
                    </div>
                  </div>

                  {/* Fact Sheet Download Action */}
                  <button
                    type="button"
                    onClick={handleDownloadSheet}
                    className="btn-tactile inline-flex w-full items-center justify-center gap-2 border border-border bg-white py-2.5 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.02em] text-black hover:border-black hover:bg-surface-hover active:scale-[0.98]"
                  >
                    <Download className="h-3.5 w-3.5 text-primary" strokeWidth={1.5} />
                    Download Fact Sheet (PDF)
                  </button>
                </div>

                {/* Right Column: Title, Description, Telemetry Matrix, Inquiry CTA (7 cols) */}
                <div className="flex flex-col justify-between md:col-span-7">
                  <div>
                    <Dialog.Title className="font-display text-[clamp(1.35rem,2.5vw,2rem)] font-medium uppercase leading-[0.98] tracking-[-0.03em] text-black">
                      {project.title}
                    </Dialog.Title>
                    <Dialog.Description className="mt-2 font-sans text-[0.8125rem] leading-relaxed text-text-secondary sm:text-[0.875rem]">
                      {details.description}
                    </Dialog.Description>

                    {/* Specification Matrix */}
                    <div className="mt-5 border-t border-border pt-4">
                      <h4 className="font-mono text-[0.625rem] font-bold uppercase tracking-wider text-primary">
                        Technical Specification Matrix
                      </h4>
                      <dl className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        
                        <div className="border border-border bg-surface-soft/60 p-2.5">
                          <dt className="flex items-center gap-1.5 font-mono text-[0.625rem] uppercase text-text-secondary">
                            <Zap className="h-3 w-3 text-primary" strokeWidth={1.5} />
                            Turbine System
                          </dt>
                          <dd className="mt-1 font-sans text-[0.75rem] font-semibold text-black sm:text-[0.8125rem]">
                            {details.turbineModel}
                          </dd>
                        </div>

                        <div className="border border-border bg-surface-soft/60 p-2.5">
                          <dt className="flex items-center gap-1.5 font-mono text-[0.625rem] uppercase text-text-secondary">
                            <Waves className="h-3 w-3 text-primary" strokeWidth={1.5} />
                            Foundation & Depth
                          </dt>
                          <dd className="mt-1 font-sans text-[0.75rem] font-semibold text-black sm:text-[0.8125rem]">
                            {details.foundationType} ({details.waterDepth})
                          </dd>
                        </div>

                        <div className="border border-border bg-surface-soft/60 p-2.5">
                          <dt className="flex items-center gap-1.5 font-mono text-[0.625rem] uppercase text-text-secondary">
                            <Activity className="h-3 w-3 text-primary" strokeWidth={1.5} />
                            Annual Energy Yield
                          </dt>
                          <dd className="mt-1 font-sans text-[0.75rem] font-semibold text-black sm:text-[0.8125rem]">
                            {details.annualYield}
                          </dd>
                        </div>

                        <div className="border border-border bg-surface-soft/60 p-2.5">
                          <dt className="flex items-center gap-1.5 font-mono text-[0.625rem] uppercase text-text-secondary">
                            <ShieldCheck className="h-3 w-3 text-primary" strokeWidth={1.5} />
                            Certification
                          </dt>
                          <dd className="mt-1 font-sans text-[0.75rem] font-semibold text-black sm:text-[0.8125rem]">
                            {details.environmentalApproval}
                          </dd>
                        </div>

                      </dl>
                    </div>
                  </div>

                  {/* Primary Project Inquiry Action */}
                  <div className="mt-5 border-t border-border pt-4">
                    <a
                      href={`mailto:partners@zephyr-energy.com?subject=Project%20Inquiry%20-%20${encodeURIComponent(project.title)}`}
                      className="btn-tactile inline-flex w-full items-center justify-center gap-2 bg-primary py-2.5 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.025em] text-white hover:bg-primary-hover active:scale-[0.98]"
                    >
                      Inquire Project Data & Grid Access
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
