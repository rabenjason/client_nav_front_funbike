import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
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
          <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
            <li><Link to="/motos" className="hover:text-primary">Motos</Link></li>
            <li><Link to="/casques" className="hover:text-primary">Casques</Link></li>
            <li><Link to="/pieces" className="hover:text-primary">Pièces détachées</Link></li>
            <li><Link to="/equipements" className="hover:text-primary">Équipements</Link></li>
            <li><Link to="/accessoires" className="hover:text-primary">Accessoires</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm tracking-[0.2em] text-foreground">Société</h3>
          <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
            <li><Link to="/catalogue" className="hover:text-primary">Tout le catalogue</Link></li>
            <li><Link to="/revendeurs" className="hover:text-primary">Revendeurs</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm tracking-[0.2em] text-foreground">Showroom</h3>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Ankorondrano, Antananarivo
            <br />
            +261 34 00 000 00
            <br />
            contact@funbike.mg
          </p>
        </div>
      </div>
      <div className="border-t border-border/50 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Funbike Madagascar — Tous droits réservés.
      </div>
    </footer>
  );
}
