

"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import logo from "../../components/logo/speaksmart.png";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.message || "Unable to authenticate.");
        return;
      }

      router.replace("/ss-control-7x9k");
      router.refresh();
    } catch {
      setErrorMessage("Unable to connect. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  const inputClass =
    "w-full bg-[#1a1a1e] border border-white/[0.08] hover:border-white/[0.15] focus:border-[#f97316]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]/25 text-white placeholder:text-white/25 text-[0.88rem] px-4 py-3 rounded-xl transition-colors";

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0c0c0e] px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-[400px]"
        >
          <div className="rounded-2xl border border-white/[0.08] bg-[#111114] p-8 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
            {/* Logo */}
            <div className="mb-6 flex justify-center">
              <div className="flex items-center gap-2.5">
                <Image
                  src={logo}
                  alt="SpeakSmart Logo"
                  width={40}
                  height={10}
                  className="invert object-cover"
                />
                <span className="text-[0.95rem] font-semibold tracking-tight text-white">
                  SpeakSmart
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="mb-2 text-center text-[1.4rem] font-bold tracking-tight text-white">
              Administrator sign in
            </h1>
            <p className="mb-7 text-center text-[0.85rem] font-light leading-relaxed text-white/40">
              Use your administrator account to manage the waitlist.
            </p>

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[0.8rem] font-medium text-white/60"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="username"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className={inputClass}
                  placeholder="Administrator email"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="text-[0.8rem] font-medium text-white/60"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className={`${inputClass} pr-12`}
                    placeholder="Your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-white/35 transition-colors hover:bg-white/[0.06] hover:text-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]/25"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {errorMessage && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-[0.82rem] text-red-400"
                >
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="mt-1 w-full cursor-pointer rounded-xl bg-[#f97316] py-3 text-[0.9rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#ea6c0a] hover:shadow-[0_8px_24px_rgba(249,115,22,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111114] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </button>
            </form>

            <p className="mt-6 text-center text-[0.72rem] leading-relaxed text-white/20">
              Restricted access. Authorized administrators only.
            </p>
          </div>
        </motion.div>
      </main>
    </MotionConfig>
  );
}