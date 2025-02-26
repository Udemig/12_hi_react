import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
