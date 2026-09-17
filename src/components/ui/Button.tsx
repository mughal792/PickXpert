import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'affiliate';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4747] disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-[#1F4747] text-white hover:bg-[#173636] active:bg-[#122929] shadow-xs font-semibold',
    secondary:
      'bg-[#F7F7F7] text-[#1A1A1A] hover:bg-[#E5E5E5] border border-[#E5E5E5]',
    outline:
      'border border-[#E5E5E5] text-[#1A1A1A] bg-white hover:bg-[#F7F7F7] active:bg-[#E5E5E5]',
    ghost:
      'text-[#1A1A1A] hover:bg-[#F7F7F7] active:bg-[#E5E5E5]',
    affiliate:
      'bg-[#1F4747] text-white hover:bg-[#173636] active:bg-[#122929] shadow-xs font-semibold tracking-wide',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
};
