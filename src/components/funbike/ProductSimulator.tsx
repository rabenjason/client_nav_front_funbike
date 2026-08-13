import { useState } from "react";
import { motion } from "motion/react";
import { Check, ShieldCheck, Truck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";

export function ProductSimulator({ product }: { product: Product }) {
  const [option, setOption] = useState(product.options.values[0] ?? "");
  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const [delivery, setDelivery] = useState<"showroom" | "province">("showroom");
  const [sent, setSent] = useState(false);

  return (
    <div className="glass glass-hover rounded-lg p-7">
      <p className="eyebrow">Configurateur</p>
      <h2 className="mt-3 text-3xl font-bold">Configurez votre {product.name}</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Sélectionnez votre configuration, un revendeur agréé vous recontacte avec
        toutes les informations.
      </p>

      <div className="mt-7 space-y-7">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {product.options.label}
          </span>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.options.values.map((v) => (
              <button
                key={v}
                onClick={() => setOption(v)}
                className={`rounded-sm border px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                  option === v
                    ? "border-primary bg-primary/15 text-foreground"
                    : "border-border/70 text-muted-foreground hover:border-primary/50"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        {product.colors.length > 0 && (
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Coloris — {color}
            </span>
            <div className="mt-3 flex flex-wrap gap-3">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  aria-label={c.name}
                  onClick={() => setColor(c.name)}
                  className={`relative h-9 w-9 rounded-full border-2 transition-transform hover:scale-110 ${
                    color === c.name ? "border-primary" : "border-border/70"
                  }`}
                  style={{ backgroundColor: c.hex }}
                >
                  {color === c.name && (
                    <Check size={14} className="absolute inset-0 m-auto text-primary-foreground" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Retrait / livraison
          </span>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={() => setDelivery("showroom")}
              className={`inline-flex items-center gap-2 rounded-sm border px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                delivery === "showroom"
                  ? "border-primary bg-primary/15"
                  : "border-border/70 text-muted-foreground hover:border-primary/50"
              }`}
            >
              <ShieldCheck size={14} /> Showroom
            </button>
            <button
              onClick={() => setDelivery("province")}
              className={`inline-flex items-center gap-2 rounded-sm border px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                delivery === "province"
                  ? "border-primary bg-primary/15"
                  : "border-border/70 text-muted-foreground hover:border-primary/50"
              }`}
            >
              <Truck size={14} /> Province
            </button>
          </div>
        </div>

        <div className="rounded-sm border border-border/60 bg-background/40 p-5 text-sm">
          <div className="flex items-center justify-between text-muted-foreground">
            <span>{product.options.label}</span>
            <span className="text-foreground">{option}</span>
          </div>
          {color && (
            <div className="mt-2 flex items-center justify-between text-muted-foreground">
              <span>Coloris</span>
              <span className="text-foreground">{color}</span>
            </div>
          )}
          <div className="mt-2 flex items-center justify-between text-muted-foreground">
            <span>Retrait</span>
            <span className="text-foreground">
              {delivery === "showroom" ? "Showroom Antananarivo" : "Revendeur en province"}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSent(true)}
            className="flex-1 rounded-sm bg-ember px-6 py-3.5 font-display text-base font-semibold uppercase tracking-widest text-primary-foreground shadow-ember"
          >
            {sent ? "Demande enregistrée ✓" : "Demander des informations"}
          </motion.button>
          <Link
            to="/revendeurs"
            className="rounded-sm border border-border/70 px-6 py-3.5 font-display text-base font-semibold uppercase tracking-widest transition-colors hover:border-primary/70 hover:text-primary"
          >
            Contacter un revendeur
          </Link>
        </div>
        {sent && (
          <p className="text-center text-xs text-muted-foreground">
            Notre équipe vous recontacte sous 24 h avec les disponibilités.
          </p>
        )}
      </div>
    </div>
  );
}
