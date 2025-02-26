import React, { useCallback, useState } from "react";
import ListItem from "../ListItem";

const SearchList = () => {
  const brands = ["Google", "Facebook", "Twitter", "Instagram", "Tesla"];

  const [query, setQuery] = useState("");

  const filtered = useCallback(() => {
    const filtred = brands.filter((i) =>
      i.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );

    return filtred;
  }, [query]);

  const filteredBrands = filtered();

  const addToBasket = useCallback(() => {
    alert("Ürün sepete eklendi");
  }, []);

  return (
    <div className="container mt-3 p-4">
      <h1>SearchList</h1>

      <input
        type="search"
        placeholder="Aramak istediğiniz markanın adını giriniz ..."
        className="form-control"
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul className="list-unstyled mt-3">
        {filteredBrands.map((item, key) => (
          <ListItem item={item} key={key} addToBasket={addToBasket} />
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
