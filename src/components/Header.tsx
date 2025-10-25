"use client";
import { useEffect, useState, useContext } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { LanguageContext } from "@/context/language-context";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const controls = useAnimation();

  const { language, setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      controls.start({
        x: [0, 12, -8, 0],
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    }
  }, [menuOpen, controls]);

  const scrollToTop = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) homeSection.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const languages = [
    { code: "EN", label: "English" },
    { code: "RU", label: "Русский" },
    { code: "UZ", label: "O‘zbek" },
  ];

  const selectLanguage = (code: "EN" | "RU" | "UZ") => {
    setLanguage(code);
    setLangOpen(false);
  };

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/40 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b from-black to-transparent"
      }`}
    >
      <nav className='max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-white'>
        {/* === Mobile version === */}
        <div className='flex w-full items-center justify-between md:hidden'>
          <button
            className='flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white transition'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <motion.div
            onClick={scrollToTop}
            className='absolute left-1/2 -translate-x-1/2 cursor-pointer'
            animate={controls}
            whileHover={{ scale: 1.05, color: "#00ffff" }}
          >
            <span className='font-semibold text-2xl text-white/80 hover:text-white transition-colors'>
              &lt;DevPortfolio /&gt;
            </span>
          </motion.div>

          <div className='relative'>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className='flex items-center gap-1 px-2 py-1 rounded-md bg-gray-800/50 hover:bg-gray-700/70 transition text-white font-medium'
            >
              {language} <ChevronDown size={16} />
            </button>
            {langOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className='absolute right-0 mt-2 w-32 bg-gray-800/90 border border-gray-700 rounded-md shadow-lg overflow-hidden z-50'
              >
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => selectLanguage(lang.code as any)}
                      className='w-full text-left px-4 py-2 hover:bg-blue-800/50 transition'
                    >
                      {lang.label}
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </div>
        </div>

        {/* === Desktop version === */}
        <div className='hidden md:flex items-center justify-between w-full'>
          <motion.div
            onClick={scrollToTop}
            className='flex items-center gap-2 cursor-pointer'
            initial={{ x: -5 }}
            animate={{ x: 0 }}
            whileHover={{ scale: 1.05, color: "#00ffff" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className='font-semibold text-3xl text-white/80 hover:text-white transition-colors'>
              &lt;DevPortfolio /&gt;
            </span>
          </motion.div>

          <ul className='flex gap-8 items-center'>
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className='relative text-white/70 transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:via-teal-300 hover:to-purple-500 hover:bg-clip-text hover:scale-105'
                >
                  {item}
                </a>
              </li>
            ))}

            {/* === Language selection === */}
            <li className='relative'>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className='flex items-center gap-1 px-3 py-1 rounded-md bg-gray-800/50 hover:bg-gray-700/70 transition text-white font-medium'
              >
                {language} <ChevronDown size={16} />
              </button>

              {langOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className='absolute right-0 mt-2 w-32 bg-gray-800/90 border border-gray-700 rounded-md shadow-lg overflow-hidden z-50'
                >
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => selectLanguage(lang.code as any)}
                        className='w-full text-left px-4 py-2 hover:bg-blue-800/50 transition'
                      >
                        {lang.label}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {/* === Phone menu === */}
      <motion.div
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

        <motion.ul
          className='flex flex-col items-center gap-8 mt-16 text-lg font-medium'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : -20 }}
          transition={{ duration: 0.3, staggerChildren: 0.1 }}
        >
          {navItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className='relative text-white/80 transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:via-teal-300 hover:to-purple-500 hover:bg-clip-text'
              >
                {item}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </header>
  );
}
