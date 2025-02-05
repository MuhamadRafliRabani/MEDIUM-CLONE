import { useCallback, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/store/useUser";
import { Topic_list } from "@/data/Topic_list";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import usehandleFileChange from "@/hooks/setImage";
import { useHandlePost } from "@/lib/useHandlePost";
import { InitialValue } from "@/pages/article/new-story";
import { ChevronDown } from "lucide-react";

const FormPublish = ({ title, story }: InitialValue) => {
  const { user } = useUser();
  const router = useRouter();
  const [disable, setDisable] = useState<boolean>(true);
  const { mutate, isIdle } = useHandlePost("/feature/upload/article");
  const { file, image, handleFileChange } = usehandleFileChange();

  const formik = useFormik({
    initialValues: {
      title: title || "",
      description: "",
      category: "",
      member_only: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("category", values.category);
      formData.append("article", story || "");
      formData.append("user_name", user.email);
      formData.append(
        "user_image",
        "https://cqhlafryyzzodifbdmia.supabase.co/storage/v1/object/public/image-article-medium/public/16a532c1-9f27-4e65-9523-a2c7d7968e1cdownload.jpg",
      );
      formData.append(
        "member_only",
        values.member_only == "member only" ? "true" : "false",
      );

      if (file) {
        formData.append("image", file);
      }

      mutate(formData, {
        onSuccess: () => {
          toast.success("Story created successfully");
          router.back();
        },
        onError: () => {
          toast.error("Failed to create story");
          router.push("/article/new-story");
        },
      });
    },
  });

  // Handle disable button upload
  const handleDisable = useCallback(() => {
    const { title, description, category } = formik.values;
    setDisable(!(title && description && category && file && isIdle));
    if (!isIdle) {
      toast.loading("loading...");
    }
  }, [formik.values, file, isIdle]);

  useEffect(() => {
    handleDisable();
  }, [formik.values, file, handleDisable]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="container flex w-full flex-col items-center justify-center gap-6 px-4 text-sm text-icon md:flex-row md:gap-8 md:p-0">
        {/* Left Column: Story Preview and Inputs */}
        <div className="flex h-fit w-full flex-col justify-center gap-2 md:w-[500px]">
          <label htmlFor="file" className="text-xl font-bold text-black">
            Story Preview
          </label>
          <div className="flex flex-col items-center">
            <input
              type="file"
              name="file"
              id="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => handleFileChange(e)}
            />
            <label
              htmlFor="file"
              className={`flex h-[200px] w-full cursor-pointer items-center justify-center bg-[#FAFAFA] text-gray-600 ${
                !image && "border border-dashed"
              }`}
            >
              {image ? (
                <img
                  src={image}
                  alt="Selected"
                  className="h-[200px] w-full border border-gray-300 object-cover"
                />
              ) : (
                <span>Choose file</span>
              )}
            </label>
          </div>

          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Write a title"
            className="border-b border-icon border-opacity-50 text-lg font-extrabold text-icon text-opacity-50 placeholder:text-icon placeholder:text-opacity-50 focus:outline-none"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title && (
            <div className="text-red-500">{formik.errors.title}</div>
          )}

          <Input
            type="text"
            name="description"
            placeholder="Write a description..."
            id="description"
            className="border-b border-[#8f8f8f] text-[#8f8f8f] placeholder:text-[#8f8f8f] focus:outline-none"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description && (
            <div className="text-red-500">{formik.errors.description}</div>
          )}

          <p className="text-sm">
            <span className="font-bold">Note:</span> Changes here will affect
            how your story appears in public places like Medium’s homepage and
            in subscribers’ inboxes — not the contents of the story itself.
          </p>
        </div>

        {/* Right Column: Publishing Options */}
        <div className="flex h-fit w-full flex-col justify-center gap-2 md:w-[500px]">
          <div className="flex items-center">
            <Select
              name="Publishing to"
              value={formik.values.member_only}
              onValueChange={(value) =>
                formik.setFieldValue("member_only", value)
              }
            >
              <SelectTrigger className="-ms-2 flex w-fit items-center gap-2 border-none focus:ring-0">
                <h1>Publishing to : </h1>
                {"  "}
                <SelectValue placeholder={formik.values.member_only} />
              </SelectTrigger>
              <SelectContent align="center" side="bottom">
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="member_only">Member only</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <p>
            Add or change topics (up to 5) so readers know what your story is
            about
          </p>

          <Select
            name="category"
            value={formik.values.category}
            onValueChange={(value) => formik.setFieldValue("category", value)}
          >
            <SelectTrigger className="w-full focus:border-green-400 focus:ring-0">
              <SelectValue placeholder="Topic" />
            </SelectTrigger>
            <SelectContent
              className="max-h-48 overflow-y-auto"
              align="center"
              side="bottom"
            >
              {Topic_list.map((article, i) => (
                <SelectItem key={i} value={article}>
                  {article}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <p>
            <span className="underline">Learn more</span> about what happens to
            your post when you publish.
          </p>

          <div className="flex items-center gap-4">
            <Button
              type="submit"
              className="rounded-md bg-green-400 text-sm text-white hover:bg-none"
              disabled={disable}
            >
              Publish
            </Button>
            <p>Schedule for later</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormPublish;
