"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Sun, Moon} from "@phosphor-icons/react"

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isSwitching, setIsSwitching] = React.useState(false);

  const handleClick = () => {
    setIsSwitching(true);

    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
      setIsSwitching(false);
    }, 250);
  };

  return (
    <Button
      variant="ghost"
      className="relative overflow-hidden text-muted-foreground hover:text-primary active:text-primary focus:text-primary hover:bg-transparent dark:hover:bg-transparent"
      onClick={handleClick}
      disabled={isSwitching}
    >
      <Sun className="size-5 scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90"/>
      <Moon className="absolute size-5 scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0" />
    </Button>
  );
};

export default ModeToggle;
