import Carousel from "@/components/Base/Carousel";
import Gallery from "@/components/Home/Gallery";
import Plans from "@/components/Home/Plans";
import Reviews from "@/components/Home/Reviews";
import WhyUs from "@/components/Home/WhyUs";
export default function Home() {
  return (
    <section className="space-y-12">
      <Carousel />
      <Plans />
      <WhyUs />
      <Gallery />
      <Reviews />
    </section>
  );
}
