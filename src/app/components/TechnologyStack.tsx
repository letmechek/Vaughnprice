import { Reveal } from './Reveal';

const technologies = [
  'AWS',
  'Azure',
  'Google Cloud',
  'Kubernetes',
  'Docker',
  'Terraform',
  'Next.js',
  'Node.js',
  'Python',
  'TypeScript',
  'GraphQL',
  'PostgreSQL',
  'Kafka',
  'Redis',
  'OpenTelemetry',
  'Datadog',
  'Snowflake',
  'Fivetran',
];

export function TechnologyStack() {
  return (
    <section id="technology" className="section-gap bg-vp-navy-dark">
      <div className="container-grid">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold text-white md:text-5xl">Technologies We Master</h2>
        </Reveal>
        <div className="mt-[60px] grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {technologies.map((tech, index) => {
            const row = Math.floor(index / 6);
            const hoverClass =
              row === 0
                ? 'hover:border-vp-cyan'
                : row === 1
                  ? 'hover:border-vp-coral'
                  : 'hover:border-vp-purple';
            return (
              <Reveal key={tech} delay={index * 0.04}>
                <div
                  className={`card-surface flex h-[140px] min-h-[140px] min-w-[150px] flex-col items-center justify-center rounded-2xl border-2 border-transparent px-6 text-center transition ${hoverClass}`}
                >
                  <div className="text-sm font-semibold text-white">{tech}</div>
                  <div className="mt-4 h-12 w-12 rounded-full bg-white/5" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
