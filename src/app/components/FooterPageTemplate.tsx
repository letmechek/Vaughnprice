import Link from 'next/link';
import { Footer } from './Footer';
import { Navigation } from './Navigation';
import type { FooterPage } from '../lib/footerLinks';

type FooterPageTemplateProps = {
  page: FooterPage;
};

export function FooterPageTemplate({ page }: FooterPageTemplateProps) {
  return (
    <>
      <Navigation />
      <main className="overflow-hidden pt-28">
        <section className="section-gap">
          <div className="container-grid">
            <div className="max-w-4xl">
              <div className="eyebrow">{page.category}</div>
              <h1 className="display-title mt-6 text-[3rem] sm:text-[4rem] lg:text-[5rem]">{page.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--ink-soft)]">{page.summary}</p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {page.sections.map((section) => (
                <article key={section.title} className="system-card rounded-[28px] p-7">
                  <h2
                    className="text-xl font-semibold tracking-[-0.03em] text-[var(--ink)]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--ink-soft)]">
                    {section.items.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="panel mt-10 rounded-[28px] p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--cyan)]">Next Step</p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--ink-soft)]">
                If this is the layer or build type you want to prioritize, we can shape the scope,
                define the system boundaries, and map the right delivery path from discovery to launch.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:info@vaughnprice.com"
                  className="neon-outline inline-flex h-12 items-center justify-center rounded-full border border-[rgba(45,225,252,0.24)] bg-[rgba(9,24,42,0.94)] px-6 text-sm font-medium uppercase tracking-[0.18em] text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-[rgba(45,225,252,0.45)]"
                >
                  Start A Conversation
                </a>
                <Link
                  href="/"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--line)] px-6 text-sm uppercase tracking-[0.18em] text-[var(--ink-soft)] transition hover:border-[rgba(45,225,252,0.32)] hover:text-[var(--ink)]"
                >
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
