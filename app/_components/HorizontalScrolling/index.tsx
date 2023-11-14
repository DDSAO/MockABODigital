"use cleint";

import { HorizontalScrollingBox } from "./_components/HorizontalScrollingBox";

export const HorizontalScrolling = () => {
  return (
    <div className="px-16  bg-black text-slate-100">
      <div className="py-16 flex items-center justify-start gap-2">
        <div className="rounded-full w-3 h-3 bg-green-400"></div>
        <p className="font-thin text-slate-400">Already building with us</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col gap-2 justify-between py-4">
          <p className="text-5xl font-light">We are backing innovators</p>
          <p className="text-xl">
            Our methods have proven useful to the bold disruptors that are
            building some of the best tech companies in the field.
          </p>
        </div>
        <div className="col-span-2 h-[300px]">
          <HorizontalScrollingBox />
        </div>
        <div className="h-screen"></div>
      </div>
    </div>
  );
};
