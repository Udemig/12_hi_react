import type { FC } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
interface Props {
  children: React.ReactNode | string;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <div className="container">
      <div className="flex mb-5">
        <Link
          to="/"
          className="border border-zinc-200 p-2 rounded-md transition hover:bg-zinc-100"
        >
          <FaArrowLeft />
        </Link>
      </div>

      {children}
    </div>
  );
};

export default Container;
