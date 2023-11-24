"use client";

import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger, gsap } from "gsap/all";
import { useEffect } from "react";

export const SmoothWrapper = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  useEffect(() => {
    // gsap.config({ trialWarn: false } as any);
    // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    // ScrollSmoother.create({
    //   wrapper: "#smooth-wrapper",
    //   content: "#smooth-content",
    // });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
};
