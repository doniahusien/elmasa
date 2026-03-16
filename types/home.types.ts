export interface HomeData {
  navbar_home_logo: string;
  footer_logo: string;
  navbar_logo: string;
  slider_1: { image_1: string; title_1: string };
  slider_2: { image_2: string; title_2: string };
  slider_3: { image_3: string; title_3: string };
  slider_4: { image_4: string; title_4: string };
  contacts: {
    phones: string[];
    address: string[];
  };
  social: {
    icon: string;
    link: string;
  }[];
}
export interface PackageImage {
  url: string;
}

export interface RateCount {
  [key: string]: number;
}

export interface Plan {
  id: number;
  name: string;
  description: string;
  men_count: number;
  women_count: number;
  tables_count: number;

  show_price: number;

  price?: number;
  discountedPrice?: number;

  has_discount: boolean;

  rate: number;
  rateCount: RateCount;

  images: PackageImage[];
}
export interface FeatureWhy {
  id: number;
  title: string;
  description: string;
  icon: string;
}
export interface GalleryImage {
  name: string;
  file: string;
  type: string;
  grid_column: string;
  grid_row: string;
}
export interface Review {
  id: number;
  name: string;
  description: string;
  rating: number;
}
export interface Reviews {
  average_rating: number;
  total_reviews: number;
  rating_counts: {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
  };
  reviews: Review[];
}
