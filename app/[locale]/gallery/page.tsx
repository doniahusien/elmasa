import ExGallery from "@/components/Home/EXGallery";

import { getGallery } from "@/lib/queries/home";

export default async function Home() {

  const gallery = await getGallery();

  return (
    <section className="space-y-12">
      <ExGallery galleryData={gallery} />
    </section>
  );
}