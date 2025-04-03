import ForgotPassword from "./forgot-password";
import PasswordInput from "./password-input";
import EmailInput from "./email-input";
import AuthToggle from "./auth-toggle";
import Button from "./button";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  // kaydolma modunda mıyız?
  const [isSign, setIsSign] = useState(false);

  // form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputlardaki veriyi al
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries());

    try {
      if (isSign) {
        // kaydoma modunda: yeni hesap oluştur
        const res = await createUserWithEmailAndPassword(auth, email, password);

        // doğrulama epostası gönder
        await sendEmailVerification(res.user);

        // giriş yap moduna geç
        setIsSign(false);

        // bildirim gönder
        toast.info("Malinize doğrulama epostası gönderildi");
      } else {
        // giriş modundaysa: oturum aç
        const res = await signInWithEmailAndPassword(auth, email, password);

        // mailini doğrulamamış ise bildirim gönder
        if (!res.user.emailVerified) {
          return toast.info("Lütfen mailinizi doğrulayın");
        }

        // bildiirm gönder ve anasayfaya yönlendir
        navigate("/feed");
        toast.info("hesaba giriş yapıldı");
      }
      // formu temizle
      e.target.reset();
    } catch (error) {
      // hatayı bildirim olarak gönder
      toast.error("Hata: " + error.code);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <EmailInput />

      <PasswordInput />

      <ForgotPassword show={!isSign} />

      <Button isSign={isSign} />

      <AuthToggle isSign={isSign} setIsSign={setIsSign} />
    </form>
  );
};

export default LoginForm;
