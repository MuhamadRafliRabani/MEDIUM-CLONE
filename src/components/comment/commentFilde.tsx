import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import { useEffect, useRef } from "react";
import * as yup from "yup";
import { toast } from "sonner";
import { useUser } from "@/hooks/store/zustand";
import { SendHorizontal } from "lucide-react";
import { CommentFildeProps } from "@/lib";

export const validationSchema = yup.object({
  comment: yup.string().required("Comment is required"),
});

const CommentFilde = ({ id, mutate, isSuccess }: CommentFildeProps) => {
  const { user } = useUser();
  const Ref = useRef<HTMLTextAreaElement | null>(null);
  let isDisabled;

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (!user || !user.id || !user.email) {
        toast.error("You must be logged in to comment");
        return;
      }

      const data = {
        article_id: id,
        user_id: user.id,
        comment: values.comment,
        user_name: user.email,
        image: "https://placehold.co/600x400",
      };

      isDisabled = true;
      mutate(data, {
        onSuccess: () => {
          isDisabled = false;
          formik.resetForm();
        },
        onError: () => {
          toast.error("Failed to send comment");
        },
      });
    },
  });

  useEffect(() => {
    if (Ref.current) {
      Ref.current.style.height = "auto";
      Ref.current.style.height = `${Ref.current.scrollHeight}px`;
    }
  }, [formik.values.comment]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="my-4 w-full space-y-1 rounded-lg p-4 md:mx-auto md:max-w-[680px] md:p-0"
    >
      <textarea
        name="comment"
        placeholder="Write your comment..."
        className="max-h-28 min-h-4 w-full rounded-t-lg border-b border-slate-300 bg-white shadow-sm outline-none"
        ref={Ref}
        value={formik.values.comment}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.comment && formik.touched.comment && (
        <p className="text-sm text-red-500">{formik.errors.comment}</p>
      )}
      <Button
        type="submit"
        variant="outline"
        disabled={isDisabled}
        className="ms-auto block hover:bg-slate-800 hover:text-white"
      >
        <SendHorizontal size={16} strokeWidth={1} />
      </Button>
    </form>
  );
};

export default CommentFilde;
