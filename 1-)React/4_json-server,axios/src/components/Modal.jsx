// Icons
import { IoMdClose } from "react-icons/io";

import api from "../api";
// Components
import Field from "./Field";
const Modal = ({
  isModelOpen,
  setIsModelOpen,
  setContacts,
  editItem,
  setEditItem,
}) => {
  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = async (e) => {
    // Sayfa yenilemesi engelle
    e.preventDefault();

    // JavaScript içerisinde bulunan formData yapısı sayesinde her bir input içeirisindeki verilere teker teker erişmek yerine hepsine tek bir seferde erişebiliriz
    const formData = new FormData(e.target);

    // Object.fromEntries() metodu, bir form'daki tüm inputların key-value çiftlerini bir object'e dönüştürür
    const newContact = Object.fromEntries(formData.entries());

    if (!editItem) {
      // Erişilen değerleri api'a gönder
      const response = await api.post("/contact", newContact);

      // Contacts state'ini güncelle.Önceki verileri koru ve üzerine yeni eklenen kişiyi ekle
      setContacts((contacts) => [...contacts, response.data]);
    } else {
      // Güncellenecek kişiyi api'a gönder
      const response = await api.put(`/contact/${editItem.id}`, newContact);
      // Güncellenen kişiyi contacts state'i içerisinde de güncelle
      setContacts((contacts) =>
        contacts.map((contact) =>
          contact.id === editItem.id ? response.data : contact
        )
      );

      // EditItem statei'ni nulla çek
      setEditItem(null);
    }

    // Model penceresini kapat
    setIsModelOpen(false);
  };

  return (
    isModelOpen && (
      <div className="modal">
        <div className="modal-inner">
          {/* Head */}
          <div className="modal-head">
            {/* Edit Modundaysa Kişiyi Güncelle yoksa Yeni Kişi Ekle Yazsın */}
            <h2>{editItem ? "Kişiyi Güncelle" : "Yeni Kişi Ekle"} </h2>
            <button
              onClick={() => {
                setEditItem(null);
                setIsModelOpen(false);
              }}
            >
              <IoMdClose />
            </button>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <Field value={editItem?.name} label="İsim Soyisim" name="name" />
            <Field
              value={editItem?.position}
              label="Pozisyon"
              name="position"
            />
            <Field label="Şirket" value={editItem?.company} name="company" />
            <Field label="Telefon" value={editItem?.phone} name="phone" />
            <Field label="Email" value={editItem?.email} name="email" />
            <div className="buttons">
              <button
                onClick={() => {
                  setEditItem(null);
                  setIsModelOpen(false);
                }}
              >
                Vazgeç
              </button>
              <button type="submit">Gönder</button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Modal;
