"use client";

import clsx from "clsx";
import { Power2, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect, useRef } from "react";

export const HorizontalSlideInBox = ({
  children,
  className,
  triggerId,
}: any) => {
  const scope = useRef(null);
  const displayContent = useRef(null);
  const self = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(displayContent.current, {
        x: "-100%",
        duration: 0.5,
        ease: Power2.easeInOut,
        scrollTrigger: {
          trigger: scope.current,
          start: "top bottom",
          end: "bottom bottom-=200px",
          scrub: true,
          // markers: true,
        },
      });
    }, scope.current as any);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scope} className={clsx("relative overflow-hidden", className)}>
      <div ref={displayContent} className="relative top-0 left-[100%] w-full">
        {children}
      </div>
    </div>
  );
};
