"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../app/lib/data";

const discoveryLinks = [
  {
    title: "Our Story",
    text: "The people and philosophy behind Savora.",
    to: "/about",
  },
  {
    title: "Journal",
    text: "Recipes, seasonality and chef notes.",
    to: "/blog",
  },
  { title: "Gallery", text: "A view inside our world.", to: "/gallery" },
  { title: "FAQ", text: "Everything you need before you visit.", to: "/faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function doSth() {
      setOpen(false);
      setMegaOpen(false);
    }
    doSth();
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "border-b border-white/5 bg-ink/80 backdrop-blur-xl" : "border-b border-transparent bg-transparent"}`}
    >
      <nav
        className="container flex h-20 items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-heading text-2xl font-semibold tracking-wide text-cream"
        >
          Sav<span className="text-gold">o</span>ra
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="/menu"
            className={`text-sm transition-colors ${pathname === "/menu" ? "text-gold" : "text-beige hover:text-gold"}`}
          >
            Menu
          </Link>
          <Link
            href="/about"
            className={`text-sm transition-colors ${pathname === "/about" ? "text-gold" : "text-beige hover:text-gold"}`}
          >
            About
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              onClick={() => setMegaOpen((value) => !value)}
              aria-expanded={megaOpen}
              className="inline-flex items-center gap-1.5 text-sm text-beige transition-colors hover:text-gold"
            >
              Discover{" "}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${megaOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full mt-5 w-[34rem] -translate-x-1/2 rounded-3xl border border-white/10 bg-ink/95 p-5 shadow-2xl backdrop-blur-xl"
                >
                  <div className="grid grid-cols-2 gap-2">
                    {discoveryLinks.map((item) => (
                      <Link
                        key={item.to}
                        href={item.to}
                        className="rounded-2xl p-4 transition-colors hover:bg-white/5"
                      >
                        <p className="font-heading text-lg text-cream">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-beige-muted">
                          {item.text}
                        </p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            href="/contact"
            className={`text-sm transition-colors ${pathname === "/contact" ? "text-gold" : "text-beige hover:text-gold"}`}
          >
            Contact
          </Link>
        </div>
        <Link
          href="/reservation"
          className="hidden rounded-full bg-gold px-6 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-gold-soft lg:inline-flex"
        >
          Reserve a Table
        </Link>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="text-cream lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/5 bg-ink lg:hidden"
          >
            <div className="container py-4">
              <ul className="flex flex-col gap-1">
                {[...NAV_LINKS, { label: "FAQ", href: "/faq" }].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block rounded-xl px-3 py-3 text-sm ${pathname === link.href ? "bg-gold/10 text-gold" : "text-beige hover:text-gold"}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/reservation"
                    className="mt-3 block rounded-full bg-gold px-6 py-3 text-center text-sm font-medium text-ink"
                  >
                    Reserve a Table
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
