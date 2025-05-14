import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  CreatePlaceResponse,
  FilterParams,
  HotelFormValues,
  Place,
} from "../types";
import api from "./api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

/*
 * useQuery hookuna api isteğinin ismini ve api isteğini atan fonksiyonu veriyoruz
 * useQuery bizim için api isteğini atıyor ve gelen cevaba göre state'ini yönetiyor
 * isLoading,error,data gibi stateleri otomatik olarak tutar
 * * gereksiz kod tekrarının önüne geçeriz
 * Otomatik olarak cache işlemi uygular
 * * birden fazla component'da aynı veriye ihtiyacınız varsa state managment kütüphanesine gereke duymadan bütün componentl'larda useQuery ile api isteği atarız
 * Hata durumunda 3 kez daha ekstra deneme yapar
 * * anlık sunucu yoğunluğundan kaynaklanıcak hataların önüne geçeriz
 */
export const usePlaces = (params?: FilterParams) =>
  useQuery<Place[]>({
    // api isteğinin ismini ve bağımlıklarını veriyoruz
    queryKey: ["places", params],
    // then bölümünden return edilen veri useQuery tarafından saklanır (data)
    queryFn: () =>
      api.get("/places", { params }).then((res) => res.data.places),
    // hata durumunda deneme sayısı
    retry: 3,
    // hata durumunda bekleme süresi
    retryDelay: 2000,
    // staleTime: cache'deki verilerin "geçerli / taze" kalma sreüsi
    staleTime: 0,
    // gcTime: cache'deki velerin "geçersiz / bayat olma / temizlenme" süresi
    gcTime: 30000,
  });

// id'ye göre bir veri döndüren api isteği
export const usePlace = (id: string) =>
  useQuery<Place>({
    queryKey: ["place", id],
    queryFn: () => api.get(`/place/${id}`).then((res) => res.data.place),
  });

// id'ye göre bir veri silen api isteği
export const useDeletePlace = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["remove"],
    mutationFn: (id: string) => api.delete(`/place/${id}`),
    onSuccess: () => {
      toast.success("Konaklama noktası başarıyla kaldırıldı");
      navigate("/");
    },
    onError: () => {
      toast.error("Bir hata oluştu");
    },
  });
};

// yeni bir konaklama noktası oluşturan api isteği
export const useCreatePlace = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["create"],
    mutationFn: (values: HotelFormValues) =>
      api.post<CreatePlaceResponse>("/places", values),
    onSuccess: (res) => {
      toast.success("Konaklama noktası başarıyla oluşturuldu");
      navigate(`/place/${res.data.place.id}`); // detay sayfasına
    },
    onError: () => {
      toast.error("Bir hata oluştu");
    },
  });
};
