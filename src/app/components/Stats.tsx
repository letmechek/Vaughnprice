import { Reveal } from './Reveal';

const pillars = [
  {
    label: 'Customer-facing',
    title: 'Websites And Apps',
    text: 'Digital experiences, product interfaces, and mobile applications built to be fast, clear, and commercially useful.',
    accent: 'var(--cyan)',
  },
  {
    label: 'Operational core',
    title: 'Systems And Workflows',
    text: 'Internal platforms, process tooling, dashboards, and business software that reduce friction and improve control.',
    accent: 'var(--blue)',
  },
  {
    label: 'Scale layer',
    title: 'Cloud And Data',
    text: 'Infrastructure, integration, and data systems that make software stable, measurable, and ready for growth.',
    accent: 'var(--violet)',
  },
  {
    label: 'Next frontier',
    title: 'AI-Powered Software',
    text: 'Applied AI products and automation workflows designed to extend capability, not just add novelty.',
    accent: 'var(--teal)',
  },
];

export function Stats() {
  return (
    <section id="outcomes" className="section-gap border-y border-[var(--line)] bg-[rgba(6,12,24,0.44)]" aria-labelledby="outcomes-heading">
      <div className="container-grid">
        <Reveal className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <div className="eyebrow">What We Build</div>
            <h2 id="outcomes-heading" className="display-title mt-6 text-[2.8rem] sm:text-[3.6rem] lg:text-[4.2rem]">
              Software for the visible edge and the hidden engine.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[var(--radius-xl)] border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
            {pillars.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.06}>
                <article className="h-full bg-[rgba(7,16,30,0.96)] p-7 md:p-8">
                  <p
                    className="text-[11px] uppercase tracking-[0.28em]"
                    style={{ color: item.accent }}
                  >
                    {item.label}
                  </p>
                  <h3 className="mt-4 text-[1.85rem] leading-tight text-[var(--ink)]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-[1.8] text-[var(--ink-soft)]">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
