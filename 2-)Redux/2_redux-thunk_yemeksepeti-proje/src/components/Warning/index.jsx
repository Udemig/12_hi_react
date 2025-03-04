import { Link } from "react-router-dom";

const Warning = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      Sepette henüz herhangi bir ürün eklenmedi.
      <Link className="border p-2 shadow rounded hover:bg-gray-100" to="/">
        Ürünlere Git
      </Link>
    </div>
  );
};

export default Warning;
