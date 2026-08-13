import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/funbike/CategoryPage";

const title = "Casques off-road homologués — Funbike Madagascar";
const description =
  "Casques cross et enduro homologués ECE 22.06 : coques composites et carbone, ventilation active, tailles XS à XXL.";

export const Route = createFileRoute("/casques")({
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
  component: () => <CategoryPage slug="casques" />,
});
