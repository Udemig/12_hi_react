import React, { useEffect, useState } from "react";
import "../../Create/create.scss";
import Input from "../../Create/Input";
import Select from "../../Create/Select/index";
import { statusOptions, typeOptions, sortOptions } from "../../../constants/constant";
import api from "../../../utils/api";
import { setJobs } from "../../../redux/slices/jobSlices";
import { useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState();
  const [debouncedText, setDebouncedText] = useState();
  const [status, setStatus] = useState();
  const [type, setType] = useState();
  const [sort, setSort] = useState();

  // text'e debounce uygula
  useEffect(() => {
    // text undefined ise fonksiyonu durdur
    if (text === undefined) return;

    // her tuş vuruşunda bir sayaç başlat (300ms)
    const id = setTimeout(() => setDebouncedText(text), 300);

    // eğer süre bitmeden useEffect tekrar çalışırsa (önceki sayacı durdur)
    return () => clearTimeout(id);
  }, [text]);

  // state'ler her değiştiğinde api isteği at ve filtrele
  useEffect(() => {
    const params = {
      q: debouncedText,
      status,
      type,
      _sort: sort === "a-z" || sort === "z-a" ? "company" : "date",
      _order: sort === "a-z" || sort === "En Eski" ? "asc" : "desc",
    };

    // api'a parametreler ile birlikte istek at
    api
      .get("/jobs", { params })
      // gelen cevabı reducer'a haber ver
      .then((res) => dispatch(setJobs(res.data)));
  }, [debouncedText, status, type, sort]);

  // filtreleri sıfırla
  const handleReset = () => {
    setText();
    setDebouncedText();
    setStatus();
    setType();
    setSort();
  };

  return (
    <div className="filter-sec">
      <h2>Filtreleme Formu</h2>

      <form>
        <Input label="Ara" handleChange={(e) => setText(e.target.value)} />

        <Select label="Durum" options={statusOptions} handleChange={(e) => setStatus(e.target.value)} />

        <Select label="Tür" options={typeOptions} handleChange={(e) => setType(e.target.value)} />

        <Select label="Sırala" options={sortOptions} handleChange={(e) => setSort(e.target.value)} />

        <button onClick={handleReset} type="reset" className="button">
          Filtreleri Sıfırla
        </button>
      </form>
    </div>
  );
};

export default Filter;
