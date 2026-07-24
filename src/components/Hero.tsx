'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { IMAGES } from '../app/lib/data';
import { ImageFrame } from './ImageFrame';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute -left-40 top-24 h-128 w-128 rounded-full bg-gold/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-112 w-112 rounded-full bg-gold/5 blur-[140px]" />

      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-luxe text-gold backdrop-blur-sm">
            
            <Star className="h-3.5 w-3.5 fill-gold" />
            Two Michelin Stars
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-6 font-heading text-5xl font-semibold leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
            
            A Taste of <span className="italic text-gold">Timeless</span> Elegance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-6 max-w-md text-lg leading-relaxed text-beige-muted">
            
            Where culinary artistry meets warm candlelight. Savora crafts unforgettable evenings, one exquisite course at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-9 flex flex-wrap items-center gap-4">
            
            <Link
              href="/reservation"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_10px_40px_-10px_rgba(200,155,60,0.6)]">
              
              Reserve a Table <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full border border-cream/25 px-7 py-3.5 text-sm font-medium tracking-wide text-cream transition-all duration-300 hover:border-gold hover:text-gold">
              
              View Menu
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex items-center gap-8">
            
            {[
            { value: '25+', label: 'Years of Craft' },
            { value: '400+', label: 'Rare Vintages' },
            { value: '4.9', label: 'Guest Rating' }].
            map((stat) =>
            <div key={stat.label}>
                <p className="font-heading text-3xl font-semibold text-cream">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-beige-muted">{stat.label}</p>
              </div>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative">
          
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
            <ImageFrame
              src={IMAGES.hero}
              alt="Signature plated dish at Savora"
              className="h-[30rem] w-full object-cover sm:h-[36rem]" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-ink/70 px-5 py-4 backdrop-blur-xl sm:-left-8">
            
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) =>
              <span key={i} className="h-8 w-8 rounded-full border-2 border-ink bg-gold/80" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-1 text-gold">
                {[1, 2, 3, 4, 5].map((i) =>
                <Star key={i} className="h-3.5 w-3.5 fill-gold" />
                )}
              </div>
              <p className="mt-0.5 text-xs text-beige-muted">Loved by 12,000+ guests</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>);

}