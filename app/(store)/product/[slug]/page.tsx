import { getProductsBySlug } from "@/sanity/lib/products/getProductBySlug";
import React from "react";
import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";
import { Product } from "@/sanity.types";
import { PortableText } from "next-sanity";

async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = (await getProductsBySlug(slug)) as Product;
  const isOutOfStock = product.stock != null && product.stock <= 0;

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[100vh] p-4">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className={`relative aspect-square overflow-hidden rounded-lg shadow-lg ${isOutOfStock ? "opacity-50" : ""}`}
        >
          {product.image && (
            <Image
              src={imageUrl(product.image).url()}
              alt={product.name ?? "Product Image"}
              fill
              className="object-contain transition-transform duration-300 hover:scale-105"
            />
          )}
          {isOutOfStock && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between">
          <div className="">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="text-lg text-gray-800 mb-4">
              ${product.price?.toFixed(2)}
            </div>
            <div className="prose text-gray-600 mb-4">
              {Array.isArray(product.description) && (
                <PortableText value={product.description} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
