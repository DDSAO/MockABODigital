import { CircleButton } from "@/app/GlobalComponent/CircleButton";
import { MdArrowRightAlt } from "react-icons/md";
export const WorkTogether = () => {
  return (
    <div className="bg-black">
      <div className="bg-neutral-900 h-[600px] rounded-[32px] p-12">
        <div className="grid grid-cols-2 h-full">
          <p className="font-extralight text-white text-6xl">
            Our solutions are specific to your issues, and we love to create
            customized methods.
          </p>
          <div className="h-full pl-16 flex flex-col items-end justify-around">
            <video
              className="w-64 h-64"
              loop={true}
              muted={true}
              autoPlay={true}
              data-wf-ignore="true"
              data-object-fit="cover"
              src="https://cdn.jsdelivr.net/gh/ondastudio/abo@main/abo-digital-02-home-cta-3d-alpha.webm"
            >
              <source src="" data-wf-ignore="true" />
            </video>
            <p className="self-start font-extralight text-neutral-500 text-6xl w-4/5">
              {"Show us your project and we'll find a way."}
            </p>
            <CircleButton
              defaultBorderColor="bg-transparent"
              hoveredBorderColor="bg-lime-300"
              bgColor="bg-lime-300 group-hover:bg-neutral-900 text-black group-hover:text-lime-300 duration-300"
              className="group self-start "
            >
              <div className="flex items-center justify-center gap-2">
                <p className="cursor-pointer font-light whitespace-nowrap">
                  {"Let's work together"}
                </p>
                <MdArrowRightAlt />
              </div>
            </CircleButton>
          </div>
        </div>
      </div>
    </div>
  );
};
