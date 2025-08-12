import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { TestimonyDesktop } from "./TestimonyDesktop";
import { TestimonyMobile } from "./TestimonyMobile";

export const Testimony = () => {
  return (
    <Section id="testimony">
      {/* FIRST */}
      <div className="flex flex-col items-center text-center">
        <Badge className="bg-[#28282C] rounded-full text-[1rem]">
          Testimonials
        </Badge>
        <h1 className="mt-2 mb-4 text-5xl font-medium text-[#101014]">
          Hear from our clients
        </h1>
        <h3>
          Hear from our happy clients about their experience working with Refit
          and the quality of our craftsmanship.
        </h3>
      </div>

      {/* SECOND */}
      <div className="mt-24">
        <div className="hidden md:block w-full">
          <TestimonyDesktop />
        </div>
        <div className="md:hidden">
          <TestimonyMobile />
        </div>
      </div>
    </Section>
  );
};
