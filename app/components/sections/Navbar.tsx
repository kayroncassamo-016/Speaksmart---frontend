

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LoginDialog } from "./LoginDialog";
import Image from "next/image";
import logo from "../logo/speaksmart.png";

const links = [
  { label: "How It Works", id: "#how-it-works" },
  { label: "Features", id: "#features" },
  { label: "Pricing", id: "#pricing" },
  { label: "Early Access", id: "#waitlist" },
];



export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openLoginDialog, setOpenLoginDialog] = useState(false);

  return (
    <>
      <LoginDialog open={openLoginDialog} onClose={setOpenLoginDialog}/>

      <nav className="fixed top-0 left-0 right-0 z-20 flex items-center backdrop-blur-lg
    justify-between px-8 py-3.5 border-b border-white/[0.05] bg-[#0c0c0e]">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <Image src={logo}
            alt="SpeakSmart Logo"
            width={40} 
            height={10} 
            className="invert object-cover" />

        <span className="text-white text-[0.95rem] font-semibold tracking-tight">
          SpeakSmart
        </span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((l) => (
            <li key={l.id}>
              <a href={l.id} className="text-[0.85rem] text-white/40 hover:text-white/90 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* <button
            onClick={()=> setOpenLoginDialog(true)}
            className="text-[0.85rem] text-white/40 px-4 py-2 hover:text-white transition-colors"
          >
            Log in
          </button>
          <button 
          onClick={()=> setOpenLoginDialog(true)}
          className="text-[0.85rem] font-medium bg-[#f97316] text-white px-[18px] py-2 rounded-[9px] hover:bg-[#ea6c0a] transition-all hover:-translate-y-px">
            Sign up
          </button> */}
          <button 
          
          className="text-[0.85rem] font-medium bg-[#f97316] text-white px-[18px] py-2 rounded-[9px] hover:bg-[#ea6c0a] transition-all hover:-translate-y-px">
            <a href="#waitlist">
                Join the waitlist
            </a>
          </button>

        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white/50 hover:text-white hover:bg-white/[0.06] transition-all"
        >
          <Menu size={20} />
        </button>
      </nav>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-[#111114] border-l border-white/[0.07] flex flex-col md:hidden"
            >
              {/* Sidebar header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
                <div className="flex flex-row items-center gap-2">
                <Image src={logo}
                  alt="SpeakSmart Logo"
                  width={40} 
                  height={10} 
                  className="invert object-cover" />
                <span className="text-white font-semibold text-[0.95rem]">
                  SpeakSmart
                </span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-white/35 hover:text-white/75 hover:bg-white/[0.06] transition-all"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Links */}
              <ul className="flex flex-col px-4 py-6 gap-1 list-none flex-1">
                {links.map((l, i) => (
                  <motion.li
                    key={l.id}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={l.id}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center px-3 py-3 rounded-xl text-white/50 text-[0.9rem] hover:text-white hover:bg-white/[0.05] transition-all"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom actions */}
              <div className="flex flex-col gap-3 px-6 py-6 border-t border-white/[0.06]">
                {/* <button
                  onClick={() => {
                    setOpenLoginDialog(true);
                    setMenuOpen(false);
                  }}
                  className="w-full py-2.5 rounded-xl text-[0.88rem] text-white/50 border border-white/[0.08] hover:text-white hover:border-white/20 transition-all"
                >
                  Log in
                </button>
                <button className="w-full py-2.5 rounded-xl text-[0.88rem] font-semibold bg-[#f97316] text-white hover:bg-[#ea6c0a] transition-all">
                  Sign up
                </button> */}
                 <button className="w-full py-2.5 rounded-xl text-[0.88rem] font-semibold bg-[#f97316] text-white hover:bg-[#ea6c0a] transition-all">
                   Join the waitlist
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}