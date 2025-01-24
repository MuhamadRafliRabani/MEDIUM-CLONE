import Hoc from "@/hoc/Hoc";
import ToolTipsText from "@/MYCOMPONENT/RichTextEditor/toolTipsTeks";
import { useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import HeaderStory from "@/features/story/header";

export type InitialValue = {
  title: string;
  story: string;
};

const MakeArticle = () => {
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

  console.log(formik.values.title);
  console.log(formik.values.story);

  return (
    <div>
      <HeaderStory title={formik.values.title} story={formik.values.story} />
      <div className="focus mx-auto mt-6 flex w-full flex-col items-start justify-center gap-2 md:container md:mt-20 md:w-1/2">
        <textarea
          name="title"
          rows={1}
          placeholder="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          ref={titleRef}
          className="noto-font w-full border-s border-icon px-4 text-xl font-medium placeholder:text-[52px]/[53px] placeholder:text-black/35 focus:border-s focus:outline-none focus:ring-0 md:ps-4 md:text-[52px]/[53px] md:font-semibold"
        ></textarea>

        <ToolTipsText formik={formik} />
      </div>
    </div>
  );
};

export default Hoc(MakeArticle);
