import { Button } from "@/components/ui/button";
import { BookBookmark } from "@phosphor-icons/react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import MyProfil from "./MyProfil";

const Card_profil = () => {
  return (
    <div className="grid grid-cols-[1fr_50px] grid-rows-[auto_auto_1fr_auto] gap-4 px-8 py-4 box-border bg-white w-[300px] rounded-lg">
      <div className="col-span-2 flex justify-between items-end">
        <MyProfil />
        <Button variant="outline" className="bg-black text-white rounded-3xl px-4 py-2">
          Follow
        </Button>
      </div>
      <div className="col-span-2 flex flex-col justify-center items-start">
        <h1 className="font-bold">Will Smith</h1>
        <span className="text-sm text-slate-600">
          <span>2.6k</span> Followers
        </span>
      </div>
      <div className="col-span-2 text-start">
        <p className="text-slate-700 text-sm leading-5">
          Author of “Python Tools for Scientists,” “Impractical Python Projects,” and “Real World Python.” Former Senior Principal Scientist for ExxonMobil.
        </p>
      </div>
      <div className="col-span-2 flex items-center gap-2 text-sm text-blue-500 font-semibold capitalize">
        <BookBookmark size={16} color="#0a0a0a" weight="thin" />
        <p>Bookmark author</p>
      </div>
    </div>
  );
};

export default Card_profil;
