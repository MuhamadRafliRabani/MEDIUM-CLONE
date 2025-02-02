import MyToolTip from "../MyToolTip/MyToolTip";
import MyDrawer from "../my_drawer/MyDrawer";
import Comment from "@/features/comment/commentFilde";
import { formatDate } from "@/lib/date";
import { useHandleGet } from "@/lib/useGet";
import { MessageCircle, Star, ThumbsUp } from "lucide-react";

type CardFetureProps = {
  id?: number;
  date: string;
};

const CardFeture = ({ id, date }: CardFetureProps) => {
  const { data: like } = useHandleGet(`/feature/like/${id}`);
  const { data: comment } = useHandleGet(`/feature/comment/${id}`);
  const formattedDate = formatDate(date);

  return (
    <div className="flex w-full items-center gap-4 pt-4 text-sm md:pt-0">
      {/* Member-only Story Icon */}
      <div className="flex items-center gap-1 text-icon">
        <MyToolTip
          Content={<p className="bg-primary">Member-only story</p>}
          Trigger={
            <Star
              className="fill-yellow-400"
              fill="fill"
              size={16}
              strokeWidth={0.5}
            />
          }
          tag="p"
        />
      </div>

      {/* Date */}
      <div className="flex items-center gap-2 text-xs font-medium text-black/70">
        {formattedDate}
      </div>

      {/* Likes (Hidden on Mobile) */}
      <div className="hidden items-center gap-2 text-xs text-black/70 md:flex">
        <button>
          <ThumbsUp className="fill-black/60" size={16} strokeWidth={0.5} />
        </button>
        {like?.data.length}
      </div>

      {/* Comments (Hidden on Mobile) */}
      <div className="hidden items-center gap-2 text-xs text-black/70 md:flex">
        <MyToolTip
          Content={
            <p className="bg-primary">{comment?.data.length} responses</p>
          }
          Trigger={
            <MyDrawer
              content={<Comment id={id} />}
              triger={
                <MessageCircle
                  className="fill-black/60"
                  size={16}
                  strokeWidth={0.5}
                />
              }
              Title="Comment"
              Description="Comment with a good word"
            />
          }
          tag="p"
        />
        {comment?.data.length}
      </div>
    </div>
  );
};

export default CardFeture;
