import { ChatCircle, HandsClapping, StarFour } from "@phosphor-icons/react";
import MyToolTip from "../MyToolTip/MyToolTip";
import { Button } from "@/components/ui/button";
import { useLike } from "@/features/story/like/Like";
import { useFeatureRequest } from "@/lib/useFeatureRequest";

type CardFeture = {
  id?: number;
  date: string;
  likes: number;
  comments: string | null;
};

const CardFeture = ({ id, date, likes, comments }: CardFeture) => {
  const { mutate, data } = useFeatureRequest("patch", "/feature/like");

  const handleLike = () => {
    console.log("like");

    mutate(id);
  };

  console.log(data);

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
        <MyToolTip
          Content={<p className="bg-primary">{likes} claps</p>}
          Trigger={
            <Button onClick={handleLike}>
              <HandsClapping
                size={16}
                weight="fill"
                className="border-none text-icon outline-none"
              />
            </Button>
          }
          tag="p"
        />
        {likes}
      </div>
      <div className="flex items-center justify-center gap-1">
        <MyToolTip
          Content={<p className="bg-primary">{comments} response</p>}
          Trigger={
            <ChatCircle
              size={16}
              weight="fill"
              className="border-none text-icon outline-none"
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
