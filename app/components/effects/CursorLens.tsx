"use client";

import { useEffect } from "react";

export default function CursorLens() {
  useEffect(() => {
    const media = window.matchMedia("(pointer: fine) and (hover: hover)");
    if (!media.matches) return;

    const root = document.documentElement;
    const setPosition = (x: number, y: number) => {
      root.style.setProperty("--mx", `${x}px`);
      root.style.setProperty("--my", `${y}px`);
    };

    const onMouseMove = (event: MouseEvent) => {
      setPosition(event.clientX, event.clientY);
    };

    setPosition(window.innerWidth / 2, window.innerHeight / 2);
    root.classList.add("lens-enabled");
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      root.classList.remove("lens-enabled");
    };
  }, []);

  return null;
}
