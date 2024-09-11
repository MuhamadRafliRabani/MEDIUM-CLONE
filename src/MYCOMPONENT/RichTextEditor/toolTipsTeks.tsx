import { Button } from "@/components/ui/button";
import {
  TextB,
  TextItalic,
  TextUnderline,
  TextStrikethrough,
  ListBullets,
  ListNumbers,
} from "@phosphor-icons/react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import { List, Redo, Undo } from "lucide-react";

const ToolTipsText = ({ formik }: any) => {
  const editor = useEditor({
    content: "<p>Write your story 😉</p>",
    extensions: [
      StarterKit.configure({
        bulletList: false,
      }),
      StarterKit,
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

  if (!editor) return null;

  return (
    <div className="flex w-full flex-col items-start text-primary">
      <div className="flex space-x-2">
        {/* Tombol Bold */}
        <Button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={
            editor.isActive("bold")
              ? "bg-primary text-white"
              : "bg-white text-primary"
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
              : "bg-white text-primary"
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
              : "bg-white text-primary"
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
              : "bg-white text-primary"
          }
        >
          <TextStrikethrough size={16} />
        </Button>

        {/* Tombol Undo List */}
        <Button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().toggleBulletList().run();
          }}
          className={
            editor.isActive("bulletList")
              ? "bg-primary text-white"
              : "bg-white text-primary"
          }
        >
          <ListBullets size={16} />
        </Button>

        {/* Tombol Undo List */}
        <Button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().undo().run();
          }}
          className={
            editor.isActive("undo")
              ? "bg-primary text-white"
              : "bg-white text-primary"
          }
        >
          <Undo size={16} />
        </Button>

        {/* Tombol Redo List */}
        <Button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().redo().run();
          }}
          className={
            editor.isActive("redo")
              ? "bg-primary text-white"
              : "bg-white text-primary"
          }
        >
          <Redo size={16} />
        </Button>
      </div>
      <div className="input mt-4 w-full">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default ToolTipsText;
