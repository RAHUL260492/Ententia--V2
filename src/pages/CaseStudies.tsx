import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import { ENABLEMENT_SERVICES, FULL_CASE_STUDIES } from '../constants';
import { CaseStudyDetail } from '../types';
import SharedComponents from '../components/SharedComponents';
import { usePageTitle } from '../hooks/usePageTitle';

const CaseStudyCard: React.FC<{
  caseStudy: CaseStudyDetail;
  onClick: (cs: CaseStudyDetail) => void;
}> = ({ caseStudy, onClick }) => (
  <div
    className="group bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer h-full flex flex-col shadow-lg hover:shadow-xl"
    onClick={() => onClick(caseStudy)}
  >
    <div className="relative h-56 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60 z-10" />
      <img
        src={caseStudy.imageUrl}
        alt={caseStudy.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="p-8 flex flex-col flex-1">
      <span className="inline-flex w-fit px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-3">
        {caseStudy.category}
      </span>
      <h3 className="text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-primary transition-colors">
        {caseStudy.title}
      </h3>
      <p className="text-textMuted text-base mb-8 flex-1 leading-relaxed line-clamp-3">
        {caseStudy.content.text3}
      </p>
      <div className="pt-4 border-t border-white/10">
        <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all tracking-wide">
          View Details <ArrowRight size={16} />
        </span>
      </div>
    </div>
  </div>
);

const CaseStudyDetailModal: React.FC<{
  caseStudy: CaseStudyDetail | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ caseStudy, isOpen, onClose }) => {
  if (!isOpen || !caseStudy) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-[#0A0A0A] border border-white/10 w-full max-w-4xl max-h-[95vh] overflow-y-auto rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-30 bg-[#1A1F2E] border border-white/10 p-2 rounded-full text-textMuted hover:text-white transition-colors hover:bg-white/10"
        >
          <X size={20} />
        </button>

        <div className="relative h-64 md:h-80 overflow-hidden border-b border-white/10">
          <img
            src={caseStudy.imageUrl}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent" />
        </div>

        <div className="p-8 md:p-12 flex-1">
          <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-4">
            {caseStudy.category}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-wide">
            {caseStudy.title}
          </h2>

          <div className="space-y-12">
            {/* Challenge */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide text-primary">
                {caseStudy.content.label1}
              </h3>
              <p className="text-textMuted text-base leading-relaxed">
                {caseStudy.content.text1}
              </p>
            </div>

            {/* Solution */}
            <div className="p-8 bg-gradient-to-r from-primary/5 via-transparent to-transparent border border-primary/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide text-primary">
                {caseStudy.content.label2}
              </h3>
              <p className="text-textMuted text-base leading-relaxed">
                {caseStudy.content.text2}
              </p>
            </div>

            {/* Outcome/Impact */}
            <div className="border border-white/10 rounded-xl p-8">
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide text-primary">
                {caseStudy.content.label3}
              </h3>
              <p className="text-textMuted text-base leading-relaxed font-semibold text-lg">
                {caseStudy.content.text3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CaseStudies: React.FC = () => {
  usePageTitle('Case Studies | Ententia');
  const [selectedCase, setSelectedCase] = useState<CaseStudyDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCaseClick = (caseStudy: CaseStudyDetail) => {
    setSelectedCase(caseStudy);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <SharedComponents.FadeIn className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
              Real Results
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide">
            Delivering Measurable ROI
          </h1>
          <p className="text-xl text-textMuted italic mb-8 max-w-3xl mx-auto">
            Explore real life examples of Ententia's services and solutions deliveriving measurable impact accross industries and functions.
          </p>
        </SharedComponents.FadeIn>
      </section>

      {/* Enablement Services Section */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
        
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {ENABLEMENT_SERVICES.map((item, index) => (
              <CaseStudyCard
                key={item.id}
                caseStudy={item}
                onClick={handleCaseClick}
              />
            ))}

            {FULL_CASE_STUDIES.map((item, index) => (
            <CaseStudyCard
              key={item.id}
              caseStudy={item}
              onClick={handleCaseClick}
            />
          ))}
          </div>
        </div>
      </section>

      {/* Full Case Studies Section */}
      {/* <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {FULL_CASE_STUDIES.map((item, index) => (
              <CaseStudyCard
                key={item.id}
                caseStudy={item}
                onClick={handleCaseClick}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Impact Stats */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <SharedComponents.FadeIn className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: '30-40%',
                label: 'Productivity Improvement',
                description: 'Average reduction in low-value work across workflows',
              },
              {
                stat: '15-20%',
                label: 'Cost Reduction',
                description: 'Operating cost savings through decision optimization',
              },
              {
                stat: '40-60%',
                label: 'Process Efficiency',
                description: 'Reduction in manual reconciliation effort',
              },
            ].map((impact, idx) => (
              <div
                key={idx}
                className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 text-center hover:border-primary/30 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                  {impact.stat}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{impact.label}</h3>
                <p className="text-sm text-textMuted">{impact.description}</p>
              </div>
            ))}
          </SharedComponents.FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <SharedComponents.FadeIn className="bg-gradient-to-r from-primary/10 via-transparent to-transparent border border-primary/20 rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Turn AI solutions into real outcomes for your organization.
            </h2>
            <p className="text-lg text-textMuted mb-8">
              Let's explore how we can drive measurable impact for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us">
                <SharedComponents.Button className="rounded-full">
                  Contact Us <ArrowRight size={18} />
                </SharedComponents.Button>
              </Link>
              <Link to="/solutions">
                <SharedComponents.Button variant="secondary" className="rounded-full">
                  Explore Our Solutions
                </SharedComponents.Button>
              </Link>
            </div>
          </SharedComponents.FadeIn>
        </div>
      </section>

      {/* Modal */}
      <CaseStudyDetailModal
        caseStudy={selectedCase}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default CaseStudies;
