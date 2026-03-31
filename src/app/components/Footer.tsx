import Link from 'next/link';
import { BrandMark } from './BrandMark';
import { buildTypePages, systemLayerPages } from '../lib/footerLinks';

const columns = [
  {
    title: 'Build Types',
    links: buildTypePages.map((page) => ({
      label: page.label,
      href: `/build-types/${page.slug}`,
    })),
  },
  {
    title: 'System Layers',
    links: systemLayerPages.map((page) => ({
      label: page.label,
      href: `/system-layers/${page.slug}`,
    })),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[rgba(6,14,25,0.46)] pb-10 pt-14">
      <div className="container-grid">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <BrandMark />
            <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--ink-soft)]">
              Vaughn Price Limited builds the software systems behind modern business, from public
              product experiences to internal operations, infrastructure, data, and AI-powered tools.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-[11px] uppercase tracking-[0.3em] text-[var(--cyan)]">{column.title}</h4>
              <div className="mt-5 flex flex-col gap-3 text-sm text-[var(--ink)]">
                {column.links.map((link) => (
                  <Link key={link.href} href={link.href} className="transition hover:text-[var(--cyan)]">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-[var(--cyan)]">Contact</h4>
            <div className="mt-5 space-y-5 text-sm text-[var(--ink)]">
              <a href="mailto:info@vaughnprice.com">info@vaughnprice.com</a>
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">Kenya</p>
                <p>+254 793 022 425</p>
                <p>21 Fcb Mihrab</p>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">Canada</p>
                <p>+1 647 453 9672</p>
                <p>504 Jarvis St Toronto, ON M4Y 2H6</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)] md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Vaughn Price Limited</span>
          <div className="flex gap-6">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
