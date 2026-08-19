import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const links = [
  { label: "Accueil", to: "/" },
  { label: "Catalogue", to: "/catalogue" },
  { label: "Motos", to: "/motos" },
  { label: "Casques", to: "/casques" },
  { label: "Pièces", to: "/pieces" },
  { label: "Équipements", to: "/equipements" },
  { label: "Accessoires", to: "/accessoires" },
  { label: "Revendeurs", to: "/revendeurs" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`nav-solid fixed inset-x-0 top-0 z-50 transition-[border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled ? "nav-solid-scrolled" : "border-b border-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo-funbike.png"
            alt="Funbike Madagascar"
            width={720}
            height={407}
            className={`w-auto drop-shadow-[0_4px_14px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              scrolled ? "h-8 md:h-10" : "h-9 md:h-11"
            }`}
          />
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                className="group relative text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-ember transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-sm bg-ember px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-ember transition-transform duration-200 hover:scale-[1.04] md:inline-block"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 size-3" aria-hidden="true" />
            Contact
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="glass rounded-sm p-2 lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="nav-panel overflow-hidden lg:hidden"
          >
            {[...links, { label: "Contact", to: "/contact" } as const].map((l) => (
              <li key={l.label} className="border-b border-border/40">
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 font-display text-lg uppercase tracking-wide"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
