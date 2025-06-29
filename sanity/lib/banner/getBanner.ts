import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getBanner = async () => {
  const BANNER_QUERY = defineQuery(`*[_type == "banner"] | order(name asc) {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    name,
    image {
      asset {
        _ref,
        _type
      },
      hotspot,
      crop
    }
  }`);
  try {
    const banner = await sanityFetch({
      query: BANNER_QUERY,
    });
    return banner.data || [];
  } catch (error) {
    console.error("Error fetching banner:", error);
    return [];
  }
};
