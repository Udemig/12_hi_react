import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Info from "../../components/Info";

function Detail() {
  const { id } = useParams();

  const [book, setBook] = useState(null);

  useEffect(() => {
    api.get(`/books/${id}`).then((res) => setBook(res.data));
  }, []);

  console.log(book);

  return (
    <div className="row container my-5 p-5 mx-auto">
      {/* Image */}
      <div className="col-md-6 d-flex justify-content-center align-items-center ">
        <img
          src={book?.image}
          className="rounded img-fluid shadow"
          alt="book-image"
        />
      </div>
      {/* Info */}

      <div className="col-md-6 d-flex flex-column my-3 justify-content-center align-items-center ">
        <h1 className="text-center text-nowrap">{book?.title}</h1>
        <div>
          <Info title="Yazar" value={book?.author} />
          <Info title="Yıl" value={book?.year} />
          <Info title="Sayfa Sayısı" value={book?.page} />
          <Info title="Ücret" value={book?.price} />
          <Info title="Açıklama" value={book?.description} />
        </div>
      </div>
    </div>
  );
}

export default Detail;
