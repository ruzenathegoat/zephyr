import React from 'react';

export function MetricBlock({ value, unit, label, period, className = "" }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-baseline gap-2 mb-2">
        <span className="font-mono text-[clamp(2.5rem,4vw,3.5rem)] font-medium leading-none tracking-[-0.03em] tabular-nums text-primary">
          {value}
        </span>
        {unit && (
          <span className="font-mono text-[0.6875rem] desktop:text-[0.8125rem] font-medium leading-[1.35] uppercase tracking-[0.04em] text-text-secondary">
            {unit}
          </span>
        )}
      </div>
      <div className="font-sans text-[0.875rem] leading-[1.4] text-text-secondary">
        {label}
        {period && (
          <span className="block font-mono text-[0.625rem] desktop:text-[0.75rem] uppercase tracking-[0.03em] leading-[1.4] mt-1 text-text-tertiary">
            {period}
          </span>
        )}
      </div>
    </div>
  );
}
