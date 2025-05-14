import type { FC } from "react";
import { FaSpinner } from "react-icons/fa";

const Loader: FC = () => {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <FaSpinner className="animate-spin text-blue-500 text-3xl" />
    </div>
  );
};

export default Loader;
