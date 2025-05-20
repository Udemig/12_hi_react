import type { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Login from "./page/login";
import Register from "./page/register";
import Detail from "./page/detail";
import Dashboard from "./page/dashboard";
import Protected from "./components/protected";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* bütün kullanıcıların erişebileceği sayfalar */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* kullanıcı giriş yapmışsa erişebileceği sayfalar */}
        <Route element={<Protected />}>
          <Route path="/" element={<Home />} />
          <Route path="/shoe/:id" element={<Detail />} />
        </Route>

        {/* admin rolüne sahip kullanıcı erişebileceği sayfalar */}
        <Route element={<Protected allowedRoles={["admin"]} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
