import { motion } from "motion/react";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-border/60 pb-14 pt-36 md:pb-20 md:pt-44">
      <div className="glow-orb" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5">
        <motion.p
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-[clamp(2.4rem,6vw,4.6rem)] font-bold"
        >
          {title} {accent && <span className="text-ember">{accent}</span>}
        </motion.h1>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground"
          >
            {children}
          </motion.div>
        )}
      </div>
    </header>
  );
}
