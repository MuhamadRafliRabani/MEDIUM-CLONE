import React from "react";
import Link from "next/link";
import { PencilLine } from "@phosphor-icons/react";
import MyDropDownMenu from "../MyDropDownMenu/MyDropDownMenu";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <p className="text-xl font-bold">Medium</p>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href={"/article/new-story"}
            className="text-gray-700 hover:text-black"
          >
            <PencilLine size={24} weight="thin" />
          </Link>
          <MyDropDownMenu />
          <div className="size-8 rounded-full bg-slate-200"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
