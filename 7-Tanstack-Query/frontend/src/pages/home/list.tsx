import type { FC } from "react";
import { usePlaces } from "../../utils/service";
import Card from "../../components/card";
import { useSearchParams } from "react-router-dom";
import type { FilterParams } from "../../types";
import Loader from "../../components/loader";
import Error from "../../components/error";

const List: FC = () => {
  const [searchParams] = useSearchParams();
  const paramsObject = Object.fromEntries(searchParams.entries());
  const { isLoading, error, data, refetch } = usePlaces(
    paramsObject as FilterParams
  );

  if (isLoading) return <Loader />;

  if (error) return <Error message={error.message} refetch={refetch} />;

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl">Yakınınızdaki Lokasyonlar</h1>

      <div className="grid gap-5 mt-5">
        {!data || data?.length === 0 ? (
          <div>
            <p>Aradığınız kriterlere uygun bir sonuç bulunamadı</p>
          </div>
        ) : (
          data?.map((place) => <Card key={place.id} place={place} />)
        )}
      </div>
    </div>
  );
};

export default List;
