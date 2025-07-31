// app/blog/[slug]/page.tsx

import { getAllPosts } from "@/lib/api";
import BlogPostPageClient from "./BlogPostPageClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>; // Update type to Promise
}) {
  const { slug } = await params; // Await params to resolve the slug
  const posts = await getAllPosts(); // If this ever becomes async, `await` it here
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return <BlogPostPageClient post={post} />;
}
