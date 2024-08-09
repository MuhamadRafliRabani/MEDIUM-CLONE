import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BookBookmark } from "@phosphor-icons/react";
import MyAvatar from "./avatar/MyAvatar";
import { useUser } from "@/hooks/store/useUser";
import { getCurrentDate } from "@/lib/date";
import { useSubscribe } from "@/features/story/subscribe/useSubscribe";
import { toast } from "sonner";
import Link from "next/link";
import { useCheckSubscription } from "@/features/story/subscribe/useCheckSubscibe";

type Profil = {
  img: string;
  author_name: string;
};

const Card_profil: React.FC<Profil> = ({ img, author_name }) => {
  const { user } = useUser();
  const date = getCurrentDate();
  const { mutate, data: response } = useSubscribe("/feature/subscribe");
  const { data, isLoading, isError } = useCheckSubscription(user, author_name);

  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const handleFollow = () => {
    if (!user?.displayName) {
      toast("You need to be logged in to subscribe");
      return;
    }

    const Data = {
      subscriber: user.displayName,
      subscribed_to: author_name,
      subscribe_at: date,
    };

    if (Data.subscriber === Data.subscribed_to) {
      toast("You cannot subscribe to yourself");
      return;
    }

    mutate(Data);
    setIsSubscribed(true);
  };

  useEffect(() => {
    if (response) {
      toast.success("Successfully subscribed!");
    }
    if (data?.data) {
      const issubscriber = data.data.some(
        (item: any) => item.subscribed_to === author_name,
      );
      setIsSubscribed(issubscriber);
    }
  }, [response, data]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <div className="box-border grid w-[300px] grid-cols-[1fr_50px] grid-rows-[auto_auto_1fr_auto] gap-4 rounded-lg bg-white px-8 py-4">
      <div className="col-span-2 flex items-end justify-between">
        <MyAvatar size="size-20" img={img} />
        <Link href={!user?.photoURL ? "/auth" : "#"}>
          <Button
            variant={"outline"}
            className={`rounded-3xl px-4 py-2 ${isSubscribed ? "bg-secondary" : "bg-black text-white"}`}
            onClick={user?.photoURL ? handleFollow : undefined}
          >
            {isSubscribed ? "Unfollow" : "Follow"}
          </Button>
        </Link>
      </div>
      <div className="col-span-2 flex flex-col items-start justify-center">
        <h1 className="font-bold text-black">{author_name || "User"}</h1>
        <span className="text-sm text-slate-600">
          <span>{data?.data.length || 0}</span> Followers
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
