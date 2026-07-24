
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

const HOURS = [
{ day: 'Monday – Thursday', time: '5:00 PM – 11:00 PM' },
{ day: 'Friday – Saturday', time: '5:00 PM – 1:00 AM' },
{ day: 'Sunday', time: '4:00 PM – 10:00 PM' }];


export function Contact() {
  return (
    <section id="contact" className="container py-24 lg:py-32">
      <SectionHeading
        eyebrow="Visit Us"
        title={<>Find Your Way to Savora</>}
        description="We look forward to welcoming you. Reach out or simply stop by." />
      

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
            { icon: MapPin, label: 'Address', value: '128 Belrose Avenue, New York, NY 10012' },
            { icon: Phone, label: 'Phone', value: '+1 (212) 555-0198' },
            { icon: Mail, label: 'Email', value: 'reservations@savora.com' },
            { icon: Clock, label: 'Reservations', value: 'Daily from 11:00 AM' }].
            map((c) =>
            <div key={c.label} className="rounded-3xl border border-white/8 bg-ink-card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold">
                  <c.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-xs uppercase tracking-widest text-beige-muted">{c.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-cream">{c.value}</p>
              </div>
            )}
            <div className="rounded-3xl border border-white/8 bg-ink-card p-6 sm:col-span-2">
              <div className="flex items-center gap-2 text-gold">
                <Clock className="h-5 w-5" />
                <p className="text-xs uppercase tracking-widest">Opening Hours</p>
              </div>
              <ul className="mt-4 space-y-3">
                {HOURS.map((h) =>
                <li key={h.day} className="flex items-center justify-between border-b border-white/8 pb-3 text-sm last:border-0 last:pb-0">
                    <span className="text-beige">{h.day}</span>
                    <span className="text-cream">{h.time}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="h-full min-h-[24rem] overflow-hidden rounded-3xl border border-white/8">
            <iframe
              title="Savora location map"
              className="h-full w-full grayscale"
              style={{ minHeight: '24rem', border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.9)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.006%2C40.719%2C-73.996%2C40.727&layer=mapnik&marker=40.723%2C-74.001" />
            
          </div>
        </Reveal>
      </div>
    </section>);

}