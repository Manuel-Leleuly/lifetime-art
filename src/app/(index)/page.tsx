import { About } from "./_components/About/About";
import { Contact } from "./_components/Contact/Contact";
import { Faq } from "./_components/Faq/Faq";
import { Footer } from "./_components/Footer/Footer";
import { Hero } from "./_components/Hero/Hero";
import { OurWork } from "./_components/OurWork/OurWork";
import { Services } from "./_components/Services/Services";
import { Testimony } from "./_components/Testimony/Testimony";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <OurWork />
      <Testimony />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
