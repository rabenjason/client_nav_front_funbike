import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  const images = product.images.length > 0 ? product.images : [];
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const cardRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const media = mediaRef.current;
    if (!card || !media || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const enter = () => {
      gsap.to(card, { y: -8, duration: 0.35, ease: "power3.out", overwrite: true });
      gsap.to(media, { scale: 1.035, duration: 0.65, ease: "power3.out", overwrite: true });
    };
    const leave = () => {
      gsap.to(card, { y: 0, duration: 0.45, ease: "power3.out", overwrite: true });
      gsap.to(media, { scale: 1, duration: 0.7, ease: "power3.out", overwrite: true });
    };
    card.addEventListener("mouseenter", enter);
    card.addEventListener("mouseleave", leave);
    return () => {
      card.removeEventListener("mouseenter", enter);
      card.removeEventListener("mouseleave", leave);
      gsap.killTweensOf([card, media]);
    };
  }, []);

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
      ref={cardRef}
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
        <div ref={mediaRef} className="relative aspect-[4/3] overflow-hidden bg-muted/30">
          {!loadedImages[images[index]] && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted/70 via-muted/30 to-primary/10" aria-hidden="true" />
          )}
          <AnimatePresence mode="sync">
            <motion.img
              key={images[index]}
              src={images[index]}
              alt={`${product.brand} ${product.name}`}
              loading="lazy"
              width={1024}
              height={768}
              onLoad={() => setLoadedImages((current) => ({ ...current, [images[index]]: true }))}
              initial={{ opacity: 0, scale: 1.06, filter: "blur(12px)" }}
              animate={{
                opacity: loadedImages[images[index]] ? 1 : 0,
                scale: loadedImages[images[index]] ? 1 : 1.06,
                filter: loadedImages[images[index]] ? "blur(0px)" : "blur(12px)",
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
