"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";

export const Heading = () => {
  return (
    <div className="w-full my-[28vh] p-3 text-foreground">
      <div className="flex flex-col text-center gap-y-1.5">
        <h3 className="text-3xl text-foreground font-normal">Capture ideas instantly</h3>
        {/* <h1 className="text-6xl md:text-9xl font-black word-break">
         Think It.<span className="mx-4 md:mx-6 text-blue-600">Qik</span>It
       </h1> */}
        <p className="text-lg w-full italic text-center word-break text-foreground/50">
          “Note-taking made effortless — for people who’d rather just think.”
        </p>
        <div className="flex gap-x-2 mt-2 items-center justify-center">
          <Button
            variant="default"
            size="lg"
            className="bg-blue-600 hover:bg-foreground font-medium rounded-full font-lg lg:font-xl shadow-xs"
            type="button"
          >
            <Link href="#">Get Started Free</Link><ArrowRight size={32} weight="bold" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="font-medium rounded-full font-lg lg:font-xl"
            type="button"
          >
            <Link href="#">See Demo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
