// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// const plans = [
//   {
//     name: "Free",
//     price: "$0",
//     session: "1 daily session",
//     description: "Get a taste of a confidence speaking.",
//     validity: "Valid for 30 days",
//     features: [
//       "1 basic speaking scenario",
//       "2-minute daily practice",
//       "Basic pronunciation feedback",
//       "Limited confidence & clarity score",
//       "No progress tracking"
//     ],
//     cta: "Start Free",
//     highlight: false,
//     tag: null,
//   },
//   {
//     name: "Premium",
//     price: "$19.99",
//     session: "10 daily sessions",
//     description: "Train seriously. Spot your weak points and fix them before the real thing."+
//     " For serious learners ready to level up.",
//     validity: "Valid for 30 days",
//     features: [
//       "Unlimited practice",
//       "Any real-world scenarios",
//       "Real-time Dual AI",
//       "Advanced pronunciation analysis",
//       "Full Confidence analytics dashboard",
//       "Progress comparison",
//       "Hidden Transcript Mode",
//     ],
//     cta: "Start 7-Day Free Trial",
//     highlight: true,
//     tag: "Most popular",
//   },
//   {
//     name: "Premium annual",
//     price: "$149",
//     session: "5 sessions",
//     description: "For candidates who want to leave nothing to chance.",
//     validity: "Valid for 60 days",
//     features: [
//       "5 AI mock interviews",
//       "Deep feedback per answer",
//       "Confidence & clarity score",
//       "All role categories",
//       "Personalized action plan",
//       "Progress comparison",
//       "Hidden Transcript Mode",
//       "Priority support",
//     ],
//     cta: "Go Elite",
//     highlight: false,
//     tag: "Best value",
//   },
// ];

// const CheckIcon = () => (
//   <svg
//     width="13" height="13" viewBox="0 0 24 24" fill="none"
//     stroke="#34d9b5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
//     className="flex-shrink-0 mt-0.5"
//   >
//     <polyline points="20 6 9 17 4 12" />
//   </svg>
// );

// export function PricingSection() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   return (
//     <section ref={ref} className="relative bg-[#0c0c0e] py-28 px-6 overflow-hidden">
//       {/* Glow centre */}
//       <div
//         className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.1) 0%, transparent 65%)",
//         }}
//       />

//       <div className="relative z-10 max-w-[1100px] mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           className="text-center mb-16"
//         >
//           <p className="text-[#f97316] text-[0.7rem] font-bold tracking-[0.18em] uppercase mb-3">
//             Pricing
//           </p>
//           <h2 className="text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold text-white leading-[1.1] tracking-[-0.025em] max-w-[600px] mx-auto mb-4">
//             Invest in Your {" "}
//             <span className="text-[#f97316]">Speaking Confidence</span>
//           </h2>
//           <p className="text-white/40 text-[0.95rem] sm:text-[1.25rem]   max-w-[460px] mx-auto font-light leading-[1.75]">
//             Start Free, upgrade when you're ready. Cancel anytime.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
//           {plans.map((plan, i) => (
//             <motion.div
//               key={plan.name}
//               initial={{ opacity: 0, y: 32 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{
//                 duration: 0.6,
//                 delay: 0.1 + i * 0.1,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className={`relative rounded-2xl border overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${
//                 plan.highlight
//                   ? "border-[#f97316]/40 bg-[#f97316]/[0.04]"
//                   : "border-white/[0.07] bg-[#0f0f12]"
//               }`}
//             >
//               {/* Top glow stripe on highlighted */}
//               {plan.highlight && (
//                 <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f97316] to-transparent" />
//               )}

//               {/* Tag */}
//               {plan.tag && (
//                 <div className="absolute top-4 right-4">
//                   <span
//                     className={`text-[0.62rem] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full ${
//                       plan.highlight
//                         ? "bg-[#f97316] text-white"
//                         : "bg-white/[0.06] text-white/40 border border-white/[0.08]"
//                     }`}
//                   >
//                     {plan.tag}
//                   </span>
//                 </div>
//               )}

//               <div className="p-7">
//                 {/* Plan name */}
//                 <p className="text-white/35 text-[0.72rem] font-semibold tracking-[0.14em] uppercase mb-3">
//                   {plan.name}
//                 </p>

//                 {/* Price */}
//                 <div className="flex items-end gap-2 mb-1">
//                   <span className="text-[2.8rem] font-extrabold text-white leading-none tracking-tight">
//                     {plan.price}
//                   </span>
//                   <span className="pb-2">/ month</span>
//                 </div>
//                 <p className="text-[#f97316] text-[0.8rem] font-semibold mb-1">
//                   {plan.session}
//                 </p>
//                 <p className="text-white/22 text-[0.72rem] mb-5">
//                   {plan.validity}
//                 </p>

//                 {/* Divider */}
//                 <div className="h-px bg-white/[0.06] mb-5" />

//                 {/* Description */}
//                 <p className="text-white/40 text-[0.82rem] leading-[1.65] font-light mb-6">
//                   {plan.description}
//                 </p>

//                 {/* Features */}
//                 <ul className="flex flex-col gap-2.5 mb-8">
//                   {plan.features.map((f) => (
//                     <li key={f} className="flex items-start gap-2.5">
//                       <CheckIcon />
//                       <span className="text-white/55 text-[0.82rem] font-light leading-snug">
//                         {f}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* CTA */}
//                 <button
//                   className={`w-full py-3 rounded-xl text-[0.88rem] font-semibold transition-all duration-200 cursor-pointer ${
//                     plan.highlight
//                       ? "bg-[#f97316] text-white hover:bg-[#ea6c0a] hover:shadow-[0_8px_24px_rgba(249,115,22,0.35)]"
//                       : "bg-white/[0.05] text-white/60 border border-white/[0.08] hover:bg-white/[0.08] hover:text-white/80"
//                   }`}
//                 >
//                   {plan.cta}
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom note */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : {}}
//           transition={{ delay: 0.65, duration: 0.5 }}
//           className="text-center text-white/20 text-[0.78rem] mt-10"
//         >
//           No subscriptions. No auto-renewals. Pay once, use when you need it. &nbsp;·&nbsp; Stripe secured checkout.
//         </motion.p>
//       </div>
//     </section>

//   )
// }
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Tag } from "lucide-react";

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
    <section ref={ref} className="relative bg-[#0c0c0e] py-28 px-6 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.08) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-[#f97316] text-[0.7rem] font-bold tracking-[0.18em] uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold text-white leading-[1.1] tracking-[-0.025em] max-w-[560px] mx-auto mb-4">
            Invest in Your {" "}
            <span className="text-[#f97316]">Speaking Confidence</span>
          </h2>
          <p className="text-white/40 text-[0.95rem] max-w-[420px] mx-auto font-light leading-[1.75]">
            Start free. Upgrade when you're ready. No hidden fees.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? "border-2 border-[#f97316] bg-[#111114]"
                  : plan.tag === "Best Value"
                  ? "border-2 border-[#6366f1] bg-[#111114]"
                  : "border border-white/[0.08] bg-[#111114]"
              }`}
            >
              {/* Tag */}
              {plan.tag && (
                <div className="absolute top-5 right-5">
                  <span
                    className={`text-[0.68rem] font-bold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full ${
                      plan.highlight
                        ? "bg-[#f97316] text-white"
                        : "bg-[#6366f1] text-white"
                    }`}
                  >
                    {plan.tag}
                  </span>
                </div>
              )}

              <div className="p-7">
                {/* Plan name */}
                <p className="text-white font-bold text-[0.78rem] tracking-[0.12em] mb-4">
                  {plan.name}
                </p>

                {/* Price */}
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-[3rem] font-extrabold text-white leading-none tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-white/40 text-[0.9rem] mb-1.5">{plan.period}</span>
                </div>

                <p className={`text-[0.88rem] font-semibold mb-1 ${
                  plan.tag === "Best Value" ? "text-[#6366f1]" : "text-[#f97316]"
                }`}>
                  {plan.sessions}
                </p>
                <p className="text-white/30 text-[0.78rem] mb-4">{plan.validity}</p>

                {/* Savings badge (annual only) */}
                {plan.savings && (
                  <div className="flex items-center justify-between bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-lg px-3 py-2 mb-4">
                     
                     <div className="flex items-center gap-2">
                      <Tag className="text-[#6366f1]" />
                      <span className="text-[#6366f1] text-[0.8rem] font-semibold">
                      {plan.savings.percent}
                      </span>
                    </div>
                    <span className="text-white/40 text-[0.75rem] font-bold">{plan.savings.monthly}</span>
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
                      <Check
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 text-[#34d9b5]
                        `}
                      />
                      <span className="text-white/55 text-[0.82rem] font-light leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-3.5 rounded-xl text-[0.9rem] font-semibold transition-all duration-200 cursor-pointer ${
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
          ))}
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