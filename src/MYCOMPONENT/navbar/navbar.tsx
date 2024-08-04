import React from "react";
import Link from "next/link";
import { PencilLine, SignIn } from "@phosphor-icons/react";
import MyDropDownMenu from "../MyDropDownMenu/MyDropDownMenu";
import Image from "next/image";
import { useUser } from "@/hooks/store/useUser";
import { Button } from "@/components/ui/button";
import MyToolTip from "../MyToolTip/MyToolTip";

const Navbar: React.FC = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <p className="text-xl font-bold">Medium</p>
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link
            href={!user.photoURL ? "/auth" : "/article/new-story"}
            className="text-gray-700 hover:text-black"
          >
            <MyToolTip
              Content={<p>make your story</p>}
              Trigger={<PencilLine size={24} weight="thin" />}
              tag="p"
            />
          </Link>
          <MyDropDownMenu />
          <div>
            {!user.photoURL ? (
              <Link href="/auth">
                <MyToolTip
                  Content={<p>signup</p>}
                  Trigger={<SignIn size={22} className="md:mt-1" />}
                  tag="p"
                />
              </Link>
            ) : (
              <Image
                src={user.photoURL}
                alt=""
                width={32}
                height={32}
                className="size-8 rounded-full bg-slate-200"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
