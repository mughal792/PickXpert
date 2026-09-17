import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Clock,
  ExternalLink,
  Copy,
  Check,
  Send,
  HelpCircle,
  AlertCircle,
  Lightbulb,
  Briefcase,
  CheckCircle2,
} from 'lucide-react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Link } from '../router';
import { Badge } from '../components/ui/Badge';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Question',
    message: '',
  });

  const copyEmail = () => {
    navigator.clipboard.writeText('mughal792ab@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger user's default email client with pre-filled content
    const mailtoUrl = `mailto:mughal792ab@gmail.com?subject=${encodeURIComponent(
      `[PickXpert ${formData.subject}] from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.subject}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="border-b border-[#E5E5E5] bg-[#FAF8F5]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Breadcrumb items={[{ label: 'Contact Us' }]} className="mb-6" />

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="primary" size="sm">
                Get in Touch
              </Badge>
              <div className="flex items-center gap-1.5 text-xs text-[#666666]">
                <Clock className="w-3.5 h-3.5 text-[#1F4747]" />
                <span>Response time: 2–3 business days</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-editorial text-[#1A1A1A] tracking-tight leading-[1.15]">
              Contact Us
            </h1>

            <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-3xl font-serif">
              Have a question about one of our reviews? Found something inaccurate? Want to suggest a product for us to test? We'd love to hear from you.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Direct Email Card */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[#E5E5E5] bg-white shadow-xs space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#1F4747]/10 text-[#1F4747] flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F4747] block">
                Direct Editorial Inbox
              </span>
              <h2 className="text-xl font-bold text-[#1A1A1A]">
                Email Us
              </h2>
              <p className="text-sm text-[#666666] leading-relaxed">
                For review questions, corrections, suggestions, or editorial feedback.
              </p>
              <p className="text-base font-semibold text-[#1A1A1A] break-all pt-1">
                mughal792ab@gmail.com
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href="mailto:mughal792ab@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1F4747] text-white hover:bg-[#173636] font-semibold text-xs transition-colors shadow-xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open Email App</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] bg-[#FAF8F5] hover:bg-[#E5E5E5]/50 text-[#1A1A1A] text-xs font-medium transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#666666]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Founder Connection Card */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[#E5E5E5] bg-[#FAF8F5] space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E5E5] text-[#1F4747] flex items-center justify-center">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F4747] block">
                Founder Contact
              </span>
              <h2 className="text-xl font-bold text-[#1A1A1A]">
                Yahya Mughal
              </h2>
              <p className="text-sm text-[#666666] leading-relaxed">
                Connect directly with the founder on LinkedIn for professional inquiries, partnership opportunities, and publication updates.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://www.linkedin.com/in/yahya-mughal-8a63413b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1F4747] text-white hover:bg-[#173636] font-semibold text-xs transition-colors shadow-xs group"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Quick-Send Form */}
        <section className="bg-white border border-[#E5E5E5] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="border-b border-[#E5E5E5] pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4747] block mb-1">
              Send a Message
            </span>
            <h2 className="text-2xl font-bold font-editorial text-[#1A1A1A]">
              Quick Inquiry Form
            </h2>
            <p className="text-xs sm:text-sm text-[#666666] mt-1">
              Fill out the details below to launch your email client with your message ready to send.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 bg-[#FAF8F5] rounded-xl border border-[#1F4747]/30 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#1F4747]/10 text-[#1F4747] flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A]">
                Opening Email Client...
              </h3>
              <p className="text-sm text-[#666666] max-w-md mx-auto">
                Your email client should have opened with your draft. If it didn't open automatically, you can send your message directly to{' '}
                <strong className="text-[#1A1A1A]">mughal792ab@gmail.com</strong>.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="text-xs font-semibold text-[#1F4747] hover:underline pt-2"
              >
                Reset form
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-[#1A1A1A] block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#1F4747] bg-[#FAF8F5]/30 focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-[#1A1A1A] block">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#1F4747] bg-[#FAF8F5]/30 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold text-[#1A1A1A] block">
                  Inquiry Topic
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#1F4747] bg-[#FAF8F5]/30 focus:bg-white transition-colors"
                >
                  <option value="General Question">General Question</option>
                  <option value="Correction or Outdated Info">Correction or Outdated Info</option>
                  <option value="Product Test Suggestion">Product Test Suggestion</option>
                  <option value="Affiliate or Business Inquiry">Affiliate or Business Inquiry</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-[#1A1A1A] block">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide any details, article URLs, or suggestions..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#1F4747] bg-[#FAF8F5]/30 focus:bg-white transition-colors resize-y"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <p className="text-xs text-[#666666] italic">
                  * We aim to respond to all inquiries within 2–3 business days.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#1F4747] text-white hover:bg-[#173636] font-semibold text-sm transition-all shadow-xs shrink-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Email</span>
                </button>
              </div>
            </form>
          )}
        </section>
      </div>
    </div>
  );
};
