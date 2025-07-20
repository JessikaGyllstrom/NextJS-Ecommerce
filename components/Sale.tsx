import React from "react";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";
import { imageUrl } from "@/lib/imageUrl";
import Image from "next/image";

async function Sale() {
  const saleData = await getActiveSaleByCouponCode("SALE20");

  const sale = saleData?.[0];

  if (!sale?.isActive) {
    return null;
  }

  return (
    <section className="w-full py-10">
      <div className="container mx-auto flex flex-col items-center">
        {sale.image && (
          <div className="relative w-screen h-[100vh]">
            <Image
              src={imageUrl(sale.image).url()}
              alt={sale.title || "Sale Image"}
              fill
              style={{ objectFit: "cover" }}
              className="shadow-lg"
            />
            <div className="w-full py-10">
              <div className="container mx-auto flex flex-col items-center">
                {sale.image && (
                  <div className="relative w-screen  h-[100vh]">
                    <Image
                      src={imageUrl(sale.image).url()}
                      alt={sale.title || "Sale Image"}
                      fill
                      style={{ objectFit: "cover" }}
                      className="shadow-lg"
                    />
                    <div className="absolute top-5 px-4 lg:w-1/3 lg:right-50 text-center lg:top-35 lg:text-left">
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
                      <p className="mt-1 px-4 lg:px-0 text-lg text-black break-words lg:text-xl">
                        {sale.description || "Special Sale"}
                      </p>
                      <h3 className="mt-2 text-lg break-words text-black lg:text-xl">
                        Use coupon code{" "}
                        <span className="font-semibold text-xl break-words  text-black ">
                          SALE20
                        </span>{" "}
                        in checkout
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
