"use client";
import { motion } from "framer-motion";
import { Code, Lightbulb, Users, TrendingUp } from "lucide-react";

export default function About() {
  const rightCards = [
    {
      icon: <Code size={36} className='text-blue-400' />,
      title: "Clean Code",
      text: "Writing maintainable, scalable, and efficient code that stands the test of time.",
    },
    {
      icon: <Lightbulb size={36} className='text-teal-300' />,
      title: "Innovation",
      text: "Always exploring new technologies and creative solutions to complex problems.",
    },
    {
      icon: <Users size={36} className='text-purple-400' />,
      title: "Collaboration",
      text: "Working effectively with teams to deliver exceptional user experiences.",
    },
    {
      icon: <TrendingUp size={36} className='text-pink-400' />,
      title: "Dedication",
      text: "Committed to continuous learning and staying current with industry trends.",
    },
  ];

  const leftCards = [
    "Problem Solver",
    "Team Player",
    "Quick Learner",
    "Detail Oriented",
  ];

  return (
    <motion.section
      id='about'
      className='min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white px-4 sm:px-6 md:px-12 py-12'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className='max-w-6xl w-full flex flex-col md:flex-row items-start gap-12'>
        {/* Левая часть: текст + маленькие карточки */}
        <motion.div
          className='flex-1 text-left'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-teal-300 to-purple-500 text-transparent bg-clip-text'>
            About Me
          </h2>

          <p className='text-gray-300 leading-relaxed text-base sm:text-lg mb-4'>
            Passionate about creating modern and user-friendly digital products.
            My journey in frontend began with curiosity — I wanted to understand
            how websites work, and over time, it turned into a true passion.
          </p>

          <p className='text-gray-300 leading-relaxed text-base sm:text-lg mb-4'>
            I specialize in{" "}
            <span className='text-white font-medium'>React</span> and{" "}
            <span className='text-white font-medium'>JavaScript</span>,
            currently learning{" "}
            <span className='text-white font-medium'>Next.js</span>, and
            constantly growing through real projects and teamwork.
          </p>

          <p className='text-gray-300 leading-relaxed text-base sm:text-lg mb-4'>
            Driven by <span className='text-white font-medium'>discipline</span>
            , <span className='text-white font-medium'>growth</span>, and{" "}
            <span className='text-white font-medium'>attention to detail</span>{" "}
            — I love bringing things to perfection.
          </p>

          {/* Маленькие карточки под текстом */}
          <motion.div
            className='flex flex-wrap gap-3 mt-4'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {leftCards.map((title, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className='bg-green-800/80 border border-green-500 rounded-xl px-3 sm:px-4 py-2 text-white text-sm sm:text-base font-semibold shadow-md cursor-default'
              >
                {title}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Правая часть: большие карточки с иконками */}
        <motion.div
          className='flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {rightCards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className='bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)] transition-all duration-300'
            >
              <div className='mb-4 flex items-center justify-center sm:justify-start'>
                {card.icon}
              </div>
              <h3 className='text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-white'>
                {card.title}
              </h3>
              <p className='text-gray-400 text-xs sm:text-sm'>{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
