import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import { useEffect, useRef } from "react";
import * as yup from "yup";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useHandlePost } from "@/lib/useHandlePost";
import { useUser } from "@/hooks/store/useUser";
import { SendHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";

export type Comment = {
  user_name: string;
  article_id: number;
  comment: string;
  image: string;
  create_at?: string | null | undefined;
};

export const validationSchema = yup.object({
  comment: yup.string().required("Comment is required"),
});

const CommentFilde = ({ id }: any) => {
  const router = useRouter();
  const { user } = useUser();
  const Ref = useRef<HTMLTextAreaElement | null>(null);

  const { mutate } = useHandlePost<Comment>("/feature/comment/upload");

  const formik = useFormik({
    initialValues: {
      comment: "",
    },

    validationSchema: validationSchema,
    onSubmit: (values) => {
      const data = {
        user_name: user.email,
        article_id: id,
        comment: values.comment,
        image: user.photoURL || "/user.jpg",
      };

      if (values.comment && user.email) {
        mutate(data, {
          onSuccess: () => {
            router.back();
            toast.success("comment sended");
          },
          onError: () => {
            toast.error("comment not sended");
          },
        });
      }
    },
  });

  useEffect(() => {
    if (Ref.current) {
      Ref.current.style.height = "auto";
      Ref.current.style.height = `${Ref.current?.scrollHeight}px`;
    }
  }, [formik.values.comment]);

  return (
    <form
      onSubmit={() => {}}
      className="mx-auto my-4 w-full max-w-2xl space-y-1 rounded-lg p-4"
    >
      <textarea
        name="comment"
        placeholder="write your comment..."
        className="min-h-4 rounded-t-lg border-b border-slate-300 bg-white p-2 shadow-sm outline-none focus:ring-1"
        ref={Ref}
        onChange={() => {}}
      />
      <Button
        type="submit"
        variant="outline"
        className="ms-auto block hover:bg-slate-800 hover:text-white"
      >
        <SendHorizontal size={16} strokeWidth={1} />
      </Button>
    </form>
  );
};

export default CommentFilde;
