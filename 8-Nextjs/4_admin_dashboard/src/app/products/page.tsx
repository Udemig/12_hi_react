import DeleteBtn from "@/components/products/delete-btn";
import { getProducts } from "@/utils/service";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaPlus, FaStar } from "react-icons/fa";

const Products: FC = async () => {
  const products = await getProducts();

  return (
    <div className="page">
      <div className="flex justify-between items-center mb-6">
        <h1 className="title">Ürünler</h1>

        <Link
          href="/products/create"
          className="flex items-center gap-2 font-semibold bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          <FaPlus />
          Ürün Ekle
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1  "
          >
            {/* Ürün resmi */}
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Resim Gölgesi */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-300" />

              {/* Stok Adedi */}
              <div className="absolute top-3 right-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    product.stock > 10
                      ? "bg-green-500 text-white"
                      : product.stock > 0
                      ? "bg-yellow-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {product.stock > 0 ? `${product.stock} Adet` : "Stokta Yok"}
                </span>
              </div>
            </div>

            <div className="p-6">
              {/* Ürün Bilgileri */}
              <div className="mb-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {product.brand}
                </p>
              </div>

              {/* Açıklama */}

              <p className="text-gray-700 text-sm mb-4 line-clamp-2 leading-relaxed">
                {product.description}
              </p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`size-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <span className="text-sm text-gray-600 ml-2">
                  {product.rating} ({product.reviews_count})
                </span>
              </div>

              {/* Fiyat */}
              <div className="mb-6">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              {/* Butonlar */}
              <div className="flex justify-between items-center gap-3">
                <Link
                  href={`/products/edit/${product.id}`}
                  className="card-btn "
                >
                  Düzenle
                </Link>

                <DeleteBtn productId={product.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
