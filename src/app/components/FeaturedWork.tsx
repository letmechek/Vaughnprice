import { Reveal } from './Reveal';

const servicePoints = [
  'Web platforms and digital products designed for growth',
  'Mobile apps and interfaces that connect users to real services',
  'Enterprise systems that organise operations and decision-making',
  'Cloud, data, and AI layers that power the next stage of scale',
];

export function FeaturedWork() {
  return (
    <section id="signature" className="section-gap">
      <div className="container-grid grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <div className="system-card rounded-[34px] p-8 md:p-10">
            <div className="relative overflow-hidden rounded-[26px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(9,24,42,0.92),rgba(7,16,29,0.96))] p-6 md:p-8">
              <div className="absolute inset-x-0 top-20 h-px bg-[rgba(120,170,220,0.12)]" />
              <div className="absolute left-10 top-0 bottom-0 w-px bg-[rgba(120,170,220,0.12)]" />
              <div className="absolute right-14 top-14 h-44 w-44 rounded-full border border-[rgba(45,225,252,0.2)]" />
              <div className="absolute bottom-12 left-20 h-36 w-36 rounded-full border border-[rgba(63,140,255,0.22)]" />
              <div className="absolute bottom-10 right-16 h-28 w-28 rotate-45 border border-[rgba(123,124,255,0.14)]" />
              <div className="relative flex min-h-[420px] flex-col justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--ink-soft)]">
                    Build topology
                  </p>
                  <h3 className="mt-4 max-w-md text-4xl leading-tight text-[var(--ink)]">
                    A joined-up build model across product, systems, infrastructure, and intelligence.
                  </h3>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    ['Signal', 'Find the real business constraint and the real user need.'],
                    ['System', 'Design the software, workflow, and architecture together.'],
                    ['Scale', 'Launch with a path to resilience, iteration, and growth.'],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-[24px] border border-[var(--line)] bg-[rgba(8,20,35,0.84)] p-4">
                      <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--cyan)]">{title}</div>
                      <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col justify-center">
          <div className="eyebrow">Build horizon</div>
          <h2 className="display-title mt-6 text-[3rem] sm:text-[4rem] lg:text-[4.6rem]">
            This should feel like the future because that is what we are building toward.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--ink-soft)]">
            Vaughn Price is not limited to one service category. The company builds across public
            digital experience, internal systems, operational infrastructure, and intelligent
            products so clients can move as one connected business.
          </p>
          <div className="mt-8 space-y-4">
            {servicePoints.map((detail) => (
              <div
                key={detail}
                className="flex gap-4 border-b border-[var(--line)] pb-4 text-sm leading-7 text-[var(--ink-soft)]"
              >
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[var(--cyan)] shadow-[0_0_18px_rgba(45,225,252,0.6)]" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
