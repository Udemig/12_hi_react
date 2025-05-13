import type { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Form from "./pages/form";
import Header from "./components/header";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place/:id" element={<Detail />} />
        <Route path="/form/create" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
