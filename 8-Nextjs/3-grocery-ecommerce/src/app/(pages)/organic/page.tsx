import { FC } from "react";
import Link from "next/link";
import { FaArrowLeft, FaLeaf } from "react-icons/fa";
import Card from "@/components/home/card";
import { getOrganicProducts } from "@/service/product-service";

const OrganicPage: FC = async () => {
  const { groceries } = await getOrganicProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Geri Dön Butonu */}
      <div className="mb-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-green-600 hover:underline"
        >
          <FaArrowLeft />
          <span>Anasayfaya Dön</span>
        </Link>
      </div>

      {/* Sayfa Başlığı */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <FaLeaf className="text-3xl" />
          <h1 className="text-3xl font-bold">Organik Ürünler</h1>
        </div>
        <p className="text-green-100">
          Doğal ve organik ürünlerle sağlıklı beslenme artık çok kolay. Kimyasal
          gübre ve pestisit kullanılmadan yetiştirilmiş taze ürünlerimizi
          keşfedin.
        </p>
      </div>

      {/* Ürün Listesi */}
      {groceries && groceries.length > 0 ? (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              {groceries.length} Organik Ürün Bulundu
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {groceries.map((product) => (
              <Card key={product._id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <FaLeaf className="text-6xl text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-600 mb-2">
            Henüz Organik Ürün Bulunmuyor
          </h2>
          <p className="text-gray-500 mb-6">
            Organik ürünlerimiz çok yakında sizlerle buluşacak.
          </p>
          <Link
            href="/"
            className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition"
          >
            Diğer Ürünleri Görüntüle
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrganicPage;
