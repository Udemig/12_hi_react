import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-400 p-5 rounded-md text-2xl flex justify-between items-center">
      <h1>Header</h1>

      <nav className="flex gap-2 text-lg">
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/products">Products</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
      </nav>
    </header>
  );
}
