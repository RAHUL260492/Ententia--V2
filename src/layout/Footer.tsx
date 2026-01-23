import React from 'react';
import { Link } from 'react-router-dom';
import SharedComponents from '../components/SharedComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <Link to="/">
            <SharedComponents.Logo />
          </Link>

          {/* Tagline */}
          <p className="text-textMuted text-sm tracking-wide">
            Applied AI for Enterprise
          </p>

          {/* Copyright */}
          <p className="text-textMuted text-xs mt-6">
            © 2026 Ententia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
