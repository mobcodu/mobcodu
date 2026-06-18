import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mobcodu Technologies",
  description:
    "AI, Web, Mobile & Digital Solutions. Helping businesses build scalable and innovative digital products.",
  keywords: [
    "Mobcodu",
    "AI Development",
    "Web Development",
    "Mobile App Development",
    "Software Company",
    "Business Automation",
    "Cloud Solutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050816] text-white">
        {children}
      </body>
    </html>
  );
}