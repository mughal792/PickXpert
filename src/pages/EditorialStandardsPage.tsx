import React, { useState } from 'react';
import {
  Search,
  SlidersHorizontal,
  MessageSquareQuote,
  Layers,
  RefreshCw,
  ShieldCheck,
  Ban,
  CheckCircle2,
  Mail,
  Copy,
  Check,
  ExternalLink,
  ArrowRight,
  AlertCircle,
} from 'lucide-react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Link } from '../router';
import { Badge } from '../components/ui/Badge';

export const EditorialStandardsPage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('mughal792ab@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      number: '1',
      title: 'Category research',
      icon: <Search className="w-5 h-5 text-[#1F4747]" />,
      summary: 'Identifying what real buyers struggle with before shopping.',
      detail:
        'We start by identifying what people are actually searching for and struggling to decide between in a given product category. Rather than reviewing every obscure model, we pinpoint the high-impact problems consumers face in daily home life.',
    },
    {
      number: '2',
      title: 'Specification comparison',
      icon: <SlidersHorizontal className="w-5 h-5 text-[#1F4747]" />,
      summary: 'Side-by-side technical benchmarks across all major contenders.',
      detail:
        'We compare technical specifications, materials, capacity, warranty terms, and price across all major competing products in a category to establish objective baselines and eliminate overpriced or under-engineered models.',
    },
    {
      number: '3',
      title: 'Verified customer feedback analysis',
      icon: <MessageSquareQuote className="w-5 h-5 text-[#1F4747]" />,
      summary: 'Deep sentiment mining across thousands of verified owners.',
      detail:
        'We read through large volumes of verified customer reviews on retail platforms to identify recurring praise and recurring complaints — patterns that do not always show up in a single review or short lab benchmark.',
    },
    {
      number: '4',
      title: 'Cross-referencing expert sources',
      icon: <Layers className="w-5 h-5 text-[#1F4747]" />,
      summary: 'Independent professional verification and technical literature.',
      detail:
        'Where available, we compare our findings against professional reviews, lab test data, and manufacturer documentation to validate durability claims, safety ratings, and build quality.',
    },
    {
      number: '5',
      title: 'Regular updates',
      icon: <RefreshCw className="w-5 h-5 text-[#1F4747]" />,
      summary: 'Living evaluation guides maintained throughout product lifecycles.',
      detail:
        'Product lineups change constantly. We revisit our guides periodically to make sure discontinued products are removed and new, better options are added as they prove themselves on the market.',
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="border-b border-[#E5E5E5] bg-[#FAF8F5]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Breadcrumb items={[{ label: 'Editorial Standards' }]} className="mb-6" />

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="primary" size="sm">
                Integrity & Process
              </Badge>
              <span className="text-xs font-semibold text-[#666666]">
                Our Editorial Standards
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-editorial text-[#1A1A1A] tracking-tight leading-[1.15]">
              How We Choose What to Recommend
            </h1>

            <p className="text-lg sm:text-xl text-[#666666] leading-relaxed max-w-3xl font-serif">
              At PickXpert, every recommendation goes through a consistent, rigorous process before it is published. We prioritize buyer utility, long-term durability, and uncompromised independence.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-14">
        {/* The 5-Step Evaluation Process */}
        <section id="how-we-choose" className="space-y-6">
          <div className="border-b border-[#E5E5E5] pb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4747] block mb-1">
              Step-by-Step Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-[#1A1A1A]">
              Our 5-Step Evaluation Framework
            </h2>
            <p className="text-sm text-[#666666] mt-1">
              Every buying guide and product pick follows this structured vetting sequence:
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="p-6 rounded-2xl border border-[#E5E5E5] bg-white hover:border-[#1F4747]/50 transition-all shadow-xs"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1F4747]/10 text-[#1F4747] font-bold flex items-center justify-center shrink-0 text-base">
                    {step.number}
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-lg font-bold text-[#1A1A1A]">
                        {step.title}
                      </h3>
                      <span className="text-xs text-[#666666] font-medium bg-[#FAF8F5] px-2.5 py-1 rounded-md border border-[#E5E5E5]/60 w-fit">
                        {step.summary}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-[#333333] leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Commitment to Independence */}
        <section
          id="independence"
          className="bg-[#FAF8F5] border border-[#E5E5E5] rounded-2xl p-6 sm:p-8 space-y-6"
        >
          <div className="flex items-center gap-3 text-[#1F4747]">
            <ShieldCheck className="w-6 h-6 shrink-0" />
            <div>
              <h2 className="text-2xl font-bold font-editorial text-[#1A1A1A]">
                Our Commitment to Independence
              </h2>
              <span className="text-xs text-[#666666]">
                Non-negotiable ethical rules that govern all editorial decisions
              </span>
            </div>
          </div>

          <div className="space-y-4 text-[#333333] text-sm sm:text-base leading-relaxed">
            <div className="p-4 bg-white rounded-xl border border-[#E5E5E5] flex items-start gap-3">
              <Ban className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#1A1A1A] font-semibold mb-1">
                  We do not accept payment from brands
                </strong>
                <p className="text-xs sm:text-sm text-[#555555] m-0">
                  Brands cannot pay for favorable reviews, guaranteed inclusions, or preferred ranking in our guides. Sponsorship dollars have zero influence on editorial outcomes.
                </p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#E5E5E5] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#1F4747] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#1A1A1A] font-semibold mb-1">
                  Merit-driven, not commission-driven
                </strong>
                <p className="text-xs sm:text-sm text-[#555555] m-0">
                  Product recommendations are based on merit, never on which brand or retailer offers the highest affiliate commission rate.
                </p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#E5E5E5] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#1F4747] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#1A1A1A] font-semibold mb-1">
                  Affiliate links do not decide what we recommend
                </strong>
                <p className="text-xs sm:text-sm text-[#555555] m-0">
                  When we use affiliate links (see our{' '}
                  <Link
                    href="/affiliate-disclosure"
                    className="text-[#1F4747] font-semibold hover:underline"
                  >
                    Affiliate Disclosure
                  </Link>
                  ), it never influences <em>which</em> product we recommend — only how we may earn revenue if you choose to purchase through our link.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Corrections Policy */}
        <section
          id="corrections"
          className="border border-[#E5E5E5] rounded-2xl p-6 sm:p-8 bg-white shadow-xs space-y-6"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#1F4747] block mb-1">
                Accuracy & Accountability
              </span>
              <h2 className="text-2xl font-bold font-editorial text-[#1A1A1A]">
                Corrections Policy
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#333333] leading-relaxed">
            If you believe any information in one of our guides is inaccurate or outdated, please contact us at{' '}
            <strong className="text-[#1A1A1A] font-semibold">mughal792ab@gmail.com</strong> and we will review and correct it promptly.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="mailto:mughal792ab@gmail.com?subject=PickXpert%20Correction%20Request"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1F4747] text-white hover:bg-[#173636] font-semibold text-sm transition-all shadow-xs"
            >
              <Mail className="w-4 h-4" />
              <span>Send Correction Notice</span>
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#E5E5E5] bg-[#FAF8F5] hover:bg-[#E5E5E5]/50 text-[#1A1A1A] text-sm font-medium transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#666666]" />
                  <span>Copy mughal792ab@gmail.com</span>
                </>
              )}
            </button>
          </div>
        </section>

        {/* Footer Jump Links */}
        <div className="pt-4 border-t border-[#E5E5E5] flex flex-wrap items-center justify-between text-xs text-[#666666] gap-4">
          <Link href="/about" className="hover:text-[#1F4747] flex items-center gap-1 font-medium">
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            <span>The Story Behind PickXpert</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/affiliate-disclosure" className="hover:text-[#1F4747] font-medium">
              Affiliate Disclosure
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#1F4747] font-medium">
              Contact & Inquiries
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
