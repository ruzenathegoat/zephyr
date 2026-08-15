import { createContext, useContext } from 'react';
import type Lenis from 'lenis';

export interface SmoothScrollContextValue {
  lenis: Lenis | null;
  stopScrolling: () => void;
  startScrolling: () => void;
}

export const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  lenis: null,
  stopScrolling: () => undefined,
  startScrolling: () => undefined,
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);
