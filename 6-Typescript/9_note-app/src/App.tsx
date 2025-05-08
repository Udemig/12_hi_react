import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import FormPage from "./pages/FormPage";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

const App = () => {
  // Koyu tema tespiti
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Sayfa yüklenme durumu
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Başlangıç teması tespiti
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setIsDarkMode(darkModeMediaQuery.matches);

    // Tema değişikliklerini izle
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleThemeChange);

    // Sayfa yüklenme animasyonu
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Temizlik
    return () => {
      darkModeMediaQuery.removeEventListener("change", handleThemeChange);
      clearTimeout(timer);
    };
  }, []);

  // Yükleme ekranı
  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[var(--color-background)]">
        <div className="text-center">
          <div className="text-3xl mb-4">📝</div>
          <Loader size="lg" />
          <p className="mt-4 text-[var(--color-text-secondary)] animate-pulse">
            Not Uygulaması Yükleniyor...
          </p>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkMode ? "dark" : "light"}
        toastClassName="rounded-[var(--radius-md)]"
        className="text-sm font-medium"
        style={{
          zIndex: 9999,
        }}
      />
      <Layout>
        <Routes>
          {/* Ana sayfa rotası */}
          <Route path="/" element={<HomePage />} />

          {/* Detay sayfası rotası */}
          <Route path="/detail/:id" element={<DetailPage />} />

          {/* Form sayfası rotaları */}
          <Route path="/create" element={<FormPage />} />
          <Route path="/edit/:id" element={<FormPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
