"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageMotionProps {
  children: React.ReactNode;
}

export function PageMotion({ children }: PageMotionProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}
