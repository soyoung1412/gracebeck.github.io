"use client";

import { motion } from "framer-motion";

const defaultEase = [0.22, 1, 0.36, 1];

export function Reveal({ children, className = "", delay = 0, y = 26 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.72, ease: defaultEase, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.68, ease: defaultEase, delay }}
    >
      {children}
    </motion.div>
  );
}
