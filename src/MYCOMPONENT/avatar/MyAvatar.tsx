import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Card_profil from "../card profil";

type AvatarType = {
  size: string;
  img?: any;
};

const MyAvatar = ({ size, img }: AvatarType) => {
  return (
    <Avatar className={size}>
      <AvatarImage className="object-fill" src={img} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default MyAvatar;
