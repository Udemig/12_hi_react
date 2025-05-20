import type { FC } from "react";
import { useShoes } from "../../service/shoe";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";

const List: FC = () => {
  const { data, isLoading, error } = useShoes();

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
      {data?.map((shoe) => (
        <Card shoe={shoe} key={shoe._id} />
      ))}
    </div>
  );
};

export default List;
