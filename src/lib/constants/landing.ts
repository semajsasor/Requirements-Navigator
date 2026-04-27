export const landingPage = {
  hero: {
    eyebrow: "Know exactly what you need before you start",
    headline: "Find the documents, steps, fees, and official links for life's requirements.",
    subheadline:
      "Requirements Navigator turns confusing application processes into clear, source-backed checklists you can follow with confidence.",
    primaryCta: "Explore processes",
    secondaryCta: "See how it works",
    trustText: "Built for government IDs, school enrollment, job applications, bank accounts, permits, and renewals.",
    previewLabel: "Process preview",
    previewTitle: "Get a Government ID",
    previewItems: [
      "Proof of identity",
      "Proof of residence",
      "Application form",
      "Fee and appointment details",
    ],
    previewStats: [
      { label: "Documents", value: "3+" },
      { label: "Steps", value: "4" },
      { label: "Sources", value: "2" },
    ],
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "Go from unsure to ready in three steps.",
    description:
      "Start with the real-world process you need to complete, then review the requirements before you spend time, money, or a trip to an office.",
    steps: [
      {
        title: "Choose process",
        description:
          "Browse common processes by category, complexity, timeline, and the type of application you need to complete.",
      },
      {
        title: "See requirements",
        description:
          "Review documents, steps, fees, trusted source links, tips, and mistakes that often delay approval.",
      },
      {
        title: "Follow checklist",
        description:
          "Use the guide as a practical checklist, save progress, and confirm final details with official sources.",
      },
    ],
  },
  popularProcesses: {
    eyebrow: "Popular processes",
    title: "Start with a checklist people need every week.",
    description:
      "Each guide is structured so it can grow from curated starter content into reviewed Supabase-backed records.",
    cta: "Browse all processes",
    slugs: ["government-id-us", "job-application", "school-enrollment-us"],
  },
  benefits: {
    eyebrow: "Why this helps",
    title: "Less guessing before the moment that matters.",
    description:
      "Requirements are often scattered across agencies, institutions, PDFs, and outdated advice. Requirements Navigator brings the essentials into one readable view.",
    items: [
      {
        title: "Saves time",
        description:
          "Know what to gather before appointments, submissions, interviews, enrollment windows, and renewals.",
      },
      {
        title: "Avoids mistakes",
        description:
          "Spot common missing documents, stale address proofs, payment issues, and eligibility gaps early.",
      },
      {
        title: "Reduces confusion",
        description:
          "Translate complex instructions into plain-language steps while keeping official sources close.",
      },
    ],
  },
  trustedSources: {
    eyebrow: "Trusted sources",
    title: "Designed around official confirmation.",
    description:
      "Every guide leaves room for source links, last-reviewed dates, and jurisdiction-specific details so users can verify before they act.",
    sources: [
      "Government agency pages",
      "Schools and admissions offices",
      "Banks and financial regulators",
      "Licensing boards",
      "Small business offices",
      "Employer and career resources",
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "Built for people who want fewer surprises.",
    items: [
      {
        quote:
          "I knew what to bring before the appointment, which made the whole thing feel manageable.",
        name: "Maya R.",
        role: "First-time ID applicant",
      },
      {
        quote:
          "The mistake list is what sold me. It caught the exact document issue that would have slowed us down.",
        name: "Jordan K.",
        role: "Parent preparing enrollment",
      },
      {
        quote:
          "It turns official requirements into a checklist without hiding the source links I still need to verify.",
        name: "Amara S.",
        role: "Small business owner",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready when you are",
    title: "Know exactly what you need before you start.",
    description:
      "Choose a process, review the requirements, and move forward with fewer missed documents, surprise fees, or unclear next steps.",
    primaryCta: "Find a checklist",
    secondaryCta: "Open dashboard",
  },
} as const;
