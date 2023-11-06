"use client";

import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

export const FloatingText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const comp = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.to(".words", {
        duration: 0.3,
        top: 0,
        opacity: 1,
        delay: 0.3,
        stagger: 0.01,
        ease: "sine.out",
        force3D: true,
        scrollTrigger: {
          trigger: ".gsap-container",
          toggleActions: "play",
        },
      });
    }, comp.current as any);

    return () => ctx.revert();
  }, []);

  return (
    <div className={clsx("gsap-container flex flex-wrap relative", className)}>
      {text.split(" ").map((word, i) => {
        return (
          <div key={i} className="relative pr-3 pb-1 overflow-hidden">
            <p className="opacity-0">{word}</p>
            <div className="absolute flex top-[100%] words select-none">
              {Array.from(word).map((letter, j) => {
                return <p key={j}>{letter}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
