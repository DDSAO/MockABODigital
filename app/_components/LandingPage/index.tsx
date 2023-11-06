"use client";

import { CircleButton } from "@/app/GlobalComponent/CircleButton";
import { NavigationBar } from "./NavigationBar";
import { SlidingText } from "@/app/GlobalComponent/SlidingText";
import { FiArrowUpRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

export const LandingPage = () => {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen flex flex-col bg-slate-50">
      <div className="grow mb-6 rounded-b-3xl bg-blue-950 flex flex-col">
        <NavigationBar />
        <div className="grid grid-cols-2 h-full">
          <div className="min-h-[400px] h-full py-8 px-8 flex flex-col">
            <div className="mt-32 text-white text-[108px] font-light leading-[102px]">
              <p>A Mock up Website</p>
              <p>of ABODigital</p>
            </div>
            <div className="grow"></div>
            <div className="self-end flex flex-col gap-12 py-16">
              <p className="text-normal text-white">
                Visit Original Website:{" "}
                <a href="https://www.abodigital.io/">
                  https://www.abodigital.io/
                </a>
              </p>
              <CircleButton
                defaultBorderColor="bg-slate-50/50"
                hoveredBorderColor="bg-white opacity-100"
                className="w-fit group"
              >
                <a
                  href="https://www.abodigital.io/"
                  target="_blank"
                  className="pointer-cursor flex items-center justify-start gap-2 text-white"
                >
                  <p className="font-light pointer-cursor">Navigate to ABO</p>
                  <FiArrowUpRight />
                </a>
              </CircleButton>
            </div>
          </div>
          <video
            id="hero_video_home"
            poster="https://cdn.jsdelivr.net/gh/ondastudio/abo@main/abo-digital-01-home-hero-3d-poster.png"
            playsInline={true}
            loop={true}
            muted={true}
            autoPlay={true}
            data-wf-ignore="true"
            data-object-fit="cover"
            src="https://cdn.jsdelivr.net/gh/ondastudio/abo@main/abo-digital-01-home-hero-3d-alpha.webm"
          >
            <source src=" " data-wf-ignore="true" />
          </video>
        </div>
      </div>
    </div>
  );
};
