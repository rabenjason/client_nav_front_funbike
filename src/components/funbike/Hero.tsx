import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import hero from "@/assets/hero-moto.jpg";
import { Typewriter } from "./Typewriter";

const stats = [
  { value: "3", label: "Marques exclusives" },
  { value: "12+", label: "Revendeurs agréés" },
  { value: "2000+", label: "Références en stock" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="accueil"
      ref={ref}
      className="grain relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.img
        src={hero}
        alt="Pilote d'enduro en plein saut au coucher du soleil"
        width={1920}
        height={1088}
        style={{ y: imgY, scale }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="overlay-fade absolute inset-0" />

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-36"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="eyebrow"
        >
          Distributeur exclusif · Madagascar
        </motion.p>

        <h1 className="mt-5 max-w-4xl text-[clamp(2.8rem,9vw,7rem)] font-bold">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            L'excellence
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block text-ember"
          >
            hors-piste
          </motion.span>
        </h1>

        <p className="mt-6 max-w-xl font-display text-2xl uppercase tracking-wide text-muted-foreground sm:text-3xl">
          Fait pour{" "}
          <Typewriter
            className="text-foreground"
            strings={[
              "la boue rouge",
              "les pistes du Sud",
              "la compétition",
              "les passionnés",
            ]}
          />
        </p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#catalogue"
            className="group inline-flex items-center gap-2 rounded-sm bg-ember px-7 py-3.5 font-display text-base font-semibold uppercase tracking-widest text-primary-foreground shadow-ember transition-transform duration-200 hover:scale-[1.03]"
          >
            Voir le catalogue
            <ChevronRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#revendeurs"
            className="inline-flex items-center gap-2 rounded-sm border border-border/80 px-7 py-3.5 font-display text-base uppercase tracking-widest text-foreground/90 backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
          >
            Nos revendeurs
          </a>
        </motion.div>

        <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-border/60 pt-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 + i * 0.12, duration: 0.6 }}
            >
              <div className="font-display text-4xl font-bold text-ember">
                {s.value}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
