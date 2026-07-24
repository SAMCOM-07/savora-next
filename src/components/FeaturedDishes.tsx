'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { FEATURED_DISHES } from '../app/lib/data';
import { ImageFrame } from './ImageFrame';

export function FeaturedDishes() {
  return (
    <section className="container py-24 lg:py-32">
      <SectionHeading
        eyebrow="Signature Creations"
        title={<>Dishes That Define Us</>}
        description="Each plate is a composition of season, technique and imagination designed to be remembered." />
      

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {FEATURED_DISHES.map((dish, i) =>
        <Reveal key={dish.name} delay={i * 0.12}>
            <motion.article
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="group h-full overflow-hidden rounded-3xl border border-white/8 bg-ink-card">
            
              <div className="relative overflow-hidden">
                <ImageFrame
                src={dish.image}
                alt={dish.name}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              
                <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs uppercase tracking-widest text-gold backdrop-blur-md">
                  {dish.tag}
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-xl font-semibold text-cream">{dish.name}</h3>
                  <span className="font-heading text-lg text-gold">{dish.price}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-beige-muted">{dish.description}</p>
                <Link
                href="/menu"
                className="mt-5 inline-flex items-center gap-1.5 text-sm text-cream transition-colors hover:text-gold">
                
                  Explore dish <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          </Reveal>
        )}
      </div>
    </section>);

}