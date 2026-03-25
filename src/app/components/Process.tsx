import { Reveal } from './Reveal';

const steps = [
  {
    number: '01',
    title: 'Decode the system',
    text: 'Map the product ambition, operational complexity, user behaviour, and technical constraints before design starts.',
  },
  {
    number: '02',
    title: 'Design the architecture',
    text: 'Shape interfaces, workflows, platform decisions, and service boundaries so the build has structural clarity.',
  },
  {
    number: '03',
    title: 'Ship across layers',
    text: 'Build the visible product and the invisible operating backbone together instead of treating them as separate jobs.',
  },
  {
    number: '04',
    title: 'Evolve the machine',
    text: 'Use real signals, product learning, infrastructure telemetry, and business feedback to improve what ships next.',
  },
];

export function Process() {
  return (
    <section id="method" className="section-gap-lg">
      <div className="container-grid">
        <Reveal className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="eyebrow">Execution model</div>
            <h2 className="display-title mt-6 text-[3rem] sm:text-[4rem] lg:text-[4.6rem]">
              Innovation needs an operating method, not just good taste.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[var(--ink-soft)]">
            Our process is designed for product delivery, systems engineering, and scale. It is how
            websites, apps, business systems, and advanced software stay coherent under pressure.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <article className="system-card rounded-[28px] p-7">
                <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--cyan)]">{step.number}</div>
                <h3 className="mt-10 text-2xl leading-tight text-[var(--ink)]">{step.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[var(--ink-soft)]">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
