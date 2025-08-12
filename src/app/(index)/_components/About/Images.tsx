"use client";

import { animate } from "motion";
import { motion, useMotionValue } from "motion/react";
import Image from "next/image";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

const availableImages = [
  "bathroom",
  "extension",
  "external_works",
  "kitchen",
  "loft_convertions",
  "restoration",
];

export const Images = () => {
  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    const finalPosition = -width / 2 - 8;

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div className="overflow-hidden w-full h-[400px] relative">
      <motion.div
        ref={ref}
        style={{ x: xTranslation }}
        className="absolute left-0 flex items-center gap-4"
      >
        {availableImages.concat(availableImages).map((imageName, index) => (
          <div key={imageName + index} className="w-80 h-[400px]">
            <Image
              width={320}
              height={400}
              src={`/images/about/${imageName}.png`}
              alt={imageName}
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
