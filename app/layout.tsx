import type React from "react";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider as NextThemesProvider } from "next-themes"; // Use next-themes
import { Navigation } from "@/components/layout/navigation";
import "./globals.css";
import { getAllPosts } from "@/lib/api";
import { BlogProvider } from "@/components/providers/BlogProvider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sujay Kumar | Linux Portfolio",
  description:
    "A modern, terminal-inspired portfolio showcasing full-stack development projects and technical expertise by Sujay Kumar.",
  icons: {
    icon: [{ url: "/icon.ico", type: "image/x-icon" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allPosts = getAllPosts();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const theme = savedTheme || systemTheme;
                document.documentElement.setAttribute('data-theme', theme);
                document.documentElement.classList.add(theme);
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${jetbrainsMono.variable} font-mono antialiased min-h-screen transition-all duration-300`}
      >
        <BlogProvider posts={allPosts}>
          <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
          >
            <Navigation />
            <main>{children}</main>
          </NextThemesProvider>
        </BlogProvider>
      </body>
    </html>
  );
}
