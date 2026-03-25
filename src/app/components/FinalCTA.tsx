import { Reveal } from './Reveal';

export function FinalCTA() {
  return (
    <section id="contact" className="section-gap-lg">
      <div className="container-grid">
        <Reveal>
          <div className="system-card rounded-[34px] p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="eyebrow">Ready to build what is next</div>
                <h2 className="display-title mt-6 text-[3rem] sm:text-[4rem] lg:text-[5rem]">
                  If the ambition is real, the system behind it has to be real too.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--ink-soft)]">
                  Bring the product idea, digital challenge, internal complexity, or future roadmap.
                  Vaughn Price can design the experience, build the software, and engineer the stack
                  that carries it.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  className="neon-outline inline-flex h-14 items-center justify-center rounded-full border border-[rgba(45,225,252,0.24)] bg-[rgba(9,24,42,0.94)] px-7 text-sm font-medium uppercase tracking-[0.2em] text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-[rgba(45,225,252,0.45)]"
                  href="https://calendly.com/abdullahi-ali1017/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book A Strategy Call
                </a>
                <a href="mailto:info@vaughnprice.com" className="text-sm uppercase tracking-[0.22em] text-[var(--cyan)]">
                  info@vaughnprice.com
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
