

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const svgBase = {
  width: "auto",
  maxWidth: "100%",
  display: "block",
  overflow: "visible",
} as const;

const logos = [
  {
    name: "Product Hunt",
    svg: (
      <svg viewBox="0 0 115 28" fill="currentColor" style={{ ...svgBase, height: 22 }}>
        <circle cx="14" cy="14" r="12" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 8.5h5.5a4.5 4.5 0 0 1 0 9H10V8.5zm5.5 6.5a2 2 0 0 0 0-4H12.5v4H15.5z" />
        <text x="31" y="19" fontSize="13" fontWeight="700" fontFamily="system-ui">Product Hunt</text>
      </svg>
    ),
  },
  // {
  //   name: "Forbes",
  //   svg: (
  //     <svg viewBox="0 0 66 26" fill="currentColor" style={{ ...svgBase, height: 25 }}>
  //       <text x="0" y="21" fontSize="22" fontWeight="800" fontFamily="Georgia,serif" letterSpacing="-0.5">Forbes</text>
  //     </svg>
  //   ),
  // },
  {
    name: "TechCrunch",
    svg: (
      <svg viewBox="0 0 98 26" fill="currentColor" style={{ ...svgBase, height: 22 }}>
        <text x="0" y="19" fontSize="13.5" fontWeight="800" fontFamily="system-ui">TC</text>
        <text x="22" y="19" fontSize="13.5" fontWeight="500" fontFamily="system-ui">TechCrunch</text>
      </svg>
    ),
  },
  {
    name: "Business Insider",
    svg: (
      <svg viewBox="0 0 64 28" fill="currentColor" style={{ ...svgBase, height: 28 }}>
        <text x="0" y="14" fontSize="10.5" fontWeight="800" fontFamily="system-ui" letterSpacing="0.6">BUSINESS</text>
        <text x="0" y="26" fontSize="9" fontWeight="400" fontFamily="system-ui" letterSpacing="1.8">INSIDER</text>
      </svg>
    ),
  },
  // {
  //   name: "Silicon Valley Business Journal",
  //   svg: (
  //     <svg viewBox="0 0 106 28" fill="currentColor" style={{ ...svgBase, height: 28 }}>
  //       <text x="0" y="14" fontSize="9" fontWeight="800" fontFamily="system-ui" letterSpacing="1.2">SILICON VALLEY</text>
  //       <text x="0" y="26" fontSize="9" fontWeight="400" fontFamily="system-ui" letterSpacing="1">BUSINESS JOURNAL</text>
  //     </svg>
  //   ),
  // },
  {
    name: "Udacity",
    svg: (
      <svg viewBox="0 0 70 26" fill="currentColor" style={{ ...svgBase, height: 22 }}>
        <text x="0" y="19" fontSize="13" fontWeight="600" fontFamily="system-ui" letterSpacing="2">UDACITY</text>
      </svg>
    ),
  },
  // {
  //   name: "Y Combinator",
  //   svg: (
  //     <svg viewBox="0 0 112 28" fill="currentColor" style={{ ...svgBase, height: 22 }}>
  //       <rect x="0" y="3" width="21" height="21" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
  //       <text x="4" y="19" fontSize="12" fontWeight="800" fontFamily="system-ui">YC</text>
  //       <text x="28" y="19" fontSize="12" fontWeight="600" fontFamily="system-ui">Y Combinator</text>
  //     </svg>
  //   ),
  // },
];

export function PreSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      className="relative bg-[#0c0c0e] py-12 md:py-14 px-4 sm:px-6 overflow-hidden"
    >
      {/* Top & bottom dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="max-w-[960px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-[0.68rem] font-bold tracking-[0.22em] uppercase text-white/[0.18] mb-8"
        >
          Featured & trusted by
        </motion.p>

        {/* Cartões de tamanho idêntico: 2 (mobile) → 4 (tablet) → 7 (desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
              className="flex h-16 items-center justify-center px-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-white/40 hover:text-white/70 hover:border-white/[0.14] transition-colors duration-300 cursor-default select-none w-[calc(50%-0.375rem)] sm:w-[calc(25%-0.5625rem)] lg:w-[calc((100%-4.5rem)/7)]"
              title={logo.name}
            >
              {logo.svg}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}