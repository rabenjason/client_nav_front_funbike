import { Link } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[1fr_0.8fr_0.8fr_1.2fr]">
        <div>
          <img
            src="/logo-funbike.png"
            alt="Funbike Madagascar"
            width={720}
            height={407}
            loading="lazy"
            className="h-10 w-auto"
          />
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
            Distributeur exclusif de motos, casques, pièces détachées et
            équipements off-road à Madagascar.
          </p>
        </div>
        <div>
          <h3 className="text-sm tracking-[0.2em] text-foreground">Catalogue</h3>
          <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[11px] leading-tight text-muted-foreground">
            <li><Link to="/motos" className="hover:text-primary">Motos</Link></li>
            <li><Link to="/casques" className="hover:text-primary">Casques</Link></li>
            <li><Link to="/pieces" className="hover:text-primary">Pièces</Link></li>
            <li><Link to="/equipements" className="hover:text-primary">Équipement</Link></li>
            <li><Link to="/accessoires" className="hover:text-primary">Accessoires</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm tracking-[0.2em] text-foreground">Société</h3>
          <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
            <li><Link to="/catalogue" className="hover:text-primary">Tout le catalogue</Link></li>
            <li><Link to="/revendeurs" className="hover:text-primary">Revendeurs</Link></li>
            <li>
              <Link to="/contact" className="inline-flex items-center gap-2 hover:text-primary">
                <FontAwesomeIcon icon={faEnvelope} className="size-3" aria-hidden="true" />
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:justify-self-end lg:min-w-64">
          <h3 className="text-sm tracking-[0.2em] text-foreground">Contact</h3>
          <ul className="mt-4 flex flex-col gap-3 text-xs text-muted-foreground">
            <li>
              <a href="tel:+26134000000" className="inline-flex items-center gap-2 transition-colors hover:text-primary">
                <FontAwesomeIcon icon={faPhone} className="size-3 text-emerald-300" aria-hidden="true" />
                <span>+261 34 00 000 00</span>
                <span className="size-1.5 animate-pulse rounded-full bg-emerald-300" aria-label="Disponible" />
              </a>
            </li>
            <li>
              <a href="mailto:contact@funbike.mg" className="inline-flex items-center gap-2 transition-colors hover:text-primary">
                <FontAwesomeIcon icon={faEnvelope} className="size-3" aria-hidden="true" />
                <span>contact@funbike.mg</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/funbike.mg" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-primary">
                <FontAwesomeIcon icon={faFacebookF} className="size-3" aria-hidden="true" />
                <span>Facebook</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Funbike Madagascar — Tous droits réservés.
      </div>
    </footer>
  );
}
