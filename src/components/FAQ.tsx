'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { FAQS } from '../app/lib/data';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-y border-white/5 bg-ink-soft py-24 lg:py-32">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow="FAQ" title={<>Questions, Answered</>} />
        <div className="mt-14 space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.question} delay={i * 0.06}>
                <div className="overflow-hidden rounded-2xl border border-white/8 bg-ink-card">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                    
                    <span className="font-heading text-lg text-cream">{faq.question}</span>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-gold">
                      <Plus className="h-5 w-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen &&
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                      
                        <p className="px-6 pb-6 text-sm leading-relaxed text-beige-muted">{faq.answer}</p>
                      </motion.div>
                    }
                  </AnimatePresence>
                </div>
              </Reveal>);

          })}
        </div>
      </div>
    </section>);

}