import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/funbike/CategoryPage";

const title = "Pièces détachées moto — Funbike Madagascar";
const description =
  "Plus de 2000 références en stock : freinage, transmission, filtration et consommables d'origine pour votre moto off-road.";

export const Route = createFileRoute("/pieces")({
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
  component: () => <CategoryPage slug="pieces" />,
});
