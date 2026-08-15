import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function ProjectCard({ id, region, capacity, status, title, href, image, imageAspect = "aspect-[16/10]" }: any) {
  // static cards do not have interactive hover states, interactive cards change border to border-strong.
  const isInteractive = Boolean(href);
  
  const CardWrapper = isInteractive ? 'a' : 'div';
  const wrapperProps = isInteractive ? { href, className: "block group transition-colors duration-fast border border-transparent hover:border-border-strong p-4 -m-4" } : { className: "block p-4 -m-4 border border-transparent" };

  return (
    <CardWrapper {...wrapperProps}>
      {image ? (
        <div className={`relative w-full ${imageAspect} mb-6 overflow-hidden`}>
          <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      ) : (
        <div className={`relative w-full ${imageAspect} mb-6 overflow-hidden bg-canvas border border-border`} />
      )}
      
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <span className="font-mono font-medium text-[0.6875rem] desktop:text-[0.8125rem] tabular-nums text-text-primary">{id}</span>
          <span className="font-mono font-normal text-[0.625rem] desktop:text-[0.75rem] uppercase tracking-[0.03em] border border-border px-2 py-1 text-text-secondary">{status}</span>
        </div>
        
        <div>
          <h3 className="font-sans text-[1.125rem] desktop:text-[1.375rem] font-medium leading-[1.3] tracking-[-0.01em] text-primary mb-1">
            {title}
          </h3>
          <p className="font-sans text-[0.8125rem] desktop:text-[0.875rem] leading-[1.5] text-text-secondary">
            {region} - {capacity}
          </p>
        </div>
        
        {isInteractive && (
          <div className="mt-2 flex items-center font-sans text-[0.875rem] font-medium text-primary">
            View Project Details
            <ArrowUpRight className="ml-2 w-4 h-4 transition-transform duration-fast group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          </div>
        )}
      </div>
    </CardWrapper>
  );
}
