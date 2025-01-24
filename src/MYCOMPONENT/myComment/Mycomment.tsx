import type { Comment } from "@/features/comment/commentFilde";
import MyToolTip from "../MyToolTip/MyToolTip";
import Card_profil from "../card profil";
import MyAvatar from "../avatar/MyAvatar";
import { formatDate } from "@/lib/date";

const CardComment = ({ user_name, comment, create_at, image }: Comment) => {
  const date = formatDate(create_at);

  return (
    <div className="mx-auto my-4 w-full max-w-2xl rounded-lg bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="">
            <MyToolTip
              Content={<Card_profil img={image} user_name={user_name} />}
              Trigger={<MyAvatar size="size-6 rounded-full" img={image} />}
            />
          </div>
          <div>
            <h4 className="font-semibold">{user_name}</h4>
            <p className="text-sm text-gray-500">{date}</p>
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
