import type { FC } from "react";
import { usePlaces } from "../../utils/service";
import Card from "../../components/card";

const List: FC = () => {
  const { isLoading, error, data } = usePlaces();

  if (isLoading) return <div>Yükleniyor...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl">Yakınınızdaki Lokasyonlar</h1>

      <div className="grid gap-5 mt-5">
        {data?.map((place) => (
          <Card key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default List;
