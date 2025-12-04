import { Reveal } from './Reveal';

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[600px] items-center overflow-hidden bg-vp-navy-dark py-24 md:py-30"
    >
      <div className="orb top-[-80px] left-[-120px] h-[360px] w-[360px] bg-vp-purple glow" />
      <div className="orb bottom-[-80px] right-[-120px] h-[360px] w-[360px] bg-vp-cyan glow" />
      <div className="container-grid relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="bg-gradient-to-r from-vp-cyan to-vp-purple bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-8 text-lg text-slate-300">
            Let&apos;s discuss how we can help you achieve your goals.
          </p>
          <div className="mt-12">
            <a
              className="inline-flex h-16 w-60 items-center justify-center rounded-full bg-vp-cyan text-lg font-semibold text-slate-900 transition hover:scale-[1.02] hover:bg-[#2dd4f5]"
              href="mailto:info@vaughnprice.com"
            >
              Schedule a Call
            </a>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            or email us at{' '}
            <a className="text-vp-cyan" href="mailto:info@vaughnprice.com">
              info@vaughnprice.com
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
