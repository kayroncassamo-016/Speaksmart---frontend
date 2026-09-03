"use client";

export function HeaderAnnouncement() {
  return (
    <div className="relative z-10 flex items-center justify-center gap-2.5 py-2.5 px-4 border-b border-white/[0.05] bg-white/[0.015] flex-wrap">
      <span className="text-[#f97316] text-[0.65rem] font-bold tracking-[0.14em] uppercase">
        New
      </span>
      <span className="text-sm text-white/40">
        Practice like it&apos;s real - Perform like it&apos;s easy!
      </span>
      <a
        href="#"
        className="inline-flex items-center gap-1 text-[0.7rem] font-semibold text-[#f97316] border border-[#f97316]/30 rounded-full px-3 py-0.5 ml-1 hover:bg-[#f97316]/10 transition-colors"
      >
        ✦ Get Pro →
      </a>
    </div>
  );
}