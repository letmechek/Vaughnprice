import Image from 'next/image';
import { Reveal } from './Reveal';

const groups = [
  {
    title: 'Experience layer',
    description: 'Frontend and server runtimes',
    items: [
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
      { name: 'Node.js', icon: '/icons/nodejs.svg' },
      { name: 'Python', icon: '/icons/python.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
    ],
  },
  {
    title: 'Infrastructure layer',
    description: 'Cloud, containers, and IaC',
    items: [
      { name: 'AWS', icon: '/icons/aws.svg' },
      { name: 'Azure', icon: '/icons/azure.svg' },
      { name: 'Google Cloud', icon: '/icons/gcp.svg' },
      { name: 'Kubernetes', icon: '/icons/kubernetes.svg' },
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'Terraform', icon: '/icons/terraform.svg' },
    ],
  },
  {
    title: 'Data and intelligence',
    description: 'Storage, pipelines, and telemetry',
    items: [
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
      { name: 'Kafka', icon: '/icons/kafka.svg' },
      { name: 'Redis', icon: '/icons/redis.svg' },
      { name: 'Snowflake', icon: '/icons/snowflake.svg' },
      { name: 'Fivetran', icon: '/icons/fivetran.svg' },
      { name: 'OpenTelemetry', icon: '/icons/opentelemetry.svg' },
      { name: 'GraphQL', icon: '/icons/graphql.svg' },
      { name: 'Datadog', icon: '/icons/datadog.svg' },
    ],
  },
];

export function TechnologyStack() {
  return (
    <section id="stack" className="section-gap border-t border-[var(--line)] bg-[rgba(5,11,22,0.40)]" aria-labelledby="stack-heading">
      <div className="container-grid">
        <Reveal className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
          <div>
            <div className="eyebrow">Technology substrate</div>
            <h2 id="stack-heading" className="display-title mt-6 text-[3rem] sm:text-[3.8rem] lg:text-[4.2rem]">
              The stack underneath the ambition.
            </h2>
          </div>
          <p className="max-w-[54ch] text-lg leading-[1.75] text-[var(--ink-soft)]">
            We use the right layer for the right problem: frontend systems, backend services,
            infrastructure, data movement, telemetry, and intelligent tooling that can evolve with
            the business.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 xl:grid-cols-[0.8fr_1fr_1.2fr]">
          {groups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.07}>
              <div className="system-card rounded-[var(--radius-xl)] p-6 md:p-7">
                <div className="flex items-start justify-between border-b border-[var(--line)] pb-5">
                  <div>
                    <h3 className="text-xl text-[var(--ink)]">{group.title}</h3>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[var(--ink-dim)]">
                      {group.description}
                    </p>
                  </div>
                  <span className="shrink-0 text-[11px] uppercase tracking-[0.28em] text-[var(--cyan)]">
                    {group.items.length} tools
                  </span>
                </div>
                <ul className="mt-6 grid grid-cols-2 gap-3.5" aria-label={`${group.title} technologies`}>
                  {group.items.map((tech) => (
                    <li
                      key={tech.name}
                      className="rounded-[var(--radius-md)] border border-[var(--line)] bg-[rgba(8,20,42,0.70)] p-4 transition-colors duration-200 hover:border-[var(--line-strong)]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(240,248,255,0.94)]">
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} logo`}
                          width={22}
                          height={22}
                          className="h-6 w-6 object-contain"
                        />
                      </div>
                      <div className="mt-4 text-sm leading-[1.5] text-[var(--ink)]">{tech.name}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
