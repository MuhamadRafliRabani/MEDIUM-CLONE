import { ChatCircle, HandsClapping, StarFour } from "@phosphor-icons/react";
import MyToolTip from "../MyToolTip/MyToolTip";
import { useState } from "react";
import { useUser } from "@/hooks/store/useUser";
import MyDrawer from "../my_drawer/MyDrawer";
import Comment from "@/features/comment/comment";
import { useHandlePatch } from "@/lib/useHandlePatch";
import { toast } from "sonner";
import { formatDate } from "@/lib/date";

type CardFeture = {
  id?: number;
  date: string;
  likes: number;
  comments: string | number | null;
};

const CardFeture = ({ id, date, likes, comments }: CardFeture) => {
  const { user } = useUser();
  const [like, setLike] = useState(likes);
  const [isLiked, setisLiked] = useState(false);
  const Date = formatDate(date);

  const handleLike = () => {
    setLike(like + 1);
    setisLiked(true);
  };

  const { isError } = useHandlePatch("/feature/like/" + id, handleLike);

  if (isError) toast.error("cannot like");

  return (
    <div className="flex w-full items-center justify-start gap-4 pt-4 text-sm md:pt-0">
      <div className="flex items-center justify-center gap-1 text-xs text-icon">
        <MyToolTip
          Content={<p className="bg-primary">Member-only story</p>}
          Trigger={
            <StarFour
              size={16}
              weight="fill"
              className="border-none text-yellow-400 outline-none"
            />
          }
          tag="p"
        />
      </div>
      <div className="flex items-center justify-center gap-2 text-xs font-medium">
        {Date}
      </div>
      <div className="flex items-center justify-center gap-1">
        <button onClick={user && handleLike} disabled={isLiked}>
          <HandsClapping
            size={16}
            weight="fill"
            className="border-none text-icon outline-none"
          />
        </button>

        {like}
      </div>
      <div className="flex items-center justify-center gap-1">
        <MyToolTip
          Content={<p className="bg-primary">{comments} response</p>}
          Trigger={
            <MyDrawer
              content={<Comment id={id} />}
              triger={
                <ChatCircle
                  size={16}
                  weight="fill"
                  className="border-none text-icon outline-none"
                />
              }
              Title="Comment"
              Description="comment with a good word"
            />
          }
          tag="p"
        />{" "}
        {comments}
      </div>
    </div>
  );
};

export default CardFeture;
