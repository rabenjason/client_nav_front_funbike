import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { PageHeader } from "./PageHeader";
import { ProductBrowser } from "./ProductBrowser";
import { byCategory, categories, type CategorySlug } from "@/data/products";

export function CategoryPage({ slug }: { slug: CategorySlug }) {
  const cat = categories.find((c) => c.slug === slug)!;
  const items = byCategory(slug);

  return (
    <div>
      <PageHeader
        eyebrow={cat.sub}
        title={cat.title.split(" ")[0]!}
        accent={cat.title.split(" ").slice(1).join(" ")}
      >
        {cat.intro}
      </PageHeader>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <ProductBrowser items={items} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass glass-hover mt-16 flex flex-wrap items-center justify-between gap-6 rounded-lg p-8"
        >
          <div>
            <h2 className="text-3xl font-bold">Besoin d'un conseil ?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Nos techniciens vous orientent vers la référence adaptée à votre usage.
            </p>
          </div>
          <Link
            to="/contact"
            className="rounded-sm bg-ember px-6 py-3 font-display text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-ember"
          >
            Nous écrire
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
