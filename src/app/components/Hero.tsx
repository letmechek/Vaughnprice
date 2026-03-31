const lanes = ['Web platforms', 'Mobile apps', 'Enterprise systems', 'AI software'];

const metrics = [
  { label: 'Delivery modes', value: 'Design / Build / Scale' },
  { label: 'Core output', value: 'Products + Infrastructure' },
  { label: 'Operating style', value: 'Hands-on senior execution' },
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-24">
      <div className="hero-radial left-[-8rem] top-28 h-[18rem] w-[18rem] bg-[rgba(63,140,255,0.24)]" />
      <div className="hero-radial right-[-10rem] top-20 h-[20rem] w-[20rem] bg-[rgba(45,225,252,0.18)]" />
      <div className="hero-radial bottom-[-6rem] left-[32%] h-[16rem] w-[16rem] bg-[rgba(123,124,255,0.16)]" />

      <div className="container-grid grid min-h-[calc(100vh-6rem)] items-center gap-14 pb-16 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-20 lg:pt-20">
        <div className="max-w-3xl xl:max-w-[50rem]">
          <div className="eyebrow">Future-facing systems engineering</div>
          <h1 className="display-title mt-6 text-[3.6rem] sm:text-[5rem] lg:text-[6.1rem] xl:text-[7rem]">
            We build the
            <br />
            software layer
            <br />
            of modern business.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--ink-soft)] md:text-xl">
            Vaughn Price designs and ships websites, mobile apps, enterprise systems, cloud
            platforms, data products, and AI-powered tools for companies that want to build beyond
            today&apos;s standard playbook.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="neon-outline inline-flex h-14 items-center justify-center rounded-full border border-[rgba(45,225,252,0.24)] bg-[rgba(10,24,42,0.94)] px-7 text-sm font-medium uppercase tracking-[0.2em] text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-[rgba(45,225,252,0.45)]"
            >
              Launch A Project
            </a>
            <a
              href="#services"
              className="inline-flex h-14 items-center justify-center border-b border-[var(--cyan)] px-1 text-sm font-medium uppercase tracking-[0.2em] text-[var(--cyan)]"
            >
              Explore Capabilities
            </a>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {lanes.map((lane) => (
              <div key={lane} className="rounded-full border border-[var(--line)] bg-[rgba(11,26,45,0.75)] px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                {lane}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="system-card scanline rounded-[32px] p-6 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(45,225,252,0.65),transparent)] beam" />
            <div className="relative flex items-center justify-between border-b border-[var(--line)] pb-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--ink-soft)]">
                  Systems command view
                </p>
                <h2 className="mt-3 max-w-sm text-2xl leading-tight text-[var(--ink)] sm:text-[2rem]">
                  Products, platforms, and operations connected as one build system.
                </h2>
              </div>
              <div className="rounded-full border border-[rgba(45,225,252,0.2)] bg-[rgba(7,17,31,0.88)] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[var(--cyan)]">
                Live architecture
              </div>
            </div>

            <div className="mt-6 grid gap-4 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)]">
              <div className="system-card pulse-grid rounded-[28px] p-4 sm:p-5">
                <div className="relative min-h-[360px] overflow-hidden rounded-[20px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(8,20,35,0.9),rgba(9,28,49,0.9))] p-5 sm:min-h-[460px] lg:min-h-[540px]">
                  <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-[rgba(63,140,255,0.4)]" />
                  <div className="absolute right-12 top-14 h-36 w-36 rounded-full border border-[rgba(45,225,252,0.28)]" />
                  <div className="absolute left-12 top-20 h-[60%] w-px bg-[rgba(120,170,220,0.16)]" />
                  <div className="absolute left-12 right-10 top-28 h-px bg-[rgba(120,170,220,0.16)]" />
                  <div className="absolute bottom-14 left-8 h-28 w-28 rotate-45 border border-[rgba(123,124,255,0.18)]" />
                  <div className="absolute right-12 bottom-14 flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(45,225,252,0.3)]">
                    <div className="orbit-dot h-2 w-2 rounded-full bg-[var(--cyan)]" />
                  </div>
                  <div className="relative z-10 mt-36 max-w-[14rem] rounded-[24px] bg-[rgba(6,16,29,0.36)] px-4 py-5 backdrop-blur-[2px] sm:mt-44 sm:max-w-[16rem] sm:px-5 lg:mt-52 lg:max-w-[18rem] xl:max-w-[19rem]">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--ink-soft)]">
                      Delivery engine
                    </p>
                    <p className="mt-4 text-[clamp(2.2rem,4.2vw,3.8rem)] leading-[0.9] tracking-[-0.035em] text-[var(--ink)]">
                      Design.
                      <br />
                      Build.
                      <br />
                      Evolve.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-[26px] border border-[var(--line)] bg-[rgba(8,20,35,0.78)] p-5 sm:p-6">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--ink-soft)]">{metric.label}</p>
                    <p className="mt-4 text-[clamp(1.65rem,3vw,2.3rem)] leading-[1] text-[var(--ink)]">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
