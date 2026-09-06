"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const problems = [
  "Apps teach vocabulary, but you freeze in real conversations",
  "You understand English but struggle to speak confidently",
  "Generic lessons don't match your career or life situations",
  "No real feedback on pronunciation, accent, or fluency",
];

const solutions = [
  "Practice real scenarios such as interviews, meetings or social events",
  "Build speaking confidence with adaptive AI coaching",
  "Personalized training for your goals",
  "Real-time pronunciation and fluency analysis",
];

export function AppsProblem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative bg-[#0c0c0e] py-28 px-6 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.08) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-[#f97316] text-[0.7rem] font-bold tracking-[0.18em] uppercase mb-3">
            The Problem
          </p>
          <h2 className="text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold text-white leading-[1.1] tracking-[-0.025em] max-w-[640px] mx-auto mb-4">
            The Problem With <span className="text-[#f97316]">Traditional Apps</span>
          </h2>
          <p className="text-white/40 text-[0.95rem] sm:text-xl max-w-[520px] mx-auto font-light leading-[1.75]">
            You've tried Duolingo. You've tried Babbel. You know English. But when it's time to SPEAK... you freeze.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04] rounded-[18px] overflow-hidden border border-white/[0.05]">

          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#0f0f12] p-8"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                <X className="w-4 h-4 text-red-400" />
              </div>
              <h3 className="text-white font-semibold text-[1rem] tracking-tight">The Old Way</h3>
            </div>

            <ul className="flex flex-col gap-4">
              {problems.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-3"
                >
                  <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-1.5" />
                  <span className="text-white/40 text-[0.85rem] sm:text-[1.15rem] font-light leading-relaxed">{p}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#f97316]/[0.025] p-8 relative overflow-hidden"
          >
            {/* top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f97316] to-transparent" />

            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl bg-[#f97316]/10 border border-[#f97316]/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-[#f97316]" />
              </div>
              <h3 className="text-white font-semibold text-[1rem] tracking-tight">The SpeakSmart Way</h3>
            </div>

            <ul className="flex flex-col gap-4">
              {solutions.map((s, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-4 h-4 text-[#f97316] flex-shrink-0 mt-0.5" />
                  <span className="text-white/60 text-[0.85rem] sm:text-[1.15rem] font-light leading-relaxed">{s}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}