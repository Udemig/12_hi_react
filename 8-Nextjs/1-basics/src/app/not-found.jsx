import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1 className="text-yellow-500">404</h1>
      <h4 className="my-10">Sayfa bulunamadı</h4>
      <Link href="/" className="text-lg">
        Ana sayfaya dön
      </Link>
    </div>
  );
}
