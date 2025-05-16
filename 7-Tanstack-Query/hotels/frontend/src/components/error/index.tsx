import type { FC } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

interface Props {
  message: string;
  refetch?: () => void;
}

const Error: FC<Props> = ({ message, refetch }) => {
  return (
    <div className="flex justify-center items-center h-[60vh] flex-col gap-5">
      <FaExclamationTriangle className="text-red-500 text-4xl" />
      <p className="text-red-500 font-bold">Bir hata oluştu</p>
      <p className="font-semibold">{message}</p>

      {refetch && (
        <button
          onClick={refetch}
          className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md"
        >
          Tekrar Dene
        </button>
      )}
    </div>
  );
};

export default Error;
