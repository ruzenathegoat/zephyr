import React, { forwardRef } from 'react';

export interface DitherImageProps {
  metadata?: string;
  caption?: string;
  sparseSrcDesktop: string;
  fullSrcDesktop: string;
  sparseSrcTablet?: string;
  fullSrcTablet?: string;
  sparseSrcMobile?: string;
  fullSrcMobile?: string;
  alt: string;
}

export const DitherImage = forwardRef<HTMLDivElement, DitherImageProps>(({
  metadata,
  caption,
  sparseSrcDesktop,
  fullSrcDesktop,
  sparseSrcTablet,
  fullSrcTablet,
  sparseSrcMobile,
  fullSrcMobile,
  alt
}, ref) => {
  return (
    <div className="flex flex-col w-full" ref={ref}>
      {/* Metadata Row */}
      {metadata && (
        <div className="dither-metadata flex items-center justify-between border-b border-border pb-2 mb-3">
          <span className="font-mono text-[11px] desktop:text-[13px] font-medium uppercase tracking-[0.04em] leading-[1.35] text-text-secondary">
            {metadata}
          </span>
          {/* Optional registration mark */}
          <span className="font-mono text-[10px] text-border-strong">+</span>
        </div>
      )}

      {/* Image Container */}
      <div className="dither-media-container relative w-full overflow-hidden bg-canvas aspect-[16/10] tablet:aspect-[16/9] desktop:aspect-[4/3]">
        {/* Sparse Layer (Base) */}
        <picture className="absolute inset-0 w-full h-full object-cover">
          <source media="(min-width: 1024px)" srcSet={sparseSrcDesktop} />
          {sparseSrcTablet && <source media="(min-width: 768px)" srcSet={sparseSrcTablet} />}
          <img 
            src={sparseSrcMobile || sparseSrcDesktop} 
            alt={alt} 
            className="w-full h-full object-cover"
          />
        </picture>

        {/* Full Layer (Overlay with stepped mask controlled by inline style var) */}
        <picture 
          className="dither-full-layer absolute inset-0 w-full h-full object-cover"
          style={{ 
            maskImage: 'linear-gradient(to right, black var(--dither-progress, 0%), transparent var(--dither-progress, 0%))',
            WebkitMaskImage: 'linear-gradient(to right, black var(--dither-progress, 0%), transparent var(--dither-progress, 0%))',
          }}
        >
          <source media="(min-width: 1024px)" srcSet={fullSrcDesktop} />
          {fullSrcTablet && <source media="(min-width: 768px)" srcSet={fullSrcTablet} />}
          <img 
            src={fullSrcMobile || fullSrcDesktop} 
            alt={`${alt} (detailed)`} 
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      {/* Caption */}
      {caption && (
        <div className="dither-caption mt-3">
          <p className="font-mono text-[11px] desktop:text-[13px] text-text-tertiary leading-[1.4] max-w-[42ch]">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
});

DitherImage.displayName = 'DitherImage';
