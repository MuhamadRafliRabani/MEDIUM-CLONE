import {
  Bold,
  Dot,
  Heading1,
  Italic,
  List,
  ListOrdered,
  Pilcrow,
  Strikethrough,
  Underline,
} from "lucide-react";
import ToolTips from "../toolTip/MyToolTip";
import { Input } from "../ui/input";

const BtnExtention = ({ editor, open }: { editor: any; open: boolean }) => {
  const toolTipsExtenxion = [
    {
      command: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      icon: Heading1,
      active: editor.isActive("heading", { level: 1 }),
      name: "heading1",
    },
    {
      command: () => editor.chain().focus().toggleBold().run(),
      icon: Bold,
      active: editor.isActive("bold"),
      name: "bold",
    },
    {
      command: () => editor.chain().focus().toggleItalic().run(),
      icon: Italic,
      active: editor.isActive("italic"),
      name: "italic",
    },
    {
      command: () => editor.chain().focus().toggleUnderline().run(),
      icon: Underline,
      active: editor.isActive("underline"),
      name: "underline",
    },
    {
      command: () => editor.chain().focus().toggleStrike().run(),
      icon: Strikethrough,
      active: editor.isActive("strike"),
      name: "strike",
    },
    {
      command: () => editor.chain().focus().toggleBulletList().run(),
      icon: List,
      active: editor.isActive("bulletList"),
      name: "bulletList",
    },
    {
      command: () => editor.chain().focus().toggleOrderedList().run(),
      icon: ListOrdered,
      active: editor.isActive("orderedList"),
      name: "orderedList",
    },
    {
      command: () => editor.commands.setParagraph(),
      icon: Pilcrow,
      active: editor.isActive("paragraph"),
      name: "paragraph",
    },
  ];

  return (
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
            <Input
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
                  ? "checked-effect relative grid size-8 place-items-center rounded-md peer-checked:before:-bottom-[0.8px]"
                  : "grid place-items-center bg-transparent text-primary"
              }
            >
              <ToolTips
                Content={btn.name}
                Trigger={<btn.icon className="size-4" />}
              />
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default BtnExtention;
