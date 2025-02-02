import React from "react";
import MyDropDownMenu from "@/MYCOMPONENT/MyDropDownMenu/MyDropDownMenu";
import Link from "next/link";
import MyDrawer from "../../MYCOMPONENT/my_drawer/MyDrawer";
import { Button } from "@/components/ui/button";
import FormPublish from "./publish/formPublish";
import Image from "next/image";
import { useUser } from "@/hooks/store/useUser";
import { InitialValue } from "@/pages/article/new-story";

const HeaderStory = ({ title, story }: InitialValue) => {
  const { user } = useUser();

  return (
    <nav className="fixed inset-x-0 top-0 z-[9999] flex max-h-14 items-center justify-between border-b border-gray-200 bg-white p-4">
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
