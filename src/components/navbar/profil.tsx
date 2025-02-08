import {
  Book,
  BookOpen,
  FileText,
  LayoutDashboard,
  LogOut,
  Settings,
  Shield,
  User,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

interface ProfilProps {
  image: string;
}

export function Profil({ image }: ProfilProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src={image}
          alt="Profile"
          width={32}
          height={32}
          className="size-8 cursor-pointer rounded-full"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {/* Profile Section */}
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 size-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BookOpen className="mr-2 size-4" />
            <span>Library</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FileText className="mr-2 size-4" />
            <span>Stories</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LayoutDashboard className="mr-2 size-4" />
            <span>Stats</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        {/* Settings Section */}
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Settings className="mr-2 size-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Shield className="mr-2 size-4" />
            <span>Refine recommendations</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Book className="mr-2 size-4" />
            <span>Manage publications</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        {/* Logout Section */}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 size-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
