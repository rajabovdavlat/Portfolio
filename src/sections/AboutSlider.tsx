"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import { ArrowRight, ArrowLeft } from "lucide-react";

const sections = [
  { id: 0, component: <About /> },
  { id: 1, component: <Skills /> },
  { id: 2, component: <Projects /> },
];

export default function AboutSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % sections.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + sections.length) % sections.length);

  return (
    <section
      id='about-slider'
      className='relative min-h-screen flex items-center justify-center overflow-hidden '
    >
      {/* Стеклянная рамка */}
      <div className='relative w-11/12 md:w-4/5 lg:w-3/4 h-[85vh] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_0_25px_-5px_rgba(255,255,255,0.3)] overflow-hidden flex items-center justify-center'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className='w-full h-full overflow-auto scrollbar-hide'
          >
            {sections[index].component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Кнопки переключения */}
      <button
        onClick={prev}
        className='absolute left-6 md:left-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 transition'
      >
        <ArrowLeft className='w-6 h-6 text-white' />
      </button>

      <button
        onClick={next}
        className='absolute right-6 md:right-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 transition'
      >
        <ArrowRight className='w-6 h-6 text-white' />
      </button>

      {/* Индикаторы внизу */}
      <div className='absolute bottom-6 flex gap-2'>
        {sections.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-green-400 scale-110" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
