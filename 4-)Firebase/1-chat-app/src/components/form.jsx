import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import EmojiPicker from "emoji-picker-react";

const Form = ({ user, room }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // mesajın kaydedileceği kolleksiyonun referansını al
    const collectionRef = collection(db, "messages");

    // mesajı veritabanındaki messages kolleksiyonuna ekle
    await addDoc(collectionRef, {
      text,
      room,
      author: {
        id: user.uid,
        name: user.displayName,
        photo: user.photoURL,
      },
      createdAt: serverTimestamp(),
    });

    // formu temizle
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 border border-gray-200 shadow-lg flex justify-center gap-3">
      <input
        type="text"
        placeholder="mesajınızı yazınız..."
        className="border border-gray-200 shadow-sm p-2 px-4 rounded-md w-1/2 "
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="relative">
        <div className="absolute top-[-470px] right-[-140px]">
          <EmojiPicker open={isOpen} onEmojiClick={(e) => setText(text + e.emoji)} />
        </div>

        <button type="button" className="btn text-base" onClick={() => setIsOpen(!isOpen)}>
          😂
        </button>
      </div>

      <button disabled={text.length < 1} type="submit" className="btn bg-black text-white disabled:brightness-75">
        Gönder
      </button>
    </form>
  );
};

export default Form;
