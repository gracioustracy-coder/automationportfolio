import { Workflow, Heart } from 'lucide-react';
import { personalInfo, navLinks } from '@/data/portfolioData';

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-black border-t border-slate-800 dark:border-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 font-display font-700 text-white mb-3 hover:opacity-80 transition-opacity"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                <Workflow size={18} />
              </span>
              <span className="text-sm tracking-tight">
                {personalInfo.name.replace(/\[|\]/g, '')}.automation
              </span>
            </button>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-700 text-slate-500 uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact mini */}
          <div>
            <h4 className="text-xs font-700 text-slate-500 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-slate-400">{personalInfo.email}</span>
              </li>
              <li>
                <span className="text-sm text-slate-400">{personalInfo.linkedin}</span>
              </li>
              <li>
                <span className="text-sm text-slate-400">{personalInfo.github}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            Built with <Heart size={12} className="text-brand-500 fill-brand-500" /> for automation professionals
          </p>
        </div>
      </div>
    </footer>
  );
}
