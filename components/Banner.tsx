import React from "react";

import type { Banner } from "../sanity.types";
import { imageUrl } from "@/lib/imageUrl";
import Image from "next/image";

interface BannerProps {
  banner: Banner[];
}

function Banner({ banner }: BannerProps) {
  return (
    <div
      id="products-section"
      className="flex w-screen bg-sage-500 justify-center h-44"
    >
      {banner.map((item) => (
        <div
          className="flex flex-col items-center px-6 justify-center text-center"
          key={item._id}
        >
          <Image
            className="max-w-14"
            src={item.image ? imageUrl(item.image).url() : ""}
            alt={item.name || "Product Image"}
            width={50}
            height={50}
          />
          <p className="text-xs text-white font-normal pt-2 md:text-lg">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Banner;
