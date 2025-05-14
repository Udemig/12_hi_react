import "./index.css";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Query Client Kurulum
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  // Query Client Sağlayıcısı
  <QueryClientProvider client={queryClient}>
    <App />
    <ToastContainer />
    <ReactQueryDevtools />
  </QueryClientProvider>
);
