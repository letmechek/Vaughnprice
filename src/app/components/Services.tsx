import { Reveal } from './Reveal';

const services = [
  {
    index: '01',
    title: 'Web Platforms',
    description:
      'Brand websites, portals, dashboards, and custom web applications built for speed, clarity, conversion, and long-term maintainability.',
    items: ['Marketing sites', 'Custom web apps', 'Portals and dashboards'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    index: '02',
    title: 'Mobile Products',
    description:
      'Mobile apps for customer journeys, internal operations, and digital services with product thinking and production-grade engineering.',
    items: ['iOS and Android', 'Cross-platform apps', 'Operational mobile tools'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <circle cx="12" cy="18" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    index: '03',
    title: 'Business Systems',
    description:
      'Internal software, workflow automation, enterprise applications, and operational tooling that help teams move faster with better control.',
    items: ['Enterprise software', 'Automation layers', 'Workflow systems'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    index: '04',
    title: 'Cloud, Data, and AI',
    description:
      'Scalable infrastructure, data pipelines, AI products, and intelligent systems that extend what the business can do next.',
    items: ['Infrastructure', 'Data platforms', 'AI software'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a4 4 0 0 1 4 4 4 4 0 0 1 2.536 7.176A3.5 3.5 0 0 1 18 20H6a4 4 0 0 1-.535-7.968A4 4 0 0 1 8 6a4 4 0 0 1 4-4z" />
        <path d="M12 12v6M9 15l3 3 3-3" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="section-gap-lg" aria-labelledby="services-heading">
      <div className="container-grid">
        <Reveal className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <div className="eyebrow">Build capability</div>
            <h2 id="services-heading" className="display-title mt-6 text-[3rem] sm:text-[4rem] lg:text-[4.6rem]">
              We do not just ship pages. We ship systems.
            </h2>
          </div>
          <p className="max-w-[56ch] text-lg leading-[1.75] text-[var(--ink-soft)]">
            Vaughn Price operates across the full product and software stack, from public-facing
            experiences to internal operational systems, cloud foundations, and intelligent digital
            products.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.07}>
              <article
                className="system-card system-card-interactive rounded-[var(--radius-xl)] p-7 md:p-9"
                aria-label={service.title}
              >
                <div className="flex items-start justify-between gap-6 border-b border-[var(--line)] pb-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--cyan)]">{service.index}</p>
                    <h3 className="mt-3 text-[1.7rem] leading-tight text-[var(--ink)]">{service.title}</h3>
                  </div>
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[rgba(45,225,252,0.15)] bg-[rgba(45,225,252,0.05)] text-[var(--cyan)]"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </div>
                </div>
                <p className="mt-6 text-base leading-[1.8] text-[var(--ink-soft)]">{service.description}</p>
                <ul className="mt-8 flex flex-wrap gap-2.5" aria-label={`${service.title} includes`}>
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[var(--line)] bg-[rgba(8,20,40,0.72)] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
