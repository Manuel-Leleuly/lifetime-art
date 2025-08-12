"use client";

import { BathroomSvg } from "@/assets/images/services/accordion-icon/bathroom";
import { ExtensionSvg } from "@/assets/images/services/accordion-icon/extension";
import { ExternalWorkSvg } from "@/assets/images/services/accordion-icon/external_work";
import { KitchenSvg } from "@/assets/images/services/accordion-icon/kitchen";
import { LoftSvg } from "@/assets/images/services/accordion-icon/loft";
import { RestorationSvg } from "@/assets/images/services/accordion-icon/restoration";
import BathroomPng from "@/assets/images/services/png/bathroom.png";
import ExtensionPng from "@/assets/images/services/png/extension.png";
import ExternalWorkPng from "@/assets/images/services/png/external_works.png";
import KitchenPng from "@/assets/images/services/png/kitchen.png";
import LoftConvertionPng from "@/assets/images/services/png/loft_convertions.png";
import RestorationPng from "@/assets/images/services/png/restoration.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

enum OurWorkContentLabel {
  kitchen = "kitchen",
  loft = "loft",
  bathroom = "bathroom",
  extension = "extension",
  restoration = "restoration",
  "external-work" = "external-work",
}

export const DetailAccordion = () => {
  const [selectedLabel, setSelectedLabel] = useState<
    keyof typeof OurWorkContentLabel
  >(OurWorkContentLabel.kitchen);

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-20 relative mt-24",
        "md:flex-row md:justify-center md:gap-5"
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedLabel}
          className={cn("w-full max-w-[432px]", "md:max-w-[560px]")}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={(() => {
              switch (selectedLabel) {
                case OurWorkContentLabel.kitchen:
                  return KitchenPng;
                case OurWorkContentLabel.bathroom:
                  return BathroomPng;
                case OurWorkContentLabel.extension:
                  return ExtensionPng;
                case OurWorkContentLabel["external-work"]:
                  return ExternalWorkPng;
                case OurWorkContentLabel.loft:
                  return LoftConvertionPng;
                default:
                  return RestorationPng;
              }
            })()}
            className="rounded-xl w-full h-full overflow-hidden"
            alt="kitchen"
          />
        </motion.div>
      </AnimatePresence>
      <div>
        <Accordion
          type="single"
          collapsible
          className={cn(
            "w-screen px-10",
            "md:w-full md:max-w-[560px] md:min-w-[430px]"
          )}
          defaultValue={OurWorkContentLabel.kitchen}
        >
          <AccordionItem
            value={OurWorkContentLabel.kitchen}
            onClick={() => setSelectedLabel(OurWorkContentLabel.kitchen)}
          >
            <AccordionTrigger className="items-center">
              <div className="flex justify-start items-center gap-5">
                <KitchenSvg />
                <h3 className="text-xl">Kitchens</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="mt-5 mb-8 font-light">
              <p>
                At LifetimeArt, we design and build stunning kitchens tailored
                to your style and needs. Whether you're after a sleek modern
                space or a classic, timeless look, our expert team delivers
                high-quality craftsmanship, functionality, and attention to
                detail to create the heart of your home.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value={OurWorkContentLabel.loft}
            onClick={() => setSelectedLabel(OurWorkContentLabel.loft)}
          >
            <AccordionTrigger className="items-center">
              <div className="flex justify-start items-center gap-5">
                <LoftSvg />
                <h3 className="text-xl">Loft Conversions</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="mt-5 mb-8 font-light">
              <p>
                Transform unused loft space into a beautiful, practical part of
                your home. From cozy bedrooms to bright home offices, we handle
                everything from structural adjustments to finishing touches,
                ensuring your new space is safe, stylish, and seamlessly
                integrated with your existing home.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value={OurWorkContentLabel.bathroom}
            onClick={() => setSelectedLabel(OurWorkContentLabel.bathroom)}
          >
            <AccordionTrigger className="items-center">
              <div className="flex justify-start items-center gap-5">
                <BathroomSvg />
                <h3 className="text-xl">Bathrooms</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="mt-5 mb-8 font-light">
              <p>
                We create bathrooms that balance relaxation and practicality,
                with designs ranging from spa-inspired retreats to minimalist,
                functional spaces. Our team sources high-quality fixtures and
                finishes, ensuring durability, elegance, and comfort for years
                to come.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value={OurWorkContentLabel.extension}
            onClick={() => setSelectedLabel(OurWorkContentLabel.extension)}
          >
            <AccordionTrigger className="items-center">
              <div className="flex justify-start items-center gap-5">
                <ExtensionSvg />
                <h3 className="text-xl">Extensions</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="mt-5 mb-8 font-light">
              <p>
                Expand your living space without compromising on style. Whether
                it’s a kitchen extension, a new family room, or an entire
                additional floor, we work closely with you to design and build
                an extension that complements your home and adds value.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value={OurWorkContentLabel.restoration}
            onClick={() => setSelectedLabel(OurWorkContentLabel.restoration)}
          >
            <AccordionTrigger className="items-center">
              <div className="flex justify-start items-center gap-5">
                <RestorationSvg />
                <h3 className="text-xl">Restorations</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="mt-5 mb-8 font-light">
              <p>
                Preserve the charm of your property while upgrading it for
                modern living. Our restoration work combines traditional
                craftsmanship with modern techniques to breathe new life into
                historic or worn-down spaces.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value={OurWorkContentLabel["external-work"]}
            onClick={() =>
              setSelectedLabel(OurWorkContentLabel["external-work"])
            }
          >
            <AccordionTrigger className="items-center">
              <div className="flex justify-start items-center gap-5">
                <ExternalWorkSvg />
                <h3 className="text-xl">External Works</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="mt-5 mb-8 font-light">
              <p>
                Enhance the beauty and functionality of your outdoor areas. From
                garden landscaping to patios, pathways, and exterior lighting,
                we create inviting spaces that connect your home to nature.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
