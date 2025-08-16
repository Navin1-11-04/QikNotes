"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Auth from "./auth";
import ModeToggle from "@/components/mode-toggle";
import { useUser } from "@/components/providers/user-provider";

export const Navbar = () => {
  const scrolled = useScrollTop();
  const { uid } = useUser(); // Firebase UID
  const isAuthenticated = !!uid;

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center justify-between w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />

      {!isAuthenticated && (
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              Sign Up / Login
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold">Welcome</DialogTitle>
            </DialogHeader>
            <Auth />
          </DialogContent>
        </Dialog>
      )}

      {isAuthenticated && (
        <p className="text-sm">Logged in</p>
        // You can replace this with a user menu or profile avatar
      )}

      <ModeToggle />
    </div>
  );
};
