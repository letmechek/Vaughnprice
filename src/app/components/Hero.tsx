'use client';

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-vp-navy-dark" id="hero">
      <div className="orb top-[-120px] right-[-80px] h-[360px] w-[360px] bg-vp-cyan glow" />
      <div className="orb bottom-[-160px] left-[-120px] h-[420px] w-[420px] bg-vp-purple glow" />
      <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden />
      <div className="container-grid relative flex min-h-screen flex-col items-center justify-center text-center">
        <div className="flex w-full max-w-[900px] flex-col items-center gap-6 pt-[20vh]">
          <p className="text-xs font-semibold tracking-[0.28em] text-vp-cyan fade-up delay-1">
            VAUGHN PRICE LIMITED
          </p>
          <h1
            className="bg-gradient-to-r from-vp-cyan via-vp-purple to-vp-cyan bg-clip-text text-5xl font-bold text-transparent fade-up delay-2 md:text-6xl lg:text-[72px] lg:leading-[1.1]"
          >
            Engineering Tomorrow&apos;s Enterprise Technology
          </h1>
          <p
            className="max-w-3xl text-lg text-slate-400 fade-up delay-3 md:text-xl"
          >
            We build scalable platforms, intelligent systems, and secure infrastructure that
            transform how modern enterprises operate.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 fade-up delay-4">
            <a
              href="#contact"
              className="inline-flex h-14 w-44 items-center justify-center rounded-full bg-vp-cyan text-base font-semibold text-slate-900 transition hover:scale-[1.02] hover:bg-[#2dd4f5]"
            >
              Start a Project
            </a>
            <a
              href="#services"
              className="inline-flex h-14 w-44 items-center justify-center rounded-full border border-vp-cyan/60 text-base font-semibold text-white transition hover:border-vp-purple hover:text-vp-cyan"
            >
              View Services
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 hidden h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-white/10 lg:flex">
          <div className="h-2 w-2 animate-bounce rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}
