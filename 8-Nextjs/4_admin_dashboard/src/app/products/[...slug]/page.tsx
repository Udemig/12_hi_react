import ProductForm from "@/components/products/product-form";
import { Product } from "@/types";
import { getProduct } from "@/utils/service";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FC } from "react";

interface Props {
  params: Promise<{ slug: string[] }>;
}

const ProductPage: FC<Props> = async ({ params }) => {
  // url'deki parametreleri al
  const { slug } = await params;

  // düzenlenenicek ürünün bilgilerini tutucak değişken
  let product: Product | null = null;

  // düzenelme modunda isek
  if (slug[0] === "edit" && slug[1]) {
    try {
      // düzenlenicek ürün bilgilerini geitr
      product = await getProduct(slug[1]);

      // ürünü bulunamadıysa 404 sayfasına yönlendir
      if (!product) notFound();
    } catch (error) {
      notFound();
    }
  }

  // sayfa başlığı
  const pageTitle = product ? "Ürün Düzenle" : "Ürün Ekle";

  return (
    <div className="page container mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="title">{pageTitle}</h1>

        <Link
          href={"/products"}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
        >
          Geri
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <ProductForm product={product} />
      </div>
    </div>
  );
};

export default ProductPage;
