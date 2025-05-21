//! Static Metadata
// export const metadata = {
//  title: "Ürün Detayı",
//  description: "Ürün detayı sayfası",
//};

//! Dynamic Metadata
export async function generateMetadata({ params }) {
  // url'deki parameteleri alır
  const { productId } = await params;

  //? burada api istek atıp ürün bilgileri alınabilir

  // bu fonksiyonun return ettiği değer metadata'yı oluşturur
  return {
    title: `(${productId}) - Ürün Detayı `,
    description: `Ürün detayı sayfası`,
  };
}

// Next.js'de urldeki parametreleri almak için [productId] gibi köşeli parantezler kullanılır.
// Bu parametreler component'a otomatik olarak prop olarak aktarılır.
export default async function ProductDetail({ params }) {
  const { productId } = await params;

  return (
    <div>
      <h1>{productId} ID'li Ürün Detayı</h1>
    </div>
  );
}
