import Image from 'next/image';
import { Reveal } from './Reveal';


export function FeaturedWork() {
  return (
    <section id="work" className="section-gap bg-vp-navy-dark">
      <div className="container-grid grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl border-2 border-vp-cyan/60 shadow-glow">
            <div className="absolute inset-0 bg-gradient-to-t from-vp-navy-dark/50 via-transparent to-transparent" />
            <Image
              src="/2.png"
              alt="Featured enterprise platform preview"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.15} className="relative">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-vp-coral/5 blur-3xl" aria-hidden />
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-vp-coral">
            Featured Project
          </p>
          <h3 className="mt-5 text-4xl font-semibold text-white md:text-5xl">
            Connected Operations Platform
          </h3>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            A unified control plane that orchestrates supply chain, finance, and compliance across
            48 countries. Built with zero-downtime deployments, real-time observability, and
            predictive analytics for mission-critical reliability.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-10">
            <div>
              <div className="text-3xl font-bold text-vp-cyan">4.8x</div>
              <p className="text-sm text-slate-400">Deployment velocity</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-vp-cyan">62%</div>
              <p className="text-sm text-slate-400">Incident reduction</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-vp-cyan">99.98%</div>
              <p className="text-sm text-slate-400">Uptime across regions</p>
            </div>
          </div>
          <a
            href="#contact"
            className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-vp-coral px-6 text-base font-semibold text-white transition hover:scale-[1.02] hover:bg-[#ff7f7f]"
          >
            Explore the Case Study
          </a>
        </Reveal>
      </div>
    </section>
  );
}
