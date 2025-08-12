import { cn } from "@/lib/utils";
import Link from "next/link";

export const Footer = () => {
  return (
    <section id="footer" className="w-full bg-white px-5 pt-5">
      <footer className="w-full rounded-t-xl bg-black px-5 pb-5 pt-14 xl:px-20">
        <div
          className={cn(
            "flex flex-col gap-4",
            "md:flex-row md:justify-between md:items-start"
          )}
        >
          <img src={"/logo.svg"} className="w-[155px]" />
          <div className="flex flex-col gap-4 text-white">
            <h1 className="text-2xl font-medium">Quick Links</h1>
            <div
              className={cn(
                "grid grid-cols-2 items-center gap-2",
                "md:w-[320px]"
              )}
            >
              <Link href={"#about"}>About us</Link>
              <Link href={"#testimony"}>Testimonials</Link>
              <Link href={"#our_work"}>Our Work</Link>
              <Link href={"#faq"}>FAQs</Link>
              <Link href={"#services"}>Services</Link>
              <Link href={"#contact"}>Contact</Link>
            </div>
          </div>
        </div>

        <div className="w-full h-0.5 bg-[#D0D1DB1A]/70 my-10" />

        <div className="md:mb-14">
          <strong className="text-white">
            © 2025 LifetimeArt. All rights reserved.
          </strong>
        </div>
      </footer>
    </section>
  );
};
