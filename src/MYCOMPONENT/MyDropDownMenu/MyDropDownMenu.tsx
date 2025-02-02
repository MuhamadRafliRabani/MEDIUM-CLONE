import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BookmarkSimple,
  DotsThree,
  MinusCircle,
  PlusCircle,
} from "@phosphor-icons/react";
import MyToolTip from "../MyToolTip/MyToolTip";

const MyDropDownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MyToolTip
          Trigger={
            <DotsThree size={22} className="mt-2 size-6 font-bold text-icon" />
          }
          Content={<p>More</p>}
          tag="p"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="bottom"
        className="w-[250px] border-none bg-white font-light shadow-lg"
      >
        <DropdownMenuLabel className="flex items-center gap-2 py-4">
          <BookmarkSimple size={16} /> Save
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex flex-col gap-1">
          <h1 className="flex w-full items-center gap-2">
            <PlusCircle size={16} /> Show more
          </h1>
          <span className="ps-6 text-sm text-slate-700">
            Recommend more stories like this to me.
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex flex-col gap-1">
          <h1 className="flex w-full items-center gap-2">
            <MinusCircle size={16} /> Show less
          </h1>
          <span className="ps-6 text-sm text-slate-700">
            Recommend fewer stories like this to me.
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Follow author</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Mute author</DropdownMenuItem>
        <DropdownMenuItem className="text-red-400">
          Report story
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MyDropDownMenu;
