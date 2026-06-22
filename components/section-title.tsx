export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 flex items-center gap-2 font-mono text-sm font-semibold text-ink">
      <span className="text-green">&gt;</span> {children}
    </h2>
  );
}
