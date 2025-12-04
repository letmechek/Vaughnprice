import { Reveal } from './Reveal';

const steps = [
  {
    title: 'Discover & Align',
    description:
      'We map business objectives, success metrics, and technical constraints to create a program charter everyone rallies behind.',
    bullets: ['Stakeholder workshops', 'Current state assessment', 'Success metrics agreed'],
    accent: 'vp-cyan',
  },
  {
    title: 'Architect for Scale',
    description:
      'Solution architects design reference architectures, security controls, and delivery roadmaps that keep teams unblocked.',
    bullets: ['Target architecture', 'Security & compliance gates', 'Roadmap with milestones'],
    accent: 'vp-coral',
  },
  {
    title: 'Build & Automate',
    description:
      'Cross-functional squads deliver iteratively with automation, observability, and reliability engineered in from day one.',
    bullets: ['CI/CD & IaC pipelines', 'Resilience & load testing', 'Progressive delivery'],
    accent: 'vp-amber',
  },
  {
    title: 'Measure & Evolve',
    description:
      'We monitor business impact, train teams, and continuously tune the stack for performance, cost, and security.',
    bullets: ['Runbooks & playbooks', 'SLOs & analytics', 'Enablement and handover'],
    accent: 'vp-purple',
  },
];

export function Process() {
  const accentBorders = {
    'vp-cyan': 'border-vp-cyan text-vp-cyan',
    'vp-coral': 'border-vp-coral text-vp-coral',
    'vp-amber': 'border-vp-amber text-vp-amber',
    'vp-purple': 'border-vp-purple text-vp-purple',
  } as const;

  return (
    <section id="process" className="section-gap bg-vp-navy">
      <div className="container-grid">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold text-white md:text-5xl">How We Work</h2>
        </Reveal>
        <div className="relative mt-16 md:mt-20">
          <div className="absolute left-9 top-0 h-full w-px bg-slate-700/50 md:left-10" aria-hidden />
          <div className="flex flex-col gap-30">
            {steps.map((step, index) => {
              const bulletClass =
                step.accent === 'vp-cyan'
                  ? 'bg-vp-cyan'
                  : step.accent === 'vp-coral'
                    ? 'bg-vp-coral'
                    : step.accent === 'vp-amber'
                      ? 'bg-vp-amber'
                      : 'bg-vp-purple';

              return (
                <Reveal key={step.title} delay={index * 0.1}>
                  <div className="relative flex gap-6 md:gap-10">
                    <div
                      className={`relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-[3px] bg-vp-navy-dark text-3xl font-bold ${
                        accentBorders[step.accent as keyof typeof accentBorders]
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="pt-1">
                      <h3 className="text-2xl font-semibold text-white md:text-[32px]">
                        {step.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
                        {step.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        {step.bullets.map((point) => (
                          <div
                            key={point}
                            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                          >
                            <span className={`h-2 w-2 rounded-full ${bulletClass}`} />
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
