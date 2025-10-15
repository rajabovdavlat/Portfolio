"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";
import { aboutText } from "@/translations/about";
import { Code, Lightbulb, Users, TrendingUp } from "lucide-react";

export default function About() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].about; // 👈 вот это и есть перевод

  const leftCards = text.leftCards;
  const rightCards = text.rightCards.map((card) => ({
    ...card,
    icon:
      card.title === "Clean Code" ||
      card.title === "Чистый код" ||
      card.title === "Toza kod" ? (
        <Code size={36} className='text-blue-400' />
      ) : card.title === "Innovation" ||
        card.title === "Инновации" ||
        card.title === "Innovatsiya" ? (
        <Lightbulb size={36} className='text-teal-300' />
      ) : card.title === "Collaboration" ||
        card.title === "Сотрудничество" ||
        card.title === "Hamkorlik" ? (
        <Users size={36} className='text-purple-400' />
      ) : (
        <TrendingUp size={36} className='text-pink-400' />
      ),
  }));
  const highlightText = (str: string) => {
    const keywords = ["React", "Next.js", "JavaScript"];
    const parts = str.split(new RegExp(`(${keywords.join("|")})`, "gi"));

    return parts.map((part, i) =>
      keywords.includes(part) ? (
        <span
          key={i}
          className='text-[#7ED67A] font-semibold drop-shadow-[0_0_3px_#7ED67A]'
        >
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

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
        <motion.div
          className='flex-1 text-left'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-teal-300 to-purple-500 text-transparent bg-clip-text'>
            {text.heading}
          </h2>

          <p className='text-gray-300 leading-relaxed text-base sm:text-lg mb-4'>
            {highlightText(text.description1)}
          </p>
          <p className='text-gray-300 leading-relaxed text-base sm:text-lg mb-4'>
            {highlightText(text.description2)}
          </p>
          <p className='text-gray-300 leading-relaxed text-base sm:text-lg mb-4'>
            {highlightText(text.description3)}
          </p>

          <motion.div className='flex flex-wrap gap-3 mt-4'>
            {leftCards.map((title, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className='bg-green-800/80 border border-green-500 rounded-xl px-3 sm:px-4 py-2 text-white text-sm sm:text-base font-semibold shadow-md cursor-default'
              >
                {title}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className='flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {rightCards.map((card, i) => (
            <motion.div
              key={i}
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
