import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      {/*
        No max-width here on purpose: each section now owns its own width.
        That lets sections like Stats go edge-to-edge (full-bleed), while
        text-heavy sections wrap their content in <Container> to stay a
        readable line-length — matching the gywde reference, where the
        map/stats bar stretches to the browser edge but paragraphs don't.
      */}
      <main className="w-full">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
