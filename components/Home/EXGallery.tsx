import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "@/components/Base/Button";
import { GalleryImage } from "@/types";

export default function ExGallery({galleryData}:{galleryData:GalleryImage[]}) {
  const t = useTranslations();
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col gap-5">
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
        </div>

        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-4 md:grid-rows-6 gap-5 w-full justify-items-stretch" style={{ gridAutoRows: '1fr' }}>
          {galleryData.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl w-full h-full "
              style={{
                gridColumn: item.grid_column,
                gridRow: item.grid_row,
              }}
            >
              <Image
                src={item.file}
                alt={item.name}
                width={800}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}