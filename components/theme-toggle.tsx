"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { DynamicIcon } from "lucide-react/dynamic";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isLight = theme === "light";
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="flex justify-center items-center"
    >
      {mounted && <DynamicIcon name={isLight ? "moon" : "sun"} />}
    </Button>
  );
}
