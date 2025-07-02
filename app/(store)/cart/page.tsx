"use client";
import React, { useEffect } from "react";
import useBasketStore from "../store";
import { SignIn, SignInButton, useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";
import { Loader } from "lucide-react";
import { set } from "sanity";
import { randomUUID } from "crypto";
import {
  createCheckoutSession,
  Metadata,
} from "@/actions/createCheckoutSession";

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

  const handleCheckout = async () => {
    if (!isSignedIn) return;
    setIsLoading(true);
    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName || "Unknown Customer",
        customerEmail: user?.emailAddresses[0]?.emailAddress || "Unknown Email",
        clerkUserId: user!.id,
      };
      const checkoutUrl = await createCheckoutSession(groupedItems, metadata);
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error("Error creating checkout session", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="container mx-auto p-4 max-w-5xl min-h-[100vh]">
      <h1 className="text-3xl font-bold my-6">Your Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          {groupedItems.map((item) => (
            <div
              key={item.product._id}
              className="mb-4 p-4 border rounded-lg shadow-lg flex justify-between items-center"
            >
              <div className="flex items-center flex-1 min-w-0">
                {/* Make the image clickable */}
                <div
                  className="w-40 h-40 flex-shrink-0 mr-4 cursor-pointer"
                  onClick={() =>
                    router.push(`product/${item.product.slug?.current}`)
                  }
                >
                  <Image
                    src={
                      item.product.image
                        ? imageUrl(item.product.image).url()
                        : "Product Image"
                    }
                    alt={item.product.name ?? "Product Image"}
                    className="w-full h-full object-cover rounded-lg cursor-pointer"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="min-w-0 flex flex-col items-start justify-start w-full pr-6">
                  <h2
                    className="text-lg sm:text-xl font-semibold truncate cursor-pointer mb-4 hover:underline"
                    onClick={() =>
                      router.push(`product/${item.product.slug?.current}`)
                    }
                  >
                    {item.product.name}
                  </h2>
                  <p className="text-sm sm:text-base">
                    Price: ${" "}
                    {((item.product.price ?? 0) * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="flex items-center flex-shrink-0">
                <AddToCartButton
                  product={item.product}
                  disabled={item.quantity <= 0}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="w-full px-8 py-4 lg:w-90 lg:sticky lg:top-4 h-fit bg-white p-4 border rounded-lg shadow-lg order-first lg:order-last fixed bottom-0 right-0 lg:mx-auto">
          <h3 className="text-xl font-semibold">Order Summary</h3>
          <div className="mt-4 space-y-2">
            <p className="flex justify-between">
              <span>Items:</span>
            </p>
            <p className="flex justify-between text-2xl font-bold border-t pt-2">
              <span>Total:</span>
              <span>
                ${useBasketStore.getState().getTotalPrice().toFixed(2)}
              </span>
            </p>
          </div>
          {isSignedIn ? (
            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="mt-4 w-full bg-sage-500 text-white py-2 shadow-md hover:bg-sage-400 transition-colors duration-300 cursor-pointer
         disabled:bg-gray-400"
            >
              {isLoading ? "Prossessing..." : "Checkout"}
            </button>
          ) : (
            <SignInButton mode="modal">
              <button className="mt-4 w-full bg-sage-500 text-white py-2 shadow-md hover:bg-sage-400 transition-colors duration-300">
                Sign in to Checkout
              </button>
            </SignInButton>
          )}
        </div>
        <div className="h-64 lg:h-0"></div>
      </div>
    </div>
  );
}

export default CartPage;
