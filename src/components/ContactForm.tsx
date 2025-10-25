"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_imnl9xf", 
        "template_fqyozy9", 
        form.current!,
        "4aC1sbzZWxq_IZg64" 
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error("Error:", error);
          alert("❌ Failed to send message.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-full max-w-md bg-transparent p-6 rounded-2xl'>
        <h2 className='text-2xl font-semibold text-white text-center mb-5'>
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>
          <input
            type='text'
            name='name'
            placeholder='Your name'
            required
            className='w-full border border-[#333] bg-transparent text-white rounded-lg px-4 py-2 focus:outline-none focus:border-[#00bfa6] transition-all duration-300'
          />

          <input
            type='email'
            name='email'
            placeholder='Your email'
            required
            className='w-full border border-[#333] bg-transparent text-white rounded-lg px-4 py-2 focus:outline-none focus:border-[#00bfa6] transition-all duration-300'
          />

          <input
            type='text'
            name='title'
            placeholder='Subject'
            required
            className='w-full border border-[#333] bg-transparent text-white rounded-lg px-4 py-2 focus:outline-none focus:border-[#00bfa6] transition-all duration-300'
          />

          <textarea
            name='message'
            placeholder='Your message...'
            required
            rows={4}
            className='w-full border border-[#333] bg-transparent text-white rounded-lg px-4 py-2 resize-none focus:outline-none focus:border-[#00bfa6] transition-all duration-300'
          ></textarea>

          <button
            type='submit'
            disabled={isSending}
            className={`${
              isSending
                ? "bg-[#007f6e] cursor-not-allowed"
                : "bg-[#00bfa6] hover:bg-[#00e0c3]"
            } text-white py-2.5 rounded-lg font-semibold text-base transition-all duration-300 flex items-center justify-center`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
