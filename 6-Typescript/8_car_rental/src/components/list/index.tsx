import { useEffect, useState } from "react";
import { fetchCars } from "../../utils/service";
import { ICar } from "../../types/";
import Warning from "../warning";
import Loader from "../loader";
import Card from "../hero/card";

const List = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cars, setCars] = useState<ICar[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    setIsLoading(true);

    fetchCars()
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
  }, []);

  // 1) isLoading true ise > API'dan veriler yükleniyor
  if (isLoading) return <Warning>Yükleniyor...</Warning>;

  // 2) error dolu ise > API'dan hatalı cevap gelmiştir
  if (error) return <Warning>{error}</Warning>;

  // 3) cars boş dizi ise > Aranılan kriterde veri yoktur
  if (!cars || cars.length < 1) return <Warning>Veri Bulunamadı</Warning>;

  return (
    <div className="padding-x max-width">
      <section className="home-cars-wrapper">
        {cars.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </section>
    </div>
  );
};

export default List;
