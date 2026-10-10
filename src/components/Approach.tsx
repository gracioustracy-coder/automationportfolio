import { useScrollReveal } from '@/hooks/useScrollReveal';
import { approachSteps } from '@/data/portfolioData';

export default function Approach() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="approach" className="py-20 lg:py-28 bg-white dark:bg-slate-950">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal ${visible ? 'visible' : ''}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-600 text-brand-600 dark:text-brand-400 mb-3 tracking-wide uppercase">
            My Automation Approach
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-700 text-slate-900 dark:text-white tracking-tight mb-4">
            More Than Just Connecting Tools
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Good automation is not just linking APIs together. It is understanding the business
            problem, designing around it, handling what goes wrong, and knowing where humans should
            stay involved.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500 via-accent-500 to-teal-500 sm:-translate-x-px" />

          <div className="space-y-6 sm:space-y-8">
            {approachSteps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`relative flex items-center gap-4 sm:gap-0 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                  style={{
                    animation: visible
                      ? `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s forwards`
                      : 'none',
                    opacity: visible ? undefined : 0,
                  }}
                >
                  {/* Node dot */}
                  <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 z-10">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-brand-500 shadow-md">
                      <step.icon size={16} className="text-brand-600 dark:text-brand-400" />
                    </span>
                  </div>

                  {/* Content card */}
                  <div className={`pl-16 sm:pl-0 sm:w-1/2 ${isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5 card-hover hover:border-brand-200 dark:hover:border-brand-500/30 hover:shadow-lg transition-all duration-300">
                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'sm:justify-end' : ''}`}>
                        <span className="text-xs font-700 text-brand-500">
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="font-display text-base font-700 text-slate-900 dark:text-white mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
