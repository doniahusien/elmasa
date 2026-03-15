"use client";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { MoveLeft, MoveRight, Star } from "lucide-react";

import type { Reviews } from "@/types";
export default function Reviews({ reviewsData }: { reviewsData: Reviews }) {
  const t = useTranslations();
  return (
    <section className="bg-primary-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start justify-center md:justify-between gap-6 md:flex-row md:items-center">
          <div className="text-right">
            <h2 className="text-h4 md:text-h3 font-bold">
              {t("TITLES.client_reviews")}
            </h2>
            <p className="text-st3 text-gray-600">
              {t("LABELS.client_reviews")}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="reviews-prev inline-flex size-10 items-center justify-center  text-primary-500 transition "
              aria-label="Previous"
            >
              <MoveRight />
            </button>
            <div className="reviews-pagination flex items-center gap-1" />
            <button
              className="reviews-next inline-flex size-10 items-center justify-center  text-primary-500  transition "
              aria-label="Next"
            >
              <MoveLeft />
            </button>
          </div>
        </div>

        <Swiper
          className="reviewsSwiper mt-4 w-full "
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={1.1}
          spaceBetween={24}
          breakpoints={{
            768: { slidesPerView: 1.4 },
            1024: { slidesPerView: 2.2 },
            1280: { slidesPerView: 2.6 },
          }}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            el: ".reviews-pagination",
            clickable: false,
          }}
          navigation={{
            prevEl: ".reviews-prev",
            nextEl: ".reviews-next",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          {reviewsData?.reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="flex  flex-col justify-between rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-1 text-primary-500">
                    {Array.from({ length: 5 }).map((_, index) => {
                      const filled = index + 1 <= Math.floor(review.rating);
                      const half =
                        index + 1 === Math.ceil(review.rating) &&
                        review.rating % 1 !== 0;
                      return (
                        <Star
                          key={index}
                          size={18}
                          className={
                            filled
                              ? "text-primary-400"
                              : half
                                ? "text-primary-400/70"
                                : "text-gray-300"
                          }
                        />
                      );
                    })}
                  </div>
                  <span className="text-5xl text-primary-900">“</span>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-gray-600">
                  {review.description}
                </p>

                <p className="mt-6 text-right font-semibold text-gray-800">
                  {review.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
