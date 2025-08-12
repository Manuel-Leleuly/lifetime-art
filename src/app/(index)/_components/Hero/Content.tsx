import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdStar } from "react-icons/io";

export const Content = () => {
  return (
    <div
      className={cn(
        "mt-4 flex-1 w-full relative",
        "md:mt-0",
        "xl:flex xl:justify-between xl:items-center xl:gap-20"
      )}
    >
      <div
        className={cn(
          "absolute top-0 right-0 bottom-0 left-0 rounded-xl bg-black/80 px-5 py-10 text-white flex flex-col justify-end z-10",
          "xl:static xl:w-[550px] xl:bg-transparent xl:px-0"
        )}
      >
        <Badge className="px-3 py-2.5 text-sm font-light rounded-full bg-[#28282C] flex justify-start gap-4">
          <div className="flex justify-center items-center w-[18px] h-[18px] rounded-full bg-gray-500">
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
          <div>Available for work</div>
        </Badge>
        <h1
          className={cn(
            "mt-1.5 mb-6 text-[40px] md:text-[56px] leading-[120%] w-full",
            "xl:w-3/4"
          )}
        >
          Your trusted partner for quality home improvement
        </h1>
        <h3 className="mb-9 text-xl w-full md:w-1/2">
          LifetimeArt delivers expert home improvements, creating beautiful and
          functional spaces with quality craftsmanship.
        </h3>
        <Button className="w-fit h-fit bg-white/10 px-4 py-2.5 rounded-full flex justify-between items-center gap-6 hover:cursor-pointer">
          <h4>Work with us</h4>
          <div className="p-1.5 rounded-full bg-white text-black">
            <GoArrowUpRight />
          </div>
        </Button>
      </div>
      <div className="w-full h-full xl:w-[653px] relative">
        <img
          src="/images/landing/landing.jpg"
          alt="landing"
          className="object-cover w-full h-full rounded-xl overflow-hidden"
        />
        <div className="w-60 absolute hidden bottom-10 right-10 p-6 bg-[#1010144D]/30 rounded-md xl:flex flex-col gap-2 backdrop-blur-xs">
          <div className="flex items-center gap-1 text-white">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
          </div>
          <h4 className="text-white">
            "LifetimeArt has been a game- changer for my home. Their ability to
            blend functionality with exquisite design is unparalleled."
          </h4>
        </div>
      </div>
    </div>
  );
};
