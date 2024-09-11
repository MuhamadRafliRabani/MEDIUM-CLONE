import {
  TextB,
  TextItalic,
  TextUnderline,
  TextStrikethrough,
  ListBullets,
  ListNumbers,
  PlusCircle,
  Plus,
} from "@phosphor-icons/react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import { ListOrdered, Redo, Undo } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
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
    extensions: [StarterKit, Underline, BulletList, ListItem, OrderedList],
    editorProps: {
      attributes: {
        class:
          "me:ps-4 w-full px-4 text-lg placeholder:text-icon focus:border-s focus:border-none focus:outline-none focus:ring-0 md:text-2xl",
      },
      handleKeyDown(view, event) {
        if (event.key === "Enter") {
          event.preventDefault();
          if (editor) {
            editor.commands.insertContent("<br>");
            return true;
          }
          return true;
        }
        return false;
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
      <div className="flex w-full items-center overflow-x-hidden">
        {/* Tombol Plus */}
        <PlusCircle
          size={24}
          weight="thin"
          className={`${open ? "ms-6 -translate-x-4 rotate-180" : ""} ms-3 duration-500`}
          onClick={handleOpen}
        />

        {/* Jika state open true, tampilkan tombol-tombol Tiptap */}
        <div className={`space-x-2 ${open ? "animate-open" : "animate-close"}`}>
          {/* Tombol Bold */}
          <Button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleBold().run();
            }}
            className={
              editor.isActive("bold")
                ? "bg-primary text-white"
                : "bg-transparent text-primary"
            }
            variant={"link"}
          >
            <TextB size={16} />
          </Button>

          {/* Tombol Italic */}
          <Button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleItalic().run();
            }}
            className={
              editor.isActive("italic")
                ? "bg-primary text-white"
                : "bg-transparent text-primary"
            }
          >
            <TextItalic size={16} />
          </Button>

          {/* Tombol Underline */}
          <Button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleUnderline().run();
            }}
            className={
              editor.isActive("underline")
                ? "bg-primary text-white"
                : "bg-transparent text-primary"
            }
          >
            <TextUnderline size={16} />
          </Button>

          {/* Tombol StrikeThrough */}
          <Button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleStrike().run();
            }}
            className={
              editor.isActive("strike")
                ? "bg-primary text-white"
                : "bg-transparent text-primary"
            }
          >
            <TextStrikethrough size={16} />
          </Button>

          {/* Tombol BulletList */}
          <Button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().toggleBulletList().run();
            }}
            className={
              editor.isActive("bulletList")
                ? "bg-primary text-white"
                : "bg-transparent text-primary"
            }
          >
            <ListBullets size={16} />
          </Button>

          {/* Tombol OrderedList */}
          <Button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().toggleOrderedList().run();
            }}
            className={
              editor.isActive("orderedList")
                ? "bg-primary text-white"
                : "bg-transparent text-primary"
            }
          >
            <ListOrdered size={16} />
          </Button>
        </div>

        {/* Tombol Undo dan Redo */}
        <div className="ms-auto space-x-4">
          <Button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().undo().run();
            }}
            className={
              editor.isActive("undo")
                ? "bg-primary text-white"
                : "bg-transparent text-primary"
            }
          >
            <Undo size={16} />
          </Button>

          <Button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().redo().run();
            }}
            className={
              editor.isActive("redo")
                ? "bg-primary text-white"
                : "bg-transparent text-primary"
            }
          >
            <Redo size={16} />
          </Button>
        </div>
      </div>

      {/* EditorContent */}
      <div className="mt-4 w-full">
        <EditorContent editor={editor} className="md:min-h-96" />
      </div>
    </div>
  );
};

export default ToolTipsText;
