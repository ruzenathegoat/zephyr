import React from 'react';

export function Container({ className = "", children }) {
  return (
    <div
      className={`mx-auto w-full max-w-[100rem] px-5 tablet:px-8 desktop:px-12 wide:px-[72px] ${className}`}
    >
      {children}
    </div>
  );
}
