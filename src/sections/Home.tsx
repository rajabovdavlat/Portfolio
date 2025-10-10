"use client";
import { motion } from "framer-motion";

export default function Home() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      href: "https://github.com/rajabovdavlat",
      title: "GitHub",
      path: "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.37-3.88-1.37-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.22 1.18a11.2 11.2 0 0 1 2.93-.39c.99.01 1.98.13 2.92.39 2.23-1.49 3.2-1.18 3.2-1.18.63 1.65.23 2.87.11 3.17.75.81 1.2 1.84 1.2 3.1 0 4.42-2.71 5.39-5.29 5.68.42.36.8 1.07.8 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z",
    },
    {
      href: "https://www.linkedin.com/in/yourusername/",
      title: "LinkedIn",
      path: "M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.34 19H4.67V9h2.67v10zm-1.34-11.4c-.85 0-1.53-.68-1.53-1.53s.68-1.53 1.53-1.53 1.53.68 1.53 1.53-.68 1.53-1.53 1.53zM20 19h-2.67v-4.83c0-1.15-.02-2.62-1.6-2.62-1.6 0-1.85 1.25-1.85 2.54V19h-2.67V9h2.56v1.37h.04c.36-.68 1.25-1.4 2.58-1.4 2.76 0 3.27 1.82 3.27 4.19V19z",
    },
    {
      href: "https://t.me/rajabovdavy",
      title: "Telegram",
      path: "M21.5 3.07L2.73 10.3c-.62.23-.6.99.03 1.17l4.72 1.45 1.82 5.5c.27.82 1.38 1.01 1.9.31l2.64-3.45 3.93 2.86c.74.54 1.8.03 1.84-.9l.6-11.55c.05-.94-.84-1.66-1.62-1.38z",
    },
  ];

  return (
    <>
      {/* --- Соцсети справа (только для ПК) --- */}
      <div className='hidden md:flex fixed top-1/2 right-6 -translate-y-1/2 flex-col items-center gap-5 z-50'>
        {socialLinks.map(({ href, title, path }, i) => (
          <a
            key={i}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            title={title}
            className='p-2 rounded-md transition-all duration-300 bg-transparent hover:bg-gradient-to-r from-blue-800 to-purple-800 hover:shadow-lg hover:shadow-purple-800/40 transform hover:-translate-y-1'
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

      {/* --- Главная секция --- */}
      <motion.section
        id='home'
        className='min-h-screen flex items-center bg-gradient-to-b from-gray-800 to-black text-white overflow-hidden'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-12 w-full'>
          {/* Фото */}
          <motion.div
            className='flex justify-center md:justify-start mb-10 md:mb-0'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div
              className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden
                shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] border-2 border-gray-700 
                hover:scale-105 transition-transform duration-300'
            >
              <img
                src='/foto.jpg'
                alt='Rajabov Davlat'
                className='w-full h-full object-cover rounded-full'
              />
            </div>
          </motion.div>

          {/* Текст и кнопка */}
          <motion.div
            className='flex-1 flex flex-col text-center md:text-left md:pl-10'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className='text-2xl mb-3 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent'>
              Hello, I'm
            </p>

            <h1 className='text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-teal-300 to-purple-500 bg-clip-text text-transparent drop-shadow-lg'>
              Rajabov Davlat
            </h1>

            <h2 className='text-xl md:text-2xl mb-6 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent'>
              Frontend Developer passionate about building clean, modern, and
              user-friendly web interfaces.
            </h2>

            <p className='text-base md:text-lg leading-relaxed text-gray-300 max-w-xl mx-auto md:mx-0 opacity-90 hover:opacity-100 transition-opacity duration-500'>
              I focus on mastering JavaScript and creating smooth, responsive
              websites using React and modern technologies. Driven by curiosity,
              discipline, and the goal to grow from my first projects to real
              production-level work.
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
                View My Work
              </motion.button>

              {/* Соцсети возле кнопки — только на мобилках */}
              <div className='flex md:hidden items-center gap-3'>
                {socialLinks.map(({ href, title, path }, i) => (
                  <a
                    key={i}
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    title={title}
                    className='p-2 rounded-md cursor-pointer transition-all duration-300
                      bg-gradient-to-r from-transparent to-transparent hover:from-blue-800 hover:to-purple-800
                      hover:shadow-md hover:shadow-purple-800/40 transform hover:-translate-y-0.5'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 text-white'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
