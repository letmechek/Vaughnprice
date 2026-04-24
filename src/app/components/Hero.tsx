const layers = [
  {
    index: '01',
    label: 'Experience layer',
    title: 'Web & Mobile',
    items: ['Brand websites', 'Product interfaces', 'Native mobile apps'],
    accent: 'var(--blue)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    index: '02',
    label: 'Systems layer',
    title: 'Business Logic',
    items: ['Enterprise software', 'Workflow automation', 'Internal tooling'],
    accent: 'var(--cyan)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    index: '03',
    label: 'Infrastructure layer',
    title: 'Cloud & Data',
    items: ['Cloud platforms', 'Data pipelines', 'Observability'],
    accent: 'var(--violet)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    index: '04',
    label: 'Intelligence layer',
    title: 'AI & Automation',
    items: ['Applied AI products', 'ML pipelines', 'Intelligent workflows'],
    accent: 'var(--teal)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
];

const proofItems = [
  { value: 'Four', descriptor: 'integrated service layers' },
  { value: 'Senior', descriptor: 'execution, every project' },
  { value: 'End-to-end', descriptor: 'from idea to infrastructure' },
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden" aria-labelledby="hero-heading">

      {/* Ambient orbs — static */}
      <div className="hero-radial left-[-12rem] top-20 h-[32rem] w-[32rem] bg-[rgba(79,163,255,0.16)]" aria-hidden="true" />
      <div className="hero-radial right-[-14rem] top-10 h-[30rem] w-[30rem] bg-[rgba(45,225,252,0.11)]" aria-hidden="true" />
      <div className="hero-radial bottom-[8%] left-[42%] h-[24rem] w-[24rem] bg-[rgba(131,132,255,0.10)]" aria-hidden="true" />

      <div className="container-grid flex min-h-[100dvh] flex-col justify-between pb-0 pt-24">

        {/* ── Upper: Headline left / Descriptor right ────────────────── */}
        <div className="grid flex-1 gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20 lg:py-20">

          {/* Left — headline */}
          <div>
            <div className="eyebrow">Future-facing systems engineering</div>
            <h1
              id="hero-heading"
              className="display-title mt-7 text-[3.6rem] sm:text-[5rem] lg:text-[6.4rem] xl:text-[7.6rem]"
            >
              We build the
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(100deg, var(--cyan) 0%, var(--violet) 70%)',
                }}
              >
                software layer
              </span>
              <br />
              <span className="text-[var(--ink-soft)]">of modern business.</span>
            </h1>
          </div>

          {/* Right — descriptor + CTAs + micro-proof */}
          <div className="flex flex-col justify-end">
            <p className="max-w-[46ch] text-lg leading-[1.8] text-[var(--ink-soft)]">
              Vaughn Price designs and ships websites, mobile apps, enterprise systems, cloud
              platforms, data products, and AI-powered tools for companies building beyond
              today&apos;s standard playbook.
            </p>

            <div className="mt-9 flex flex-wrap gap-3.5">
              <a
                href="#contact"
                className="btn-primary neon-outline"
                aria-label="Launch a project with Vaughn Price"
              >
                Launch A Project
              </a>
              <a
                href="#services"
                className="btn-ghost"
                aria-label="Explore our capabilities"
              >
                Explore Capabilities
              </a>
            </div>

            {/* Micro-proof strip */}
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--line)] pt-8">
              {proofItems.map((item) => (
                <div key={item.value}>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-dim)]">
                    {item.descriptor}
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-[var(--ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* ── Architecture separator ─────────────────────────────────── */}
        <div className="relative flex items-center gap-5" aria-hidden="true">
          <div className="h-px flex-1 bg-[var(--line)]" />
          <span className="shrink-0 text-[10px] uppercase tracking-[0.38em] text-[var(--ink-dim)]">
            Systems architecture
          </span>
          <div className="h-px flex-1 bg-[var(--line)]" />
        </div>

        {/* ── Architecture layer cards ───────────────────────────────── */}
        <div
          role="img"
          aria-label="Four-layer systems architecture: Experience, Business Logic, Cloud and Data, AI and Automation"
          className="pb-8 pt-5"
        >
          {/* Desktop: 4 cards + 3 connectors in a 7-col grid */}
          <div className="hidden lg:grid" style={{ gridTemplateColumns: '1fr 2.5rem 1fr 2.5rem 1fr 2.5rem 1fr' }}>
            {layers.flatMap((layer, i) => {
              const card = (
                <div
                  key={layer.index}
                  className="system-card rounded-[var(--radius-lg)] px-6 py-5"
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="text-[10px] uppercase tracking-[0.32em]"
                      style={{ color: layer.accent }}
                    >
                      {layer.index}
                    </span>
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-xl border border-[var(--line)]"
                      style={{ color: layer.accent }}
                    >
                      {layer.icon}
                    </span>
                  </div>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-[var(--ink-dim)]">
                    {layer.label}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold leading-tight text-[var(--ink)]">
                    {layer.title}
                  </h2>
                  <ul className="mt-4 space-y-2" aria-label={`${layer.title} capabilities`}>
                    {layer.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[12px] text-[var(--ink-soft)]">
                        <span
                          className="h-1 w-1 shrink-0 rounded-full"
                          style={{ background: layer.accent, opacity: 0.65 }}
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="mt-5 h-px"
                    style={{ background: `linear-gradient(90deg, ${layer.accent}, transparent)`, opacity: 0.4 }}
                    aria-hidden="true"
                  />
                </div>
              );

              const connector = i < layers.length - 1 ? (
                <div
                  key={`conn-${i}`}
                  className="flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="h-px w-5 bg-[var(--line-strong)]" />
                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none">
                      <path d="M0 0L6 4L0 8V0Z" fill="rgba(80,140,210,0.35)" />
                    </svg>
                  </div>
                </div>
              ) : null;

              return connector ? [card, connector] : [card];
            })}
          </div>

          {/* Mobile: 2×2 grid */}
          <div className="grid grid-cols-2 gap-3 lg:hidden">
            {layers.map((layer) => (
              <div
                key={layer.index}
                className="system-card rounded-[var(--radius-md)] p-5"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] uppercase tracking-[0.32em]"
                    style={{ color: layer.accent }}
                  >
                    {layer.index}
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center" style={{ color: layer.accent }}>
                    {layer.icon}
                  </span>
                </div>
                <h2 className="mt-3 text-base font-semibold text-[var(--ink)]">{layer.title}</h2>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[var(--ink-dim)]">
                  {layer.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
