"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

import { useState, type FormEvent } from "react";
import { joinWaitlist } from "@/app/services/waitlistService";
import { getApiErrorMessage } from "@/app/services/api";


const AVATARS = [
  "https://i.pravatar.cc/40?u=pr1",
  "https://i.pravatar.cc/40?u=pr2",
  "https://i.pravatar.cc/40?u=pr3",
  "https://i.pravatar.cc/40?u=pr4",
  "https://i.pravatar.cc/40?u=pr5",
];

const APPS = ["Duolingo", "Busuu", "Elsa", "Babbel", "Memrise", "LingQ","Tandem"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item:Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

 
const [email, setEmail] = useState("");
const [submitted, setSubmitted] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
const [errorMessage, setErrorMessage] = useState("");

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (isSubmitting) return;

  setIsSubmitting(true);
  setErrorMessage("");

  try {
    await joinWaitlist(email);
    setSubmitted(true);
    setEmail("");
  } catch (error) {
    setErrorMessage(getApiErrorMessage(error));
  } finally {
    setIsSubmitting(false);
  }
};





  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const dots = Array.from({ length: 130 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      o: Math.random() * 0.3 + 0.06,
      s: Math.random() * 0.45 + 0.12,
    }));

    let frame: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.y -= d.s;
        if (d.y < 0) d.y = canvas.height;
        ctx.beginPath();
        ctx.arc(d.x, d.y, 1.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249,115,22,${d.o})`;
        ctx.fill();
      });
      frame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0c0c0e]">
      {/* Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.55 }}
      />

      {/* Radial glow */}
      {/* <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(249,115,22,0.13) 0%, transparent 65%)",
        }}
      /> */}

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-20"
      >
        {/* Badge */}
        <motion.div >
          <div className="inline-flex items-center gap-2 bg-[#f97316]/[0.08] border border-[#f97316]/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
            <span className="text-[#f97316] text-[0.72rem] font-semibold tracking-[0.15em] uppercase">
              Speak English confidently with SpeakSmart.
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-[clamp(2.8rem,5.5vw,5rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-white max-w-[820px] mb-5"
        >
          Stop learning English
          <br />
          <span className="text-[#f97316]">Start living it.</span>
          <br />
        </motion.h1>

        {/* Sub */}
        <motion.p
          className="text-white/40 text-[0.95rem] sm:text-xl md:text-2xl
           max-w-[460px] leading-[1.75] font-light mb-10 text-center"
        >
          Build your confidence, not just vocabulary with <span className="text-[#f97316] font-bold">SpeakSmart</span> app.
          <br className="hidden sm:block" />{" "}
          Stop second-guessing yourself and start trusting the English you already know.
        </motion.p>

        {/* CTAs */}
        {/* <motion.div  className="flex flex-wrap gap-2.5 justify-center mb-14">
          <button className="bg-[#f97316] text-white text-[0.9rem] font-semibold px-7 py-3 rounded-[11px] border-none cursor-pointer transition-all hover:bg-[#ea6c0a] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(249,115,22,0.38)]">
            Start Free Now
          </button>
          <button className="flex items-center gap-1.5 bg-transparent text-white/40 text-[0.9rem] px-[22px] py-3 rounded-[11px] border border-white/[0.09] cursor-pointer transition-all hover:border-white/20 hover:text-white/80">
            See Our Plans
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div> */}

        
        {/* Waitlist CTA */}
        <motion.div
         variants={item}
          className="w-full max-w-[460px] mb-12"
          id="join-list"
        >
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-1 bg-[#1a1a1e] border border-white/[0.12] focus:border-[#f97316]/60 focus:outline-none text-white placeholder:text-white/30 text-sm px-4 py-3.5 rounded-xl transition-colors"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="shrink-0 bg-[#f97316] text-white text-sm font-semibold px-6 py-3.5 rounded-xl cursor-pointer transition-all hover:bg-[#ea6c0a] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(249,115,22,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Joining..." : "Join the waitlist"}
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-3 bg-[#f97316]/10 border border-[#f97316]/20 px-5 py-3 rounded-xl">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-[#f97316] text-[0.88rem] font-medium">
                  You're on the list! We'll be in touch.
                </span>
            </div>
          )}

          {errorMessage && (
            <p role="alert" className="mt-3 text-sm text-red-400 font-bold">
              {errorMessage}
            </p>
          )}

          <p className="mt-3 text-center text-sm text-white/35">
            Get notified when SpeakSmart launches. No spam.
          </p>
        </motion.div>


        {/* Social proof */}
        <motion.div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="flex">
              {AVATARS.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`User ${i + 1}`}
                  width={30}
                  height={30}
                  className="w-[30px] h-[30px] rounded-full border-2 border-[#0c0c0e] object-cover -ml-2 first:ml-0"
                />
              ))}
            </div>
            <div>
              <div className="text-[#f97316] text-[0.75rem] tracking-[2px]">★★★★★</div>
              <div className="text-white/40 text-[0.78rem]">Loved by 20,000+ intermediate non-native speakers</div>
            </div>
          </div>

          <div className="mt-3 flex flex-col items-center gap-1.5">
            <span className="text-white/[0.18] text-[0.68rem] tracking-[0.14em] uppercase">
              People also tried with no success to perform better English on these apps:
            </span>
            <div className="py-4 flex flex-wrap justify-center gap-x-6">
              {APPS.map((c) => (
                <span key={c} className="text-white/[0.18] text-[11px]
                tracking-widest font-bold sm:text-[14px]">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0c0c0e] to-transparent pointer-events-none" />
    </section>
  );
}