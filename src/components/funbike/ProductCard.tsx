import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  const images = product.images.length > 0 ? product.images : [];
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!hover || images.length < 2) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      1400,
    );
    return () => window.clearInterval(id);
  }, [hover, images.length]);

  useEffect(() => {
    if (!hover) setIndex(0);
  }, [hover]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <Link
        to="/produits/$slug"
        params={{ slug: product.slug }}
        className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-lg"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.img
              key={images[index]}
              src={images[index]}
              alt={`${product.brand} ${product.name}`}
              loading="lazy"
              width={1024}
              height={768}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
          <span className="glass-chip absolute left-4 top-4">{product.brand}</span>
          <span className="glass-chip absolute right-4 top-4">{product.type}</span>

          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
              {images.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  aria-label={`Image ${i + 1}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIndex(i);
                  }}
                  onMouseEnter={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-5 bg-foreground/85"
                      : "w-1.5 bg-foreground/35 hover:bg-foreground/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            {product.brand} · {product.type}
          </p>
          <h3 className="mt-2 text-2xl font-bold">{product.name}</h3>
          <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {product.short}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 self-start rounded-sm border border-border/70 px-4 py-2 font-display text-xs uppercase tracking-[0.2em] transition-colors group-hover:border-primary/70 group-hover:text-primary">
            Découvrir
            <ArrowUpRight size={14} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
