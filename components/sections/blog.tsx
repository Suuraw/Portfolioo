// components/sections/blog.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Tag, FileText } from "lucide-react";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { formatDate, formatUnixTimestamp } from "@/lib/utils";
import type { BlogPost } from "@/lib/types"; // <-- Import the type for the prop

// 1. Accept `posts` as a prop
export function Blog({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <TerminalWindow title="~/blog/posts.log" className="glow-border">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-400 font-bold glow-text">
                  sujay@portfolio:~$
                </span>
                <span className="text-white font-semibold">
                  ls -la ./content/_posts/
                </span>
              </div>
              <div className="pl-4 space-y-1 text-cyan-400 text-sm font-mono">
                {/* 2. Use the `posts` prop here */}
                <div className="font-semibold">total {posts.length} posts</div>
                {/* 3. And here */}
                {posts.map((post) => (
                  // 4. Correct the key to use the unique slug
                  <div key={post.slug} className="flex items-center space-x-4">
                    <span className="text-blue-400 font-bold">-rw-r--r--</span>
                    <span className="text-amber-400 font-semibold">
                      {formatUnixTimestamp(post.date)}
                    </span>
                    <span className="text-white">{post.slug}.md</span>
                  </div>
                ))}
              </div>
            </div>
          </TerminalWindow>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 5. Use the `posts` prop for the main grid as well */}
          {posts.map((post, index) => (
            <motion.div
              // 6. Correct the key here too
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <TerminalWindow
                  title={`~/${post.slug}.md`}
                  className="h-full transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl cursor-pointer bg-black border-green-500 opacity-100 group-hover:glow-border"
                >
                  {/* ... The rest of your card code remains the same ... */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-amber-400 glow-hover" />
                      <h3 className="text-white font-bold text-xl group-hover:text-green-400 transition-colors antialiased glow-hover">
                        {post.title}
                      </h3>
                    </div>
                    {/* ... etc ... */}
                  </div>
                </TerminalWindow>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
