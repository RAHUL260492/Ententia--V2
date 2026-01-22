import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter } from 'lucide-react';
import { FOOTER_LINKS } from '../constants';
import SharedComponents from '../components/SharedComponents';

const getLinkPath = (label: string): string => {
  const linkMap: Record<string, string> = {
    'Services': '/services',
    'Solutions': '/solutions',
    'Foundation': '/foundation',
    'Contact': '/contact-us',
  };
  return linkMap[label] || '#';
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 md:col-span-2">
            <Link to="/">
              <SharedComponents.Logo className="mb-8" />
            </Link>
            <p className="text-textMuted text-sm leading-relaxed max-w-[240px]">
              Purpose-built Applied AI for Enterprise. Designed to turn AI ambition into operational impact.
            </p>
          </div>

          {FOOTER_LINKS.map((column) => (
            <div key={column.title}>
              <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-wider">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link) => {
                  const href = getLinkPath(link);
                  
                  if (href === '#') {
                    return (
                      <li key={link}>
                        <a
                          href={href}
                          className="text-textMuted text-sm hover:text-white transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    );
                  }
                  
                  return (
                    <li key={link}>
                      <Link
                        to={href}
                        className="text-textMuted text-sm hover:text-white transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="text-textMuted text-xs">© 2026 Ententia. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
