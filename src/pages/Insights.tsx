import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { INSIGHTS_DATA, INSIGHTS } from '../constants';
import { InsightArticle, Category } from '../types';
import SharedComponents from '../components/SharedComponents';
import { usePageTitle } from '../hooks/usePageTitle';

const InsightCard: React.FC<{ insight: InsightArticle }> = ({ insight }) => (
  <div className="group bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-xl cursor-pointer">
    <div className="relative h-56 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60 z-10" />
      <img
        src={insight.imageUrl}
        alt={insight.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {insight.isWhitepaper && (
        <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-primary text-black text-xs font-bold uppercase tracking-wide">
          Whitepaper
        </div>
      )}
    </div>
    <div className="p-8 flex flex-col flex-1">
      <div className="flex flex-wrap gap-2 mb-4">
        {insight.categories.map((cat) => (
          <span
            key={cat}
            className="px-3 py-1 rounded-full text-xs font-medium text-primary border border-primary/30 bg-primary/5"
          >
            {cat}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-primary transition-colors line-clamp-2">
        {insight.title}
      </h3>
      <p className="text-textMuted text-sm mb-6 flex-1 leading-relaxed line-clamp-3">
        {insight.abstract}
      </p>

      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="text-xs text-textMuted">{insight.readingTime}</span>
        <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
          Read <ArrowRight size={14} />
        </span>
      </div>
    </div>
  </div>
);

const Insights: React.FC = () => {
  usePageTitle('Insights | Ententia');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const categories: Category[] = [
    'Enterprise AI Strategy',
    'Risk, Governance & Trust',
    'Execution Approach',
    'AI Use Cases',
  ];

  const filteredInsights = useMemo(() => {
    if (selectedCategory === 'All') {
      return INSIGHTS_DATA;
    }
    return INSIGHTS_DATA.filter((insight) =>
      insight.categories.includes(selectedCategory)
    );
  }, [selectedCategory]);

  // Get featured article (first whitepaper or first article)
  const featuredArticle = INSIGHTS_DATA.find((a) => a.isWhitepaper) || INSIGHTS_DATA[0];
  const otherInsights = filteredInsights.filter((a) => a.id !== featuredArticle.id);

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <SharedComponents.FadeIn className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
              Insights & Resources
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide">
            Enterprise AI Insights & Strategy
          </h1>
          <p className="text-xl text-textMuted italic mb-8 max-w-3xl mx-auto">
            Thought leadership, research, and practical guidance to guide your AI transformation journey.
          </p>
        </SharedComponents.FadeIn>
      </section>

      {/* Featured Article Section */}
      {selectedCategory === 'All' && (
        <section className="py-20 px-6 md:px-12 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <SharedComponents.FadeIn className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden border border-white/10 h-96 lg:h-full min-h-96 group cursor-pointer">
                <div className="relative h-full">
                  <img
                    src={featuredArticle.imageUrl}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {featuredArticle.isWhitepaper && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-black text-xs font-bold uppercase">
                      Featured
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <span className="inline-flex w-fit px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-4">
                  Featured Article
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
                  {featuredArticle.title}
                </h2>
                <p className="text-lg text-textMuted mb-6 leading-relaxed">
                  {featuredArticle.abstract}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {featuredArticle.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1 rounded-full text-xs font-medium text-primary border border-primary/30 bg-primary/5"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-textMuted">{featuredArticle.readingTime}</span>
                  <SharedComponents.Button className="rounded-full">
                    Read Full Article <ArrowRight size={18} />
                  </SharedComponents.Button>
                </div>
              </div>
            </SharedComponents.FadeIn>
          </div>
        </section>
      )}

      {/* Sticky Filter Bar */}
      <section className="sticky top-0 z-40 bg-[#050505] border-b border-white/5 backdrop-blur-xl py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all hover:-translate-y-0.5 ${
                  selectedCategory === cat
                    ? 'bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(0,163,255,0.2)]'
                    : 'bg-[#0A0A0A] border-white/10 text-textMuted hover:border-white/30 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredInsights.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInsights.map((insight, index) => (
                <SharedComponents.FadeIn key={insight.id} delay={index * 100}>
                  <InsightCard insight={insight} />
                </SharedComponents.FadeIn>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-textMuted text-lg mb-6">
                No insights found in this category.
              </p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="px-6 py-3 rounded-full bg-primary hover:bg-[#0088cc] text-white font-bold transition-colors"
              >
                View All Insights
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-20 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <SharedComponents.SectionHeader
            eyebrow="Featured Resources"
            title="Latest News & Updates"
            description="Stay informed with the latest insights on enterprise AI"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {INSIGHTS.map((insight, idx) => (
              <SharedComponents.FadeIn key={idx} delay={idx * 100}>
                <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all group cursor-pointer">
                  <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-4">
                    {insight.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-primary transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-textMuted mb-6 leading-relaxed">
                    {insight.description}
                  </p>
                  <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    {insight.linkText} <ArrowRight size={16} />
                  </span>
                </div>
              </SharedComponents.FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <SharedComponents.FadeIn className="bg-gradient-to-r from-primary/10 via-transparent to-transparent border border-primary/20 rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-lg text-textMuted mb-8">
              Connect with our team to discuss how our solutions can drive measurable impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <SharedComponents.Button className="rounded-full">
                  Schedule a Consultation <ArrowRight size={18} />
                </SharedComponents.Button>
              </Link>
              <Link to="/solutions">
                <SharedComponents.Button variant="secondary" className="rounded-full">
                  Explore Solutions
                </SharedComponents.Button>
              </Link>
            </div>
          </SharedComponents.FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Insights;
