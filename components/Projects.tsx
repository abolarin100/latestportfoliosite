import { projects } from "@/data/content";
import { LedgerChip } from "./LedgerChip";
import { StoreLink } from "./StoreLink";
import { ProjectImage } from "./ProjectImage";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import type { Project } from "@/data/content";

function ProjectLinks({ p }: { p: Project }) {
  if (!p.storeLinks && p.links.length === 0) return null;
  return (
    <div className="mt-4 flex flex-wrap items-center gap-4">
      {p.storeLinks && <StoreLink ios={p.storeLinks.ios} android={p.storeLinks.android} />}
      {p.links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="rounded font-mono text-[12.5px] text-army underline-offset-4 transition-opacity hover:underline focus-visible:underline"
        >
          {link.label} ↗
        </a>
      ))}
    </div>
  );
}

const cardClass =
  "group flex h-full flex-col rounded-xl border border-line bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-army/50 hover:shadow-[0_12px_30px_-12px_rgb(0_0_0_/_0.18)] focus-within:-translate-y-1 focus-within:border-army/50 focus-within:shadow-[0_12px_30px_-12px_rgb(0_0_0_/_0.18)] sm:p-6";

export function Projects() {
  const [flagship, ...rest] = projects;

  return (
    <section id="work" className="border-b border-line py-14">
      <Container>
        <Reveal variant="up">
          <h2 className="font-display text-[18px] font-medium text-fg">Featured work</h2>
        </Reveal>

        <div className="mt-8 space-y-4">
          <Reveal variant="scale" threshold={0.1}>
            <article className={`${cardClass} md:flex-row md:gap-6`}>
              <div className="md:w-2/5">
                <ProjectImage
                  src={flagship.image}
                  alt={`${flagship.title} screenshot`}
                  frame={flagship.frame}
                  featured
                />
              </div>
              <div className="mt-4 flex flex-1 flex-col md:mt-0">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-[19px] font-medium text-fg transition-colors group-hover:text-army">
                    {flagship.title}
                  </h3>
                  <LedgerChip status={flagship.status} />
                </div>
                <p className="mt-1 font-mono text-[12px] text-fg-muted">{flagship.meta}</p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-fg-soft">
                  {flagship.description}
                </p>
                <div className="mt-auto">
                  <ProjectLinks p={flagship} />
                </div>
              </div>
            </article>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.title} variant="up" delay={i * 100} threshold={0.15}>
                <article className={cardClass}>
                  <ProjectImage src={p.image} alt={`${p.title} screenshot`} frame={p.frame} />
                  <div className="mt-4 flex flex-1 flex-col">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-[16px] font-medium text-fg transition-colors group-hover:text-army">
                        {p.title}
                      </h3>
                      <LedgerChip status={p.status} />
                    </div>
                    <p className="mt-1 font-mono text-[11.5px] text-fg-muted">{p.meta}</p>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-fg-soft">
                      {p.description}
                    </p>
                    <div className="mt-auto">
                      <ProjectLinks p={p} />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
