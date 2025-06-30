import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getProductsByCategory = async (categorySlug: string) => {
  const PRODUCTS_BY_CATEGORY_QUERY =
    defineQuery(`*[_type == "product" && $categorySlug in categories[]->slug.current] {
    name,
    price,
    description,
    image,
    categories[]->{
      title,
      slug
    }
  }`);
  try {
    const products = await sanityFetch({
      query: PRODUCTS_BY_CATEGORY_QUERY,
      params: { categorySlug },
    });
    return products.data || [];
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
};
