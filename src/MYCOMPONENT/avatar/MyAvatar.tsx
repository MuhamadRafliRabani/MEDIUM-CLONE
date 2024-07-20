import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Card_profil from "../card profil";

type AvatarType = {
  size: string;
  img?: string;
};

const MyAvatar = ({ size, img }: AvatarType) => {
  return (
    <Avatar className={size}>
      <AvatarImage
        className="object-fill"
        src={"https://github.com/shadcn.png"}
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default MyAvatar;
