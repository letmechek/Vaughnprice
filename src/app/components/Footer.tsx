import { BrandMark } from './BrandMark';

const columns = [
  {
    title: 'Build Types',
    links: ['Web platforms', 'Mobile apps', 'Enterprise systems', 'AI software'],
  },
  {
    title: 'System Layers',
    links: ['Product design', 'Engineering', 'Cloud and data', 'Scale and enablement'],
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
                  <a key={link} href="#services">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-[var(--cyan)]">Contact</h4>
            <div className="mt-5 space-y-3 text-sm text-[var(--ink)]">
              <a href="mailto:info@vaughnprice.com">info@vaughnprice.com</a>
              <p>+254 793 022 425</p>
              <p>21 Fcb Mihrab</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)] md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Vaughn Price Limited</span>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
