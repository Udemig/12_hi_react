import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Feed from "./pages/feed";
import Protected from "./components/protected";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<Protected />}>
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<h1>Profil</h1>} />
          <Route path="/settings" element={<h1>Ayarlar</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
