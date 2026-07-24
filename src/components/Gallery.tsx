'use client'

import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { GALLERY } from '../app/lib/data';
import { ImageFrame } from './ImageFrame';

export function Gallery() {
  return (
    <section id="gallery" className="container py-24 lg:py-32">
      <SectionHeading
        eyebrow="Gallery"
        title={<>Moments Worth Savouring</>}
        description="A glimpse into the ambiance, the artistry and the atmosphere that define Savora." />
      
      <div className="mt-16 grid auto-rows-55 grid-cols-2 gap-4 md:grid-cols-4">
        {GALLERY.map((src, i) =>
        <Reveal
          key={i}
          delay={i % 4 * 0.08}
          className={`${i === 0 || i === 3 ? 'row-span-2' : ''} ${i === 1 ? 'col-span-2 md:col-span-2' : ''}`}>
          
            <motion.div
            whileHover={{ scale: 0.98 }}
            className="group h-full overflow-hidden rounded-2xl border border-white/8">
            
              <ImageFrame
              src={src}
              alt={`Savora gallery ${i + 1}`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            
            </motion.div>
          </Reveal>
        )}
      </div>
    </section>);

}