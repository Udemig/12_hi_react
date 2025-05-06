import { useEffect, useRef, useState } from "react";
import { fetchCars } from "../../utils/service";
import { ICar } from "../../types/";
import Warning from "../warning";
import Card from "../hero/card";
import { useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Loader from "../loader/index";

const List = () => {
  const [searchParams, setSeatchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cars, setCars] = useState<ICar[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const firstCard = useRef<HTMLDivElement | null>(null);

  const make: string = searchParams.get("make") || "";
  const model: string = searchParams.get("model") || "";
  const year: string = searchParams.get("year") || "";
  const page: string = searchParams.get("page") || "1";

  useEffect(() => {
    setIsLoading(true);

    fetchCars(make, model, year, page)
      .then((data) => {
        setCars(data.results);
        setTotal(data.total_count);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [make, model, year, page]);

  // 1) isLoading true ise > API'dan veriler yükleniyor
  if (isLoading)
    return (
      <Warning>
        <Loader />
      </Warning>
    );

  // 2) error dolu ise > API'dan hatalı cevap gelmiştir
  if (error) return <Warning>{error}</Warning>;

  // 3) cars boş dizi ise > Aranılan kriterde veri yoktur
  if (!cars || cars.length < 1) return <Warning>Veri Bulunamadı</Warning>;

  return (
    <div className="padding-x max-width">
      <section className="home-cars-wrapper">
        <div ref={firstCard} className="absolute" />
        {cars.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </section>

      {total && (
        <ReactPaginate
          breakLabel="..."
          className="pagination"
          nextLabel=">"
          initialPage={Number(page) - 1}
          onPageChange={(e) => {
            searchParams.set("page", String(e.selected + 1));
            setSeatchParams(searchParams);
            firstCard.current?.scrollIntoView();
          }}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(total / 10)}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      )}
    </div>
  );
};

export default List;
