import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const code = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const title = "Mustafizur Rahman Chowdhury | Full-Stack Developer";
const description =
  "Portfolio of Mustafizur Rahman Chowdhury, a full-stack developer building modern web applications with React, Next.js, Node.js, and MongoDB.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Mustafizur Rahman Chowdhury" }],
  keywords: [
    "Mustafizur Rahman Chowdhury",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Sylhet",
    "Bangladesh",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#07080f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${code.variable}`}>
      <body>{children}</body>
    </html>
  );
}
