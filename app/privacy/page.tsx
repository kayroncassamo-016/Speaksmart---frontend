
const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p>When you join the SpeakSmart waitlist, we collect your email address.</p>
        <p>We may also collect basic technical information necessary to operate, maintain, and protect our website.</p>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>We use the information collected to:</p>
        <ul>
          <li>Manage and maintain our waitlist.</li>
          <li>Contact you about SpeakSmart's launch and early access.</li>
          <li>Share relevant product updates.</li>
          <li>Maintain the security and functionality of our website.</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </>
    ),
  },
  {
    title: "3. Data Storage and Third-Party Services",
    content: (
      <p>
        Your email address is stored using our database infrastructure.
        We may rely on third-party service providers to host our website,
        operate our backend, and store information. These providers process
        data as necessary to provide their services.
      </p>
    ),
  },
  {
    title: "4. Data Retention",
    content: (
      <p>
        We retain your email address for as long as necessary to manage
        the waitlist and communicate about SpeakSmart, or until you request
        its deletion, subject to applicable legal obligations.
      </p>
    ),
  },
  {
    title: "5. Your Privacy Rights",
    content: (
      <>
        <p>
          You may contact us to request access to, correction of, or deletion
          of your personal information, subject to applicable law.
        </p>
        <p>
          To make a privacy-related request, contact us using the email
          address below.
        </p>
      </>
    ),
  },
  {
    title: "6. Data Security",
    content: (
      <p>
        We take reasonable technical and organizational measures to protect
        the information we collect. However, no method of electronic storage
        or transmission over the internet can be guaranteed to be completely secure.
      </p>
    ),
  },
  {
    title: "7. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy as SpeakSmart evolves.
        Any changes will be published on this page with an updated revision date.
      </p>
    ),
  },
  {
    title: "8. Contact Us",
    content: (
      <p>
        If you have questions or requests regarding this Privacy Policy,
        contact us at{" "}
        <a className="text-[#f97316] hover:underline" href="mailto:speaksmartt.contact@gmail.com">
          speaksmartt.contact@gmail.com
        </a>.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0c0c0e] text-white">
      <div className="max-w-[850px] mx-auto px-6 py-20">
        <a href="/" className="text-[#f97316] text-sm hover:underline">
          ← Back to SpeakSmart
        </a>

        <p className="mt-12 text-[#f97316] text-xs font-bold tracking-[0.18em] uppercase">
          Legal
        </p>

        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
          Privacy Policy
        </h1>

        <p className="mt-4 text-white/40 text-sm">
          Last updated: November 10, 2026
        </p>

        <p className="mt-8 text-white/60 leading-relaxed">
          At SpeakSmart, we respect your privacy. This policy explains how
          we collect, use, store, and protect your information when you
          visit our website or join our waitlist.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold mb-4">
                {section.title}
              </h2>
              <div className="space-y-3 text-white/55 leading-relaxed text-[0.95rem] [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-white/[0.08] text-white/30 text-sm">
          © {new Date().getFullYear()} SpeakSmart. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
