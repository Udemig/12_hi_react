"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  // urldeki path'i al
  const pathname = usePathname();

  // pathname ile href'i karşılaştır
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-white hover:text-zinc-400 transition-colors ${
        isActive ? "!text-amber-500" : ""
      }`}
    >
      {children}
    </Link>
  );
}
