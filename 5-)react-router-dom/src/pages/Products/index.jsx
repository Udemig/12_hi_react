import { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import api from "../../api";
import Card from "../../components/Card";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  // Kitap Statei
  const [books, setBooks] = useState([]);

  // Url'den parametreyi alma
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Parametre
    const params = {
      q: searchParams.get("search"),
      _sort: "title",
      _order: searchParams.get("sort") === "z-a" ? "desc" : "asc",
      // Bu projede jsn-server kullanıyoruz.Bu api bize sıralama yapabilmemiz için iki adet parametre istediğini söylüyor.Birincisi hangi değere göre sıralama yapacağımız ikincisi ise nasıl bir sıralama yapacağımız.Sıralama noktasında ise asc (Ascending [Artan]) veya desc (Descending [Azalan]) seçenekleri sunar.Bizde burada bu değerleri parametre olarak geçerek api'dan sıralanmış verileri aldık
    };

    api.get("/books", { params }).then((res) => setBooks(res.data));
  }, [searchParams]);
  // Url'deki parametreye bağlı olarak api'dan veri alabilmek için arama parametresini url'e geçtik

  return (
    <div className="container my-5">
      {/* Results */}
      {books.length === 0 ? (
        <h3 className="bg-danger p-3 rounded  fs-3 w-50 text-nowrap text-center">
          Kitap Bulunamadı !!
        </h3>
      ) : (
        <h3>{books.length} kitap bulundu</h3>
      )}

      {/* Filter */}
      <Filter />

      {/* Cards */}

      <div className="card-container">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Products;
