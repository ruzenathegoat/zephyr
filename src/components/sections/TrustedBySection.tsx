import React, { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Container } from '../ui/Container';

const zephyrEase = [0.23, 1, 0.32, 1] as const;

/* ═══════════════════════════════════════════════════════
   Inline SVG Partner Logos — clean recognizable marks
   ═══════════════════════════════════════════════════════ */

function ShellLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 40" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Shell pecten shape + wordmark */}
      <path d="M20 4 C20 4, 14 8, 12 14 C10 20, 12 28, 20 32 C28 28, 30 20, 28 14 C26 8, 20 4, 20 4Z" fill="none" stroke="currentColor" strokeWidth="1.8"/>
      <line x1="20" y1="6" x2="20" y2="30" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
      <line x1="14" y1="10" x2="26" y2="26" stroke="currentColor" strokeWidth="0.6" opacity="0.4"/>
      <line x1="26" y1="10" x2="14" y2="26" stroke="currentColor" strokeWidth="0.6" opacity="0.4"/>
      <text x="42" y="23" fontSize="11" fontFamily="'Encode Sans', sans-serif" fontWeight="700" letterSpacing="0.5">SHELL</text>
    </svg>
  );
}

function SiemensLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <text x="6" y="26" fontSize="14" fontFamily="'Encode Sans', sans-serif" fontWeight="700" letterSpacing="1">SIEMENS</text>
      <line x1="6" y1="31" x2="114" y2="31" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function OrstedLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 40" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Ørsted circle mark */}
      <circle cx="16" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="16" cy="20" r="3" fill="currentColor"/>
      <text x="32" y="25" fontSize="13" fontFamily="'Encode Sans', sans-serif" fontWeight="700" letterSpacing="0.3">Ørsted</text>
    </svg>
  );
}

function DnvLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 70 40" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* DNV bold monogram */}
      <rect x="4" y="8" width="62" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8"/>
      <text x="35" y="25" textAnchor="middle" fontSize="15" fontFamily="'Encode Sans', sans-serif" fontWeight="800" letterSpacing="3">DNV</text>
    </svg>
  );
}

function EquinorLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 110 40" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Equinor star mark */}
      <polygon points="14,6 16,14 24,14 18,19 20,27 14,22 8,27 10,19 4,14 12,14" fill="currentColor" opacity="0.85"/>
      <text x="30" y="25" fontSize="13" fontFamily="'Encode Sans', sans-serif" fontWeight="700" letterSpacing="0.3">EQUINOR</text>
    </svg>
  );
}

function VattenfallLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 130 40" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Vattenfall lightning bolt */}
      <path d="M10 8 L18 18 L13 18 L20 32 L12 22 L17 22 L10 8Z" fill="currentColor"/>
      <text x="28" y="25" fontSize="12" fontFamily="'Encode Sans', sans-serif" fontWeight="700" letterSpacing="0.5">VATTENFALL</text>
    </svg>
  );
}

function RweLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 70 40" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* RWE bold block */}
      <rect x="4" y="10" width="62" height="20" rx="2" fill="currentColor" opacity="0.12"/>
      <text x="35" y="25" textAnchor="middle" fontSize="16" fontFamily="'Encode Sans', sans-serif" fontWeight="800" letterSpacing="4">RWE</text>
    </svg>
  );
}

function TennetLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 40" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* TenneT — distinctive double-T */}
      <text x="6" y="26" fontSize="14" fontFamily="'Encode Sans', sans-serif" fontWeight="700" letterSpacing="0.5">TenneT</text>
      <line x1="6" y1="8" x2="94" y2="8" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="6" y1="32" x2="94" y2="32" stroke="currentColor" strokeWidth="1"/>
    </svg>
  );
}

/* ─── Partner data ─── */
const partners = [
  { id: 'shell', Logo: ShellLogo, descriptor: 'Energy & Trading' },
  { id: 'siemens', Logo: SiemensLogo, descriptor: 'OEM Technology Partner' },
  { id: 'orsted', Logo: OrstedLogo, descriptor: 'Offshore Wind Developer' },
  { id: 'dnv', Logo: DnvLogo, descriptor: 'Maritime Classification' },
  { id: 'equinor', Logo: EquinorLogo, descriptor: 'Energy Major' },
  { id: 'vattenfall', Logo: VattenfallLogo, descriptor: 'Power Generation' },
  { id: 'rwe', Logo: RweLogo, descriptor: 'Offshore Infrastructure' },
  { id: 'tennet', Logo: TennetLogo, descriptor: 'Transmission System Operator' },
];

function PartnerMark({ Logo, descriptor }: { Logo: React.FC<{ className?: string }>; descriptor: string }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-2 px-10 py-3 select-none shrink-0">
      <Logo className="h-10 w-auto text-black/25 transition-colors duration-300 group-hover:text-black" />
      <span className="font-mono text-[0.5rem] uppercase tracking-wider text-transparent transition-colors duration-300 group-hover:text-text-secondary">
        {descriptor}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   Main Section
   ═══════════════════════════════════════════════════════ */

export function TrustedBySection() {
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const animRef = useRef<Animation | null>(null);

  // Web Animations API for buttery-smooth infinite marquee
  useEffect(() => {
    const track = trackRef.current;
    if (!track || reduceMotion) return;

    const totalWidth = track.scrollWidth / 2;

    const anim = track.animate(
      [
        { transform: 'translateX(0)' },
        { transform: `translateX(-${totalWidth}px)` },
      ],
      {
        duration: 40000,
        iterations: Infinity,
        easing: 'linear',
      }
    );

    animRef.current = anim;
    return () => anim.cancel();
  }, [reduceMotion]);

  // Smooth hover deceleration
  useEffect(() => {
    if (!animRef.current) return;
    animRef.current.playbackRate = isHovered ? 0.12 : 1;
  }, [isHovered]);

  return (
    <section aria-label="Trusted by leading energy organizations" className="border-b border-border bg-white">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: zephyrEase }}
          className="py-10 tablet:py-12"
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-border" />
            <span className="font-mono text-[0.625rem] font-bold uppercase tracking-widest text-text-secondary shrink-0">
              Trusted by Industry Leaders
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Marquee Track */}
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

            <div ref={trackRef} className="flex items-center whitespace-nowrap will-change-transform">
              {/* Duplicate set for seamless loop */}
              {[...partners, ...partners].map((p, i) => (
                <PartnerMark key={`${p.id}-${i}`} Logo={p.Logo} descriptor={p.descriptor} />
              ))}
            </div>
          </div>

          {/* Micro-stat strip */}
          <div className="mt-8 flex items-center justify-center gap-8 font-mono text-[0.5625rem] uppercase text-text-secondary">
            <span>8 Strategic Partners</span>
            <span className="h-3 w-px bg-border" />
            <span>3 Continents</span>
            <span className="h-3 w-px bg-border" />
            <span>$12B+ Combined Project Value</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
