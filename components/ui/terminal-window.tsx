"use client";

import type React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Minus, Square, X } from "lucide-react";

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function TerminalWindow({
  title = "terminal",
  children,
  className,
}: TerminalWindowProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300);
  };

  const handleClose = () => {
    setIsClosed(true);
    setTimeout(() => setIsClosed(false), 500);
  };

  if (isClosed) {
    return null;
  }

  return (
    <div
      className={cn(
        "bg-black dark:bg-black light:bg-white border-2 border-green-500 dark:border-green-400 light:border-green-600 rounded-lg overflow-hidden shadow-2xl transition-all duration-300",
        isMinimized && "animate-window-minimize",
        isMaximized && "animate-window-maximize scale-105",
        isGlitching && "animate-glitch",
        className
      )}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 dark:bg-gray-900 light:bg-gray-100 border-b-2 border-green-500 dark:border-green-400 light:border-green-600">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <button
              onClick={handleClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors duration-200 hover:animate-pulse"
              title="Close"
            />
            <button
              onClick={handleMinimize}
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors duration-200 hover:animate-bounce"
              title="Minimize"
            />
            <button
              onClick={handleMaximize}
              className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors duration-200 hover:animate-spin"
              title="Maximize"
            />
          </div>
          <span className="text-sm font-mono text-green-400 dark:text-green-400 light:text-green-600 ml-2 font-bold">
            {title}
          </span>
        </div>
        <div className="flex items-center space-x-1 text-green-400 dark:text-green-400 light:text-green-600 opacity-60">
          <button
            onClick={handleMinimize}
            className="hover:opacity-100 transition-opacity duration-200 hover:animate-pulse"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            onClick={handleMaximize}
            className="hover:opacity-100 transition-opacity duration-200 hover:animate-pulse"
          >
            <Square className="w-4 h-4" />
          </button>
          <button
            onClick={handleClose}
            className="hover:opacity-100 transition-opacity duration-200 hover:animate-pulse hover:text-red-400"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <div
        className={cn(
          "p-4 font-mono text-sm bg-black dark:bg-black light:bg-white transition-all duration-300",
          isMinimized && "h-0 p-0 overflow-hidden"
        )}
      >
        {!isMinimized && children}
      </div>
    </div>
  );
}
