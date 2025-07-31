"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"; // Use next-themes hook
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-md border transition-all duration-300 font-mono text-sm",
        "hover:scale-105 transform",
        "bg-black dark:bg-black light:bg-white",
        "border-green-500 dark:border-green-400 light:border-green-600",
        "text-green-400 dark:text-green-400 light:text-green-600",
        "hover:bg-green-900/20 dark:hover:bg-green-900/20 light:hover:bg-green-100",
        "hover:border-green-300 dark:hover:border-green-300 light:hover:border-green-500",
        "hover:text-green-300 dark:hover:text-green-300 light:hover:text-green-500"
      )}
      aria-label="Toggle theme"
    >
      <div className="flex items-center space-x-2">
        {theme === "dark" ? (
          <>
            <Moon className="w-4 h-4" />
          </>
        ) : (
          <>
            <Sun className="w-4 h-4" />
          </>
        )}
      </div>
    </button>
  );
}
