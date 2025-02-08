import CardComment from "@/components/comment/commentCard";
import CommentFilde, { CommentData } from "@/components/comment/commentFilde";
import { useHandleGet } from "@/lib/useGet";
import { useHandlePost } from "@/lib/useHandlePost";

type commentType = {
  id: string | string[] | undefined;
};

const Comment = ({ id }: commentType) => {
  const { mutate, isIdle, isSuccess } = useHandlePost<Comment>(
    "/feature/upload/comment",
  );

  const { data: comments } = useHandleGet(
    `/feature/comment/${id}`,
    id,
    isSuccess,
  );

  return (
    <div>
      <CommentFilde id={id} mutate={mutate} isSuccess={isSuccess} />
      <div className="mx-auto max-w-3xl" id="comment">
        {comments?.data.map((comment: CommentData, i: number) => (
          <CardComment
            key={i}
            comment={comment.comment}
            article_id={comment.article_id}
            image={comment.image || "/user.jpg"}
            create_at={comment.create_at}
            user_name={comment.user_name}
          />
        ))}
      </div>
    </div>
  );
};

export default Comment;
