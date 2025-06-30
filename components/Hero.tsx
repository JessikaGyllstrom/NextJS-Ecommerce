import React from "react";

import type { Hero } from "../sanity.types";
import { imageUrl } from "@/lib/imageUrl";
import Image from "next/image";
import { Button } from "./ui/button";

interface HeroProps {
  hero: Hero[];
}

function Hero({ hero }: HeroProps) {
  return (
    <div className=" mx-auto flex flex-col items-center">
      {hero.map((item, idx) => (
        <div key={idx} className="relative w-screen h-[95vh]">
          <Image
            src={item.image ? imageUrl(item.image).url() : ""}
            alt={item.name || "Hero image"}
            layout="fill"
            objectFit="cover"
          />

          <div className="absolute right-18 top-1/3 transform -translate-y-1/2 w-1/2">
            <h1 className="font-bold text-6xl text-zinc-900 py-1 text-left">
              {item.name?.split(" ").slice(0, 3).join(" ")} <br />{" "}
              {item.name?.split(" ").slice(3, 5).join(" ")}
              <span className="ml-2 text-sage-500">
                {item.name?.split(" ").slice(-1)}
              </span>
            </h1>
            <div className="text-left md:px-2 md:w-[70%] ">
              <p className="mt-2 pr-3 text-xl text-zinc-900">
                {item.description
                  ?.map((block) =>
                    block._type === "block"
                      ? block.children?.map((child) => child.text).join("")
                      : ""
                  )
                  .join(" ") || "No description available."}
              </p>
            </div>
            <Button className="my-4 mx-2 rounded-none px-12 py-6 text-white bg-sage-500 text-lg cursor-pointer shadow-xl hover:bg-sage-400">
              Shop Now
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hero;
