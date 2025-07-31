import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { remark } from "remark";
// import html from "remark-html";
import remarkParse from "remark-parse";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";

export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype) // convert Markdown AST to HTML AST
    .use(rehypeHighlight, { detect: true }) // already in your code
    .use(rehypeStringify) // convert HTML AST to string
    .process(markdown);
  return result.toString();
}
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatUnixTimestamp(date: string): string {
  return Math.floor(new Date(date).getTime() / 1000).toString();
}
