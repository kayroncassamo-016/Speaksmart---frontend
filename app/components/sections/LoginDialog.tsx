"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import logo from "../logo/speaksmart.png";

interface LoginDialogProps {
   open: boolean;
   onClose: React.Dispatch<React.SetStateAction<boolean>>;
   
}

export function LoginDialog({ open, onClose }: LoginDialogProps) {
  const [email, setEmail] = useState("");

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={()=> onClose(false)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Dialog */}
          <motion.div
            key="dialog"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-70 flex items-center justify-center px-4"
          >
            <div className="relative w-full max-w-[400px] bg-[#111114] border border-white/[0.08] rounded-2xl p-8 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">

              {/* Close */}
              <button
                onClick={()=> onClose(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-white/30 hover:text-white/70 hover:bg-white/[0.06] transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>

              {/* Logo */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-2.5">
                  {/* <div className="w-8 h-8 rounded-[9px] bg-[#f97316]/[0.12] border border-[#f97316]/[0.22] flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#f97316" strokeWidth="2"/>
                      <path d="M8 12h8M12 8v8" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div> */}
                   <Image src={logo}
                        alt="SpeakSmart Logo"
                        width={40} 
                        height={10} 
                        className="invert object-cover" />
                  <span className="text-white font-semibold text-[0.95rem] tracking-tight">SpeakSmart</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-white text-[1.4rem] font-bold text-center tracking-tight mb-2">
                Log in or sign up
              </h2>
              <p className="text-white/40 text-[0.85rem] text-center font-light leading-relaxed mb-7">
                Practice smarter. Land your dream job faster.
              </p>

              {/* Social buttons */}
              <div className="flex flex-col gap-3 mb-5">
                <button className="flex items-center justify-center gap-3 w-full bg-[#1a1a1e] border border-white/[0.08] hover:border-white/[0.15] hover:bg-[#1f1f24] text-white text-[0.88rem] font-medium py-3 rounded-xl transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </button>

                <button className="flex items-center justify-center gap-3 w-full bg-[#1a1a1e] border border-white/[0.08] hover:border-white/[0.15] hover:bg-[#1f1f24] text-white text-[0.88rem] font-medium py-3 rounded-xl transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Continue with Apple
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 h-px bg-white/[0.07]" />
                <span className="text-white/25 text-[0.72rem] tracking-widest uppercase">or</span>
                <div className="flex-1 h-px bg-white/[0.07]" />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1a1a1e] border border-white/[0.08] focus:border-[#f97316]/50 focus:outline-none text-white placeholder:text-white/25 text-[0.88rem] px-4 py-3 rounded-xl transition-colors"
                />
                <button className="w-full bg-[#f97316] hover:bg-[#ea6c0a] text-white font-semibold text-[0.9rem] py-3 rounded-xl transition-all hover:shadow-[0_8px_24px_rgba(249,115,22,0.35)] hover:-translate-y-0.5">
                  Continue
                </button>
              </div>

              {/* Footer note */}
              <p className="text-white/20 text-[0.72rem] text-center mt-6 leading-relaxed">
                By continuing, you agree to our{" "}
                <a href="#" className="text-white/40 hover:text-white/60 underline underline-offset-2 transition-colors">Terms</a>
                {" "}and{" "}
                <a href="#" className="text-white/40 hover:text-white/60 underline underline-offset-2 transition-colors">Privacy Policy</a>.
              </p>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}