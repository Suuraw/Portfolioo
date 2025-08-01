import type React from "react";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider as NextThemesProvider } from "next-themes";
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
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sujay.is-a.dev"),
  title: {
    default: "Sujay Kumar | Full-Stack Developer & DevOps Enthusiast",
    template: "%s | Sujay Kumar",
  },
  description:
    "Full-stack developer and DevOps enthusiast specializing in modern web technologies. Expert in React, Next.js, Node.js, Linux, and cloud infrastructure. Explore my projects and technical blog.",
  keywords: [
    "Sujay Kumar",
    "Full Stack Developer",
    "DevOps Engineer",
    "Linux Engineer",
    "React Developer",
    "Next.js Expert",
    "Web Development",
    "Portfolio",
    "DevOps",
    "System Administration",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Cloud Infrastructure",
    "Docker",
    "Kubernetes",
    "AWS",
    "CI/CD",
    "Software Engineer",
    "Backend Developer",
    "Frontend Developer",
  ],
  authors: [{ name: "Sujay Kumar", url: "https://sujay.is-a.dev" }],
  creator: "Sujay Kumar",
  publisher: "Sujay Kumar",
  applicationName: "Sujay Kumar Portfolio",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/icon.ico", type: "image/x-icon" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sujay.is-a.dev",
    siteName: "Sujay's Portfolio",
    title: "Sujay Kumar | Full-Stack Developer & DevOps Enthusiast",
    description:
      "Full-stack developer and DevOps enthusiast specializing in modern web technologies. Expert in React, Next.js, Node.js, Linux, and cloud infrastructure.",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/126287693?s=100&v=4",
        width: 400,
        height: 400,
        alt: "Sujay Kumar - Full-Stack Developer & DevOps Enthusiast",
        type: "image/jpeg",
      },
      {
        url: "/og_img.png",
        width: 1200,
        height: 630,
        alt: "Sujay Kumar Portfolio - Full-Stack Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Suuraw1",
    creator: "@Suuraw1",
    title: "Sujay Kumar | Full-Stack Developer & DevOps Enthusiast",
    description:
      "Full-stack developer and DevOps enthusiast specializing in modern web technologies. Expert in React, Next.js, Node.js, Linux, and cloud infrastructure.",
    images: [
      {
        url: "/og_img.png",
        alt: "Sujay Kumar - Full-Stack Developer & DevOps Enthusiast",
      },
    ],
  },
  verification: {
    google: "IEJ4Uvo_k9-sMvcmGtHaLx2Pw9xhKqnSW-GMCVft6Ng",
  },
  category: "technology",
  classification: "Business",
  alternates: {
    canonical: "https://sujay.is-a.dev",
    languages: {
      "en-US": "https://sujay.is-a.dev",
    },
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Sujay Kumar",
    "application-name": "Sujay Kumar Portfolio",
    "msapplication-TileColor": "#000000",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allPosts = getAllPosts();

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* DNS prefetch and preconnect for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta
          httpEquiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />

        {/* Theme script - optimized */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  const theme = savedTheme || systemTheme;
                  document.documentElement.setAttribute('data-theme', theme);
                  document.documentElement.classList.add(theme);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />

        {/* Enhanced Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sujay Kumar",
              jobTitle: ["Full-Stack Developer", "DevOps Engineer"],
              description:
                "Full-stack developer and DevOps enthusiast specializing in modern web technologies including React, Next.js, Node.js, Linux administration, and cloud infrastructure.",
              url: "https://sujay.is-a.dev",
              image:
                "https://avatars.githubusercontent.com/u/126287693?s=400&v=4",
              email: "sujayraw13@gmail.com", // Add your email
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressRegion: "Odisha",
                addressLocality: "Bhubaneswar",
              },
              sameAs: [
                "https://github.com/Suuraw",
                "https://www.linkedin.com/in/sujay-kumar-4b85b5252/",
                "https://twitter.com/Suuraw1",
              ],
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Express.js",
                "Linux",
                "DevOps",
                "Docker",
                "Kubernetes",
                "AWS",
                "CI/CD",
                "System Administration",
                "Web Development",
                "Full Stack Development",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "KIIT University", // Add your education
              },
              worksFor: {
                "@type": "Organization",
                name: "Freelancer", // Update with current employment
              },
            }),
          }}
        />

        {/* Website structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Sujay Kumar Portfolio",
              url: "https://sujay.is-a.dev",
              description:
                "Portfolio website of Sujay Kumar, Full-Stack Developer and DevOps Enthusiast",
              author: {
                "@type": "Person",
                name: "Sujay Kumar",
              },
              inLanguage: "en-US",
              copyrightYear: new Date().getFullYear(),
              copyrightHolder: {
                "@type": "Person",
                name: "Sujay Kumar",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${jetbrainsMono.variable} font-mono antialiased min-h-screen transition-all duration-300 bg-background text-foreground`}
      >
        <BlogProvider posts={allPosts}>
          <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange={false}
          >
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-1" role="main" id="main-content">
                {children}
              </main>

              {/* Skip to main content link for accessibility */}
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-primary-foreground p-2 z-50 rounded-br-md"
              >
                Skip to main content
              </a>
            </div>
          </NextThemesProvider>
        </BlogProvider>
      </body>
    </html>
  );
}
