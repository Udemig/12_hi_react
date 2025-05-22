import Link from "next/link";

export default function Page1() {
  return (
    <div>
      <h1 className="mb-10">Page-1</h1>

      <Link
        href="/page-1/page-2"
        className="text-lg text-blue-500 hover:underline"
      >
        Page2'ye yönlendir
      </Link>
    </div>
  );
}
