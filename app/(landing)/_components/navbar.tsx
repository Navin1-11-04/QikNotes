"use client";

import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { ArrowSquareOut } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        "w-full h-auto fixed top-0 p-3 flex items-start justify-between text-foreground bg-background",
        scrolled && ""
      )}
    >
      <div className="flex-1 flex items-center gap-x-2">
        <img
          src="/logo_vector_light.png"
          alt="QikNotes"
          className="block dark:hidden object-contain w-7 h-7"
        />
        <img
          src="/logo_vector_dark.png"
          alt="QikNotes"
          className="hidden dark:block object-contain w-7 h-7"
        />
        {/* <h1 className="hidden lg:flex leading-none flex-col font-semibold gap-y-1.5 font-sm md:font-base">
            Qik<span>Notes</span>
        </h1> */}
      </div>
      <div className="flex-1 flex justify-center">
        <ul className="leading-none flex flex-col gap-y-3 font-semibold text-sm">
           <li>
            <a href="#" type="button" aria-label="Features" className="hover-animation hover:text-muted-foreground">
                <span aria-hidden="true">
                    <span>
                        Features <span>Features</span>
                    </span>
                </span>
            </a>
            </li> 
            <li>
            <a href="#" type="button" aria-label="[ AI? ]" className="hover-animation hover:text-muted-foreground">
                <span aria-hidden="true">
                    <span>
                        [ <span>[</span>
                    </span>
                    <span>
                        AI? <span>AI?</span>
                    </span>
                    <span>
                        ] <span>]</span>
                    </span>
                </span>
            </a>
            </li>
        </ul>
      </div>
      <div className="flex-1 flex justify-center">
         <ul className="leading-none flex flex-col gap-y-3 font-medium text-sm">
            <li>
                <a href="#" type="button" aria-label="About" className="hover-animation hover:text-muted-foreground">
                    <span aria-hidden="true">
                        <span>About <span>About</span></span>
                    </span>
                </a>
            </li>
            <li>
                <a href="#" type="button" aria-label="Contact Us" className="hover-animation hover:text-muted-foreground">
                    <span aria-hidden="true">
                        <span>Contact<span>Contact</span></span>
                        <span className="w-1"> </span>
                        <span>Us<span>Us</span></span>
                    </span>
                </a>
            </li>
        </ul>
      </div>
      <div className="flex-1 leading-none font-medium flex justify-end gap-x-3">
        <ModeToggle/>
        <Button 
        size="sm"
        className="rounded-full font-medium shadow-xs bg-blue-600 hover:bg-foreground transition-all duration-300"
        type="button">
        <Link
        href="/documents"
        className="hover-animation flex items-center-safe justify-center gap-x-2"
        >
        <span aria-hidden="true">
                <span>Try <span>Try</span></span>
                <span className="w-1"></span>
                <span>Qik <span>Qik</span></span>
            </span>
            <ArrowSquareOut size={24} weight="bold"/>
        </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
