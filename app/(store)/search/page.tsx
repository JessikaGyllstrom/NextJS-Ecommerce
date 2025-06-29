import ProductGrid from "@/components/ProductGrid";
import { searchProductsByName } from "@/sanity/lib/products/searchProductsByName";
import React from "react";

async function SearchPage({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const { query } = await searchParams;
  const products = await searchProductsByName(query);

  if (!products.length)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold">No products found for `{query}`</h1>
        <p className="mt-2 text-gray-600">
          Try searching with different keywords.{" "}
        </p>
      </div>
    );
  return (
    <div className="flex flex-col items-center justify-top min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for `{query}`</h1>
      <ProductGrid products={products} />
    </div>
  );
}

export default SearchPage;
