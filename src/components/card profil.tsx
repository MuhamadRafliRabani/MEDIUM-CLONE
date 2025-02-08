import { Button } from "@/components/ui/button";
import { BookBookmark } from "@phosphor-icons/react";
import MyAvatar from "./avatar/MyAvatar";
import Link from "next/link";
import { useUser } from "@/hooks/store/zustand";

type Profil = {
  img: any;
  user_name: any;
};

const Card_profil: React.FC<Profil> = ({ img, user_name }) => {
  const { user } = useUser();

  return (
    <div className="box-border grid w-[300px] grid-cols-[1fr_50px] grid-rows-[auto_auto_1fr_auto] gap-4 rounded-lg bg-white px-8 py-4">
      <div className="col-span-2 flex items-end justify-between">
        <MyAvatar size="size-20" img={img} />
        <Link href={!user?.photoURL ? "/auth" : "#"}>
          <Button
            variant={"outline"}
            className={`"bg-secondary" "bg-black text-white" rounded-3xl px-4 py-2`}
          >
            {"Unfollow"}
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
