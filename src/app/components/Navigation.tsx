'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BrandMark } from './BrandMark';

const links = [
  { href: '#services', label: 'Capabilities' },
  { href: '#outcomes', label: 'Build Types' },
  { href: '#signature', label: 'System View' },
  { href: '#method', label: 'Method' },
  { href: '#stack', label: 'Stack' },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-40 w-full">
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'border-b border-[var(--line)] bg-[rgba(7,17,31,0.82)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="container-grid flex h-20 items-center justify-between">
          <Link href="#hero" className="relative z-50 inline-flex shrink-0 items-center">
            <BrandMark />
          </Link>

          <div className="hidden items-center gap-10 lg:flex">
            <div className="flex items-center gap-8 text-[13px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-[var(--ink)]">
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="neon-outline inline-flex h-11 items-center justify-center rounded-full border border-[rgba(45,225,252,0.2)] bg-[rgba(13,29,49,0.9)] px-5 text-sm font-medium uppercase tracking-[0.18em] text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-[rgba(45,225,252,0.42)]"
            >
              Start A Build
            </a>
          </div>

          <button
            className="relative z-50 inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-[var(--line)] bg-[rgba(9,20,36,0.85)] lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className={`block h-px w-5 bg-[var(--ink)] transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-px w-5 bg-[var(--ink)] transition ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block h-px w-5 bg-[var(--ink)] transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-30 bg-[rgba(7,17,31,0.97)] px-6 pt-28 transition duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="container-grid flex flex-col gap-8 text-3xl text-[var(--ink)]">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-fit border-b border-[var(--cyan)] pb-2 text-base uppercase tracking-[0.22em] text-[var(--cyan)]"
          >
            Start A Build
          </a>
        </div>
      </div>
    </header>
  );
}
