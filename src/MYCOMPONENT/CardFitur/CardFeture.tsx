import MyToolTip from "../MyToolTip/MyToolTip";
import MyDrawer from "../my_drawer/MyDrawer";
import Comment from "@/features/comment/commentFilde";
import { formatDate } from "@/lib/date";
import { MessageCircle, Star, ThumbsUp } from "lucide-react";

type CardFeture = {
  id?: number;
  date: string;
  comments: string | number | null;
};

const CardFeture = ({ id, date, comments }: CardFeture) => {
  const Date = formatDate(date);

  return (
    <div className="flex w-full items-center gap-4 pt-4 text-sm md:pt-0">
      <div className="flex items-center justify-center gap-1 text-icon">
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
      <div className="flex items-center justify-center gap-2 text-[0.8rem] font-medium text-black/70">
        {Date}
      </div>
      <div className="flex items-center gap-2 text-[0.8rem] text-black/70">
        <button>
          <ThumbsUp className="fill-black/60" size={16} strokeWidth={0.5} />
        </button>
        20
      </div>
      <div className="flex items-center justify-center gap-1 pt-1 text-black/70">
        <MyToolTip
          Content={<p className="bg-primary">{comments} response</p>}
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
              Description="comment with a good word"
            />
          }
          tag="p"
        />
        {comments}
        60
      </div>
    </div>
  );
};

export default CardFeture;
