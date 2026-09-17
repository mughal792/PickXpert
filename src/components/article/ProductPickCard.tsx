import React from 'react';
import { ExternalLink, Star, ShieldCheck, Check, AlertCircle } from 'lucide-react';
import { ProductPick } from '../../types';
import { Badge } from '../ui/Badge';

export interface ProductPickCardProps {
  pick: ProductPick;
  rankIndex?: number;
  className?: string;
}

export const ProductPickCard: React.FC<ProductPickCardProps> = ({
  pick,
  rankIndex = 1,
  className = '',
}) => {
  const isTop = pick.award === 'Top Pick' || pick.award === 'Editor\'s Choice';

  return (
    <div
      id={`product-${pick.id}`}
      className={`border ${
        isTop ? 'border-[#1F4747] ring-1 ring-[#1F4747]/30' : 'border-[#E5E5E5]'
      } rounded-2xl bg-white overflow-hidden shadow-xs my-10 transition-all duration-200 ${className}`}
    >
      {/* Header bar */}
      <div
        className={`px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b ${
          isTop ? 'bg-[#1F4747] text-white border-[#173636]' : 'bg-[#F7F7F7] border-[#E5E5E5] text-[#1A1A1A]'
        }`}
      >
        <div className="flex items-center gap-3">
          <span
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
              isTop ? 'bg-white text-[#1F4747] shadow-xs' : 'bg-[#1F4747] text-white'
            }`}
          >
            #{rankIndex}
          </span>
          <span className="font-bold text-sm tracking-wide uppercase">
            {pick.award}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Star className={`w-4 h-4 ${isTop ? 'text-white fill-white' : 'text-[#1F4747] fill-[#1F4747]'}`} />
            <span className="font-bold text-sm">{pick.rating}</span>
            <span className={`text-xs ${isTop ? 'text-[#E5E5E5]' : 'text-[#666666]'}`}>/ 10</span>
          </div>
          <div className={`text-xs flex items-center gap-1 ${isTop ? 'text-[#E5E5E5]' : 'text-[#666666]'}`}>
            <ShieldCheck className="w-4 h-4" />
            <span>Tested in Lab</span>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Product Image */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-[#F7F7F7] border border-[#E5E5E5] group">
              <img
                src={pick.imageUrl}
                alt={pick.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <Badge variant="award" size="sm">
                  {pick.price}
                </Badge>
              </div>
            </div>
            <span className="text-xs text-[#666666] mt-2 text-center">
              Verified Retailer: {pick.retailer}
            </span>
          </div>

          {/* Details & Specs */}
          <div className="lg:col-span-8 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-editorial text-[#1A1A1A] leading-snug mb-2">
                {pick.name}
              </h3>

              <p className="text-[#666666] text-sm md:text-base leading-relaxed mb-6">
                {pick.summary}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3.5 bg-[#F7F7F7] rounded-xl border border-[#E5E5E5] mb-6 text-xs">
                {pick.specs.map((spec, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[#666666] font-medium uppercase tracking-wider text-[10px]">
                      {spec.label}
                    </span>
                    <span className="text-[#1A1A1A] font-semibold mt-0.5 truncate" title={spec.value}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price & CTA Action */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E5E5E5]">
              <div>
                <span className="text-xs text-[#666666] block">Typical Street Price</span>
                <span className="text-2xl font-bold text-[#1A1A1A]">{pick.price}</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={pick.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-150 text-sm px-5 py-2.5 gap-2 bg-[#1F4747] text-white hover:bg-[#173636] active:bg-[#122929] shadow-xs"
                >
                  <span>Check Price on {pick.retailer.split('/')[0].trim()}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Pros & Cons Mini-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#E5E5E5]">
          <div className="bg-[#F7F7F7] rounded-xl p-4 border border-[#E5E5E5]">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-1.5 mb-2.5">
              <Check className="w-3.5 h-3.5 text-[#1F4747]" />
              Key Strengths
            </h5>
            <ul className="space-y-1.5">
              {pick.pros.map((pro, idx) => (
                <li key={idx} className="text-xs text-[#1A1A1A] flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F4747] mt-1.5 shrink-0" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F7F7F7] rounded-xl p-4 border border-[#E5E5E5]">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-1.5 mb-2.5">
              <AlertCircle className="w-3.5 h-3.5 text-[#666666]" />
              Minor Tradeoffs
            </h5>
            <ul className="space-y-1.5">
              {pick.cons.map((con, idx) => (
                <li key={idx} className="text-xs text-[#666666] flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#666666] mt-1.5 shrink-0" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Verdict Callout */}
        <div className="mt-4 p-4 rounded-xl bg-[#F7F7F7] border border-[#E5E5E5] text-xs text-[#1A1A1A] leading-relaxed">
          <span className="font-bold text-[#1F4747] mr-1.5">Tester Verdict:</span>
          {pick.verdict}
        </div>
      </div>
    </div>
  );
};
