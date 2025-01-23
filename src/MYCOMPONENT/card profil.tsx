import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BookBookmark } from "@phosphor-icons/react";
import MyAvatar from "./avatar/MyAvatar";
import { toast } from "sonner";
import Link from "next/link";
import { useHandlePost } from "@/lib/useHandlePost";
import { useUser } from "@/hooks/store/useUser";

type Profil = {
  img: any;
  user_name: any;
};

type SubscribeDataType = {
  subscriber: string;
  subscribed_to: string;
};

type CheckSubscription = {
  subscriber: string;
  subscribed_to: string;
};

const Card_profil: React.FC<Profil> = ({ img, user_name }) => {
  const { user } = useUser();
  const { mutate: checkIsSubscribe, isSuccess: successCheck } =
    useHandlePost<CheckSubscription>("/feature/checkIsSubscribe");
  const { mutate, isSuccess, data } =
    useHandlePost<SubscribeDataType>("/feature/subcribe");

  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const handleFollow = () => {
    toast.info("sedang dalam perbaikan");
  };

  const checkSubscribe = {
    subscriber: user.email as string,
    subscribed_to: user_name,
  };

  useEffect(() => {
    checkIsSubscribe(checkSubscribe);
  }, [isSuccess, []]);

  if (successCheck) {
    // const issubscriber = data.data.some(
    //   (item: any) => item.subscribed_to === user_name,
    // );
    // setIsSubscribed(issubscriber);
    console.log(data);
  }

  if (isSuccess) return toast.success("subscribed");

  return (
    <div className="box-border grid w-[300px] grid-cols-[1fr_50px] grid-rows-[auto_auto_1fr_auto] gap-4 rounded-lg bg-white px-8 py-4">
      <div className="col-span-2 flex items-end justify-between">
        <MyAvatar size="size-20" img={img} />
        <Link href={!user?.photoURL ? "/auth" : "#"}>
          <Button
            variant={"outline"}
            className={`rounded-3xl px-4 py-2 ${isSubscribed ? "bg-secondary" : "bg-black text-white"}`}
            onClick={handleFollow}
          >
            {isSubscribed ? "Unfollow" : "Follow"}
          </Button>
        </Link>
      </div>
      <div className="col-span-2 flex flex-col items-start justify-center">
        <h1 className="font-bold text-black">{user_name || "User"}</h1>
        <span className="text-sm text-slate-600">
          {/* <span>{data?.data.length || 0}</span> Followers */}
        </span>
      </div>
      <div className="col-span-2 text-start">
        <p className="text-sm leading-5 text-slate-700">
          Author of “Python Tools for Scientists,” “Impractical Python
          Projects,” and “Real World Python.” Former Senior Principal Scientist
          for ExxonMobil.
        </p>
      </div>
      <div className="col-span-2 flex items-center gap-2 text-sm font-semibold capitalize text-blue-500">
        <BookBookmark size={16} color="#0a0a0a" weight="thin" />
        <p>Bookmark author</p>
      </div>
    </div>
  );
};

export default Card_profil;
