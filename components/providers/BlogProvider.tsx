// components/providers/BlogProvider.tsx
"use client";

import BlogContext from "@/contexts/BlogContext";
import type { BlogPost } from "@/lib/types";
import type React from "react";

export function BlogProvider({
  posts,
  children,
}: {
  posts: BlogPost[];
  children: React.ReactNode;
}) {
  return <BlogContext.Provider value={posts}>{children}</BlogContext.Provider>;
}
