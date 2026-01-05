import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-slate-50/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl ring-1 ring-slate-200 bg-white">
            <Image
              src="/civicai-icon.png"
              alt="CivicAI Solutions"
              fill
              sizes="36px"
              className="object-contain p-1"
              unoptimized
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">CivicAI Solutions</div>
            <div className="text-xs text-slate-500">Pty Ltd</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-slate-700 md:flex">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="hover:text-slate-900">
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden md:block">
            <Button size="sm">
              Business inquiry
            </Button>
          </Link>
          <Link
            href="/products/whatsapp-ai-assistant"
            className="md:hidden"
            aria-label="View CivicAI Assistant"
          >
            <Button size="sm" variant="outline">
              Assistant
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="border-t border-slate-200/70 md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-sm text-slate-700">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="hover:text-slate-900">
              {i.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
