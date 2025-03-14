import CardComment from "@/components/comment/commentCard";
import CommentFilde from "@/components/comment/commentFilde";
import { CommentData } from "@/lib";
import { useHandleGet } from "@/lib/useGet";
import { useHandlePost } from "@/lib/useHandlePost";

const Comment = ({ id }: { id: string | string[] | undefined }) => {
  const { mutate, isSuccess } = useHandlePost<Comment>(
    "/feature/upload/comment",
  );

  const { data: comments } = useHandleGet({
    url: `/feature/comment/${id}`,
    key: isSuccess,
  });

  return (
    <>
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
    </>
  );
};

export default Comment;
