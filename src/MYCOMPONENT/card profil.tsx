import { Button } from "@/components/ui/button";
import { BookBookmark } from "@phosphor-icons/react";
import MyAvatar from "./avatar/MyAvatar";
import { useUser } from "@/hooks/store/useUser";
import { getCurrentDate } from "@/lib/date";
import { useSubscribe } from "@/features/subscribe/useSubscribe";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useCheckSubscription } from "@/features/subscribe/useCheckSubscibe";

type Profil = {
  img: string;
  author_name: string;
};

type data = {
  subscriber: string;
  subscribed_to: string;
  subscribe_at: string;
};

const Card_profil = ({ img, author_name }: Profil) => {
  const { user } = useUser();
  const { mutate, isError, data: response } = useSubscribe();
  const { data: subscriptionStatus, isLoading } = useCheckSubscription(
    user.displayName,
    author_name,
  );
  const date = getCurrentDate();
  const [disabled, setDisable] = useState(false);

  const handleFollow = () => {
    const data = {
      subscriber: user.displayName,
      subscribed_to: author_name,
      subscribe_at: date,
    };

    if (data.subscriber === data.subscribed_to) {
      toast("You cannot subscribe to yourself");
      return;
    }

    mutate(data);
  };

  useEffect(() => {
    if (response) {
      setDisable(true);
      toast.success("Successfully subscribed!");
    }
  }, [response]);

  console.log(subscriptionStatus);

  if (isError) return console.log("Error");

  const isSubscribe = subscriptionStatus?.data.subscribed_to === author_name;

  return (
    <div className="box-border grid w-[300px] grid-cols-[1fr_50px] grid-rows-[auto_auto_1fr_auto] gap-4 rounded-lg bg-white px-8 py-4">
      <div className="col-span-2 flex items-end justify-between">
        <MyAvatar size="size-20" img={img} />
        <Button
          variant={"outline"}
          className={`rounded-3xl px-4 py-2 ${
            isSubscribe ? "bg-secondary" : "bg-black text-white"
          }`}
          onClick={handleFollow}
        >
          {isSubscribe ? "Subscribe" : "Follow"}
        </Button>
      </div>
      <div className="col-span-2 flex flex-col items-start justify-center">
        <h1 className="font-bold text-black">
          {author_name ? author_name : "user"}
        </h1>
        <span className="text-sm text-slate-600">
          <span>2.6k</span> Followers
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
