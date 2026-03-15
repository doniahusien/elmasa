import { useTranslations } from "next-intl";
import FeatureCard from "../Card/FeatureCard";
import { FeatureWhy } from "@/types";

export default function WhyUs({ whyUs }: { whyUs: Array<FeatureWhy> }) {
  const t = useTranslations();

  return (
    <>
      <div className="bg-primary-50 py-5">
        <div className="  container mx-auto px-4 space-y-8">
          <div>
            <h2 className="text-h4 md:text-h3 font-bold mb-3">
              {t("TITLES.why_us")}
            </h2>
            <p className="text-neutral-white-900 text-st3 md:text-h5">
              {t("LABELS.why_us")}
            </p>
          </div>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {whyUs.map((item) => (
            <FeatureCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
