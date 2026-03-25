import { Reveal } from './Reveal';

const pillars = [
  {
    label: 'Customer-facing',
    title: 'Websites And Apps',
    text: 'Digital experiences, product interfaces, and mobile applications built to be fast, clear, and commercially useful.',
  },
  {
    label: 'Operational core',
    title: 'Systems And Workflows',
    text: 'Internal platforms, process tooling, dashboards, and business software that reduce friction and improve control.',
  },
  {
    label: 'Scale layer',
    title: 'Cloud And Data',
    text: 'Infrastructure, integration, and data systems that make software stable, measurable, and ready for growth.',
  },
  {
    label: 'Next frontier',
    title: 'AI-Powered Software',
    text: 'Applied AI products and automation workflows designed to extend capability, not just add novelty.',
  },
];

export function Stats() {
  return (
    <section id="outcomes" className="section-gap border-y border-[var(--line)] bg-[rgba(7,17,31,0.42)]">
      <div className="container-grid">
        <Reveal className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <div className="eyebrow">What We Build</div>
            <h2 className="display-title mt-6 text-[2.8rem] sm:text-[3.8rem] lg:text-[4.4rem]">
              Software for the visible edge and the hidden engine.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[30px] border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
            {pillars.map((item) => (
              <article key={item.label} className="bg-[rgba(9,22,38,0.94)] p-7 md:p-8">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--cyan)]">{item.label}</p>
                <h3 className="mt-4 text-[2rem] text-[var(--ink)]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">{item.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
