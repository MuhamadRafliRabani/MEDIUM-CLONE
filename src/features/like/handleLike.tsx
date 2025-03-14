import ToolTips from "@/components/toolTip/MyToolTip";
import { Button } from "@/components/ui/button";
import { useHandleGet } from "@/lib/useGet";
import { useHandlePost } from "@/lib/useHandlePost";
import { ThumbsUp } from "lucide-react";
import { useEffect } from "react";

type LikeProps = {
  user_id: string;
  article_id?: number | string | string[];
};

export const Like = ({ user_id, article_id }: LikeProps) => {
  const { mutate, isPending, isSuccess } = useHandlePost(
    `/feature/like/${user_id}/${article_id}`,
  );
  const { data: likes, refetch } = useHandleGet({
    url: `/feature/like/${article_id}`,
    key: article_id,
  });

  const hasLiked =
    likes?.data?.some((like: any) => like.user_id === user_id) ?? false;

  const handleLike = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!user_id || !article_id || isPending) return;

    mutate(user_id);
  };

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess, refetch]);

  return (
    <div className="-mt-1 hidden items-center gap-2 text-xs text-black/70 sm:flex md:flex">
      <Button
        onClick={handleLike}
        disabled={hasLiked || isPending}
        className="w-fit p-0 hover:bg-transparent focus:outline-none"
        variant="ghost"
      >
        <ToolTips
          Content={<p>{likes?.data?.length ?? 0} likes</p>}
          Trigger={
            <ThumbsUp
              className={hasLiked ? "fill-blue-400" : "fill-black/60"}
              size={16}
              strokeWidth={0.5}
            />
          }
        />
      </Button>
      {likes?.data?.length}
    </div>
  );
};
