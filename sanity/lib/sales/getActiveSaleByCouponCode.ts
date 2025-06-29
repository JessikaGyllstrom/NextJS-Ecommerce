import { CouponCode } from "./couponCodes";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getActiveSaleByCouponCode = async (couponCode: CouponCode) => {
  const ACTIVE_SALE_BY_COUPON_QUERY = defineQuery(`*[
      _type == "sale" && couponCode == $couponCode && isActive == true
    ] {
      title,
      description,
      discountPercentage,
      isActive,
      image {
          
            asset {
            _ref,
            _type
            },
            hotspot,
            crop
        },
      }`);

  const params = { couponCode };

  try {
    const activeSale = await sanityFetch({
      query: ACTIVE_SALE_BY_COUPON_QUERY,
      params: { couponCode },
    });
    console.log("Active Sale Data:", activeSale);
    return activeSale ? activeSale.data : null;
  } catch (error) {
    console.error("Error fetching active sale by coupon code:", error);
    return null;
  }
};
