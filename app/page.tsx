// app/page.tsx or the relevant page file

import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Blog } from "@/components/sections/blog";
import { getAllPosts } from "@/lib/api"; // <-- Import the data fetching function
import Stats from "@/components/layout/stats";

export default function Home() {
  // Fetch data on the server
  const blogPosts = getAllPosts();

  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Projects />
      {/* Pass the fetched data as a prop */}
      <Blog posts={blogPosts} />
    </>
  );
}
