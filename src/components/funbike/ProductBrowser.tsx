import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X } from "lucide-react";
import { ProductCard } from "./ProductCard";
import {
  brandsOf,
  filterProducts,
  findCategory,
  typesOf,
  type Product,
} from "@/data/products";

/**
 * Navigation dynamique : Catégorie → Marque → Type → Produits
 * Toutes les valeurs sont déduites des produits reçus, rien n'est codé en dur.
 */
export function ProductBrowser({
  items,
  showCategory = false,
}: {
  items: Product[];
  showCategory?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");

  const brands = useMemo(() => brandsOf(items), [items]);
  const types = useMemo(
    () => typesOf(brand ? items.filter((p) => p.brand === brand) : items),
    [items, brand],
  );
  const results = useMemo(
    () => filterProducts(items, { query, brand, type }),
    [items, query, brand, type],
  );

  const pick = (value: string, current: string, set: (v: string) => void) =>
    set(current === value ? "" : value);

  const chip = (activeState: boolean) =>
    `rounded-sm border px-4 py-2 font-display text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
      activeState
        ? "border-primary/70 bg-primary/10 text-foreground"
        : "border-border/70 text-muted-foreground hover:border-primary/40 hover:text-foreground"
    }`;

  return (
    <div>
      <div className="glass glass-hover flex flex-col gap-5 rounded-lg p-5 md:p-6">
        <div className="flex items-center gap-3">
          <Search size={16} className="shrink-0 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un produit, une marque, un type…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          {query && (
            <button aria-label="Effacer" onClick={() => setQuery("")}>
              <X size={15} className="text-muted-foreground hover:text-foreground" />
            </button>
          )}
        </div>

        <div className="h-px bg-border/50" />

        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Marque
            </span>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => {
                  pick(b, brand, setBrand);
                  setType("");
                }}
                className={chip(brand === b)}
              >
                {b}
              </button>
            ))}
          </div>

          <AnimatePresence initial={false}>
            {types.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-2 overflow-hidden"
              >
                <span className="mr-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Type
                </span>
                {types.map((t) => (
                  <button key={t} onClick={() => pick(t, type, setType)} className={chip(type === t)}>
                    {t}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {results.length} produit{results.length > 1 ? "s" : ""}
        {showCategory && brand ? ` · ${brand}` : ""}
      </p>

      <motion.div layout className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {results.map((p, i) => (
            <motion.div key={p.slug} layout exit={{ opacity: 0, scale: 0.97 }}>
              <ProductCard product={p} delay={(i % 3) * 0.06} />
              {showCategory && (
                <span className="sr-only">{findCategory(p.category)?.title}</span>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {results.length === 0 && (
        <p className="glass mt-4 rounded-lg p-10 text-center text-sm text-muted-foreground">
          Aucun produit ne correspond à votre recherche.
        </p>
      )}
    </div>
  );
}
