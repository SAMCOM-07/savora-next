"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { Reveal } from "./ui/Reveal";

export function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <section className="container py-24 lg:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/20 bg-ink-card px-6 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
          <span className="relative text-xs uppercase tracking-luxe text-gold">
            Stay Connected
          </span>
          <h2 className="relative mt-5 font-heading text-4xl font-semibold text-cream sm:text-5xl">
            Join the Savora Circle
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-beige-muted">
            Be the first to receive seasonal menus, private event invitations
            and exclusive offers.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
            className="relative mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              required
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm text-cream placeholder:text-beige-muted focus:border-gold focus:outline-none"
            />

            <motion.button
              type="submit"
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-soft"
            >
              {done ? (
                <>
                  <Check className="h-4 w-4" /> Subscribed
                </>
              ) : (
                <>
                  Subscribe <Send className="h-4 w-4" />
                </>
              )}
            </motion.button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
