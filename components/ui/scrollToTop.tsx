"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@sanity/icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsVisible(scrollPosition > window.innerHeight); // Show button if scroll position > 100vh
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-sage-400 text-white text-3xl p-2 rounded-full shadow-lg hover:bg-sage-400 transition-all z-50 cursor-pointer"
        >
          <ArrowUpIcon />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
