"use client";

import { NavItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Props extends NavItem {
  isExpanded: boolean;
}

const NavLink: FC<Props> = ({ name, icon, url, isExpanded }) => {
  const pathname = usePathname();

  const isActive = pathname === url;

  return (
    <Link
      href={url || "/"}
      className={`flex items-center gap-2 p-5 hover:bg-gray-100 transition border-l-2 border-transparent group ${
        isActive ? "text-blue-500 bg-blue-50 !border-blue-500" : ""
      }`}
    >
      <div className="text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
        {icon}
      </div>

      <span
        className={`whitespace-nowrap transition-all duration-400 ${
          isExpanded
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-4 w-0 overflow-hidden"
        }`}
      >
        {name}
      </span>
    </Link>
  );
};

export default NavLink;
