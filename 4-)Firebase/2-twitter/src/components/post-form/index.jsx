import { toast } from "react-toastify";
import FormActions from "./form-actions";
import TextArea from "./text-area";
import UserAvatar from "./user-avatar";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useRef, useState } from "react";
import Preview from "./preview";
import uploadToStorage from "../../firebase/uploadToStorage";

const PostForm = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const fileRef = useRef();

  // resmin önizle url'ini oluşturan fonkison
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  // önizlenen resmi iptal eden fonksiyon
  const clearImage = () => {
    // önizleme state'ini sıfırla
    setPreview(null);

    // file input'un value'sunu temizle
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  // form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputlardaki verileri al
    const text = e.target.text.value;
    const file = e.target.image.files[0];

    //veri yoksa bildirim gönder
    if (!text.trim() && !file) return toast.warning("Lütfen içeriği belirleyiniz");

    // tweet'i kolleksiyona ekle
    try {
      setIsLoading(true);

      // resim varsa resmi storage'a yükle ve url'ini al
      const url = await uploadToStorage(file);

      // tweets kolleksiyonunun referansını al
      const collectionRef = collection(db, "tweets");

      // yeni tweet belgesini kolleksiyona ekle
      await addDoc(collectionRef, {
        content: { text, image: url },
        isEdited: false,
        likes: [],
        createdAt: serverTimestamp(),
        user: {
          id: user.uid,
          name: user.displayName,
          photo: user.photoURL,
        },
      });

      // formu sıfırla
      e.target.reset();
      setPreview(null);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border-b border-tw-gray p-4 flex gap-3">
      <UserAvatar photo={user.photoURL} name={user.displayName} />

      <form onSubmit={handleSubmit} className="w-full pt-1">
        <TextArea />

        <Preview isLoading={isLoading} src={preview} clearImage={clearImage} />

        <FormActions isLoading={isLoading} fileRef={fileRef} onImageChange={onImageChange} />
      </form>
    </div>
  );
};

export default PostForm;
