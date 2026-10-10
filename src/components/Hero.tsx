import { ArrowRight, Mail, Workflow, Brain, Database, Zap, Mail as MailIcon, Eye } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

const heroNodes = [
  { label: 'Email Trigger', icon: MailIcon, color: 'from-red-500 to-orange-500', delay: '0s' },
  { label: 'AI Extraction', icon: Brain, color: 'from-brand-500 to-accent-500', delay: '0.5s' },
  { label: 'Data Logging', icon: Database, color: 'from-emerald-500 to-teal-500', delay: '1s' },
  { label: 'Draft Review', icon: Eye, color: 'from-amber-500 to-yellow-500', delay: '1.5s' },
];

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-brand-950/20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/10 dark:bg-accent-500/15 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-brand-500/10 border border-brand-200/50 dark:border-brand-500/20 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-500 text-white">
                <Workflow size={11} />
              </span>
              <span className="text-xs font-600 text-brand-700 dark:text-brand-300 tracking-wide">
                Business Process & AI Automation
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-700 leading-[1.1] tracking-tight text-slate-900 dark:text-white mb-6">
              Turning Repetitive Business Processes Into{' '}
              <span className="gradient-text">Intelligent Automated Systems</span>
            </h1>

            {/* Name + title */}
            <div className="mb-6 space-y-1">
              <p className="text-lg font-600 text-slate-700 dark:text-slate-300">
                {personalInfo.name}
              </p>
              <p className="text-sm font-500 text-slate-500 dark:text-slate-400">
                {personalInfo.title}
              </p>
            </div>

            {/* Short bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              {personalInfo.shortBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={() => scrollTo('#projects')}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-600 text-sm shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 hover:scale-[1.02] transition-all duration-200"
              >
                View My Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-600 text-sm hover:border-brand-300 dark:hover:border-brand-500/50 hover:bg-brand-50/50 dark:hover:bg-slate-700/50 transition-all duration-200"
              >
                <Mail size={16} />
                Contact Me
              </button>
            </div>
          </div>

          {/* Right: Workflow visual + professional portrait */}
          <div className="relative animate-scale-in">
            {/* Professional portrait */}
            <div className="relative mx-auto max-w-sm">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-xl">
                <img
                  src="/assets/images/WhatsApp_Image_2026-10-08_at_2.52.40_AM_(1).jpeg"
                  alt={`${personalInfo.name} professional portrait`}
                  className="h-full w-full object-cover object-center"
                />
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-brand-500/20 to-transparent rounded-bl-full" />
              </div>

              {/* Floating accent badge */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 px-4 py-3 flex items-center gap-2 node-float">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
                  <Zap size={16} />
                </span>
                <div>
                  <p className="text-xs font-700 text-slate-900 dark:text-white">Automation</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">n8n · Zapier · AI</p>
                </div>
              </div>
            </div>

            {/* Workflow nodes visual */}
            <div className="hidden sm:block absolute -top-6 -right-2 lg:-right-6 space-y-2.5">
              {heroNodes.map((node, i) => (
                <div
                  key={node.label}
                  className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-lg border border-slate-200/60 dark:border-slate-700/60 px-3 py-2 shadow-md node-float"
                  style={{ animationDelay: node.delay }}
                >
                  <span className={`flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br ${node.color} text-white`}>
                    <node.icon size={12} />
                  </span>
                  <span className="text-xs font-600 text-slate-700 dark:text-slate-200 whitespace-nowrap">
                    {node.label}
                  </span>
                  {i < heroNodes.length - 1 && (
                    <span className="absolute -bottom-3 left-5 text-slate-300 dark:text-slate-600">↓</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
