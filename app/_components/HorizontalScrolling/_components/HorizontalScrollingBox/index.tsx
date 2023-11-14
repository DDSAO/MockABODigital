"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const HorizontalScrollingBox = () => {
  const scope = useRef();
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        x: "-50%",
        scrollTrigger: {
          trigger: ".parent",
          start: "top bottom-=100px",
          end: "bottom top+=100px",
          markers: true,
          scrub: true,
        },
      });
    }, scope.current);
  }, []);

  return (
    <div className="parent relative h-40 overflow-hidden">
      <div className="absolute h-40 w-8 bg-gradient-to-r from-black z-10"></div>
      <div
        ref={containerRef}
        className="px-8 absolute flex items-center justify-start gap-4"
      >
        <div className="w-96 h-40 border-2 border-zinc-500 hover:border-slate-200 duration-300 rounded-xl flex items-center justify-center">
          1
        </div>
        <div className="w-96 h-40 border-2 border-zinc-500 hover:border-slate-200 duration-300 rounded-xl flex items-center justify-center">
          2
        </div>
        <div className="w-96 h-40 border-2 border-zinc-500 hover:border-slate-200 duration-300 rounded-xl flex items-center justify-center">
          3
        </div>
        <div className="w-96 h-40 border-2 border-zinc-500 hover:border-slate-200 duration-300 rounded-xl flex items-center justify-center">
          4
        </div>
        <div className="w-96 h-40 border-2 border-zinc-500 hover:border-slate-200 duration-300 rounded-xl flex items-center justify-center">
          5
        </div>
        <div className="w-96 h-40 border-2 border-zinc-500 hover:border-slate-200 duration-300 rounded-xl flex items-center justify-center">
          6
        </div>
        <div className="w-96 h-40 border-2 border-zinc-500 hover:border-slate-200 duration-300 rounded-xl flex items-center justify-center">
          7
        </div>{" "}
      </div>
    </div>
  );
};
