'use client'

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Leaf, Flame, Wine, Plus } from 'lucide-react';
import { Dialog, DialogContent } from './ui/Dialog';
import { IMAGES } from '../app/lib/data';
import { ImageFrame } from './ImageFrame';

interface MenuDish {
  name: string;
  category: 'Breakfast' | 'Lunch' | 'Dinner' | 'Drinks' | 'Desserts';
  description: string;
  price: string;
  image: string;
  dietary: string;
  popular?: boolean;
}

const dishes: MenuDish[] = [
  { name: 'Truffle Egg en Cocotte', category: 'Breakfast', description: 'Slow-baked farm egg, black truffle, comté cream and brioche soldiers.', price: '$24', image: IMAGES.dish1, dietary: 'Vegetarian', popular: true },
  { name: 'Citrus-Cured Hamachi', category: 'Lunch', description: 'Yuzu, finger lime, avocado, crispy nori and a delicate shiso oil.', price: '$32', image: IMAGES.dish1, dietary: 'Gluten-free' },
  { name: 'Wagyu A5 Fillet', category: 'Dinner', description: 'Black truffle jus, smoked bone marrow and heritage garden greens.', price: '$96', image: IMAGES.dish2, dietary: 'Signature', popular: true },
  { name: 'Butter-Poached Halibut', category: 'Dinner', description: 'Champagne beurre blanc, samphire, caviar and fennel pollen.', price: '$64', image: IMAGES.hero, dietary: 'Gluten-free' },
  { name: 'Wild Mushroom Risotto', category: 'Lunch', description: 'Aged parmesan, woodland mushrooms, black truffle and herb oil.', price: '$46', image: IMAGES.dish3, dietary: 'Vegetarian' },
  { name: 'Gold Negroni', category: 'Drinks', description: 'Japanese gin, Campari, sweet vermouth and a veil of gold dust.', price: '$24', image: IMAGES.interior, dietary: 'House cocktail', popular: true },
  { name: 'Valrhona Gold Sphere', category: 'Desserts', description: '70% dark chocolate, wild berry heart and edible 24k gold leaf.', price: '$28', image: IMAGES.dish3, dietary: 'Gluten-free' },
  { name: 'Pistachio Crémeux', category: 'Desserts', description: 'Raspberry gel, white chocolate, rose and roasted Sicilian pistachio.', price: '$26', image: IMAGES.dish3, dietary: 'Vegetarian' }];


const tabs = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Drinks', 'Desserts'] as const;

type Tab = (typeof tabs)[number];

export function MenuExperience() {
  const [tab, setTab] = useState<Tab>('All');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<MenuDish | null>(null);
  const filtered = useMemo(
    () => dishes.filter((dish) => (tab === 'All' || dish.category === tab) && dish.name.toLowerCase().includes(query.toLowerCase())),
    [tab, query]
  );

  return (
    <section className="container py-20 lg:py-28">
      <div className="flex flex-col justify-between gap-6 border-b border-white/8 pb-8 lg:flex-row lg:items-end">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Menu category">
          {tabs.map((item) =>
            <button key={item} onClick={() => setTab(item)} className={`relative rounded-full px-5 py-2.5 text-sm transition-colors ${tab === item ? 'text-ink' : 'text-beige hover:text-gold'}`}>
              {tab === item && <motion.span layoutId="menu-tab" className="absolute inset-0 rounded-full bg-gold" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
              <span className="relative">{item}</span>
            </button>
          )}
        </div>
        <label className="flex w-full items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 lg:w-72">
          <Search className="h-4 w-4 text-gold" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search dishes" className="min-w-0 flex-1 bg-transparent text-sm text-cream placeholder:text-beige-muted focus:outline-none" />
        </label>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={`${tab}-${query}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((dish) =>
            <button key={dish.name} onClick={() => setSelected(dish)} className="group overflow-hidden rounded-3xl border border-white/8 bg-ink-card text-left transition-colors hover:border-gold/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">
              <div className="relative h-60 overflow-hidden">
                <ImageFrame src={dish.image} alt={dish.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-ink/75 px-3 py-1 text-xs uppercase tracking-wider text-gold backdrop-blur-md">{dish.category}</span>
                {dish.popular && <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-medium text-ink"><Flame className="h-3 w-3" /> Popular</span>}
                <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold text-ink opacity-0 transition-opacity group-hover:opacity-100"><Plus className="h-5 w-5" /></span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4"><h3 className="font-heading text-xl text-cream">{dish.name}</h3><span className="font-heading text-lg text-gold">{dish.price}</span></div>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-beige-muted">{dish.description}</p>
                <div className="mt-5 flex items-center gap-2 text-xs text-beige"><Leaf className="h-3.5 w-3.5 text-gold" />{dish.dietary}</div>
              </div>
            </button>
          )}
        </motion.div>
      </AnimatePresence>
      {filtered.length === 0 && <div className="py-20 text-center text-beige-muted">No dishes found. Try another search.</div>}

      <Dialog open={Boolean(selected)} onOpenChange={(open: boolean) => !open && setSelected(null)}>
        <DialogContent showCloseButton={false} className="max-w-3xl overflow-hidden border-white/10 bg-ink p-0 text-cream">
          {selected && <div className="grid md:grid-cols-2"><ImageFrame src={selected.image} alt={selected.name} className="h-72 w-full object-cover md:h-full" /><div className="relative p-8"><button onClick={() => setSelected(null)} className="absolute right-5 top-5 text-beige hover:text-gold" aria-label="Close dish details"><X className="h-5 w-5" /></button><span className="text-xs uppercase tracking-luxe text-gold">{selected.category}</span><h2 className="mt-4 font-heading text-3xl text-cream">{selected.name}</h2><p className="mt-4 leading-relaxed text-beige-muted">{selected.description}</p><div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6"><span className="flex items-center gap-2 text-sm text-beige"><Flame className="h-4 w-4 text-gold" /> Chef&lsquo;s recommendation</span><span className="font-heading text-2xl text-gold">{selected.price}</span></div><a href="/reservation" className="mt-7 flex items-center justify-center gap-2 rounded-full bg-gold py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-soft"><Wine className="h-4 w-4" /> Pair this experience</a></div></div>}
        </DialogContent>
      </Dialog>
    </section>);
}