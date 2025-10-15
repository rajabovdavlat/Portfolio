"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaVuejs,
  FaMobileAlt,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiRedux, SiFramer } from "react-icons/si";
import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";
import { skillsText } from "@/translations/skills";

export default function Skills() {
  const { language } = useContext(LanguageContext);
  const t = skillsText[language];

  const categories = [
    {
      title: t.frontend,
      color: "from-sky-400 to-blue-500",
      skills: [
        {
          name: "React JS",
          level: 70,
          icon: <FaReact className='text-[#61DBFB]' />,
        },
        {
          name: "JavaScript",
          level: 50,
          icon: <FaJsSquare className='text-[#F7DF1E]' />,
        },
        {
          name: "TypeScript",
          level: 50,
          icon: <SiTypescript className='text-[#3178C6]' />,
        },
        {
          name: "HTML",
          level: 80,
          icon: <FaHtml5 className='text-[#E44D26]' />,
        },
        {
          name: "CSS",
          level: 80,
          icon: <FaCss3Alt className='text-[#264DE4]' />,
        },
        {
          name: "SCSS",
          level: 70,
          icon: <FaSass className='text-[#CD6799]' />,
        },
        {
          name: "Tailwind CSS",
          level: 80,
          icon: <SiTailwindcss className='text-[#38BDF8]' />,
        },
        {
          name: "Vue",
          level: 40,
          icon: <FaVuejs className='text-[#42B883]' />,
        },
      ],
    },
    {
      title: t.tools,
      color: "from-purple-400 to-pink-500",
      skills: [
        {
          name: "Redux Toolkit",
          level: 40,
          icon: <SiRedux className='text-[#764ABC]' />,
        },
        {
          name: "Framer Motion",
          level: 30,
          icon: <SiFramer className='text-[#00BFA6]' />,
        },
        {
          name: "React Native",
          level: 30,
          icon: <FaMobileAlt className='text-[#61DBFB]' />,
        },
      ],
    },
  ];

  return (
    <section
      id='skills'
      className='min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white px-6 py-20 flex flex-col items-center'
    >
      <h2 className='text-4xl md:text-5xl font-bold mb-4 text-center'>
        {t.title}
      </h2>
      <p className='text-gray-300 text-center mb-12'>{t.description}</p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full'>
        {categories.map((category, index) => (
          <div
            key={index}
            className='bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg hover:shadow-xl transition'
          >
            <h3 className='text-2xl font-semibold mb-6 text-center'>
              {category.title}
            </h3>

            <div className='space-y-4'>
              {category.skills.map((skill, i) => (
                <div key={i}>
                  <div className='flex justify-between items-center mb-1'>
                    <div className='flex items-center gap-2'>
                      <span className='text-xl'>{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                    <span className='text-sm text-gray-300'>
                      {skill.level}%
                    </span>
                  </div>
                  <div className='w-full bg-white/20 h-3 rounded-full overflow-hidden'>
                    <motion.div
                      className={`h-3 bg-gradient-to-r ${category.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-wrap justify-center gap-4 mt-12'>
        {categories
          .flatMap((c) => c.skills)
          .map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className='bg-white/10 px-4 py-2 rounded-xl border border-white/10 text-sm flex items-center gap-2'
            >
              {skill.icon}
              <span>{skill.name}</span>
            </motion.div>
          ))}
      </div>
    </section>
  );
}
