import { ICar } from "../types";

const formatData = (car: ICar) => {
  // nesne içerisindenki ekrana basılcak olan alanları belirle
  const accepted = [
    "make",
    "model",
    "cylinders",
    "drive",
    "fueltype",
    "trany",
    "vclass",
    "year",
    "tcharger",
    "startstop",
    "co2",
    "displ",
    "atvtype",
  ];

  // nesneyi diziye çevirip ardından filtreledik
  const arr = Object.entries(car).filter((i) => accepted.includes(i[0]));

  // diziyi döndür
  return arr;
};

export default formatData;
