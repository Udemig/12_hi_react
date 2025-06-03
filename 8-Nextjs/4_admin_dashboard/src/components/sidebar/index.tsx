"use client";

import { links } from "@/utils/constants";
import { FC, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLink from "./nav-link";

const Sidebar: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`flex flex-col gap-5 border-r border-zinc-300  transition-all duration-300 shadow-lg bg-white text-gray-500 ${
        isExpanded ? "min-w-[140px]" : "min-w-[60px]"
      }`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-center p-5 text-2xl hover:text-blue-400 transition-colors duration-200"
      >
        <RxHamburgerMenu
          className={`transition-transform duration-300 ${
            isExpanded ? "rotate-90" : ""
          }`}
        />
      </button>

      <div>
        {links.map((i, key) => (
          <NavLink {...i} key={key} isExpanded={isExpanded} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
