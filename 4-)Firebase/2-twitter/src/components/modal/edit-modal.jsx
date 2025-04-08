import { toast } from "react-toastify";
import Modal from "./index";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";
import uploadToStorage from "../../firebase/uploadToStorage";
import Loader from "../loader";

const EditModal = ({ isOpen, close, tweet }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPicDeleting, setIsPicDeleting] = useState(false);

  const handleClose = () => {
    close();
    setIsPicDeleting(false);
  };

  // form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputlardaki verileri al
    const text = e.target[0].value.trim();
    const file = e.target[1].files && e.target[1].files[0];

    // verileri kontrol et
    if (!text && !file && !tweet.content.image) {
      return toast.info("Lütfen içeriği belirleyin");
    }

    try {
      setIsLoading(true);

      // güncellenicek dökümanın referansını al
      const docRef = doc(db, "tweets", tweet.id);

      // belgenin güncellenicek bilgilerini belirle
      let updateData = {
        "content.text": text,
        isEdited: true,
      };

      // fotoğraf silincekse
      if (isPicDeleting) {
        updateData["content.image"] = null;
      }

      // yeni dosya yüklenicekse
      if (file) {
        const imageUrl = await uploadToStorage(file);
        updateData["content.image"] = imageUrl;
      }

      // belgeyi güncelle
      await updateDoc(docRef, updateData);

      // modalı kapat
      handleClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} close={handleClose}>
      <h1 className="text-2xl">Tweet'i Düzenle</h1>

      <form onSubmit={handleSubmit} className="flex flex-col mt-10 min-w-[90%]">
        <label className="text-sm mb-3">Metni Değiştir</label>
        <textarea
          defaultValue={tweet?.content?.text}
          className="resize-y min-h-20 max-h-[250px] bg-black text-secondary border border-zinc-700 rounded-md p-3 outline-none"
        />

        <label className="text-sm mt-8 mb-3">Fotoğrafı Değiştir</label>
        {!isPicDeleting && tweet.content.image ? (
          <button onClick={() => setIsPicDeleting(true)} className="button">
            Resmi Kaldır
          </button>
        ) : (
          <input type="file" className="button" />
        )}

        <div className="flex justify-end gap-5 mt-10">
          <button type="button" onClick={handleClose} className="cursor-pointer">
            Vazgeç
          </button>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-secondary text-black px-3 py-1 rounded-md cursor-pointer hover:bg-secondary/70 transition min-w-[80px]"
          >
            {isLoading ? <Loader /> : "Kaydet"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
