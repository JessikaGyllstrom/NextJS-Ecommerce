import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getProductsBySlug = async (slug: string) => {
  const Product_BY_ID_QUERY =
    defineQuery(`*[_type == "product" && slug.current == $slug
]|order(name asc)[0]`);
  try {
    const product = await sanityFetch({
      query: Product_BY_ID_QUERY,
      params: { slug },
    });
    return product.data || {};
  } catch (error) {
    console.error("Error fetching product by slug:", error);
    return {};
  }
};
