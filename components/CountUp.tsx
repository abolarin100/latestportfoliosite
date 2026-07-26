"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a numeric prefix (e.g. "83" in "83%", "5" in "5k+") counting up
 * from 0 every time the element scrolls into view. Non-numeric characters
 * (%, +, k, decimals) are preserved and just tacked back on.
 */
export function CountUp({ value, duration = 900 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value.replace(/[\d.]/g, (c) => (c === "." ? "." : "0")));
  const frame = useRef<number>();

  const match = value.match(/^(\d+(\.\d+)?)/);
  const numeric = match ? parseFloat(match[1]) : null;
  const decimals = match?.[1].includes(".") ? match[1].split(".")[1].length : 0;
  const suffix = numeric !== null ? value.slice(match![1].length) : "";

  useEffect(() => {
    const el = ref.current;
    if (!el || numeric === null) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const start = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          const current = numeric * eased;
          setDisplay(`${current.toFixed(decimals)}${suffix}`);
          if (progress < 1) {
            frame.current = requestAnimationFrame(animate);
          }
        };
        if (frame.current) cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(animate);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame.current) cancelAnimationFrame(frame.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (numeric === null) {
    return <span ref={ref}>{value}</span>;
  }

  return <span ref={ref}>{display}</span>;
}
