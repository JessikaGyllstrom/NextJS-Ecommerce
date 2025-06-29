import React from "react";

import type { Hero } from "../sanity.types";
import { imageUrl } from "@/lib/imageUrl";
import Image from "next/image";

interface HeroProps {
  hero: Hero[];
}

function Hero({ hero }: HeroProps) {
  console.log("Banner component rendered with hero:", hero);
  return (
    <div className="flex h-screen">
      {/* Categories */}
      {/* <CategorySelectorComponent /> */}
      <div className="flex w-screen justify-center">
        {hero.map((item, idx) => (
          <div
            key={idx}
            className="relative aspect-square sm:aspect-[16/9] w-full"
          >
            <Image
              src={item.image ? imageUrl(item.image).url() : ""}
              alt={item.name || "Hero image"}
              fill
              className="object-cover opacity-40 md:opacity-100"
            />

            <div className="z-20 absolute flex flex-col items-left top-40 py-6 md:w-[50%] md:right-6">
              <h1 className="font-bold text-3xl md:text-6xl text-zinc-900 px-2 py-1 rounded text-center md:text-left">
                {item.name?.split(" ").slice(0, 3).join(" ")} <br />{" "}
                {item.name?.split(" ").slice(3, 5).join(" ")}
                <span className="ml-2 text-sage-500">
                  {item.name?.split(" ").slice(-1)}
                </span>
              </h1>
              <div className="px-10 text-center md:text-left md:px-2 md:w-[70%] ">
                <p className="mt-2 text-md text-zinc-900">
                  {item.description
                    ?.map((block) =>
                      block._type === "block"
                        ? block.children?.map((child) => child.text).join("")
                        : ""
                    )
                    .join(" ") || "No description available."}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
