import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import SharedComponents from '../components/SharedComponents';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const getNavLinkClass = (href: string) => {
    const isActive = 
      (href === 'home' && location.pathname === '/') ||
      (href !== 'home' && location.pathname === `/${href}`);
    
    return `text-sm tracking-wide transition-colors ${
      isActive
        ? 'text-primary font-bold'
        : 'text-textMuted hover:text-white font-medium'
    }`;
  };

  const getLinkPath = (href: string) => {
    return href === 'home' ? '/' : `/${href}`;
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-[#050505]/90 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="cursor-pointer">
          <SharedComponents.Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={getLinkPath(item.href)}
              className={getNavLinkClass(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link to="/contact-us">
            <SharedComponents.Button className="!px-6 !py-2 !text-xs">
              Contact Us
            </SharedComponents.Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/10 p-6 flex flex-col gap-4 absolute w-full z-50">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={getLinkPath(item.href)}
              className="text-lg text-white text-left font-bold"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact-us" className="w-full">
            <SharedComponents.Button className="w-full justify-center mt-4">
              Contact Us
            </SharedComponents.Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
