import {
  BriefcaseBusiness,
  Gift,
  Palette,
  Share2,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import FeatureCard from "../Card/FeatureCard";
import { Feature } from "@/types";

export default function WhyUs() {
  const t = useTranslations();
  const features:Array<Feature> = [
    {
      id: 1,
      icon: ShieldCheck,
      title: {
        ar: "الثقة",
        en: "Trust",
      },
      label: {
        ar: "نقدم باقات متنوعة تناسب جميع الميزانيات، مع إمكانية التعديل حسب احتياجاتكم.",
        en: "We offer a variety of packages to suit all budgets, with the ability to customize based on your needs.",
      },
    },
    {
      id: 2,
      icon: Palette,
      title: {
        ar: "تصاميم مخصصة",
        en: "Custom Designs",
      },
      label: {
        ar: "نوفر خيارات ديكور متنوعة قابلة للتخصيص لتناسب ذوقكم وتفاصيل مناسبتكم الفريدة.",
        en: "We provide various customizable decor options to match your taste and the details of your special event.",
      },
    },
    {
      id: 3,
      icon: Gift,
      title: {
        ar: "باقات مميزة",
        en: "Special Packages",
      },
      label: {
        ar: "نلتزم بتقديم أعلى مستوى من الجودة والخدمة، مما يجعلنا خيارًا موثوقًا لدى عملائنا دائمًا.",
        en: "We are committed to delivering the highest level of quality and service, making us a trusted choice for our clients.",
      },
    },
    {
      id: 4,
      icon: BriefcaseBusiness,
      title: {
        ar: "الاحترافية",
        en: "Professionalism",
      },
      label: {
        ar: "نحرص على تلبية طلباتكم الخاصة وتوفير حلول مرنة تناسب نوع المناسبة وطبيعة الضيوف.",
        en: "We ensure your special requests are met and provide flexible solutions that suit the type of event and guests.",
      },
    },
    {
      id: 5,
      icon: Users,
      title: {
        ar: "التواصل الجيد",
        en: "Good Communication",
      },
      label: {
        ar: "نهتم بالتواصل المستمر معكم لضمان تلبية جميع التوقعات وتحقيق رؤيتكم بشكل دقيق.",
        en: "We maintain continuous communication to ensure all expectations are met and your vision is achieved.",
      },
    },
    {
      id: 6,
      icon: Share2,
      title: {
        ar: "المرونة",
        en: "Flexibility",
      },
      label: {
        ar: "فريقنا يمتلك خبرة طويلة في تنظيم المناسبات ويحرص على أدق التفاصيل لضمان نجاح الحفل.",
        en: "Our team has extensive experience in event planning and focuses on every detail to ensure a successful event.",
      },
    },
  ];
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
            {features.map((i) => (
            <FeatureCard key={i.id} item={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
