"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";

export default function Home() {
  const { language } = useContext(LanguageContext);

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    {
      href: "https://github.com/rajabovdavlat",
      title: "GitHub",
      path: "M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.112.82-.261.82-.582 0-.287-.012-1.243-.018-2.252-3.338.724-4.043-1.609-4.043-1.609-.546-1.387-1.334-1.757-1.334-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.305 3.492.998.107-.774.418-1.304.762-1.603-2.665-.304-5.466-1.333-5.466-5.933 0-1.31.468-2.381 1.236-3.221-.124-.304-.536-1.528.116-3.177 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.004 2.044.138 3 .404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.649.242 2.873.118 3.177.77.84 1.236 1.911 1.236 3.221 0 4.61-2.805 5.626-5.475 5.922.43.372.815 1.102.815 2.222 0 1.604-.014 2.896-.014 3.286 0 .322.216.698.825.581C20.565 21.796 24 17.303 24 12 24 5.372 18.628 0 12 0z",
    },
    {
      href: "https://www.linkedin.com/in/yourusername/",
      title: "LinkedIn",
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.5c0-1.079-.021-2.469-1.504-2.469-1.506 0-1.735 1.176-1.735 2.393v4.576h-3v-9h2.884v1.233h.041c.402-.762 1.384-1.562 2.847-1.562 3.042 0 3.603 2.002 3.603 4.604v4.725z",
    },
    {
      href: "https://t.me/rajabovdavy",
      title: "Telegram",
      path: "M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.112.82-.261.82-.582 0-.287-.012-1.243-.018-2.252-3.338.724-4.043-1.609-4.043-1.609-.546-1.387-1.334-1.757-1.334-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.305 3.492.998.107-.774.418-1.304.762-1.603-2.665-.304-5.466-1.333-5.466-5.933 0-1.31.468-2.381 1.236-3.221-.124-.304-.536-1.528.116-3.177 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.004 2.044.138 3 .404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.649.242 2.873.118 3.177.77.84 1.236 1.911 1.236 3.221 0 4.61-2.805 5.626-5.475 5.922.43.372.815 1.102.815 2.222 0 1.604-.014 2.896-.014 3.286 0 .322.216.698.825.581C20.565 21.796 24 17.303 24 12 24 5.372 18.628 0 12 0z",
    },
  ];

  return (
    <>
      {/* Social links */}
      <div className='hidden md:flex fixed top-1/2 right-6 -translate-y-1/2 flex-col items-center gap-5 z-50'>
        {socialLinks.map(({ href, title, path }, i) => (
          <a
            key={i}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            title={title}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 text-white'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d={path} />
            </svg>
          </a>
        ))}
      </div>

      <motion.section
        id='home'
        className='min-h-screen flex items-center bg-gradient-to-b from-gray-800 to-black text-white overflow-hidden'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-12 w-full'>
          {/* Foto */}
          <motion.div
            className='flex justify-center md:justify-start mb-10 md:mb-0'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] border-2 border-gray-700 hover:scale-105 transition-transform duration-300'>
              <img
                src='/foto.jpg'
                alt='Profile photo'
                className='w-full h-full object-cover rounded-full'
              />
            </div>
          </motion.div>

          {/* Тext */}
          <motion.div
            className='flex-1 flex flex-col text-center md:text-left md:pl-10'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className='text-2xl mb-3 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent'>
              Hello, I’m
            </p>
            <h1 className='text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-teal-300 to-purple-500 bg-clip-text text-transparent drop-shadow-lg'>
              Davlatjon Rajabov
            </h1>
            <h2 className='text-xl md:text-2xl mb-6 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent'>
              Frontend Developer
            </h2>
            <p className='text-base md:text-lg leading-relaxed text-gray-300 max-w-xl mx-auto md:mx-0 opacity-90 hover:opacity-100 transition-opacity duration-500'>
              I build modern, responsive, and user-friendly web applications
              with clean code and beautiful design.
            </p>

            <motion.div
              className='mt-8 flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-4 md:justify-start'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className='px-6 py-2 text-sm md:text-base font-semibold rounded-md bg-gradient-to-r from-blue-800 to-purple-800 shadow-md hover:brightness-110 transition-all duration-200'
              >
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
