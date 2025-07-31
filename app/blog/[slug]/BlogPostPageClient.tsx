"use client";

import { useEffect, useState } from "react";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { markdownToHtml, formatDate } from "@/lib/utils";
import type { BlogPost } from "@/lib/types";
import markdownStyles from "../../markdown-styles.module.css";
export default function BlogPostPageClient({ post }: { post: BlogPost }) {
  const [htmlContent, setHtmlContent] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      const html = await markdownToHtml(post.content);
      console.log(html);
      setHtmlContent(html);
    };
    loadContent();
  }, [post.content]);

  if (!htmlContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-green-400 font-mono glow-text">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 terminal-glow">
      <div className="max-w-4xl mx-auto">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors glow-hover glow-button px-3 py-2 rounded font-extrabold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-sm">cd ../blog</span>
          </Link>
        </div>

        {/* Terminal Post View */}
        <TerminalWindow title={`~/${post.slug}.md`} className="glow-border">
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold text-white glow-text">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-green-300 font-mono">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-semibold">{formatDate(post.date)}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Tag className="w-4 h-4" />
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-800 text-green-400 px-2 py-1 text-xs font-mono border border-white font-semibold glow-button"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="border-t border-terminal-text/20 dark:border-terminal-text/20 light:border-light-border pt-6">
              <div
                className="prose prose-invert dark:prose-invert light:prose-light max-w-none font-mono text-terminal-text/80 dark:text-terminal-text/80 light:text-light-text-secondary"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
}
