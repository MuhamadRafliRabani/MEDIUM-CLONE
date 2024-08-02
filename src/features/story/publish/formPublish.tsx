import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { InitialValue } from "..";
import { usePublishStory } from "./usePublishStory";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const FormPublish = ({ title, story }: InitialValue) => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const { mutate, data } = usePublishStory();
  const Route = useRouter();
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setImage(URL.createObjectURL(selectedFile));
  };

  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return ` ${year}-${month}-${day}`;
  };

  const currentDate = getCurrentDate();

  const formik = useFormik({
    initialValues: {
      title: title || "",
      description: "",
      topic: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      topic: Yup.string().required("Topic is required"),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("topic", values.topic);
      formData.append("article", story || "");
      formData.append("author_name", "miyamura");
      formData.append("img_user", "https://placehold.co/400x400");
      formData.append("likes", 0);
      formData.append("comment", "");
      formData.append("date", currentDate);
      formData.append("img_content", file);
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

      console.log(formData);

      mutate(formData);
    },
  });
  if (data?.status === 200) {
    toast("story is created");
    Route.push("/");
  }
  console.log(data);
  console.log(data?.status);

  console.log(file);

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
              onChange={handleFileChange}
            />
            <label
              htmlFor="file"
              className={`flex h-[200px] w-full cursor-pointer items-center justify-center bg-[#FAFAFA] text-gray-600 ${!image && "-dashed border"}`}
            >
              {image ? (
                <img
                  src={image}
                  alt="Selected"
                  className="h-full w-full border border-gray-300 bg-cover"
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
          {formik.touched.title && formik.errors.title ? (
            <div className="text-red-500">{formik.errors.title}</div>
          ) : null}

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
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-500">{formik.errors.description}</div>
          ) : null}

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
          <Input
            type="text"
            name="topic"
            placeholder="Add a topic..."
            className="bg-[#FAFAFA] focus:outline-none focus:ring-0"
            value={formik.values.topic}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.topic && formik.errors.topic ? (
            <div className="text-red-500">{formik.errors.topic}</div>
          ) : null}

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
