"use client";

import LauraDaviesPng from "@/assets/images/our-work/avatar/LauraDavies.png";
import { animate, motion, useMotionValue } from "motion/react";
import { useEffect } from "react";
import useMeasure from "react-use-measure";
import { TestimonyCard } from "./TestimonyCard";

export const TestimonyDesktop = () => {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const yTranslation = useMotionValue(0);

  useEffect(() => {
    const finalPositionX = -width / 2 - 8;
    const finalPositionY = width / 2 - 8;

    const controlsX = animate(xTranslation, [0, finalPositionX], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    const controlsY = animate(yTranslation, [0, finalPositionY], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => {
      controlsX.stop();
      controlsY.stop();
    };
  }, [xTranslation, width]);

  return (
    <>
      <div className="overflow-hidden w-full h-[300px] relative">
        <motion.div
          ref={ref}
          style={{ x: xTranslation }}
          className="absolute left-0 flex items-center gap-4 z-[9999]"
        >
          {new Array(20).fill(0).map((_, index) => (
            <TestimonyCard
              key={index}
              description="I couldn’t be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!"
              avatar={{
                image: LauraDaviesPng,
                name: "Emily Carter",
              }}
              className="w-[343px]"
            />
          ))}
        </motion.div>
      </div>
      <div className="overflow-hidden w-full h-[300px] relative">
        <motion.div
          ref={ref}
          style={{ x: yTranslation }}
          className="absolute right-0 flex items-center gap-4 z-[9999]"
        >
          {new Array(20).fill(0).map((_, index) => (
            <TestimonyCard
              key={index}
              description="I couldn’t be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!"
              avatar={{
                image: LauraDaviesPng,
                name: "Emily Carter",
              }}
              className="w-[343px]"
            />
          ))}
        </motion.div>
      </div>
    </>
  );
};
