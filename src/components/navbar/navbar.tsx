import Link from "next/link";
import { useUser } from "@/hooks/store/zustand";
import { Bell, SquarePen } from "lucide-react";
import { Profil } from "./profil";
import MyToolTip from "../toolTip/MyToolTip";
import ToolTips from "../toolTip/MyToolTip";

const Navbar: React.FC = () => {
  const { user } = useUser();
  console.log("🚀 ~ user:", user);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <p className="text-xl font-bold">Medium</p>
          </Link>
        </div>

        <div className="flex items-center justify-center space-x-4 md:space-x-8">
          <Link
            className="flex items-center gap-2 text-black/65"
            href="/article/new-story"
          >
            <ToolTips
              Content={<p>make your story</p>}
              Trigger={
                <SquarePen className="size-6 stroke-black" strokeWidth={1} />
              }
            />
            <p>Write</p>
          </Link>
          <MyToolTip
            Content={<p>No notifications</p>}
            Trigger={
              <Bell
                className="size-6 stroke-black"
                color="#000000"
                strokeWidth={1}
              />
            }
          />
          {user && (
            <Profil
              image={
                user.app_metadata.provider !== "email" ? user.id : "/user.jpg"
              }
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
