"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "up" | "down" | "left" | "right" | "scale" | "blur";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: Variant;
  /** Fraction of the element that must be visible before it animates in. */
  threshold?: number;
}

const HIDDEN: Record<Variant, string> = {
  up: "opacity-0 translate-y-8",
  down: "opacity-0 -translate-y-8",
  left: "opacity-0 translate-x-10",
  right: "opacity-0 -translate-x-10",
  scale: "opacity-0 scale-90",
  blur: "opacity-0 blur-sm",
};

const VISIBLE = "opacity-100 translate-y-0 translate-x-0 scale-100 blur-none";

/**
 * Fades/slides content in whenever it scrolls into view — and reverses
 * back to hidden when it scrolls out, so the animation replays every
 * time the section re-enters the viewport (not just on first mount).
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "up",
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out ${
        visible ? VISIBLE : HIDDEN[variant]
      } ${className}`}
    >
      {children}
    </div>
  );
}
