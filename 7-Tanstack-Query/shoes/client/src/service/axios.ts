import axios from "axios";
import { authService } from "./auth";

const api = axios.create({
  // api'nin url'i
  baseURL: import.meta.env.VITE_API_URL,
  // cookie ile saklanan verileri her istekte api'a gönder
  withCredentials: true,
  // api gönderilen verinin formatı
  headers: {
    "Content-Type": "application/json",
  },
});

// axios interceptor
// api'a atılan her istekte veya api'dan gelen her cevapta fonksiyon çalıştırılır
api.interceptors.response.use(
  // api'dan her olumlu cevap geldiğinde çalışır
  (response) => {
    return response;
  },
  // api'dan her olumsuz cevap geldiğinde çalışır
  async (error) => {
    // hata aldığımız api isteğini değişkene aktart
    const originalRequest = error.config;

    // hata access token'ın süresinin dolmasından kaynaklanıyorsa
    if (
      error.response.status === 401 &&
      error.response.data.message === "Access token expired" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        // refresh token ile yeni access token al
        await authService.refresh();

        // hata aldığımız isteği tekrar gönder
        return api.request(originalRequest);
      } catch {
        // refresh tokenın süresi doluysa
        await authService.logout();

        // login sayfasına yönlendir
        window.location.href = "/login";

        // hatayı fırlat
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
