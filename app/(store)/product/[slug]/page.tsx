import { getProductsBySlug } from "@/sanity/lib/products/getProductBySlug";
import React from "react";
import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";
import { Product } from "@/sanity.types";
import { PortableText } from "next-sanity";
import AddToCartButton from "@/components/AddToCartButton";

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
    <div className="container mx-auto px-4 py-8 lg:mb-16 min-h-[100vh]md:py-24 lg:max-w-[70vw] mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className={`relative aspect-square overflow-hidden rounded-lg shadow-lg ${isOutOfStock ? "opacity-50" : ""}`}
        >
          {product.image && (
            <Image
              src={imageUrl(product.image).url()}
              alt={product.name ?? "Product Image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="transition-transform duration-300 hover:scale-105"
              priority
            />
          )}
          {isOutOfStock && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between py-6">
          <div className="">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="text-lg text-gray-800 mb-4">
              ${product.price?.toFixed(2)}
            </div>
            <div className="prose text-gray-800 mb-4 text-md">
              {Array.isArray(product.description) && (
                <PortableText value={product.description} />
              )}
            </div>
            <div className="flex items-center justify-between mt-6">
              <AddToCartButton product={product} disabled={isOutOfStock} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
