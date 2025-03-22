
import React from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'gold' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  icon,
  iconPosition = 'left',
  ...props
}: ButtonProps) => {
  const baseStyles = "font-medium rounded-md transition-all duration-300 inline-flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-navy text-white hover:bg-navy-light active:bg-navy-dark",
    secondary: "bg-white text-navy border border-navy/20 hover:border-navy hover:shadow-subtle active:bg-gray-50",
    gold: "bg-gold text-white hover:bg-gold-dark hover:shadow-gold active:bg-gold-dark",
    ghost: "bg-transparent text-navy hover:bg-navy/5 active:bg-navy/10"
  };
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2.5",
    lg: "px-8 py-3 text-lg"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
