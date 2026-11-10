
const sections = [
  {
    title: "1. About SpeakSmart",
    content: (
      <p>
        SpeakSmart is a platform being developed to help people become
        more confident and comfortable when speaking English. Our website
        currently allows visitors to join a waitlist to receive updates
        about the product and its launch.
      </p>
    ),
  },
  {
    title: "2. Waitlist Registration",
    content: (
      <>
        <p>By joining the SpeakSmart waitlist, you agree to:</p>
        <ul>
          <li>Provide an email address that you control.</li>
          <li>Provide accurate information.</li>
          <li>Use the waitlist for legitimate purposes.</li>
        </ul>
        <p>
          Joining the waitlist does not guarantee access to the product,
          a particular launch date, or any specific feature.
        </p>
      </>
    ),
  },
  {
    title: "3. Communications",
    content: (
      <p>
        By submitting your email address, you agree that we may contact
        you regarding SpeakSmart's launch, early access, and relevant
        product updates. You may request removal from the waitlist at any time.
      </p>
    ),
  },
  {
    title: "4. Future Products and Pricing",
    content: (
      <p>
        SpeakSmart is currently in development. Product features,
        availability, subscription plans, and pricing may change before
        launch. Joining the waitlist does not create a purchase obligation
        or a paid subscription.
      </p>
    ),
  },
  {
    title: "5. Intellectual Property",
    content: (
      <p>
        All original content, branding, designs, logos, and materials
        displayed on the SpeakSmart website are owned by SpeakSmart
        or used with permission. You may not reproduce, distribute,
        or commercially exploit these materials without prior authorization.
      </p>
    ),
  },
  {
    title: "6. Acceptable Use",
    content: (
      <p>
        You agree not to misuse our website, attempt unauthorized access
        to our systems, interfere with its operation, or use the website
        for unlawful purposes.
      </p>
    ),
  },
  {
    title: "7. Website Availability",
    content: (
      <p>
        We may modify, suspend, or discontinue any part of the website
        or waitlist at any time. We aim to keep the website available,
        but do not guarantee uninterrupted access.
      </p>
    ),
  },
  {
    title: "8. Limitation of Liability",
    content: (
      <p>
        To the extent permitted by applicable law, SpeakSmart is not
        liable for indirect or incidental damages arising from the use
        of, or inability to use, the website or waitlist.
        Nothing in these terms excludes liability that cannot legally
        be excluded.
      </p>
    ),
  },
  {
    title: "9. Changes to These Terms",
    content: (
      <p>
        We may update these Terms of Service as the project develops.
        Updated terms will be published on this page with a revised date.
      </p>
    ),
  },
  {
    title: "10. Contact",
    content: (
      <p>
        For questions regarding these Terms, contact us at{" "}
        <a
          className="text-[#f97316] hover:underline"
          href="mailto:speaksmartt.contact@gmail.com"
        >
          speaksmartt.contact@gmail.com
        </a>.
      </p>
    ),
  },
];

export default function TermsPage() {
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
          Terms of Service
        </h1>

        <p className="mt-4 text-white/40 text-sm">
          Last updated: November 10, 2026
        </p>

        <p className="mt-8 text-white/60 leading-relaxed">
          Welcome to SpeakSmart. These Terms of Service govern your
          access to and use of our website and waitlist. By using our
          website or joining our waitlist, you agree to these terms.
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
