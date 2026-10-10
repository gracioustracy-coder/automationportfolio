import { useScrollReveal } from '@/hooks/useScrollReveal';
import { skillCategories } from '@/data/portfolioData';

export default function Skills() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="py-20 lg:py-28 bg-white dark:bg-slate-950">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal ${visible ? 'visible' : ''}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-600 text-brand-600 dark:text-brand-400 mb-3 tracking-wide uppercase">
            Skills & Technologies
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-700 text-slate-900 dark:text-white tracking-tight mb-4">
            Tools I Work With
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            These skills are demonstrated through real project work — not claims of certification.
            Each one appears in at least one of the projects below.
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-6 card-hover hover:border-brand-200 dark:hover:border-brand-500/30 transition-all duration-300"
              style={{
                animation: visible
                  ? `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s forwards`
                  : 'none',
                opacity: visible ? undefined : 0,
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-md">
                  <cat.icon size={18} />
                </span>
                <h3 className="font-display text-base font-700 text-slate-900 dark:text-white">
                  {cat.title}
                </h3>
              </div>
              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-1.5 rounded-lg text-xs font-600 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-brand-300 dark:hover:border-brand-500/40 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Note card */}
          <div
            className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-transparent p-6 flex items-center"
            style={{
              animation: visible
                ? `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${skillCategories.length * 0.1}s forwards`
                : 'none',
              opacity: visible ? undefined : 0,
            }}
          >
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed italic">
              "I list only what I have used in actual projects. These skills are demonstrated in
              the case studies below — not claimed from courses or certifications."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
