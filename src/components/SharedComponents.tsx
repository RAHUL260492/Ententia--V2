import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, X, CheckCircle2 } from 'lucide-react';
import { Solution } from '../types';

// Logo Component
const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <svg width="42" height="34" viewBox="0 0 52 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#00CCFF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#00A3FF', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#0088CC', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0066CC', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#0055AA', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#003388', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <g transform="skewX(-16) translate(12, 0)">
        <rect x="0" y="2" width="32" height="7" rx="3.5" fill="url(#grad1)" />
        <rect x="0" y="14" width="32" height="7" rx="3.5" fill="url(#grad2)" />
        <rect x="0" y="26" width="20" height="7" rx="3.5" fill="url(#grad3)" />
      </g>
    </svg>
    <span className="text-2xl font-bold tracking-widest text-white uppercase font-sans">Ententia</span>
  </div>
);

// Button Component
const Button = ({
  variant = 'primary',
  children,
  className = '',
  onClick,
}: {
  variant?: 'primary' | 'secondary' | 'ghost' | 'primary-dark';
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const baseStyle =
    'px-8 py-3 rounded-md font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm tracking-wide hover:-translate-y-1 active:translate-y-0 uppercase';

  const variants = {
    primary:
      'bg-primary hover:bg-[#0088cc] text-white shadow-[0_4px_14px_0_rgba(0,163,255,0.39)] hover:shadow-[0_8px_25px_rgba(0,163,255,0.6)] border border-transparent',
    'primary-dark':
      'bg-textDark hover:bg-black text-white shadow-lg border border-transparent',
    secondary:
      'bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-primary/80 hover:shadow-[0_0_20px_rgba(0,163,255,0.4)]',
    ghost:
      'text-primary hover:text-[#0088cc] bg-transparent p-0 shadow-none hover:shadow-[0_0_15px_rgba(0,163,255,0.2)] rounded-full px-2 normal-case',
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// FadeIn Component
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.disconnect();
    };
  }, []);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translate-y-8';
        case 'down':
          return '-translate-y-8';
        case 'left':
          return 'translate-x-8';
        case 'right':
          return '-translate-x-8';
        default:
          return '';
      }
    }
    return 'translate-y-0 translate-x-0';
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${getTransform()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// SectionHeader Component
const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = 'center',
  lightMode = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  lightMode?: boolean;
}) => (
  <FadeIn className={`mb-20 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
      {eyebrow}
    </span>
    <h2
      className={`text-2xl md:text-3xl font-bold mb-6 leading-tight tracking-wide ${
        lightMode ? 'text-textDark' : 'text-white'
      }`}
    >
      {title}
    </h2>
    {description && (
      <p
        className={`max-w-2xl mx-auto text-lg italic leading-relaxed ${
          lightMode ? 'text-textDarkMuted' : 'text-textMuted'
        }`}
      >
        {description}
      </p>
    )}
  </FadeIn>
);

// Solution Grid Item
const SolutionGridItem = ({
  item,
  onClick,
}: {
  item: Solution;
  onClick: (s: Solution) => void;
}) => (
  <div
    className="group bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer h-full flex flex-col shadow-lg"
    onClick={() => onClick(item)}
  >
    <div className="relative h-56 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60 z-10" />
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="p-8 flex flex-col flex-1">
      <h3 className="text-[22px] font-bold text-white mb-4 tracking-wide group-hover:text-primary transition-colors">
        {item.title}
      </h3>
      <p className="text-textMuted text-base mb-8 leading-relaxed line-clamp-3">
        {item.shortDescription}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto mb-8">
        <span className="px-3 py-1 rounded-full text-xs font-semibold text-primary border border-primary/30 bg-primary/5">
          ROI {item.roi.range}
        </span>

        {item.tags.outcome.slice(0, 1).map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full text-xs font-medium text-textMuted border border-white/10 bg-white/5"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="pt-0">
        <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all tracking-wide">
          View details <ArrowRight size={16} />
        </span>
      </div>
    </div>
  </div>
);

// Filter Dropdown
const FilterDropdown = ({
  label,
  options,
  selectedValues,
  onChange,
}: {
  label: string;
  options: string[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOption = (option: string) => {
    if (selectedValues.includes(option)) {
      onChange(selectedValues.filter((v) => v !== option));
    } else {
      onChange([...selectedValues, option]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = selectedValues.length > 0;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-5 py-2.5 rounded-full border text-sm font-medium flex items-center gap-2 transition-all hover:-translate-y-0.5 ${
          isActive || isOpen
            ? 'bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(0,163,255,0.2)]'
            : 'bg-[#0A0A0A] border-white/10 text-textMuted hover:border-white/30 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]'
        }`}
      >
        <span>{label}</span>
        {isActive && (
          <span className="flex items-center justify-center bg-primary text-black font-bold text-[10px] w-5 h-5 rounded-full ml-1">
            {selectedValues.length}
          </span>
        )}
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 left-0 w-64 bg-[#0A0A0A] border border-white/10 rounded-lg shadow-xl z-50 overflow-hidden backdrop-blur-xl animate-in fade-in zoom-in-95 duration-100">
          <div className="max-h-64 overflow-y-auto py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => toggleOption(option)}
                className="w-full text-left px-4 py-2.5 text-sm hover:bg-white/5 cursor-pointer flex items-center justify-between group transition-colors"
              >
                <span
                  className={
                    selectedValues.includes(option)
                      ? 'text-white font-medium'
                      : 'text-textMuted group-hover:text-white'
                  }
                >
                  {option}
                </span>
                {selectedValues.includes(option) && (
                  <CheckCircle2 size={14} className="text-primary" />
                )}
              </button>
            ))}
          </div>
          {selectedValues.length > 0 && (
            <div className="border-t border-white/10 p-2 bg-[#0A0A0A]">
              <button
                onClick={() => {
                  onChange([]);
                  setIsOpen(false);
                }}
                className="w-full text-xs text-center text-textMuted hover:text-white py-1 transition-colors"
              >
                Clear {label}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Solution Detail Modal
const SolutionDetailModal = ({
  solution,
  isOpen,
  onClose,
}: {
  solution: Solution | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen || !solution) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-[#0A0A0A] border border-white/10 w-full max-w-6xl max-h-[95vh] overflow-y-auto rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-30 bg-[#1A1F2E] border border-white/10 p-2 rounded-full text-textMuted hover:text-white transition-colors hover:bg-white/10"
        >
          <X size={20} />
        </button>

        {/* Header Section */}
        <div className="bg-[#0A0A0A] p-10 pb-8 flex flex-col gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1F2E] border border-primary/20 text-xs font-medium text-white">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,204,255,0.8)]" />
              Pattern detail
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">{solution.title}</h2>

          <div className="flex flex-wrap gap-2">
            {solution.tags.outcome.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-medium text-textMuted border border-white/10 bg-white/5 hover:text-white transition-colors"
              >
                {t}
              </span>
            ))}
            <span className="px-3 py-1 rounded-full text-xs font-medium text-textMuted border border-white/10 bg-white/5 hover:text-white transition-colors">
              {solution.tags.type}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium text-textMuted border border-white/10 bg-white/5 hover:text-white transition-colors">
              {solution.tags.industry.join(' • ')}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium text-textMuted border border-white/10 bg-white/5 hover:text-white transition-colors">
              {solution.tags.function.join(' • ')}
            </span>
          </div>

          <p className="text-xl text-textMuted italic leading-relaxed max-w-4xl">
            {solution.shortDescription}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-0 flex-1 border-t border-white/5">
          <div className="lg:col-span-7 p-10 space-y-8 border-r border-white/5">
            <div className="flex items-center justify-between">
              <h3 className="text-[22px] font-bold text-white tracking-wide">Description</h3>
              <span className="px-2 py-1 rounded text-[10px] font-bold text-textMuted bg-white/5 border border-white/5 uppercase tracking-wider">
                breakdown
              </span>
            </div>

            <p className="text-textMuted text-base leading-relaxed">{solution.fullDescription}</p>

            <div className="border border-white/20 rounded-lg p-8 bg-[#0F0F0F]">
              <h4 className="text-white font-bold tracking-wide mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Solution features
              </h4>
              <ul className="space-y-4">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-textMuted text-base leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2.5 w-1 h-1 bg-white/40 rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#050505] p-10 flex flex-col gap-8">
            <div className="rounded-lg overflow-hidden border border-white/10 shadow-lg aspect-video bg-[#0A0A0A] relative group">
              <img
                src={solution.imageUrl}
                alt={solution.title}
                className="w-full h-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
              />
            </div>

            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-xs text-textMuted uppercase tracking-wide mb-3">Typical ROI Range</h4>
                <div className="text-3xl font-bold text-white mb-6">{solution.roi.range}</div>

                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-primary w-1/3 rounded-full" />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Link to="/contact-us" onClick={onClose} className="flex-1">
                <Button className="flex-1 px-4 rounded-full !py-3 !text-sm">Contact Us</Button>
              </Link>
              <Button variant="secondary" className="flex-1 rounded-full !py-3 !text-sm !border-white/20 hover:!border-white">
                Request Demo
              </Button>
            </div>

            <p className="text-xs text-textMuted mt-2">
              Press <span className="text-white border border-white/20 rounded px-1.5 py-0.5 text-[10px] mx-1">Esc</span> to close.
            </p>
          </div>
        </div>

        {/* Bottom Technical Section */}
        <div className="border-t border-white/10 bg-[#080808] p-10">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Integrations + Deployment + Evaluation
            </h4>
            <span className="text-xs font-bold bg-white/10 text-textMuted px-2 py-1 rounded border border-white/5">
              IT Notes
            </span>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="p-6 rounded border border-white/5 bg-white/[0.02]">
              <h5 className="text-[22px] font-bold text-white mb-4 tracking-wide">Integrations</h5>
              <p className="text-base text-textMuted leading-relaxed">{solution.integrations.join(', ')}</p>
            </div>
            <div className="p-6 rounded border border-white/5 bg-white/[0.02]">
              <h5 className="text-[22px] font-bold text-white mb-4 tracking-wide">Deployment</h5>
              <p className="text-base text-textMuted leading-relaxed">{solution.deployment.join(', ')}</p>
            </div>
            <div className="p-6 rounded border border-white/5 bg-white/[0.02]">
              <h5 className="text-[22px] font-bold text-white mb-4 tracking-wide">Evaluation</h5>
              <p className="text-base text-textMuted leading-relaxed">{solution.evaluation.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default {
  Logo,
  Button,
  FadeIn,
  SectionHeader,
  SolutionGridItem,
  FilterDropdown,
  SolutionDetailModal,
};
