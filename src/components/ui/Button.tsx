
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink';
  const variants = {
    primary: 'bg-gold text-ink hover:bg-gold-soft hover:shadow-[0_10px_40px_-10px_rgba(200,155,60,0.6)]',
    outline: 'border border-cream/25 text-cream hover:border-gold hover:text-gold'
  };
  return (
    <a className={twMerge(base, variants[variant], className)} {...props}>
      {children}
    </a>);

}