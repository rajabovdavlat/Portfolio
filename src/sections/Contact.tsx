"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";
import { contactText } from "@/translations/contact";

export default function Contact() {
  const { language } = useContext(LanguageContext);
  const t = contactText[language];

  return (
    <motion.section
      id='contact'
      className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6 md:px-12 py-20'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className='text-4xl md:text-5xl font-bold mb-6 text-center'>
        {t.title}
      </h2>
      <p className='text-gray-400 text-center max-w-2xl mb-12'>
        {t.description}
      </p>

      <div className='grid md:grid-cols-2 gap-10 w-full max-w-5xl'>
        {/* Contact Form */}
        <div className='bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-lg'>
          <form className='space-y-4'>
            <div className='grid md:grid-cols-2 gap-4'>
              <input
                type='text'
                placeholder={t.firstName}
                className='w-full p-3 rounded-md bg-black/40 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00ffc3]'
              />
              <input
                type='text'
                placeholder={t.lastName}
                className='w-full p-3 rounded-md bg-black/40 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00ffc3]'
              />
            </div>
            <input
              type='email'
              placeholder={t.email}
              className='w-full p-3 rounded-md bg-black/40 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00ffc3]'
            />
            <input
              type='text'
              placeholder={t.subject}
              className='w-full p-3 rounded-md bg-black/40 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00ffc3]'
            />
            <textarea
              placeholder={t.message}
              rows={5}
              className='w-full p-3 rounded-md bg-black/40 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00ffc3]'
            ></textarea>
            <button
              type='submit'
              className='w-full py-3 rounded-md bg-gradient-to-r from-[#00bfa6] to-[#00ffc3] text-black font-semibold hover:scale-[1.02] transition-transform'
            >
              {t.send}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className='space-y-6'>
          <div className='bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-md'>
            <div className='flex items-center gap-4'>
              <Mail className='text-[#00ffc3]' size={24} />
              <div>
                <p className='font-semibold'>{t.emailTitle}</p>
                <a
                  href='mailto:dayvkodit@gmail.com'
                  className='text-gray-300 hover:text-[#00ffc3]'
                >
                  dayvkodit@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className='bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-md'>
            <div className='flex items-center gap-4'>
              <Phone className='text-[#00ffc3]' size={24} />
              <div>
                <p className='font-semibold'>{t.phoneTitle}</p>
                <a
                  href='tel:+998947544044'
                  className='text-gray-300 hover:text-[#00ffc3]'
                >
                  +998 94 754 40 44
                </a>
              </div>
            </div>
          </div>

          <div className='bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-md'>
            <div className='flex items-center gap-4'>
              <MapPin className='text-[#00ffc3]' size={24} />
              <div>
                <p className='font-semibold'>{t.locationTitle}</p>
                <p className='text-gray-300'>{t.locationValue}</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className='flex gap-5 mt-6'>
            <a
              href='https://github.com/'
              target='_blank'
              className='p-3 rounded-full bg-white/10 hover:bg-[#00ffc3]/20 transition'
            >
              <Github />
            </a>
            <a
              href='https://linkedin.com/'
              target='_blank'
              className='p-3 rounded-full bg-white/10 hover:bg-[#00ffc3]/20 transition'
            >
              <Linkedin />
            </a>
            <a
              href='https://instagram.com/'
              target='_blank'
              className='p-3 rounded-full bg-white/10 hover:bg-[#00ffc3]/20 transition'
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
