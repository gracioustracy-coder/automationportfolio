import { useScrollReveal } from '@/hooks/useScrollReveal';
import { services } from '@/data/portfolioData';

export default function WhatIDo() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="what-i-do"
      className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200/60 dark:border-slate-800/60"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal ${visible ? 'visible' : ''}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-600 text-brand-600 dark:text-brand-400 mb-3 tracking-wide uppercase">
            What I Do
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-700 text-slate-900 dark:text-white tracking-tight mb-4">
            Automation That Solves Real Business Problems
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            I design and build automated workflows that connect tools, process data with AI, and
            keep humans involved where judgment matters.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 card-hover hover:shadow-xl hover:border-brand-200 dark:hover:border-brand-500/30 transition-all duration-300"
              style={{
                animation: visible
                  ? `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s forwards`
                  : 'none',
                opacity: visible ? undefined : 0,
              }}
            >
              {/* Icon */}
              <div className="mb-5">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/10 to-accent-500/10 text-brand-600 dark:text-brand-400 group-hover:from-brand-500 group-hover:to-accent-500 group-hover:text-white transition-all duration-300">
                  <service.icon size={22} />
                </span>
              </div>
              {/* Content */}
              <h3 className="font-display text-lg font-700 text-slate-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
              {/* Hover accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
