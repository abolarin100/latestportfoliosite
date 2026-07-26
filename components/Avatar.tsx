"use client";

import { useState, useEffect, useRef } from "react";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

type Status = "loading" | "loaded" | "failed";

export function Avatar({ name, size = 128 }: { name: string; size?: number }) {
  const [status, setStatus] = useState<Status>("loading");
    const imgRef = useRef<HTMLImageElement>(null);
  
    useEffect(() => {
      const el = imgRef.current;
      if (el && el.complete) {
        setStatus(el.naturalWidth > 0 ? "loaded" : "failed");
      }
    }, []);

  return (
    <div
      style={{ width: size, height: size }}
      className="relative shrink-0 overflow-hidden rounded-2xl border border-line-strong bg-army-soft"
    >
      {status === "loading" && (
        <div
          className="absolute inset-0 animate-pulse bg-fg/10"
          aria-hidden="true"
        />
      )}

      {status !== "failed" && (
        <img
        ref={imgRef}
          src="/projects/profile.jpeg"
          alt={name}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("failed")}
          className={`h-full w-full object-cover transition-opacity duration-300 ${
            status === "loaded" ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {status === "failed" && (
        <div className="flex h-full w-full items-center justify-center font-display text-[32px] font-medium text-army">
          {initials(name)}
        </div>
      )}
    </div>
  );
}
