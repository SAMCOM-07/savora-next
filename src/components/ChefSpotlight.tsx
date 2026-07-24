
import { Quote } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { IMAGES } from '../app/lib/data';
import { ImageFrame } from './ImageFrame';

export function ChefSpotlight() {
  return (
    <section className="container py-24 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="relative mx-auto max-w-md">
            <div className="overflow-hidden rounded-[2rem] border border-white/10">
              <ImageFrame src={IMAGES.dish2} alt="Chef Laurent Dubois" className="h-[30rem] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-gold/20 bg-ink/80 px-6 py-4 backdrop-blur-xl">
              <p className="font-heading text-xl text-cream">Laurent Dubois</p>
              <p className="text-sm text-gold">Executive Chef & Founder</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <span className="flex items-center gap-3 text-xs uppercase tracking-luxe text-gold font-medium">
            <span className="h-px w-8 bg-gold/60" />
            Chef Spotlight
          </span>
          <Quote className="mt-6 h-10 w-10 text-gold/40" />
          <blockquote className="mt-4 font-heading text-3xl font-medium leading-snug text-cream sm:text-4xl">
            “I don’t cook to fill plates. I cook to create memories that outlast the evening.”
          </blockquote>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-beige-muted">
            Trained across the great kitchens of Lyon and Tokyo, Chef Laurent brings three decades of mastery to every
            service. His philosophy is simple: honour the ingredient, respect the craft, and never stop reinventing.
          </p>
          <div className="mt-8 flex flex-wrap gap-8">
            {[
            { value: '30', label: 'Years Experience' },
            { value: '2', label: 'Michelin Stars' },
            { value: '15', label: 'Global Awards' }].
            map((s) =>
            <div key={s.label}>
                <p className="font-heading text-3xl font-semibold text-gold">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-beige-muted">{s.label}</p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>);

}