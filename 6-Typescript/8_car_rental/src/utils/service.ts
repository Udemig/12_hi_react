import { IFetchCarsReturn } from "../types";

/*
 * Asenkron fonksiyonların return tipinde doğrudan fonksiyonun return ettiği verinin tipini yazdığımız zaman hata alırız.
 * Asenkron fonksiyonların return tipi her zaman Promise interface'i aracılığı ile tanımlanır
 * Promise interface'i asenkron işlemler yapan fonksiyonun return tipini ifade eder
 */
export const fetchCars = async (): Promise<IFetchCarsReturn> => {
  let url = "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?";

  const res = await fetch(url);

  const data = await res.json();

  return data;
};
