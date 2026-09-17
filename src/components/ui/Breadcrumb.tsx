import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from '../../router';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-xs text-[#666666] overflow-x-auto whitespace-nowrap py-1 ${className}`}
    >
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 text-[#666666] hover:text-[#1F4747] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-[#666666]/40 shrink-0" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-[#1F4747] transition-colors font-medium text-[#666666]"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="font-semibold text-[#1A1A1A] truncate max-w-[200px] sm:max-w-[340px]"
                  title={item.label}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
