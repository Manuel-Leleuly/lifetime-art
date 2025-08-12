"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { NavbarMenu } from "./NavbarMenu";

export const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <nav
        className={cn(
          "flex justify-between items-center px-[20px] py-[15px] rounded-xl text-white bg-black/60 relative z-[9999]",
          "3xl:!px-80 3xl:!pr-[330px]",
          "xl:!py-10 xl:!px-20 xl:!pr-[90px] xl:absolute xl:top-0 xl:left-0 xl:right-0",
          "md:bg-transparent md:py-[30px] md:px-2.5"
        )}
      >
        <img src="/logo.svg" />

        {/* DESKTOP */}
        <div className="hidden md:flex justify-between items-center gap-8">
          <NavbarMenu href="#about">About</NavbarMenu>
          <NavbarMenu href="#services">Services</NavbarMenu>
          <NavbarMenu href="#our_work">Our Work</NavbarMenu>
          <NavbarMenu href="#faq">FAQs</NavbarMenu>
          <NavbarMenu href="#contact">Contact</NavbarMenu>
        </div>

        {/* BURGER */}
        <div
          onClick={() => setIsOpened((prevState) => !prevState)}
          className="flex flex-col gap-[9px] md:hidden"
        >
          <div
            className={cn(
              "w-[40px] h-[2px] bg-white transition-all duration-300",
              isOpened && "opacity-0"
            )}
          />
          <div className="relative mb-[2px]">
            <div
              className={cn(
                "absolute w-[40px] h-[2px] bg-white transition-all duration-300",
                isOpened && "-rotate-45"
              )}
            />
            <div
              className={cn(
                "absolute w-[40px] h-[2px] bg-white transition-all duration-300",
                isOpened ? "opacity-100 rotate-45" : "opacity-0"
              )}
            />
          </div>
          <div
            className={cn(
              "w-[40px] h-[2px] bg-white transition-all duration-300",
              isOpened && "opacity-0"
            )}
          />
        </div>
      </nav>
      {/* MOBILE */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 bottom-0 px-[40px] pt-[120px] text-2xl bg-black/60 z-[9998] backdrop-blur-xs",
          "md:hidden block",
          "transition-all duration-300 ease-in-out",
          isOpened ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="flex flex-col gap-6">
          <NavbarMenu onClick={() => setIsOpened(false)} href="#about">
            About
          </NavbarMenu>
          <NavbarMenu onClick={() => setIsOpened(false)} href="#services">
            Services
          </NavbarMenu>
          <NavbarMenu onClick={() => setIsOpened(false)} href="#our_work">
            Our Work
          </NavbarMenu>
          <NavbarMenu onClick={() => setIsOpened(false)} href="#faq">
            FAQs
          </NavbarMenu>
          <NavbarMenu onClick={() => setIsOpened(false)} href="#contact">
            Contact
          </NavbarMenu>
        </div>
      </div>
    </>
  );
};
