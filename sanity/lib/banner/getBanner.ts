import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getBanner = async () => {
  const BANNER_QUERY = defineQuery(`*[_type == "banner"] {
  ...
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
