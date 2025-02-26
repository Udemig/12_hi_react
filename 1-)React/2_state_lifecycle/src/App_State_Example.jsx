import { useState } from "react";
import State from "./components/State.jsx";
function App() {
  const [isDarkTheme, setDarkTheme] = useState(false);
  return (
    <div
      className={`${
        isDarkTheme
          ? "bg-dark border border-2 m-1 p-3"
          : "bg-secondary border border-2 border-dark m-1 p-3"
      }`}
    >
      <div className="d-flex justify-content-end">
        <button
          onClick={() => setDarkTheme(!isDarkTheme)}
          className="btn btn-light"
        >
          Tema Değiş
        </button>
      </div>
      <State title="React Nedir?" desc="React bir js frameworküdür." />
      <State
        title="Js Nedir?"
        desc="Javascript popüler bir programlama dilidir."
      />
      <State
        title="Html Nedir?"
        desc="Html bir web sitesinin arayüzünü oluşturmak için kullanılan bir işaretleme dilidir."
      />
      <State
        title="Css Nedir?"
        desc="Html ile oluşturulan arayüzü stillendirmek için kullanılan bir yazılım dilidir."
      />
    </div>
  );
}

export default App;
