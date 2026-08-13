import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/funbike/CategoryPage";

const title = "Motos enduro, cross & trail — Funbike Madagascar";
const description =
  "Découvrez la gamme moto Funbike Madagascar : enduro, cross et trail, livrées prêtes à rouler avec garantie usine et atelier certifié.";

export const Route = createFileRoute("/motos")({
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
  component: () => <CategoryPage slug="motos" />,
});
