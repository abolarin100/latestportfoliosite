import { profile } from "@/data/content";
import { Typewriter } from "./Typewriter";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-army-soft opacity-70 blur-3xl"
      />
      <Container className="relative">
        <p className="font-mono text-[13px] tracking-wide text-fg-muted">
          {profile.role.toUpperCase()} · {profile.location.toUpperCase()}
        </p>
        <h1 className="mt-4 font-display text-[36px] font-medium leading-tight text-fg sm:text-[46px]">
          <Typewriter text={profile.name} />
        </h1>
        <Reveal variant="up" delay={100}>
          <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-fg-soft">
            {profile.thesis}
          </p>
        </Reveal>
        <Reveal variant="up" delay={200}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-md bg-army px-4 py-2 font-mono text-[13px] text-bg transition-all duration-150 hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0"
            >
              View work
            </a>
            <a
              href="#contact"
              className="rounded-md border border-line-strong px-4 py-2 font-mono text-[13px] text-fg transition-all duration-150 hover:-translate-y-0.5 hover:border-army hover:text-army active:translate-y-0"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
