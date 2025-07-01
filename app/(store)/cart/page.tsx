"use client";
import React, { useEffect } from "react";
import useBasketStore from "../store";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";
import { Loader } from "lucide-react";

function CartPage() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  const [isClient, setIsClient] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const groupedItems = useBasketStore((state) => state.getGroupedItems());

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return <Loader />;
  }

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
    <div className="container mx-auto p-4 max-w-6xl min-h-[100vh] lg:max-w-[40vw]">
      <h1 className="text-3xl font-bold my-6">Your Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          {groupedItems.map((item) => (
            <div
              key={item.product._id}
              className="mb-4 p-4 border rounded-lg shadow-lg flex justify-between items-center"
            >
              <div
                className="flex items-center cursor-pointer flex-1 min-w-0"
                onClick={() =>
                  router.push(`product/${item.product.slug?.current}`)
                }
              >
                <div className="w-40 h-40  flex-shrink-0 mr-4">
                  <Image
                    src={
                      item.product.image
                        ? imageUrl(item.product.image).url()
                        : "Product Image"
                    }
                    alt={item.product.name ?? "Product Image"}
                    className="w-full h-full object-cover rounded-lg"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="min-w-0 flex flex-col items-start bg-pink-500 w-full">
                  <h2 className="text-lg sm:text-xl font-semibold truncate">
                    {item.product.name}
                  </h2>
                  <p className="text-sm sm:text-base">
                    Price: ${" "}
                    {((item.product.price ?? 0) * item.quantity).toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center flex-shrink-0">
                  <AddToCartButton
                    product={item.product}
                    disabled={item.quantity <= 0}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
