import type { FC } from "react";
import Form from "../../components/form";
import type { IShoeFormValues } from "../../types";
import { useUpdateShoe, useShoe } from "../../service/shoe";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader";

const Edit: FC = () => {
  const { mutate, isPending: isUpdatePending } = useUpdateShoe();

  // düzenleme yapılacak ürünün id'si
  const { id } = useParams();

  // düzenleme yapılacak ürünün bilgileri
  const { data, isPending } = useShoe(id as string);

  // form gönderildiğinde çalışıcak (api isteği atıcak) fonksiyon
  const onSubmit = (values: IShoeFormValues) => {
    mutate({ id, data: values });
  };

  // loading durumunda loader göster
  if (isPending) return <Loader />;

  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Ürün Düzenle</h1>

      <Form onSubmit={onSubmit} data={data} isPending={isUpdatePending} />
    </div>
  );
};

export default Edit;
