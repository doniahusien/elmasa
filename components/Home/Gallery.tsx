import Image from "next/image";
import { Play } from "lucide-react";
import { useTranslations } from "next-intl";
import Button from "@/components/Base/Button"



const images = [
  "/images/slide1.jpg",
  "/images/slide2.png",
  "/images/slide1.png",
  "/images/slide1.jpg",
  "/images/slide2.png",
];

export default function Gallery() {
  const t = useTranslations();

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="grid gap-5">
          <div className="overflow-hidden rounded-xl">
            <Image
              src={images[0]}
              alt="gallery photo"
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-xl">
            <Image
              src={images[1]}
              alt="gallery photo"
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl">
          <Image
            src={images[2]}
            alt="gallery photo"
            width={900}
            height={500}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow">
              <Play className="h-7 w-7 text-primary-800" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-h4 font-bold mb-3">
            {t('TITLES.gallery')}
            </h2>
            <p className="text-st3 text-gray-600 mb-6">
         {t('LABELS.gallery')}
            </p>
            <Button>
              {t('BUTTONS.view_more')}
            </Button>
          </div>

          <div className="grid grid-cols-1">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={images[4]}
                alt="gallery photo"
                width={500}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 overflow-hidden rounded-xl">
        <Image
          src={images[0]}
          alt="gallery photo"
          width={1600}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
