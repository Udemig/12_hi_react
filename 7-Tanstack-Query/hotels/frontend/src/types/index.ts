interface Place {
  id: number;
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string[];
  rating: number;
  price_per_night: number;
  availability: boolean;
  image_url: string;
}

interface FilterParams {
  location?: string;
  title?: string;
  sort?: string;
}

interface HotelFormValues {
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string;
  rating: string;
  price_per_night: string;
  availability: boolean;
}

interface CreatePlaceResponse {
  message: string;
  place: {
    name: string;
    location: string;
    address: string;
    description: string;
    amenities: string[];
    rating: string;
    price_per_night: string;
    availability: boolean;
    id: string;
    image_url: string;
  };
}

export type { Place, FilterParams, HotelFormValues, CreatePlaceResponse };
