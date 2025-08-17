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
      variant="outline"
      className="relative overflow-hidden text-muted-foreground hover:text-primary active:text-primary focus:text-primary rounded-full shadow-xs h-8"
      onClick={handleClick}
      disabled={isSwitching}
    >
      <Sun className="size-4 scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90" weight="bold"/>
      <Moon className="absolute size-4 scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0" weight="bold"/>
    </Button>
  );
};

export default ModeToggle;
