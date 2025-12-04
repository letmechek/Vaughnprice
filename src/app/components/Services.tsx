import { Reveal } from './Reveal';

type Service = {
  title: string;
  description: string;
  accent: 'vp-cyan' | 'vp-coral' | 'vp-purple';
  icon: 'cloud' | 'shield' | 'circuit';
};

const services: Service[] = [
  {
    title: 'Platform Engineering',
    description:
      'Designing resilient, cloud-native platforms with automation, observability, and security woven into every layer.',
    accent: 'vp-cyan',
    icon: 'cloud',
  },
  {
    title: 'Enterprise Modernization',
    description:
      'Re-architecting legacy estates into scalable microservices, API-first ecosystems, and data-driven workflows.',
    accent: 'vp-coral',
    icon: 'shield',
  },
  {
    title: 'Intelligent Systems',
    description:
      'Delivering AI-enabled products with responsible governance, actionable insights, and measurable business outcomes.',
    accent: 'vp-purple',
    icon: 'circuit',
  },
];

function Icon({ name }: { name: Service['icon'] }) {
  const stroke = 'currentColor';
  switch (name) {
    case 'cloud':
      return (
        <svg viewBox="0 0 64 64" className="h-8 w-8 text-inherit" fill="none" strokeWidth="2.6">
          <path
            stroke={stroke}
            d="M44 44H22a10 10 0 1 1 2.3-19.78A12 12 0 0 1 45 30a9 9 0 0 1-1 18Z"
          />
          <path stroke={stroke} d="M23 36h14" />
        </svg>
      );
    case 'shield':
      return (
        <svg viewBox="0 0 64 64" className="h-8 w-8 text-inherit" fill="none" strokeWidth="2.6">
          <path stroke={stroke} d="M32 10 14 16v15c0 12 7.7 18.7 18 23 10.3-4.3 18-11 18-23V16Z" />
          <path stroke={stroke} d="M23 32.5 30 40l12-14" />
        </svg>
      );
    case 'circuit':
      return (
        <svg viewBox="0 0 64 64" className="h-8 w-8 text-inherit" fill="none" strokeWidth="2.6">
          <circle cx="20" cy="20" r="4" stroke={stroke} />
          <circle cx="44" cy="20" r="4" stroke={stroke} />
          <circle cx="20" cy="44" r="4" stroke={stroke} />
          <circle cx="44" cy="44" r="4" stroke={stroke} />
          <path stroke={stroke} d="M24 20h16M20 24v16m24-16v16M24 44h16" />
        </svg>
      );
  }
}

export function Services() {
  return (
    <section id="services" className="section-gap-lg bg-vp-navy">
      <div className="container-grid">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold text-white md:text-5xl">What We Build</h2>
          <p className="mt-4 text-lg text-slate-400">
            Comprehensive technology solutions for modern enterprises.
          </p>
        </Reveal>
        <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const accentClasses =
              service.accent === 'vp-cyan'
                ? 'text-vp-cyan border-vp-cyan'
                : service.accent === 'vp-coral'
                  ? 'text-vp-coral border-vp-coral'
                  : 'text-vp-purple border-vp-purple';

            const accentBg =
              service.accent === 'vp-cyan'
                ? 'bg-vp-cyan/10'
                : service.accent === 'vp-coral'
                  ? 'bg-vp-coral/10'
                  : 'bg-vp-purple/10';

            const linkClass =
              service.accent === 'vp-cyan'
                ? 'text-vp-cyan'
                : service.accent === 'vp-coral'
                  ? 'text-vp-coral'
                  : 'text-vp-purple';

            return (
              <Reveal key={service.title} delay={index * 0.15}>
                <div className="card-surface flex h-[480px] flex-col p-12">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 ${accentClasses} ${accentBg}`}
                  >
                    <Icon name={service.icon} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-400">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <a
                      href="#contact"
                      className={`text-sm font-semibold transition hover:text-white ${linkClass}`}
                    >
                      Learn more →
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
