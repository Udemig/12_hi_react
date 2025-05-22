"use client";

import Link from "next/link";
import { useState } from "react";

// Layout bileşenleri sayfaların genel düzenini tanımlar
// Layout bileşenleri ekrana basılcak elementleri children prop'u olarak alır
export default function AuthLayout({ children }) {
  const [name, setName] = useState(".");

  return (
    <div className="flex gap-10 text-lg">
      <aside className="flex flex-col gap-5 border rounded p-6">
        <div>
          <h1>{name}</h1>
          <input
            type="text"
            className="border"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
        </div>
      </aside>

      <div>{children}</div>
    </div>
  );
}
