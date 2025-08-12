"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ReactNode, useState } from "react";

export const NavbarMenu = ({
  children,
  href,
  onClick,
}: {
  children: ReactNode;
  href: string;
  onClick?: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex flex-col w-fit"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      <a href={href} className="text-white">
        {children}
      </a>
      <div className="flex items-center justify-center">
        <div
          className={cn(
            "h-[2px] bg-white transition-all duration-400 ease-in-out",
            isHovered ? "w-full" : "w-0"
          )}
        />
        <div
          className={cn(
            "h-[2px] bg-white transition-all duration-400 ease-in-out",
            isHovered ? "w-full" : "w-0"
          )}
        />
      </div>
    </motion.div>
  );
};
