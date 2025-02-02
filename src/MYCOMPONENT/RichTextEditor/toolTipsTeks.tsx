import {
  TextB,
  TextItalic,
  TextUnderline,
  TextStrikethrough,
  ListBullets,
  ListNumbers,
} from "@phosphor-icons/react";
import { EditorContent } from "@tiptap/react";
import { Heading1, Heading2, Pilcrow, Plus, Redo, Undo } from "lucide-react";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { FormikProps } from "formik";
import { useTiptapConfigure } from "@/lib/tiptap";

export interface TiptapConfigureProps {
  formik: FormikProps<any>;
  historyArticle: string | null;
}

const EditorToolbar = ({ formik, historyArticle }: TiptapConfigureProps) => {
  const [open, setIsOpen] = useState(false);

  // configure tiptap
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

  const toolTipsExtenxion = [
    {
      command: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      icon: <Heading1 size={16} />,
      active: editor.isActive("heading", { level: 1 }),
      name: "heading1",
    },
    {
      command: () => editor.chain().focus().toggleBold().run(),
      icon: <TextB size={16} />,
      active: editor.isActive("bold"),
      name: "bold",
    },
    {
      command: () => editor.chain().focus().toggleItalic().run(),
      icon: <TextItalic size={16} />,
      active: editor.isActive("italic"),
      name: "italic",
    },
    {
      command: () => editor.chain().focus().toggleUnderline().run(),
      icon: <TextUnderline size={16} />,
      active: editor.isActive("underline"),
      name: "underline",
    },
    {
      command: () => editor.chain().focus().toggleStrike().run(),
      icon: <TextStrikethrough size={16} />,
      active: editor.isActive("strike"),
      name: "strike",
    },
    {
      command: () => editor.chain().focus().toggleBulletList().run(),
      icon: <ListBullets size={16} />,
      active: editor.isActive("bulletList"),
      name: "bulletList",
    },
    {
      command: () => editor.chain().focus().toggleOrderedList().run(),
      icon: <ListNumbers size={16} />,
      active: editor.isActive("orderedList"),
      name: "orderedList",
    },
    {
      command: () => editor.commands.setParagraph(),
      icon: <Pilcrow size={16} />,
      active: editor.isActive("paragraph"),
      name: "paragraph",
    },
  ];

  const renderButtonExtn = () => (
    <div
      className={`ms-3 flex w-full items-center space-x-6 ${
        open ? "animate-open" : "animate-close"
      }`}
    >
      {toolTipsExtenxion.map((btn, index) => {
        const active = editor.isActive(btn.name);
        return (
          <label
            key={index}
            htmlFor={`editor-option-${btn.name}`}
            className="relative cursor-pointer"
          >
            <input
              type="checkbox"
              name="editor-options"
              id={`editor-option-${btn.name}`}
              className="peer hidden"
              onClick={btn.command}
              checked={active}
              readOnly
            />
            <span
              className={
                active
                  ? "relative grid size-8 place-items-center rounded-md text-black transition-all duration-100 peer-checked:before:absolute peer-checked:before:-bottom-[0.8px] peer-checked:before:left-0 peer-checked:before:h-0.5 peer-checked:before:w-full peer-checked:before:bg-black peer-checked:before:opacity-100 peer-checked:before:transition-all peer-checked:before:duration-300"
                  : "grid place-items-center bg-transparent text-primary"
              }
            >
              {btn.icon}
            </span>
          </label>
        );
      })}
    </div>
  );

  return (
    <div className="sohne relative flex w-full flex-col items-start text-primary">
      <div className="sticky-animate flex w-full items-center">
        <Plus
          size={28}
          strokeWidth={1}
          className={`ms-4 w-fit ${open ? "rotate-180" : ""} text-black duration-500`}
          onClick={handleOpen}
        />
        {renderButtonExtn()}
        <div className="ms-auto space-x-4">
          <button
            onClick={() => editor.chain().undo().run()}
            className="btn-rich bg-transparent text-primary duration-500"
          >
            <Undo size={16} />
          </button>
          <button
            onClick={() => editor.chain().redo().run()}
            className="btn-rich bg-transparent text-primary duration-500"
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

export default EditorToolbar;
