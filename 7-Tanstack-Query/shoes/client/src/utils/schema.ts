import * as Yup from "yup";

// şifre en az 1 büyük harf, 1 küçük harf, 1 sayı ve 1 özel karakter içermelidir.
const passwordRegex = new RegExp(
  "^(?=.*[!@#$%^&*()_+\\-=\\[\\]{};'\":\\\\|,.<>\\/?])(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$"
);

//  ad ve soyad alanında sadece alfabetik karakterler ve boşluk içerebilir
const nameRegex = /^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/;

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Geçersiz email").required("Email gerekli"),
  password: Yup.string().required("Şifre gerekli"),
});

const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Ad gerekli")
    .matches(nameRegex, "Geçersiz ad"),
  lastName: Yup.string()
    .required("Soyad gerekli")
    .matches(nameRegex, "Geçersiz soyad"),
  email: Yup.string().email("Geçersiz email").required("Email gerekli"),
  password: Yup.string()
    .required("Şifre gerekli")
    .matches(passwordRegex, "Şifreniz yeterince güçlü değil"),
});

export { loginSchema, registerSchema };
