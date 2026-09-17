import React from 'react';
import { Star, Award } from 'lucide-react';
import { ComparisonRow } from '../../types';

export interface ComparisonTableProps {
  columns?: string[];
  rows: ComparisonRow[];
  title?: string;
  className?: string;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  columns = ['Model', 'Award', 'Key Specs', 'Price', 'Score'],
  rows,
  title = 'Head-to-Head Testing Matrix',
  className = '',
}) => {
  return (
    <div className={`my-10 border border-[#E5E5E5] rounded-xl bg-white overflow-hidden shadow-xs ${className}`}>
      <div className="bg-[#F7F7F7] border-b border-[#E5E5E5] px-6 py-4 flex items-center justify-between">
        <div>
          <h4 className="font-bold text-[#1A1A1A] text-sm">{title}</h4>
          <p className="text-xs text-[#666666] mt-0.5">
            Normalized across identical test protocols
          </p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 bg-white border border-[#E5E5E5] rounded-md text-[#1A1A1A]">
          {rows.length} Contenders Evaluated
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-[#E5E5E5] bg-[#F7F7F7] text-[11px] font-bold text-[#666666] uppercase tracking-wider">
              <th className="py-3 px-4 sm:px-6">Product</th>
              <th className="py-3 px-4">Recognition</th>
              <th className="py-3 px-4">Key Specifications</th>
              <th className="py-3 px-4">Street Price</th>
              <th className="py-3 px-4 text-right">Tested Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E5E5]">
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className={`transition-colors ${
                  row.isWinner
                    ? 'bg-[#F7F7F7] font-medium'
                    : 'hover:bg-[#F7F7F7]/60'
                }`}
              >
                <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#1A1A1A] flex items-center gap-2">
                  {row.isWinner && (
                    <Award className="w-4 h-4 text-[#1F4747] shrink-0" />
                  )}
                  <span>{row.productName}</span>
                </td>
                <td className="py-3.5 px-4">
                  {row.award ? (
                    <span
                      className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                        row.isWinner
                          ? 'bg-[#1F4747] text-white'
                          : 'bg-[#F7F7F7] border border-[#E5E5E5] text-[#1A1A1A]'
                      }`}
                    >
                      {row.award}
                    </span>
                  ) : (
                    <span className="text-xs text-[#666666]">—</span>
                  )}
                </td>
                <td className="py-3.5 px-4 text-xs text-[#666666]">
                  {row.specs.join(', ')}
                </td>
                <td className="py-3.5 px-4 font-semibold text-[#1A1A1A]">
                  {row.price}
                </td>
                <td className="py-3.5 px-4 text-right">
                  <div className="inline-flex items-center gap-1 font-bold text-[#1A1A1A]">
                    <Star className="w-3.5 h-3.5 text-[#1F4747] fill-[#1F4747]" />
                    <span>{row.rating}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
