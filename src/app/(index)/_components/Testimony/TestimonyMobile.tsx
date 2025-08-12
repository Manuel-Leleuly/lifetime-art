"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

import LauraDaviesPng from "@/assets/images/our-work/avatar/LauraDavies.png";
import { cn } from "@/lib/utils";
import { TestimonyCard } from "./TestimonyCard";

export const TestimonyMobile = () => {
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
          <TestimonyCard
            description="I couldn’t be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!"
            avatar={{
              image: LauraDaviesPng,
              name: "Emily Carter",
            }}
          />
        </CarouselItem>

        <CarouselItem>
          <TestimonyCard
            description="Refit did an incredible job on our kitchen. The craftsmanship was top-notch, and the team was professional from start to finish. Highly recommend!"
            avatar={{
              image: LauraDaviesPng,
              name: "Emily Carter",
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
