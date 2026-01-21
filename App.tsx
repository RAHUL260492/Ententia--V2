import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  BarChart3, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Linkedin, 
  Twitter, 
  CheckCircle2, 
  ChevronDown, 
  XCircle, 
  Clock, 
  Briefcase, 
  Database, 
  Lock, 
  Workflow, 
  Zap, 
  LayoutTemplate, 
  Globe, 
  Rocket, 
  Settings, 
  SlidersHorizontal, 
  Lightbulb, 
  Users, 
  Target,
  MonitorPlay,
  Hourglass
} from 'lucide-react';
import { NAV_ITEMS, SOLUTIONS, PLATFORM_FEATURES, CASE_STUDIES, FULL_CASE_STUDIES, ENABLEMENT_SERVICES, INSIGHTS, FOOTER_LINKS, FILTER_OPTIONS, INSIGHTS_DATA, PLATFORM_PRINCIPLES, PLATFORM_CAPABILITIES, SERVICE_OFFERINGS } from './constants';
import { Solution, InsightArticle, CaseStudyDetail, Industry, FunctionArea, Outcome, SolutionType, CATEGORIES, ServiceOffering, PageView } from './types';

// --- Shared UI Components ---

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
        {/* Top Bar - Long - Cyan */}
        <rect x="0" y="2" width="32" height="7" rx="3.5" fill="url(#grad1)" />
        {/* Middle Bar - Long - Blue */}
        <rect x="0" y="14" width="32" height="7" rx="3.5" fill="url(#grad2)" />
        {/* Bottom Bar - Short - Dark Blue */}
        <rect x="0" y="26" width="20" height="7" rx="3.5" fill="url(#grad3)" />
      </g>
    </svg>
    <span className="text-2xl font-bold tracking-widest text-white uppercase font-sans">Ententia</span>
  </div>
);

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0,
  className = "",
  direction = 'up'
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
        case 'up': return 'translate-y-8';
        case 'down': return '-translate-y-8';
        case 'left': return 'translate-x-8';
        case 'right': return '-translate-x-8';
        default: return '';
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

const Button = ({ 
  variant = 'primary', 
  children, 
  className = '',
  onClick
}: { 
  variant?: 'primary' | 'secondary' | 'ghost' | 'primary-dark', 
  children?: React.ReactNode, 
  className?: string,
  onClick?: () => void
}) => {
  const baseStyle = "px-8 py-3 rounded-md font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm tracking-wide hover:-translate-y-1 active:translate-y-0 uppercase";
  
  const variants = {
    primary: "bg-primary hover:bg-[#0088cc] text-white shadow-[0_4px_14px_0_rgba(0,163,255,0.39)] hover:shadow-[0_8px_25px_rgba(0,163,255,0.6)] border border-transparent",
    "primary-dark": "bg-textDark hover:bg-black text-white shadow-lg border border-transparent",
    secondary: "bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-primary/80 hover:shadow-[0_0_20px_rgba(0,163,255,0.4)]",
    ghost: "text-primary hover:text-[#0088cc] bg-transparent p-0 shadow-none hover:shadow-[0_0_15px_rgba(0,163,255,0.2)] rounded-full px-2 normal-case"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// Updated SectionHeader - Reduced text-4xl/5xl to text-2xl/3xl
const SectionHeader = ({ eyebrow, title, description, align = 'center', lightMode = false }: { eyebrow: string, title: string, description?: string, align?: 'center' | 'left', lightMode?: boolean }) => (
  <FadeIn className={`mb-20 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">{eyebrow}</span>
    <h2 className={`text-2xl md:text-3xl font-bold mb-6 leading-tight tracking-wide ${lightMode ? 'text-textDark' : 'text-white'}`}>{title}</h2>
    {description && <p className={`max-w-2xl mx-auto text-lg italic leading-relaxed ${lightMode ? 'text-textDarkMuted' : 'text-textMuted'}`}>{description}</p>}
  </FadeIn>
);

const SolutionGridItem = ({ item, onClick }: { item: Solution, onClick: (s: Solution) => void }) => (
  <div 
    className="group bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer h-full flex flex-col shadow-lg"
    onClick={() => onClick(item)}
  >
    <div className="relative h-56 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60 z-10" />
      <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
    </div>
    <div className="p-8 flex flex-col flex-1">
      <h3 className="text-[22px] font-bold text-white mb-4 tracking-wide group-hover:text-primary transition-colors">{item.title}</h3>
      <p className="text-textMuted text-base mb-8 leading-relaxed line-clamp-3">{item.shortDescription}</p>
      
      <div className="flex flex-wrap gap-2 mt-auto mb-8">
         {/* ROI - Special Styling */}
         <span className="px-3 py-1 rounded-full text-xs font-semibold text-primary border border-primary/30 bg-primary/5">
            ROI {item.roi.range}
         </span>
         
         {/* Outcome */}
         {item.tags.outcome.slice(0, 1).map(t => (
            <span key={t} className="px-3 py-1 rounded-full text-xs font-medium text-textMuted border border-white/10 bg-white/5">
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

// --- Navigation ---

const Navigation = ({ 
  currentView, 
  onChangeView 
}: { 
  currentView: PageView, 
  onChangeView: (view: PageView, sectionId?: string) => void 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (itemHref: string) => {
    setIsOpen(false);
    
    if (itemHref === 'home') {
      onChangeView('home', 'home');
    } else if (itemHref === 'insights') {
      onChangeView('insights');
    } else if (itemHref === 'solutions') {
      onChangeView('solutions');
    } else if (itemHref === 'casestudies') {
      onChangeView('casestudies');
    } else if (itemHref === 'foundation') {
      onChangeView('foundation');
    } else if (itemHref === 'services') {
      onChangeView('services');
    } else if (['contact'].includes(itemHref)) {
      onChangeView('contact');
    } else {
      // Default fallback
      onChangeView('home');
    }
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-[#050505]/90 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div onClick={() => onChangeView('home', 'home')} className="cursor-pointer">
          <Logo />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button 
              key={item.label} 
              onClick={() => handleNavClick(item.href)}
              className={`text-sm tracking-wide transition-colors ${
                (item.href === 'solutions' && currentView === 'solutions') || 
                (item.href === 'services' && currentView === 'services') ||
                (item.href === 'insights' && currentView === 'insights') || 
                (item.href === 'casestudies' && currentView === 'casestudies') ||
                (item.href === 'foundation' && currentView === 'foundation') ||
                (item.href === 'contact' && currentView === 'contact') ||
                (item.href === 'home' && currentView === 'home' && window.scrollY < 200)
                ? 'text-primary font-bold' 
                : 'text-textMuted hover:text-white font-medium'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <Button className="!px-6 !py-2 !text-xs" onClick={() => handleNavClick('contact')}>
            Contact Us
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white hover:text-primary transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-white/10 p-6 flex flex-col gap-4 absolute w-full z-50">
          {NAV_ITEMS.map((item) => (
            <button 
              key={item.label} 
              onClick={() => handleNavClick(item.href)}
              className="text-lg text-white text-left font-bold"
            >
              {item.label}
            </button>
          ))}
          <Button className="w-full justify-center mt-4" onClick={() => handleNavClick('contact')}>Contact Us</Button>
        </div>
      )}
    </nav>
  );
};

// --- Shared Filter Component ---

const FilterDropdown = ({ 
  label, 
  options, 
  selectedValues, 
  onChange 
}: { 
  label: string, 
  options: string[], 
  selectedValues: string[], 
  onChange: (values: string[]) => void 
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = selectedValues.length > 0;

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`px-5 py-2.5 rounded-full border text-sm font-medium flex items-center gap-2 transition-all hover:-translate-y-0.5 ${
          isActive || isOpen
            ? 'bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(0,163,255,0.2)]' 
            : 'bg-surfaceHighlight border-white/10 text-textMuted hover:border-white/30 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]'
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
        <div className="absolute top-full mt-2 left-0 w-64 bg-surface border border-white/10 rounded-lg shadow-xl z-50 overflow-hidden backdrop-blur-xl animate-in fade-in zoom-in-95 duration-100">
           <div className="max-h-64 overflow-y-auto py-1">
            {options.map((option) => (
              <button 
                key={option}
                onClick={() => toggleOption(option)}
                className="w-full text-left px-4 py-2.5 text-sm hover:bg-white/5 cursor-pointer flex items-center justify-between group transition-colors"
              >
                <span className={selectedValues.includes(option) ? 'text-white font-medium' : 'text-textMuted group-hover:text-white'}>{option}</span>
                {selectedValues.includes(option) && <CheckCircle2 size={14} className="text-primary" />}
              </button>
            ))}
           </div>
           {selectedValues.length > 0 && (
             <div className="border-t border-white/10 p-2 bg-surfaceHighlight/50">
                <button 
                    onClick={() => { onChange([]); setIsOpen(false); }}
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

const SolutionDetailModal = ({ solution, isOpen, onClose, onNavigate }: { solution: Solution | null, isOpen: boolean, onClose: () => void, onNavigate: (view: PageView) => void }) => {
  if (!isOpen || !solution) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-[#0A0A0A] border border-white/10 w-full max-w-6xl max-h-[95vh] overflow-y-auto rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col">
        
        {/* Close Button - Absolute to be on top of header content */}
        <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-30 bg-surfaceHighlight border border-white/10 p-2 rounded-full text-textMuted hover:text-white transition-colors hover:bg-white/10"
        >
            <X size={20} />
        </button>

        {/* Header Section */}
        <div className="bg-[#0A0A0A] p-10 pb-8 flex flex-col gap-6">
             {/* Pattern Detail Pill */}
             <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1F2E] border border-primary/20 text-xs font-medium text-white">
                    <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,204,255,0.8)]" />
                    Pattern detail
                </span>
             </div>

             <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">{solution.title}</h2>

             {/* Tags Row */}
             <div className="flex flex-wrap gap-2">
                {solution.tags.outcome.map(t => (
                     <span key={t} className="px-3 py-1 rounded-full text-xs font-medium text-textMuted border border-white/10 bg-white/5 hover:text-white transition-colors">{t}</span>
                ))}
                <span className="px-3 py-1 rounded-full text-xs font-medium text-textMuted border border-white/10 bg-white/5 hover:text-white transition-colors">{solution.tags.type}</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium text-textMuted border border-white/10 bg-white/5 hover:text-white transition-colors">{solution.tags.industry.join(' • ')}</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium text-textMuted border border-white/10 bg-white/5 hover:text-white transition-colors">{solution.tags.function.join(' • ')}</span>
             </div>

             <p className="text-xl text-textMuted italic leading-relaxed max-w-4xl">
                 {solution.shortDescription}
             </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-0 flex-1 border-t border-white/5">
          {/* Left Column: Full Description & Features */}
          <div className="lg:col-span-7 p-10 space-y-8 border-r border-white/5">
            <div className="flex items-center justify-between">
                <h3 className="text-[22px] font-bold text-white tracking-wide">Description</h3>
                <span className="px-2 py-1 rounded text-[10px] font-bold text-textMuted bg-white/5 border border-white/5 uppercase tracking-wider">breakdown</span>
            </div>
            
            <p className="text-textMuted text-base leading-relaxed">
               {solution.fullDescription}
            </p>

            {/* Features Box */}
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

          {/* Right Column: Image, ROI, CTA */}
          <div className="lg:col-span-5 bg-[#050505] p-10 flex flex-col gap-8">
            <div className="rounded-lg overflow-hidden border border-white/10 shadow-lg aspect-video bg-surfaceHighlight relative group">
              <img src={solution.imageUrl} alt={solution.title} className="w-full h-full object-cover opacity-90 transition-opacity group-hover:opacity-100" />
            </div>

            {/* ROI Box */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                  <h4 className="text-xs text-textMuted uppercase tracking-wide mb-3">Typical ROI Range</h4>
                  <div className="text-3xl font-bold text-white mb-6">{solution.roi.range}</div>
                  
                  {/* Fake Progress Bar */}
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-2">
                     <div className="h-full bg-primary w-1/3 rounded-full" />
                  </div>
              </div>
            </div>

            <div className="flex gap-4">
               <Button className="flex-1 rounded-full !py-3 !text-sm" onClick={() => { onClose(); onNavigate('contact'); }}>Contact Us</Button>
               <Button variant="secondary" className="flex-1 rounded-full !py-3 !text-sm !border-white/20 hover:!border-white" onClick={() => { onClose(); onNavigate('contact'); }}>Request Demo</Button>
            </div>
             
             <p className="text-xs text-textMuted mt-2">
                 Press <span className="text-white border border-white/20 rounded px-1.5 py-0.5 text-[10px] mx-1">Esc</span> to close.
             </p>
          </div>
        </div>
        
        {/* Bottom Technical Section */}
        <div className="border-t border-white/10 bg-[#080808] p-10">
            <div className="flex items-center justify-between mb-8">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Integrations + Deployment + Evaluation</h4>
                <span className="text-xs font-bold bg-white/10 text-textMuted px-2 py-1 rounded border border-white/5">IT Notes</span>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="p-6 rounded border border-white/5 bg-white/[0.02]">
                <h5 className="text-[22px] font-bold text-white mb-4 tracking-wide">Integrations</h5>
                <p className="text-base text-textMuted leading-relaxed">
                  {solution.integrations.join(', ')}
                </p>
              </div>
              <div className="p-6 rounded border border-white/5 bg-white/[0.02]">
                <h5 className="text-[22px] font-bold text-white mb-4 tracking-wide">Deployment</h5>
                <p className="text-base text-textMuted leading-relaxed">
                   {solution.deployment.join(', ')}
                </p>
              </div>
              <div className="p-6 rounded border border-white/5 bg-white/[0.02]">
                <h5 className="text-[22px] font-bold text-white mb-4 tracking-wide">Evaluation</h5>
                 <p className="text-base text-textMuted leading-relaxed">
                   {solution.evaluation.join(', ')}
                </p>
              </div>
            </div>
        </div>

      </div>
    </div>
  );
};

// --- Solutions Page Components ---

const SolutionsHero = () => (
  <section className="relative pt-48 pb-24 overflow-hidden">
    <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-50" />
    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <FadeIn>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-wide">
          Our Enterprise AI Solutions
        </h1>
        <p className="text-textMuted max-w-3xl mx-auto text-xl italic leading-relaxed mb-8">
          Explore production-ready AI solutions across industries, function, and business outcomes.
        </p>
        <p className="text-primary font-medium tracking-wide text-lg opacity-90">
          Use filters to quickly find solutions relevant to your organization.
        </p>
      </FadeIn>
    </div>
  </section>
);

const SolutionsPage = ({ onSolutionSelect }: { onSolutionSelect: (s: Solution) => void }) => {
  // Solutions State
  const [selectedIndustry, setSelectedIndustry] = useState<string[]>([]);
  const [selectedFunction, setSelectedFunction] = useState<string[]>([]);
  const [selectedOutcome, setSelectedOutcome] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  
  const resetFilters = () => {
    setSelectedIndustry([]);
    setSelectedFunction([]);
    setSelectedOutcome([]);
    setSelectedType([]);
  };

  const filteredSolutions = SOLUTIONS.filter(s => {
    if (selectedIndustry.length > 0 && !s.tags.industry.some(i => selectedIndustry.includes(i))) return false;
    if (selectedFunction.length > 0 && !s.tags.function.some(f => selectedFunction.includes(f))) return false;
    if (selectedOutcome.length > 0 && !s.tags.outcome.some(o => selectedOutcome.includes(o))) return false;
    if (selectedType.length > 0 && !selectedType.includes(s.tags.type)) return false;
    return true;
  });

  const activeFiltersCount = selectedIndustry.length + selectedFunction.length + selectedOutcome.length + selectedType.length;

  return (
    <div className="min-h-screen bg-background pb-32">
      <SolutionsHero />
      
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="relative z-30">
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 p-6 bg-surface border border-white/10 rounded-xl relative z-20">
                 
                 <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full lg:w-auto">
                    <div className="flex flex-wrap items-center gap-4">
                       <FilterDropdown 
                          label="Industry" 
                          options={FILTER_OPTIONS.Industry} 
                          selectedValues={selectedIndustry} 
                          onChange={setSelectedIndustry} 
                       />
                       <FilterDropdown 
                          label="Function" 
                          options={FILTER_OPTIONS.Function} 
                          selectedValues={selectedFunction} 
                          onChange={setSelectedFunction} 
                       />
                       <FilterDropdown 
                          label="Outcome" 
                          options={FILTER_OPTIONS.Outcome} 
                          selectedValues={selectedOutcome} 
                          onChange={setSelectedOutcome} 
                       />
                       <FilterDropdown 
                          label="Type" 
                          options={FILTER_OPTIONS.Type} 
                          selectedValues={selectedType} 
                          onChange={setSelectedType} 
                       />
                    </div>
                 </div>

                 {activeFiltersCount > 0 && (
                   <button onClick={resetFilters} className="flex items-center gap-2 text-textMuted hover:text-white font-medium transition-colors text-sm px-2 ml-auto lg:ml-0">
                     <X size={16} /> Reset
                   </button>
                 )}
              </div>

              {activeFiltersCount > 0 && (
                <div className="flex flex-wrap gap-3 mt-8">
                  {[...selectedIndustry, ...selectedFunction, ...selectedOutcome, ...selectedType].map((filter, i) => (
                    <span key={i} className="px-4 py-1.5 bg-white/5 rounded-full text-xs text-textMuted border border-white/10 flex items-center gap-2 animate-in fade-in zoom-in duration-200">
                      {filter}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredSolutions.map((item, index) => {
              return (
                <FadeIn key={item.id} delay={index * 100} className="h-full">
                  <SolutionGridItem item={item} onClick={onSolutionSelect} />
                </FadeIn>
              );
            })}
            {filteredSolutions.length === 0 && (
              <div className="col-span-2 text-center py-24 text-textMuted">
                No solutions found matching your filters. <button onClick={resetFilters} className="text-primary hover:underline">Reset Filters</button>
              </div>
            )}
          </div>
      </div>
    </div>
  );
};

// --- Services Page Component (New Offering) ---

const ServiceCard = ({ service }: { service: ServiceOffering }) => (
    <div className="h-full bg-surfaceHighlight/20 border border-white/5 rounded-2xl p-8 hover:border-primary/50 hover:bg-surfaceHighlight/30 transition-all duration-300 flex flex-col group">
        <h3 className="text-[22px] font-bold text-white mb-6 tracking-wide group-hover:text-primary transition-colors">{service.title}</h3>
        <p className="text-textMuted text-base mb-8 leading-relaxed">
            {service.description}
        </p>
        
        <div className="flex-1">
             <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                 <CheckCircle2 size={12} className="text-primary" /> Deliverables
             </h4>
             <ul className="space-y-4 mb-8">
                 {service.deliverables.map((item, i) => (
                     <li key={i} className="flex items-start gap-3 text-sm text-textMuted/90">
                         <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                         <span>{item}</span>
                     </li>
                 ))}
             </ul>
        </div>

        <div className="pt-6 border-t border-white/10 mt-auto">
             <div className="flex items-center gap-2 text-sm font-medium text-white">
                 <Hourglass size={16} className="text-primary" />
                 <span>Typical Duration: <span className="text-textMuted font-normal ml-1 italic">{service.duration}</span></span>
             </div>
        </div>
    </div>
);

const ServicesPage = ({ onNavigate }: { onNavigate: (view: PageView, sectionId?: string) => void }) => {
  const row1 = SERVICE_OFFERINGS.slice(0, 2);
  const row2 = SERVICE_OFFERINGS.slice(2, 5);

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Page Header 1 */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">
              Our AI-enabled Services
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-wide">
               Services designed to help enterprises adopt, scale, and operationalize AI with confidence.
            </h1>
            <p className="text-textMuted max-w-3xl mx-auto text-xl italic leading-relaxed">
               Leverages Ententia’s reusable foundation, solution patterns, and purpose-built tools to accelerate time to value.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-32">
         
         {/* Page Header 2: How We Engage */}
         <section className="text-center max-w-4xl mx-auto">
             <FadeIn>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-wide">How We Engage</h2>
                <p className="text-lg italic text-textMuted leading-relaxed">
                    We offer a focused set of AI-enabled services that help enterprises move from early scoping and prioritization to scaled deployment and meaningful transformation of end-to-end workflows.
                </p>
             </FadeIn>
         </section>

         {/* Section 3: Service Cards */}
         <section>
             <SectionHeader eyebrow="Service Cards" title="Services We Offer" />
             
             <div className="space-y-8">
                 {/* Row 1: 2 items */}
                 <div className="grid md:grid-cols-2 gap-8">
                     {row1.map((service, idx) => (
                         <FadeIn key={service.id} delay={idx * 150} className="h-full">
                             <ServiceCard service={service} />
                         </FadeIn>
                     ))}
                 </div>
                 
                 {/* Row 2: 3 items */}
                 <div className="grid md:grid-cols-3 gap-8">
                     {row2.map((service, idx) => (
                         <FadeIn key={service.id} delay={idx * 150} className="h-full">
                             <ServiceCard service={service} />
                         </FadeIn>
                     ))}
                 </div>
             </div>
         </section>

      </div>

      {/* Section 4: CTA */}
       <section className="mt-32 py-32 bg-surface relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
           <FadeIn>
             <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 tracking-wide leading-tight">
               Ready to explore how AI-enabled services could accelerate your AI journey?
             </h2>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Button onClick={() => onNavigate('contact')}>Contact Us</Button>
             </div>
           </FadeIn>
         </div>
      </section>
    </div>
  );
};

// --- Case Studies Page Components ---

const CaseStudyCard = ({ study, onLearnMore }: { study: CaseStudyDetail, onLearnMore: () => void }) => (
  <div 
    className="relative group rounded-2xl overflow-hidden border border-white/10 h-full min-h-[450px] flex flex-col justify-end p-8 cursor-pointer shadow-lg hover:border-primary/50 transition-all duration-300"
    onClick={onLearnMore}
  >
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
       <img src={study.imageUrl} alt={study.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
       <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-6">
       <div className="mb-auto">
         <span className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
            {study.category}
         </span>
         <h3 className="text-[22px] font-bold text-white tracking-wide group-hover:text-primary transition-colors mb-2">
            {study.title}
         </h3>
       </div>
       
       <div className="border-t border-white/20 pt-6 mt-2">
         <h4 className="text-xs font-bold text-textMuted uppercase tracking-widest mb-2">{study.content.label3}</h4>
         <p className="text-white font-medium leading-relaxed">
           {study.content.text3}
         </p>
       </div>

       <Button variant="ghost" className="!p-0 !bg-transparent text-primary hover:text-white justify-start mt-4 group-hover:gap-3 transition-all">
          Read Case Study <ArrowRight size={16} />
       </Button>
    </div>
  </div>
);

const CaseStudyModal = ({ study, isOpen, onClose, onNavigate }: { study: CaseStudyDetail | null, isOpen: boolean, onClose: () => void, onNavigate: (view: PageView) => void }) => {
    if (!isOpen || !study) return null;
  
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
        
        <div className="relative bg-[#0A0A0A] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col">
          <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-30 bg-surfaceHighlight border border-white/10 p-2 rounded-full text-textMuted hover:text-white transition-colors hover:bg-white/10"
          >
              <X size={20} />
          </button>
  
          {/* Header with Image Background */}
          <div className="relative h-72 overflow-hidden shrink-0">
             <img src={study.imageUrl} alt={study.title} className="w-full h-full object-cover opacity-60" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
             <div className="absolute bottom-0 left-0 p-10 w-full">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-bold text-white uppercase tracking-wider mb-4">
                  {study.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">{study.title}</h2>
             </div>
          </div>
  
          <div className="p-10 space-y-12">
              {/* Challenge */}
              <div className="grid md:grid-cols-12 gap-8">
                 <div className="md:col-span-3">
                    <h3 className="text-sm font-bold text-primary uppercase tracking-widest">{study.content.label1}</h3>
                 </div>
                 <div className="md:col-span-9">
                    <p className="text-lg text-textMuted leading-relaxed">{study.content.text1}</p>
                 </div>
              </div>
  
              <div className="h-px w-full bg-white/5" />
  
              {/* Solution */}
              <div className="grid md:grid-cols-12 gap-8">
                 <div className="md:col-span-3">
                    <h3 className="text-sm font-bold text-primary uppercase tracking-widest">{study.content.label2}</h3>
                 </div>
                 <div className="md:col-span-9">
                    <p className="text-lg text-textMuted leading-relaxed">{study.content.text2}</p>
                 </div>
              </div>
  
              <div className="h-px w-full bg-white/5" />
  
              {/* Impact/Outcome */}
              <div className="bg-surfaceHighlight/20 border border-white/10 rounded-xl p-10">
                 <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">{study.content.label3}</h3>
                 <p className="text-2xl font-medium text-white leading-relaxed">
                   {study.content.text3}
                 </p>
              </div>

              <div className="text-center pt-8">
                 <p className="text-xs text-textMuted mb-4">Interested in similar results?</p>
                 <Button className="mx-auto" onClick={() => { onClose(); onNavigate('contact'); }}>Contact Us</Button>
              </div>
          </div>
        </div>
      </div>
    );
};

const CaseStudiesPage = ({ onNavigate }: { onNavigate: (view: PageView, sectionId?: string) => void }) => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudyDetail | null>(null);

  return (
    <div className="min-h-screen bg-background pb-32">
      <section className="relative pt-48 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">
              Success Stories
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-wide">
              Delivering Measurable ROI
            </h1>
            <p className="text-textMuted max-w-2xl mx-auto text-xl italic leading-relaxed">
              Explore real-life examples of Ententia’s services and solutions delivering measurable impact across industries and functions.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {/* Enablement Services - First as per PDF */}
        <section>
           <FadeIn>
             <div className="flex items-center gap-4 mb-16 border-b border-white/10 pb-6">
               <ShieldCheck className="text-primary" size={28} />
               <h2 className="text-[22px] font-bold text-white tracking-wide">Enablement Services</h2>
             </div>
           </FadeIn>
           <div className="grid lg:grid-cols-2 gap-8">
             {ENABLEMENT_SERVICES.map((study, idx) => (
                <FadeIn key={study.id} delay={idx * 150} className="h-full">
                  <CaseStudyCard study={study} onLearnMore={() => setSelectedStudy(study)} />
                </FadeIn>
             ))}
           </div>
        </section>

        {/* Functional / Optimization Case Studies */}
        <section>
           <FadeIn>
             <div className="flex items-center gap-4 mb-16 border-b border-white/10 pb-6">
               <Briefcase className="text-primary" size={28} />
               <h2 className="text-[22px] font-bold text-white tracking-wide">Functional Case Studies</h2>
             </div>
           </FadeIn>
           <div className="grid lg:grid-cols-2 gap-8">
             {FULL_CASE_STUDIES.map((study, idx) => (
                <FadeIn key={study.id} delay={idx * 150} className="h-full">
                  <CaseStudyCard study={study} onLearnMore={() => setSelectedStudy(study)} />
                </FadeIn>
             ))}
           </div>
        </section>
      </div>

      <section className="mt-32 py-32 bg-surface relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
           <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 tracking-wide leading-tight">
               Turn AI solutions into real outcomes for your organization.
             </h2>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Button onClick={() => onNavigate('contact')}>Contact Us</Button>
               <Button variant="secondary" onClick={() => onNavigate('solutions')}>Explore Solutions</Button>
             </div>
         </div>
      </section>

      <CaseStudyModal 
        study={selectedStudy} 
        isOpen={!!selectedStudy} 
        onClose={() => setSelectedStudy(null)}
        onNavigate={onNavigate} 
      />
    </div>
  );
};

// --- Foundation Page Components (Renamed from PlatformPage) ---

const FoundationPage = ({ onNavigate }: { onNavigate: (view: PageView, sectionId?: string) => void }) => {
  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Hero */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">
              Enterprise Foundation
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight tracking-wide">
              AI Foundation Built for <br /> Enterprise Reality
            </h1>
            <p className="text-textMuted max-w-2xl mx-auto text-xl italic leading-relaxed">
              A production-ready foundation for deploying secure, scalable AI solutions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Design Principles (Section 2) */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            eyebrow="Design Principles" 
            title="From secure integration to rapid delivery, without compromise."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PLATFORM_PRINCIPLES.map((principle, idx) => (
              <FadeIn key={idx} delay={idx * 150} className="h-full">
                <div className="glass-card p-10 rounded-xl border border-white/5 hover:border-primary/30 group h-full flex flex-col">
                  <div className="mb-8 w-12 h-12 rounded-lg bg-surfaceHighlight border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 font-bold text-lg">
                    0{idx + 1}
                  </div>
                  <h3 className="text-[22px] font-bold text-white mb-6 tracking-wide">{principle.title}</h3>
                  <p className="text-textMuted text-base leading-relaxed flex-1">
                    {principle.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities (Section 3) */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            eyebrow="Core Capabilities" 
            title="Powering Enterprise AI" 
          />
          <div className="space-y-10">
            {PLATFORM_CAPABILITIES.map((cap, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="glass-panel p-10 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300 flex flex-col md:flex-row gap-10 items-start">
                   <div className="w-full md:w-1/3">
                      <h3 className="text-[22px] font-bold text-white mb-4 tracking-wide">{cap.title}</h3>
                      <p className="text-textMuted text-base leading-relaxed">{cap.description}</p>
                   </div>
                   <div className="w-full md:w-2/3">
                      <div className="flex flex-wrap gap-4">
                        {cap.bullets.map((b, i) => (
                            <div key={i} className="w-full bg-white/5 rounded-lg px-6 py-4 border border-white/10 flex items-start gap-3">
                                <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                                <span className="text-base text-textMuted/90">{b}</span>
                            </div>
                        ))}
                      </div>
                   </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
       {/* Foundation in Practice / CTA (Section 4) */}
       <section className="py-32 bg-surface relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
           <FadeIn>
             <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Foundation in Practice</span>
             <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-wide">
               Our proprietary AI foundation capabilities power our services and solutions - enabling faster delivery and consistent outcomes across industries and functions.
             </h2>
             <p className="text-textMuted text-xl italic mb-12">
               Ready to see how it can help you accelerate your AI journey?
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Button onClick={() => onNavigate('contact')}>Contact Us</Button>
               <Button variant="secondary" onClick={() => onNavigate('solutions')}>Explore Solutions</Button>
             </div>
           </FadeIn>
         </div>
      </section>
    </div>
  );
};

// --- Insight Page Components ---

const InsightsHero = () => (
  <section className="relative pt-48 pb-24 overflow-hidden">
    <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-50" />
    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <FadeIn>
        <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">
          Ententia Perspectives
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight tracking-wide">
          Insights & Perspectives
        </h1>
        <p className="text-textMuted max-w-2xl mx-auto text-xl italic leading-relaxed">
          Practical perspectives on deploying enterprise AI in real-world environments, from strategy to execution and adoption.
        </p>
      </FadeIn>
    </div>
  </section>
);

const InsightsFilterBar = ({ 
  selectedCategory, 
  onSelectCategory,
  categories
}: { 
  selectedCategory: string, 
  onSelectCategory: (c: string) => void,
  categories: string[]
}) => {
  return (
    <div className="sticky top-20 z-40 bg-[#050505]/95 backdrop-blur-md border-b border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-6 flex overflow-x-auto gap-4 scrollbar-hide justify-start md:justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(selectedCategory === cat ? 'All' : cat)}
            className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all ${
              selectedCategory === cat 
                ? 'bg-primary text-white shadow-[0_0_15px_rgba(0,163,255,0.4)]' 
                : 'bg-white/5 text-textMuted hover:bg-white/10 hover:text-white border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

const FeaturedInsight = ({ insight }: { insight: InsightArticle }) => (
  <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-surfaceHighlight/20 hover:border-primary/30 transition-all duration-300 grid md:grid-cols-2 gap-0 mb-20">
    <div className="relative aspect-video md:aspect-auto overflow-hidden">
       <img 
         src={insight.imageUrl} 
         alt={insight.title} 
         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
       />
       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/50" />
    </div>
    <div className="p-10 md:p-14 flex flex-col justify-center">
      <div className="flex gap-2 mb-8">
        {insight.categories.map(cat => (
          <span key={cat} className="text-primary text-xs font-bold uppercase tracking-wider">{cat}</span>
        ))}
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-primary transition-colors tracking-wide">{insight.title}</h2>
      <p className="text-textMuted text-lg mb-10 leading-relaxed line-clamp-3">
        {insight.abstract}
      </p>
      <div className="flex items-center gap-6 mt-auto text-sm text-textMuted border-t border-white/10 pt-8">
         <div className="flex items-center gap-2">
            <Clock size={16} /> {insight.readingTime}
         </div>
      </div>
    </div>
  </div>
);

const InsightCard = ({ insight }: { insight: InsightArticle }) => (
  <div className="flex flex-col h-full group bg-surfaceHighlight/10 border border-white/5 rounded-xl overflow-hidden hover:border-primary/30 hover:bg-surfaceHighlight/20 transition-all duration-300">
    <div className="relative aspect-[16/9] overflow-hidden">
      <img 
        src={insight.imageUrl} 
        alt={insight.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
      <div className="absolute top-6 left-6 flex flex-wrap gap-2">
         {insight.categories.map(cat => (
          <span key={cat} className="px-3 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] uppercase tracking-wider text-white border border-white/10 font-bold">
            {cat}
          </span>
         ))}
      </div>
    </div>
    <div className="p-8 flex flex-col flex-1">
      <h3 className="text-[22px] font-bold text-white mb-4 group-hover:text-primary transition-colors line-clamp-2 tracking-wide">
        {insight.title}
      </h3>
      <p className="text-textMuted text-base mb-8 flex-1 leading-relaxed line-clamp-3">
        {insight.abstract}
      </p>
      <div className="flex items-center justify-between text-xs text-textMuted/60 mt-auto pt-6 border-t border-white/5">
        <span className="flex items-center gap-1"><Clock size={12} /> {insight.readingTime}</span>
      </div>
    </div>
  </div>
);

const InsightsPage = ({ onNavigate }: { onNavigate: (view: PageView, sectionId?: string) => void }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredInsights = useMemo(() => {
    return INSIGHTS_DATA.filter(item => 
      selectedCategory === 'All' || item.categories.includes(selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background pb-32">
      <InsightsHero />
      <InsightsFilterBar 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory}
        categories={CATEGORIES}
      />
      
      <div className="max-w-7xl mx-auto px-6 pt-20">
         {filteredInsights.length > 0 && (
            <FadeIn>
              <FeaturedInsight insight={filteredInsights[0]} />
            </FadeIn>
         )}

         {filteredInsights.length > 1 && (
            <div className="grid md:grid-cols-3 gap-10">
              {filteredInsights.slice(1).map((insight, idx) => (
                 <FadeIn key={insight.id} delay={idx * 100}>
                   <InsightCard insight={insight} />
                 </FadeIn>
              ))}
            </div>
         )}
         
         {filteredInsights.length === 0 && (
             <div className="text-center py-32">
                 <p className="text-textMuted text-lg mb-6">No insights found in this category.</p>
                 <Button variant="secondary" onClick={() => setSelectedCategory('All')}>View All Insights</Button>
             </div>
         )}
      </div>

      {/* New CTA Section */}
      <section className="mt-32 py-32 bg-surface relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
           <FadeIn>
             <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 tracking-wide leading-tight">
               Interested in applying these ideas in your organization?
             </h2>
             <div className="flex justify-center">
               <Button onClick={() => onNavigate('contact')}>Contact Us</Button>
             </div>
           </FadeIn>
         </div>
      </section>
    </div>
  );
};

// --- Contact Page Component ---
const ContactPage = () => {
    return (
      <div className="min-h-screen bg-background pt-48 pb-32 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-50" />
        
        <div className="max-w-3xl mx-auto px-6 relative z-10">
            <FadeIn>
               <div className="text-center mb-20">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-wide">Let’s start a conversation.</h1>
                  <p className="text-textMuted text-xl italic leading-relaxed max-w-2xl mx-auto">
                    Tell us a bit about your organization and what you’re trying to achieve. We’ll follow up to understand your context and explore how Ententia can support your AI journey.
                  </p>
               </div>
            </FadeIn>
            
            <FadeIn delay={200}>
               <form className="space-y-8 bg-surface/50 border border-white/10 p-10 md:p-14 rounded-2xl shadow-xl backdrop-blur-xl" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-8">
                     <div className="space-y-3">
                        <label className="text-sm font-bold text-textMuted ml-1 uppercase tracking-wide">First Name</label>
                        <input type="text" className="w-full bg-background border border-white/10 rounded-lg px-6 py-4 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Jane" />
                     </div>
                     <div className="space-y-3">
                        <label className="text-sm font-bold text-textMuted ml-1 uppercase tracking-wide">Last Name</label>
                        <input type="text" className="w-full bg-background border border-white/10 rounded-lg px-6 py-4 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Doe" />
                     </div>
                  </div>
                  <div className="space-y-3">
                     <label className="text-sm font-bold text-textMuted ml-1 uppercase tracking-wide">Work Email</label>
                     <input type="email" className="w-full bg-background border border-white/10 rounded-lg px-6 py-4 text-white focus:border-primary focus:outline-none transition-colors" placeholder="jane@company.com" />
                  </div>
                  <div className="space-y-3">
                     <label className="text-sm font-bold text-textMuted ml-1 uppercase tracking-wide">Organization</label>
                     <input type="text" className="w-full bg-background border border-white/10 rounded-lg px-6 py-4 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Company Name" />
                  </div>
                   <div className="space-y-3">
                     <label className="text-sm font-bold text-textMuted ml-1 uppercase tracking-wide">Message</label>
                     <textarea rows={4} className="w-full bg-background border border-white/10 rounded-lg px-6 py-4 text-white focus:border-primary focus:outline-none transition-colors" placeholder="How can we help?" />
                  </div>
                  <Button className="w-full !py-5 text-base">Send Message</Button>
               </form>
            </FadeIn>
        </div>
      </div>
    );
};

// --- Main App Logic ---

const HomePage = ({ 
  onSolutionSelect, 
  onNavigate 
}: { 
  onSolutionSelect: (s: Solution) => void,
  onNavigate: (view: PageView, sectionId?: string) => void
}) => {
  // Solutions data for the homepage specifically
  const highlightedSolutions = SOLUTIONS.slice(0, 4);

  const headlineStats = [
    { value: "15-40", unit: "%", label: "Improvement in key operational outcomes" },
    { value: "30-70", unit: "%", label: "Reduction in manual effort" },
    { value: "6–8", unit: " Hrs/Wk", label: "Saved per user" },
    { value: "4–8", unit: " Weeks", label: "To initial production deployment" }
  ];

  return (
    <>
      <section id="home" className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center bg-background">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center relative z-10">
          <div className="md:col-span-7">
            <FadeIn delay={0}>
              <span className="text-primary text-sm font-bold tracking-widest uppercase mb-6 block">
                Ententia
              </span>
            </FadeIn>
            <FadeIn delay={150}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-wide">
                Intelligence <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Operationalized
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="text-xl text-textMuted italic mb-12 max-w-lg leading-relaxed">
                AI-enabled services to deploy trusted, scalable enterprise AI solutions that turn context into competitive advantage.
              </p>
            </FadeIn>
            <FadeIn delay={450}>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button onClick={() => onNavigate('contact')}>Contact Us</Button>
                <Button variant="secondary" onClick={() => onNavigate('solutions')}>Explore Solutions</Button>
              </div>
            </FadeIn>
          </div>
          <div className="md:col-span-5 relative">
             <FadeIn delay={600} direction="left" className="h-full">
               <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-[100px]" />
                  <div className="relative glass-panel rounded-2xl p-8 h-full flex flex-col justify-center items-center overflow-hidden border border-white/10 transform hover:scale-[1.02] transition-transform duration-500">
                     <div className="text-center space-y-10">
                       <div className="p-6 rounded-full bg-white/5 border border-white/10 inline-flex items-center justify-center">
                          <Layers size={56} className="text-primary" />
                       </div>
                       <div className="space-y-2">
                          <h3 className="text-xs font-bold text-textMuted uppercase tracking-widest">Deploy ROI</h3>
                          <div className="text-5xl font-bold text-white">&lt;3 Mo</div>
                       </div>
                       <div className="h-px w-32 bg-white/10 mx-auto" />
                       <div className="space-y-2">
                          <h3 className="text-xs font-bold text-textMuted uppercase tracking-widest">Solutions</h3>
                          <div className="text-2xl font-bold text-white tracking-wide">Production Ready</div>
                       </div>
                     </div>
                  </div>
               </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Ententia Section */}
      <section className="py-32 bg-surface">
         <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
               <div className="text-center mb-24">
                 <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Why Ententia?</span>
                 <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-wide">We Deliver Measurable Outcomes in Weeks</h2>
                 <p className="text-textMuted max-w-2xl mx-auto text-xl italic">
                   Our services are powered by our proprietary enterprise AI foundation and suite of purpose-built accelerators.
                 </p>
               </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-10">
               {[
                 { 
                   title: "Enterprise-Ready Foundation", 
                   desc: "Ententia’s AI-enabled services leverage a secure, scalable, and model-agnostic foundation designed to operate inside real enterprise environments from day one.",
                   bullets: [
                      "Flexible architecture and design, deployed in your cloud, keeps you in control",
                      "Core capabilities support wide range of use cases and teams on a shared foundation",
                      "Built-in connectors accelerate integration with enterprise data and systems",
                      "Enterprise-grade identity, security, and observability provide the right guardrails"
                   ]
                 },
                 { 
                   title: "Domain Expertise & Context", 
                   desc: "Ententia embeds deep domain knowledge and enterprise context directly into every solution, enabling them to reason, respond, and act in ways that align with how your business operates.",
                   bullets: [
                      "Pre-built industry and domain-specific knowledge structures",
                      "Reduced prompt engineering and configuration through built-in context",
                      "Context-aware responses grounded in operational data, documents, and workflows",
                      "Built-in industry-specific workflows that reflect real-world constraints and decisions"
                   ]
                 },
                 { 
                   title: "Speed to Value", 
                   desc: "Ententia’s services accelerate the path from use case concept to deployment by combining a strong foundation with proven solution patterns and accelerators.",
                   bullets: [
                      "Pre-built solution patterns reduce design and build time",
                      "Configurable workflows and automations enable rapid iteration",
                      "Integrated evaluation framework support early validation",
                      "Typical deployments deliver measurable outcomes in weeks"
                   ]
                 },
                 { 
                   title: "Delivery & Change Management", 
                   desc: "Ententia services and solutions are designed to build user trust and drive adoption, with a delivery approach tailored to your organization’s readiness and urgency.",
                   bullets: [
                      "Structured evaluation and delivery approach align to your specific needs",
                      "Human-in-the-loop workflows ensure trust, accountability, and control",
                      "Clear ownership, governance, and escalation paths respect internal controls",
                      "Transparent performance metrics and KPIs enable measurable ROI"
                   ]
                 }
               ].map((item, i) => (
                 <FadeIn key={i} delay={i * 100} className="h-full">
                    <div className="flex flex-col h-full p-10 rounded-xl bg-surfaceHighlight/30 border border-white/10 shadow-sm hover:border-primary/30 transition-colors">
                       <div className="mb-6 flex items-center gap-4">
                         <CheckCircle2 className="text-primary shrink-0" size={28} />
                         <h3 className="text-[22px] font-bold text-white tracking-wide">{item.title}</h3>
                       </div>
                       <p className="text-textMuted mb-8 leading-relaxed text-base">{item.desc}</p>
                       <ul className="space-y-3 mt-auto border-t border-white/5 pt-6">
                          {item.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-textMuted/80">
                              <span className="text-primary/70 mt-1">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                       </ul>
                    </div>
                 </FadeIn>
               ))}
            </div>
         </div>
      </section>

      {/* Solutions Grid - Zebra Stripe Dark */}
      <section id="solutions" className="py-32 bg-background relative">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-24">
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Proven Impact</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-wide">Solutions that Deliver Results</h2>
              <p className="text-textMuted max-w-2xl mx-auto text-xl italic mb-10">
                Production-ready AI solutions across industries, function, and business outcomes.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {highlightedSolutions.map((item, index) => {
              return (
                <FadeIn key={item.id} delay={index * 100} className="h-full">
                   <SolutionGridItem item={item} onClick={onSolutionSelect} />
                </FadeIn>
              );
            })}
          </div>

          <FadeIn>
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-20 border-t border-white/10 pt-16">
               {headlineStats.map((stat, i) => (
                  <div key={i} className="text-center">
                     <div className="text-2xl md:text-3xl font-bold text-white mb-3 whitespace-nowrap tracking-wide">
                        {stat.value}<span className="text-primary">{stat.unit}</span>
                     </div>
                     <p className="text-[10px] md:text-xs font-bold text-textMuted uppercase tracking-widest max-w-[200px] mx-auto leading-relaxed">
                        {stat.label}
                     </p>
                  </div>
               ))}
             </div>
          </FadeIn>

          <div className="text-center">
             <Button variant="secondary" onClick={() => onNavigate('solutions')}>Explore Solutions</Button>
          </div>
        </div>
      </section>

      {/* Foundation Section - Zebra Stripe Dark (Renamed from Platform) */}
      <section id="foundation" className="py-32 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader 
            eyebrow="Our Foundation" 
            title="Industry-Specific AI Foundation" 
            description="From use case concept to deployment in weeks."
          />
          <div className="grid md:grid-cols-2 gap-10">
            {PLATFORM_FEATURES.map((cap, idx) => (
              <FadeIn key={idx} delay={idx * 150}>
                <div className="glass-card p-12 rounded-xl h-full flex flex-col">
                  <div className="mb-8 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    {idx === 0 ? <Zap size={28} /> : idx === 1 ? <Database size={28} /> : idx === 2 ? <ShieldCheck size={28} /> : <Settings size={28} />}
                  </div>
                  <h3 className="text-[22px] font-bold text-white mb-6 tracking-wide">{cap.title}</h3>
                  <p className="text-textMuted text-base mb-0 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button variant="secondary" onClick={() => onNavigate('foundation')}>Learn More</Button>
          </div>
        </div>
      </section>

      {/* Case Studies - Zebra Stripe Dark (Keep as is) */}
      <section id="casestudies" className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
              <div className="mb-20 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-wide">Primary Case Studies</h2>
                <p className="text-textMuted text-xl italic">Production deployments delivering measurable ROI.</p>
              </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-10">
            {CASE_STUDIES.map((story, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="relative group p-10 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-[22px] font-bold text-white mb-6 group-hover:text-primary transition-colors tracking-wide">{story.title}</h3>
                  <p className="text-textMuted leading-relaxed flex-1 text-base">{story.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-16 text-center">
            <Button variant="ghost" className="hover:text-white" onClick={() => onNavigate('casestudies')}>
                Explore All Case Studies & Services <ArrowRight size={16} />
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* CTA - Zebra Stripe Dark (Reverted from WarmWhite) */}
      <section className="py-40 bg-surface relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-wide">
            Turn AI solutions into real outcomes for your organization.
          </h2>
          <p className="text-textMuted text-xl italic mb-16">
            Explore how Ententia helps energy teams deploy trusted AI solutions that deliver ROI in weeks.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button variant="primary" onClick={() => onNavigate('contact')}>Contact Us</Button>
            <Button variant="secondary" onClick={() => onNavigate('solutions')}>Explore Solutions</Button>
          </div>
        </div>
      </section>
    </>
  );
};

// --- Footer ---

const Footer = () => {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 md:col-span-2">
            <Logo className="mb-8" />
            <p className="text-textMuted text-sm leading-relaxed max-w-[240px]">
              Purpose-built Applied AI for Energy. Designed to turn AI ambition into operational impact.
            </p>
          </div>
          
          {FOOTER_LINKS.map((column) => (
            <div key={column.title}>
              <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-wider">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-textMuted text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="text-textMuted text-xs">© 2026 Ententia. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-textMuted hover:text-primary transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-textMuted hover:text-primary transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  // Handle routing and scrolling
  const handleViewChange = (view: PageView, sectionId?: string) => {
    setCurrentView(view);
    
    // If switching to home with a section ID, wait for render then scroll
    if (view === 'home' && sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-textMain selection:bg-primary/30 font-sans">
      <Navigation currentView={currentView} onChangeView={handleViewChange} />
      
      <main>
        {currentView === 'home' && (
          <HomePage 
            onSolutionSelect={setSelectedSolution} 
            onNavigate={handleViewChange} 
          />
        )}
        
        {currentView === 'insights' && (
          <InsightsPage onNavigate={handleViewChange} />
        )}

        {currentView === 'solutions' && (
          <SolutionsPage onSolutionSelect={setSelectedSolution} />
        )}

        {currentView === 'casestudies' && (
          <CaseStudiesPage onNavigate={handleViewChange} />
        )}

        {currentView === 'foundation' && (
          <FoundationPage onNavigate={handleViewChange} />
        )}

        {currentView === 'services' && (
          <ServicesPage onNavigate={handleViewChange} />
        )}

        {currentView === 'contact' && (
          <ContactPage />
        )}
      </main>

      <Footer />

      {/* Global Modals */}
      <SolutionDetailModal 
        solution={selectedSolution} 
        isOpen={!!selectedSolution} 
        onClose={() => setSelectedSolution(null)} 
        onNavigate={handleViewChange}
      />
    </div>
  );
}