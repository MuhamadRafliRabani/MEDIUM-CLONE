"use client";
import Hoc from "@/hoc/Hoc";
import ToolTipsText from "@/MYCOMPONENT/RichTextEditor/toolTipsTeks";
import { useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import HeaderStory from "@/features/story/header";
import { useLocalStorage } from "@/hooks/useLocalstorage";

export type InitialValue = {
  title: string;
  story: string;
};

const MakeArticle = () => {
  const titleRef = useRef<HTMLTextAreaElement | null>(null);
  const storyRef = useRef<HTMLTextAreaElement | null>(null);
  const [historyArticle, setHistoryArticle] = useLocalStorage("article", null);

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
    setHistoryArticle(formik.values.story);
    console.log("🚀 ~ useEffect ~ :", formik.values.story);
  }, [formik.values.story, setHistoryArticle]);

  return (
    <div className="mt-10">
      <HeaderStory title={formik.values.title} story={formik.values.story} />
      <div className="focus mx-auto mt-6 flex w-article flex-col items-start justify-center gap-2 md:w-1/2">
        <div className="relative h-full w-full">
          <textarea
            name="title"
            rows={1}
            placeholder="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            ref={titleRef}
            className="noto-font textarea peer w-full text-pretty border-black/30 px-4 text-xl font-medium caret-black/30 placeholder:pt-2 placeholder:text-[48px]/[49px] placeholder:font-medium placeholder:text-black/35 focus:outline-none focus:ring-0 md:px-3 md:text-[48px]/[54px] md:font-bold"
          ></textarea>
          <div className="absolute inset-x-0 bottom-0 h-full w-[1px] scale-y-0 transform bg-black transition-transform duration-300 peer-focus-within:scale-y-100"></div>
        </div>
        <ToolTipsText formik={formik} historyArticle={historyArticle} />
      </div>
    </div>
  );
};

export default Hoc(MakeArticle);
