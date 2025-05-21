import type { FC } from "react";
import Form from "../../components/form";
import type { IShoeFormValues } from "../../types";
import { useCreateShoe } from "../../service/shoe";

const Create: FC = () => {
  const { mutate, isPending } = useCreateShoe();

  const onSubmit = (values: IShoeFormValues) => {
    mutate(values);
  };

  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-2xl font-semibold mb-5">Ürün Ekle</h1>

      <Form onSubmit={onSubmit} isPending={isPending} />
    </div>
  );
};

export default Create;
