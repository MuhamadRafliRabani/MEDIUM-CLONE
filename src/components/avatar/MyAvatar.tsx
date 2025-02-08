import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
