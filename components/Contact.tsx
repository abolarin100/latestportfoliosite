"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/content";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

type Status = "idle" | "submitting" | "sent";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");


  useEffect(() => {
    if (status !== "sent") return;
    const t = setTimeout(() => setStatus("idle"), 4000);
    return () => clearTimeout(t);
  }, [status]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const subject = `Portfolio contact from ${name || "your site"}`;
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;

 
    window.setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      setName("");
      setEmail("");
      setMessage("");
      setStatus("sent");
    }, 450);
  };

  const disabled = status === "submitting";

  return (
    <section id="contact" className="py-14">
      <Container>
        <Reveal variant="up">
          <h2 className="font-display text-[18px] font-medium text-fg">Contact</h2>
          <p className="mt-2 max-w-md text-[14.5px] leading-relaxed text-fg-soft">
            Have a role, project, or question in mind? Fill this in and it'll open a
            pre-filled email straight to my inbox.
          </p>
        </Reveal>

        <Reveal variant="blur" delay={100}>
          <form onSubmit={handleSubmit} className="mt-6 max-w-md space-y-4">
            <div>
              <label htmlFor="name" className="font-mono text-[11px] tracking-wide text-fg-muted">
                NAME
              </label>
              <input
                id="name"
                type="text"
                required
                disabled={disabled}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-line-strong bg-surface px-3 py-2 text-[14px] text-fg outline-none transition-colors focus:border-army disabled:opacity-60"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-[11px] tracking-wide text-fg-muted">
                YOUR EMAIL
              </label>
              <input
                id="email"
                type="email"
                required
                disabled={disabled}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-line-strong bg-surface px-3 py-2 text-[14px] text-fg outline-none transition-colors focus:border-army disabled:opacity-60"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-[11px] tracking-wide text-fg-muted">
                MESSAGE
              </label>
              <textarea
                id="message"
                required
                rows={4}
                disabled={disabled}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1.5 w-full resize-none rounded-md border border-line-strong bg-surface px-3 py-2 text-[14px] text-fg outline-none transition-colors focus:border-army disabled:opacity-60"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={disabled}
                className="inline-flex items-center gap-2 rounded-md bg-army px-4 py-2 font-mono text-[13px] text-bg transition-all duration-150 hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0 disabled:pointer-events-none disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <span
                    className="h-3.5 w-3.5 animate-spin rounded-full border-[1.5px] border-bg/40 border-t-bg"
                    aria-hidden="true"
                  />
                ) : (
                  <MailIcon className="h-4 w-4" />
                )}
                {status === "submitting" ? "Opening mail client…" : "Send message"}
              </button>

              <p
                role="status"
                className={`font-mono text-[12px] text-army transition-opacity duration-300 ${
                  status === "sent" ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                Ready to send in your mail app ✓
              </p>
            </div>
          </form>
        </Reveal>

        <Reveal variant="up" delay={150}>
          <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-line pt-6">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 rounded font-mono text-[12.5px] text-fg-soft transition-colors hover:text-army"
            >
              <MailIcon className="h-4 w-4" /> {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded font-mono text-[12.5px] text-fg-soft transition-colors hover:text-army"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded font-mono text-[12.5px] text-fg-soft transition-colors hover:text-army"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
