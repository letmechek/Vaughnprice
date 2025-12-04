import Image from 'next/image';

export function Footer() {
  const columns = [
    {
      title: 'Services',
      links: ['Platform Engineering', 'Cloud Modernization', 'Data Platforms', 'AI Products'],
    },
    {
      title: 'Resources',
      links: ['Blog', 'Case Studies', 'Documentation', 'Support'],
    },
  ];

  return (
    <footer className="bg-[#050812] pt-20 pb-20">
      <div className="container-grid">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo5.png"
                alt="Vaughn Price Limited logo"
                width={50}
                height={50}
                className="h-12 w-auto"
                loading="lazy"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-xs tracking-[0.24em] text-slate-400">VAUGHN PRICE</span>
                <span className="text-lg font-semibold text-white">Limited</span>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-500">
              Enterprise technology partner building resilient platforms, secure infrastructure, and
              intuitive experiences for modern businesses.
            </p>
            <div className="mt-6 flex gap-4">
              {[
                { icon: 'LI', href: 'https://www.linkedin.com' },
                { icon: 'X', href: 'https://twitter.com' },
                { icon: 'GH', href: 'https://github.com' },
              ].map((item) => (
                <a
                  key={item.icon}
                  href={item.href}
                  aria-label={item.icon}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-sm text-white transition hover:border-vp-cyan hover:text-vp-cyan"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-base font-semibold text-white">{column.title}</h4>
              <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
                {column.links.map((link) => (
                  <a key={link} href="#" className="transition hover:text-vp-cyan">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div>
            <h4 className="text-base font-semibold text-white">Get in Touch</h4>
            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <a href="mailto:info@vaughnprice.com" className="text-vp-cyan">
                info@vaughnprice.com
              </a>
              <p>+254793022425</p>
              <p>21 Fcb Mihrab</p>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-slate-500">
          <span>© {new Date().getFullYear()} Vaughn Price Limited. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-vp-cyan">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-vp-cyan">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
