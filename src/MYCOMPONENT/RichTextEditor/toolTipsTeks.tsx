import {
  TextB,
  TextItalic,
  TextUnderline,
  TextStrikethrough,
  ListBullets,
  ListNumbers,
  PlusCircle,
} from "@phosphor-icons/react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { Pilcrow, Redo, Undo } from "lucide-react";
import { useEffect, useState } from "react";
import { debounce } from "lodash";

const ToolTipsText = ({ formik }: any) => {
  const [open, setIsOpen] = useState(false);
  const HistoryArticleUser = localStorage.getItem("article");

  // configure tiptap
  const editor = useEditor({
    content:
      HistoryArticleUser === null
        ? "<p>Write your story here 😉</p>"
        : HistoryArticleUser,
    extensions: [
      Document,
      StarterKit,
      Paragraph,
      Text,
      Underline,
      BulletList,
      ListItem,
      OrderedList,
    ],
    editorProps: {
      attributes: {
        class:
          "me:ps-4 w-full px-4 text-lg placeholder:text-icon focus:border-s focus:border-none focus:outline-none focus:ring-0 md:text-2xl",
      },
    },

    onUpdate: ({ editor }) => formik.setFieldValue("story", editor.getHTML()),
  });

  // handle save article user
  useEffect(() => {
    const articleUser = debounce(() => {
      if (editor) {
        localStorage.setItem("article", editor?.getHTML() as string);
      }
    }, 3000);

    editor?.on("update", articleUser);

    return () => {
      articleUser.cancel();
    };
  }, [editor]);

  // handle animate rich text editor
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  if (!editor) return null;

  return (
    <div className="tl flex w-full flex-col items-start text-primary">
      <div className="flex w-full items-center justify-start">
        {/* Tombol Plus */}
        <PlusCircle
          size={24}
          weight="thin"
          className={`ms-4 ${open ? "rotate-180" : ""} duration-500`}
          onClick={handleOpen}
        />

        {/* Jika state open true, tampilkan tombol-tombol Tiptap */}
        <div
          className={`ms-3 flex items-center justify-start space-x-2 ${open ? "animate-open" : "animate-close"}`}
        >
          {/* Tombol Bold */}
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleBold().run();
            }}
            className={
              editor.isActive("bold")
                ? "btn-rich bg-primary text-white duration-500"
                : "btn-rich bg-transparent text-primary duration-500"
            }
          >
            <TextB size={16} />
          </button>

          {/* Tombol Italic */}
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleItalic().run();
            }}
            className={
              editor.isActive("italic")
                ? "btn-rich bg-primary text-white duration-500"
                : "btn-rich bg-transparent text-primary duration-500"
            }
          >
            <TextItalic size={16} />
          </button>

          {/* Tombol Underline */}
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleUnderline().run();
            }}
            className={
              editor.isActive("underline")
                ? "btn-rich bg-primary text-white duration-500"
                : "btn-rich bg-transparent text-primary duration-500"
            }
          >
            <TextUnderline size={16} />
          </button>

          {/* Tombol StrikeThrough */}
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleStrike().run();
            }}
            className={
              editor.isActive("strike")
                ? "btn-rich bg-primary text-white duration-500"
                : "btn-rich bg-transparent text-primary duration-500"
            }
          >
            <TextStrikethrough size={16} />
          </button>

          {/* Tombol BulletList */}
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().toggleBulletList().run();
            }}
            className={
              editor.isActive("bulletList")
                ? "btn-rich bg-primary text-white duration-500"
                : "btn-rich bg-transparent text-primary duration-500"
            }
          >
            <ListBullets size={16} />
          </button>

          {/* Tombol OrderedList */}
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().toggleOrderedList().run();
            }}
            className={
              editor.isActive("orderedList")
                ? "btn-rich bg-primary text-white duration-500"
                : "btn-rich bg-transparent text-primary duration-500"
            }
          >
            <ListNumbers size={16} />
          </button>

          {/* Tombol Paragraft */}
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.commands.setParagraph();
            }}
            className={
              editor.isActive("paragraft")
                ? "btn-rich bg-primary text-white duration-500"
                : "btn-rich bg-transparent text-primary duration-500"
            }
          >
            <Pilcrow strokeWidth={1.3} size={16} />
          </button>
        </div>

        {/* Tombol Undo dan Redo */}
        <div className="ms-auto space-x-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().undo().run();
            }}
            className={
              editor.isActive("undo")
                ? "btn-rich bg-primary text-white duration-500"
                : "btn-rich bg-transparent text-primary duration-500"
            }
          >
            <Undo size={16} />
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().redo().run();
            }}
            className={
              editor.isActive("redo")
                ? "btn-rich bg-primary text-white duration-500"
                : "btn-rich bg-transparent text-primary duration-500"
            }
          >
            <Redo size={16} />
          </button>
        </div>
      </div>

      {/* EditorContent */}
      <div className="mt-4 w-full">
        <EditorContent editor={editor} className="editor-props" />
      </div>
    </div>
  );
};

export default ToolTipsText;
