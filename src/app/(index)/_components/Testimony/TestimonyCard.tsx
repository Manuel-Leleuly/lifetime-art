import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";
import { IoMdStar } from "react-icons/io";

export const TestimonyCard = ({
  description,
  avatar,
  className,
}: {
  description: string;
  avatar: { image: StaticImageData; name: string };
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full rounded-xl p-8 bg-[#FAFAFA] border border-[#E6E6E6]",
        className
      )}
    >
      <div className="flex gap-2 text-2xl">
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
      </div>

      <h3 className="mt-2 mb-7">{description}</h3>

      <div className="flex items-center gap-4 w-full justify-start">
        <Avatar>
          <AvatarImage src={avatar.image.src} className="object-cover" />
          <AvatarFallback>{avatar.name}</AvatarFallback>
        </Avatar>
        <div>{avatar.name}</div>
      </div>
    </div>
  );
};
