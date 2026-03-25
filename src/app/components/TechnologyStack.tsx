import Image from 'next/image';
import { Reveal } from './Reveal';

const groups = [
  {
    title: 'Experience layer',
    items: [
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
      { name: 'Node.js', icon: '/icons/nodejs.svg' },
      { name: 'Python', icon: '/icons/python.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
    ],
  },
  {
    title: 'Infrastructure layer',
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
    <section id="stack" className="section-gap border-t border-[var(--line)] bg-[rgba(6,14,25,0.38)]">
      <div className="container-grid">
        <Reveal className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
          <div>
            <div className="eyebrow">Technology substrate</div>
            <h2 className="display-title mt-6 text-[3rem] sm:text-[4rem] lg:text-[4.4rem]">
              The stack underneath the ambition.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[var(--ink-soft)]">
            We use the right layer for the right problem: frontend systems, backend services,
            infrastructure, data movement, telemetry, and intelligent tooling that can evolve with
            the business.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 xl:grid-cols-[0.8fr_1fr_1.2fr]">
          {groups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.08}>
              <div className="system-card rounded-[30px] p-6 md:p-7">
                <div className="flex items-center justify-between border-b border-[var(--line)] pb-5">
                  <h3 className="text-xl text-[var(--ink)]">{group.title}</h3>
                  <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--cyan)]">
                    {group.items.length} tools
                  </span>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {group.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="rounded-[22px] border border-[var(--line)] bg-[rgba(9,28,49,0.72)] p-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(247,251,255,0.92)]">
                        <Image src={tech.icon} alt={`${tech.name} logo`} width={22} height={22} className="h-6 w-6 object-contain" />
                      </div>
                      <div className="mt-4 text-sm leading-6 text-[var(--ink)]">{tech.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
