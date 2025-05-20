import type { FC } from "react";
import Images from "./images";
import Head from "./head";
import Color from "./color";
import Size from "./size";
import Foot from "./foot";
import { useParams } from "react-router-dom";
import { useShoe } from "../../service/shoe";
import Loader from "../../components/loader";
import Error from "../../components/error";

const Detail: FC = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useShoe(id);

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-4">
      <div className="xl:col-span-2">
        <Images images={data?.picture} />
      </div>

      <div className="flex flex-col gap-8">
        <Head shoe={data} />
        <Color colors={data?.color} />
        <Size sizes={data?.size} />
        <Foot description={data?.description} />
      </div>
    </div>
  );
};

export default Detail;
