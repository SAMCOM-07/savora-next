
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { IMAGES } from '../app/lib/data';
import { ImageFrame } from './ImageFrame';

export function About() {
  return (
    <section id="about" className="border-y border-white/5 bg-ink-soft py-24 lg:py-32">
      <div className="container grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-4xl border border-white/10">
              <ImageFrame src={IMAGES.interior} alt="Savora dining room" className="h-128 w-full object-cover" />
            </div>
            <div className="absolute -right-4 -top-6 hidden rounded-2xl border border-gold/30 bg-ink/80 px-6 py-5 backdrop-blur-xl sm:block">
              <p className="font-heading text-4xl font-semibold text-gold">Est.</p>
              <p className="font-heading text-4xl font-semibold text-cream">1998</p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Our Story"
            title={<>A Legacy Written in Flavor</>} />
          
          <Reveal delay={0.15}>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-beige-muted">
              <p>
                For over two decades, Savora has been a sanctuary for those who believe dining is an art form. What began as a
                twelve-seat atelier has become a destination for connoisseurs across the world.
              </p>
              <p>
                Under the vision of Chef Laurent Dubois, our kitchen honours tradition while daring to reinvent it, sourcing
                the rarest ingredients and treating each with reverence and imagination.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8 flex items-center gap-6">
              <p className="font-heading text-3xl italic text-gold">— Chef Laurent Dubois</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}