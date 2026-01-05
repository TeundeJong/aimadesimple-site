import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/70 bg-slate-950 text-slate-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-3">
        <div>
          <div className="text-sm font-semibold tracking-tight">CivicAI Solutions Pty Ltd</div>
          <p className="mt-3 max-w-sm text-sm text-slate-300">
            We build and operate focused software systems that remove friction from day-to-day business operations.
          </p>
          <p className="mt-4 max-w-sm text-xs text-slate-400">
            This website is provided for general information only and does not constitute professional, legal, or financial advice.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold">Products</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>
              <Link className="hover:text-white" href="/products/whatsapp-ai-assistant">
                CivicAI Assistant
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/products/contractguard-ai">
                ContractGuard AI
              </Link>
            </li>
            <li className="text-slate-400">More modules coming soon</li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>
              <Link className="hover:text-white" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/terms">
                Terms
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/refund-policy">
                Refund policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-10 text-xs text-slate-500">
        © {new Date().getFullYear()} CivicAI Solutions Pty Ltd. All rights reserved. No refunds.
      </div>
    </footer>
  );
}
