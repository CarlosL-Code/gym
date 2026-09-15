'use client';

import { useRef, type ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function AnimatedMain({ children }: { children: ReactNode }) {
  const root = useRef<HTMLElement>(null);
  useScrollReveal(root);
  return <main ref={root}>{children}</main>;
}
