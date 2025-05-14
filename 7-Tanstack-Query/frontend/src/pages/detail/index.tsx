import type { FC } from "react";
import { useParams } from "react-router-dom";
import { usePlace } from "../../utils/service";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Container from "./container";
import Images from "./images";
import Info from "./info";
import Button from "./button";

const Detail: FC = () => {
  const { id } = useParams();
  const { isLoading, error, data, refetch } = usePlace(id as string);

  if (isLoading)
    return (
      <Container>
        <Loader />
      </Container>
    );

  if (error)
    return (
      <Container>
        <Error message={error.message} refetch={refetch} />
      </Container>
    );

  if (!data) return null;

  return (
    <Container>
      <Images image={data.image_url} />
      <Info place={data} />
      <Button id={id as string} />
    </Container>
  );
};

export default Detail;
