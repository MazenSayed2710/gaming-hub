"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode, useRef } from "react";

interface HorizontalScrollerProps {
  children: ReactNode;
}

export function HorizontalScroller({ children }: HorizontalScrollerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    ref.current?.scrollBy({
      left:
        direction === "left"
          ? -ref.current.clientWidth * 0.8
          : ref.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur hover:bg-black/80"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur hover:bg-black/80"
      >
        <ChevronRight size={20} />
      </button>

      <div
        ref={ref}
        className="hide-scrollbar flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3"
      >
        {children}
      </div>
    </div>
  );
}
