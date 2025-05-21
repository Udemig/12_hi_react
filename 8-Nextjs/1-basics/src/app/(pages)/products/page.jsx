import Link from "next/link";

export const metadata = {
  title: "Ürünler",
  description: "Ürünler sayfası",
};

export default function Products() {
  return (
    <div className="flex flex-col gap-5">
      <h1>Ürünler Sayfası</h1>

      <Link href="/products/1">Ürün - 1</Link>
      <Link href="/products/2">Ürün - 2</Link>
      <Link href="/products/3">Ürün - 3</Link>
      <Link href="/products/4">Ürün - 4</Link>
    </div>
  );
}
