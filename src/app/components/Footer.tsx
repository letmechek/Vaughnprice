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
    <footer className="border-t border-[var(--line)] bg-[rgba(5,10,21,0.50)] pb-10 pt-14">
      <div className="container-grid">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">

          {/* Brand column */}
          <div>
            <BrandMark />
            <p className="mt-6 max-w-[32ch] text-sm leading-[1.8] text-[var(--ink-soft)]">
              Vaughn Price Limited builds the software systems behind modern business, from public
              product experiences to internal operations, infrastructure, data, and AI-powered tools.
            </p>
          </div>

          {/* Nav columns */}
          {columns.map((column) => (
            <nav key={column.title} aria-label={`${column.title} links`}>
              <h4 className="text-[11px] uppercase tracking-[0.3em] text-[var(--cyan)]">{column.title}</h4>
              <ul className="mt-5 flex flex-col gap-3 text-sm text-[var(--ink)]">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="cursor-pointer transition-colors duration-150 hover:text-[var(--cyan)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact column */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-[var(--cyan)]">Contact</h4>
            <address className="mt-5 space-y-5 not-italic text-sm text-[var(--ink)]">
              <a
                href="mailto:info@vaughnprice.com"
                className="block cursor-pointer transition-colors hover:text-[var(--cyan)]"
              >
                info@vaughnprice.com
              </a>
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">Kenya</p>
                <p>
                  <a href="tel:+254793022425" className="cursor-pointer transition-colors hover:text-[var(--cyan)]">
                    +254 793 022 425
                  </a>
                </p>
                <p className="text-[var(--ink-soft)]">21 Fcb Mihrab</p>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">Canada</p>
                <p>
                  <a href="tel:+16474539672" className="cursor-pointer transition-colors hover:text-[var(--cyan)]">
                    +1 647 453 9672
                  </a>
                </p>
                <p className="text-[var(--ink-soft)]">504 Jarvis St Toronto, ON M4Y 2H6</p>
              </div>
            </address>
          </div>

        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)] md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Vaughn Price Limited</span>
          <nav aria-label="Legal links" className="flex gap-6">
            <Link href="/privacy" className="cursor-pointer transition-colors hover:text-[var(--ink)]">Privacy</Link>
            <Link href="/terms" className="cursor-pointer transition-colors hover:text-[var(--ink)]">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
