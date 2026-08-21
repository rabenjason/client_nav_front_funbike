import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Bike, ShieldCheck, Wrench } from "lucide-react";
import { PageHeader } from "@/components/funbike/PageHeader";
import { ProductBrowser } from "@/components/funbike/ProductBrowser";
import { categories } from "@/data/products";
import { getGraphQLProducts } from "@/data/graphql";

const title = "Catalogue complet — Funbike Madagascar";
const description =
  "Motos, casques, pièces détachées, accessoires et équipements off-road : parcourez tout le catalogue Funbike Madagascar par marque et par type.";

export const Route = createFileRoute("/catalogue")({
  loader: () => getGraphQLProducts(),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CataloguePage,
});

function CataloguePage() {
  const products = Route.useLoaderData();

  return (
    <div>
      <PageHeader eyebrow="Catalogue" title="Tout le" accent="catalogue">
        Parcourez toutes les catégories, marques et types de produits
        sélectionnés pour les routes et les pistes malgaches.
      </PageHeader>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10 grid items-end gap-5 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div>
            <p className="eyebrow">Explorez par univers</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[0.95]">
              Choisissez votre <span className="text-ember">terrain</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground lg:pb-1">
            Parcourez nos univers pour trouver la référence adaptée à votre usage.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {categories.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover="hover"
            >
              <Link
                to={`/${c.slug}` as "/motos"}
                className="group relative block aspect-square overflow-hidden rounded-none border border-border/60"
              >
                <motion.img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  variants={{ hover: { scale: 1.12 } }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  {c.slug === "motos" ? <Bike className="mb-3 size-5 text-ember" aria-hidden="true" /> : c.slug === "pieces" ? <Wrench className="mb-3 size-5 text-ember" aria-hidden="true" /> : <ShieldCheck className="mb-3 size-5 text-ember" aria-hidden="true" />}
                  <h2 className="font-display text-2xl font-bold leading-none md:text-[1.7rem]">{c.title}</h2>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {c.sub}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <h2 className="mt-20 text-[clamp(1.8rem,4vw,3rem)] font-bold">
          Tous les <span className="text-ember">produits</span>
        </h2>
        <div className="mt-8">
          <ProductBrowser items={products} showCategory />
        </div>
      </section>
    </div>
  );
}
