import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Section = ({
  children,
  id,
  className,
}: {
  children: ReactNode;
  id: string;
  className?: string;
}) => {
  return (
    <section
      id={id}
      className={cn("w-full min-h-screen bg-white py-[120px] px-10", className)}
    >
      {children}
    </section>
  );
};
