import Image from 'next/image';
import { Reveal } from './Reveal';

const technologies = [
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
  { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
  { name: 'OpenTelemetry', icon: 'https://avatars.githubusercontent.com/u/69953400?s=200&v=4' },
  { name: 'Datadog', icon: 'https://www.datadoghq.com/favicon.ico' },
  { name: 'Snowflake', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/snowflake/snowflake-original-wordmark.svg' },
  { name: 'Fivetran', icon: 'https://avatars.githubusercontent.com/u/10154255?s=200&v=4' },
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
              <Reveal key={tech.name} delay={index * 0.04}>
                <div
                  className={`card-surface flex h-[140px] min-h-[140px] min-w-[150px] flex-col items-center justify-center rounded-2xl border-2 border-transparent px-6 text-center transition ${hoverClass}`}
                >
                  <div className="h-10 w-10 flex-shrink-0">
                    <Image
                      src={tech.icon}
                      alt={`${tech.name} logo`}
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="mt-3 text-sm font-semibold text-white">{tech.name}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
