'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ImageFrame } from './ImageFrame';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image?: string;
}

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/5 pt-36 pb-20 lg:pt-44 lg:pb-28">
      {image &&
      <>
          <ImageFrame src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 -z-10 bg-ink/80" />
        </>
      }
      <div className="pointer-events-none absolute -left-40 top-0 -z-10 h-96 w-96 rounded-full bg-gold/10 blur-[130px]" />
      <div className="container text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-luxe text-gold">
          
          <span className="h-px w-8 bg-gold/60" /> {eyebrow} <span className="h-px w-8 bg-gold/60" />
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-5 max-w-4xl font-heading text-5xl font-semibold leading-tight text-cream sm:text-6xl">
          
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-beige-muted sm:text-lg">
          
          {description}
        </motion.p>
      </div>
    </section>);

}