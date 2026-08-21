import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, FileText } from "lucide-react";
import { ProductCard } from "@/components/funbike/ProductCard";
import { findProduct, findCategory, products, type Product } from "@/data/products";

export const Route = createFileRoute("/produits/$slug")({
  loader: ({ params }) => {
    const product = findProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Produit introuvable — Funbike" }] };
    const { product } = loaderData;
    const title = `${product.name} — ${product.brand} | Funbike Madagascar`;
    return { meta: [{ title }, { name: "description", content: product.short }, { property: "og:title", content: title }, { property: "og:description", content: product.short }, { property: "og:type", content: "product" }] };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const [active, setActive] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState("50% 50%");
  const category = findCategory(product.category);
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <main className="pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Link to={`/${product.category}` as "/motos"} className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary">
          <ChevronLeft size={14} /> Retour
        </Link>

        <div className="mt-6 grid items-start gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)]">
          <section>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glass relative flex min-h-80 w-full items-center justify-center overflow-hidden rounded-lg bg-surface-2 p-3 sm:min-h-[520px] sm:p-6"
              onMouseMove={(event) => {
                const bounds = event.currentTarget.getBoundingClientRect();
                setZoomOrigin(`${((event.clientX - bounds.left) / bounds.width) * 100}% ${((event.clientY - bounds.top) / bounds.height) * 100}%`);
                setIsZoomed(true);
              }}
              onMouseLeave={() => setIsZoomed(false)}
              onTouchStart={() => setIsZoomed(false)}
            >
              <div aria-hidden="true" className="absolute inset-0 scale-110 bg-cover bg-center opacity-35 blur-2xl" style={{ backgroundImage: `url(${product.images[active]})` }} />
              <div aria-hidden="true" className="absolute inset-0 bg-background/35" />
              <div aria-hidden="true" className="absolute inset-3 rounded-md border border-foreground/10 bg-foreground/[0.03] shadow-inner shadow-foreground/5 sm:inset-6" />
              <AnimatePresence mode="sync">
                <motion.img
                  key={product.images[active]}
                  src={product.images[active]}
                  alt={`${product.name} — vue ${active + 1}`}
                  width={1024}
                  height={768}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ transform: `scale(${isZoomed ? 1.8 : 1})`, transformOrigin: zoomOrigin, transition: "transform 420ms cubic-bezier(0.16, 1, 0.3, 1)", willChange: "transform" }}
                  className="relative block max-h-[min(68vh,680px)] w-full object-contain"
                />
              </AnimatePresence>
            </motion.div>
            {product.images.length > 1 && (
              <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
                {product.images.map((src, i) => (
                  <button key={src + i} onClick={() => setActive(i)} aria-label={`Voir l'image ${i + 1}`} className={`overflow-hidden rounded-sm border transition-all duration-300 ${i === active ? "border-primary/70 opacity-100" : "border-border/60 opacity-60 hover:opacity-100"}`}>
                    <img src={src} alt={`${product.name} — miniature ${i + 1}`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </section>

          <aside className="glass rounded-lg p-6 sm:p-8 lg:sticky lg:top-24">
            <p className="eyebrow">{product.brand} · {category?.title ?? product.category} · {product.type}</p>
            <h1 className="mt-3 text-balance text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[0.95]">{product.name}</h1>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{product.desc}</p>
            <div className="my-7 h-px bg-border/70" />
            <h2 className="text-xl font-bold">Caractéristiques techniques</h2>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {product.specs.map((s) => <div key={s.label} className="glass glass-hover rounded-sm p-4"><div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div><div className="mt-1 font-display text-lg">{s.value}</div></div>)}
            </div>
            {product.docs && product.docs.length > 0 && <div className="mt-8"><h2 className="text-xl font-bold">Documents</h2><div className="mt-4 flex flex-wrap gap-3">{product.docs.map((d) => <a key={d.label} href={d.href} className="glass glass-hover inline-flex items-center gap-2 rounded-sm px-4 py-3 text-sm transition-colors hover:text-primary"><FileText size={16} /> {d.label}</a>)}</div></div>}
          </aside>
        </div>

        {related.length > 0 && <section className="py-20"><h2 className="text-3xl font-bold">Produits <span className="text-ember">similaires</span></h2><div className="mt-8 grid gap-6 md:grid-cols-3">{related.map((p, i) => <ProductCard key={p.slug} product={p} delay={i * 0.08} />)}</div></section>}
      </div>
    </main>
  );
}
