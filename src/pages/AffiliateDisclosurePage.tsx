import React, { useState } from 'react';
import {
  ShieldAlert,
  HelpCircle,
  DollarSign,
  HeartHandshake,
  CheckCircle2,
  Mail,
  Copy,
  Check,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Link } from '../router';
import { Badge } from '../components/ui/Badge';

export const AffiliateDisclosurePage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('mughal792ab@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="border-b border-[#E5E5E5] bg-[#FAF8F5]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Breadcrumb items={[{ label: 'Affiliate Disclosure' }]} className="mb-6" />

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="primary" size="sm">
                Transparency & Disclosure
              </Badge>
              <span className="text-xs font-semibold text-[#666666]">
                FTC Compliance Statement
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-editorial text-[#1A1A1A] tracking-tight leading-[1.15]">
              Affiliate Disclosure
            </h1>

            <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-3xl font-serif">
              Full transparency regarding our participation in affiliate programs, how we earn revenue, and why our product recommendations remain strictly independent.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10">
        {/* Amazon Associates Statement */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#1F4747]/30 shadow-xs space-y-4 relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1F4747]/10 flex items-center justify-center shrink-0 text-[#1F4747]">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F4747] block">
                Official Declaration
              </span>
              <p className="text-base sm:text-lg text-[#1A1A1A] leading-relaxed font-medium">
                PickXpert is a participant in the <strong className="text-[#1A1A1A]">Amazon Services LLC Associates Program</strong>, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and affiliated sites.
              </p>
            </div>
          </div>
        </section>

        {/* What This Means For You */}
        <section className="space-y-6">
          <div className="border-b border-[#E5E5E5] pb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4747] block mb-1">
              Reader First
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-[#1A1A1A]">
              What This Means for You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl border border-[#E5E5E5] bg-[#FAF8F5] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E5E5] flex items-center justify-center text-[#1F4747]">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A]">
                Zero Extra Cost to You
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Some links on this Site are affiliate links. If you click one of these links and make a qualifying purchase, we may earn a small commission — at <strong>no additional cost to you</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#E5E5E5] bg-[#FAF8F5] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E5E5] flex items-center justify-center text-[#1F4747]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A]">
                Supports Independent Research
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                This commission helps support the extensive research, testing equipment, data synthesis, and ongoing upkeep of this Site so our guides remain free for all readers.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#E5E5E5] bg-[#FAF8F5] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E5E5] flex items-center justify-center text-[#1F4747]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A]">
                Merit Decides Everything
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Our editorial content and product recommendations are <strong>never influenced</strong> by affiliate commission rates. We recommend products based on merit and research, not based on which link pays more.
              </p>
            </div>
          </div>
        </section>

        {/* FTC Guidelines Compliance */}
        <section className="bg-white border border-[#E5E5E5] rounded-2xl p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-bold text-[#1A1A1A]">
            Federal Trade Commission (FTC) Compliance
          </h3>
          <p className="text-sm text-[#444444] leading-relaxed">
            As required by the Federal Trade Commission (FTC) guidelines on affiliate marketing and endorsements, we disclose this relationship to you transparently across all product review pages, buying guides, and comparison tables.
          </p>
          <p className="text-sm text-[#444444] leading-relaxed">
            Whenever a product link is placed, readers can rest assured that the evaluation criteria remain strictly bound by our{' '}
            <Link href="/editorial-standards" className="text-[#1F4747] font-semibold hover:underline">
              Editorial Standards
            </Link>
            .
          </p>
        </section>

        {/* Questions & Contact */}
        <section className="bg-[#FAF8F5] border border-[#E5E5E5] rounded-2xl p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-bold text-[#1A1A1A]">
            Questions About Our Affiliate Relationships?
          </h3>
          <p className="text-sm text-[#444444] leading-relaxed">
            If you have any questions about our affiliate relationships, or want further clarity on how links are placed, please contact us directly:
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="mailto:mughal792ab@gmail.com?subject=PickXpert%20Affiliate%20Disclosure%20Inquiry"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1F4747] text-white hover:bg-[#173636] font-semibold text-sm transition-all shadow-xs"
            >
              <Mail className="w-4 h-4" />
              <span>mughal792ab@gmail.com</span>
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#E5E5E5] bg-white hover:bg-[#E5E5E5]/50 text-[#1A1A1A] text-sm font-medium transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#666666]" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="pt-4 border-t border-[#E5E5E5] flex flex-wrap items-center justify-between text-xs text-[#666666] gap-4">
          <Link href="/editorial-standards" className="hover:text-[#1F4747] flex items-center gap-1 font-medium">
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            <span>Our Editorial Standards</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-[#1F4747] font-medium">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#1F4747] font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
