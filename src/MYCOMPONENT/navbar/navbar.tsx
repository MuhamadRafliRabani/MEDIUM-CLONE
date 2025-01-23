import Link from "next/link";
import Image from "next/image";
import { useUser } from "@/hooks/store/useUser";
import MyToolTip from "../MyToolTip/MyToolTip";
import MyDrawer from "../my_drawer/MyDrawer";
import EditProfil from "@/features/profil/editProfil";
import { Bell, SquarePen } from "lucide-react";

const Navbar: React.FC = () => {
  const { user } = useUser();

  console.log(user);

  return (
    <nav className="fixed inset-x-0 top-0 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <p className="text-xl font-bold">Medium</p>
          </Link>
        </div>

        <div className="flex items-center justify-center space-x-4 md:space-x-6">
          <Link href="/article/new-story">
            <MyToolTip
              Content={<p>make your story</p>}
              Trigger={
                <SquarePen
                  className="size-6 stroke-black text-black"
                  strokeWidth={0.5}
                />
              }
              tag="p"
            />
          </Link>
          <MyToolTip
            Content={<p>No notifications</p>}
            Trigger={
              <Bell className="size-6" color="#000000" strokeWidth={0.5} />
            }
            tag="p"
          />
          <div>
            {user.email && (
              <MyToolTip
                Content={<p>{user.email}</p>}
                Trigger={
                  <MyDrawer
                    triger={
                      <Image
                        alt=""
                        src={(user.photoURL as string) || "/user.jpg"}
                        width={32}
                        height={32}
                        className="size-7 rounded-full bg-slate-200"
                      />
                    }
                    Title="Update Profil"
                    Description="Update your profil here"
                    content={<EditProfil />}
                  />
                }
                tag="p"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
