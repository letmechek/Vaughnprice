import { Reveal } from './Reveal';

const services = [
  {
    index: '01',
    title: 'Web Platforms',
    description:
      'Brand websites, portals, dashboards, and custom web applications built for speed, clarity, conversion, and long-term maintainability.',
    items: ['Marketing sites', 'Custom web apps', 'Portals and dashboards'],
  },
  {
    index: '02',
    title: 'Mobile Products',
    description:
      'Mobile apps for customer journeys, internal operations, and digital services with product thinking and production-grade engineering.',
    items: ['iOS and Android', 'Cross-platform apps', 'Operational mobile tools'],
  },
  {
    index: '03',
    title: 'Business Systems',
    description:
      'Internal software, workflow automation, enterprise applications, and operational tooling that help teams move faster with better control.',
    items: ['Enterprise software', 'Automation layers', 'Workflow systems'],
  },
  {
    index: '04',
    title: 'Cloud, Data, and AI',
    description:
      'Scalable infrastructure, data pipelines, AI products, and intelligent systems that extend what the business can do next.',
    items: ['Infrastructure', 'Data platforms', 'AI software'],
  },
];

export function Services() {
  return (
    <section id="services" className="section-gap-lg">
      <div className="container-grid">
        <Reveal className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <div className="eyebrow">Build capability</div>
            <h2 className="display-title mt-6 text-[3rem] sm:text-[4rem] lg:text-[4.8rem]">
              We do not just ship pages. We ship systems.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[var(--ink-soft)]">
            Vaughn Price operates across the full product and software stack, from public-facing
            experiences to internal operational systems, cloud foundations, and intelligent digital
            products.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <article className="system-card rounded-[30px] p-7 md:p-9">
                <div className="flex items-start justify-between gap-6 border-b border-[var(--line)] pb-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--cyan)]">{service.index}</p>
                    <h3 className="mt-3 text-3xl text-[var(--ink)]">{service.title}</h3>
                  </div>
                  <div className="h-14 w-14 rounded-2xl border border-[rgba(45,225,252,0.18)] bg-[rgba(45,225,252,0.05)]" />
                </div>
                <p className="mt-6 text-base leading-8 text-[var(--ink-soft)]">{service.description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--line)] bg-[rgba(9,28,49,0.7)] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
