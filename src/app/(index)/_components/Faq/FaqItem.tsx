import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqItem = ({
  value,
  content,
  triggerLabel,
}: {
  value: string;
  triggerLabel: string;
  content: string;
}) => {
  return (
    <AccordionItem
      value={value}
      className="w-full bg-[#FAFAFA] border border-[#E6E6E6] rounded-xl px-5"
    >
      <AccordionTrigger className="text-[#101014] text-xl font-medium items-center">
        {triggerLabel}
      </AccordionTrigger>
      <AccordionContent className="mt-5">
        <p>{content}</p>
      </AccordionContent>
    </AccordionItem>
  );
};
