"use client";

import { gsap } from "gsap";
import { FunctionComponent, PropsWithChildren, useEffect, useRef } from "react";

const ContentBox: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-60 h-40 border-2 border-zinc-500 hover:border-slate-200 text-zinc-500 hover:text-slate-200 duration-300 rounded-xl flex items-center justify-center">
      {children}
    </div>
  );
};

export const HorizontalScrollingBox = ({
  reversed,
  triggerId,
  showcaseContents,
}: {
  reversed?: boolean;
  triggerId: string;
  showcaseContents: React.ReactNode[];
}) => {
  const scope = useRef();
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        x: reversed ? "-20%" : "20%",
        scrollTrigger: {
          trigger: `#${triggerId}`,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, scope.current);

    return () => ctx.revert();
  }, [reversed, triggerId]);

  return (
    <div id={triggerId} className=" relative h-40 overflow-hidden">
      <div className="absolute h-40 w-8 bg-gradient-to-r from-black z-10"></div>
      <div
        ref={containerRef}
        className="px-8 absolute left-1/2 -translate-x-1/2 flex items-center justify-start gap-4"
      >
        <ContentBox> {showcaseContents[1]}</ContentBox>
        <ContentBox> {showcaseContents[2]}</ContentBox>
        <ContentBox> {showcaseContents[0]}</ContentBox>
        <ContentBox> {showcaseContents[1]}</ContentBox>
        <ContentBox> {showcaseContents[2]}</ContentBox>
        <ContentBox> {showcaseContents[0]}</ContentBox>
        <ContentBox> {showcaseContents[1]}</ContentBox>
      </div>
    </div>
  );
};
