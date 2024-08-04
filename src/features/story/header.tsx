import React from "react";
import Publish from "../../MYCOMPONENT/my_drawer/MyDrawer";
import MyDropDownMenu from "@/MYCOMPONENT/MyDropDownMenu/MyDropDownMenu";
import { InitialValue } from ".";
import Link from "next/link";

const HeaderStory = ({ title, story }: InitialValue) => {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-white p-4">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-2xl font-bold text-black">
          Medium
        </Link>
        <span className="text-sm text-gray-500">Draft in Noirr</span>
      </div>
      <div className="flex items-center space-x-4">
        <Publish title={title} story={story} />
        <MyDropDownMenu />
        <div className="h-8 w-8 rounded-full bg-red-500"></div>{" "}
        {/* User profile icon */}
      </div>
    </nav>
  );
};

export default HeaderStory;
