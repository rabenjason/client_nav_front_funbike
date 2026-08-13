export type Dealer = {
  slug: string;
  name: string;
  city: string;
  address: string;
  hours: string;
  phone1: string;
  phone2?: string;
  email: string;
  desc: string;
  lat: number;
  lng: number;
};

export const dealers: Dealer[] = [
  {
    slug: "funbike-showroom",
    name: "Funbike Showroom",
    city: "Antananarivo",
    address: "Ambodivona, Antananarivo",
    hours: "Lun – Sam · 8h30 – 17h30",
    phone1: "+261 34 00 000 00",
    phone2: "+261 32 00 000 00",
    email: "showroom@funbike.mg",
    desc: "Le showroom principal : exposition complète des motos, casques, pièces et atelier technique agréé.",
    lat: -18.8869,
    lng: 47.5313,
  },
  {
    slug: "funbike-est",
    name: "Funbike Est",
    city: "Toamasina",
    address: "Boulevard Joffre, Toamasina",
    hours: "Lun – Ven · 9h – 17h",
    phone1: "+261 34 11 111 11",
    email: "est@funbike.mg",
    desc: "Point de vente et service dédié à la côte est : motos, équipements et entretien rapide.",
    lat: -18.1492,
    lng: 49.4023,
  },
  {
    slug: "funbike-nord-ouest",
    name: "Funbike Nord-Ouest",
    city: "Mahajanga",
    address: "Avenue de France, Mahajanga",
    hours: "Lun – Ven · 9h – 17h",
    phone1: "+261 34 22 222 22",
    phone2: "+261 33 22 222 22",
    email: "nordouest@funbike.mg",
    desc: "Revendeur agréé du Nord-Ouest : scooters, roadsters et pièces détachées d'origine.",
    lat: -15.7167,
    lng: 46.3167,
  },
  {
    slug: "atelier-partenaire",
    name: "Atelier Partenaire",
    city: "Fianarantsoa",
    address: "Route nationale 7, Fianarantsoa",
    hours: "Lun – Sam · 8h – 16h",
    phone1: "+261 34 33 333 33",
    email: "sud@funbike.mg",
    desc: "Atelier partenaire des Hautes Terres : entretien, réparation et conseil technique.",
    lat: -21.4536,
    lng: 47.0854,
  },
];
