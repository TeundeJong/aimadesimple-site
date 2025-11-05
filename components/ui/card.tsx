// components/ui/card.tsx
export default function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl bg-white shadow-sm border border-slate-200 ${className}`}>
      {children}
    </div>
  );
}
