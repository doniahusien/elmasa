import { useTranslations } from "next-intl";
import Card from "../Card";
import type { Plan } from "@/types";
export default function Plans({packages}:{packages:Plan[]}) {
  const t = useTranslations();

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
