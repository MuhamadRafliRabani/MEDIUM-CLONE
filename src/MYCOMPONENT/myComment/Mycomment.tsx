import type { Comment } from "@/features/comment/comment";
import MyToolTip from "../MyToolTip/MyToolTip";
import Card_profil from "../card profil";
import MyAvatar from "../avatar/MyAvatar";

const CardComment = ({ user, comment, time, profil_img }: Comment) => {
  return (
    <div className="mx-auto my-4 w-full max-w-2xl rounded-lg bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="">
            <MyToolTip
              Content={<Card_profil img={profil_img} author_name={user} />}
              Trigger={<MyAvatar size="size-6 rounded-full" img={profil_img} />}
            />
          </div>
          <div>
            <h4 className="font-semibold">{user}</h4>
            <p className="text-sm text-gray-500">{time}</p>
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{comment}</p>
      <div className="mt-4 flex justify-between">
        <button className="text-sm text-gray-500">Reply</button>
        <button className="text-sm text-gray-500">Like</button>
      </div>
    </div>
  );
};

export default CardComment;
