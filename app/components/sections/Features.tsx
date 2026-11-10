"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Instant Feedback",
    description:
      "Get an instant breakdown of all your answers within seconds. Know right away what you should have spoken better.",
    tag: "Core",
    featured: true,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Performance Score (0–100)",
    description:
      "Scored on clarity, confidence, and technical precision. If you freezed or grammatically messed up, your score will reflect that "+
       
       " and you'll be able to track your  score numbers and watch them increase or decrease over time.",
    tag: "Analytics",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Real-World Scenarios",
    description:
      "Practice real and random situations such as job interviews, meetings "+
      "restaurants, networking, medical appointments, and more.",
    tag: "Questions",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Track Your Confidence",
    description:
      " Track your confidence, fluency, and reduction of hesitations" +
      " (“uh”, “um”) with clear scores over time. " +
      " See detailed progress charts and session history.",
    tag: "Progress",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Real-Time Dual Coaching",
    description:
      "Speak with a conversation partner while a " +
      "patient AI coach corrects and guides you at the same time, all in real time.",
    tag: "Coaching",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Hidden Transcript Mode",
    description:
      "You never see what you said thus forcing you to perform under real pressure, just like an actual conversation.",
    tag: "Mode",
  },
];

const stats = [
  { value: "12k+", label: "On the waitlist" },
  // { value: "95%", label: "Satisfaction" },
  { value: "4.6 ★", label: "Rating" },
  { value: "5+", label: "Countries" },
];

export function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} 
    className="relative bg-[#0c0c0e] py-28 px-6 overflow-hidden"
    id="features">
      {/* Glow */}
      <div className="absolute -right-40 top-1/4 w-96 h-96 rounded-full bg-[#f97316]/[0.05] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-[#f97316] text-[0.7rem] font-bold tracking-[0.18em] uppercase mb-3">
              Features
            </p>
            <h2 className="text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold text-white leading-[1.1] tracking-[-0.025em] max-w-[600px]">
              Everything you need to speak{" "}
              <span className="text-[#f97316]">confidently</span>
            </h2>
          </div>
          {/* <a
            href="#"
            className="flex-shrink-0 text-[0.82rem] text-white/22 border border-white/[0.07] px-[18px] py-2.5 rounded-[9px] hover:border-white/15 hover:text-white/50 transition-all self-start md:self-auto"
          >
            View all features →
          </a> */}
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04] rounded-[18px] overflow-hidden border border-white/[0.05]">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative p-7 transition-all duration-300 cursor-default overflow-hidden ${
                f.featured
                  ? "bg-[#f97316]/[0.025] hover:bg-[#f97316]/[0.05]"
                  : "bg-[#0f0f12] hover:bg-[#141418]"
              }`}
            >
              {/* Icon + tag row */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-[11px] flex items-center justify-center text-[#f97316] bg-[#f97316]/[0.09] border border-[#f97316]/[0.18] transition-transform duration-300 group-hover:scale-110">
                  {f.icon}
                </div>
                <span className="text-[0.63rem] font-semibold tracking-[0.14em] uppercase px-2.5 py-0.5 rounded-full bg-white/[0.04] text-white/22 border border-white/[0.07]">
                  {f.tag}
                </span>
              </div>

              <h3 className="text-white font-semibold text-[0.95rem] mb-2 tracking-tight leading-snug">
                {f.title}
              </h3>
              <p className="text-white/40 text-[0.82rem] sm:text-[1.15rem]
               leading-[1.7] font-light">
                {f.description}
              </p>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out bg-gradient-to-r from-[#f97316] to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="mt-14 flex flex-wrap justify-center gap-x-10 sm:gap-x-16 gap-y-6"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span className="text-[1.1rem] sm:text-[1.5rem] md:text-[1.9rem] lg:text-[2.3rem]
               font-extrabold text-white tracking-[-0.02em]">
                {s.value}
              </span>
              <span className="text-white/22 text-[0.75rem] sm:text-[1.2rem]">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}