import About from "../src/components/About/About";
import Feature from "../src/components/Features/Features";
import Hero from "../src/components/Hero/Hero";
import ImageSlider from "../src/components/ImageSlider/ImageSlider";
import Pricing from "../src/components/Pricing/Pricing";
import Stats from "../src/components/Stats/Stats";
import Testimonials from "../src/components/Testimonials/Testimonials";
import WhyChooseUs from "../src/components/WhyChooseUs/WhyChooseUs";
import Brands from "../src/components/brands/Brands";
//import Brands from "../src/components/Brands/Brands";

export default function Home() {
  return (
    <div>
      <Hero />
      <Brands />
      <About />
      <Stats />
      <Feature />
      <WhyChooseUs />
      <ImageSlider />
      <Pricing/>
      <Testimonials />
    </div>
  )
}
