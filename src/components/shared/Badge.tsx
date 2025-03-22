
import React from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'gold' | 'navy' | 'outline';
type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  children: React.ReactNode;
}

const Badge = ({
  variant = 'default',
  size = 'md',
  className,
  children
}: BadgeProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full";
  
  const variantStyles = {
    default: "bg-gray-100 text-gray-800",
    gold: "bg-gold-light text-gold-dark",
    navy: "bg-navy-light text-white",
    outline: "bg-transparent border border-current text-navy"
  };
  
  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm"
  };

  return (
    <span
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
