import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "@/lib/types";

const postsDirectory = path.join(process.cwd(), "data/_posts");

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Using `slug` to match your component's parameter name
    const slug = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      slug, // Changed from id to slug
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      tags: matterResult.data.tags,
      content: matterResult.content,
    };

    return blogPost;
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
