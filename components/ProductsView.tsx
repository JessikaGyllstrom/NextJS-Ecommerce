"use client";

import React from "react";

import { Category, Product } from "../sanity.types";
import ProductGrid from "./ProductGrid";
import CategorySelector from "./CategorySelector";

interface ProductsViewProps {
  products: Product[];
  categories: Category[];
}

function ProductsView({ products, categories }: ProductsViewProps) {
  return (
    <div className="flex flex-col">
      {/* Categories */}

      <div className="flex-1">
        <div>
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}

export default ProductsView;
