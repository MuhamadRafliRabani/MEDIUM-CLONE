import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import HeaderStory from "./header";

export type InitialValue = {
  title: string;
  story: string;
};

const NewStory = () => {
  const titleRef = useRef<HTMLTextAreaElement | null>(null);
  const storyRef = useRef<HTMLTextAreaElement | null>(null);

  const validationSchema = yup.object({
    title: yup.string().required("Title is required"),
    story: yup.string().required("Story is required"),
  });

  const formik = useFormik<InitialValue>({
    initialValues: {
      title: "",
      story: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.height = "auto";
      titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
    }
  }, [formik.values.title, formik.initialValues.title]);

  useEffect(() => {
    if (storyRef.current) {
      storyRef.current.style.height = "auto";
      storyRef.current.style.height = `${storyRef.current.scrollHeight}px`;
    }
  }, [formik.values.story]);

  return (
    <div>
      <HeaderStory title={formik.values.title} story={formik.values.story} />
      <div className="focus container mx-auto mt-20 flex w-1/2 flex-col items-start justify-center gap-2">
        <textarea
          name="title"
          rows={1}
          placeholder="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          ref={titleRef}
          className="w-full border-icon ps-4 text-4xl placeholder:text-icon focus:border-s focus:outline-none focus:ring-0"
        ></textarea>
        <textarea
          name="story"
          rows={1}
          placeholder="New story"
          value={formik.values.story}
          ref={storyRef}
          onChange={formik.handleChange}
          className="w-full ps-4 text-2xl placeholder:text-icon focus:border-s focus:border-none focus:outline-none focus:ring-0"
        ></textarea>
      </div>
    </div>
  );
};

export default NewStory;
