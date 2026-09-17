import React from 'react';
import { Check, AlertCircle, Award } from 'lucide-react';

export interface ProsConsBoxProps {
  pros: string[];
  cons: string[];
  verdict?: string;
  title?: string;
  className?: string;
}

export const ProsConsBox: React.FC<ProsConsBoxProps> = ({
  pros,
  cons,
  verdict,
  title = 'The Field Test Takeaway',
  className = '',
}) => {
  return (
    <div
      className={`border border-[#E5E5E5] rounded-xl bg-white overflow-hidden shadow-xs my-8 ${className}`}
    >
      {title && (
        <div className="bg-[#F7F7F7] border-b border-[#E5E5E5] px-6 py-3.5 flex items-center justify-between">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
            {title}
          </h4>
          <span className="text-xs text-[#666666]">Lab & Real-World Tested</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5]">
        {/* Pros */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-5 rounded-full bg-[#1F4747] flex items-center justify-center text-white shadow-xs">
              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
            <h5 className="font-bold text-[#1A1A1A] text-sm">What We Loved</h5>
          </div>
          <ul className="space-y-3">
            {pros.map((pro, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-[#1A1A1A] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F4747] mt-2 shrink-0" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cons */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-5 rounded-full bg-[#F7F7F7] border border-[#E5E5E5] flex items-center justify-center text-[#666666]">
              <AlertCircle className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
            <h5 className="font-bold text-[#1A1A1A] text-sm">Things to Consider</h5>
          </div>
          <ul className="space-y-3">
            {cons.map((con, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-[#666666] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#666666] mt-2 shrink-0" />
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {verdict && (
        <div className="bg-[#F7F7F7] border-t border-[#E5E5E5] px-6 py-4 flex items-start gap-3">
          <Award className="w-5 h-5 text-[#1F4747] shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1F4747] block mb-0.5">
              The Verdict
            </span>
            <p className="text-sm text-[#1A1A1A] font-medium leading-relaxed">
              {verdict}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
