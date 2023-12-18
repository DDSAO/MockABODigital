"use cleint";

import { FloatingText } from "@/app/GlobalComponent/FloatingText";
import { HorizontalScrollingBox } from "@/app/GlobalComponent/HorizontalScrollingBox";
import { HorizontalSlideInBox } from "@/app/GlobalComponent/HorizontalSlideInBox";

export const HorizontalScrolling = () => {
  return (
    <div className="px-16  bg-black text-slate-100">
      <div className="py-16 flex items-center justify-start gap-2">
        <div className="rounded-full w-3 h-3 bg-green-400"></div>
        <p className="font-thin text-slate-400">Already building with us</p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col gap-2 justify-between py-4">
          <FloatingText
            className="text-5xl font-light"
            text="We are backing innovators"
          />
          <FloatingText
            className="text-3xl"
            text="Our methods have proven useful to the bold disruptors that are
            building some of the best tech companies in the field."
          />
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
      <div className="py-16 flex flex-col">
        <FloatingText
          className="text-5xl font-light my-16"
          text="We grow as you grow"
        />
        <div className="h-[80vh] grid grid-cols-4">
          <div className="relative h-full border-r border-slate-500 ">
            <div className="absolute left-0 top-0 w-full h-1/4">
              <HorizontalSlideInBox
                triggerId="stat_1"
                className="w-full h-full flex flex-col gap-2 items-start justify-center p-2"
              >
                <p className="text-[160px] leading-[160px]">90+</p>
                <p className="text-normal font-light">
                  PIPEs since group inception in 2017
                </p>
              </HorizontalSlideInBox>
            </div>
          </div>
          <div className="relative h-full border-r border-slate-500 ">
            <div className="absolute left-0 top-1/4 w-full h-1/4">
              <HorizontalSlideInBox
                triggerId="stat_2"
                className="w-full h-full flex flex-col gap-2 items-start justify-center p-2"
              >
                <p className="text-[160px] leading-[160px]">
                  $2<span className="text-5xl">bn</span>
                </p>
                <p className="text-normal font-light">
                  Total financing commitments
                </p>
              </HorizontalSlideInBox>
            </div>
          </div>
          <div className="relative h-full border-r border-slate-500 ">
            <div className="absolute left-0 top-2/4 w-full h-1/4">
              <HorizontalSlideInBox
                triggerId="stat_3"
                className="w-full h-full flex flex-col gap-2 items-start justify-center p-2"
              >
                <p className="text-[160px] leading-[160px]">
                  $2<span className="text-5xl">m</span>
                </p>
                <p className="text-normal font-light">
                  Average commitment size
                </p>
              </HorizontalSlideInBox>
            </div>
          </div>
          <div className="relative h-full border-r border-slate-500 ">
            <div className="absolute left-0 top-3/4 w-full h-1/4">
              <HorizontalSlideInBox
                triggerId="stat_4"
                className="w-full h-full flex flex-col gap-2 items-start justify-center p-2"
              >
                <p className="text-[160px] leading-[160px]">14</p>
                <p className="text-normal font-light">
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
