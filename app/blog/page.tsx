// import { motion } from "framer-motion";
import { Blog } from "@/components/sections/blog";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { getAllPosts } from "@/lib/api";
export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 mb-12">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        > */}
        <TerminalWindow title="~/blog/index.sh">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-terminal-text-secondary">$</span>
              <span className="text-terminal-text">
                echo `${"Welcome to my technical blog"}`
              </span>
            </div>
            <div className="pl-4 text-terminal-text/80">
              Sharing insights on development, Linux, and technology
            </div>
          </div>
        </TerminalWindow>
        {/* </motion.div> */}
      </div>

      {/* The Blog component no longer needs a 'posts' prop */}
      <Blog posts={posts} />
    </div>
  );
}
