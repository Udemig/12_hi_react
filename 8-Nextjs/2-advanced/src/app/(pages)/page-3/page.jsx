import Link from "next/link";

export default function Page3() {
  return (
    <div>
      <h1 className="mb-10">Page3</h1>

      <Link href="/page-4" className="text-lg text-blue-500">
        Page4'e yönlendir
      </Link>
    </div>
  );
}
