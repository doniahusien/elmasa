import { api } from "@/lib/api";
import type { HomeData } from "@/types";

export const getHomeData = () =>
  api.get<HomeData>("structure/home-page", {
    next: { revalidate: 3600, tags: ["home"] },
  });
export const getPackages = () =>
  api.get<HomeData>("packages", {
    next: { revalidate: 3600, tags: ["packages"] },
  });

export const getSliders = async () => {
  const data = await getHomeData();
  return [
    { image: data.slider_1.image_1, title: data.slider_1.title_1 },
    { image: data.slider_2.image_2, title: data.slider_2.title_2 },
    { image: data.slider_3.image_3, title: data.slider_3.title_3 },
    { image: data.slider_4.image_4, title: data.slider_4.title_4 },
  ];
};
