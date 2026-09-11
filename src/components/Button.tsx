import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs tracking-wide uppercase font-medium',
    md: 'px-5 py-2.5 text-sm tracking-wide font-medium',
    lg: 'px-7 py-3.5 text-base tracking-wide font-medium',
  };

  const variantStyles = {
    primary:
      'bg-[#B85D43] text-white hover:bg-[#98452E] shadow-sm hover:shadow active:scale-[0.99] border border-transparent',
    secondary:
      'bg-[#2C2420] text-[#FAF8F5] hover:bg-[#4A3E39] shadow-sm active:scale-[0.99] border border-transparent',
    outline:
      'bg-transparent text-[#2C2420] border border-[#2C2420]/30 hover:border-[#2C2420] hover:bg-[#2C2420]/5 active:scale-[0.99]',
    ghost:
      'bg-transparent text-[#2C2420] hover:bg-[#EBE1D7]/50 active:scale-[0.99] border border-transparent',
  };

  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B85D43] focus-visible:ring-offset-2 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClasses} id={props.id}>
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        id={props.id}
      >
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
