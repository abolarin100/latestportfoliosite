"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/content";
import {
  ChatIcon,
  SendIcon,
  CloseIcon,
  MailIcon,
  GithubIcon,
  LinkedinIcon,
} from "./icons";

interface Message {
  role: "user" | "model";
  content: string;
}
const FIRST_NAME = profile.name.split(" ")[0];

const GREETING: Message = {
  role: "model",
  content: `Hey, it's ${FIRST_NAME} 👋. I'd love to answer your questions about my experience, skills, and projects. What would you like to know?`,
};

const API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL;

function linkify(text: string): React.ReactNode[] {
  const pattern = /(https?:\/\/[^\s)]+|[\w.+-]+@[\w-]+\.[\w.-]+)/g;
  const parts = text.split(pattern);
  return parts.map((part, i) => {
    if (part.match(/^https?:\/\//)) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noreferrer"
          className="text-army underline underline-offset-2"
        >
          {part}
        </a>
      );
    }
    if (part.match(/^[\w.+-]+@[\w-]+\.[\w.-]+$/)) {
      return (
        <a
          key={i}
          href={`mailto:${part}`}
          className="text-army underline underline-offset-2"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const messagesRef = useRef(messages);
  const summarySentRef = useRef(false);
  const [avatarFailed, setAvatarFailed] = useState(false);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    const sendSummary = () => {
      if (summarySentRef.current || !API_URL) return;
      const hasUserMessage = messagesRef.current.some((m) => m.role === "user");
      if (!hasUserMessage) return;

      summarySentRef.current = true;
      const blob = new Blob(
        [JSON.stringify({ messages: messagesRef.current })],
        {
          type: "text/plain",
        },
      );
      navigator.sendBeacon(`${API_URL}/session-summary`, blob);
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") sendSummary();
    };

    window.addEventListener("pagehide", sendSummary);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      window.removeEventListener("pagehide", sendSummary);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    setError(false);
    const nextMessages: Message[] = [
      ...messages,
      { role: "user", content: text },
    ];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    summarySentRef.current = false;

    try {
      if (!API_URL) throw new Error("Chat API not configured");

      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,

          history: nextMessages.slice(1, -1),
        }),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      const data = await res.json();
      setMessages([...nextMessages, { role: "model", content: data.reply }]);
    } catch {
      setError(true);
      setMessages([
        ...nextMessages,
        {
          role: "model",
          content: `Sorry, I'm having trouble responding right now. Feel free to reach out directly at ${profile.email}.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        role="dialog"
        aria-label="Chat about Jeremiah's experience"
        aria-hidden={!open}
        className={`fixed bottom-24 right-5 z-30 flex h-[min(70vh,520px)] w-[min(92vw,360px)] flex-col overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-[0_20px_50px_-12px_rgb(0_0_0_/_0.3)] transition-all duration-200 ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line bg-gradient-to-r from-army/10 via-transparent to-transparent px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="h-10 w-10 overflow-hidden rounded-full border border-line-strong bg-army-soft">
                <img
                  src="/projects/profile.jpeg"
                  alt={profile.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-surface bg-green-500">
                <span className="absolute h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              </span>
            </div>
            <div>
              <p className="font-display text-[14px] font-medium text-fg">
                {FIRST_NAME}
              </p>
              <p className="flex items-center gap-1 font-mono text-[11px] text-fg-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> I
                reply instantly
              </p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="flex h-7 w-7 items-center justify-center rounded-md text-fg-soft transition-colors hover:bg-fg/5 hover:text-army"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
        >
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] whitespace-pre-wrap rounded-lg px-3 py-2 text-[13.5px] leading-relaxed ${
                  m.role === "user"
                    ? "bg-army text-bg"
                    : "border border-line-strong bg-bg text-fg-soft"
                }`}
              >
                {m.role === "model" ? linkify(m.content) : m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="flex items-center gap-1 rounded-lg border border-line-strong bg-bg px-3 py-2.5">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{ animationDelay: `${i * 150}ms` }}
                    className="h-1.5 w-1.5 animate-pulse rounded-full bg-fg-muted"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-line px-4 py-2">
          <div className="flex items-center gap-3 pb-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 font-mono text-[11px] text-fg-muted transition-colors hover:text-army"
            >
              <GithubIcon className="h-3.5 w-3.5" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 font-mono text-[11px] text-fg-muted transition-colors hover:text-army"
            >
              <LinkedinIcon className="h-3.5 w-3.5" /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1 font-mono text-[11px] text-fg-muted transition-colors hover:text-army"
            >
              <MailIcon className="h-3.5 w-3.5" /> Email
            </a>
          </div>
          <form onSubmit={send} className="flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              disabled={loading}
              className="flex-1 rounded-md border border-line-strong bg-bg px-3 py-2 text-[13.5px] text-fg outline-none transition-colors focus:border-army disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-army text-bg transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              <SendIcon className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      {!open && (
        <span className="fixed bottom-8 right-24 z-30 hidden whitespace-nowrap rounded-lg border border-line-strong bg-surface px-3 py-2 font-mono text-[11px] text-fg-soft shadow-[0_8px_24px_-6px_rgb(0_0_0_/_0.25)] sm:block">
          Let's have a chat!
        </span>
      )}

      <button
        ref={toggleRef}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : `Chat with ${FIRST_NAME}`}
        aria-expanded={open}
        className="group fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-army text-bg shadow-[0_8px_24px_-6px_rgb(0_0_0_/_0.35)] transition-all duration-200 hover:scale-105 active:scale-95"
      >
        {!open && (
          <span
            className="absolute inset-0 rounded-full bg-army opacity-75 animate-ping"
            style={{ animationDuration: "2.5s" }}
          />
        )}

        {open ? (
          <CloseIcon className="relative h-6 w-6" />
        ) : avatarFailed ? (
          <ChatIcon className="relative h-6 w-6" />
        ) : (
          <span className="relative h-full w-full overflow-hidden rounded-full border-2 border-bg">
            <img
              src="/projects/profile.jpeg"
              alt={`Chat with ${FIRST_NAME}`}
              className="h-full w-full object-cover"
              onError={() => setAvatarFailed(true)}
            />
          </span>
        )}
      </button>
    </>
  );
}
