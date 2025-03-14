import { EditorContent } from "@tiptap/react";
import { Plus, Redo, Undo } from "lucide-react";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { FormikProps } from "formik";
import { useTiptapConfigure } from "@/lib/tiptap";
import BtnExtention from "./btn-extention";
import { TiptapConfigureProps } from "@/lib";

const ToolTipEditor = <T,>({
  formik,
  historyArticle,
}: TiptapConfigureProps<T>) => {
  const [open, setIsOpen] = useState(false);

  const editor = useTiptapConfigure({ formik, historyArticle });

  useEffect(() => {
    const articleUser = debounce(() => {
      if (editor) {
        localStorage.setItem("article", editor.getHTML());
      }
    }, 3000);

    editor?.on("update", articleUser);

    return () => {
      articleUser.cancel();
    };
  }, [editor]);

  const handleOpen = () => setIsOpen((prev) => !prev);

  if (!editor) return null;

  return (
    <div className="sohne relative flex w-full flex-col text-primary">
      <div className="sticky-animate top-4 z-20 -ms-2 flex w-full items-center sm:ms-0 md:ms-0">
        <Plus
          size={28}
          strokeWidth={1}
          className={`ms-4 w-fit ${open ? "rotate-180" : ""} text-black duration-500`}
          onClick={handleOpen}
        />
        <BtnExtention editor={editor} open={open} />
        <div className="ms-auto space-x-4 overflow-auto whitespace-nowrap">
          <button
            onClick={() => editor.chain().undo().run()}
            className="border-black hover:border-b"
          >
            <Undo size={16} />
          </button>
          <button
            onClick={() => editor.chain().redo().run()}
            className="border-black hover:border-b"
          >
            <Redo size={16} />
          </button>
        </div>
      </div>
      <div className="mt-4 w-full">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default ToolTipEditor;
