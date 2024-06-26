"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const isEndReached = () => {
  const scrollHeight = document.body.scrollHeight; // Total page height
  const innerHeight = window.innerHeight; // Viewport height
  const scrollY = window.scrollY; // Current scroll position

  return scrollY + innerHeight >= scrollHeight;
};

const isTopReached = () => {
  return window.scrollY === 0;
};

export default function useCustomNavigation(prev: string, next: string): void {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const router = useRouter();
  function onWheel(e: any) {
    if (e["deltaY"] > 0 && isEndReached()) {
      console.log("next");
      router.push(next);
    }
    if (e["deltaY"] < 0 && isTopReached()) {
      router.push(prev);
    }
  }
  function onScroll(e: any) {
    if (isTopReached() && isScrolled) {
      setIsScrolled(false);
      router.push(prev);
    } else if (isEndReached()) {
      setIsScrolled(true);
      console.log("next");
      router.push(next);
    } else {
      setIsScrolled(true);
    }
  }
  function onKeyPress(e: any) {
    console.log(e);
    const { key } = e;

    if (key === "ArrowUp" && isTopReached()) {
      router.push(prev);
    }
    if (key === "ArrowDown" && isEndReached()) {
      router.push(next);
    }
  }
  useEffect(() => {
    window.addEventListener("wheel", onWheel);
    window.addEventListener("keydown", onKeyPress);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyPress);
    };
  }, []);
}
