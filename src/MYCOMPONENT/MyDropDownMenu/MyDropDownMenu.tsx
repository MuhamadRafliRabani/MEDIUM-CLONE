import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
            <DotsThree size={22} className="size-6 text-icon mt-2 font-bold" />
          }
          Content={<p>More</p>}
          tag="p"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[250px] bg-white shadow-lg border-none font-light">
        <DropdownMenuLabel className="py-4 flex items-center gap-2 border-b-[0.3px] border-slate-100">
          <BookmarkSimple size={16} /> Save
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex flex-col gap-1">
          <h1 className="flex items-center w-full gap-2">
            <PlusCircle size={16} /> Show more
          </h1>
          <span className="text-sm text-slate-700 ps-6">
            Recommend more stories like this to me.
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex flex-col gap-1">
          <h1 className="flex items-center w-full gap-2">
            <MinusCircle size={16} /> Show less
          </h1>
          <span className="text-sm text-slate-700 ps-6">
            Recommend fewer stories like this to me.
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="border-y-[0.3px] border-slate-100 py-4">
          Follow author
        </DropdownMenuItem>
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
