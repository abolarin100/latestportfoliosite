"use client";

import { useEffect, useRef, useState } from "react";
import { ImageIcon } from "./icons";

interface ProjectImageProps {
  src: string;
  alt: string;
  frame: "web" | "mobile";
  featured?: boolean;
}

export function ProjectImage({
  src,
  alt,
  frame,
  featured = false,
}: ProjectImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "failed">(
    "loading",
  );
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete) {
      setStatus(el.naturalWidth > 0 ? "loaded" : "failed");
    }
  }, [src]);

  const placeholder = (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-fg/[0.03] px-4 text-center">
      <ImageIcon className="h-6 w-6 text-fg-muted" />
      <p className="font-mono text-[11px] text-fg-muted">
        Drop a screenshot at
        <br />
        <span className="text-fg-soft">{src}</span>
      </p>
    </div>
  );

  const image = (
    <>
      {status === "loading" && (
        <div
          className="absolute inset-0 animate-pulse bg-fg/[0.04]"
          aria-hidden="true"
        />
      )}
      {status !== "failed" && (
        
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("failed")}
          className={`h-full w-full object-cover transition-opacity duration-300 ${
            status === "loaded" ? "opacity-100" : "opacity-0 absolute inset-0"
          }`}
        />
      )}
      {status === "failed" && placeholder}
    </>
  );

  if (frame === "mobile") {
    return (
      <div
        className={`relative mx-auto w-full ${featured ? "max-w-[220px]" : "max-w-[160px]"}`}
      >
        <div className="relative overflow-hidden rounded-[28px] border-[6px] border-fg/80 bg-fg/80 shadow-sm">
          <div className="absolute left-1/2 top-0 z-10 h-4 w-16 -translate-x-1/2 rounded-b-lg bg-fg/80" />
          <div
            className={`relative w-full overflow-hidden bg-bg ${featured ? "aspect-[9/17]" : "aspect-[9/18]"}`}
          >
            {image}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-line-strong">
      <div className="flex items-center gap-1.5 bg-fg/[0.06] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-fg/20" />
        <span className="h-2 w-2 rounded-full bg-fg/20" />
        <span className="h-2 w-2 rounded-full bg-fg/20" />
      </div>
      <div
        className={`relative w-full overflow-hidden bg-bg ${featured ? "aspect-[16/9]" : "aspect-[16/10]"}`}
      >
        {image}
      </div>
    </div>
  );
}
