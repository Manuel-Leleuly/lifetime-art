import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";

interface Props {
  image: StaticImageData;
  title: string;
  description: string;
  tags: string[];
  quote: string;
  avatar: {
    image: StaticImageData;
    name: string;
  };
  className?: string;
}

export const OurWorkCard = ({
  image,
  title,
  description,
  tags,
  quote,
  avatar,
  className,
}: Props) => {
  return (
    <div className={cn("w-full bg-[#E9ECF2] p-5 rounded-lg", className)}>
      {/* IMAGE AND REVIEW */}
      <div className="flex flex-col gap-10 md:flex-row md:mb-4">
        <div className="rounded-lg overflow-hidden">
          <Image src={image} alt={title} className="w-full h-full" />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-[40px] font-medium leading-[120%] mb-4">
            {title}
          </h1>
          <p className="font-light">{description}</p>
          <div className="flex items-center gap-4 my-6">
            {tags.map((tag, index) => (
              <Badge key={tag + index} className="rounded-full bg-[#28282C]">
                {tag}
              </Badge>
            ))}
          </div>

          {/* QUOTE */}
          <div className="flex gap-2 mb-6">
            <div>
              <RiDoubleQuotesL />
            </div>
            <h3>{quote}</h3>
          </div>

          {/* AVATAR */}
          <div className="flex items-center md:justify-start gap-4 w-full justify-center">
            <Avatar>
              <AvatarImage src={avatar.image.src} className="object-cover" />
              <AvatarFallback>{avatar.name}</AvatarFallback>
            </Avatar>
            <div>{avatar.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
