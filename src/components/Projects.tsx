import { useEffect, useState } from 'react';
import { ArrowRight, X, CheckCircle2, AlertTriangle, Lightbulb, Target, Wrench, Eye } from 'lucide-react';
import { projects, type Project } from '@/data/portfolioData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const accentMap = {
  blue: {
    text: 'text-brand-600 dark:text-brand-400',
    bg: 'bg-brand-500',
    bgLight: 'bg-brand-50 dark:bg-brand-500/10',
    border: 'border-brand-200 dark:border-brand-500/20',
    gradient: 'from-brand-500 to-brand-600',
    badge: 'bg-brand-50 dark:bg-brand-500/10 text-brand-700 dark:text-brand-300 border-brand-200 dark:border-brand-500/20',
  },
  cyan: {
    text: 'text-accent-600 dark:text-accent-400',
    bg: 'bg-accent-500',
    bgLight: 'bg-accent-50 dark:bg-accent-500/10',
    border: 'border-accent-200 dark:border-accent-500/20',
    gradient: 'from-accent-500 to-accent-600',
    badge: 'bg-accent-50 dark:bg-accent-500/10 text-accent-700 dark:text-accent-300 border-accent-200 dark:border-accent-500/20',
  },
  teal: {
    text: 'text-teal-600 dark:text-teal-400',
    bg: 'bg-teal-500',
    bgLight: 'bg-teal-50 dark:bg-teal-500/10',
    border: 'border-teal-200 dark:border-teal-500/20',
    gradient: 'from-teal-500 to-teal-600',
    badge: 'bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-500/20',
  },
};

function WorkflowDiagram({ project, accent }: { project: Project; accent: typeof accentMap.blue }) {
  return (
    <div className="flex flex-wrap items-center gap-2 my-4">
      {project.workflow.map((step, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${accent.bgLight} ${accent.border} border`}>
            <step.icon size={14} className={accent.text} />
            <span className="text-xs font-600 text-slate-700 dark:text-slate-200 whitespace-nowrap">
              {step.label}
            </span>
          </div>
          {i < project.workflow.length - 1 && (
            <ArrowRight size={14} className="text-slate-400 dark:text-slate-600 flex-shrink-0" />
          )}
        </div>
      ))}
    </div>
  );
}

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const accent = accentMap[project.accent];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-[100] flex items-start justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 dark:bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl my-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`relative px-6 sm:px-8 py-6 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-br ${accent.bgLight}`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/60 dark:hover:bg-slate-800/60 text-slate-500 dark:text-slate-400 transition-colors"
            aria-label="Close case study"
          >
            <X size={20} />
          </button>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`text-[10px] font-700 uppercase tracking-wider px-2 py-0.5 rounded ${accent.badge} border`}>
              Case Study
            </span>
            {project.supporting && (
              <span className="text-[10px] font-700 uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                Supporting Project
              </span>
            )}
          </div>
          <h3 id="case-study-title" className="font-display text-xl sm:text-2xl font-700 text-slate-900 dark:text-white pr-8">
            {project.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            {project.tagline}
          </p>
          {/* Tools */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tools.map((tool) => (
              <span key={tool} className={`text-xs font-600 px-2.5 py-1 rounded-lg ${accent.badge} border`}>
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="px-6 sm:px-8 py-6 space-y-6 max-h-[60vh] sm:max-h-[55vh] overflow-y-auto">
          {/* Problem */}
          <div>
            <h4 className="flex items-center gap-2 font-display text-sm font-700 text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
              <Target size={16} className={accent.text} /> Problem
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div>
            <h4 className="flex items-center gap-2 font-display text-sm font-700 text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
              <Lightbulb size={16} className={accent.text} /> Solution
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Workflow */}
          <div>
            <h4 className="font-display text-sm font-700 text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
              Workflow Overview
            </h4>
            <WorkflowDiagram project={project} accent={accent} />
          </div>

          {/* Key Decisions */}
          <div>
            <h4 className="flex items-center gap-2 font-display text-sm font-700 text-slate-900 dark:text-white mb-3 uppercase tracking-wide">
              <Wrench size={16} className={accent.text} /> Key Technical Decisions
            </h4>
            <div className="space-y-3">
              {project.keyDecisions.map((d, i) => (
                <div key={i} className="flex gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-4">
                  <CheckCircle2 size={18} className={`flex-shrink-0 mt-0.5 ${accent.text}`} />
                  <div>
                    <p className="text-sm font-600 text-slate-800 dark:text-slate-200">{d.title}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {d.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div>
            <h4 className="flex items-center gap-2 font-display text-sm font-700 text-slate-900 dark:text-white mb-3 uppercase tracking-wide">
              <AlertTriangle size={16} className="text-amber-500" /> Challenges & Problem-Solving
            </h4>
            <div className="space-y-3">
              {project.challenges.map((c, i) => (
                <div key={i} className="flex gap-3 rounded-xl border border-amber-200/50 dark:border-amber-500/20 bg-amber-50/50 dark:bg-amber-500/5 p-4">
                  <AlertTriangle size={18} className="flex-shrink-0 mt-0.5 text-amber-500" />
                  <div>
                    <p className="text-sm font-600 text-slate-800 dark:text-slate-200">{c.title}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {c.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Result */}
          <div>
            <h4 className="flex items-center gap-2 font-display text-sm font-700 text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
              <CheckCircle2 size={16} className="text-emerald-500" /> Result
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.result}
            </p>
          </div>

          {/* Evidence */}
          <div>
            <h4 className="flex items-center gap-2 font-display text-sm font-700 text-slate-900 dark:text-white mb-3 uppercase tracking-wide">
              <Eye size={16} className={accent.text} /> Evidence Available
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.evidence.map((e) => (
                <span
                  key={e}
                  className="inline-flex items-center gap-1.5 text-xs font-500 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                >
                  <CheckCircle2 size={12} className="text-emerald-500" />
                  {e}
                </span>
              ))}
            </div>
          </div>

          {project.evidenceImages && project.evidenceImages.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 font-display text-sm font-700 text-slate-900 dark:text-white mb-3 uppercase tracking-wide">
                <Eye size={16} className={accent.text} /> Project Screenshots
              </h4>
              <div className="grid gap-4">
                {project.evidenceImages.map((image) => (
                  <figure
                    key={image.src}
                    className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
                  >
                    <div className="flex items-center justify-center bg-slate-100 p-2 dark:bg-slate-950 sm:p-4">
                      <img
                        src={image.src}
                        alt={image.caption}
                        className="max-h-[420px] w-full object-contain"
                      />
                    </div>
                    <figcaption className="border-t border-slate-200 px-4 py-3 text-xs leading-relaxed text-slate-600 dark:border-slate-800 dark:text-slate-400">
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onView }: { project: Project; onView: () => void }) {
  const accent = accentMap[project.accent];

  return (
    <div
      className={`group relative rounded-2xl border ${accent.border} bg-white dark:bg-slate-950 overflow-hidden card-hover hover:shadow-2xl transition-all duration-300`}
    >
      {/* Top accent bar */}
      <div className={`h-1.5 bg-gradient-to-r ${accent.gradient}`} />

      {/* Card body */}
      <div className="p-6 sm:p-7">
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {project.featured && (
            <span className="text-[10px] font-700 uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900 dark:bg-white text-white dark:text-slate-900">
              Featured
            </span>
          )}
          {project.supporting && (
            <span className="text-[10px] font-700 uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
              Supporting
            </span>
          )}
          {project.tools.slice(0, 3).map((tool) => (
            <span key={tool} className={`text-[10px] font-600 px-2 py-0.5 rounded ${accent.badge} border`}>
              {tool}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className="text-[10px] font-600 text-slate-400 dark:text-slate-500">
              +{project.tools.length - 3}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-700 text-slate-900 dark:text-white mb-2">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 line-clamp-3">
          {project.tagline}
        </p>

        {/* Mini workflow preview */}
        <div className="flex flex-wrap items-center gap-1.5 mb-5">
          {project.workflow.slice(0, 5).map((step, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className={`flex items-center justify-center w-7 h-7 rounded-lg ${accent.bgLight} ${accent.text}`}>
                <step.icon size={13} />
              </span>
              {i < Math.min(project.workflow.length, 5) - 1 && (
                <span className="text-slate-300 dark:text-slate-700 text-xs">→</span>
              )}
            </div>
          ))}
          {project.workflow.length > 5 && (
            <span className="text-xs text-slate-400 dark:text-slate-500 ml-1">
              +{project.workflow.length - 5} more
            </span>
          )}
        </div>

        {/* CTA */}
        <button
          onClick={onView}
          className={`inline-flex items-center gap-2 text-sm font-600 ${accent.text} group-hover:gap-3 transition-all`}
        >
          View Case Study
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [selected, setSelected] = useState<Project | null>(null);

  const featured = projects.filter((p) => p.featured);
  const supporting = projects.filter((p) => p.supporting);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200/60 dark:border-slate-800/60">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal ${visible ? 'visible' : ''}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-600 text-brand-600 dark:text-brand-400 mb-3 tracking-wide uppercase">
            Featured Projects
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-700 text-slate-900 dark:text-white tracking-tight mb-4">
            What I Have Built
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Real automation projects with documented workflows, technical decisions, challenges, and results.
          </p>
        </div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((project, i) => (
            <div
              key={project.id}
              style={{
                animation: visible
                  ? `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s forwards`
                  : 'none',
                opacity: visible ? undefined : 0,
              }}
            >
              <ProjectCard project={project} onView={() => setSelected(project)} />
            </div>
          ))}
        </div>

        {/* Supporting projects */}
        {supporting.length > 0 && (
          <>
            <h3 className="font-display text-lg font-700 text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wide">
              Supporting Work
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supporting.map((project, i) => (
                <div
                  key={project.id}
                  style={{
                    animation: visible
                      ? `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${(featured.length + i) * 0.12}s forwards`
                      : 'none',
                    opacity: visible ? undefined : 0,
                  }}
                >
                  <ProjectCard project={project} onView={() => setSelected(project)} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Modal */}
      {selected && <CaseStudyModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
