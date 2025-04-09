import React from "react";
import Input from "./Input";
import "./create.scss";
import Select from "./Select";
import { statusOptions, typeOptions } from "../../constants/constant.js";

import api from "../../utils/api.js";
import { useDispatch } from "react-redux";
import { createJob } from "../../redux/slices/jobSlices.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Create = () => {
  // Navigasyon kurulumu
  const navigation = useNavigate();
  // Dispatch kurulumu
  const dispatch = useDispatch();

  // ! Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    // Sayfa yenilemesini engelle
    e.preventDefault();

    // Inputlara form Data ile eriş
    const formData = new FormData(e.target);

    // FormData içerisindeki değerleri nesneye çevir
    const jobData = Object.fromEntries(formData.entries());

    // Güncel tarih verisine eriş ve bunu jobData içerisine ata
    jobData.date = Date.now();

    // Api'a istek at ve eğer istek başarılı ise reducer'a haber ver
    api
      .post("/jobs", jobData)
      .then((res) => {
        // Reducer'a haber ver
        dispatch(createJob(res.data));

        //Kullanıcıya bildirim gönder
        toast.success("Başvuru oluşturuldu");

        // Eğer işlem başarılı ise home sayfasına yönlendir
        navigation("/");
      })
      .catch((err) => {
        // Hata durumunda kullanıcıya bildirimde bulun
        toast.error(`Başvuru sırasında bir sorun oluştu: ${err.message} `);
      });
  };
  return (
    <div className="add-page">
      <section className="container">
        {/* Title */}
        <h2>Yeni İş Ekle</h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <Input label="Pozisyon" name="position" />
          <Input label="Şirket" name="company" />
          <Input label="Lokasyon" name="location" />
          <Select label="Durum" name="status" options={statusOptions} />
          <Select label="Tür" name="type" options={typeOptions} />

          <div className="btn-wrapper">
            <button className="button">Oluştur</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Create;
