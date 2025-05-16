import type { FC } from "react";
import { usePlaces } from "../../utils/service";
import { sortOptions } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

const Filter: FC = () => {
  const { data } = usePlaces();
  const [searchParams, setSearchParams] = useSearchParams();

  // url'e parametre ekleyen fonksiyon
  const handleChange = (name: string, value: string) => {
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };

  // urldeki parmateleri sıfırla
  const handleReset = () => {
    setSearchParams({});
  };

  // otellerin konum değerlerinden oluşan benzersiz bir dizi oluştur
  const locations = [...new Set(data?.map((i) => i.location))];

  return (
    <form className="flex flex-col gap-4 lg:gap-10 lg:mt-15 lg:sticky lg:top-10">
      <div className="field">
        <label htmlFor="location">Nereye Gitmek İstiyorsunuz?</label>
        <select
          className="input"
          name="location"
          id="location"
          onChange={(e) => handleChange("location", e.target.value)}
        >
          <option value="">Seçiniz</option>
          {locations?.map((i, key) => (
            <option key={key} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="title">Konaklama yeri adına göre ara?</label>
        <input
          className="input"
          type="text"
          name="title"
          id="title"
          placeholder="örn:Seaside Villa"
          onChange={(e) => handleChange("title", e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="sort">Sıralama Ölçütü</label>
        <select
          className="input"
          name="sort"
          id="sort"
          onChange={(e) => handleChange("order", e.target.value)}
        >
          {sortOptions?.map((i, key) => (
            <option key={key} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>

        <button
          type="reset"
          onClick={handleReset}
          className="bg-blue-500 hover:bg-blue-600 transition text-white mt-3 p-1 cursor-pointer rounded-md"
        >
          Filtreleri Temizle
        </button>
      </div>
    </form>
  );
};

export default Filter;
