"use client";

import { CircleButton } from "@/app/GlobalComponent/CircleButton";
import { SlidingText } from "@/app/GlobalComponent/SlidingText";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export const NavigationBar = () => {
  return (
    <div className="w-full h-32 flex items-center justify-between px-8">
      <img
        alt="logo"
        className="max-w-[240px] max-h-[84px] bg-blue-400 rounded-md"
        src={"/images/logo.png"}
      />
      <div className="flex items-center justify-end gap-40">
        <SlidingText lineColor="bg-white">
          <p className="text-white font-light">Team</p>
        </SlidingText>
        <SlidingText lineColor="bg-white">
          <p className="text-white font-light">Portfolio</p>
        </SlidingText>
        <SlidingText lineColor="bg-white">
          <p className="text-white font-light">News</p>
        </SlidingText>
        <SlidingText lineColor="bg-white">
          <div className="flex ">
            <p className="text-white font-light">ABO</p>
            <FiArrowUpRight className="text-white font-light" />
          </div>
        </SlidingText>
        <CircleButton
          defaultBorderColor="bg-transparent"
          hoveredBorderColor="bg-lime-300"
          bgColor="bg-lime-300 group-hover:bg-blue-950 text-black group-hover:text-lime-300 duration-150"
          className="group"
        >
          <p className="cursor-pointer font-light">Get in touch</p>
        </CircleButton>
      </div>
    </div>
  );
};
