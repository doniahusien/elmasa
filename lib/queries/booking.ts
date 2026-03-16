import {api} from "@/lib/api";
import type { Booking } from "@/types";
export const getBooking = () =>
  api.get<Booking[]>("structure/home-page", {
    next: { revalidate: 3600, tags: ["home"] },
  });