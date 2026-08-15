import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Button({ 
  variant = "primary", 
  type = "button", 
  className = "", 
  disabled = false,
  loading = false,
  href,
  children,
  ...props 
}: any) {
  const Component = href ? 'a' : 'button';
  const additionalProps = href ? { href } : { type };

  const baseStyles = "inline-flex items-center justify-center font-sans font-medium transition-colors duration-fast disabled:pointer-events-none focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-focus-ring rounded-none";
  
  const variants = {
    primary: "bg-primary text-text-on-primary hover:bg-primary-hover active:translate-y-[1px] disabled:bg-disabled-bg disabled:text-disabled-text disabled:border-disabled-border text-[0.875rem] h-12 px-8 min-h-[44px]",
    secondary: "bg-transparent text-primary border border-primary hover:bg-primary hover:text-text-on-primary active:translate-y-[1px] disabled:border-disabled-border disabled:text-disabled-text text-[0.875rem] h-12 px-8 min-h-[44px]",
    editorial: "bg-transparent text-primary group border-b border-text-primary hover:border-primary active:translate-y-[1px] disabled:text-disabled-text disabled:border-disabled-border text-[0.875rem] py-2 min-h-[44px] min-w-[44px] inline-flex items-center gap-2",
  };

  return (
    <Component
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...additionalProps}
      {...props}
    >
      {loading ? (
        <span className="animate-pulse w-4 h-4 bg-current"></span>
      ) : (
        <>
          {children}
          {variant === 'editorial' && href && <ArrowRight className="w-4 h-4 transition-colors duration-fast group-hover:text-primary" />}
        </>
      )}
    </Component>
  );
}
