

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Tag } from "lucide-react";

const plans = [
  {
    name: "FREE",
    price: "$0",
    period: "/ month",
    sessions: "1 daily session",
    validity: "Valid for 30 days",
    description: "Get a taste of confident speaking.",
    features: [
      "1 basic speaking scenario",
      "2-minute daily practice",
      "Basic pronunciation feedback",
      "Limited confidence & clarity score",
      "No progress tracking",
    ],
    cta: "Start Free",
    highlight: false,
    tag: null,
    savings: null,
    ctaStyle: "outline",
  },
  {
    name: "PREMIUM",
    price: "$19.99",
    period: "/ month",
    sessions: "10 daily sessions",
    validity: "Valid for 30 days",
    description:
      "Train seriously. Spot your weak points and fix them before the real thing. For serious learners ready to level up.",
    features: [
      "Unlimited practice",
      "Any real-world scenarios",
      "Real-time Dual AI",
      "Advanced pronunciation analysis",
      "Full Confidence analytics dashboard",
      "Progress comparison",
      "Hidden Transcript Mode",
    ],
    cta: "Start 7-Day Free Trial",
    highlight: true,
    tag: "Most Popular",
    savings: null,
    ctaStyle: "orange",
  },
  {
    name: "PREMIUM ANNUAL",
    price: "$149",
    period: "/ year",
    sessions: "Unlimited sessions",
    validity: "Valid for 12 months",
    description:
      "Train seriously. Spot your weak points and fix them before the real thing. For serious learners ready to level up.",
    features: [
      "Unlimited practice",
      "Any real-world scenarios",
      "Real-time Dual AI",
      "Advanced pronunciation analysis",
      "Full Confidence analytics dashboard",
      "Progress comparison",
      "Hidden Transcript Mode",
    ],
    cta: "Get Annual Plan",
    highlight: false,
    tag: "Best Value",
    savings: { percent: "Save 27%", monthly: "Works out to $12.42/month" },
    ctaStyle: "purple",
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative bg-[#0c0c0e] py-20 md:py-28 px-4 sm:px-6 overflow-hidden"
      id="pricing"
    >
      <div className="relative z-10 max-w-[1100px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-[#f97316] text-[0.7rem] font-bold tracking-[0.18em] uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold text-white leading-[1.1] tracking-[-0.025em] max-w-[560px] mx-auto mb-4">
            Invest in Your{" "}
            <span className="text-[#f97316]">Speaking Confidence</span>
          </h2>
          <p className="text-white/40 text-[0.95rem] max-w-[420px] mx-auto font-light leading-[1.75]">
            Start free. Upgrade when you're ready. No hidden fees.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch max-w-[460px] md:max-w-none mx-auto">
          {plans.map((plan, i) => {
            const isAnnual = plan.tag === "Best Value";
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative flex flex-col rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${
                  plan.highlight
                    ? "border-2 border-[#f97316] bg-[#111114]"
                    : isAnnual
                    ? "border-2 border-[#6366f1] bg-[#111114]"
                    : "border border-white/[0.08] bg-[#111114]"
                } ${
                  i === 2
                    ? "md:col-span-2 lg:col-span-1 md:w-[calc(50%-0.625rem)] lg:w-auto md:justify-self-center"
                    : ""
                }`}
              >
                <div className="flex flex-col flex-1 p-6 sm:p-7">
                  {/* Plan name + tag */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <p className="text-white font-bold text-[0.78rem] tracking-[0.12em]">
                      {plan.name}
                    </p>
                    {plan.tag && (
                      <span
                        className={`text-[0.68rem] font-bold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full whitespace-nowrap ${
                          plan.highlight
                            ? "bg-[#f97316] text-white"
                            : "bg-[#6366f1] text-white"
                        }`}
                      >
                        {plan.tag}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex flex-wrap items-end gap-x-2 gap-y-0 mb-1">
                    <span className="text-[2.5rem] sm:text-[3rem] font-extrabold text-white leading-none tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-white/40 text-[0.9rem] mb-1.5">
                      {plan.period}
                    </span>
                  </div>

                  <p
                    className={`text-[0.88rem] font-semibold mb-1 ${
                      isAnnual ? "text-[#6366f1]" : "text-[#f97316]"
                    }`}
                  >
                    {plan.sessions}
                  </p>
                  <p className="text-white/30 text-[0.78rem] mb-4">
                    {plan.validity}
                  </p>

                  {/* Savings badge (annual only) */}
                  {plan.savings && (
                    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-lg px-3 py-2 mb-4">
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4 flex-shrink-0 text-[#6366f1]" />
                        <span className="text-[#6366f1] text-[0.8rem] font-semibold whitespace-nowrap">
                          {plan.savings.percent}
                        </span>
                      </div>
                      <span className="text-white/40 text-[0.75rem] font-bold">
                        {plan.savings.monthly}
                      </span>
                    </div>
                  )}

                  {/* Divider */}
                  <div className="h-px bg-white/[0.07] mb-5" />

                  {/* Description */}
                  <p className="text-white/40 text-[0.82rem] leading-[1.65] font-light mb-6">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="flex flex-col gap-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#34d9b5]" />
                        <span className="text-white/55 text-[0.82rem] font-light leading-snug">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA (always pinned to the bottom) */}
                  <button
                    className={`mt-auto w-full py-3.5 rounded-xl text-[0.9rem] font-semibold transition-all duration-200 cursor-pointer ${
                      plan.ctaStyle === "orange"
                        ? "bg-[#f97316] text-white hover:bg-[#ea6c0a] hover:shadow-[0_8px_24px_rgba(249,115,22,0.4)]"
                        : plan.ctaStyle === "purple"
                        ? "bg-[#6366f1] text-white hover:bg-[#5457e0] hover:shadow-[0_8px_24px_rgba(99,102,241,0.4)]"
                        : "bg-transparent text-white border border-white/[0.12] hover:border-white/25 hover:bg-white/[0.04]"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="text-center text-white/20 text-[0.78rem] mt-10"
        >
          No hidden fees. Cancel anytime. &nbsp;·&nbsp; Stripe secured checkout.
        </motion.p>
      </div>
    </section>
  );
}