"use client";

import { FloatingText } from "@/app/GlobalComponent/FloatingText";

export const LatestNews = () => {
  return (
    <div className="py-32 px-16 bg-black">
      <FloatingText
        className="py-12 text-white text-5xl font-light"
        text="Latest news"
      />
      <div className="text-white">
        <div className="flex items-center justify-end">
          <FloatingText
            className="text-2xl font-light w-2/5"
            text="As we progress, the world around us changes. Here are some of the
            latest highlights from the companies that we are collaborating with."
          />
        </div>
      </div>
    </div>
  );
};
