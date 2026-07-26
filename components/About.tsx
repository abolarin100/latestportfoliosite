import { profile, education } from "@/data/content";
import { Avatar } from "./Avatar";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { DownloadIcon } from "./icons";

export function About() {
  return (
    <section id="about" className="border-b border-line py-14">
      <Container>
        <Reveal variant="up">
          <h2 className="font-display text-[18px] font-medium text-fg">About</h2>
        </Reveal>

        <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:gap-8">
          <Reveal variant="left" delay={80}>
            <Avatar name={profile.name} />
          </Reveal>
          <Reveal variant="right" delay={160} className="max-w-2xl">
            <p className="text-[15px] leading-relaxed text-fg-soft">
              {profile.summary}
            </p>
            <a
              href={profile.resumeUrl}
              download
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-line-strong px-4 py-2 font-mono text-[13px] text-fg transition-all duration-150 hover:-translate-y-0.5 hover:border-army hover:text-army active:translate-y-0"
            >
              <DownloadIcon className="h-4 w-4" />
              Download résumé
            </a>
          </Reveal>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-2">
          {education.map((e, i) => (
            <Reveal key={e.degree} variant="up" delay={i * 100}>
              <div>
                <p className="text-[13.5px] text-fg">{e.degree}</p>
                <p className="font-mono text-[12px] text-fg-muted">
                  {e.school} · {e.dates}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}