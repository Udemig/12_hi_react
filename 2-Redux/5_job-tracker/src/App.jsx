import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { setError, setJobs, setLoading } from "./redux/slices/jobSlices";
import api from "./utils/api";

const App = () => {
  const dispatch = useDispatch();
  // Api'dan iş verileri al ve reducer'a ilet
  useEffect(() => {
    // Reducerdaki yüklenme durumu ayarla
    dispatch(setLoading());
    // Api'a istek at ve istek başarılı olursa verileri reducer'a ilet
    api
      .get("./jobs")
      // İstek başarılı olursa reducer'a jobs verisini gönder
      .then((res) => dispatch(setJobs(res.data)))
      // İstek başarısız olursa reducer'a hata yı gönder
      .catch((err) => dispatch(setError(err)));
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
