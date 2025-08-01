"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
  { name: "blog", href: "/blog" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-terminal-bg/95 light:bg-light-bg/95 dark:bg-terminal-bg/30 dark:backdrop-blur-lg border-b border-terminal-text/20 dark:border-terminal-text/20 light:border-light-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Terminal className="w-6 h-6 text-terminal-text dark:text-terminal-text light:text-light-accent group-hover:text-terminal-text-secondary dark:group-hover:text-terminal-text-secondary light:group-hover:text-light-accent transition-colors" />
            <span className="font-mono font-bold text-terminal-text dark:text-terminal-text light:text-light-text group-hover:text-terminal-text-secondary dark:group-hover:text-terminal-text-secondary light:group-hover:text-light-accent transition-colors">
              ~/Sujay
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-mono text-sm transition-colors duration-200 hover:text-terminal-text-secondary dark:hover:text-terminal-text-secondary light:hover:text-light-accent",
                  pathname === item.href
                    ? "text-terminal-text-secondary dark:text-terminal-text-secondary light:text-light-accent"
                    : "text-terminal-text/80 dark:text-terminal-text/80 light:text-light-text-secondary"
                )}
              >
                ./{item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-terminal-text dark:text-terminal-text light:text-light-text hover:text-terminal-text-secondary dark:hover:text-terminal-text-secondary light:hover:text-light-accent transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-terminal-text/20 dark:border-terminal-text/20 light:border-light-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-2 font-mono text-sm transition-colors duration-200",
                    pathname === item.href
                      ? "text-terminal-text-secondary dark:text-terminal-text-secondary light:text-light-accent bg-terminal-bg-light dark:bg-terminal-bg-light light:bg-light-bg"
                      : "text-terminal-text/80 dark:text-terminal-text/80 light:text-light-text-secondary hover:text-terminal-text-secondary dark:hover:text-terminal-text-secondary light:hover:text-light-accent hover:bg-terminal-bg-light dark:hover:bg-terminal-bg-light light:hover:bg-light-bg"
                  )}
                >
                  ./{item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
