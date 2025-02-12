import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ProductProvider } from "./context/productContext.jsx";
import { BasketProvider } from "./context/basketContext.jsx";
// import { UserProvider } from "./context/userContext.jsx";

createRoot(document.getElementById("root")).render(
  <BasketProvider>
    <ProductProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ProductProvider>
  </BasketProvider>
);
