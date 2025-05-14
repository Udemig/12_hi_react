const sortOptions = [
  { label: "Seçiniz", value: "" },
  {
    label: "En Ucuz",
    value: "price-asc",
  },
  {
    label: "En Pahalı",
    value: "price-desc",
  },
  {
    label: "En İyi Puan",
    value: "rating-desc",
  },
  {
    label: "En Kötü Puan",
    value: "rating-asc",
  },
];

// form veirlerinin ilk değerlerler
const initialValues = {
  name: "",
  location: "",
  address: "",
  description: "",
  amenities: "",
  rating: "",
  price_per_night: "",
  availability: false,
};

// inputlar
const inputFields = [
  { label: "İsim", name: "name", placeholder: "Seaside Villa" },
  { label: "Konum", name: "location", placeholder: "İstanbul" },
  { label: "Adres", name: "address", placeholder: "Kadıköy" },
  { label: "Açıklama", name: "description", placeholder: "Güzel bir villa" },
  { label: "Hizmetler", name: "amenities", placeholder: "Wifi, Park" },
  { label: "Puan", name: "rating", placeholder: "4.5" },
  { label: "Gece Fiyatı", name: "price_per_night", placeholder: "1000" },
  {
    label: "Uygunluk (Boş oda var mı?)",
    name: "availability",
    type: "checkbox",
  },
];

export { sortOptions, initialValues, inputFields };
