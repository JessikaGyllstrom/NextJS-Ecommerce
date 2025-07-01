"use client";

import useBasketStore from "@/app/(store)/store";
import { Product } from "@/sanity.types";
import { useEffect, useState } from "react";

interface AddToCartButtonProps {
  product: Product;
  disabled?: boolean;
}

function AddToCartButton({ product, disabled }: AddToCartButtonProps) {
  const { addItem, removeItem } = useBasketStore();
  const itemCount = useBasketStore.getState().getItemCount(product._id);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={() => removeItem(product._id)}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200} ${
          itemCount === 0
            ? "bg-gray-100 cursor-not-allowed"
            : "bg-gray-300 hover:bg-gray-300"
        }`}
        disabled={itemCount === 0 || disabled}
      >
        <span
          className={`text-xl text-gray-700 font-semibold ${itemCount === 0 ? "text-gray-400" : "text-gray-400"}`}
        >
          -
        </span>
      </button>
      <span className="w-8 text-center font-semibold">{itemCount}</span>
      <button
        onClick={() => {
          addItem(product);
        }}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200} ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-sage-500 hover:bg-blush-900 cursor-pointer"
        }`}
        disabled={disabled}
      >
        <span className="text-xl text-white font-semibold">+</span>
      </button>
    </div>
  );
}
export default AddToCartButton;
