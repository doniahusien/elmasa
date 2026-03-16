import Image from "next/image";
import { Star } from "lucide-react";
import Button from "../Base/Button";
import { useTranslations } from "next-intl";
import type { Plan } from "@/types";
export default function Card({ plan }: { plan: Plan }) {
  const t = useTranslations();
  const stars = Array.from({ length: 5 });

  return (
    <div className="relative flex flex-col w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="relative w-full h-40">
        <Image
          src={plan.images[0].url}
          alt={plan.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-3 px-4 pb-4 pt-3">
        <h3 className="text-lg font-semibold text-st2">{plan.name}</h3>
        <div className="flex  gap-0.5 text-yellow-500">
          {stars.map((_, index) => (
            <Star key={index} size={16} />
          ))}
        </div>
        <p className="text-sm text-gray-500">{plan.description}</p>
      {plan.show_price>0 &&  <div className="flex items-center gap-5 flex-row ">
          {plan.has_discount && <span className="text-base font-semibold text-gray-700">
            {plan.discountedPrice?.toLocaleString()}
            <Image
              src="/Saudi_Riyal.svg"
              width={10}
              height={10}
              alt="currency"
              className="inline-block ms-1"
            />
          </span>}
          <span className={`text-base text-gray-700 ${plan.has_discount ? "text-gray-400 line-through" : "text-gray-700"}`}>
            {plan.price?.toLocaleString()}
            <Image
              src="/Saudi_Riyal.svg"
              width={10}
              height={10}
              alt="currency"
              className="inline-block ms-1"
            />
          </span>
        </div>}
        <Button>{t("BUTTONS.see_details")}</Button>
      </div>
    </div>
  );
}
