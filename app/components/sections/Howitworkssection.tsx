"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="8" y1="22" x2="16" y2="22" />
      </svg>
    ),
    title: "Record your answer",
    description:
      "Hit record and answer like it's the real thing. "  +
      "Pure performance mode, just like a real conversation. The scenarios are random & designed to be challenging, so you can practice under pressure.",
  },
  {
    number: "02",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Get Instant Response",
    description:
      "AI provides immediate, actionable feedback on your answers after and during the conversation — no waiting, no ambiguity.",
  },
  {
    number: "03",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "AI Analyzes Everything",
    description:
      "Our AI agent transcribes and evaluates clarity, confidence, structure, and technical accuracy of all the answers during the conversation.",
  },
  {
    number: "04",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Get Your Score & Action Plan",
    description:
      "Receive a detailed performance score with strengths, weaknesses, and personalized tips to crush your next attempt.",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-[#0c0c0e] py-28 px-6 overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow */}
      <div className="absolute -left-32 top-1/3 w-72 h-72 rounded-full bg-[#f97316]/[0.08] blur-[96px] pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-[#f97316] text-[0.7rem] font-bold tracking-[0.18em] uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold text-white leading-[1.1] tracking-[-0.025em] max-w-[680px] mb-3">
            From nervous wreck to{" "}
            <span className="text-[#f97316]">confident</span>{" "}
            in 4 steps
          </h2>
          <p className="text-white/40 text-[0.95rem] max-w-[480px] font-light leading-[1.75]">
            Start speaking with confidence and accuracy in just 10 minutes a day.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04] rounded-[18px] overflow-hidden border border-white/[0.05]">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-[#0f0f12] p-9 hover:bg-[#141418] transition-colors duration-300 cursor-default overflow-hidden"
            >
              {/* Watermark number */}
              <span
                className="absolute top-5 right-6 text-[4.5rem] font-black leading-none select-none pointer-events-none transition-colors duration-300"
                style={{ color: "rgba(249,115,22,0.065)", fontFamily: "inherit" }}
              >
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-11 h-11 rounded-[12px] flex items-center justify-center mb-6 text-[#f97316] bg-[#f97316]/[0.09] border border-[#f97316]/[0.18] transition-transform duration-300 group-hover:scale-105">
                {step.icon}
              </div>

              {/* Badge */}
              <span className="inline-flex text-[0.65rem] font-bold tracking-[0.14em] uppercase px-2.5 py-0.5 rounded-full bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/15 mb-2.5">
                Step {step.number}
              </span>

              <h3 className="text-white font-semibold text-[1.05rem] mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-white/40 text-[0.85rem] leading-[1.7] font-light">
                {step.description}
              </p>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out bg-gradient-to-r from-[#f97316] to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* CTA link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#"
            className="group flex items-center gap-2 text-[0.85rem] text-white/22 hover:text-[#f97316] transition-colors duration-300"
          >
            See it in action
            <svg
              width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.2"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}