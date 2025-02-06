import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kategori" element={<Category />} />
        <Route path="/detay/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
