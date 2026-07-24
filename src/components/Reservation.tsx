'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, CalendarCheck } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { IMAGES } from '../app/lib/data';
import { ImageFrame } from './ImageFrame';

const FIELD =
'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-cream placeholder:text-beige-muted transition-colors focus:border-gold focus:outline-none';

export function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="reservation" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <ImageFrame src={IMAGES.interior} alt="" aria-hidden className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-ink/85" />
      </div>

      <div className="container relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Reservations"
            title={<>Reserve Your Evening</>}
            description="Secure your table and let us craft an experience tailored entirely to you." />
          
          <Reveal delay={0.2}>
            <ul className="mt-8 space-y-4">
              {['Instant confirmation', 'Complimentary valet parking', 'Personalised dietary menus'].map((item) =>
              <li key={item} className="flex items-center gap-3 text-beige">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              )}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-white/10 bg-ink/60 p-8 backdrop-blur-2xl">
            {submitted ?
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-12 text-center">
              
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <CalendarCheck className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-heading text-2xl text-cream">Table Reserved</h3>
                <p className="mt-2 text-sm text-beige-muted">
                  Thank you. A confirmation has been sent to your email.
                </p>
                <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm text-gold hover:underline">
                
                  Make another reservation
                </button>
              </motion.div> :

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4">
              
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-widest text-beige-muted">Full Name</label>
                    <input required className={FIELD} placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-widest text-beige-muted">Phone</label>
                    <input required className={FIELD} placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-widest text-beige-muted">Email</label>
                  <input required type="email" className={FIELD} placeholder="jane@email.com" />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-widest text-beige-muted">Date</label>
                    <input required type="date" className={`${FIELD} [color-scheme:dark]`} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-widest text-beige-muted">Time</label>
                    <input required type="time" className={`${FIELD} [color-scheme:dark]`} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-widest text-beige-muted">Guests</label>
                    <select className={FIELD}>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) =>
                    <option key={n} className="bg-ink">{n}</option>
                    )}
                    </select>
                  </div>
                </div>
                <button
                type="submit"
                className="mt-2 w-full rounded-full bg-gold py-4 text-sm font-medium text-ink transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_10px_40px_-10px_rgba(200,155,60,0.6)]">
                
                  Confirm Reservation
                </button>
              </form>
            }
          </div>
        </Reveal>
      </div>
    </section>);

}