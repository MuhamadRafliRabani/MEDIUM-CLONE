import { useCallback, useEffect, useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/store/zustand";
import { Topic_list } from "@/data/Topic_list";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useHandleFileChange from "@/hooks/setImage";
import { useHandlePost } from "@/lib/useHandlePost";
import { InitialValue } from "@/pages/article/new-story";

const FormPublish = ({ title, story }: InitialValue) => {
  const { user } = useUser();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const { mutate, isPending } = useHandlePost("/feature/upload/article");
  const { file, image, handleFileChange } = useHandleFileChange();

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      title: title || "",
      description: "",
      category: "",
      member_only: "public",
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
      formData.append("article", story || "");
      formData.append("user_name", user.email);
      formData.append("user_image", "https://example.com/default-image.jpg");
      formData.append(
        "member_only",
        values.member_only === "member_only" ? "true" : "false",
      );

      if (file) {
        formData.append("image", file);
      }

      toast.promise(
        new Promise(() => {
          mutate(formData, {
            onSuccess: () => {
              router.back();
            },
            onError: () => {
              router.push("/article/new-story");
            },
          });
        }),
        {
          loading: "Publishing...",
          success: "Story published successfully!",
          error: "Failed to publish story.",
        },
      );
    },
  });

  // Handle button disable state
  const handleDisable = useCallback(() => {
    const { title, description, category } = formik.values;
    setIsDisabled(!(title && description && category && file));
  }, [formik.values, file]);

  useEffect(() => {
    handleDisable();
  }, [formik.values, file, handleDisable]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="container-2xl mx-auto flex flex-col justify-center gap-6 px-4 md:flex-row md:gap-8"
    >
      {/* Left Column */}
      <div className="flex w-full flex-col gap-4 md:w-[500px]">
        <label className="text-xl font-bold text-black">Story Preview</label>
        <div className="flex flex-col items-center">
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
          <label
            onClick={() => fileInputRef.current?.click()}
            className={`flex h-[200px] w-full cursor-pointer items-center justify-center bg-gray-100 ${
              !image && "border border-dashed"
            }`}
          >
            {image ? (
              <img
                src={image}
                alt="Preview"
                className="h-[200px] w-full border border-gray-300 object-cover"
              />
            ) : (
              <span>Choose file</span>
            )}
          </label>
        </div>

        <Input
          name="title"
          placeholder="Write a title"
          className="border-b border-gray-400 text-lg font-extrabold"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.title && formik.errors.title && (
          <div className="text-red-500">{formik.errors.title}</div>
        )}

        <Input
          name="description"
          placeholder="Write a description..."
          className="border-b border-gray-400 text-gray-600"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.description && formik.errors.description && (
          <div className="text-red-500">{formik.errors.description}</div>
        )}

        <p className="text-sm">
          <span className="font-bold">Note:</span> Changes here will affect how
          your story appears in public places.
        </p>
      </div>

      {/* Right Column */}
      <div className="flex w-full flex-col gap-4 md:w-[500px]">
        <div className="flex items-center">
          <Select
            value={formik.values.member_only}
            onValueChange={(value) =>
              formik.setFieldValue("member_only", value)
            }
          >
            <SelectTrigger className="max-w-fit space-x-2 border-none focus:ring-0">
              <span>Publishing to: </span>
              <SelectValue placeholder={formik.values.member_only} />
            </SelectTrigger>
            <SelectContent>
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
          value={formik.values.category}
          onValueChange={(value) => formik.setFieldValue("category", value)}
        >
          <SelectTrigger className="w-full focus:ring-0">
            <SelectValue placeholder="Topic" />
          </SelectTrigger>
          <SelectContent className="max-h-48 overflow-y-auto">
            {Topic_list.map((article, i) => (
              <SelectItem key={i} value={article}>
                {article}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <p>
          <span className="cursor-pointer underline">Learn more</span> about
          what happens to your post when you publish.
        </p>

        <div className="flex items-center gap-4">
          <Button
            type="submit"
            className="rounded-md bg-green-400 text-white hover:bg-green-500"
            disabled={isDisabled || isPending}
          >
            {isPending ? "Publishing..." : "Publish"}
          </Button>
          <p>Schedule for later</p>
        </div>
      </div>
    </form>
  );
};

export default FormPublish;
