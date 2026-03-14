import { useTranslations } from "next-intl";
import Card from "../Card";
export default function Plans() {
  const t = useTranslations();
  const packages = [
    {
      id: 1,
      title: "باقة الحفل الكلاسيكي",
      description: "اطلب سعر باقتك مع ميزانيتك",
      price: 7000,
      afterPrice: 5000,
      currency: "ريال",
      rating: 5,
      image: "/images/slide1.jpg",
      badge: "خصم",
    },
    {
      id: 2,
      title: "باقة الحفل الكلاسيكي",
      description: "اطلب سعر باقتك مع ميزانيتك",
      price: 7000,
      afterPrice: 5000,

      currency: "ريال",
      rating: 5,
      image: "/images/slide1.jpg",
      badge: "خصم",
    },
    {
      id: 3,
      title: "باقة الحفل الكلاسيكي",
      description: "اطلب سعر باقتك مع ميزانيتك",
      price: 7000,
      afterPrice: 5000,
      currency: "ريال",
      rating: 4,
      image: "/images/slide1.jpg",
      badge: "خصم",
    },
    {
      id: 4,
      title: "باقة الحفل الكلاسيكي",
      description: "اطلب سعر باقتك مع ميزانيتك",
      price: 7000,
      afterPrice: 5000,
      currency: "ريال",
      rating: 5,
      image: "/images/slide1.jpg",
      badge: "خصم",
    },
  ];
  return (
    <>
      <section className="container mx-auto px-4 space-y-8">
        <div>
          <h2 className="text-h4 md:text-h3 font-bold mb-3">
            {t("TITLES.plans")}
          </h2>
          <p className="text-neutral-white-900 text-st3 md:text-h5">
            {t("LABELS.plans")}
          </p>
        </div>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {packages.map((item) => (
            <Card plan={item} key={item.id} />
          ))}
        </div>
      </section>
    </>
  );
}
