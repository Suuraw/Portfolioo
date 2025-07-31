// contexts/BlogContext.tsx
"use client";

import { createContext, useContext } from "react";
import type { BlogPost } from "@/lib/types";

// 1. Create the context with an initial value of 'undefined'
const BlogContext = createContext<BlogPost[] | undefined>(undefined);

// 2. Create a custom hook for consuming the context
export function useBlog() {
  const context = useContext(BlogContext);

  // Throw an error if the hook is used outside of the provider
  if (context === undefined) {
    throw new Error("useBlog must be used within a BlogProvider");
  }

  return context;
}

export default BlogContext;
