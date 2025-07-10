import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getHero = async () => {
  const HERO_QUERY = defineQuery(`*[_type == "hero"] {
     ...
  }`);
  try {
    const hero = await sanityFetch({
      query: HERO_QUERY,
    });
    return hero.data || [];
  } catch (error) {
    console.error("Error fetching hero:", error);
    return [];
  }
};
