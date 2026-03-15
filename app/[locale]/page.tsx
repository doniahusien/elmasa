import Carousel from "@/components/Base/Carousel";
import Gallery from "@/components/Home/Gallery";
import Plans from "@/components/Home/Plans";
import Reviews from "@/components/Home/Reviews";
import WhyUs from "@/components/Home/WhyUs";
import {
  getSliders,
  getPackages,
  getWhyUs,
  getReviews,
} from "@/lib/queries/home";

export default async function Home() {
  const slides = await getSliders();
  const packages = await getPackages();
  const whyUs = await getWhyUs();
  const reviews = await getReviews();
  return (
    <section className="space-y-12">
      <Carousel slides={slides} />
      <Plans packages={packages} />
      <WhyUs whyUs={whyUs} />
      <Gallery />
      <Reviews reviewsData={reviews} />
    </section>
  );
}
