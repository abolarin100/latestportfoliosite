import { stats } from "@/data/content";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { Container } from "./Container";

export function Stats() {
  return (
    <section className="border-b border-line py-8 sm:py-10">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} variant="scale" delay={i * 90} threshold={0.5}>
              <div className="h-full bg-bg px-5 py-6 sm:py-8">
                <p className="font-mono text-[24px] font-medium text-fg sm:text-[28px]">
                  <CountUp value={s.value} />
                </p>
                <p className="mt-1 text-[13px] leading-snug text-fg-soft">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
