"use client";

import { useEffect, useState } from "react";
import useDebounce from "../use-debounce/use-debounce";

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDir, setScrollDir] = useState("down");
  const debouncedScrollValue = useDebounce(scrollPosition, 100);

  const handleScrollDir = () => {
    setScrollDir(debouncedScrollValue < window.scrollY ? "down" : "up");
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => handleScrollDir());

    return () => {
      window.removeEventListener("scroll", () => handleScrollDir());
    };
  }, [debouncedScrollValue]);

  return {
    scrollPosition: debouncedScrollValue,
    isScrolledUp: scrollDir === "up",
    isOverThreshold: debouncedScrollValue > 50,
  };
}
