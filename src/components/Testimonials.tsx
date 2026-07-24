
import { Star, Quote } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { TESTIMONIALS } from '../app/lib/data';

export function Testimonials() {
  return (
    <section className="border-y border-white/5 bg-ink-soft py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Guest Voices"
          title={<>Words From Our Table</>} />
        
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) =>
          <Reveal key={t.name} delay={i * 0.12}>
              <figure className="flex h-full flex-col rounded-3xl border border-white/8 bg-ink-card p-8">
                <Quote className="h-8 w-8 text-gold/40" />
                <div className="mt-4 flex gap-1 text-gold">
                  {[1, 2, 3, 4, 5].map((s) =>
                <Star key={s} className="h-4 w-4 fill-gold" />
                )}
                </div>
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-cream/90">“{t.quote}”</blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-white/8 pt-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 font-heading text-lg text-gold">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-medium text-cream">{t.name}</p>
                    <p className="text-sm text-beige-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}