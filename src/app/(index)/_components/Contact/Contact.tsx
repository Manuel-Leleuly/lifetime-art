import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FormInput } from "./FormInput";

export const Contact = () => {
  return (
    <section id="contact" className="w-full bg-white px-5">
      <div
        className={cn(
          "bg-black rounded-2xl w-full px-5 py-[60px] text-white",
          "xl:px-20 xl:py-[90px]"
        )}
      >
        <div
          className={cn("flex flex-col justify-between gap-10", "md:flex-row")}
        >
          <div className="w-full">
            <Badge className="rounded-full bg-[#28282C] text-white">
              Contact
            </Badge>
            <h3 className="text-5xl my-5">Get in touch</h3>
            <p>
              For any inquiries or to explore your vision further, we invite you
              to contact our professional team using the details provided below.
            </p>

            <div className="flex flex-col gap-4 mt-12">
              <strong>Office</strong>
              <p>150 Old Park Ln, London W1K 1QZ</p>
              <strong>Email</strong>
              <p>hello@refit.com</p>
              <strong>Telephone</strong>
              <p>07716 534984</p>
            </div>

            <div className="w-full h-0.5 bg-[#D0D1DB1A]/70 mt-7 mb-12" />

            <div className="flex flex-col gap-2">
              <strong>Follow us</strong>
              <div className="flex items-center gap-4 text-white text-2xl">
                <FaInstagram />
                <FaTiktok />
                <FaXTwitter />
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white w-full h-fit p-5 rounded-xl flex flex-col gap-4">
            <FormInput
              label="Name"
              name="name"
              isRequired
              placeholder="John Smith"
            />
            <FormInput
              label="Email"
              name="email"
              isRequired
              placeholder="johnsmith@gmail.com"
            />
            <FormInput
              label="Phone Number"
              name="phoneNumber"
              placeholder="+44789 123456"
            />
            <FormInput
              label="Message"
              name="message"
              isRequired
              isTextArea
              placeholder="Hello, I'd like to inquire about..."
            />
            <Button className="w-full text-center">Send message</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
