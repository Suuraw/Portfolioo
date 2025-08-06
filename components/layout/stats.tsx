"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TerminalWindow } from "../ui/terminal-window";
import { useRouter } from "next/navigation";
export default function Stats() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  // Ensure component is mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading skeleton
  }

  const currentTheme = resolvedTheme || theme;
  const isDark = currentTheme === "dark";
  const themeParam = isDark ? "dark" : "light";

  return (
    <div className="mx-4 sm:mx-10">
      <TerminalWindow title="~/about/stats.info">
        <div className="space-y-6">
          {/* Mobile: Column layout, Desktop: Row layout */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
            {/* LeetCode Stats */}
            <div className="flex-1 flex justify-center animate-slow-bounce">
              <img
                src={`https://readmecodegen.vercel.app/api/leetcode-stats/sujayraw13?theme=${themeParam}&acceptance=false&reputation=false&font=%27JetBrains+Mono%27%2C+%27Courier+New%27%2C+monospace&template=minimal`}
                alt="LeetCode Statistics"
                className="w-full max-w-sm lg:max-w-[320px] xl:max-w-[350px] h-auto rounded-lg border border-green-500/30 shadow-lg hover:shadow-green-500/20 transition-shadow duration-300 hover:cursor-pointer"
                onClick={() =>
                  router.push("https://leetcode.com/u/sujayraw13/")
                }
              />
            </div>

            {/* GitHub Top Languages */}
            <div className="flex-1 flex justify-center animate-slow-bounce">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs?username=suuraw&show_icons=true&locale=en&layout=compact&theme=${themeParam}`}
                alt="Top Languages"
                className="w-full max-w-sm lg:max-w-[320px] xl:max-w-[350px] h-auto rounded-lg border border-green-500/30 shadow-lg hover:shadow-green-500/20 transition-shadow duration-300 hover:cursor-pointer"
                onClick={() => router.push("https://github.com/Suuraw")}
              />
            </div>

            {/* GitHub Stats */}
            <div className="flex-1 flex justify-center animate-slow-bounce ">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=suuraw&show_icons=true&locale=en&theme=${themeParam}`}
                alt="GitHub Statistics"
                className="w-full max-w-sm lg:max-w-[320px] xl:max-w-[350px] h-auto rounded-lg border border-green-500/30 shadow-lg hover:shadow-green-500/20 transition-shadow duration-300 hover:cursor-pointer"
                onClick={() => router.push("https://github.com/Suuraw")}
              />
            </div>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
}
