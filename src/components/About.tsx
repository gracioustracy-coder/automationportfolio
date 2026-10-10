import { Calculator, Workflow, Brain, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const pillars = [
  { icon: Calculator, label: 'Accounting / Business Understanding' },
  { icon: Workflow, label: 'Automation' },
  { icon: Brain, label: 'AI' },
  { icon: ShieldCheck, label: 'Reliability & Human Oversight' },
];

export default function About() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-20 lg:py-28 bg-white dark:bg-slate-950">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal ${visible ? 'visible' : ''}`}
      >
        {/* Section header */}
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-600 text-brand-600 dark:text-brand-400 mb-3 tracking-wide uppercase">
            About Me
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-700 text-slate-900 dark:text-white tracking-tight mb-4">
            From Accounting to Automation
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Story */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              My background is in <span className="font-600 text-slate-900 dark:text-white">accounting</span> — a
              field where accuracy, process, and controls matter. That foundation shaped how I
              think about business operations: every step in a process should be traceable,
              verifiable, and reliable.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              I became interested in using technology to improve the repetitive business processes
              I encountered. Rather than accepting manual work as "just how it's done," I started
              building hands-on automation skills with tools like{' '}
              <span className="font-600 text-slate-900 dark:text-white">n8n</span> and{' '}
              <span className="font-600 text-slate-900 dark:text-white">Zapier</span>, along with{' '}
              <span className="font-600 text-slate-900 dark:text-white">OpenAI</span>,{' '}
              <span className="font-600 text-slate-900 dark:text-white">Airtable</span>, Gmail, forms,
              APIs, and other integrations.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              I am interested in solving{' '}
              <span className="font-600 text-slate-900 dark:text-white">real business problems</span>{' '}
              — not automating things simply for the sake of automation. My projects demonstrate
              workflow design, business logic, data handling, validation, troubleshooting, error
              handling, and human-in-the-loop processes where judgment should remain with people.
            </p>
          </div>

          {/* Pillars card */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-6 lg:p-8 h-full">
              <div className="mb-6 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
                <img
                  src="/assets/images/WhatsApp_Image_2026-10-08_at_2.52.40_AM_(1).jpeg"
                  alt="Professional portrait"
                  className="aspect-[5/3] w-full object-cover object-[center_36%]"
                />
              </div>
              <h3 className="font-display text-lg font-700 text-slate-900 dark:text-white mb-6">
                What I Bring Together
              </h3>
              <div className="space-y-4">
                {pillars.map((p, i) => (
                  <div
                    key={p.label}
                    className="flex items-center gap-4 group"
                    style={{
                      animation: visible
                        ? `slideInRight 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s forwards`
                        : 'none',
                      opacity: visible ? undefined : 0,
                    }}
                  >
                    <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-md group-hover:scale-110 transition-transform duration-200">
                      <p.icon size={20} />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-600 text-slate-800 dark:text-slate-200">
                        {p.label}
                      </p>
                    </div>
                    <span className="text-brand-400 font-700 text-sm">+</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                <p className="text-sm font-600 text-slate-900 dark:text-white">
                  = Practical, reliable automated systems
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Built around real business problems, not just connected tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
