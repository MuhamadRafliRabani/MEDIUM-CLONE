import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FormPublish from "./publish/formPublish";
import Image from "next/image";
import { useUser } from "@/hooks/store/zustand";
import MyDrawer from "@/components/drawer/MyDrawer";
import MyDropDownMenu from "@/components/dropDown/MyDropDownMenu";
import { InitialValue } from "@/lib";

const HeaderStory = ({ title, story }: InitialValue) => {
  const { user } = useUser();

  return (
    <nav className="fixed inset-x-0 top-0 z-10 flex max-h-14 items-center justify-between border-b border-gray-200 bg-white px-4 py-5">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-2xl font-bold text-black">
          Medium
        </Link>
        <span className="hidden text-sm text-gray-500 md:inline-block">
          Draft in {user && user.email}
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <MyDrawer
          triger={
            <Button className="rounded-md bg-green-400 text-sm text-white">
              Publish
            </Button>
          }
          content={<FormPublish title={title} story={story} />}
          Title="Pubslish your story"
          Description="Share your story to the world"
        />
        <MyDropDownMenu />
        <div className="size-8">
          <Image
            src={"/user.jpg"}
            width={100}
            height={100}
            alt=""
            className="rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default HeaderStory;
