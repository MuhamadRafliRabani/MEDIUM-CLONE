import { Button } from "@/components/ui/button";
import { PaperPlaneRight } from "@phosphor-icons/react";
import { useFormik } from "formik";
import { useEffect, useRef } from "react";
import * as yup from "yup";
import { useComment } from "./useComment";
import { toast } from "sonner";
import { useUserCustom } from "@/hooks/store/useUser";
import { useRouter } from "next/navigation";

const validationSchema = yup.object({
  comment: yup.string().required("Comment is required"),
});

const Comment = ({ id }: number | undefined) => {
  const Ref = useRef<HTMLTextAreaElement | null>(null);
  const { user } = useUserCustom();
  const { mutate } = useComment();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const data = {
        user: user.name,
        idArticle: id,
        comment: values.comment,
      };
      mutate(data, {
        onSuccess: () => {
          router.push("/");
          toast.success("comment sended");
        },
        onError: () => {
          toast.error("comment not sended");
        },
      });
    },
  });

  useEffect(() => {
    if (Ref.current) {
      Ref.current.style.height = "auto";
      Ref.current.style.height = `${Ref.current?.scrollHeight}px`;
    }
  }, [formik.values.comment]);

  return (
    <section className="flex w-svw items-center justify-center">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full space-y-4 md:w-[500px]"
      >
        <div className="space-y-2">
          <label htmlFor="comment" className="font-semibold">
            Comment
          </label>
          <textarea
            name="comment"
            type="text"
            placeholder="your comment"
            value={formik.values.comment}
            onChange={formik.handleChange}
            ref={Ref}
            className="max-h-80 w-full rounded-md p-2 font-sans ring-1 ring-slate-200 placeholder:text-sm focus:outline-none focus:ring-primary"
          ></textarea>
        </div>
        <Button type="submit" variant="default" className="ms-auto block">
          <PaperPlaneRight size={20} weight="light" />
        </Button>
      </form>
    </section>
  );
};

export default Comment;
