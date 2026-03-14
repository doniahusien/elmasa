import { useLocale } from "next-intl";

    import { Feature } from "@/types";

export default function FeatureCard({ item }: { item: Feature }) {
  const locale = useLocale();
  
    return (
    <div className="bg-white hover:scale-105 transition duration-200  p-3 space-y-4 rounded-md" key={item.id}>
      <div className=" w-fit p-3 text-white rounded-md bg-primary-500">
        <item.icon />
      </div>
      <h3 className="font-medium text-st2 md:text-st1">
        {locale === "ar" ? item.title.ar : item.title.en}
      </h3>
      <p className="text-gray-20">
        {locale === "ar" ? item.label.ar : item.label.en}
      </p>
    </div>
  );
}
