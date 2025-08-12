import { Badge } from "@/components/ui/badge";

import { Section } from "@/components/Section";
import { OurWorkDesktop } from "./OurWorkDesktop";
import { OurWorkMobile } from "./OurWorkMobile";

export const OurWork = () => {
  return (
    <Section id="our_work">
      {/* FIRST */}
      <div className="flex flex-col items-center text-center">
        <Badge className="bg-[#28282C] rounded-full text-[1rem]">
          Our Work
        </Badge>
        <h1 className="mt-2 mb-4 text-5xl font-medium text-[#101014]">
          Get inspired by our work
        </h1>
        <h3>
          See how we’ve transformed homes with our expert craftsmanship and
          attention to detail.
        </h3>
      </div>

      {/* SECOND */}
      <div className="mt-[120px]">
        <div className="hidden md:block">
          <OurWorkDesktop />
        </div>
        <div className="md:hidden">
          <OurWorkMobile />
        </div>
      </div>
    </Section>
  );
};
