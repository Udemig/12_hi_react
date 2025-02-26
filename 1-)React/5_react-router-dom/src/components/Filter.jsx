import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    // Sayfa yenilemesini engelle
    e.preventDefault();

    // Input içerisindeki değere eriş
    const text = e.target[0].value;

    // Url'e geçilecek parametreyi ayarla
    searchParams.set("search", text);

    // Url'e parametre geç
    setSearchParams(searchParams);
  };
  // Select'dan bir değer seçildiğinde çalışacak fonksiyon
  const handleChange = (e) => {
    // Select alanındaki değere eriş
    const value = e.target.value;

    // Bu değeri parametre olarak kullan
    searchParams.set("sort", value);

    // Url'e parametre geç
    setSearchParams(searchParams);
  };
  return (
    <div>
      <div className="d-flex justify-content-between mt-4">
        {/* Select */}
        <select
          onChange={handleChange}
          defaultValue="sırala"
          className="form-select w-25"
        >
          <option disabled>sırala</option>
          <option defaultValue="a-z">a-z</option>
          <option value="z-a">z-a</option>
        </select>
        {/* Form */}
        <form onSubmit={handleSubmit} className="d-flex gap-2">
          <input
            type="text"
            placeholder="kitap ismi giriniz ..."
            className="form-control"
          />
          <button className="btn btn-primary px-4 ">Ara</button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
