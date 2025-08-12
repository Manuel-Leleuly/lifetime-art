import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Images } from "./Images";
import { Statistic } from "./Statistic";

export const About = () => {
  return (
    <Section id="about" className="px-0">
      {/* FIRST */}
      <div
        className={cn(
          "flex flex-col px-10 gap-20 justify-between items-start mb-[120px]",
          "2xl:px-[320px]",
          "xl:px-20",
          "md:flex-row"
        )}
      >
        <div className="w-full">
          <Badge className="rounded-full bg-[#28282C] text-[1rem]">
            About us
          </Badge>
          <h1 className="text-[#101014] text-5xl leading-14">
            Home
            <br />
            Improvement
            <br />
            Specialists
          </h1>
        </div>

        <div className="max-w-[600px] text-xl leading-[170%]">
          <h3>
            Welcome to LifetimeArt , your trusted home improvement experts,
            dedicated to transforming homes with precision and care. With years
            of experience in building kitchens, bathrooms, garages, and more, we
            take pride in delivering top-quality craftsmanship and a seamless
            customer experience. Our mission is to bring your vision to life
            while ensuring clear communication and expert guidance at every
            step. Let’s create a home you’ll love!
          </h3>
        </div>
      </div>

      {/* SECOND */}
      <Images />

      {/* THIRD */}
      <div
        className={cn(
          "grid grid-cols-1 gap-[120px] px-10 my-[120px] justify-between items-center w-full",
          "2xl:px-[320px]",
          "xl:!grid-cols-4 xl:px-20",
          "md:grid-cols-2"
        )}
      >
        <Statistic
          valStr="8"
          title="Years experience"
          description="Improving homes with expert craftsmanship for years"
        />
        <Statistic
          valStr="26"
          title="Projects completed"
          description="Over 250 successful projects delivered with quality and care"
        />
        <Statistic
          valStr="30"
          title="Skilled Tradespeople"
          description="Our team of 30 experts ensures top-quality results"
        />
        <Statistic
          valStr="100%"
          title="Client satisfaction"
          description="All of our clients are satisfied with our work and service"
        />
      </div>
    </Section>
  );
};
