const brands = [
  "TVS",
  "Fantic",
  "Sherco",
  "Bihr",
  "Gaerne",
  "Galfer",
  "MT Helmets",
  "Troy Lee Designs",
];

export function BrandMarquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-surface py-5">
      <div className="marquee-track flex w-max gap-14 pr-14">
        {[...brands, ...brands].map((b, i) => (
          <span
            key={`${b}-${i}`}
            className="font-display text-2xl uppercase tracking-[0.2em] text-muted-foreground/70 transition-colors hover:text-primary"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
