"use client";

import { AnimatedDiv } from "./AnimatedDiv";
import { OurWorkCard } from "./OurWorkCard";

import LauraDaviesPng from "@/assets/images/our-work/avatar/LauraDavies.png";
import MichaelTurnerPng from "@/assets/images/our-work/avatar/MichaelTurner.png";

import BathroomPng from "@/assets/images/our-work/png/bathroom.png";
import GardenPng from "@/assets/images/our-work/png/garden.png";

export const OurWorkDesktop = () => {
  return (
    <div className="flex flex-col gap-4">
      <AnimatedDiv>
        <OurWorkCard
          image={GardenPng}
          title="External garden path build"
          description="Our team designed and built a durable, visually appealing garden path to enhance the outdoor space. Using premium materials, we created a seamless walkway that blends naturally with the landscape, providing both functionality and aesthetic charm. The result is a stylish, well-crafted path 
that elevates the overall garden design."
          tags={["External Works", "6 weeks"]}
          quote="The team at LifetimeArt did an amazing job on our garden path. It’s sturdy, looks fantastic, and has completely transformed our outdoor space. They listened to our vision and delivered exactly what we wanted—highly recommended!"
          avatar={{
            image: MichaelTurnerPng,
            name: "Michael Turner",
          }}
          className="bg-[#101014] text-white"
        />
      </AnimatedDiv>
      <AnimatedDiv>
        <OurWorkCard
          image={BathroomPng}
          title="Bathroom renovation"
          description="We revitalized this bathroom with a fresh, modern design, incorporating high-end tiling, sleek fixtures, and efficient lighting. The layout was optimized to maximize space, creating a luxurious and relaxing atmosphere. The final result is a beautifully crafted bathroom that enhances both 
comfort and functionality."
          tags={["Bathroom", "7 weeks"]}
          quote="LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!"
          avatar={{
            image: LauraDaviesPng,
            name: "Laura Davies",
          }}
        />
      </AnimatedDiv>
    </div>
  );
};
