import { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <div className="flex-1 flex flex-col items-center mt-40 h-full text-center gap-10">
      <h1 className="text-2xl font-bold">Aradığınız Sayfa Bulunamadı</h1>

      <h4 className="text-lg">Sayfa İçeriği Kaldırılmış veya Yanlış URL girdiniz</h4>

      <Link to="/" className="text-lg border py-2 px-4 rounded-md hover:bg-zinc-200 hover:text-black transition">
        Anasayfa
      </Link>
    </div>
  );
};

export default NotFound;
