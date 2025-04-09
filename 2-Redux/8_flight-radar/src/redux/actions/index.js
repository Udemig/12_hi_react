import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { create } from "../../../node_modules/@splidejs/splide/src/js/utils/dom/create/create";

// tr üzerindeki uçuşları alamamızı sağlayan
export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  // parametreleri belirle
  const params = {
    bl_lat: "34.457212",
    bl_lng: "24.609666",
    tr_lat: "43.610013",
    tr_lng: "46.791334",
    speed: "2,9999999",
  };

  // api isteğini at
  const res = await api.get("/flights/list-in-boundary", { params });

  // api'dan gelen verideki dizi içerisindeki dizileri nesnelere çevirdik
  const formatted = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2],
    lng: i[3],
    deg: i[4],
  }));

  // aksiyonun payload'ını return et
  return formatted;
});

// id üzereinden uçuşun detaylarını alamamızı sağlayan
export const getDetail = createAsyncThunk("detail/getDetails", async (flightId) => {
  // parametreleri belirle
  const params = {
    flight: flightId,
  };

  // api isteği at
  const res = await api.get("/flights/detail", { params });

  // aksiyonun payload'ını return et
  return res.data;
});
