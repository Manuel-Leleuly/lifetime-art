"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { OurWorkCard } from "./OurWorkCard";

import LauraDaviesPng from "@/assets/images/our-work/avatar/LauraDavies.png";
import MichaelTurnerPng from "@/assets/images/our-work/avatar/MichaelTurner.png";
import RachelMorganPng from "@/assets/images/our-work/avatar/RachelMorgan.png";

import BathroomPng from "@/assets/images/our-work/png/bathroom.png";
import GardenPng from "@/assets/images/our-work/png/garden.png";
import KitchenPng from "@/assets/images/our-work/png/kitchen.png";

import { cn } from "@/lib/utils";

export const OurWorkMobile = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} className="w-full">
      <CarouselContent>
        <CarouselItem>
          <OurWorkCard
            image={KitchenPng}
            title="Modern kitchen refit"
            description="This kitchen transformation brought sleek, modern design and enhanced  functionality to our client’s home. We installed custom cabinetry, high-quality worktops, and state-of-the-art appliances, creating a stylish yet practical space perfect for cooking and entertaining. With attention to every detail, we delivered a kitchen that balances aesthetics and usability."
            tags={["Kitchen", "4 weeks"]}
            quote="LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!"
            avatar={{
              image: RachelMorganPng,
              name: "Rachel Morgan",
            }}
          />
        </CarouselItem>

        <CarouselItem>
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
        </CarouselItem>

        <CarouselItem>
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
        </CarouselItem>
      </CarouselContent>
      <div className="flex justify-center items-center w-full gap-4 mt-4">
        {new Array(count).fill(0).map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-2.5 h-2.5 rounded-full",
              index === current - 1 ? "bg-[#101014]" : "bg-[#101014]/30"
            )}
          />
        ))}
      </div>
    </Carousel>
  );
};
