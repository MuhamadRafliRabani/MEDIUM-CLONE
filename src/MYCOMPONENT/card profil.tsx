import { Button } from "@/components/ui/button";
import { BookBookmark } from "@phosphor-icons/react";
import MyAvatar from "./avatar/MyAvatar";

const Card_profil = () => {
  return (
    <div className="box-border grid w-[300px] grid-cols-[1fr_50px] grid-rows-[auto_auto_1fr_auto] gap-4 rounded-lg bg-white px-8 py-4">
      <div className="col-span-2 flex items-end justify-between">
        <MyAvatar size="size-20" img="https://github.com/shadcn.png" />
        <Button
          variant={"outline"}
          className="rounded-3xl bg-black px-4 py-2 text-white"
        >
          Follow
        </Button>
      </div>
      <div className="col-span-2 flex flex-col items-start justify-center">
        <h1 className="font-bold text-black">Will Smith</h1>
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
