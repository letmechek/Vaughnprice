import { Reveal } from './Reveal';

const steps = [
  {
    number: '01',
    title: 'Decode the system',
    text: 'Map the product ambition, operational complexity, user behaviour, and technical constraints before design starts.',
    accent: 'var(--blue)',
  },
  {
    number: '02',
    title: 'Design the architecture',
    text: 'Shape interfaces, workflows, platform decisions, and service boundaries so the build has structural clarity.',
    accent: 'var(--cyan)',
  },
  {
    number: '03',
    title: 'Ship across layers',
    text: 'Build the visible product and the invisible operating backbone together instead of treating them as separate jobs.',
    accent: 'var(--violet)',
  },
  {
    number: '04',
    title: 'Evolve the machine',
    text: 'Use real signals, product learning, infrastructure telemetry, and business feedback to improve what ships next.',
    accent: 'var(--teal)',
  },
];

export function Process() {
  return (
    <section id="method" className="section-gap-lg" aria-labelledby="method-heading">
      <div className="container-grid">
        <Reveal className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="eyebrow">Execution model</div>
            <h2 id="method-heading" className="display-title mt-6 text-[3rem] sm:text-[4rem] lg:text-[4.4rem]">
              Innovation needs an operating method, not just good taste.
            </h2>
          </div>
          <p className="max-w-[52ch] text-lg leading-[1.75] text-[var(--ink-soft)]">
            Our process is designed for product delivery, systems engineering, and scale. It is how
            websites, apps, business systems, and advanced software stay coherent under pressure.
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-5 lg:grid-cols-4" aria-label="Our four-step process">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.07}>
              <li className="system-card system-card-interactive rounded-[var(--radius-lg)] p-7">
                <div
                  className="text-[11px] uppercase tracking-[0.3em]"
                  style={{ color: step.accent }}
                  aria-hidden="true"
                >
                  {step.number}
                </div>
                <div
                  className="mt-5 h-px w-10"
                  style={{ background: step.accent, opacity: 0.3 }}
                  aria-hidden="true"
                />
                <h3 className="mt-6 text-[1.35rem] leading-tight text-[var(--ink)]">{step.title}</h3>
                <p className="mt-4 text-sm leading-[1.85] text-[var(--ink-soft)]">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
