import type { FC } from "react";
import { Link } from "react-router-dom";
import { useDeleteShoe, useShoes } from "../../service/shoe";
import Loader from "../../components/loader";
import Error from "../../components/error";

const Dashboard: FC = () => {
  const { mutate, isPending } = useDeleteShoe();
  const { data, isLoading, error } = useShoes();

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  console.log(data.length);

  return (
    <div>
      <div className="flex justify-between mb-5 items-center">
        <h1 className="text-2xl md:text-3xl font-semibold">Ürünler</h1>

        <Link
          to="/dashboard/create"
          className="bg-my-blue px-4 py-1 md:px-6 md:py-2 rounded-md text-white hover:bg-my-blue/90 transition cursor-pointer"
        >
          Ürün Ekle
        </Link>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 min-w-26"></th>
              <th scope="col" className="px-6 py-3">
                İsim
              </th>
              <th scope="col" className="px-6 py-3">
                Fiyat
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                İndirim (%)
              </th>
              <th scope="col" className="px-6 py-3">
                Eylemler
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((shoe) => (
              <tr className="bg-white border-b border-gray-200 hover:bg-gray-50 font-semibold ">
                <td className="px-6 py-4">
                  <img
                    src={shoe.picture[0]}
                    alt={shoe.name}
                    className="w-16 h-16 md:w-28 md:h-28 max-w-full max-h-full rounded-xl"
                  />
                </td>
                <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                  {shoe.name}
                </td>
                <td className="px-6 py-4">${shoe.price}</td>
                <td className="px-6 py-4">
                  {shoe.discount > 0 ? `${shoe.discount}%` : "Yok"}
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={`/dashboard/edit/${shoe._id}`}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Düzenle
                  </Link>
                  <button
                    disabled={isPending}
                    onClick={() => mutate(shoe._id)}
                    className="font-medium text-red-600 hover:underline md:ps-3"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
