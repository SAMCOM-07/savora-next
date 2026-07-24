
import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  return (
    <Reveal className={`flex flex-col ${alignment} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
      <span className="flex items-center gap-3 text-xs uppercase tracking-luxe text-gold font-medium">
        <span className="h-px w-8 bg-gold/60" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-heading text-4xl sm:text-5xl font-semibold leading-[1.1] text-cream">
        {title}
      </h2>
      {description &&
      <p className="mt-5 text-base sm:text-lg leading-relaxed text-beige-muted">{description}</p>
      }
    </Reveal>);

}