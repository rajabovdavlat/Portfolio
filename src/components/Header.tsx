"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Плавная прокрутка к секции Home
  const scrollToTop = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/40 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b from-black to-transparent"
      }`}
    >
      <nav className='max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-white'>
        {/* === Мобильная версия (бургер слева, логотип справа) === */}
        <div className='flex w-full items-center justify-between md:hidden'>
          {/* Бургер — слева */}
          <button
            className='flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white transition'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle menu'
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Логотип — справа */}
          <div onClick={scrollToTop} className='cursor-pointer'>
            <span className='font-semibold text-2xl text-white/80 hover:text-white transition-colors'>
              &lt;DevPortfolio /&gt;
            </span>
          </div>
        </div>

        {/* === Десктопная версия === */}
        <div className='hidden md:flex items-center justify-between w-full'>
          {/* Логотип */}
          <div
            onClick={scrollToTop}
            className='flex items-center gap-2 cursor-pointer'
          >
            <span className='font-semibold text-3xl text-white/80 hover:text-white transition-colors'>
              &lt;DevPortfolio /&gt;
            </span>
          </div>

          {/* Навигация */}
          <ul className='flex gap-8'>
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className='relative text-white/70 transition-all duration-300 
                  hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:via-teal-300 hover:to-purple-500 
                  hover:bg-clip-text'
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* === Мобильное меню (открывается СЛЕВА) === */}
      <div
        className={`md:hidden fixed top-0 left-0 h-screen w-2/3 bg-black/90 backdrop-blur-md transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className='flex justify-end p-4'>
          <button
            onClick={() => setMenuOpen(false)}
            className='text-white/80 hover:text-white'
          >
            <X size={28} />
          </button>
        </div>

        <ul className='flex flex-col items-center gap-8 mt-16 text-lg font-medium'>
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className='relative text-white/80 transition-all duration-300 
                hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:via-teal-300 hover:to-purple-500 
                hover:bg-clip-text'
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
