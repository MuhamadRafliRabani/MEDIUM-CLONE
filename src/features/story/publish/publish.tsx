"use client";

import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { X } from "@phosphor-icons/react";
import { usePublishStory } from "./usePublishStory";

const Publish = ({ title, story }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { mutate, data } = usePublishStory();

  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Bulan dimulai dari 0 di JavaScript
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const currentDate = getCurrentDate();

  const handleFileChange = (event) => {
    const file = event?.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  useEffect(() => {
    handleFileChange();
  }, [selectedImage]);

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
    onSubmit: (values) => {
      const data = {
        article: story || "",
        author_name: "miyamura",
        img_user: "https://placehold.co/400x400",
        likes: 0,
        comment: "",
        date: currentDate,
        img_content:
          "https://images.unsplash.com/photo-1638997611276-b842eb529b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3RyfGVufDB8fDB8fHww",
      };
      try {
        const story = { ...values, ...data };
        console.log(story);
      } catch (error) {
        console.log(error);
      }

      // mutate(values);
    },
  });

  return (
    <Drawer>
      <DrawerTrigger>
        <Button className="bg-green-400 text-sm text-white">Publish</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex items-center justify-between">
          <div>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </div>
          <DrawerClose>
            <Button variant="outline">
              <X size={16} />
            </Button>
          </DrawerClose>
        </DrawerHeader>

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
                  className={`flex h-[200px] w-full cursor-pointer items-center justify-center bg-[#FAFAFA] text-gray-600 ${!selectedImage && "- dashed border"}`}
                >
                  {selectedImage ? (
                    <img
                      src={selectedImage}
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
                value={title}
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
                <span className="font-bold">Note:</span> Changes here will
                affect how your story appears in public places like Medium’s
                homepage and in subscribers’ inboxes — not the contents of the
                story itself.
              </p>
            </div>

            <div className="flex h-fit w-[500px] flex-col justify-center gap-2">
              <h1>Publishing to: Noirrr</h1>
              <p>
                Add or change topics (up to 5) so readers know what your story
                is about
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
                <span className="underline">Learn more </span> about what
                happens to your post when you publish.
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

        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Publish;
