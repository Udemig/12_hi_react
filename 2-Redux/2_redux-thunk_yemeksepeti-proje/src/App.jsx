import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "./redux/actions/restaurantActions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { getCart } from "./redux/actions/basketAction";
const App = () => {
  // Dispatch kurulumu yap
  const dispatch = useDispatch();

  // Sayfa yüklendiğinde thunk fonk. ile api'a istek at ve gelen verileri reducer'a ilet
  useEffect(() => {
    // Restaurant verilerini alan fonk.
    dispatch(getRestaurants());
    // Cart verilerini alan fonk.
    dispatch(getCart());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
