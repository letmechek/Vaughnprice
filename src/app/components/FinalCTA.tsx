import { Reveal } from './Reveal';

export function FinalCTA() {
  return (
    <section id="contact" className="section-gap-lg" aria-labelledby="contact-heading">
      <div className="container-grid">
        <Reveal>
          <div className="system-card relative overflow-hidden rounded-[var(--radius-xl)] p-8 md:p-12 lg:p-16">
            {/* Ambient glow — static, no animation */}
            <div
              className="pointer-events-none absolute left-[-8rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(79,163,255,0.14) 0%, transparent 70%)', filter: 'blur(40px)' }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute bottom-[-6rem] right-[-6rem] h-[24rem] w-[24rem] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(45,225,252,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
              aria-hidden="true"
            />

            <div className="card-accent-line" aria-hidden="true" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="eyebrow">Ready to build what is next</div>
                <h2 id="contact-heading" className="display-title mt-6 text-[3rem] sm:text-[4rem] lg:text-[5rem]">
                  If the ambition is real, the system behind it has to be real too.
                </h2>
                <p className="mt-6 max-w-[52ch] text-lg leading-[1.75] text-[var(--ink-soft)]">
                  Bring the product idea, digital challenge, internal complexity, or future roadmap.
                  Vaughn Price can design the experience, build the software, and engineer the stack
                  that carries it.
                </p>
              </div>

              <div className="flex flex-col items-start gap-4 lg:items-end lg:pb-1">
                <a
                  href="https://calendly.com/abdullahi-ali1017/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary neon-outline"
                  aria-label="Book a strategy call — opens Calendly in a new tab"
                >
                  Book A Strategy Call
                </a>
                <a
                  href="mailto:info@vaughnprice.com"
                  className="cursor-pointer text-sm uppercase tracking-[0.22em] text-[var(--cyan)] transition-opacity hover:opacity-75"
                  aria-label="Send an email to Vaughn Price"
                >
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
