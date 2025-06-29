import React from "react";
import { Product } from "@/sanity.types";
import Link from "next/link";
import { imageUrl } from "@/lib/imageUrl";
import Image from "next/image";

function ProductThumb({ product }: { product: Product }) {
  const isOutOfStock = product.stock != null && product.stock <= 0;
  return (
    <Link
      href={`/product/${product.slug?.current}`}
      className={`flex flex-col items-center justify-center p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden 
      ${isOutOfStock ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {" "}
      <div className="relative aspect-square w-full h-full overflow-hidden">
        {product.image && (
          <Image
            className="object-fill transition-transform duration-300 group-hover:scale-105"
            src={imageUrl(product.image).url()}
            alt={product.name || "Product Image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {isOutOfStock && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-normal text-gray-900 truncate">
          {product.name}
        </h2>
        <p className="mt-2 text-sm text-gray-800 line-clamp-3">
          {product.description
            ?.map((block) =>
              block._type === "block"
                ? block.children?.map((child) => child.text).join("")
                : ""
            )
            .join(" ") || "No description available."}
        </p>
        <p className="mt-2 text-lg font-semibold text-gray-900">
          ${product.price?.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}

export default ProductThumb;
