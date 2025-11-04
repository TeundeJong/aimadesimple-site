import Link from "next/link";
import { useT } from "@/lib/i18n";

export default function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 text-sm sm:grid-cols-3">
        <div>
          <div className="font-semibold">{t("brand")}</div>
          <p className="mt-2 text-slate-600">{t("tag")}</p>
        </div>
        <div>
          <div className="font-medium">Product</div>
          <ul className="mt-2 space-y-1">
            <li><Link className="hover:text-blue-600" href="/services">Services</Link></li>
            <li><Link className="hover:text-blue-600" href="/products">Products</Link></li>
            <li><Link className="hover:text-blue-600" href="/pricing">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Company</div>
          <ul className="mt-2 space-y-1">
            <li><Link className="hover:text-blue-600" href="/about">About</Link></li>
            <li><Link className="hover:text-blue-600" href="/contact">Contact</Link></li>
            <li><Link className="hover:text-blue-600" href="/privacy">Privacy</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-10 text-xs text-slate-500">
        © {new Date().getFullYear()} CivicAI Solutions. All rights reserved.
      </div>
    </footer>
  );
}
