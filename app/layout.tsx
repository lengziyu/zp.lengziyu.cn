import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: "陈广达 — 前端 + AI 开发",
  description: "陈广达的个人作品集，10 年前端开发经验，近期专注 AI 应用开发，可独立开发跨平台 APP 并主导上架。",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
