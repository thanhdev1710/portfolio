import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | ThanhDev - Sharing My Backend Development Journey",
  description:
    "Welcome to my blog where I share my experience, insights, and tips about backend development, web technologies, and performance optimization.",
  keywords: [
    "ThanhDev",
    "blog",
    "backend developer",
    "fullstack developer",
    "web development",
    "performance optimization",
    "Node.js",
    "React",
    "PostgreSQL",
    "Redis",
    "experience",
    "career tips",
    "backend systems",
    "API development",
  ],
  authors: [
    {
      name: "ThanhDev",
      url: "https://www.thanhdev.com",
    },
  ],
  openGraph: {
    title: "ThanhDev's Blog | Backend Development & Insights",
    description:
      "Explore ThanhDev's blog, sharing experiences in backend development, performance optimization, and best practices.",
    url: "https://www.thanhdev.com/blog",
    images: [
      {
        url: "https://www.thanhdev.com/thumbnail-blog.jpg",
        width: 1200,
        height: 630,
        alt: "ThanhDev Blog - Backend Development Insights",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
    title: "ThanhDev's Blog | Backend Development & Insights",
    description:
      "Explore ThanhDev's blog, sharing experiences in backend development, performance optimization, and best practices.",
    images: "https://www.thanhdev.com/thumbnail-blog.jpg",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-svh bg-gray-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to My Blog</h1>
        <p className="text-lg text-gray-600">
          Sharing my backend development journey and insights.
        </p>
      </header>
      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="w-1/4">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            <li>
              <a href="/category/backend" className="text-blue-600">
                Backend Development
              </a>
            </li>
            <li>
              <a href="/category/performance" className="text-blue-600">
                Performance Optimization
              </a>
            </li>
            <li>
              <a href="/category/tutorials" className="text-blue-600">
                Tutorials
              </a>
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-4">Recent Posts</h2>
          <ul className="space-y-2">
            <li>
              <a href="/blog/post-1" className="text-blue-600">
                How I Optimized a PostgreSQL Query
              </a>
            </li>
            <li>
              <a href="/blog/post-2" className="text-blue-600">
                Improving API Performance with Caching
              </a>
            </li>
            <li>
              <a href="/blog/post-3" className="text-blue-600">
                Best Practices for Building Scalable Systems
              </a>
            </li>
          </ul>
        </aside>

        {/* Main content area */}
        <main className="w-3/4">{children}</main>
      </div>
    </div>
  );
}
