import { experience } from "@/data/content";
import { LedgerChip } from "./LedgerChip";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="border-b border-line py-14">
      <Container>
        <Reveal variant="up">
          <h2 className="font-display text-[18px] font-medium text-fg">
            Experience
          </h2>
        </Reveal>

        <div className="mt-8 space-y-10">
          {experience.map((role, i) => (
            <Reveal
              key={role.company}
              variant="left"
              delay={i * 90}
              threshold={0.1}
            >
              <div className="grid gap-4 sm:grid-cols-[160px_1fr]">
                <div>
                  <p className="font-mono text-[12px] text-fg-muted">
                    {role.dates}
                  </p>
                  <p className="mt-1 font-mono text-[12px] text-fg-muted">
                    {role.location}
                  </p>
                  <div className="mt-2">
                    <LedgerChip status={role.status} />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-[16px] font-medium text-fg">
                    {role.title}{" "}
                    <span className="text-fg-soft">· {role.company}</span>
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {role.points.map((point, j) => (
                      <li
                        key={j}
                        className="text-[14.5px] leading-relaxed text-fg-soft"
                      >
                        <span className="mr-2 text-fg-muted">—</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
