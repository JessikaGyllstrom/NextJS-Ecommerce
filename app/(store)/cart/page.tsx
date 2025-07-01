"use client";
import React from "react";
import useBasketStore from "../store";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";

function CartPage() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  const [isClient, setIsClient] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const groupedItems = useBasketStore((state) => state.getGroupedItems());

  if (groupedItems.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-semibold text-gray-700">
          Your cart is empty
        </div>
      </div>
    );
  }
  console.log("groupedItems", groupedItems);

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          {groupedItems.map((item) => (
            <div
              key={item.product._id}
              className="mb-4 p-4 border rounded-lg shadow-sm flex justify-between items-center"
            >
              <div className="flex items-center">{item.product.name}</div>
              <div>{item.quantity}</div>
              <div className="flex items-center ml-4 flex-shrink-0">
                <AddToCartButton
                  product={item.product}
                  disabled={item.quantity <= 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
