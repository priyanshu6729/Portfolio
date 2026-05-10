'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * Intersection Observer hook — fires once when element enters viewport.
 * @param {number} threshold - visibility ratio to trigger (0–1)
 * @returns {[React.RefObject, boolean]}
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}
