// src/components/MatrixIntro.tsx
"use client";
import { useEffect, useRef, useState } from "react";

export default function MatrixIntro() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const letters = "01";
    const fontSize = 20;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array(columns).fill(0);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const alpha = Math.min(1, 0.1 + y / height);
        const size = fontSize + Math.min(10, (y / height) * 10);
        ctx.fillStyle = `rgba(0, 255, 70, ${alpha * 0.5})`;
        ctx.font = `${size}px monospace`;
        ctx.fillText(text, x, y);

        drops[i] += 0.5;

        if (drops[i] * fontSize > height) {
          drops[i] = 0;
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    // Показываем эффект только 1.5 секунды
    const timer = setTimeout(() => {
      setShow(false);
    }, 1500);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!show) return null;

  return (
    <canvas
      ref={canvasRef}
      className='fixed top-0 left-0 w-full h-full z-50 pointer-events-none'
    />
  );
}
