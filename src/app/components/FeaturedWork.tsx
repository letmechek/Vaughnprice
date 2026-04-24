import { Reveal } from './Reveal';

const servicePoints = [
  'Web platforms and digital products designed for growth',
  'Mobile apps and interfaces that connect users to real services',
  'Enterprise systems that organise operations and decision-making',
  'Cloud, data, and AI layers that power the next stage of scale',
];

const triplePoints = [
  {
    title: 'Signal',
    text: 'Find the real business constraint and the real user need.',
  },
  {
    title: 'System',
    text: 'Design the software, workflow, and architecture together.',
  },
  {
    title: 'Scale',
    text: 'Launch with a path to resilience, iteration, and growth.',
  },
];

export function FeaturedWork() {
  return (
    <section id="signature" className="section-gap" aria-labelledby="signature-heading">
      <div className="container-grid grid gap-10 lg:grid-cols-2 lg:gap-16">

        {/* Architecture diagram card — brand differentiator, must stay */}
        <Reveal>
          <div className="system-card rounded-[var(--radius-xl)] p-8 md:p-10" aria-label="Build model architecture" role="img">
            <div className="card-accent-line" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-[linear-gradient(160deg,rgba(8,20,40,0.94),rgba(6,14,28,0.98))] p-6 md:p-8">
              {/* Decorative geometry */}
              <div className="absolute inset-x-0 top-20 h-px bg-[rgba(100,150,210,0.10)]" aria-hidden="true" />
              <div className="absolute left-10 top-0 bottom-0 w-px bg-[rgba(100,150,210,0.10)]" aria-hidden="true" />
              <div className="absolute right-12 top-12 h-44 w-44 rounded-full border border-[rgba(45,225,252,0.16)]" aria-hidden="true" />
              <div className="absolute bottom-14 left-16 h-36 w-36 rounded-full border border-[rgba(79,163,255,0.18)]" aria-hidden="true" />
              <div className="absolute bottom-12 right-14 h-28 w-28 rotate-45 border border-[rgba(131,132,255,0.12)]" aria-hidden="true" />

              <div className="relative flex min-h-[420px] flex-col justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--ink-soft)]">
                    Build topology
                  </p>
                  <h3 id="signature-heading" className="mt-4 max-w-[36ch] text-[1.9rem] leading-tight text-[var(--ink)]">
                    A joined-up build model across product, systems, infrastructure, and intelligence.
                  </h3>
                </div>

                <div className="mt-8 grid gap-3.5 md:grid-cols-3">
                  {triplePoints.map(({ title, text }) => (
                    <div key={title} className="rounded-[var(--radius-md)] border border-[var(--line)] bg-[rgba(7,16,32,0.86)] p-4">
                      <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--cyan)]">{title}</div>
                      <p className="mt-3 text-sm leading-[1.75] text-[var(--ink-soft)]">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Narrative column */}
        <Reveal delay={0.1} className="flex flex-col justify-center">
          <div className="eyebrow">Build horizon</div>
          <h2 className="display-title mt-6 text-[2.9rem] sm:text-[3.8rem] lg:text-[4.4rem]">
            This should feel like the future because that is what we are building toward.
          </h2>
          <p className="mt-6 max-w-[52ch] text-lg leading-[1.75] text-[var(--ink-soft)]">
            Vaughn Price is not limited to one service category. The company builds across public
            digital experience, internal systems, operational infrastructure, and intelligent
            products so clients can move as one connected business.
          </p>
          <ul className="mt-8 space-y-4" aria-label="Service areas covered">
            {servicePoints.map((detail) => (
              <li
                key={detail}
                className="flex gap-4 border-b border-[var(--line)] pb-4 text-sm leading-[1.8] text-[var(--ink-soft)]"
              >
                <span
                  className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[var(--cyan)]"
                  style={{ boxShadow: '0 0 14px rgba(45,225,252,0.55)' }}
                  aria-hidden="true"
                />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </Reveal>

      </div>
    </section>
  );
}
