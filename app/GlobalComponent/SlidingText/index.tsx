"use client";

import clsx from "clsx";
import { gsap } from "gsap";
import { useCallback, useEffect, useRef } from "react";

export const SlidingText = (
  props: { lineColor?: string; hovered?: boolean } | any
) => {
  const { text, lineColor, hovered, ...rest } = props;

  const ref = useRef(null);

  const slideIn = useCallback(() => {
    if (ref.current) {
      gsap.fromTo(ref.current, { left: "-100%" }, { left: 0, duration: 0.3 });
    }
  }, []);
  const slideOut = useCallback(() => {
    if (ref.current) {
      gsap.fromTo(ref.current, { left: "0" }, { left: "100%", duration: 0.3 });
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      gsap.set(ref.current, { left: "-100%" });
    }
  }, []);

  useEffect(() => {
    if (hovered !== undefined) {
      if (hovered) {
        slideIn();
      } else {
        slideOut();
      }
    }
  }, [hovered]);

  return (
    <div
      onMouseEnter={() => {
        if (hovered === undefined) slideIn();
      }}
      onMouseLeave={() => {
        if (hovered === undefined) slideOut();
      }}
      className={clsx(
        "relative group w-fit mt-1 pb-1 overflow-hidden cursor-pointer",
        props.className
      )}
    >
      <div {...rest}>{props.children}</div>

      <div
        ref={ref}
        className={`absolute w-full h-0.5 ${
          lineColor ? lineColor : "bg-black"
        } `}
      ></div>
    </div>
  );
};
