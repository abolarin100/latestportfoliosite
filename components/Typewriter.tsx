"use client";

import { useEffect, useState } from "react";

export function Typewriter({ text, speed = 90 }: { text: string; speed?: number }) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const effectiveSpeed = prefersReduced ? Math.min(speed, 30) : speed;

    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, effectiveSpeed);

    return () => clearInterval(id);
  }, [text, speed]);

  return (
    <span>
      {shown}
      <span
        aria-hidden="true"
        className={`ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[2px] bg-army ${
          done ? "animate-blink" : ""
        }`}
      />
    </span>
  );
}
