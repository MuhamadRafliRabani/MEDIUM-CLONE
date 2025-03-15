import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import { useUser } from "@/hooks/store/zustand";
import { useHandlePost } from "@/lib/useHandlePost";
import { useRouter } from "next/navigation";

export const PublishConfiguration = (title: string, story: string) => {
  const { mutate, isPending, isIdle } = useHandlePost(
    "/feature/upload/article",
  );
  console.log("🚀 ~ PublishConfiguration ~ isIdle:", isIdle);
  console.log("🚀 ~ PublishConfiguration ~ isPending:", isPending);
  const router = useRouter();
  const { user } = useUser();

  return {
    isPending,

    useFormik: useFormik({
      initialValues: {
        title: title || "",
        description: "",
        category: "",
        member_only: false,
        image: null,
        story: story || "",
      },

      validationSchema: Yup.object({
        title: Yup.string().required("Title is required"),
        description: Yup.string().required("Description is required"),
        category: Yup.string().required("Category is required"),
      }),

      onSubmit: async (values) => {
        if (!user?.email) return;

        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("description", values.description);
        formData.append("category", values.category);
        formData.append("article", values.story);
        formData.append("user_name", user.email);
        formData.append("user_image", "https://example.com/default-image.jpg");
        formData.append("member_only", values.member_only.toString());

        if (values.image) {
          formData.append("image", values.image);
        }

        mutate(formData, {
          onSuccess: () => {
            toast.success("Story published successfully!");
            router.back();
          },
          onError: () => {
            toast.error("Failed to publish story.");
            router.push("/article/new-story");
          },
        });
      },
    }),
  };
};
