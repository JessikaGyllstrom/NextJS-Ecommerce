"use client";

import { useEffect } from "react";
import useBasketStore from "../store";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function SuccessPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const orderNumber = searchParams.get("OrderNumber");
  const clearBasket = useBasketStore((state) => state.clearBasket);

  useEffect(() => {
    if (orderNumber) {
      clearBasket();
    }
  }, [orderNumber, clearBasket]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 w-full">
      <div className="py-6 text-2xl font-semibold text-gray-700 bg-white shadow-lg flex flex-col items-center justify-center lg:w-[45vw] mt-8 px-6 lg:mt-16">
        <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-sage-400/30">
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-sage-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 344.963 344.963"
              xmlSpace="preserve"
              fill="#fffff"
              className="w-12 h-12"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    style={{ fill: "#ffffff" }}
                    d="M321.847,86.242l-40.026-23.11l-23.104-40.02h-46.213l-40.026-23.11l-40.026,23.11H86.239 l-23.11,40.026L23.11,86.242v46.213L0,172.481l23.11,40.026v46.213l40.026,23.11l23.11,40.026h46.213l40.02,23.104l40.026-23.11 h46.213l23.11-40.026l40.026-23.11v-46.213l23.11-40.026l-23.11-40.026V86.242H321.847z M156.911,243.075 c-3.216,3.216-7.453,4.779-11.671,4.72c-4.219,0.06-8.455-1.504-11.671-4.72l-50.444-50.444c-6.319-6.319-6.319-16.57,0-22.889 l13.354-13.354c6.319-6.319,16.57-6.319,22.889,0l25.872,25.872l80.344-80.35c6.319-6.319,16.57-6.319,22.889,0l13.354,13.354 c6.319,6.319,6.319,16.57,0,22.889L156.911,243.075z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <h1 className="my-6 text-black"> Thank you for your purchase!</h1>
        <div className="border-t border-b border-gray-200 py-8 mb-4">
          <p className="text-sm font-normal text-gray-500">
            Your order has been confirmed and will be shipped shortly.
          </p>
          <div className="space-y-4 mt-4">
            {orderNumber && (
              <p className="text-sm font-normal text-gray-500">
                <span>Order Number: </span>
                <span className="font-medium text-gray-700">{orderNumber}</span>
              </p>
            )}
          </div>
        </div>
        <div className="space-y-4 text-sm font-normal text-gray-500 text-center">
          <p className="mb-6">
            {" "}
            You will receive a confirmation email shortly.
          </p>
          <div className="flex items-center space-x-4 mb-6">
            <Button
              asChild
              className="bg-sage-500 text-white rounded-none px-6 py-4 shadow-md hover:bg-sage-600"
            >
              <Link href="/orders">View Order Details</Link>
            </Button>
            <Button
              asChild
              className="bg-blush-500 text-black rounded-none px-6 py-4 shadow-md hover:bg-blush-00 hover:text-white"
            >
              <Link href="/">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
