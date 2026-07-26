import { stack } from "@/data/content";
import { Reveal } from "./Reveal";
import { Container } from "./Container";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-b border-line bg-surface py-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-4 h-64 w-64 animate-float-a rounded-full bg-army-soft opacity-70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 animate-float-b rounded-full bg-amber-soft opacity-60 blur-3xl"
      />

      <Container className="relative">
        <Reveal variant="up">
          <h2 className="font-display text-[18px] font-medium text-fg">
            Skills
          </h2>
        </Reveal>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {Object.entries(stack).map(([category, items], i) => (
            <Reveal
              key={category}
              variant={i % 2 === 0 ? "left" : "right"}
              delay={i * 80}
            >
              <p className="font-mono text-[12px] tracking-wide text-fg-muted">
                {category.toUpperCase()}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-line-strong px-2 py-1 font-mono text-[12px] text-fg-soft transition-colors hover:border-army hover:text-army"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
