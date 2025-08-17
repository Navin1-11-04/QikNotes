"use client";
import { useUser } from "@/components/providers/user-provider";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Mail } from "lucide-react";
import { UserIcon } from "@phosphor-icons/react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase-config";
import ModeToggle from "@/components/mode-toggle";

export const Useritem = () => {
  const { user } = useUser();

  const handleLogout = async () => {
    try {
       await signOut(auth);
     } catch (err) {
      console.error("Logout failed:", err);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="flex items-center text-sm cursor-pointer"
        >
          <div className="gap-x-3 flex items-center max-w-[150px]">
            <Avatar className="h-8 w-8 flex items-center justify-center bg-secondary">
              {user?.photoURL ? (
                <AvatarImage src={user.photoURL} />
              ) : (
                <UserIcon size={20}/>
              )}
            </Avatar>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-65"
        align="end"
        side="bottom"
        sideOffset={10}
        forceMount
      >
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <div className="flex items-center  justify-start space-x-2 p-2">
          <p className="text-sm font-medium leding-none text-primary/50">
            {user?.displayName}
          </p>
        </div>
        <div className="flex items-center  justify-start space-x-2 p-2">
          <Mail className="h-3 w-3 mt-0.5 text-accent-foreground" />
          <p className="text-xs font-medium leding-none text-primary/50">
            {user?.email}
          </p>
        </div>
        <DropdownMenuItem>
           <ModeToggle/>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="w-full cursor-pointer font-medium text-muted-foreground hover:text-primary" onClick={handleLogout}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
