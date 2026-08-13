import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/funbike/CategoryPage";

const title = "Accessoires moto — Funbike Madagascar";
const description =
  "Bagagerie, éclairage additionnel, protections et produits d'entretien pour équiper votre moto au quotidien.";

export const Route = createFileRoute("/accessoires")({
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
  component: () => <CategoryPage slug="accessoires" />,
});
