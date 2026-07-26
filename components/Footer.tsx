import { profile } from "@/data/content";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container>
        <Reveal variant="up">
          <p className="text-[13px] text-fg-muted">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </Reveal>
      </Container>
    </footer>
  );
}
