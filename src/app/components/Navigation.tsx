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
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace('#', ''));
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -40% 0px' }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="fixed top-0 z-40 w-full">
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`transition-all duration-300 ${
          scrolled
            ? 'border-b border-[var(--line)] bg-[rgba(6,12,24,0.84)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="container-grid flex h-20 items-center justify-between">
          <Link href="#hero" className="relative z-50 inline-flex shrink-0 items-center" aria-label="Vaughn Price — go to top">
            <BrandMark />
          </Link>

          <div className="hidden items-center gap-10 lg:flex">
            <div className="flex items-center gap-8 text-[13px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
              {links.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={`cursor-pointer transition-colors duration-200 ${
                      isActive ? 'text-[var(--ink)]' : 'hover:text-[var(--ink)]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
            <a
              href="#contact"
              className="btn-primary neon-outline cursor-pointer !h-11 !px-5 !text-xs"
            >
              Start A Build
            </a>
          </div>

          <button
            className="relative z-50 inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-[var(--line)] bg-[rgba(8,17,34,0.88)] lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className={`block h-px w-5 bg-[var(--ink)] transition-transform duration-200 ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
            <span className={`block h-px w-5 bg-[var(--ink)] transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block h-px w-5 bg-[var(--ink)] transition-transform duration-200 ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-30 bg-[rgba(6,12,24,0.98)] px-6 pt-28 transition-all duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
        }`}
      >
        <nav className="container-grid flex flex-col gap-7">
          {links.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'location' : undefined}
                onClick={() => setOpen(false)}
                className={`cursor-pointer text-3xl transition-colors duration-200 ${
                  isActive ? 'text-[var(--cyan)]' : 'text-[var(--ink)]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-fit cursor-pointer border-b border-[var(--cyan)] pb-2 text-base uppercase tracking-[0.22em] text-[var(--cyan)]"
          >
            Start A Build
          </a>
        </nav>
      </div>
    </header>
  );
}
