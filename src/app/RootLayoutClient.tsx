"use client";
import { LanguageProvider } from "@/context/language-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MatrixIntro from "@/components/MatrixIntro";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <Header />
      <main className='pt-25 md:pt-5 relative z-10'>{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
