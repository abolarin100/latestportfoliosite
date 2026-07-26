"use client";

import { useEffect, useState } from "react";

type Platform = "ios" | "android" | "both";

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "both";
  const ua = navigator.userAgent || "";

  // iPadOS 13+ reports as "Macintosh" but exposes touch points, unlike a
  // real Mac — this catches iPads that would otherwise look like desktop.
  const isIOS =
    /iPhone|iPad|iPod/.test(ua) ||
    (ua.includes("Macintosh") && navigator.maxTouchPoints > 1);

  if (isIOS) return "ios";
  if (/Android/.test(ua)) return "android";
  return "both";
}

const buttonClass =
  "inline-flex items-center gap-1.5 rounded-md border border-line-strong px-3 py-1.5 font-mono text-[12.5px] text-fg-soft transition-all duration-150 hover:-translate-y-0.5 hover:border-army hover:text-army active:translate-y-0";

function Skeleton() {
  return (
    <div className="flex flex-wrap gap-2.5" aria-hidden="true">
      <div className="h-[30px] w-[132px] animate-pulse rounded-md bg-fg/10" />
      <div className="h-[30px] w-[112px] animate-pulse rounded-md bg-fg/10" />
    </div>
  );
}

export function StoreLink({ ios, android }: { ios: string; android: string }) {
  // Server-rendered and first client render must match (no `navigator`
  // during SSR), so we can't know the real platform until after mount.
  // Rather than guessing "both" and having buttons pop/shift once
  // detection resolves, show a real skeleton for that gap instead.
  const [platform, setPlatform] = useState<Platform | null>(null);

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  if (platform === null) {
    return <Skeleton />;
  }

  if (platform === "ios") {
    return (
      <a href={ios} className={buttonClass}>
        Download on the App Store
      </a>
    );
  }

  if (platform === "android") {
    return (
      <a href={android} className={buttonClass}>
        Get it on Google Play
      </a>
    );
  }

  return (
    <div className="flex flex-wrap gap-2.5">
      <a href={ios} className={buttonClass}>
        App Store
      </a>
      <a href={android} className={buttonClass}>
        Google Play
      </a>
    </div>
  );
}
