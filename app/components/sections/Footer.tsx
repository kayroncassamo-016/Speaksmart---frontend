"use client";
import { joinWaitlist } from "@/app/services/waitlistService";
import { getApiErrorMessage } from "@/app/services/api"
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef, FormEvent } from "react";
import Image from "next/image";
import logo from "../logo/speaksmart.png";

// const footerLinks = {
//   Product: ["How It Works", "Features", "Pricing", ],
//   Company: ["About", "Blog", "Careers", "Press"],
//   Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
// };

const footerLinks = {
  Product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Early Access", href: "#waitlist" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const  [loading, setLoading] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  if (isSubmitting) return

  setIsSubmitting(true)
  setErrorMessage("")
  setLoading(true)
  try {
    await joinWaitlist(email)
    setSubmitted(true)
    setEmail("")
  } catch (error) {
    setErrorMessage(getApiErrorMessage(error))
  } finally {
    setIsSubmitting(false)
    setLoading(false)
  }
}


  return (
    <footer ref={ref} 
    className="relative bg-[#0c0c0e] border-t border-white/[0.06] overflow-hidden"
     id="waitlist">
      {/* Glow */}
      {/* <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(249,115,22,0.07) 0%, transparent 65%)" }}
      /> */}

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 py-20">

        {/* Waitlist block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-14 border-b border-white/[0.06]"
        >
          <div className="max-w-[420px]">
            <p className="mt-8 text-[#f97316] text-[0.7rem] font-bold tracking-[0.18em] uppercase mb-2">
              Early Access
            </p>
            <h3 className="text-white text-[1.6rem] font-extrabold tracking-tight leading-[1.15] mb-2">
              Join the waitlist
            </h3>
            <p className="text-white/35 text-[0.85rem] font-light leading-relaxed">
              Be the first to know when we launch. No spam, just one email when it's ready.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:min-w-[400px]"
          >
            {!submitted ? (
              <>
               <div className="flex flex-col gap-2">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-[#1a1a1e] border border-white/[0.08] focus:border-[#f97316]/50 focus:outline-none
                   text-white placeholder:text-white/22 text-[0.88rem] px-4 py-3 rounded-xl transition-colors"
                />
          
                {errorMessage && (
                  <p role="alert" className="text-red-400 text-sm font-bold">
                    {errorMessage}
                  </p>
                )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-40 h-13 flex-shrink-0 bg-[#f97316] hover:bg-[#ea6c0a] text-white 
                  font-semibold text-[0.88rem] px-6 py-3 
                  rounded-xl transition-all 
                  hover:shadow-[0_8px_24px_rgba(249,115,22,0.35)] 
                  hover:-translate-y-0.5 disabled:opacity-60 
                  disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 
                  
                  "Joining..."
                  
                  : "Join waitlist"}
                </button>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 bg-[#f97316]/10 border border-[#f97316]/20 px-5 py-3 rounded-xl"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-[#f97316] text-[0.88rem] font-medium">
                  You're on the list! We'll be in touch.
                </span>
              </motion.div>
            )}

          
          </form>
        </motion.div>

        {/* Links grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-b border-white/[0.06]"
        >
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
                 
            <div className="flex items-center gap-2.5 space-y-1 ">
              <Image src={logo}
                alt="SpeakSmart Logo"
                width={40} 
                height={10} 
                className="invert object-cover" />

               <span className="text-white text-[0.95rem] font-semibold tracking-tight">
                SpeakSmart
                </span>
            </div>
            <p className="text-white/30 text-[0.82rem] font-light leading-relaxed max-w-[200px]">
              Practice smarter. Speak smarter.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, items]) => (
            <div key={group}>
              <p className="text-white/50 text-[0.72rem] font-semibold tracking-[0.12em] uppercase mb-4">
                {group}
              </p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-white/30 text-[0.83rem] font-light hover:text-white/70 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-white/20 text-[0.76rem]"
        >
          <span>© {new Date().getFullYear()} SpeakSmart. All rights reserved.</span>
          <div className="flex items-center gap-5">
            {["Twitter", "LinkedIn", "GitHub"].map((s) => (
              <a key={s} href="#" className="hover:text-white/50 transition-colors">
                {s}
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  );
}