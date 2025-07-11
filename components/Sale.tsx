import React from "react";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";
import { imageUrl } from "@/lib/imageUrl";
import Image from "next/image";

async function Sale() {
  const saleData = await getActiveSaleByCouponCode("SALE20");

  const sale = saleData?.[0];

  if (!sale?.isActive) {
    console.log("No active sale found or sale is not active");
    return null;
  }

  return (
    <section className="w-full py-10">
      <div className="container mx-auto flex flex-col items-center">
        {sale.image && (
          <div className="relative w-screen h-[90vh]">
            <Image
              src={imageUrl(sale.image).url()}
              alt={sale.title || "Sale Image"}
              layout="fill"
              objectFit="cover"
              className="shadow-lg"
            />
            <div className="w-full py-10">
              <div className="container mx-auto flex flex-col items-center">
                {sale.image && (
                  <div className="relative w-screen h-[90vh]">
                    {/* Image */}
                    <Image
                      src={imageUrl(sale.image).url()}
                      alt={sale.title || "Sale Image"}
                      layout="fill"
                      objectFit="cover"
                      className="shadow-lg"
                    />
                    <div className="absolute top-5 px-4 lg:w-1/2 lg:right-22 text-center lg:text-left">
                      <h2 className=" text-black font-bold text-4xl py-2 rounded-lg">
                        {sale.title ? (
                          <>
                            <span className="block">
                              {sale.title.split(" ").slice(0, 3).join(" ")}
                            </span>
                            <span className="block mt-6 md:text-6xl ">
                              {sale.title.split(" ").slice(3, 8).join(" ")}
                            </span>
                          </>
                        ) : (
                          "Don't miss out on this amazing offer!"
                        )}
                      </h2>
                      <p className="mt-6 px-4 lg:pr-12 text-lg weight-light text-zinc-900 break-words">
                        {sale.description || "Special Sale"}
                      </p>
                      <h3 className="mt-2 text-lg break-words">
                        Use Coupon Code{" "}
                        <span className="font-semibold text-xl break-words">
                          SALE20
                        </span>{" "}
                        in Checkout
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Sale;
