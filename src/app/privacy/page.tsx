import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Vaughn Price Limited.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="overflow-hidden pt-28">
        <section className="section-gap">
          <div className="container-grid">
            <div className="max-w-4xl">
              <div className="eyebrow">Privacy</div>
              <h1 className="display-title mt-6 text-[3rem] sm:text-[4rem] lg:text-[5rem]">Privacy Policy</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--ink-soft)]">
                Vaughn Price Limited handles contact and project information with the minimum level
                of access needed to deliver proposals, communication, and software services.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <article className="system-card rounded-[28px] p-7">
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-[var(--ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                  Information We Collect
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--ink-soft)]">
                  <p>We may collect names, email addresses, phone numbers, company details, and project information shared through direct contact.</p>
                  <p>We may also collect basic technical and analytics information that helps us understand website usage and service performance.</p>
                </div>
              </article>

              <article className="system-card rounded-[28px] p-7">
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-[var(--ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                  How We Use It
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--ink-soft)]">
                  <p>We use submitted information to respond to enquiries, prepare project discussions, deliver services, and improve the way our systems operate.</p>
                  <p>We do not sell personal information. Access is limited to the people and tools required to run communication and delivery responsibly.</p>
                </div>
              </article>

              <article className="system-card rounded-[28px] p-7">
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-[var(--ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                  Retention And Requests
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--ink-soft)]">
                  <p>We keep information for as long as it is reasonably necessary for communication, delivery, legal obligations, and record keeping.</p>
                  <p>For privacy-related requests, contact <a href="mailto:info@vaughnprice.com" className="text-[var(--cyan)]">info@vaughnprice.com</a>.</p>
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
