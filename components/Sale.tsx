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
                      alt={sale.name || "Sale Image"}
                      layout="fill"
                      objectFit="cover"
                      className="shadow-lg"
                    />
                    <div className="absolute right-11 top-1/3 transform -translate-y-1/2 w-1/2">
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
                      <p className="mt-6 pr-12 text-lg weight-light text-zinc-900 break-words">
                        {sale.description || "Special Sale"}
                      </p>
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
