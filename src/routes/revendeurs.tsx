import { createFileRoute } from "@tanstack/react-router";
import { ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense, useMemo, useState } from "react";
import { motion } from "motion/react";
import { MapPin, Clock, Phone, Mail, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/funbike/PageHeader";
import { Reveal } from "@/components/funbike/Reveal";
import { dealers } from "@/data/dealers";

const DealerMap = lazy(() => import("@/components/funbike/DealerMap"));

const title = "Réseau de revendeurs — Funbike Madagascar";
const description =
  "Retrouvez les revendeurs agréés et points service Funbike à Antananarivo, Toamasina, Mahajanga et Fianarantsoa : adresses, horaires et contacts.";

export const Route = createFileRoute("/revendeurs")({
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
  component: RevendeursPage,
});

function RevendeursPage() {
  const [slug, setSlug] = useState(dealers[0]!.slug);
  const selected = useMemo(
    () => dealers.find((d) => d.slug === slug) ?? dealers[0]!,
    [slug],
  );

  return (
    <div>
      <PageHeader eyebrow="Nos revendeurs" title="Présents partout" accent="à Madagascar">
        Un réseau de partenaires formés et équipés pour l'entretien, les pièces
        détachées et le conseil, de la capitale aux pistes du Sud.
      </PageHeader>

      <section className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        <div className="flex flex-wrap gap-3">
          {dealers.map((d) => {
            const active = d.slug === slug;
            return (
              <button
                key={d.slug}
                onClick={() => setSlug(d.slug)}
                className={`rounded-sm border px-5 py-2.5 font-display text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
                  active
                    ? "border-primary/60 bg-surface text-primary"
                    : "border-border/70 bg-surface/40 text-muted-foreground hover:border-border hover:text-foreground"
                }`}
              >
                {d.city}
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div className="glass glass-hover overflow-hidden rounded-lg p-1.5">
            <ClientOnly fallback={<div className="h-[420px] w-full rounded-lg bg-surface/50" />}>
              <Suspense fallback={<div className="h-[420px] w-full rounded-lg bg-surface/50" />}>
                <DealerMap list={dealers} selected={selected} onSelect={setSlug} />
              </Suspense>
            </ClientOnly>
          </div>

          <motion.div
            key={selected.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="glass glass-hover flex flex-col rounded-lg p-7"
          >
            <p className="eyebrow">{selected.city}</p>
            <h2 className="mt-2 text-3xl font-bold">{selected.name}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {selected.desc}
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>{selected.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>{selected.hours}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>
                  {selected.phone1}
                  {selected.phone2 && (
                    <>
                      <br />
                      {selected.phone2}
                    </>
                  )}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>{selected.email}</span>
              </li>
            </ul>
            <p className="mt-3 font-mono text-xs text-muted-foreground">
              Lat {selected.lat} · Lng {selected.lng}
            </p>
            <a
              href={`mailto:${selected.email}`}
              className="group mt-6 inline-flex items-center gap-2 font-display text-sm uppercase tracking-[0.18em] text-primary"
            >
              Voir la fiche
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {dealers.map((d, i) => {
            const active = d.slug === slug;
            return (
              <Reveal key={d.slug} delay={i * 0.06}>
                <motion.button
                  onClick={() => setSlug(d.slug)}
                  onMouseEnter={() => setSlug(d.slug)}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`glass glass-hover w-full rounded-lg p-7 text-left ${
                    active ? "border-primary/40 shadow-[0_20px_50px_-30px_oklch(0_0_0)]" : ""
                  }`}
                >
                  <p className="eyebrow">{d.city}</p>
                  <h3 className="mt-2 text-2xl font-bold">{d.name}</h3>
                  <div className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                      <span>{d.address}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={16} className="mt-0.5 shrink-0 text-primary" />
                      <span>{d.hours}</span>
                    </div>
                  </div>
                </motion.button>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
