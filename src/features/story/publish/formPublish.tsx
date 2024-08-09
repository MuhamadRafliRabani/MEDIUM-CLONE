import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { InitialValue } from "..";
import { usePublishStory } from "./usePublishStory";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/store/useUser";
import { getCurrentDate } from "@/lib/date";
import { toastPromise } from "@/lib/toast";
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
import { useGetUser } from "@/hooks/article/useGetUser";

const FormPublish = ({ title, story }: InitialValue) => {
  const { user } = useUser();
  const { mutate, data } = usePublishStory();
  const { data: data_user } = useGetUser(user.email);
  const router = useRouter();
  console.log(user.email);

  console.log(data_user);

  const currentDate = getCurrentDate();
  const { file, image, handleFileChange } = usehandleFileChange();

  const formik = useFormik({
    initialValues: {
      title: title || "",
      description: "",
      type: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      type: Yup.string().required("Topic is required"),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("type", values.type);
      formData.append("article", story || "");
      formData.append("author_name", data_user?.user.name);
      formData.append("img_user", data_user?.user.profil_img);
      formData.append("likes", "0");
      formData.append("comment", "");
      formData.append("date", currentDate);
      formData.append("image", file ? file : "");

      mutate(formData, {
        onSuccess: () => {
          toast.success("story created");
          router.back();
        },
        onError: () => {
          toast.error("story uncreated");
          router.push("/article/new-story");
        },
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="container flex w-full items-center justify-center gap-8 text-sm text-icon">
        <div className="flex h-fit w-[500px] flex-col justify-center gap-2">
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

        <div className="flex h-fit w-[500px] flex-col justify-center gap-2">
          <h1>Publishing to: Noirrr</h1>
          <p>
            Add or change topics (up to 5) so readers know what your story is
            about
          </p>
          <Select
            name="type"
            value={formik.values.type}
            onValueChange={(value) => formik.setFieldValue("type", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Topic" />
            </SelectTrigger>
            <SelectContent>
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
              className="rounded-lg bg-green-400 text-sm text-white hover:bg-none"
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
