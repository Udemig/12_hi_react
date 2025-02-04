import { useState } from "react";
import Users from "./components/Users";
import User from "./components/User";

function App() {
  return (
    <div className="container my-4">
      {/* Kullanıcları alan ve renderlayan örnek */}
      {/* <Users /> */}

      {/* Seçili kullanıcıyı alan ve renderlayan örnek */}
      <User />
    </div>
  );
}

export default App;
