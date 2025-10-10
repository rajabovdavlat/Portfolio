import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Space_Grotesk } from "next/font/google"; // ✅ импортируем шрифт

// Настройки шрифта
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Можно оставить только нужные веса
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
        {/* Хедер фиксирован сверху */}
        <Header />

        {/* Контент страницы */}
        <main className='pt-25 md:pt-5'>{children}</main>

        {/* Подвал */}
        <Footer />
      </body>
    </html>
  );
}
