"use client";

import React from "react";
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

import Form from "next/form"; // Adjust the path if Form is in the same directory
import { BasketIcon, PackageIcon, TrolleyIcon } from "@sanity/icons";
import { User } from "@clerk/nextjs/server";

function Header() {
  const { user } = useUser();

  const createClerkPasskey = async () => {
    try {
      const response = await user?.createPasskey();

      console.log("Passkey created:", response);
    } catch (error) {
      console.error("Error creating passkey:", JSON.stringify(error, null, 2));
    }
  };

  return (
    <header className="flex justify-between items-center px-4 py-2">
      <div className="flex flex-wrap md:flex-nowrap w-full justify-between items-center gap-4">
        <Link
          href="/"
          className="text-2xl font-bold text-zinc-900 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
        >
          Bare Botanics
        </Link>
        <div className="flex w-full md:w-lg">
          <Form
            action="/search"
            className="relative w-full mx-auto mt-2 md:mt-0"
          >
            {/* Search Icon */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm8-2l4 4"
                />
              </svg>
            </div>
            {/* Input Field */}
            <input
              type="text"
              name="query"
              placeholder="Search for products"
              className="
        bg-gray-100 text-gray-700 pl-10 pr-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sage-300 focus:ring-opacity-50 border w-full"
            />
          </Form>
        </div>
        <div className="flex justify-center items-center space-x-12 mt-4 sm-mt-0 flex-1 md:flex-none md:space-x-4 bg-pink-500">
          <div className="relative group">
            <Link href="/basket" className="">
              <TrolleyIcon className="w-8 h-8 text-zinc-900" />
              {/* <span>Item count</span> */}
            </Link>
            <div
              className="z-50 absolute left-1/2 -translate-x-1/2 top-full mb-2 hidden group-hover:block bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
              role="tooltip"
            >
              View Basket
              {/* Tooltip Arrow */}
              <div className="absolute w-3 h-3 bg-gray-900 rotate-45 -top-1 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>

          <ClerkLoaded>
            {user && (
              <div className="relative group">
                <Link href="/orders" className="">
                  <PackageIcon className="w-8 h-8 text-zinc-900" />
                </Link>
                <div
                  className="z-50 absolute left-1/2 -translate-x-1/2 top-full mb-2 hidden group-hover:block bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
                  role="tooltip"
                >
                  View Orders
                  <div className="absolute w-3 h-3 bg-gray-900 rotate-45 -top-1 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>
            )}
            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />
                <div className="hidden sm:block">
                  <p className="text-gray-400">Welcome back</p>
                  <p className="font-bold">{user.fullName}!</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}
            {user?.passkeys.length === 0 && (
              <button
                onClick={createClerkPasskey}
                className="bg-white hover:bg-blue-700 hover:text-white animate-pulser text-blue-500 py-2 px-4 rounded border-blue-300 border"
              >
                Create a passkey
              </button>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}

export default Header;
