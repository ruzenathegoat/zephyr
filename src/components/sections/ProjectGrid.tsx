import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Container } from '../ui/Container';
import { ProjectDetailsModal, ProjectData } from '../ui/ProjectDetailsModal';
import { ArrowUpRight } from 'lucide-react';
import VanguardImage from '../../assets/vanguard.webp';
import BalticImage from '../../assets/baltic.webp';
import AtlanticImage from '../../assets/atlantic.webp';
import DoggerImage from '../../assets/dogger.webp';

const zephyrEase = [0.23, 1, 0.32, 1] as const;

const projects: ProjectData[] = [
  {
    code: 'PRJ / NORTH 01',
    region: 'North Sea',
    capacity: '1,200 MW',
    status: 'Operational',
    title: 'Vanguard Alpha Array',
    image: VanguardImage,
    imageSize: { width: 5561, height: 3707 },
    className: 'desktop:col-span-7',
    aspect: 'aspect-[4/3] tablet:aspect-[16/10]',
    details: {
      foundationType: 'Deepwater Monopile & XL Flange',
      turbineCount: '80 Units',
      turbineModel: 'Zephyr ZP-15 (15 MW Direct-Drive / 236m Rotor)',
      annualYield: '5,140 GWh / year (P50)',
      waterDepth: '42 — 56 meters',
      interconnection: '400 kV HVDC Subsea Export Cable',
      codYear: 'Commissioned Q2 2024',
      environmentalApproval: 'DNV Verified · OSPAR Convention Compliant',
      description: 'Vanguard Alpha is Zephyr’s flagship North Sea operating fleet array, supplying predictable base-load renewable power with 98.6% technical availability.',
    },
  },
  {
    code: 'PRJ / BALTIC 04',
    region: 'Baltic Basin',
    capacity: '850 MW',
    status: 'Commissioning',
    title: 'Øresund Stream',
    image: BalticImage,
    imageSize: { width: 5630, height: 3648 },
    className: 'desktop:col-span-5 desktop:mt-24',
    aspect: 'aspect-[4/3]',
    details: {
      foundationType: 'Gravity Base & Reinforced Scour Protection',
      turbineCount: '57 Units',
      turbineModel: 'Zephyr ZP-15 Direct-Drive Marine Edition',
      annualYield: '3,620 GWh / year',
      waterDepth: '28 — 38 meters',
      interconnection: '220 kV HVAC Direct Grid Connection',
      codYear: 'Grid Energization Q4 2026',
      environmentalApproval: 'HELCOM Baltic Sea Action Plan Certified',
      description: 'Located in the Baltic Basin, Øresund Stream delivers high-capacity shallow-water power optimized for regional European interconnections.',
    },
  },
  {
    code: 'PRJ / EAST 02',
    region: 'US Eastern Seaboard',
    capacity: '2,100 MW',
    status: 'Development',
    title: 'Atlantic Ridge Phase I',
    image: AtlanticImage,
    imageSize: { width: 5257, height: 3504 },
    className: 'desktop:col-span-5 desktop:mt-12',
    aspect: 'aspect-[4/3]',
    details: {
      foundationType: 'Floating Semi-Submersible Platform',
      turbineCount: '140 Units',
      turbineModel: 'Zephyr ZP-15 Deep Offshore Platform',
      annualYield: '8,950 GWh / year',
      waterDepth: '65 — 110 meters',
      interconnection: '525 kV HVDC High-Capacity Corridor',
      codYear: 'Target Commercial Operations 2027',
      environmentalApproval: 'BOEM Final EIS Approved · NOAA Compliant',
      description: 'A landmark deepwater floating wind project engineered to withstand Atlantic cyclone loads and supply metropolitan coastal demand.',
    },
  },
  {
    code: 'PRJ / NORTH 03',
    region: 'North Sea',
    capacity: '600 MW',
    status: 'Operational',
    title: 'Dogger Bank Extension',
    image: DoggerImage,
    imageSize: { width: 5806, height: 3871 },
    className: 'desktop:col-span-7',
    aspect: 'aspect-[4/3] tablet:aspect-[16/10]',
    details: {
      foundationType: 'Fixed Suction Bucket Jacket Foundations',
      turbineCount: '40 Units',
      turbineModel: 'Zephyr ZP-15 High-Yield Variant',
      annualYield: '2,580 GWh / year',
      waterDepth: '30 — 44 meters',
      interconnection: '320 kV HVDC Link to National Grid',
      codYear: 'Commissioned Q1 2025',
      environmentalApproval: 'Crown Estate Leasehold · IEC Class 1A Certified',
      description: 'Dogger Bank Extension integrates co-located battery synthetic inertia to stabilize regional transmission networks during extreme weather.',
    },
  },
];

export function ProjectGrid() {
  const reduceMotion = useReducedMotion();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-b border-border-strong bg-surface-soft">
      <Container className="py-16 tablet:py-24 desktop:pb-36 desktop:pt-28">
        <motion.div
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.45, ease: zephyrEase }}
          className="h-px origin-left bg-border-strong"
          aria-hidden="true"
        />

        <div className="grid grid-cols-4 gap-x-4 pt-5 tablet:grid-cols-8 tablet:gap-x-5 desktop:grid-cols-12 desktop:gap-x-6">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.4, ease: zephyrEase }}
            className="col-span-4 tablet:col-span-3 desktop:col-span-3"
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
              <p className="technical-label text-black">Active Fleet Portfolio</p>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.05, ease: zephyrEase }}
            className="col-span-4 mt-8 tablet:col-span-5 tablet:mt-0 desktop:col-span-7"
          >
            <h2
              id="projects-heading"
              className="font-display text-[clamp(2.5rem,5.5vw,4.85rem)] font-medium uppercase leading-[0.94] tracking-[-0.035em] text-black"
            >
              Wind infrastructure<br />
              built for decades
            </h2>
            <p className="mt-4 font-mono text-[0.6875rem] uppercase text-text-secondary">
              Select any project to inspect technical telemetry and fact sheet
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-16 tablet:mt-24 tablet:grid-cols-2 tablet:gap-y-20 desktop:mt-28 desktop:grid-cols-12 desktop:gap-y-28">
          {projects.map((project) => (
            <motion.article
              key={project.code}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: zephyrEase }}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Inspect technical details for ${project.title}`}
              className={`group btn-tactile cursor-pointer scroll-mt-24 text-left focus-visible:outline-2 focus-visible:outline-primary ${project.className}`}
            >
              <div className="mb-3 flex items-center justify-between border-b border-border-strong pb-2">
                <span className="font-mono text-[0.6875rem] font-bold uppercase text-primary">{project.code}</span>
                <span className="inline-flex items-center gap-1 font-mono text-[0.625rem] font-medium uppercase text-text-secondary transition-colors group-hover:text-primary">
                  Inspect Specs
                  <ArrowUpRight className="h-3 w-3 transition-transform duration-fast group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              <div className={`relative overflow-hidden bg-white ${project.aspect} border border-border`}>
                <img
                  src={project.image}
                  alt={`${project.title} wind farm in the ${project.region}`}
                  width={project.imageSize.width}
                  height={project.imageSize.height}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[400ms] ease-zephyr group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-3 left-3 bg-black/90 px-2.5 py-1 font-mono text-[0.5625rem] uppercase text-white backdrop-blur-sm">
                  {project.status}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 border-b border-border-strong py-4 tablet:grid-cols-[1fr_auto] tablet:items-end">
                <div>
                  <p className="font-mono text-[0.6875rem] uppercase text-text-secondary">{project.region} · Offshore</p>
                  <h3 className="mt-1 font-display text-[clamp(1.5rem,2.5vw,2.25rem)] font-medium uppercase leading-[1] tracking-[-0.025em] text-black transition-colors duration-fast group-hover:text-primary">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-baseline gap-2 tablet:justify-end">
                  <span className="font-mono text-[1.5rem] leading-none tracking-[-0.05em] text-black tabular-nums tablet:text-[1.85rem]">{project.capacity.split(' ')[0]}</span>
                  <span className="font-mono text-[0.6875rem] font-bold uppercase text-primary">{project.capacity.split(' ')[1]}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>

      {/* Interactive Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
