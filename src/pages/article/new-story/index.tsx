"use client";
import Hoc from "@/hoc/Hoc";
import { useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import HeaderStory from "@/features/story/header";
import { useLocalStorage } from "@/hooks/useLocalstorage";
import { InitialValue } from "@/lib";
import ToolTipEditor from "@/components/richTextEditor/toolTipsTeks";

const MakeArticle = () => {
  const titleRef = useRef<HTMLTextAreaElement | null>(null);
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
    onSubmit: () => {},
  });

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.height = "auto";
      titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
    }
  }, [formik.values.title, formik.initialValues.title]);

  useEffect(() => {
    setHistoryArticle(formik.values.story);
  }, [formik.values.story, setHistoryArticle]);

  return (
    <div className="mt-10">
      <HeaderStory title={formik.values.title} story={formik.values.story} />
      <div className="focus mt-6 flex flex-col items-start gap-2 sm:max-w-screen-sm md:mx-auto md:max-w-screen-sm">
        <div className="relative h-full w-full">
          <textarea
            name="title"
            rows={1}
            placeholder="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            ref={titleRef}
            className="textarea peer max-h-48 w-full text-pretty border-black/30 px-4 pt-3 text-[36px]/[42px] font-bold caret-black/30 placeholder:text-[36px]/[42px] placeholder:font-medium placeholder:text-black/35 focus:outline-none focus:ring-0 md:px-3 md:text-[48px]/[50px] md:font-bold placeholder:md:text-[48px]/[49px]"
          ></textarea>
          <div className="animate absolute inset-x-0 bottom-0 h-full w-[1px] scale-y-0 transform bg-black transition-transform duration-300 peer-focus-within:scale-y-100"></div>
        </div>
        <ToolTipEditor formik={formik} historyArticle={historyArticle} />
      </div>
    </div>
  );
};

export default Hoc(MakeArticle);
