import BulletList from "@tiptap/extension-bullet-list";
import Document from "@tiptap/extension-document";
import HardBreak from "@tiptap/extension-hard-break";
import Heading from "@tiptap/extension-heading";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Underline from "@tiptap/extension-underline";
import { useEditor, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TiptapConfigureProps } from ".";

export const useTiptapConfigure = <T>({
  formik,
  historyArticle,
}: TiptapConfigureProps<T>): Editor | null => {
  const editor = useEditor({
    content:
      historyArticle === null ? "Write your story here 😉" : historyArticle,
    extensions: [
      Document,
      StarterKit,
      Paragraph,
      Text,
      Underline,
      BulletList,
      ListItem,
      OrderedList,

      HardBreak.extend({
        addKeyboardShortcuts() {
          return {
            Enter: () => {
              this.editor.commands.splitBlock();
              return true;
            },

            "Shift-Enter": () => {
              this.editor.commands.setHardBreak();
              return true;
            },
          };
        },
      }),

      Heading.configure({
        levels: [1],
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "me:ps-4 w-full px-4 rounded-md min-h-20 text-lg placeholder:text-icon focus:border-s editor-props focus:border-none focus:outline-none focus:ring-0 md:text-xl",
      },
    },
    onUpdate: async ({ editor }) => {
      const html = editor.getHTML();
      await formik?.setFieldValue("story", html);
    },
  });

  return editor;
};
