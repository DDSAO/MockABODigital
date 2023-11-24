"use cleint";

import { HorizontalScrollingBox } from "@/app/GlobalComponent/HorizontalScrollingBox";
import { HorizontalSlideInBox } from "@/app/GlobalComponent/HorizontalSlideInBox";

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
        <div className="col-span-2 flex flex-col gap-4">
          <HorizontalScrollingBox
            triggerId="first"
            showcaseContents={["Apple", "Pear", "Peach"]}
          />
          <HorizontalScrollingBox
            reversed={true}
            triggerId="second"
            showcaseContents={["Grape", "Watermelon", "Cucumber"]}
          />
        </div>
      </div>
      <div className="h-screen py-16 flex flex-col">
        <p className="text-5xl font-light">We grow as you grow</p>
        <div className="grow grid grid-cols-4">
          <div className="relative h-full border-r ">
            <div className="absolute left-0 top-0 w-full h-1/4 border">
              <HorizontalSlideInBox
                triggerId="stat_1"
                className="w-full h-full flex flex-col gap-2 items-start justify-center p-2"
              >
                <p className="text-[108px] leading-[108px]">90+</p>
                <p className="text-xs">PIPEs since group inception in 2017</p>
              </HorizontalSlideInBox>
            </div>
          </div>
          <div className="relative h-full border-r ">
            <div className="absolute left-0 top-1/4 w-full h-1/4 border">
              <HorizontalSlideInBox
                triggerId="stat_2"
                className="w-full h-full flex flex-col gap-2 items-start justify-center p-2"
              >
                <p className="text-[108px] leading-[108px]">
                  $2<span className="text-5xl">bn</span>
                </p>
                <p className="text-xs">Total financing commitments</p>
              </HorizontalSlideInBox>
            </div>
          </div>
          <div className="relative h-full border-r ">
            <div className="absolute left-0 top-2/4 w-full h-1/4 border">
              <HorizontalSlideInBox
                triggerId="stat_3"
                className="w-full h-full flex flex-col gap-2 items-start justify-center p-2"
              >
                <p className="text-[108px] leading-[108px]">
                  $2<span className="text-5xl">m</span>
                </p>
                <p className="text-xs">Average commitment size</p>
              </HorizontalSlideInBox>
            </div>
          </div>
          <div className="relative h-full border-r ">
            <div className="absolute left-0 top-3/4 w-full h-1/4 border">
              <HorizontalSlideInBox
                triggerId="stat_4"
                className="w-full h-full flex flex-col gap-2 items-start justify-center p-2"
              >
                <p className="text-[108px] leading-[108px]">14</p>
                <p className="text-xs">
                  jurisdictions Board geographical mandate
                </p>
              </HorizontalSlideInBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
