import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getHero = async () => {
  const HERO_QUERY = defineQuery(`*[_type == "hero"] | order(name asc) {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    title,
    description,
    image {
      asset {
        _ref,
        _type
      },
      hotspot,
      crop
    }, 
    heroIcon {
      asset {
        _ref,
        _type
      },
      hotspot,
      crop
    }
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
