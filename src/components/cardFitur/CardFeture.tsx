import { useUser } from "@/hooks/store/zustand";
import { formatDate } from "@/lib/date";
import { useHandleGet } from "@/lib/useGet";
import { MessageCircle, Star } from "lucide-react";
import Link from "next/link";
import ToolTips from "../toolTip/MyToolTip";
import { Like } from "@/features/like/handleLike";

type CardFetureProps = {
  id?: number;
  date: string;
  member_only: boolean;
};

const CardFeture = ({ id, date, member_only = false }: CardFetureProps) => {
  const { data: comment } = useHandleGet(`/feature/comment/${id}`);
  const formattedDate = formatDate(date);
  const { user } = useUser();

  return (
    <div className="flex w-full items-center gap-4 pt-4 text-sm md:pt-0">
      {/* Member-only Story Icon */}
      {member_only && (
        <div className="flex items-center gap-1 text-icon">
          <ToolTips
            Content={<p>Member-only story</p>}
            Trigger={
              <Star
                className="fill-yellow-400"
                fill="fill"
                size={16}
                strokeWidth={0.5}
              />
            }
          />
        </div>
      )}

      {/* Date */}
      <div className="flex items-center gap-2 text-xs font-medium text-black/70">
        {formattedDate}
      </div>

      {/* Likes (Hidden on Mobile) */}
      <Like user_id={user ? user.id : null} article_id={id} />

      {/* Comments (Hidden on Mobile) */}
      <div className="-mt-1 hidden items-center gap-2 text-xs text-black/70 sm:flex md:flex">
        <ToolTips
          Content={<p>{comment?.data.length} responses</p>}
          Trigger={
            <Link href={`/article/${id}`}>
              <MessageCircle
                size={16}
                strokeWidth={0.5}
                className="fill-black/60"
              />
            </Link>
          }
        />
        {comment?.data.length}
      </div>
    </div>
  );
};

export default CardFeture;
