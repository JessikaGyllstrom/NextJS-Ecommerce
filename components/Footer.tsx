import Link from "next/link";
import React from "react";
//TODO: Create footer schema in Sanity and fetch data from it instead of hardcoding text
export default function Footer() {
  return (
    <footer>
      <div className="bg-sage-500 py-4 text-white font-md">
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="flex px-4 my-4 w-full xl:w-1/5">
              <Link href="/" className="block w-56 mb-10">
                <svg
                  fill="#ffffff"
                  width="64px"
                  height="64px"
                  viewBox="0 0 512 512"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <path d="M495.86,304.11c-35.34-19.48-67.76-21.74-75.38-22,10.85-67.12-25.6-129.93-27.42-133a6,6,0,0,0-7.28-2.51c-39.41,15.31-58.66,28.94-67.72,37.25-23.09-58.56-55.62-93.78-57.73-96a6.18,6.18,0,0,0-8.66,0c-2.11,2.24-34.64,37.46-57.73,96-9.06-8.31-28.31-21.94-67.72-37.25a6,6,0,0,0-7.28,2.51c-1.82,3.05-38.27,65.86-27.43,133-7.64.26-40.05,2.53-75.37,22a5.94,5.94,0,0,0-3,6.43c.26,1.28,25.94,115.4,184.08,115.38a394.93,394.93,0,0,0,58.74-4.7,394.83,394.83,0,0,0,58.74,4.7c158.1,0,183.82-114.1,184.08-115.38A5.94,5.94,0,0,0,495.86,304.11ZM385.22,159.66c9.39,18,41.6,87.74,15.07,150.5-15.94,37.72-50.43,66.38-102.2,85.85,13.51-11.75,27.2-28.12,35.36-50.26,24.64-34.4,37.93-98.06,38.48-100.77a6,6,0,0,0-11.67-2.39c-.1.45-7,33.51-19.55,64,.05-1.48.25-2.85.25-4.37A320.32,320.32,0,0,0,322.7,196.11C327.44,190.9,343.19,176.58,385.22,159.66Zm-258.44,0c42,16.91,57.76,31.22,62.52,36.45A320.32,320.32,0,0,0,171,302.25c0,1.53.21,2.91.25,4.41-12.52-30.54-19.45-63.62-19.55-64.07A6,6,0,1,0,140.07,245c.55,2.71,13.84,66.42,38.49,100.81,8.17,22.12,21.84,38.47,35.35,50.22-51.75-19.46-86.23-48.1-102.17-85.77C85.19,247.55,117.39,177.71,126.78,159.66ZM26,312.38C61.11,294.28,93,294,93.33,294a4.89,4.89,0,0,0,.64-.14,138.52,138.52,0,0,0,6.74,20.95q12.14,28.71,36.85,50.87c-48.64-20-68.74-39.33-69-39.56a6,6,0,0,0-8.38,8.47c1.3,1.29,33,32,114.76,57.05a290.25,290.25,0,0,0,50.21,21.14C68.78,425.59,32.3,333.89,26,312.38Zm230-114.9a6,6,0,0,0-6,6V406.07C230.77,396.58,183,366.55,183,302.25c0-105.58,56.72-181.54,73-201.21,16.32,19.67,73,95.63,73,201.21,0,65.09-47.75,94.63-67.08,103.92V203.44A6,6,0,0,0,256,197.48Zm30.82,215.3A291.59,291.59,0,0,0,337,391.64c81.82-25,113.49-55.77,114.79-57.06a6,6,0,0,0-8.38-8.47c-.24.23-20.34,19.52-69,39.57q24.68-22.15,36.85-50.88A137.46,137.46,0,0,0,418,293.85a5,5,0,0,0,.65.14c.33,0,32,.21,67.3,18.35C479.36,333.4,441.42,425.27,286.82,412.78Z"></path>
                  </g>
                </svg>
                <span className="ml-2 text-2xl">Bare Botanics</span>
              </Link>
              <p className="text-justify">
                Bar Botanics is a modern sanctuary for skin, rooted in the
                belief that beauty should never compromise well-being — yours or
                the planet’s. We craft luxurious, botanical-based skincare using
                ethically sourced, organic ingredients and minimal, sustainable
                packaging. Every formula is thoughtfully created to nourish,
                restore, and elevate the skin’s natural radiance, while honoring
                our deep connection to nature.
              </p>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blush-500">
                  Company
                </h2>
              </div>
              <ul className="leading-8">
                <li>
                  <a href="#" className="hover:text-blush-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blush-500">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blush-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blush-500">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blush-500">
                  Quick Links
                </h2>
              </div>
              <ul className="leading-8">
                <li>
                  <a href="#" className="hover:text-blush-500">
                    SkinCare
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blush-500">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blush-500">
                    Bestsellers
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blush-500">
                  Connect With Us
                </h2>
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center h-8 w-8 border border-white rounded-full mr-2 hover:text-blush-500 hover:border-blush-500"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center h-8 w-8 border border-white rounded-full mr-2 hover:text-blush-500 hover:border-blush-500"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center h-8 w-8 border border-white rounded-full mr-2 hover:text-blush-500 hover:border-blush-500"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blush-400 py-4 text-gray-900">
        <div className="container mx-auto px-4">
          <div className="px-4 w-full text-center font-md sm:w-auto">
            Copyright © 2025 BareBotanics. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
