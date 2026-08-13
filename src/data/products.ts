import bike1 from "@/assets/bike-1.jpg";
import bike2 from "@/assets/bike-2.jpg";
import helmet from "@/assets/gear-helmet.jpg";
import parts from "@/assets/gear-parts.jpg";
import apparel from "@/assets/gear-apparel.jpg";

export type CategorySlug =
  | "motos"
  | "casques"
  | "pieces"
  | "equipements"
  | "accessoires";

export type Product = {
  slug: string;
  name: string;
  category: CategorySlug;
  brand: string;
  /** Type / famille du produit : Roadster, Enduro, Scooter, Freinage… */
  type: string;
  /** Galerie : la première image est l'image principale */
  images: string[];
  /** Résumé court affiché sur la carte (1 à 2 lignes) */
  short: string;
  /** Description complète, uniquement sur la fiche détaillée */
  desc: string;
  specs: { label: string; value: string }[];
  docs?: { label: string; href: string }[];
  options: { label: string; values: string[] };
  colors: { name: string; hex: string }[];
};

export const categories: {
  slug: CategorySlug;
  title: string;
  sub: string;
  img: string;
  intro: string;
}[] = [
  {
    slug: "motos",
    title: "Motos",
    sub: "Roadster, enduro, scooter & tricycle",
    img: bike2,
    intro:
      "Des machines homologuées ou compétition, préparées et livrées prêtes à rouler sur les pistes malgaches.",
  },
  {
    slug: "casques",
    title: "Casques",
    sub: "Intégral, cross & jet",
    img: helmet,
    intro:
      "Coques composites légères et ventilation active, pensées pour la chaleur tropicale et les longues sorties.",
  },
  {
    slug: "pieces",
    title: "Pièces détachées",
    sub: "Freinage, transmission & filtration",
    img: parts,
    intro:
      "Plus de 2000 références en stock : freinage, transmission, filtration, suspension et consommables.",
  },
  {
    slug: "equipements",
    title: "Équipements",
    sub: "Tenues et protections",
    img: apparel,
    intro:
      "Maillots, pantalons, bottes, gants et protections corporelles des plus grandes marques off-road.",
  },
  {
    slug: "accessoires",
    title: "Accessoires",
    sub: "Bagagerie, éclairage & entretien",
    img: parts,
    intro:
      "Tout ce qui complète la moto au quotidien : bagagerie, protections, éclairage et produits d'entretien.",
  },
];

export const products: Product[] = [
  {
    slug: "sef-250-factory",
    name: "SEF 250 Factory",
    category: "motos",
    brand: "Sherco",
    type: "Enduro",
    images: [bike1, bike2, parts],
    short: "Enduro 4 temps polyvalent, châssis affûté et suspensions KYB.",
    desc: "Nouveau disque arrière Galfer, ligne d'échappement complète et kit déco usine. Un châssis affûté et des suspensions fermées KYB pour enchaîner les spéciales sans fatigue, du single technique aux pistes rapides.",
    specs: [
      { label: "Cylindrée", value: "249 cm³" },
      { label: "Moteur", value: "4 temps" },
      { label: "Poids", value: "105 kg" },
      { label: "Suspensions", value: "KYB fermée" },
    ],
    docs: [{ label: "Fiche technique SEF 250", href: "#" }],
    options: {
      label: "Finition",
      values: ["Standard", "Factory", "Factory + pack piste"],
    },
    colors: [
      { name: "Bleu usine", hex: "#1f4fd8" },
      { name: "Noir mat", hex: "#1a1a1a" },
      { name: "Orange ember", hex: "#e2542a" },
    ],
  },
  {
    slug: "xx-125",
    name: "XX 125",
    category: "motos",
    brand: "Fantic",
    type: "Motocross",
    images: [bike2, bike1],
    short: "Deux temps compact, explosif et parfaitement maîtrisable.",
    desc: "Double championne du monde junior. Rapport poids/puissance redoutable, partie-cycle taillée pour le motocross comme pour les pistes rapides, et une ergonomie pensée pour les gabarits légers.",
    specs: [
      { label: "Cylindrée", value: "125 cm³" },
      { label: "Moteur", value: "2 temps" },
      { label: "Poids", value: "92 kg" },
      { label: "Réservoir", value: "7,2 L" },
    ],
    options: {
      label: "Préparation",
      values: ["Origine", "Pack compétition", "Pack compétition + suivi"],
    },
    colors: [
      { name: "Rouge course", hex: "#c62828" },
      { name: "Blanc", hex: "#e8e8e8" },
    ],
  },
  {
    slug: "raider-125",
    name: "Raider 125",
    category: "motos",
    brand: "TVS",
    type: "Roadster",
    images: [bike1, bike2],
    short: "Roadster urbain nerveux, sobre et facile à entretenir.",
    desc: "Le roadster qui domine la circulation de Tana : couple disponible dès les bas régimes, freinage combiné, tableau de bord digital et consommation contenue. Entretien simple et pièces disponibles partout sur l'île.",
    specs: [
      { label: "Cylindrée", value: "124,8 cm³" },
      { label: "Moteur", value: "4 temps" },
      { label: "Poids", value: "123 kg" },
      { label: "Consommation", value: "≈ 2,2 L/100 km" },
    ],
    options: { label: "Équipement", values: ["Base", "Confort", "Sport"] },
    colors: [
      { name: "Noir mat", hex: "#1c1c1c" },
      { name: "Rouge", hex: "#b8261f" },
    ],
  },
  {
    slug: "ntorq-125",
    name: "NTorq 125",
    category: "motos",
    brand: "TVS",
    type: "Scooter",
    images: [bike2, bike1, apparel],
    short: "Scooter connecté, coffre spacieux et accélérations franches.",
    desc: "Scooter 125 au tempérament sportif : compteur connecté Bluetooth, coffre pouvant accueillir un casque intégral, éclairage LED intégral et selle deux places confortable pour les trajets quotidiens.",
    specs: [
      { label: "Cylindrée", value: "124,8 cm³" },
      { label: "Transmission", value: "CVT automatique" },
      { label: "Coffre", value: "22 L" },
      { label: "Poids", value: "116 kg" },
    ],
    options: { label: "Finition", values: ["Race Edition", "Super Squad"] },
    colors: [
      { name: "Jaune", hex: "#d9a300" },
      { name: "Gris mat", hex: "#4a4d52" },
    ],
  },
  {
    slug: "king-deluxe-tricycle",
    name: "King Deluxe",
    category: "motos",
    brand: "TVS",
    type: "Tricycle",
    images: [bike1, parts],
    short: "Tricycle robuste pour le transport de personnes et de charges.",
    desc: "Conçu pour un usage professionnel intensif : châssis renforcé, suspension arrière à lames, faible consommation et coût d'exploitation maîtrisé. La référence du transport urbain et périurbain à Madagascar.",
    specs: [
      { label: "Cylindrée", value: "199,3 cm³" },
      { label: "Charge utile", value: "500 kg" },
      { label: "Places", value: "3 + conducteur" },
      { label: "Démarrage", value: "Électrique / kick" },
    ],
    options: { label: "Configuration", values: ["Passagers", "Cargo bâché"] },
    colors: [
      { name: "Bleu", hex: "#1f4fd8" },
      { name: "Jaune", hex: "#d9a300" },
    ],
  },
  {
    slug: "trail-300-adventure",
    name: "Trail 300 Adventure",
    category: "motos",
    brand: "Sherco",
    type: "Trail",
    images: [bike1, bike2, apparel],
    short: "Trail routier prêt pour les longues liaisons sur les RN.",
    desc: "Confort de selle, protège-mains, sabot moteur et grande autonomie : la monture idéale pour relier Tana à la côte sans compromis, avec une partie-cycle assez tolérante pour attaquer les pistes en fin de parcours.",
    specs: [
      { label: "Cylindrée", value: "298 cm³" },
      { label: "Moteur", value: "4 temps" },
      { label: "Poids", value: "148 kg" },
      { label: "Autonomie", value: "≈ 420 km" },
    ],
    options: { label: "Bagagerie", values: ["Sans", "Top-case 45 L", "Kit 3 valises"] },
    colors: [
      { name: "Sable", hex: "#c9a870" },
      { name: "Gris anthracite", hex: "#3a3d42" },
    ],
  },
  {
    slug: "casque-off-road-pro",
    name: "Off-Road Pro",
    category: "casques",
    brand: "MT Helmets",
    type: "Casque cross",
    images: [helmet, apparel],
    short: "Coque composite ultra-légère à ventilation active.",
    desc: "Intérieur amovible et lavable, mentonnière large compatible masque, 14 entrées d'air pour évacuer la chaleur. Homologué ECE 22.06, il combine légèreté et confort sur les très longues sorties.",
    specs: [
      { label: "Poids", value: "1180 g" },
      { label: "Norme", value: "ECE 22.06" },
      { label: "Coque", value: "Fibre composite" },
      { label: "Tailles", value: "XS → XXL" },
    ],
    docs: [{ label: "Notice d'homologation ECE", href: "#" }],
    options: { label: "Taille", values: ["S", "M", "L", "XL"] },
    colors: [
      { name: "Noir mat", hex: "#161616" },
      { name: "Blanc/Orange", hex: "#e2542a" },
      { name: "Camo", hex: "#5b6748" },
    ],
  },
  {
    slug: "casque-cross-carbone",
    name: "Cross Carbone",
    category: "casques",
    brand: "Troy Lee Designs",
    type: "Casque cross",
    images: [helmet, parts],
    short: "Carbone intégral et joues à extraction rapide pour la compétition.",
    desc: "Structure 100 % carbone, système de réduction des rotations lors des impacts obliques et joues d'urgence à extraction rapide. Le choix des pilotes qui cherchent le poids le plus contenu.",
    specs: [
      { label: "Poids", value: "980 g" },
      { label: "Norme", value: "ECE 22.06" },
      { label: "Coque", value: "Carbone" },
      { label: "Tailles", value: "S → XL" },
    ],
    options: { label: "Taille", values: ["S", "M", "L", "XL"] },
    colors: [
      { name: "Carbone brut", hex: "#232323" },
      { name: "Rouge", hex: "#b8261f" },
    ],
  },
  {
    slug: "casque-integral-route",
    name: "Integral Road",
    category: "casques",
    brand: "MT Helmets",
    type: "Casque intégral",
    images: [helmet, apparel, parts],
    short: "Intégral route avec écran solaire intégré et intérieur lavable.",
    desc: "Un intégral polyvalent pour la route et les liaisons : écran principal anti-rayures avec préparation Pinlock, écran solaire escamotable, ventilations réglables et coque en thermoplastique injecté.",
    specs: [
      { label: "Poids", value: "1450 g" },
      { label: "Norme", value: "ECE 22.06" },
      { label: "Écran", value: "Solaire intégré" },
      { label: "Tailles", value: "XS → XXL" },
    ],
    options: { label: "Taille", values: ["S", "M", "L", "XL"] },
    colors: [
      { name: "Noir brillant", hex: "#121212" },
      { name: "Gris", hex: "#6b6f76" },
    ],
  },
  {
    slug: "kit-freinage-galfer",
    name: "Kit freinage Wave",
    category: "pieces",
    brand: "Galfer",
    type: "Freinage",
    images: [parts, bike1],
    short: "Disque wave et plaquettes frittées, mordant constant.",
    desc: "Mordant constant même à haute température et sous la boue. Montage direct sans adaptateur sur la majorité des enduros du marché, avec un disque wave qui évacue l'eau et limite la surchauffe.",
    specs: [
      { label: "Diamètre", value: "270 mm" },
      { label: "Matière", value: "Acier inox" },
      { label: "Plaquettes", value: "Frittées" },
      { label: "Garantie", value: "12 mois" },
    ],
    options: { label: "Position", values: ["Avant", "Arrière", "Avant + arrière"] },
    colors: [
      { name: "Inox", hex: "#9aa0a6" },
      { name: "Noir", hex: "#1c1c1c" },
    ],
  },
  {
    slug: "kit-chaine-renforce",
    name: "Kit chaîne renforcé",
    category: "pieces",
    brand: "Bihr",
    type: "Transmission",
    images: [parts, bike2],
    short: "Couronne, pignon et chaîne à joints toriques anticorrosion.",
    desc: "Traitement anticorrosion adapté aux pistes humides et au sable, pour un entretien espacé et une transmission silencieuse. Livré complet avec attache rapide et notice de tension.",
    specs: [
      { label: "Pas", value: "520" },
      { label: "Maillons", value: "118" },
      { label: "Couronne", value: "Acier 50 dents" },
      { label: "Joints", value: "Toriques" },
    ],
    options: { label: "Démultiplication", values: ["Origine", "Couple court", "Vitesse longue"] },
    colors: [
      { name: "Or", hex: "#c9a227" },
      { name: "Noir", hex: "#1c1c1c" },
    ],
  },
  {
    slug: "filtre-air-double-densite",
    name: "Filtre à air double densité",
    category: "pieces",
    brand: "Bihr",
    type: "Filtration",
    images: [parts],
    short: "Mousse double densité lavable, idéale en usage poussiéreux.",
    desc: "Mousse à double densité pré-huilée qui retient la poussière fine des pistes latéritiques sans étouffer le moteur. Lavable et réutilisable de nombreuses fois avec le kit d'entretien adapté.",
    specs: [
      { label: "Matière", value: "Mousse double densité" },
      { label: "Entretien", value: "Lavable" },
      { label: "Livré", value: "Pré-huilé" },
      { label: "Garantie", value: "6 mois" },
    ],
    options: { label: "Conditionnement", values: ["À l'unité", "Lot de 2"] },
    colors: [{ name: "Vert", hex: "#5b6748" }],
  },
  {
    slug: "tenue-enduro-vent",
    name: "Tenue Enduro Vent",
    category: "equipements",
    brand: "Fantic Racing",
    type: "Tenue",
    images: [apparel, helmet],
    short: "Maillot et pantalon ultra-ventilés pour rouler par forte chaleur.",
    desc: "Mesh respirant, panneaux stretch aux genoux et renforts cuir aux zones de contact. Conçue pour rouler par plus de 35 °C sans perdre en liberté de mouvement ni en résistance à l'abrasion.",
    specs: [
      { label: "Composition", value: "Polyester mesh" },
      { label: "Renforts", value: "Cuir aux genoux" },
      { label: "Ceinture", value: "Réglable" },
      { label: "Tailles", value: "S → XXL" },
    ],
    options: { label: "Taille", values: ["S", "M", "L", "XXL"] },
    colors: [
      { name: "Noir/Orange", hex: "#e2542a" },
      { name: "Bleu nuit", hex: "#1f2a4d" },
      { name: "Gris", hex: "#6b6f76" },
    ],
  },
  {
    slug: "bottes-off-road-gaerne",
    name: "Bottes Off-Road",
    category: "equipements",
    brand: "Gaerne",
    type: "Bottes",
    images: [apparel, parts, bike1],
    short: "Protection tibia renforcée et boucles aluminium réglables.",
    desc: "Semelle remplaçable, coque de cheville articulée et boucles aluminium réglables. Le compromis confort/sécurité de référence pour l'enduro comme pour le motocross, avec un rodage rapide.",
    specs: [
      { label: "Coque", value: "Polyuréthane" },
      { label: "Semelle", value: "Remplaçable" },
      { label: "Boucles", value: "Aluminium x4" },
      { label: "Pointures", value: "39 → 47" },
    ],
    options: { label: "Pointure", values: ["41", "42", "44", "46"] },
    colors: [
      { name: "Noir", hex: "#161616" },
      { name: "Blanc", hex: "#e6e6e6" },
    ],
  },
  {
    slug: "gilet-protection-dorsale",
    name: "Gilet protection dorsale",
    category: "equipements",
    brand: "Gaerne",
    type: "Protection",
    images: [apparel],
    short: "Dorsale ventilée niveau 2, portée sous ou sur le maillot.",
    desc: "Protection dorsale homologuée niveau 2, structure alvéolaire ventilée et bretelles réglables. Se porte sous le maillot pour un maintien discret ou par-dessus pour un accès rapide.",
    specs: [
      { label: "Norme", value: "EN 1621-2 niveau 2" },
      { label: "Ventilation", value: "Alvéolaire" },
      { label: "Réglages", value: "Bretelles + ceinture" },
      { label: "Tailles", value: "S → XL" },
    ],
    options: { label: "Taille", values: ["S", "M", "L", "XL"] },
    colors: [{ name: "Noir", hex: "#161616" }],
  },
  {
    slug: "top-case-45l",
    name: "Top-case 45 L",
    category: "accessoires",
    brand: "Bihr",
    type: "Bagagerie",
    images: [parts, bike2],
    short: "Coffre étanche 45 L avec platine de fixation universelle.",
    desc: "Coffre rigide étanche de 45 litres, capable d'accueillir deux casques intégraux. Fermeture à clé, ouverture d'une seule main et platine universelle compatible avec la majorité des porte-bagages.",
    specs: [
      { label: "Volume", value: "45 L" },
      { label: "Étanchéité", value: "Joint périphérique" },
      { label: "Fixation", value: "Platine universelle" },
      { label: "Charge max", value: "5 kg" },
    ],
    options: { label: "Platine", values: ["Incluse", "Sans platine"] },
    colors: [{ name: "Noir", hex: "#1c1c1c" }],
  },
  {
    slug: "rampe-led-auxiliaire",
    name: "Rampe LED auxiliaire",
    category: "accessoires",
    brand: "Galfer",
    type: "Éclairage",
    images: [parts],
    short: "Éclairage additionnel longue portée pour les pistes de nuit.",
    desc: "Rampe LED compacte à faisceau combiné large et longue portée, boîtier aluminium étanche et faisceau de câblage avec relais fourni. Indispensable pour les liaisons nocturnes sur piste.",
    specs: [
      { label: "Puissance", value: "60 W" },
      { label: "Étanchéité", value: "IP68" },
      { label: "Boîtier", value: "Aluminium" },
      { label: "Faisceau", value: "Combo" },
    ],
    options: { label: "Montage", values: ["Guidon", "Sabot", "Pare-carter"] },
    colors: [{ name: "Noir", hex: "#1c1c1c" }],
  },
];

export const byCategory = (slug: CategorySlug) =>
  products.filter((p) => p.category === slug);

export const findProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const findCategory = (slug: CategorySlug) =>
  categories.find((c) => c.slug === slug);

/** Marques présentes dans un jeu de produits (ordre alphabétique) */
export const brandsOf = (items: Product[]) =>
  [...new Set(items.map((p) => p.brand))].sort((a, b) => a.localeCompare(b));

/** Types présents dans un jeu de produits (ordre alphabétique) */
export const typesOf = (items: Product[]) =>
  [...new Set(items.map((p) => p.type))].sort((a, b) => a.localeCompare(b));

const normalize = (v: string) =>
  v
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

/** Filtrage dynamique : recherche libre + catégorie + marque + type */
export function filterProducts(
  items: Product[],
  { query = "", brand = "", type = "" }: { query?: string; brand?: string; type?: string },
) {
  const q = normalize(query.trim());
  return items.filter((p) => {
    if (brand && p.brand !== brand) return false;
    if (type && p.type !== type) return false;
    if (!q) return true;
    const cat = findCategory(p.category)?.title ?? p.category;
    return normalize([p.name, p.brand, p.type, cat, p.short].join(" ")).includes(q);
  });
}
