import React from 'react';

export interface BadgeProps {
  variant?: 'award' | 'category' | 'neutral' | 'accent' | 'success';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  size = 'md',
  children,
  className = '',
  icon,
}) => {
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 tracking-wide',
    md: 'text-xs px-3 py-1 font-medium tracking-wide',
  };

  const variantStyles = {
    award: 'bg-[#1F4747] text-white border border-[#1F4747] font-semibold shadow-xs',
    category: 'bg-[#1F4747] text-white border border-[#1F4747] uppercase tracking-wider font-semibold text-[11px]',
    neutral: 'bg-[#F7F7F7] text-[#1A1A1A] border border-[#E5E5E5]',
    accent: 'bg-[#1F4747] text-white border border-[#1F4747] font-semibold',
    success: 'bg-[#1F4747] text-white border border-[#1F4747]',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full whitespace-nowrap ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
