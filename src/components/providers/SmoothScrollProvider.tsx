import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { SmoothScrollContext } from './smoothScrollContext';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.1,
      wheelMultiplier: 1,
      smoothWheel: true,
      syncTouch: false,
      respectReducedMotion: true,
    });

    lenisRef.current = lenisInstance;
    setLenis(lenisInstance);

    const initialHashFrame = window.requestAnimationFrame(() => {
      const targetId = decodeURIComponent(window.location.hash.slice(1));
      const target = targetId ? document.getElementById(targetId) : null;

      if (target) lenisInstance.scrollTo(target, { immediate: true });
    });

    return () => {
      window.cancelAnimationFrame(initialHashFrame);
      lenisInstance.destroy();
      lenisRef.current = null;
      document.documentElement.style.overflow = '';
    };
  }, []);

  const stopScrolling = useCallback(() => {
    lenisRef.current?.stop();
    document.documentElement.style.overflow = 'hidden';
  }, []);

  const startScrolling = useCallback(() => {
    lenisRef.current?.start();
    document.documentElement.style.overflow = '';
  }, []);

  const contextValue = useMemo(
    () => ({ lenis, stopScrolling, startScrolling }),
    [lenis, startScrolling, stopScrolling],
  );

  return <SmoothScrollContext.Provider value={contextValue}>{children}</SmoothScrollContext.Provider>;
}
