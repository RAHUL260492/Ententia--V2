import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Lock, Layers } from 'lucide-react';
import { PLATFORM_PRINCIPLES, PLATFORM_CAPABILITIES } from '../constants';
import SharedComponents from '../components/SharedComponents';
import { usePageTitle } from '../hooks/usePageTitle';

const Foundation: React.FC = () => {
  usePageTitle('Foundation | Ententia');
  const iconMap: Record<number, React.ReactNode> = {
    0: <Zap size={24} />,
    1: <Lock size={24} />,
    2: <Layers size={24} />,
    3: <Zap size={24} />,
    4: <Lock size={24} />,
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <SharedComponents.FadeIn className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
              Platform Foundation
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide">
            The Ententia Platform Foundation
          </h1>
          <p className="text-xl text-textMuted italic mb-8 max-w-3xl mx-auto">
            Enterprise-ready architecture, governance controls, and reusable accelerators built for reliability and scale.
          </p>
        </SharedComponents.FadeIn>
      </section>

      {/* Platform Principles Grid */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <SharedComponents.SectionHeader
            eyebrow="Core Principles"
            title="Built on Five Core Principles"
            description="Our foundation is designed around principles that ensure reliability, trust, and scalability."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {PLATFORM_PRINCIPLES.map((principle, idx) => (
              <SharedComponents.FadeIn key={idx} delay={idx * 100} className="h-full">
                <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 h-full flex flex-col group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    {iconMap[idx] && (
                      <div className="text-primary">{iconMap[idx]}</div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-primary transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-textMuted leading-relaxed flex-1">
                    {principle.description}
                  </p>
                </div>
              </SharedComponents.FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities List */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <SharedComponents.SectionHeader
            eyebrow="Platform Capabilities"
            title="Core Capabilities That Enable Success"
            description="The platform is built with five interconnected capabilities designed to work together."
          />

          <div className="space-y-8 mt-16">
            {PLATFORM_CAPABILITIES.map((capability, idx) => (
              <SharedComponents.FadeIn key={idx} delay={idx * 100}>
                <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-primary transition-colors">
                        {capability.title}
                      </h3>
                      <p className="text-textMuted text-base leading-relaxed mb-6">
                        {capability.description}
                      </p>

                      <div className="space-y-3">
                        {capability.bullets.map((bullet, bulletIdx) => (
                          <div key={bulletIdx} className="flex gap-3 items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                            <span className="text-textMuted text-sm leading-relaxed">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SharedComponents.FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <SharedComponents.FadeIn>
            <div className="bg-gradient-to-r from-primary/10 via-transparent to-transparent border border-primary/20 rounded-2xl p-12 md:p-16">
              <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">
                Enterprise-Ready Architecture
              </h2>
              <p className="text-lg text-textMuted mb-8 leading-relaxed">
                Built from the ground up with enterprise requirements in mind. Our modular architecture integrates seamlessly with your existing systems, data platforms, and governance frameworks—without vendor lock-in.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Model and vendor-agnostic orchestration framework',
                  'Multi-deployment options (Cloud, On-premise, Hybrid, Edge)',
                  'Role-based access and enterprise identity integration',
                  'Comprehensive audit trails and compliance reporting',
                  'Continuous monitoring and lifecycle management',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span className="text-textMuted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SharedComponents.FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <SharedComponents.FadeIn className="bg-gradient-to-r from-primary/10 via-transparent to-transparent border border-primary/20 rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build on a Solid Foundation?
            </h2>
            <p className="text-lg text-textMuted mb-8">
              Explore our solutions or connect with our team to discuss your platform requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/solutions">
                <SharedComponents.Button className="rounded-full">
                  Explore Solutions <ArrowRight size={18} />
                </SharedComponents.Button>
              </Link>
              <Link to="/contact-us">
                <SharedComponents.Button variant="secondary" className="rounded-full">
                  Get in Touch
                </SharedComponents.Button>
              </Link>
            </div>
          </SharedComponents.FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Foundation;
