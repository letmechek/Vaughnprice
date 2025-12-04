'use client';

import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

const stats: Stat[] = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 150, suffix: '+', label: 'Enterprise Clients' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 24, suffix: '/7', label: 'Support Available' },
];

function StatCard({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const start = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      setDisplay(Math.floor(progress * stat.value));
      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(stat.value);
    };

    requestAnimationFrame(step);
  }, [isVisible, stat.value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="text-5xl font-extrabold text-white sm:text-6xl">
        {display}
        {stat.suffix}
      </div>
      <div className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
        {stat.label}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section
      id="stats"
      className="relative isolate flex min-h-[200px] items-center justify-center overflow-hidden bg-gradient-to-r from-vp-cyan/10 via-transparent to-vp-purple/10 py-16"
    >
      <div className="container-grid">
        <Reveal>
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-16">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
