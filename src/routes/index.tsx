import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Bike, ShieldCheck, Wrench } from "lucide-react";
import { Hero } from "@/components/funbike/Hero";
import { BrandMarquee } from "@/components/funbike/BrandMarquee";
import { Reveal } from "@/components/funbike/Reveal";
import { ProductCard } from "@/components/funbike/ProductCard";
import { categories, products } from "@/data/products";

const title = "Funbike Madagascar — Motos enduro, cross & équipements";
const description =
  "Distributeur exclusif à Madagascar : motos enduro et cross, casques, pièces détachées et équipements. Réseau de revendeurs agréés et atelier certifié.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <div>
      <Hero />
      <BrandMarquee />

      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="grid items-end gap-5 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Explorez par univers</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[0.95]">
              Choisissez votre <span className="text-ember">terrain</span>
            </h2>
          </Reveal>
          <p className="max-w-md text-sm leading-6 text-muted-foreground lg:pb-1">
            Du premier trail à la compétition : tout ce qu&apos;il faut pour rouler,
            réparer et se protéger.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
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
                  <h3 className="font-display text-2xl font-bold leading-none md:text-[1.7rem]">{c.title}</h3>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {c.sub}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-surface/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="eyebrow">Nouveautés 2026</p>
            <h2 className="mt-4 text-[clamp(2.2rem,5vw,4rem)] font-bold">
              Arrivées récentes <span className="text-ember">au showroom</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.slice(0, 3).map((p, i) => (
              <ProductCard key={p.slug} product={p} delay={i * 0.1} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/catalogue"
              className="inline-block rounded-sm bg-ember px-7 py-3.5 font-display text-base font-semibold uppercase tracking-widest text-primary-foreground shadow-ember transition-transform hover:scale-[1.03]"
            >
              Voir tout le catalogue
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
