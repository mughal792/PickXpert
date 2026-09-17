import React from 'react';

export interface LogoProps {
  /**
   * Visual theme variant:
   * - 'on-dark': for dark teal (#1F4747) or dark backgrounds (Header, Footer)
   * - 'on-light': for white or light gray backgrounds
   */
  variant?: 'on-dark' | 'on-light';
  /**
   * Sizing scale:
   * - 'sm': compact (24px icon)
   * - 'md': standard header (28px - 32px responsive)
   * - 'lg': footer or highlight (32px - 36px responsive)
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether to display the text wordmark alongside the icon
   */
  showWordmark?: boolean;
  /**
   * Additional custom wrapper classes
   */
  className?: string;
}

export const PickXpertIcon: React.FC<{
  className?: string;
  variant?: 'on-dark' | 'on-light';
  color?: string;
}> = ({ className = 'w-7 h-7', variant = 'on-dark', color }) => {
  const isDark = variant === 'on-dark';
  // If color is explicitly provided, use it; otherwise white on dark teal, or #1F4747 on light
  const iconColor = color || (isDark ? '#FFFFFF' : '#1F4747');

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Precision shield perimeter with upper-right dynamic cutout */}
      <path
        d="M 68 17 L 50 10 L 14 23 L 14 53 C 14 74 32 89 50 95 C 68 89 86 74 86 53 L 86 44"
        stroke={iconColor}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Precision verification checkmark extending through upper-right shield */}
      <path
        d="M 27 48.5 L 45 66.5 L 86 25.5"
        stroke={iconColor}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'on-dark',
  size = 'md',
  showWordmark = true,
  className = '',
}) => {
  const isDark = variant === 'on-dark';

  // Responsive icon sizing
  const iconSizeClass =
    size === 'sm'
      ? 'w-6 h-6'
      : size === 'lg'
      ? 'w-8 h-8 sm:w-9 sm:h-9'
      : 'w-7 h-7 sm:w-8 sm:h-8';

  // Responsive wordmark typography
  const textClass =
    size === 'sm'
      ? 'text-lg'
      : size === 'lg'
      ? 'text-2xl sm:text-3xl'
      : 'text-xl sm:text-2xl';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Minimal geometric trust/review badge icon */}
      <PickXpertIcon className={iconSizeClass} variant={variant} />

      {/* Modern, bold sans-serif wordmark */}
      {showWordmark && (
        <span
          className={`font-sans font-bold tracking-tight leading-none ${textClass} transition-opacity duration-150 group-hover:opacity-95`}
        >
          {isDark ? (
            // On dark teal background (Header, dark Footer)
            <>
              <span className="text-white font-bold">Pick</span>
              <span className="logo-accent text-white font-black inline-block text-[1.05em] tracking-tight">
                X
              </span>
              <span className="text-white font-bold">pert</span>
            </>
          ) : (
            // On light/white background
            <>
              <span className="text-[#1A1A1A] font-bold">Pick</span>
              <span className="logo-accent text-[#1F4747] font-extrabold inline-block tracking-tight">
                X
              </span>
              <span className="text-[#1A1A1A] font-bold">pert</span>
            </>
          )}
        </span>
      )}
    </div>
  );
};
