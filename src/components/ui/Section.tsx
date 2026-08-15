import React, { forwardRef, ReactNode } from 'react';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "quiet" | "ruled" | "feature";
  children?: ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(({ variant = "default", className = "", id, children, ...props }, ref) => {
  const baseStyles = "w-full";
  
  // - `section-quiet`: separation created with whitespace only.
  // - `section-ruled`: full-width top or bottom divider.
  // - `section-grid`: internal 1px panel dividers.
  // - `section-feature`: larger vertical spacing and dominant imagery.
  
  const variants = {
    default: "py-20 desktop:py-[clamp(80px,9vw,144px)]",
    quiet: "py-16 desktop:py-[64px]",
    ruled: "py-20 desktop:py-[clamp(80px,9vw,144px)] border-t border-border",
    feature: "py-28 desktop:py-[clamp(112px,12vw,192px)]",
  };

  return (
    <section ref={ref} id={id} className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </section>
  );
});

Section.displayName = "Section";
