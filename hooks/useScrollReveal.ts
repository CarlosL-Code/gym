'use client';

import { useEffect, type RefObject } from 'react';

/** Replays only after an element fully leaves the viewport, in either direction. */
export function useScrollReveal(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = root.current;
    if (!container || !('IntersectionObserver' in window)) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const elements = Array.from(container.querySelectorAll<HTMLElement>(
      '.about > div:not(.features), .features article, .section-heading, .plan, .schedule > div, .community, .rules, .location > div, .location iframe'
    ));
    let observer: IntersectionObserver | undefined;
    const reset = () => {
      observer?.disconnect();
      elements.forEach(element => {
        delete element.dataset.reveal;
        element.style.removeProperty('--reveal-offset');
        element.style.removeProperty('--reveal-delay');
      });
    };
    const setup = () => {
      reset();
      if (preference.matches) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(({ target, isIntersecting, boundingClientRect }) => {
          const element = target as HTMLElement;
          if (isIntersecting) {
            element.dataset.reveal = 'visible';
          } else {
            // A downward offset on entry from below; an upward offset from above.
            element.style.setProperty('--reveal-offset', boundingClientRect.top < 0 ? '-30px' : '30px');
            element.dataset.reveal = 'waiting';
          }
        });
      }, { threshold: 0 });
      elements.forEach(element => {
        const bounds = element.getBoundingClientRect();
        const offscreen = bounds.top >= window.innerHeight || bounds.bottom <= 0;
        element.dataset.reveal = offscreen ? 'waiting' : 'visible';
        element.style.setProperty('--reveal-offset', bounds.top < 0 ? '-30px' : '30px');
        if (element.matches('.plan, .features article')) {
          const index = Array.from(element.parentElement!.children).indexOf(element);
          element.style.setProperty('--reveal-delay', `${index * 75}ms`);
        }
        observer!.observe(element);
      });
    };
    setup();
    preference.addEventListener('change', setup);
    return () => { reset(); preference.removeEventListener('change', setup); };
  }, [root]);
}
