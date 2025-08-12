import { cn } from "@/lib/utils";
import { Content } from "./Content";
import { Navbar } from "./Navbar";

export const Hero = () => {
  return (
    <section
      id="hero"
      className={cn(
        "w-full h-screen bg-[#101014] px-5 py-5 relative flex flex-col",
        "3xl:px-80",
        "xl:py-8 xl:px-20 xl:!pt-8",
        "md:pt-0"
      )}
    >
      <Navbar />
      <Content />
    </section>
  );
};
