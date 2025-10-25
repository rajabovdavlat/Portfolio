"use client";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  const title = "Get In Touch";
  const description =
    "I'm always interested in new opportunities and interesting projects. Let's discuss how we can work together!";
  const formTitle = "Send me a message";
  const infoTitle = "Let's connect";
  const infoText =
    "I'm currently available for freelance work and full-time opportunities. Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.";

  return (
    <motion.section
      id='contact'
      className='flex flex-col justify-center items-center bg-black/90np text-white px-6 md:px-12 pt-24 pb-16'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading*/}
      <div className='text-center mb-12'>
        <h2 className='text-4xl md:text-5xl font-bold mb-3 text-white'>
          {title}
        </h2>
        <div className='h-1 w-24 bg-[#7e57c2] mx-auto mb-6 rounded-full' />
        <p className='text-gray-400 max-w-2xl mx-auto'>{description}</p>
      </div>

      {/* Content grid */}
      <div className='grid md:grid-cols-2 gap-12 w-full max-w-6xl'>
        {/* Левая часть — форма */}
        <div className='bg-[#0e0e11] border border-[#1c1c22] rounded-2xl p-8 shadow-lg'>
          <h3 className='text-xl font-semibold mb-6 text-white'>{formTitle}</h3>
          <ContactForm />
        </div>

        {/* The right side is contacts. */}
        <div className='flex flex-col justify-between'>
          <div>
            <h3 className='text-xl font-semibold mb-4 text-white'>
              {infoTitle}
            </h3>
            <p className='text-gray-400 mb-8 leading-relaxed'>{infoText}</p>

            {/* Email */}
            <div className='flex items-center gap-4 bg-[#0e0e11] border border-[#1c1c22] rounded-xl p-5 mb-4 transition hover:border-[#7e57c2]'>
              <Mail className='text-[#7e57c2]' size={22} />
              <div>
                <p className='font-medium text-white'>Email</p>
                <a
                  href='mailto:dayvkodit@gmail.com'
                  className='text-gray-400 hover:text-[#7e57c2]'
                >
                  dayvkodit@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className='flex items-center gap-4 bg-[#0e0e11] border border-[#1c1c22] rounded-xl p-5 mb-4 transition hover:border-[#7e57c2]'>
              <Phone className='text-[#7e57c2]' size={22} />
              <div>
                <p className='font-medium text-white'>Phone</p>
                <a
                  href='tel:+998947544044'
                  className='text-gray-400 hover:text-[#7e57c2]'
                >
                  +998 94 754 40 44
                </a>
              </div>
            </div>

            {/* Location */}
            <div className='flex items-center gap-4 bg-[#0e0e11] border border-[#1c1c22] rounded-xl p-5 transition hover:border-[#7e57c2]'>
              <MapPin className='text-[#7e57c2]' size={22} />
              <div>
                <p className='font-medium text-white'>Location</p>
                <p className='text-gray-400'>Fergana, Uzbekistan</p>
              </div>
            </div>
          </div>

          {/* Social media */}
          <div className='mt-10 flex gap-4'>
            <a
              href='https://github.com/'
              target='_blank'
              className='p-3 bg-[#0e0e11] border border-[#1c1c22] rounded-lg hover:border-[#7e57c2] transition'
              rel='noreferrer'
            >
              <Github className='text-gray-300 hover:text-[#7e57c2]' />
            </a>
            <a
              href='https://linkedin.com/'
              target='_blank'
              className='p-3 bg-[#0e0e11] border border-[#1c1c22] rounded-lg hover:border-[#7e57c2] transition'
              rel='noreferrer'
            >
              <Linkedin className='text-gray-300 hover:text-[#7e57c2]' />
            </a>
            <a
              href='https://instagram.com/'
              target='_blank'
              className='p-3 bg-[#0e0e11] border border-[#1c1c22] rounded-lg hover:border-[#7e57c2] transition'
              rel='noreferrer'
            >
              <Instagram className='text-gray-300 hover:text-[#7e57c2]' />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
