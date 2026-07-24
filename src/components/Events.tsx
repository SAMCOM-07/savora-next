'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { EVENTS } from '../app/lib/data';

export function Events() {
  return (
    <section id="events" className="container py-24 lg:py-32">
      <SectionHeading
        eyebrow="Events & Offers"
        title={<>Upcoming Experiences</>}
        description="Reserve a seat at one of our exclusive evenings and seasonal celebrations." />
      
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {EVENTS.map((event, i) =>
        <Reveal key={event.title} delay={i * 0.12}>
            <motion.article
            whileHover={{ y: -6 }}
            className="group flex h-full flex-col rounded-3xl border border-white/8 bg-ink-card p-8 transition-colors hover:border-gold/30">
            
              <div className="flex items-center justify-between">
                <span className="rounded-xl border border-gold/20 bg-gold/10 px-4 py-2 font-heading text-lg text-gold">
                  {event.date}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-widest text-beige">
                  {event.badge}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-xl font-semibold text-cream">{event.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-beige-muted">{event.description}</p>
              <a
              href="/reservations"
              className="mt-6 inline-flex items-center gap-1.5 text-sm text-cream transition-colors group-hover:text-gold">
              
                Reserve now <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.article>
          </Reveal>
        )}
      </div>
    </section>);

}