"use client";

import { FC, useEffect } from "react";
import Field from "./field";

const ImagePreview: FC = () => {
  // inputun değişim anını izleyelim
  useEffect(() => {
    // resim url'İnin girildiği input elementini al
    const imageInput = document.getElementById("image_url") as HTMLInputElement;

    // inputun değişim anında çalışıcak fonksiyon
    const handleChange = (e: any) => {
      // url'in geçerli bir resim url'i olup olmadığını kontrol et
      // resmi indirmeye çalışalım
      // resim yüklenmezse uyarı ver
    };

    // inputa olay izleyicisi ekle
    if (imageInput) {
      imageInput.addEventListener("input", handleChange);
    }

    // component unmount olduğunda olay izleyicisi kaldır
    return () => {
      if (imageInput) {
        imageInput.removeEventListener("input", handleChange);
      }
    };
  }, []);

  return (
    <Field htmlFor="image_url" label="Resim Önizleme">
      <div className="relative h-48 w-full bg-gray-100 rounded-md overflow-hidden">
        .
      </div>
    </Field>
  );
};

export default ImagePreview;
