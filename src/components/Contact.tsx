import { Mail, Linkedin, Github, ArrowUpRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [copied, setCopied] = useState(false);

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: personalInfo.email.startsWith('[') ? undefined : `mailto:${personalInfo.email}`,
      color: 'from-brand-500 to-brand-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: personalInfo.linkedin,
      href: personalInfo.linkedin.startsWith('[') ? undefined : personalInfo.linkedin,
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: personalInfo.github,
      href: personalInfo.github.startsWith('[') ? undefined : personalInfo.github,
      color: 'from-slate-700 to-slate-800',
    },
  ];

  const handleCopy = async () => {
    if (!personalInfo.email.startsWith('[')) {
      try {
        await navigator.clipboard.writeText(personalInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        setCopied(false);
      }
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white dark:bg-slate-950">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal ${visible ? 'visible' : ''}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-600 text-brand-600 dark:text-brand-400 mb-3 tracking-wide uppercase">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-700 text-slate-900 dark:text-white tracking-tight mb-4">
            Let's Talk Automation
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Whether you are a hiring manager, a potential client, or a business dealing with
            repetitive processes — I would be happy to talk about how automation can help.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {contactItems.map((item, i) => {
            const isPlaceholder = item.value?.startsWith('[');
            return (
              <div
                key={item.label}
                className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-6 card-hover hover:border-brand-200 dark:hover:border-brand-500/30 hover:shadow-xl transition-all duration-300"
                style={{
                  animation: visible
                    ? `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s forwards`
                    : 'none',
                  opacity: visible ? undefined : 0,
                }}
              >
                {/* Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-md`}>
                    <item.icon size={20} />
                  </span>
                  {!isPlaceholder && item.href && (
                    <ArrowUpRight size={18} className="text-slate-400 dark:text-slate-600 group-hover:text-brand-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  )}
                </div>

                {/* Label + value */}
                <p className="text-xs font-700 text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
                  {item.label}
                </p>
                {isPlaceholder ? (
                  <p className="text-sm text-slate-400 dark:text-slate-500 italic">
                    {item.value}
                  </p>
                ) : item.href ? (
                  <a
                    href={item.href}
                    target={item.label !== 'Email' ? '_blank' : undefined}
                    rel={item.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="text-sm font-600 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.value}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Copy email button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleCopy}
            disabled={personalInfo.email.startsWith('[')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-600 text-slate-700 dark:text-slate-300 hover:border-brand-300 dark:hover:border-brand-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {copied ? <Check size={15} className="text-emerald-500" /> : <Copy size={15} />}
            {copied ? 'Email copied!' : 'Copy email address'}
          </button>
        </div>
      </div>
    </section>
  );
}
