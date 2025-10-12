"use client";

import Home from "@/sections/Home";
import AboutSlider from "@/sections/AboutSlider"; // новый компонент
import Contacts from "@/sections/Contact";

export default function Page() {
  return (
    <>
      <Home />
      <AboutSlider />
      <Contacts />
    </>
  );
}
