import type { LedgerStatus } from "@/data/content";

const STYLES: Record<LedgerStatus, string> = {
  LIVE: "bg-army-soft text-army border-army/30",
  SHIPPED: "bg-amber-soft text-amber border-amber/30",
  CLOSED: "bg-fg/5 text-fg-soft border-line-strong",
};

const DOT: Record<LedgerStatus, string> = {
  LIVE: "bg-army",
  SHIPPED: "bg-amber",
  CLOSED: "bg-fg-muted",
};

export function LedgerChip({ status }: { status: LedgerStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] tracking-wide ${STYLES[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${DOT[status]}`} aria-hidden="true" />
      {status}
    </span>
  );
}
