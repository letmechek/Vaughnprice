import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

export const metadata = {
  title: 'Terms Of Use',
  description: 'Terms of use for Vaughn Price Limited.',
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="overflow-hidden pt-28">
        <section className="section-gap">
          <div className="container-grid">
            <div className="max-w-4xl">
              <div className="eyebrow">Terms</div>
              <h1 className="display-title mt-6 text-[3rem] sm:text-[4rem] lg:text-[5rem]">Terms Of Use</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--ink-soft)]">
                These terms describe the general conditions for using the Vaughn Price Limited
                website and engaging with our materials, communications, and services.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <article className="system-card rounded-[28px] p-7">
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-[var(--ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                  Website Use
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--ink-soft)]">
                  <p>The site content is provided for general information about our company, capabilities, and ways of working.</p>
                  <p>You may not misuse the site, attempt unauthorized access, or use the content in a way that causes harm, disruption, or misrepresentation.</p>
                </div>
              </article>

              <article className="system-card rounded-[28px] p-7">
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-[var(--ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                  Project Engagements
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--ink-soft)]">
                  <p>Any delivery work, proposals, and commercial engagements are governed by separate written agreements between Vaughn Price Limited and the client.</p>
                  <p>Nothing on this site creates a binding delivery commitment until both parties agree to scope, fees, timelines, and responsibilities in writing.</p>
                </div>
              </article>

              <article className="system-card rounded-[28px] p-7">
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-[var(--ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                  Liability And Contact
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--ink-soft)]">
                  <p>We aim to keep website information accurate and current, but we do not guarantee uninterrupted availability or complete suitability for every purpose.</p>
                  <p>Questions about these terms can be sent to <a href="mailto:info@vaughnprice.com" className="text-[var(--cyan)]">info@vaughnprice.com</a>.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
