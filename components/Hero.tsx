"use client";
import React from "react";

import type { Hero } from "../sanity.types";
import { imageUrl } from "@/lib/imageUrl";
import Image from "next/image";
import { Button } from "./ui/button";

interface HeroProps {
  hero: Hero[];
}

function Hero({ hero }: HeroProps) {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      setTimeout(() => {
        productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };
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
          <div className="absolute top-1/5 px-4 md:w-1/2 md:right-22 text-center md:text-left">
            <h1 className="font-bold text-3xl md:text-6xl text-zinc-900 py-1">
              {item.name?.split(" ").slice(0, 3).join(" ")} <br />{" "}
              {item.name?.split(" ").slice(3, 5).join(" ")}
              <span className="ml-2 text-sage-500">
                {item.name?.split(" ").slice(-1)}
              </span>
            </h1>
            <div className="text-center md:text-left">
              <p className="mt-2 px-6 md:text-xl text-zinc-900 md:px-0">
                {item.description
                  ?.map((block) =>
                    block._type === "block"
                      ? block.children?.map((child) => child.text).join("")
                      : ""
                  )
                  .join(" ") || "No description available."}
              </p>
            </div>
            <Button
              onClick={scrollToProducts}
              className="my-4 max-w-xs rounded-none px-12 py-6 text-white bg-sage-500 md:text-xl cursor-pointer shadow-xl hover:bg-sage-400"
            >
              Shop Now
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hero;
