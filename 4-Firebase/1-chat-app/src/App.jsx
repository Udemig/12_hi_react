import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page";
import RoomPage from "./pages/room-page";
import ChatPage from "./pages/chat-page";
import Protected from "./components/protected";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* login olmadan girilebilen sayfalar */}
        <Route path="/" element={<LoginPage />} />

        {/* login olduktan sonra girilebilen sayfalar */}
        <Route element={<Protected />}>
          <Route path="/room" element={<RoomPage />} />
          <Route path="/chat/:room" element={<ChatPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
