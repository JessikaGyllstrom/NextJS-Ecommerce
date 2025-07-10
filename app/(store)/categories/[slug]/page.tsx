import React from "react";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getProductsByCategory } from "@/sanity/lib/products/getProductsByCategory";
import ProductsView from "@/components/ProductsView";
import CategorySelector from "@/components/CategorySelector";

async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const products = await getProductsByCategory(slug);
  const categories = await getAllCategories();
  return (
    <div className="flex flex-col w-screen justify-end items-center justify-top p-4">
      <h1 className="text-3xl font-bold p-8">
        {slug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}{" "}
        Collection
      </h1>
      <CategorySelector categories={categories} />
      <ProductsView products={products} />
    </div>
  );
}

export default CategoryPage;
