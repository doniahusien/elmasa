"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
type Slide = {
  image: string;
  title?: string;
  subtitle?: string;
  primaryButton?: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
};

type CarouselProps = {
  slides: Slide[];
};

const defaultSlides: Slide[] = [
  {
    image: "/images/slide1.jpg",
    title:  " اجعل مناسبتك ذكرى لا تنسى وتصميم مميز يجمع بين الأناقة والرفاهيّة",
    subtitle: "تصميم مميز يجمع بين الأناقة والرفاهيّة",
    primaryButton: { label: "احجز الآن", href: "/booking" },
    secondaryButton: { label: "شاهد المعرض", href: "/exhibition" },
  },
  {
    image: "/images/slide2.png",
    title: "تصميم مميز يجمع بين الأناقة والرفاهيّة ونحن معك خطوة بخطوة لتنظيم مناسبتك",
    subtitle: "نحن معك خطوة بخطوة لتنظيم مناسبتك",
    primaryButton: { label: "احجز الآن", href: "/booking" },
    secondaryButton: { label: "شاهد المعرض", href: "/exhibition" },
  },
];

export default function Carousel({ slides = defaultSlides }: CarouselProps) {
    const t = useTranslations();
  return (
    <div className="w-full">
      <div className="relative w-full lg:h-[calc(100vh-80px)] h-120">
        <Swiper
          className="w-full"
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          speed={2000}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full lg:h-[calc(100vh-80px)] h-120 ">
                <Image
                  src={slide.image}
                  alt={slide.title ?? `Slide ${index + 1}`}
                  fill
                  className="object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/70 via-black/20 to-black/90" />

                <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 px-6 md:px-14 lg:px-20">
                  {slide.title && (
                    <h2 className="max-w-xl leading-relaxed text-b4 lg:text-b1 font-semibold text-white ">
                      {slide.title}
                    </h2>
                  )}
               
                  <div className="flex flex-wrap gap-3">
                    {slide.primaryButton && (
                      <Link
                        href="/booking"
                        className="inline-flex items-center gap-2 rounded-2xl bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:bg-amber-400"
                      >
                        {t('BUTTONS.book_now')}
                      </Link>
                    )}
                    {slide.secondaryButton && (
                      <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                      >
                        {t('BUTTONS.view_gallery')}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
