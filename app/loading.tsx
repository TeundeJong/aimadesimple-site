export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="flex min-h-[60vh] items-center justify-center"
    >
      <div className="flex items-center gap-3">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-teal opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-teal" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-secondary">
          Loading
        </span>
      </div>
    </div>
  );
}
