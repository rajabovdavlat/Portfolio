"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";
import { projectsText } from "@/translations/projects";

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const t = projectsText[language];

  const projects = [
    {
      title: t.portfolioTitle,
      desc: t.portfolioDesc,
      img: "/portfolio1.jpg",
      tech: ["Tailwind", "React"],
      github: "https://github.com/rajabovdavlat/style.Loom",
      live: "https://style-loom-oial.vercel.app/",
    },
    {
      title: t.recipeTitle,
      desc: t.recipeDesc,
      img: "/portfolio2.jpg",
      tech: ["React", "Css"],
      github: "https://github.com/rajabovdavlat/homework8.9",
      live: "https://homework8-9-65tl.vercel.app/",
    },
    {
      title: t.loginTitle,
      desc: t.loginDesc,
      img: "/portfolio3.jpg",
      tech: ["React", "Tailwind"],
      github: "https://github.com/rajabovdavlat/loginRegistor",
      live: "https://login-ds2l.vercel.app/login",
    },
  ];

  return (
    <section
      id='projects'
      className='min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-20 flex flex-col items-center'
    >
      <h2 className='text-4xl md:text-5xl font-bold mb-4 text-center'>
        {t.title}
      </h2>
      <p className='text-gray-400 text-center mb-12'>{t.description}</p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full'>
        {projects.map((p, index) => (
          <motion.div
            key={index}
            className='bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:shadow-xl transition-all duration-300'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className='relative group'>
              <Image
                src={p.img}
                alt={p.title}
                width={600}
                height={400}
                className='object-cover w-full h-56 transition-transform duration-500 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4'>
                <a
                  href={p.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 bg-white/10 hover:bg-white/20 rounded-full transition'
                >
                  <Github className='w-5 h-5 text-white' />
                </a>
                <a
                  href={p.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 bg-[#00bfa6] hover:bg-[#00ffc3] rounded-full transition'
                >
                  <ExternalLink className='w-5 h-5 text-black' />
                </a>
              </div>
            </div>

            <div className='p-5'>
              <h3 className='text-xl font-semibold mb-2'>{p.title}</h3>
              <p className='text-gray-300 text-sm mb-4'>{p.desc}</p>

              <div className='flex flex-wrap gap-2'>
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className='text-xs bg-white/10 px-3 py-1 rounded-full border border-white/10'
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
