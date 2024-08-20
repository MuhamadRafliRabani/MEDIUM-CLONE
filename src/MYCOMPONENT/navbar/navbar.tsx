import Link from "next/link";
import { Bell, PencilLine } from "@phosphor-icons/react";
import MyDropDownMenu from "../MyDropDownMenu/MyDropDownMenu";
import Image from "next/image";
import { useUser, useUserCustom } from "@/hooks/store/useUser";
import MyToolTip from "../MyToolTip/MyToolTip";
import MyDrawer from "../my_drawer/MyDrawer";
import EditProfil from "@/features/profil/editProfil";

const Navbar: React.FC = () => {
  const { user } = useUser();
  const { user: userCustom, setUserCustom } = useUserCustom();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <p className="text-xl font-bold">Medium</p>
          </Link>
        </div>

        <div className="flex items-center justify-center space-x-4 md:space-x-6">
          <Link
            href="/article/new-story"
            className="text-gray-700 hover:text-black"
          >
            <MyToolTip
              Content={<p>make your story</p>}
              Trigger={
                <PencilLine
                  className="mt-1 size-6 md:size-8"
                  size={24}
                  weight="thin"
                />
              }
              tag="p"
            />
          </Link>
          <MyToolTip
            Content={<p>No notifications</p>}
            Trigger={
              <Bell
                className="-mt-1 size-6 md:size-7"
                size={24}
                weight="thin"
              />
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
                        src={
                          userCustom?.profil_img ||
                          user?.photoURL ||
                          "/profil.jpg"
                        }
                        alt=""
                        width={32}
                        height={32}
                        className="size-8 rounded-full bg-slate-200"
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
