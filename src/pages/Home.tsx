import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Layers, ArrowRight } from "lucide-react";
import { SOLUTIONS, PLATFORM_FEATURES, CASE_STUDIES } from "../constants";
import { Solution } from "../types";
import SharedComponents from "../components/SharedComponents";
import { usePageTitle } from "../hooks/usePageTitle";

interface HomePageProps {
  onSolutionSelect: (solution: Solution) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSolutionSelect }) => {
  usePageTitle("Ententia | Enterprise AI Solutions");
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(
    null,
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const highlightedSolutions = SOLUTIONS.slice(0, 4);

  const headlineStats = [
    {
      value: "15-40",
      unit: "%",
      label: "Improvement in key operational outcomes",
    },
    { value: "30-70", unit: "%", label: "Reduction in manual effort" },
    { value: "6–8", unit: " Hrs/Wk", label: "Saved per user" },
    { value: "4–8", unit: " Weeks", label: "To initial production deployment" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center bg-[#050505]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center relative z-10">
          <div className="md:col-span-7">
            <SharedComponents.FadeIn delay={150}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-wide">
                Intelligence,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00A3FF]">
                  Operationalized
                </span>
              </h1>
            </SharedComponents.FadeIn>
            <SharedComponents.FadeIn delay={300}>
              <p className="text-xl text-textMuted italic mb-12 max-w-lg leading-relaxed">
                AI-enabled services to deploy trusted, scalable enterprise AI
                solutions that turn context into competitive advantage.
              </p>
            </SharedComponents.FadeIn>
            <SharedComponents.FadeIn delay={450}>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact-us">
                  <SharedComponents.Button>Contact Us</SharedComponents.Button>
                </Link>
                <Link to="/solutions">
                  <SharedComponents.Button variant="secondary">
                    Explore Solutions
                  </SharedComponents.Button>
                </Link>
              </div>
            </SharedComponents.FadeIn>
          </div>
          {/* <div className="md:col-span-5 relative">
            <SharedComponents.FadeIn delay={600} direction="left" className="h-full">
              <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-[#00A3FF]/20 rounded-full blur-[100px]" />
                <div className="relative bg-[#0A0A0A]/50 rounded-2xl p-8 h-full flex flex-col justify-center items-center overflow-hidden border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 backdrop-blur">
                  <div className="text-center space-y-5">
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
            </SharedComponents.FadeIn>
          </div> */}
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-6">
          <SharedComponents.FadeIn>
            <div className="text-center mb-24">
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                Proven Impact
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-wide">
                Solutions that Deliver Results
              </h2>
              <p className="text-textMuted max-w-2xl mx-auto text-xl italic mb-10">
                Production-ready AI solutions across industries, function, and
                business outcomes.
              </p>
            </div>
          </SharedComponents.FadeIn>

          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {highlightedSolutions.map((item, index) => (
              <SharedComponents.FadeIn
                key={item.id}
                delay={index * 100}
                className="h-full"
              >
                <div
                  onClick={() => {
                    setSelectedSolution(item);
                    onSolutionSelect(item);
                  }}
                >
                  <SharedComponents.SolutionGridItem
                    item={item}
                    onClick={() => {}}
                  />
                </div>
              </SharedComponents.FadeIn>
            ))}
          </div>

          <SharedComponents.FadeIn>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-20 border-t border-white/10 pt-16">
              {headlineStats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-3 whitespace-nowrap tracking-wide">
                    <span className="text-primary">
                      {stat.value} {stat.unit}
                    </span>
                  </div>
                  <p className="text-[10px] md:text-xs font-bold text-textMuted uppercase tracking-widest max-w-[200px] mx-auto leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </SharedComponents.FadeIn>

          <div className="text-center">
            <Link to="/solutions">
              <SharedComponents.Button variant="secondary">
                Explore Solutions
              </SharedComponents.Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      {/* <section className="py-16 bg-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SharedComponents.SectionHeader
            eyebrow="Our Foundation"
            title="Industry-Specific AI Foundation"
            description="From use case concept to deployment in weeks."
          />
          <div className="grid md:grid-cols-2 gap-10">
            {PLATFORM_FEATURES.map((cap, idx) => (
              <SharedComponents.FadeIn key={idx} delay={idx * 150}>
                <div className="bg-[#0F0F0F] border border-white/10 p-12 rounded-xl h-full flex flex-col hover:border-primary/30 transition-colors">
                  <div className="mb-8 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <div className="text-2xl font-bold">{idx + 1}</div>
                  </div>
                  <h3 className="text-[22px] font-bold text-white mb-6 tracking-wide">{cap.title}</h3>
                  <p className="text-textMuted text-base mb-0 leading-relaxed">{cap.description}</p>
                </div>
              </SharedComponents.FadeIn>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/foundation">
              <SharedComponents.Button variant="secondary">Learn More</SharedComponents.Button>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Case Studies */}
      <section className="py-16 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <SharedComponents.FadeIn>
            <div className="mb-20 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-wide">
                Case Studies
              </h2>
              <p className="text-textMuted text-xl italic">
                Production deployments delivering measurable ROI.
              </p>
            </div>
          </SharedComponents.FadeIn>
          <div className="grid md:grid-cols-3 gap-10">
            {CASE_STUDIES.map((story, idx) => (
              <SharedComponents.FadeIn key={idx} delay={idx * 100}>
                <div className="relative group p-10 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-[22px] font-bold text-white mb-6 group-hover:text-primary transition-colors tracking-wide">
                    {story.title}
                  </h3>
                  <p className="text-textMuted leading-relaxed flex-1 text-base">
                    {story.description}
                  </p>
                </div>
              </SharedComponents.FadeIn>
            ))}
          </div>
          <SharedComponents.FadeIn className="mt-16 text-center">
            <Link to="/case-studies">
              <SharedComponents.Button
                variant="ghost"
                className="hover:text-white"
              >
                Explore Case Studies <ArrowRight size={16} />
              </SharedComponents.Button>
            </Link>
          </SharedComponents.FadeIn>
        </div>
      </section>

      {/* Why Ententia Section */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <SharedComponents.FadeIn>
            <div className="text-center mb-24">
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                Why Ententia?
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-wide">
                We Deliver Measurable Outcomes in Weeks
              </h2>
              <p className="text-textMuted max-w-2xl mx-auto text-xl italic">
                Our services are powered by our proprietary enterprise AI
                foundation and suite of purpose-built accelerators.
              </p>
            </div>
          </SharedComponents.FadeIn>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Enterprise-Ready Foundation",
                desc: "Ententia's AI-enabled services leverage a secure, scalable, and model-agnostic foundation designed to operate inside real enterprise environments from day one.",
                bullets: [
                  "Flexible architecture and design, deployed in your cloud, keeps you in control",
                  "Core capabilities support wide range of use cases and teams on a shared foundation",
                  "Built-in connectors accelerate integration with enterprise data and systems",
                  "Enterprise-grade identity, security, and observability provide the right guardrails",
                ],
              },
              {
                title: "Domain Expertise & Context",
                desc: "Ententia embeds deep domain knowledge and enterprise context directly into every solution, enabling them to reason, respond, and act in ways that align with how your business operates.",
                bullets: [
                  "Pre-built industry and domain-specific knowledge structures",
                  "Reduced prompt engineering and configuration through built-in context",
                  "Context-aware responses grounded in operational data, documents, and workflows",
                  "Built-in industry-specific workflows that reflect real-world constraints and decisions",
                ],
              },
              {
                title: "Speed to Value",
                desc: "Ententia's services accelerate the path from use case concept to deployment by combining a strong foundation with proven solution patterns and accelerators.",
                bullets: [
                  "Pre-built solution patterns reduce design and build time",
                  "Configurable workflows and automations enable rapid iteration",
                  "Integrated evaluation framework support early validation",
                  "Typical deployments deliver measurable outcomes in weeks",
                ],
              },
              {
                title: "Delivery & Change Management",
                desc: "Ententia services and solutions are designed to build user trust and drive adoption, with a delivery approach tailored to your organization's readiness and urgency.",
                bullets: [
                  "Structured evaluation and delivery approach align to your specific needs",
                  "Human-in-the-loop workflows ensure trust, accountability, and control",
                  "Clear ownership, governance, and escalation paths respect internal controls",
                  "Transparent performance metrics and KPIs enable measurable ROI",
                ],
              },
            ].map((item, i) => {
              const isActive = activeIndex === i;

              return (
                <SharedComponents.FadeIn
                  key={i}
                  delay={i * 100}
                  className="h-full"
                >
                  <div
                    onClick={() => setActiveIndex(isActive ? null : i)}
                    className="group flex flex-col h-full p-10 rounded-xl bg-[#0F0F0F] border border-white/10 shadow-sm hover:border-primary/30 transition-colors cursor-pointer"
                  >
                    {/* Header */}
                    <div className="mb-6 flex items-center gap-4">
                      <CheckCircle2
                        className="text-primary shrink-0"
                        size={28}
                      />
                      <h3 className="text-[22px] font-bold text-white tracking-wide">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description (always visible) */}
                    <p className="text-textMuted mb-6 leading-relaxed text-base">
                      {item.desc}
                    </p>

                    {/* Bullets – hidden by default */}
                    <div
                      className={`
            overflow-hidden transition-all duration-300
            ${isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
            group-hover:max-h-[500px] group-hover:opacity-100
          `}
                    >
                      <ul className="space-y-3 border-t border-white/5 pt-6">
                        {item.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-textMuted/80"
                          >
                            <span className="text-primary/70 mt-1">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SharedComponents.FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-wide">
            Turn AI solutions into real outcomes for your organization.
          </h2>
          <p className="text-textMuted text-xl italic mb-16">
            Explore how Ententia helps teams deploy trusted AI solutions that
            deliver ROI in weeks.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact-us">
              <SharedComponents.Button variant="primary">
                Contact Us
              </SharedComponents.Button>
            </Link>
            <Link to="/services">
              <SharedComponents.Button variant="secondary">
                Explore Services
              </SharedComponents.Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedSolution && (
        <SharedComponents.SolutionDetailModal
          solution={selectedSolution}
          isOpen={!!selectedSolution}
          onClose={() => setSelectedSolution(null)}
        />
      )}
    </>
  );
};

export default HomePage;
