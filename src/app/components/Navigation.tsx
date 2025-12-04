'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#stats', label: 'Impact' },
  { href: '#work', label: 'Featured' },
  { href: '#process', label: 'Process' },
  { href: '#technology', label: 'Technology' },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-40 w-full">
      <nav
        className={`h-20 border-b border-white/5 transition-colors duration-300 ${
          scrolled ? 'bg-vp-navy-dark/90 backdrop-blur-xl' : 'bg-vp-navy-dark/70 backdrop-blur-lg'
        }`}
      >
        <div className="container-grid flex h-full items-center justify-between">
          <Link href="#hero" className="flex items-center gap-3">
            <Image
              src="/logo5.png"
              alt="Vaughn Price Limited logo"
              width={50}
              height={50}
              className="h-12 w-auto"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xs tracking-[0.24em] text-slate-300">VAUGHN PRICE</span>
              <span className="text-lg font-semibold text-white">Limited</span>
            </div>
          </Link>
          <div className="hidden items-center gap-10 lg:flex">
            <div className="flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="border-b-2 border-transparent pb-1 text-sm font-medium text-slate-300 transition hover:border-vp-cyan hover:text-vp-cyan"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex h-10 w-32 items-center justify-center rounded-full bg-vp-cyan px-4 text-sm font-semibold text-slate-900 transition hover:scale-[1.02] hover:bg-[#2dd4f5]"
            >
              Contact Us
            </a>
          </div>
          <button
            className="relative z-50 inline-flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-full border border-white/10 text-white lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all ${
                open ? 'translate-y-1.5 rotate-45' : '-translate-y-1'
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all ${
                open ? '-translate-y-1.5 -rotate-45' : 'translate-y-1'
              }`}
            />
          </button>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-40 bg-vp-navy-dark/95 px-6 transition duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="container-grid flex h-full flex-col items-start justify-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl font-semibold text-white transition hover:text-vp-cyan"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex h-12 w-48 items-center justify-center rounded-full bg-vp-cyan text-sm font-semibold text-slate-900 transition hover:bg-[#2dd4f5]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
