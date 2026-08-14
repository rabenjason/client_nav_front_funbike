import { products as fallbackProducts, type Product } from "./products";

const GRAPHQL_ENDPOINT = "http://localhost:4000/graphql";

const PRODUCTS_QUERY = `
  query Products {
    products {
      id
      slug
      name
      title
      brand
      type
      category
      description
      shortDescription
      image
      images
      price
    }
  }
`;

type GraphQLProduct = Record<string, unknown>;

function stringValue(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function imageList(value: unknown) {
  if (Array.isArray(value)) return value.filter((item): item is string => typeof item === "string");
  if (typeof value === "string" && value.length > 0) return [value];
  return [];
}

function normalizeProduct(raw: GraphQLProduct, index: number): Product | null {
  const name = stringValue(raw.name, stringValue(raw.title));
  if (!name) return null;
  const fallback = fallbackProducts[index % fallbackProducts.length];
  const category = stringValue(raw.category, fallback.category) as Product["category"];
  const images = imageList(raw.images);
  const image = stringValue(raw.image);

  return {
    ...fallback,
    slug: stringValue(raw.slug, stringValue(raw.id, fallback.slug)),
    name,
    brand: stringValue(raw.brand, fallback.brand),
    type: stringValue(raw.type, fallback.type),
    category,
    short: stringValue(raw.shortDescription, stringValue(raw.description, fallback.short)),
    desc: stringValue(raw.description, fallback.desc),
    images: images.length > 0 ? images : image ? [image] : fallback.images,
  };
}

export async function getGraphQLProducts(): Promise<Product[]> {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ query: PRODUCTS_QUERY }),
      signal: AbortSignal.timeout(2500),
    });
    if (!response.ok) throw new Error(`GraphQL responded with ${response.status}`);
    const payload = (await response.json()) as { data?: { products?: GraphQLProduct[] }; errors?: unknown[] };
    if (payload.errors?.length || !Array.isArray(payload.data?.products)) throw new Error("Invalid GraphQL response");
    const normalized = payload.data.products.map(normalizeProduct).filter((product): product is Product => product !== null);
    return normalized.length > 0 ? normalized : fallbackProducts;
  } catch {
    return fallbackProducts;
  }
}

export { PRODUCTS_QUERY };
