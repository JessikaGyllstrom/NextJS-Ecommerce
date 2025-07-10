"use client";

import React from "react";

import { Product } from "../sanity.types";
import ProductGrid from "./ProductGrid";

interface ProductsViewProps {
  products: Product[];
}

function ProductsView({ products }: ProductsViewProps) {
  return (
    <div className="flex flex-col">
      <div className="flex-1">
        <div>
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}

export default ProductsView;
