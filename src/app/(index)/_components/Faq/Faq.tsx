import { Section } from "@/components/Section";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";
import { FaqItem } from "./FaqItem";

export const Faq = () => {
  return (
    <Section id="faq">
      {/* FIRST */}
      <div className="flex flex-col items-center text-center">
        <Badge className="bg-[#28282C] rounded-full text-[1rem]">FAQs</Badge>
        <h1 className="mt-2 mb-4 text-5xl font-medium text-[#101014]">
          Answering Your Questions
        </h1>
        <h3>Got more questions? Send us your enquiry below</h3>
      </div>

      {/* SECOND */}
      <div className="flex justify-center mt-14 mb-20">
        <Button className="w-fit h-fit bg-[#1010141A] px-4 py-2.5 rounded-full flex justify-between items-center gap-6 hover:cursor-pointer">
          <h4 className="text-black">Get in touch</h4>
          <div className="p-1.5 rounded-full bg-black text-white">
            <GoArrowUpRight />
          </div>
        </Button>
      </div>

      {/* THIRD */}
      <div>
        <Accordion type="single" collapsible className="flex flex-col gap-4">
          <FaqItem
            triggerLabel="What area are you based in?"
            value="1"
            content="We primarily serve London and the surrounding areas, but depending on the project, we can travel further. Contact us to discuss your location and requirements."
          />
          <FaqItem
            triggerLabel="How long does a typical project take?"
            value="2"
            content="Project timelines vary depending on size and complexity. We’ll provide an estimated schedule during your consultation and keep you updated throughout the process."
          />
          <FaqItem
            triggerLabel="Do you offer free quotes?"
            value="3"
            content="Yes, we offer free, no-obligation quotes. Our team will visit your property, assess your needs, and provide a detailed breakdown."
          />
          <FaqItem
            triggerLabel="Will I need planning permission for my project?"
            value="4"
            content="This depends on the type and scope of your project. We can guide you through local regulations and help with applications if needed."
          />
          <FaqItem
            triggerLabel="Do you provide a guarantee for your work?"
            value="5"
            content="Absolutely. All of our work is backed by a guarantee for quality and durability, giving you peace of mind."
          />
          <FaqItem
            triggerLabel="Can I stay in my home while the work is being done?"
            value="6"
            content="In most cases, yes—though it may depend on the scope of work and areas affected. We’ll discuss options to minimise disruption."
          />
          <FaqItem
            triggerLabel="How do I get started with a project?"
            value="7"
            content="Simply get in touch with our team. We’ll arrange a consultation, discuss your ideas, and prepare a tailored plan and quote."
          />
        </Accordion>
      </div>
    </Section>
  );
};
