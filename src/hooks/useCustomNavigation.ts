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
    console.log(e);
    if (isEndReached()) {
      console.log("next");
      router.push(next);
    }
    if (isTopReached()) {
      router.push(prev);
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
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyPress);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}
