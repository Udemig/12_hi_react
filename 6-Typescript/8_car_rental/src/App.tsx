import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/index";
import Home from "./pages/home";
import { FC } from "react";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-white">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
