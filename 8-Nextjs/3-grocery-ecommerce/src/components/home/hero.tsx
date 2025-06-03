import { FC } from "react";
import Link from "next/link";

const Hero: FC = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-5 text-white">
      <div className="flex flex-col justify-between p-6 rounded-lg bg-gradient-to-r from-green-600 to-green-700">
        <h1 className="text-3xl font-semibold">
          Organik Ürünler <br /> Uygun Fiyata
        </h1>

        <p className="my-3">
          Doğal ve organik ürünlerle sağlıklı beslenme artık çok kolay
        </p>

        <Link
          href="/organic"
          className="bg-white inline-block w-fit text-green-700 py-2 px-4 rounded-md hover:bg-green-50 transition cursor-pointer"
        >
          Organik Ürünler
        </Link>
      </div>

      <div className="max-lg:hidden flex flex-col justify-between p-6 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 ">
        <h1 className="text-3xl font-semibold">
          Taze Manav Ürünleri <br /> Kapınıza Kadar
        </h1>

        <p className="my-3">
          En taze meyve ve sebzeler elinizin altında. Sağlıklı yaşamın ilk adımı
          sizden başlıyor.
        </p>

        <button className="bg-white inline-block w-fit text-green-700 py-2 px-4 rounded-md hover:bg-green-50 transition cursor-pointer">
          Alışverişe Başla
        </button>
      </div>
    </div>
  );
};

export default Hero;
