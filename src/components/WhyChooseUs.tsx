"use client";
import { motion } from "framer-motion";
import { ChefHat, Leaf, Wine, Gem } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { FEATURES } from "../app/lib/data";

const ICONS = { ChefHat, Leaf, Wine, Gem } as const;

export function WhyChooseUs() {
  return (
    <section className="border-y border-white/5 bg-ink-soft py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>The Savora Difference</>}
          description="Every detail is considered, so your only concern is savouring the moment."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => {
            const Icon = ICONS[feature.icon as keyof typeof ICONS];
            return (
              <Reveal key={feature.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="h-full rounded-3xl border border-white/8 bg-ink-card p-8 transition-colors hover:border-gold/30"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-heading text-lg font-semibold text-cream">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-beige-muted">
                    {feature.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
