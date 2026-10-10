import { useScrollReveal } from '@/hooks/useScrollReveal';
import { journeyItems } from '@/data/portfolioData';

export default function Journey() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="journey"
      className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200/60 dark:border-slate-800/60"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal ${visible ? 'visible' : ''}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-600 text-brand-600 dark:text-brand-400 mb-3 tracking-wide uppercase">
            Professional Journey
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-700 text-slate-900 dark:text-white tracking-tight mb-4">
            How I Got Here
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            My path from accounting to automation — built through hands-on projects, not just courses.
          </p>
        </div>

        {/* Journey cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {journeyItems.map((item, i) => (
            <div
              key={item.title}
              className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 card-hover hover:border-brand-200 dark:hover:border-brand-500/30 hover:shadow-xl transition-all duration-300"
              style={{
                animation: visible
                  ? `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s forwards`
                  : 'none',
                opacity: visible ? undefined : 0,
              }}
            >
              {/* Step number badge */}
              <div className="absolute -top-3 -right-3 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-white text-xs font-700 shadow-md">
                {i + 1}
              </div>

              {/* Icon */}
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/10 to-accent-500/10 text-brand-600 dark:text-brand-400 group-hover:from-brand-500 group-hover:to-accent-500 group-hover:text-white transition-all duration-300 mb-4">
                <item.icon size={22} />
              </span>

              <h3 className="font-display text-base font-700 text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          {/* CTA card */}
          <div
            className="group relative rounded-2xl border border-brand-200 dark:border-brand-500/20 bg-gradient-to-br from-brand-50 to-accent-50 dark:from-brand-500/10 dark:to-accent-500/10 p-6 flex flex-col items-center justify-center text-center card-hover hover:shadow-xl transition-all duration-300"
            style={{
              animation: visible
                ? `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${journeyItems.length * 0.1}s forwards`
                : 'none',
              opacity: visible ? undefined : 0,
            }}
          >
            <p className="font-display text-base font-700 text-slate-900 dark:text-white mb-2">
              Still Learning
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              I continue building projects and refining my approach to automation. Each project
              teaches me something new about reliability, edge cases, and practical design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
