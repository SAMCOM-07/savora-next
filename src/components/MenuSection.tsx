'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { MENU, MenuCategory } from '../app/lib/data';

const CATEGORIES: MenuCategory[] = ['Starters', 'Main Course', 'Desserts', 'Drinks'];

export function MenuSection() {
  const [active, setActive] = useState<MenuCategory>('Starters');

  return (
    <section id="menu" className="container py-24 lg:py-32">
      <SectionHeading
        eyebrow="The Menu"
        title={<>A Curated Culinary Journey</>}
        description="Explore our seasonal collection, crafted to delight every sense." />
      

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((cat) =>
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`relative rounded-full px-6 py-2.5 text-sm font-medium transition-colors duration-300 ${
          active === cat ? 'text-ink' : 'text-beige hover:text-gold'}`
          }>
          
            {active === cat &&
          <motion.span
            layoutId="menu-pill"
            className="absolute inset-0 rounded-full bg-gold"
            transition={{ type: 'spring', stiffness: 400, damping: 32 }} />

          }
            <span className="relative z-10">{cat}</span>
          </button>
        )}
      </div>

      <div className="mx-auto mt-14 max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="divide-y divide-white/8">
            
            {MENU[active].map((item) =>
            <div key={item.name} className="flex items-baseline gap-4 py-6">
                <div className="flex-1">
                  <h3 className="font-heading text-xl text-cream">{item.name}</h3>
                  <p className="mt-1.5 text-sm text-beige-muted">{item.description}</p>
                </div>
                <div className="mx-3 hidden flex-1 border-b border-dashed border-white/15 sm:block" />
                <span className="font-heading text-xl text-gold">{item.price}</span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>);

}