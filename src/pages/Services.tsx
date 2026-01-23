import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICE_OFFERINGS } from "../constants";
import { ServiceOffering } from "../types";
import SharedComponents from "../components/SharedComponents";
import { usePageTitle } from "../hooks/usePageTitle";

const ServiceCard: React.FC<{ service: ServiceOffering }> = ({ service }) => (
  <SharedComponents.FadeIn className="group bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 flex flex-col h-full shadow-lg">
    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-primary transition-colors">
      {service.title}
    </h3>
    <p className="text-textMuted text-base mb-6 flex-1 leading-relaxed">
      {service.description}
    </p>

    <div className="mb-8 space-y-3">
      {service.deliverables.map((deliverable, idx) => (
        <div key={idx} className="flex gap-3 items-start">
          <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-1" />
          <span className="text-sm text-textMuted">{deliverable}</span>
        </div>
      ))}
    </div>

    <div className="pt-6 border-t border-white/10">
      <div className="flex items-center justify-between">
        <span className="text-xs text-textMuted font-semibold uppercase tracking-wide">
          Duration: {service.duration}
        </span>
        <ArrowRight
          size={16}
          className="text-primary group-hover:translate-x-1 transition-transform"
        />
      </div>
    </div>
  </SharedComponents.FadeIn>
);

const Services: React.FC = () => {
  usePageTitle("Services | Ententia");

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

        <SharedComponents.FadeIn className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide">
            Expert Services to Accelerate Your AI Journey
          </h1>
          <p className="text-xl text-textMuted italic mb-8 max-w-3xl mx-auto">
            From discovery and governance to deployment and transformation, we
            guide enterprises through every phase of AI adoption.
          </p>
        </SharedComponents.FadeIn>
      </section>

      {/* Intro Section */}
      {/* <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-primary/5 via-transparent to-transparent border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <SharedComponents.FadeIn>
            <p className="text-lg text-textMuted leading-relaxed text-center">
              Our services are designed to complement the Ententia platform,
              providing expert guidance, architecture, and implementation
              support. Whether you're just beginning your AI transformation or
              scaling proven patterns, our team works with you to define, build,
              and deploy solutions that create measurable business value.
            </p>
          </SharedComponents.FadeIn>
        </div>
      </section> */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <SharedComponents.FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-wide">
              Our AI-enabled Services
            </h1>

            <p className="text-xl text-white mb-6">
              Services designed to help enterprises adopt, scale, and
              operationalize AI with confidence.
            </p>

            <p className="text-textMuted italic max-w-3xl mx-auto">
              Leverages Ententia’s reusable foundation, solution patterns, and
              purpose-built tools to accelerate time to value.
            </p>
          </SharedComponents.FadeIn>
        </div>
      </section>

      {/* ================= Section 2: How We Engage ================= */}
      <section className="py-16 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <SharedComponents.FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              How We Engage
            </h2>

            <p className="text-lg text-textMuted leading-relaxed">
              We offer a focused set of AI-enabled services that help
              enterprises move from early scoping and prioritization to scaled
              deployment and meaningful transformation of end-to-end workflows.
            </p>
          </SharedComponents.FadeIn>
        </div>
      </section>

      {/* ================= Section 3: Services We Offer ================= */}
      <section className="py-12 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <SharedComponents.FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Services We Offer
            </h2>
          </SharedComponents.FadeIn>
        </div>
      </section>

      {/* Services Grid - 2-3 Layout */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* First Row - 3 Items */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {SERVICE_OFFERINGS.slice(0, 3).map((service) => (
              <div key={service.id} className="h-full">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          {/* Second Row - 2 Items (centered) */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {SERVICE_OFFERINGS.slice(3).map((service) => (
              <div key={service.id} className="h-full">
                <ServiceCard service={service} />
              </div>
            ))}

            {/* Empty placeholder to balance grid */}
            <div className="hidden md:block" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <SharedComponents.SectionHeader
            eyebrow="Why Choose Ententia Services"
            title="Proven Approach, Expert Execution"
            description="We bring deep industry expertise and a structured methodology to ensure your AI investments deliver measurable results."
          />

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {[
              {
                title: 'Enterprise Experience',
                description: 'Deep expertise across energy, utilities, manufacturing, and financial services industries.',
              },
              {
                title: 'Proven Patterns',
                description: 'Leveraging battle-tested solution accelerators to reduce risk and accelerate time-to-value.',
              },
              {
                title: 'Governance Focus',
                description: 'Embedded controls and compliance frameworks designed for regulated environments.',
              },
              {
                title: 'Continuous Value',
                description: 'From pilot to production, we ensure solutions scale and adapt to evolving business needs.',
              },
            ].map((feature, idx) => (
              <SharedComponents.FadeIn key={idx} delay={idx * 100}>
                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-8 h-full flex flex-col min-h-[200px]">
                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{feature.title}</h3>
                  <p className="text-textMuted leading-relaxed flex-1">{feature.description}</p>
                </div>
              </SharedComponents.FadeIn>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <SharedComponents.FadeIn className="bg-gradient-to-r from-primary/10 via-transparent to-transparent border border-primary/20 rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to explore how AI-enabled services could accelerate your AI
              journey?
            </h2>
            <p className="text-lg text-textMuted mb-8">
              Let's discuss how our services can support your transformation
              goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us">
                <SharedComponents.Button className="rounded-full">
                  Schedule a Consultation <ArrowRight size={18} />
                </SharedComponents.Button>
              </Link>
            </div>
          </SharedComponents.FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Services;
