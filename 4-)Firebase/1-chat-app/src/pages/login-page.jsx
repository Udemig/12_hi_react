import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        toast.success("Giriş Yapıldı");
        navigate("/room");
      })
      .catch((err) => toast.error("Hata oluştur", err.message));
  };

  return (
    <div className="wrapper">
      <div className="box h-[450px] flex flex-col justify-center items-center gap-[50px]">
        <h1 className="text-4xl">Chat Odası</h1>

        <p className="text-gray-400">Devam Etmek İçin Giriş Yapın</p>

        <button onClick={handleLogin} className="btn flex gap-5 items-center">
          <img src="/google.png" alt="google" className="w-[30px]" />
          <span>Google İle Gir</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
