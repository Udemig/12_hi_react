import { useEffect, useState } from "react";
import api from "./api";
// Icons
import { RiSearchLine } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { IoPersonAddSharp } from "react-icons/io5";
// Components
import Card from "./components/Card";
import Modal from "./components/Modal";

function App() {
  // State kurulumu
  const [contacts, setContacts] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  // Sayfa yüklendiğinde verileri al
  useEffect(() => {
    api.get("/contact").then((res) => setContacts(res.data));
  }, []);

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    // Sayfa yenilemesi engelle
    e.preventDefault();

    // Inputtaki değere eriş
    const query = e.target[1].value;

    // Api'a gönderilecek parametreye eriş
    const params = {
      q: query,
    };

    // Api'a istek at ve gelen veriyi state'e aktar
    api.get("/contact", { params }).then((res) => setContacts(res.data));
  };

  // Sil ikonuna tıklanınca çalışacak fonksiyon
  const handleDelete = (id) => {
    // Kullanıcıdan onay al
    const res = confirm("Kişiyi silmek istediğinizden eminmisiniz ?");

    // Eğerki kullanıcı onay verdiyse bu kullanıcıyı sil

    if (res) {
      // Api'a istek at ve silme işlemini başlat
      api.delete(`/contact/${id}`).then(() => {
        // Silinen kişiyi contacts state'inden de kaldır
        const updatedContacts = contacts.filter((contact) => contact.id != id);

        // Güncellenmiş diziyi state'e aktar
        setContacts(updatedContacts);
      });
    }
  };

  // Güncelle ikonuna tıklayınca çalışacak fonksiyon
  const handleEdit = (contact) => {
    // Modal'ı aç
    setIsModelOpen(true);

    // Güncellenecek kişinin verilerini state'e aktar
    setEditItem(contact);
  };

  console.log(editItem);

  return (
    <div className="app">
      {/*  Header */}
      <header>
        {/* Logo */}
        <h1>Rehber</h1>

        <div>
          {/* Form */}
          <form onSubmit={handleSubmit}>
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
          <button onClick={() => setIsModelOpen(true)} className="add">
            <IoPersonAddSharp />
            <span>Yeni Kişi</span>
          </button>
        </div>
      </header>

      {/* Main */}
      <main>
        {contacts.map((contact) => (
          <Card
            contact={contact}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            key={contact.id}
          />
        ))}
      </main>

      {/* Modal */}
      <Modal
        editItem={editItem}
        setEditItem={setEditItem}
        setContacts={setContacts}
        isModelOpen={isModelOpen}
        setIsModelOpen={setIsModelOpen}
      />
    </div>
  );
}

export default App;
