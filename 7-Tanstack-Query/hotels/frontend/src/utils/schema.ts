import * as yup from "yup";

// regex: regular expression
// bir metin ifadesini kontrol etmek için kullanılan bi yöntemdir
// metin içerisinde özel karakter / sayı / harf / boşluk gibi karakterleri kontrol etmek için kullanılır
const nameRegex = /^[A-Za-z\s]+$/;

// yup şeması oluşturma
// formdan alınan verilerin geçerli olması için gerekli koşulları belirleme
const hotelSchema = yup.object().shape({
  name: yup
    .string()
    .required("İsim zorunludur")
    .min(3, "İsim en az 3 karakter olmalıdır")
    .max(40, "İsim en fazla 40 karakter olmalıdır")
    .matches(nameRegex, "İsim yalnızca harf ve boşluk içerebilir"),

  location: yup
    .string()
    .required("Konum zorunludur")
    .min(3, "Konum en az 3 karakter olmalıdır")
    .max(40, "Konum en fazla 40 karakter olmalıdır"),

  address: yup
    .string()
    .required("Adres zorunludur")
    .min(3, "Adres en az 3 karakter olmalıdır")
    .max(40, "Adres en fazla 40 karakter olmalıdır"),

  description: yup
    .string()
    .required("Açıklama zorunludur")
    .min(10, "Açıklama en az 10 karakter olmalıdır")
    .max(200, "Açıklama en fazla 200 karakter olmalıdır"),

  amenities: yup.string().required("Hizmetler zorunludur"),

  rating: yup
    .number()
    .required("Puan zorunludur")
    .min(1, "Puan en az 1 olmalıdır")
    .max(5, "Puan en fazla 5 olmalıdır"),

  price_per_night: yup
    .number()
    .required("Gece fiyatı zorunludur")
    .min(1, "Gece fiyatı en az 1$ olmalıdır")
    .max(90000, "Gece fiyatı en fazla 90000$ olmalıdır"),

  availability: yup.boolean(),
});

export { hotelSchema };
