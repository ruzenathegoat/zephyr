import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border-t border-border w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-border">
            <button
              type="button"
              className="flex w-full items-center justify-between py-6 text-left focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              onClick={() => handleToggle(index)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${index}`}
              id={`accordion-header-${index}`}
            >
              <span className="font-sans text-[1.125rem] desktop:text-[1.375rem] font-medium leading-[1.3] tracking-[-0.01em] text-primary pr-8">
                {item.title}
              </span>
              <span className="shrink-0 text-primary">
                {isOpen ? <Minus className="w-5 h-5" strokeWidth={1.5} /> : <Plus className="w-5 h-5" strokeWidth={1.5} />}
              </span>
            </button>
            
            <div
              id={`accordion-content-${index}`}
              role="region"
              aria-labelledby={`accordion-header-${index}`}
              className={`overflow-hidden transition-all duration-base ease-zephyr ${isOpen ? 'max-h-[1000px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
            >
              <div className="font-sans text-[1rem] desktop:text-[1.125rem] leading-[1.65] text-text-secondary max-w-[65ch]">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
