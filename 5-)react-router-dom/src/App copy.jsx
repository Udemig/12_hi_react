import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Story from "./pages/Story";
import Novel from "./pages/Novel";
import Products from "./pages/Products";

// BrowserRouter ile routing
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ürünler" element={<Products />} />
        <Route path="/kategori" element={<Category />}>
          <Route path="hikaye" element={<Story />} />
          <Route path="roman" element={<Novel />} />
          <Route />
        </Route>
        <Route path="/detay/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
