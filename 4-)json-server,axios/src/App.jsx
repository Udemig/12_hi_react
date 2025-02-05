import { useEffect, useState } from "react";
import api from "./api";
// Icons
import { RiSearchLine } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { IoPersonAddSharp } from "react-icons/io5";
// Components
import Card from "./components/Card";
function App() {
  // State kurulumu
  const [contacts, setContacts] = useState([]);

  // Sayfa yüklendiğinde verileri al
  useEffect(() => {
    api.get("/contact").then((res) => setContacts(res.data));
  }, []);

  console.log(contacts);

  return (
    <div className="app">
      {/*  Header */}
      <header>
        {/* Logo */}
        <h1>Rehber</h1>

        <div>
          {/* Form */}
          <form>
            <button>
              <RiSearchLine />
            </button>
            <input type="search" placeholder="Kişi aratınız ..." />
          </form>
          <button className="ns">
            <IoIosMenu />
          </button>
          <button className="ns">
            <HiMiniSquares2X2 />
          </button>
          <button className="add">
            <IoPersonAddSharp />
            <span>Yeni Kişi</span>
          </button>
        </div>
      </header>

      {/* Main */}

      <main>
        {contacts.map((contact) => (
          <Card key={contact.id} />
        ))}
      </main>
    </div>
  );
}

export default App;
