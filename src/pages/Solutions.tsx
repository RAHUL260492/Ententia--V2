import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import { SOLUTIONS, FILTER_OPTIONS } from '../constants';
import { Solution, Industry, FunctionArea, Outcome, SolutionType, FilterState } from '../types';
import SharedComponents from '../components/SharedComponents';
import { usePageTitle } from '../hooks/usePageTitle';

const Solutions: React.FC = () => {
  usePageTitle('Solutions | Ententia');
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
    industry: [],
    function: [],
    outcome: [],
    type: [],
  });
  
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredSolutions = useMemo(() => {
    return SOLUTIONS.filter((solution) => {
      const industryMatch =
        selectedFilters.industry.length === 0 ||
        selectedFilters.industry.some((ind) => solution.tags.industry.includes(ind as Industry));

      const functionMatch =
        selectedFilters.function.length === 0 ||
        selectedFilters.function.some((func) => solution.tags.function.includes(func as FunctionArea));

      const outcomeMatch =
        selectedFilters.outcome.length === 0 ||
        selectedFilters.outcome.some((out) => solution.tags.outcome.includes(out as Outcome));

      const typeMatch =
        selectedFilters.type.length === 0 ||
        selectedFilters.type.includes(solution.tags.type as unknown as string);

      return industryMatch && functionMatch && outcomeMatch && typeMatch;
    });
  }, [selectedFilters]);

  const handleFilterChange = (filterType: keyof FilterState, values: string[]) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: values,
    }));
  };

  const handleResetFilters = () => {
    setSelectedFilters({
      industry: [],
      function: [],
      outcome: [],
      type: [],
    });
  };

  const handleSolutionClick = (solution: Solution) => {
    setSelectedSolution(solution);
    setIsModalOpen(true);
  };

  const hasActiveFilters = Object.values(selectedFilters).some((v) => (v as string[]).length > 0);

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <SharedComponents.FadeIn className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
              Our Enteprise AI Solutions
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide">
            Explore production-ready AI solutions across industries, function, and business outcomes
          </h1>
          <p className="text-xl text-textMuted italic mb-8 max-w-3xl mx-auto">
            Pre-built, production-ready patterns designed to solve high-impact operational challenges across industries.
          </p>
        </SharedComponents.FadeIn>
      </section>

      {/* Filters Section */}
      <section className="sticky top-0 z-40 bg-[#050505] border-b border-white/5 backdrop-blur-xl py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-3">
              <SharedComponents.FilterDropdown
                label="Industry"
                options={FILTER_OPTIONS.Industry}
                selectedValues={selectedFilters.industry}
                onChange={(values) => handleFilterChange('industry', values)}
              />
              <SharedComponents.FilterDropdown
                label="Function"
                options={FILTER_OPTIONS.Function}
                selectedValues={selectedFilters.function}
                onChange={(values) => handleFilterChange('function', values)}
              />
              <SharedComponents.FilterDropdown
                label="Outcome"
                options={FILTER_OPTIONS.Outcome}
                selectedValues={selectedFilters.outcome}
                onChange={(values) => handleFilterChange('outcome', values)}
              />
              <SharedComponents.FilterDropdown
                label="Type"
                options={FILTER_OPTIONS.Type}
                selectedValues={selectedFilters.type}
                onChange={(values) => handleFilterChange('type', values)}
              />
            </div>

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-textMuted hover:text-white transition-colors hover:bg-white/5 border border-white/10 hover:border-white/20 whitespace-nowrap"
              >
                <X size={16} />
                Reset Filters
              </button>
            )}
          </div>

          {hasActiveFilters && (
            <div className="mt-4 text-sm text-textMuted">
              Showing <span className="text-white font-semibold">{filteredSolutions.length}</span> solutions
            </div>
          )}
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredSolutions.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((solution, index) => (
                <SharedComponents.FadeIn key={solution.id} delay={index * 100}>
                  <SharedComponents.SolutionGridItem
                    item={solution}
                    onClick={handleSolutionClick}
                  />
                </SharedComponents.FadeIn>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-textMuted text-lg mb-6">No solutions match your selected filters.</p>
              <button
                onClick={handleResetFilters}
                className="px-6 py-3 rounded-full bg-primary hover:bg-[#0088cc] text-white font-bold transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <SharedComponents.FadeIn className="bg-gradient-to-r from-primary/10 via-transparent to-transparent border border-primary/20 rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg text-textMuted mb-8">
              Let's explore how our solutions can solve your specific challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us">
                <SharedComponents.Button className="rounded-full">
                  Get Started <ArrowRight size={18} />
                </SharedComponents.Button>
              </Link>
            </div>
          </SharedComponents.FadeIn>
        </div>
      </section>

      {/* Modal */}
      <SharedComponents.SolutionDetailModal
        solution={selectedSolution}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Solutions;
