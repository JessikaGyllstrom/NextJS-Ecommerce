import React from "react";

import type { Banner } from "../sanity.types";
import { imageUrl } from "@/lib/imageUrl";
import Image from "next/image";

interface BannerProps {
  banner: Banner[];
}

function Banner({ banner }: BannerProps) {
  return (
    <div className="flex w-screen bg-pink-300">
      {/* Categories */}
      {/* <CategorySelectorComponent /> */}
      <div className="flex w-screen bg-sage-500 justify-center h-32 my-4 px-2">
        {banner.map((item) => (
          <div
            className="flex flex-col items-center px-4 justify-center"
            key={item._id}
          >
            <Image
              className="max-w-14"
              src={item.image ? imageUrl(item.image).url() : ""}
              alt={item.name || "Product Image"}
              width={60}
              height={60}
            />
            <p className="text-white font-normal pt-2">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
