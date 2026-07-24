'use client'

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { GALLERY, IMAGES } from '../app/lib/data';
import { ImageFrame } from './ImageFrame';

const items = [
{ src: IMAGES.diningRoom, label: 'The Dining Room', kind: 'Interior' },
{ src: GALLERY[0], label: 'A5 Wagyu Fillet', kind: 'Plating' },
{ src: IMAGES.event, label: 'Evenings at Savora', kind: 'Events' },
{ src: GALLERY[2], label: 'Hokkaido Scallops', kind: 'Plating' },
{ src: IMAGES.chef, label: 'The Chef’s Pass', kind: 'Craft' },
{ src: GALLERY[4], label: 'Gold Sphere', kind: 'Dessert' },
{ src: IMAGES.team, label: 'Our Brigade', kind: 'People' },
{ src: IMAGES.interior, label: 'The Bar', kind: 'Interior' }];


export function GalleryExperience() {
  const [active, setActive] = useState<number | null>(null);
  const activeItem = active === null ? null : items[active];
  const move = (direction: number) => setActive((current) => current === null ? null : (current + direction + items.length) % items.length);

  return <section className="container py-20 lg:py-28"><div className="columns-1 gap-5 sm:columns-2 lg:columns-3">{items.map((item, index) => <button key={item.label} onClick={() => setActive(index)} className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"><ImageFrame src={item.src} alt={item.label} className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${index === 0 || index === 4 ? 'aspect-[3/4]' : 'aspect-[4/3]'}`} /><span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/80 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"><span className="text-xs uppercase tracking-luxe text-gold">{item.kind}</span><span className="mt-1 font-heading text-xl text-cream">{item.label}</span></span></button>)}</div>
    <AnimatePresence>{activeItem && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-xl" onClick={() => setActive(null)}><motion.div initial={{ scale: 0.96 }} animate={{ scale: 1 }} exit={{ scale: 0.96 }} className="relative max-h-full max-w-5xl" onClick={(event) => event.stopPropagation()}><ImageFrame src={activeItem.src} alt={activeItem.label} className="max-h-[80vh] max-w-full rounded-2xl object-contain" /><div className="mt-4 flex items-center justify-between px-2"><div><p className="text-xs uppercase tracking-luxe text-gold">{activeItem.kind}</p><p className="font-heading text-xl text-cream">{activeItem.label}</p></div><div className="flex gap-2"><button onClick={() => move(-1)} className="rounded-full border border-white/15 p-3 text-cream hover:border-gold hover:text-gold" aria-label="Previous image"><ArrowLeft className="h-5 w-5" /></button><button onClick={() => move(1)} className="rounded-full border border-white/15 p-3 text-cream hover:border-gold hover:text-gold" aria-label="Next image"><ArrowRight className="h-5 w-5" /></button><button onClick={() => setActive(null)} className="rounded-full border border-white/15 p-3 text-cream hover:border-gold hover:text-gold" aria-label="Close gallery"><X className="h-5 w-5" /></button></div></div></motion.div></motion.div>}</AnimatePresence>
  </section>;
}