import { useEffect, useState, type FC } from "react";
import api from "../../utils/api";
import type { Place } from "../../types";

const ListC: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Place[]>([]);

  useEffect(() => {
    setIsLoading(true);

    api
      .get<{ places: Place[] }>("/places")
      .then((res) => setData(res.data.places))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div>Yükleniyor...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="text-4xl mb-5 text-red-500">Classic</h1>

      {data.map((place) => (
        <div key={place.id}>
          <h1 className="text-2xl font-bold mb-5">{place.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default ListC;
