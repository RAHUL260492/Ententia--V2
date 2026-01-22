import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import SharedComponents from '../components/SharedComponents';
import { usePageTitle } from '../hooks/usePageTitle';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  message: string;
}

const Contact: React.FC = () => {
  usePageTitle('Contact Us | Ententia');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <SharedComponents.FadeIn className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
              Let's Connect
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide">
            Get in Touch With Our Team
          </h1>
          <p className="text-xl text-textMuted italic mb-8 max-w-3xl mx-auto">
            Have questions about our solutions or services? We'd love to hear from you. Let's start a conversation about how Ententia can drive impact for your organization.
          </p>
        </SharedComponents.FadeIn>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <SharedComponents.FadeIn className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
                    Contact Information
                  </h3>
                  <p className="text-textMuted leading-relaxed mb-8">
                    Reach out to our team with any questions. We typically respond within 24 hours.
                  </p>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 tracking-wide">Email</h4>
                    <p className="text-textMuted hover:text-primary transition-colors cursor-pointer">
                      hello@ententia.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 tracking-wide">Phone</h4>
                    <p className="text-textMuted hover:text-primary transition-colors cursor-pointer">
                      +1 (415) 555-0100
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 tracking-wide">Location</h4>
                    <p className="text-textMuted">
                      San Francisco, California
                    </p>
                  </div>
                </div>

                {/* Links to other pages */}
                <div className="pt-8 border-t border-white/10">
                  <h4 className="font-bold text-white mb-4 tracking-wide">Explore More</h4>
                  <div className="space-y-3">
                    <Link
                      to="/solutions"
                      className="flex items-center gap-2 text-primary hover:text-[#0088cc] transition-colors text-sm font-medium"
                    >
                      View Our Solutions <ArrowRight size={14} />
                    </Link>
                    <Link
                      to="/services"
                      className="flex items-center gap-2 text-primary hover:text-[#0088cc] transition-colors text-sm font-medium"
                    >
                      Professional Services <ArrowRight size={14} />
                    </Link>
                    <Link
                      to="/case-studies"
                      className="flex items-center gap-2 text-primary hover:text-[#0088cc] transition-colors text-sm font-medium"
                    >
                      Case Studies <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </SharedComponents.FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <SharedComponents.FadeIn className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-10 md:p-12">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-white mb-2 tracking-wide uppercase">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/10 text-white placeholder-textMuted focus:outline-none focus:border-primary transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-white mb-2 tracking-wide uppercase">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/10 text-white placeholder-textMuted focus:outline-none focus:border-primary transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white mb-2 tracking-wide uppercase">
                        Work Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/10 text-white placeholder-textMuted focus:outline-none focus:border-primary transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white mb-2 tracking-wide uppercase">
                        Organization
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/10 text-white placeholder-textMuted focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white mb-2 tracking-wide uppercase">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/10 text-white placeholder-textMuted focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Tell us more about your challenges and goals..."
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full rounded-lg !py-3 px-8 py-3 font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm tracking-wide hover:-translate-y-1 active:translate-y-0 uppercase bg-primary hover:bg-[#0088cc] text-white shadow-[0_4px_14px_0_rgba(0,163,255,0.39)] hover:shadow-[0_8px_25px_rgba(0,163,255,0.6)] border border-transparent"
                      >
                        Send Message <ArrowRight size={18} />
                      </button>
                    </div>

                    <p className="text-xs text-textMuted text-center">
                      We respect your privacy. Your information will only be used to respond to your inquiry.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-8 h-8 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">
                      Thank You!
                    </h3>
                    <p className="text-textMuted mb-6 leading-relaxed">
                      We've received your message and will get back to you soon. Our team typically responds within 24 hours.
                    </p>
                    <p className="text-sm text-textMuted">
                      In the meantime, feel free to explore more about our solutions and services.
                    </p>
                  </div>
                )}
              </SharedComponents.FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <SharedComponents.FadeIn className="bg-gradient-to-r from-primary/10 via-transparent to-transparent border border-primary/20 rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prefer to Learn More First?
            </h2>
            <p className="text-lg text-textMuted mb-8">
              Explore our solutions, read case studies, or check out our latest insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/solutions">
                <SharedComponents.Button className="rounded-full">
                  Explore Solutions <ArrowRight size={18} />
                </SharedComponents.Button>
              </Link>
              <Link to="/insights">
                <SharedComponents.Button variant="secondary" className="rounded-full">
                  Read Insights
                </SharedComponents.Button>
              </Link>
            </div>
          </SharedComponents.FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Contact;
