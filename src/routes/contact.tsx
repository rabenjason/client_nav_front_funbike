import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/funbike/PageHeader";
import { Reveal } from "@/components/funbike/Reveal";
import { products } from "@/data/products";

const title = "Contact & showroom — Funbike Madagascar";
const description =
  "Essais, devis, disponibilité des pièces : contactez l'équipe Funbike Madagascar à Ankorondrano, Antananarivo, du lundi au samedi.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <PageHeader eyebrow="Contact" title="Passez au" accent="showroom">
        Essais, devis, disponibilité des pièces : notre équipe vous répond du
        lundi au samedi.
      </PageHeader>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
        <Reveal>
          <ul className="space-y-4 text-sm">
            <li className="glass flex items-center gap-3 rounded-lg p-4">
              <Phone size={16} className="text-primary" /> +261 34 00 000 00
            </li>
            <li className="glass flex items-center gap-3 rounded-lg p-4">
              <Mail size={16} className="text-primary" /> contact@funbike.mg
            </li>
            <li className="glass flex items-center gap-3 rounded-lg p-4">
              <MapPin size={16} className="text-primary" /> Ankorondrano, Antananarivo
            </li>
            <li className="glass flex items-center gap-3 rounded-lg p-4">
              <Clock size={16} className="text-primary" /> Lun – Sam · 8h00 – 17h30
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={(e) => e.preventDefault()} className="glass grid gap-4 rounded-lg p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                placeholder="Nom"
                className="rounded-sm border border-border/70 bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="rounded-sm border border-border/70 bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <select
              defaultValue=""
              className="rounded-sm border border-border/70 bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            >
              <option value="" disabled>
                Produit qui vous intéresse
              </option>
              {products.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name} — {p.brand}
                </option>
              ))}
            </select>
            <textarea
              rows={4}
              placeholder="Votre message"
              className="resize-none rounded-sm border border-border/70 bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-sm bg-ember px-6 py-3.5 font-display text-base font-semibold uppercase tracking-widest text-primary-foreground shadow-ember"
            >
              Envoyer la demande
            </motion.button>
          </form>
        </Reveal>
      </section>
    </div>
  );
}
