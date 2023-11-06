"use client";

import { FloatingText } from "@/app/GlobalComponent/FloatingText";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";

import { useEffect, useRef } from "react";
import { BsDot } from "react-icons/bs";
import { LoadingSVG } from "./LoadingSVG";

export const CustomisedSolution = () => {
  return (
    <div className="px-16 py-4 bg-slate-50">
      <div className="flex items-center justify-start gap-2">
        <div className="rounded-full w-3 h-3 bg-black"></div>
        <p className="font-thin">Unique solutions for a new market</p>
      </div>
      <h1 className="text-5xl font-light mt-24 w-10/12">
        <FloatingText
          className="ml-16 text-blue-500 text-5xl font-light"
          text="A customised method for every client. "
        />

        <FloatingText
          className="font-light text-5xl"
          text="We understand that every client has specific needs. Our team of experts has extensive experience in traditional finance and leverages this expertise to create innovative financing solutions that help cryptocurrency projects grow sustainably."
        />
      </h1>
      <div className="h-[800px] mt-24">
        <div className="flex items-start gap-16">
          <div className="py-12">
            <LoadingSVG />
          </div>

          <FloatingText
            className="font-light text-2xl"
            text="From early-stage crypto startups to the most established players on the market."
          />
        </div>
      </div>
    </div>
  );
};
