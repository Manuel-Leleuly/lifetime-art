import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { DetailAccordion } from "./DetailAccordion";

export const Services = () => {
  return (
    <Section id="services" className="bg-[#FAFAFA]">
      {/* FIRST */}
      <div className="flex flex-col items-center text-center">
        <Badge className="bg-[#28282C] rounded-full text-[1rem]">
          Services
        </Badge>
        <h1 className="mt-2 mb-4 text-5xl font-medium text-[#101014]">
          What we do
        </h1>
        <h3>
          Find out which one of your services fit the needs of your project
        </h3>
      </div>

      {/* SECOND */}
      <DetailAccordion />
    </Section>
  );
};
