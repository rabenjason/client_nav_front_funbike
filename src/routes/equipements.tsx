import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/funbike/CategoryPage";

const title = "Équipements et tenues off-road — Funbike Madagascar";
const description =
  "Maillots, pantalons, bottes, gants et protections corporelles pour rouler protégé sous le climat malgache.";

export const Route = createFileRoute("/equipements")({
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
  component: () => <CategoryPage slug="equipements" />,
});
