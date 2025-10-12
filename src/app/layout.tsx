// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import RootLayoutClient from "./RootLayoutClient";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${spaceGrotesk.className} bg-gray-800 text-white`}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
