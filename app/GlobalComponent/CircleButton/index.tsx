"use client";

import clsx from "clsx";
import { Linear, gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

export const CircleButton = ({
  hoveredBorderColor = "bg-white",
  defaultBorderColor = "bg-slate-50",
  bgColor = "bg-blue-950",
  ...rest
}:
  | {
      defaultBorderColor?: string;
      hoveredBorderColor?: string;
      bgColor?: string;
    }
  | any) => {
  const containerRef = useRef(null);
  const botRef = useRef(null);
  const leftRef = useRef(null);
  const topRef = useRef(null);
  const rightRef = useRef(null);
  const timeline = useRef(null);
  const [divWidth, setDivWidth] = useState(0);
  const [divHeight, setDivHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setDivWidth((containerRef.current as any).getBoundingClientRect().width);
      setDivHeight(
        (containerRef.current as any).getBoundingClientRect().height
      );
    }
  }, []);

  useEffect(() => {
    let duration = 0.2;
    timeline.current = gsap
      .timeline({ paused: true })
      .to(botRef.current, {
        // x: "-100%",
        width: divWidth,
        ease: Linear.easeInOut,
        duration: duration,
      })
      .to(leftRef.current, {
        y: "-100%",
        ease: Linear.easeInOut,
        duration: duration * 0.5,
      })
      .to(topRef.current, {
        x: "100%",
        ease: Linear.easeInOut,
        duration: duration * 0.5,
      })
      .to(rightRef.current, {
        y: "100%",
        ease: Linear.easeInOut,
        duration: duration * 0.5,
      }) as any;
  }, [divWidth, divHeight]);

  return (
    <div
      {...rest}
      ref={containerRef}
      onMouseEnter={() => {
        if (timeline.current) (timeline.current as any).play();
      }}
      onMouseLeave={() => {
        if (timeline.current) (timeline.current as any).reverse();
      }}
      className={clsx(
        "relative group flex items-center justify-center",
        rest.className
      )}
    >
      <div
        style={{
          width: divWidth,
          height: divHeight,
        }}
        className={`absolute overflow-hidden p-4 rounded-[14px] ${defaultBorderColor}`}
      >
        <div
          ref={botRef}
          style={{
            width: 0,
            height: divHeight,
          }}
          className={`absolute w-96 h-96 top-[calc(100%-16px)] right-[2px] z-30 ${hoveredBorderColor}`}
        ></div>
        <div
          ref={leftRef}
          style={{
            width: divWidth,
            height: divHeight,
          }}
          className={`absolute w-96 h-96 top-[100%] right-[calc(100%-16px)] z-30 ${hoveredBorderColor}`}
        ></div>
        <div
          ref={topRef}
          style={{
            width: divWidth,
            height: divHeight,
          }}
          className={`absolute w-96 h-96 bottom-[calc(100%-16px)] right-[100%] z-30 ${hoveredBorderColor}`}
        ></div>
        <div
          ref={rightRef}
          style={{
            width: divWidth,
            height: divHeight,
          }}
          className={`absolute w-96 h-96 bottom-[100%] left-[calc(100%-2px)] z-30 ${hoveredBorderColor}`}
        ></div>
      </div>
      <div
        style={{
          margin: 1,
        }}
        className={clsx(
          `relative w-full px-6 py-3 rounded-[14px] z-40 ${bgColor}`
        )}
      >
        {rest.children}
      </div>
    </div>
  );
};
