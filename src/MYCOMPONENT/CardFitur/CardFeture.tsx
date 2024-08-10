import {
  ChatCircle,
  HandsClapping,
  PaperPlaneRight,
  StarFour,
} from "@phosphor-icons/react";
import MyToolTip from "../MyToolTip/MyToolTip";
import { useState } from "react";
import { useFeatureRequest } from "@/lib/useFeatureRequest";
import Link from "next/link";
import { useUser } from "@/hooks/store/useUser";
import MyDrawer from "../my_drawer/MyDrawer";
import Comment from "@/features/comment/commentInput";
import { Button } from "@/components/ui/button";

type CardFeture = {
  id?: number;
  date: string;
  likes: number;
  comments: string | null;
};

const CardFeture = ({ id, date, likes, comments }: CardFeture) => {
  const [like, setLike] = useState(likes);
  const [isLiked, setisLiked] = useState(false);
  const { mutate: mutatelike } = useFeatureRequest("patch", "/feature/like");
  const { user } = useUser();

  const handleLike = () => {
    setLike(like + 1);
    setisLiked(true);
    mutatelike({ id });
  };

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
        {date}
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
