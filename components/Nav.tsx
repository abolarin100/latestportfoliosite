"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/content";
import { ThemeToggle } from "./ThemeToggle";
import { GithubIcon, LinkedinIcon } from "./icons";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const HIDE_AFTER_PX = 80;

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;

      if (menuOpen) {
     
        lastY.current = y;
        return;
      }

      if (y < HIDE_AFTER_PX) {
        setHidden(false);
      } else {
        setHidden(goingDown);
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  return (
    <div
      className={`sticky top-4 z-20 mx-auto max-w-content px-6 transition-transform duration-300 ${
        hidden ? "-translate-y-24" : "translate-y-0"
      }`}
    >
      <header className="rounded-3xl border border-line-strong/70 bg-bg/80 shadow-[0_1px_20px_-4px_rgb(0_0_0_/_0.12)] backdrop-blur-md">
        <div className="flex items-center justify-between px-5 py-2.5">
          <a href="#" className="font-display text-[14px] font-medium text-fg">
            JA<span className="text-army">.</span>
          </a>

          <nav className="hidden gap-6 font-mono text-[12.5px] text-fg-soft sm:flex">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-army">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hidden text-fg-soft transition-colors hover:text-army sm:block"
            >
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hidden text-fg-soft transition-colors hover:text-army sm:block"
            >
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </a>
            <ThemeToggle />

            {/* Animated hamburger <-> close, mobile only */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="relative flex h-8 w-8 items-center justify-center rounded-md border border-line-strong sm:hidden"
            >
              <span
                className={`absolute h-[1.5px] w-4 bg-fg transition-transform duration-200 ${
                  menuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-4 bg-fg transition-opacity duration-150 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-4 bg-fg transition-transform duration-200 ${
                  menuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown panel */}
        <div
          className={`grid overflow-hidden transition-all duration-200 sm:hidden ${
            menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <nav className="flex flex-col gap-1 border-t border-line px-5 py-3 font-mono text-[13px] text-fg-soft">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-2 py-2 transition-colors hover:bg-army-soft hover:text-army"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-1 flex gap-5 border-t border-line px-2 pt-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-army"
                >
                  <GithubIcon className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-army"
                >
                  <LinkedinIcon className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
