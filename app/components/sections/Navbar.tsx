"use client";

import { useState } from "react";
import { LoginDialog } from "./LoginDialog";

const links = ["How It Works", "Features", "Pricing", "Results"];

export function NavBar() {

const [openLoginDialog, setOpenLoginDialog] = useState(false);
 

  return (
    <>

    <LoginDialog open={openLoginDialog} onClose={setOpenLoginDialog}/>


    <nav className="fixed top-0 left-0 right-0 z-20 flex items-center backdrop-blur-lg
    justify-between px-8 py-3.5 border-b border-white/[0.05] bg-[#0c0c0e]">
    
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-[34px] h-[34px] rounded-[10px] bg-[#f97316]/[0.12] border border-[#f97316]/[0.22] flex items-center justify-center flex-shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#f97316" strokeWidth="2" />
            <path d="M8 12h8M12 8v8" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <span className="text-white text-[0.95rem] font-semibold tracking-tight">
          SpeakSmart
        </span>
      </div>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-[0.85rem] text-white/40 hover:text-white/90 transition-colors"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-2.5">
        <a
          href="#"
          className="text-[0.85rem] text-white/40 px-4 py-2 hover:text-white transition-colors"
          onClick={()=>setOpenLoginDialog(true)}
        >
          Log in
        </a>
        <a
          href="#"
          className="text-[0.85rem] font-medium bg-[#f97316] text-white px-[18px] 
          py-2 rounded-[9px] hover:bg-[#ea6c0a] 
          transition-all hover:-translate-y-px"
          onClick={()=>setOpenLoginDialog(true)}
        >
          Sign up
        </a>
      </div>
   
    </nav>
    </>
  );
}