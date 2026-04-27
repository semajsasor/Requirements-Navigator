import type { ProcessGuide, ProcessSeedRecord } from "@/types/process";

export const processGuides: ProcessGuide[] = [
  {
    slug: "government-id-us",
    title: "Get a State Government ID",
    category: "Government services",
    location: {
      countryCode: "US",
      countryName: "United States",
      region: "State-specific",
    },
    summary:
      "Prepare identity, residency, appointment, and payment requirements for a state-issued ID card.",
    audience: "First-time applicants, movers, students, and people replacing an expired ID.",
    eligibility: [
      {
        label: "Residency",
        description: "You generally need to live in the state where you apply.",
      },
      {
        label: "Identity",
        description: "You must prove legal name, date of birth, and identity with accepted documents.",
      },
    ],
    requiredDocuments: [
      {
        name: "Proof of identity",
        description: "Passport, birth certificate, permanent resident card, or another accepted primary ID.",
        required: true,
        acceptedFormats: ["Original", "Certified copy"],
      },
      {
        name: "Proof of residence",
        description: "Utility bill, lease, bank statement, or official mail showing your current address.",
        required: true,
        acceptedFormats: ["Printed statement", "Official digital statement"],
      },
      {
        name: "Application form",
        description: "Complete the official state application form before or during the appointment.",
        required: true,
      },
    ],
    instructions: [
      {
        order: 1,
        title: "Confirm state requirements",
        description: "Review your state agency's accepted document list and ID eligibility rules.",
      },
      {
        order: 2,
        title: "Gather originals and copies",
        description: "Bring originals where required and keep clean copies for your own records.",
      },
      {
        order: 3,
        title: "Visit the issuing office",
        description: "Book an appointment if available, arrive early, and bring an accepted payment method.",
      },
      {
        order: 4,
        title: "Track delivery",
        description: "Save the receipt or confirmation number until the ID is delivered.",
      },
    ],
    fees: [
      {
        label: "State ID application fee",
        amount: 35,
        currency: "USD",
        required: true,
        notes: "Fees vary by state and applicant type.",
      },
    ],
    estimatedProcessingTime: {
      min: 1,
      max: 4,
      unit: "weeks",
      display: "1 to 4 weeks",
    },
    commonMistakes: [
      "Using screenshots instead of official statements.",
      "Forgetting name-change paperwork.",
      "Arriving without an accepted payment method.",
    ],
    tips: [
      "Check whether address documents must be issued within the last 60 or 90 days.",
      "Use the exact legal name that appears on your primary identity document.",
      "Bring an extra proof of residence in case one document is rejected.",
    ],
    faq: [
      {
        question: "Can I apply online?",
        answer: "Some states allow partial online applications, but first-time applicants often need an in-person visit.",
      },
      {
        question: "Do requirements vary by state?",
        answer: "Yes. Always confirm the final accepted document list with the state issuing agency.",
      },
    ],
    officialSourceLinks: [
      {
        title: "USA.gov identity documents",
        publisher: "USA.gov",
        url: "https://www.usa.gov/identification-documents",
      },
      {
        title: "State motor vehicle services directory",
        publisher: "USA.gov",
        url: "https://www.usa.gov/state-motor-vehicle-services",
      },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["identity", "dmv", "residency"],
    status: "published",
  },
  {
    slug: "passport-renewal-us",
    title: "Renew an Adult Passport",
    category: "Government services",
    location: {
      countryCode: "US",
      countryName: "United States",
    },
    summary:
      "Prepare renewal forms, passport photos, current passport, fees, and mailing steps for an adult passport renewal.",
    audience: "Adults renewing an eligible passport issued in their name.",
    eligibility: [
      {
        label: "Current passport condition",
        description: "Your most recent passport should be undamaged and submitted with the renewal.",
      },
      {
        label: "Name consistency",
        description: "If your name changed, you need accepted legal name-change documentation.",
      },
    ],
    requiredDocuments: [
      {
        name: "Renewal form",
        description: "Completed renewal form from the official passport agency.",
        required: true,
      },
      {
        name: "Most recent passport",
        description: "Your current or expired passport that meets renewal rules.",
        required: true,
      },
      {
        name: "Passport photo",
        description: "Recent photo that meets official size and background requirements.",
        required: true,
      },
      {
        name: "Name-change document",
        description: "Marriage certificate, court order, or other accepted document if your name changed.",
        required: false,
      },
    ],
    instructions: [
      {
        order: 1,
        title: "Check renewal eligibility",
        description: "Confirm whether you can renew by mail or online based on your passport and personal details.",
      },
      {
        order: 2,
        title: "Complete the form",
        description: "Fill out the official renewal form and verify that names and dates match your documents.",
      },
      {
        order: 3,
        title: "Prepare payment and photo",
        description: "Include the required fee and a compliant passport photo.",
      },
      {
        order: 4,
        title: "Submit and track",
        description: "Mail or submit through the official channel and save your tracking information.",
      },
    ],
    fees: [
      {
        label: "Passport book renewal",
        amount: 130,
        currency: "USD",
        required: true,
      },
      {
        label: "Expedited service",
        amount: 60,
        currency: "USD",
        required: false,
      },
    ],
    estimatedProcessingTime: {
      min: 6,
      max: 8,
      unit: "weeks",
      display: "6 to 8 weeks",
    },
    commonMistakes: [
      "Submitting a photo that does not meet size or background rules.",
      "Forgetting to sign the renewal form.",
      "Using an outdated fee amount.",
    ],
    tips: [
      "Use a trackable mailing method when sending physical documents.",
      "Renew before booking international travel when possible.",
      "Check processing times again before submitting.",
    ],
    faq: [
      {
        question: "Can I expedite the renewal?",
        answer: "Expedited options may be available for an extra fee depending on current agency rules.",
      },
      {
        question: "Will my old passport be returned?",
        answer: "In many cases it is returned separately, but confirm current policy with the official source.",
      },
    ],
    officialSourceLinks: [
      {
        title: "Renew my passport",
        publisher: "U.S. Department of State",
        url: "https://travel.state.gov/content/travel/en/passports/have-passport/renew.html",
      },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["passport", "travel", "renewal"],
    status: "published",
  },
  {
    slug: "job-application",
    title: "Apply for a Job",
    category: "Career",
    location: {
      countryCode: "US",
      countryName: "United States",
    },
    summary:
      "Build a reliable job application packet with a resume, references, portfolio links, screening answers, and follow-up reminders.",
    audience: "Job seekers applying online, by email, or through recruiters.",
    eligibility: [
      {
        label: "Work authorization",
        description: "Confirm that you meet the employer's work authorization and role eligibility requirements.",
      },
      {
        label: "Role qualifications",
        description: "Match required skills, experience, licenses, or education listed in the job posting.",
      },
    ],
    requiredDocuments: [
      {
        name: "Resume",
        description: "A role-specific resume saved as a PDF unless another format is requested.",
        required: true,
      },
      {
        name: "Cover letter",
        description: "Useful when your experience needs context or the employer requests one.",
        required: false,
      },
      {
        name: "References",
        description: "Names, roles, emails, and phone numbers for references who agreed to be contacted.",
        required: false,
      },
    ],
    instructions: [
      {
        order: 1,
        title: "Match requirements",
        description: "Highlight qualifications that appear in the posting and prepare examples.",
      },
      {
        order: 2,
        title: "Customize materials",
        description: "Update resume keywords, project bullets, and cover letter language.",
      },
      {
        order: 3,
        title: "Submit cleanly",
        description: "Use the requested file format and answer every required screening question.",
      },
      {
        order: 4,
        title: "Follow up",
        description: "Track the date submitted and follow up after the stated review window.",
      },
    ],
    fees: [
      {
        label: "Application fee",
        amount: 0,
        currency: "USD",
        required: false,
        notes: "Most legitimate job applications are free.",
      },
    ],
    estimatedProcessingTime: {
      min: 2,
      max: 10,
      unit: "days",
      display: "2 to 10 days",
    },
    commonMistakes: [
      "Submitting a resume with an old phone number.",
      "Uploading a file that cannot be opened by the employer.",
      "Repeating the same generic cover letter for every role.",
    ],
    tips: [
      "Name files with your name and role, such as Taylor-Lee-Resume.pdf.",
      "Keep a plain text version ready for application portals.",
      "Save every job description so you can reference it later.",
    ],
    faq: [
      {
        question: "Should I include references immediately?",
        answer: "Only include references if requested, but have them ready before interviews.",
      },
      {
        question: "Is it safe to pay an application fee?",
        answer: "Be cautious. Most standard job applications should not require payment.",
      },
    ],
    officialSourceLinks: [
      {
        title: "CareerOneStop",
        publisher: "U.S. Department of Labor",
        url: "https://www.careeronestop.org/",
      },
      {
        title: "Worker resources",
        publisher: "U.S. Department of Labor",
        url: "https://www.dol.gov/",
      },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["career", "resume", "employment"],
    status: "published",
  },
  {
    slug: "school-enrollment-us",
    title: "Prepare School Enrollment",
    category: "Education",
    location: {
      countryCode: "US",
      countryName: "United States",
      region: "District-specific",
    },
    summary:
      "Collect student records, proof of residence, health forms, guardian information, and school-specific enrollment requirements.",
    audience: "Parents, guardians, adult learners, and transfer students.",
    eligibility: [
      {
        label: "Residence or program eligibility",
        description: "The student may need to live in the district or qualify for a specific program.",
      },
      {
        label: "Age or grade placement",
        description: "Schools may require age, prior grade, or transcript evidence.",
      },
    ],
    requiredDocuments: [
      {
        name: "Student identity record",
        description: "Birth certificate, passport, or prior school ID.",
        required: true,
      },
      {
        name: "Immunization record",
        description: "Official health or clinic record if required by the school or district.",
        required: true,
      },
      {
        name: "Proof of address",
        description: "Lease, utility bill, or district-approved residence proof.",
        required: true,
      },
      {
        name: "Prior school records",
        description: "Transcript, report card, or withdrawal form for transfers.",
        required: false,
      },
    ],
    instructions: [
      {
        order: 1,
        title: "Find your assigned school",
        description: "Confirm the district or institution that serves your address or program.",
      },
      {
        order: 2,
        title: "Review enrollment dates",
        description: "Check deadlines for regular enrollment, transfers, and late registration.",
      },
      {
        order: 3,
        title: "Submit forms",
        description: "Complete family, health, emergency contact, and prior-school information.",
      },
      {
        order: 4,
        title: "Confirm placement",
        description: "Ask for confirmation, orientation dates, technology setup, and supply lists.",
      },
    ],
    fees: [
      {
        label: "Enrollment fee",
        amount: 0,
        currency: "USD",
        required: false,
        notes: "Public school enrollment is generally free; private or program fees vary.",
      },
    ],
    estimatedProcessingTime: {
      min: 3,
      max: 21,
      unit: "days",
      display: "3 days to 3 weeks",
    },
    commonMistakes: [
      "Missing immunization or health screening forms.",
      "Using an address document outside the accepted date range.",
      "Waiting until the final week to request prior school records.",
    ],
    tips: [
      "Request transcripts before deadlines because records offices can be slow.",
      "Ask about translation requirements for international documents.",
      "Keep emergency contacts up to date before the first day.",
    ],
    faq: [
      {
        question: "Do enrollment requirements vary by district?",
        answer: "Yes. Districts and schools can set specific forms, dates, and address proof rules.",
      },
      {
        question: "Can unofficial transcripts be used?",
        answer: "Some schools accept them temporarily, but official records are often required.",
      },
    ],
    officialSourceLinks: [
      {
        title: "U.S. Department of Education",
        publisher: "U.S. Department of Education",
        url: "https://www.ed.gov/",
      },
      {
        title: "School vaccination resources",
        publisher: "CDC",
        url: "https://www.cdc.gov/vaccines/",
      },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["school", "enrollment", "student records"],
    status: "published",
  },
  {
    slug: "bank-account-us",
    title: "Open a Personal Bank Account",
    category: "Money",
    location: {
      countryCode: "US",
      countryName: "United States",
    },
    summary:
      "Compare account types, gather identity and tax information, prepare an opening deposit, and avoid avoidable bank fees.",
    audience: "Students, new workers, families, and anyone opening a first account.",
    eligibility: [
      {
        label: "Identity verification",
        description: "Banks must verify your identity before opening an account.",
      },
      {
        label: "Age or co-owner rules",
        description: "Minors may need a parent, guardian, or joint account holder.",
      },
    ],
    requiredDocuments: [
      {
        name: "Government ID",
        description: "Driver license, passport, state ID, or similar accepted ID.",
        required: true,
      },
      {
        name: "Taxpayer ID",
        description: "SSN, ITIN, or another accepted tax identification number.",
        required: true,
      },
      {
        name: "Opening deposit",
        description: "Cash, transfer, check, or payroll deposit depending on bank rules.",
        required: false,
      },
    ],
    instructions: [
      {
        order: 1,
        title: "Choose account type",
        description: "Compare checking, savings, student, joint, and online account options.",
      },
      {
        order: 2,
        title: "Review fees",
        description: "Check monthly fees, overdraft rules, ATM fees, and minimum balance requirements.",
      },
      {
        order: 3,
        title: "Apply online or in branch",
        description: "Submit identity details and complete any required verification.",
      },
      {
        order: 4,
        title: "Activate access",
        description: "Set up online banking, direct deposit, debit card security, and alerts.",
      },
    ],
    fees: [
      {
        label: "Opening deposit",
        amount: 25,
        currency: "USD",
        required: false,
        notes: "Many banks offer accounts with no minimum opening deposit.",
      },
    ],
    estimatedProcessingTime: {
      min: 30,
      max: 72,
      unit: "hours",
      display: "30 minutes to 3 days",
    },
    commonMistakes: [
      "Opening an account without checking monthly maintenance fees.",
      "Ignoring minimum balance rules.",
      "Using a weak password for online banking.",
    ],
    tips: [
      "Look for FDIC or NCUA insurance before opening an account.",
      "Turn on balance and transaction alerts on day one.",
      "Read the fee schedule before accepting overdraft services.",
    ],
    faq: [
      {
        question: "Can I open an account online?",
        answer: "Many banks support online applications, but some applicants may need in-person verification.",
      },
      {
        question: "What if I do not have an SSN?",
        answer: "Some institutions accept an ITIN or other identification. Confirm with the bank before applying.",
      },
    ],
    officialSourceLinks: [
      {
        title: "FDIC consumer resources",
        publisher: "FDIC",
        url: "https://www.fdic.gov/resources/consumers/",
      },
      {
        title: "Consumer banking guidance",
        publisher: "Consumer Financial Protection Bureau",
        url: "https://www.consumerfinance.gov/",
      },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["banking", "money", "identity"],
    status: "published",
  },
  {
    slug: "small-business-permit-us",
    title: "Start a Small Business Permit Checklist",
    category: "Business",
    location: {
      countryCode: "US",
      countryName: "United States",
      region: "State and local",
    },
    summary:
      "Organize registrations, tax accounts, licenses, zoning checks, insurance, and recurring compliance tasks for a new business.",
    audience: "Solo founders, local service businesses, and first-time operators.",
    eligibility: [
      {
        label: "Business activity",
        description: "Requirements depend on what you sell, where you operate, and whether customers visit you.",
      },
      {
        label: "Location approval",
        description: "Zoning, signage, health, and occupancy rules may apply before opening.",
      },
    ],
    requiredDocuments: [
      {
        name: "Business structure details",
        description: "Owner names, entity type, address, and registered agent if needed.",
        required: true,
      },
      {
        name: "Tax registration",
        description: "Federal EIN and state or local tax accounts when applicable.",
        required: true,
      },
      {
        name: "License applications",
        description: "Industry, city, county, and zoning forms.",
        required: true,
      },
    ],
    instructions: [
      {
        order: 1,
        title: "Define business activity",
        description: "List what you sell, where you operate, and whether customers visit your location.",
      },
      {
        order: 2,
        title: "Check registrations",
        description: "Confirm entity, tax, assumed name, and local business registration needs.",
      },
      {
        order: 3,
        title: "Apply for permits",
        description: "Submit license, zoning, health, signage, and professional permit applications.",
      },
      {
        order: 4,
        title: "Set renewals",
        description: "Record renewal dates, inspection windows, tax filing dates, and document storage rules.",
      },
    ],
    fees: [
      {
        label: "Registration and permits",
        amount: 150,
        currency: "USD",
        required: true,
        notes: "Fees vary heavily by location and business type.",
      },
    ],
    estimatedProcessingTime: {
      min: 2,
      max: 8,
      unit: "weeks",
      display: "2 to 8 weeks",
    },
    commonMistakes: [
      "Assuming state registration replaces local licensing.",
      "Skipping zoning checks for home-based businesses.",
      "Missing sales tax or payroll registration requirements.",
    ],
    tips: [
      "Call the city or county clerk before signing a lease.",
      "Keep permit renewal dates in a shared calendar.",
      "Separate personal and business banking early.",
    ],
    faq: [
      {
        question: "Do I need a permit for a home business?",
        answer: "Possibly. Home occupation, zoning, sales tax, or professional license rules may still apply.",
      },
      {
        question: "Is an EIN always required?",
        answer: "Not always, but many businesses need one for taxes, hiring, banking, or entity registration.",
      },
    ],
    officialSourceLinks: [
      {
        title: "SBA business guide",
        publisher: "U.S. Small Business Administration",
        url: "https://www.sba.gov/business-guide",
      },
      {
        title: "Small business tax center",
        publisher: "IRS",
        url: "https://www.irs.gov/businesses/small-businesses-self-employed",
      },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "High",
    tags: ["business", "permits", "tax"],
    status: "published",
  },
  {
    slug: "drivers-license-renewal-ca",
    title: "Renew a California Driver License",
    category: "Renewals",
    location: {
      countryCode: "US",
      countryName: "United States",
      region: "California",
    },
    summary:
      "Review renewal eligibility, identity updates, fees, testing needs, and temporary license steps for a California driver license.",
    audience: "California drivers renewing a standard or REAL ID driver license.",
    eligibility: [
      {
        label: "License status",
        description: "Renewal options depend on whether the license is current, expired, suspended, or requires review.",
      },
      {
        label: "Address and identity updates",
        description: "Name changes or REAL ID upgrades can require additional documentation.",
      },
    ],
    requiredDocuments: [
      {
        name: "Current driver license",
        description: "License number, expiration date, and current card if visiting in person.",
        required: true,
      },
      {
        name: "Renewal notice",
        description: "Notice from the DMV if received; online renewals may ask for notice details.",
        required: false,
      },
      {
        name: "REAL ID documents",
        description: "Identity, Social Security, and California residency documents if upgrading.",
        required: false,
      },
    ],
    instructions: [
      {
        order: 1,
        title: "Check renewal method",
        description: "Confirm whether you can renew online, by mail, at a kiosk, or in person.",
      },
      {
        order: 2,
        title: "Review testing requirements",
        description: "Some renewals may require a vision, knowledge, or in-person requirement.",
      },
      {
        order: 3,
        title: "Submit renewal and payment",
        description: "Complete the official renewal flow and pay the current fee.",
      },
      {
        order: 4,
        title: "Keep temporary proof",
        description: "Save or print temporary documentation if your card will arrive later.",
      },
    ],
    fees: [
      {
        label: "Driver license renewal",
        amount: 45,
        currency: "USD",
        required: true,
        notes: "Confirm the current DMV fee before submitting.",
      },
    ],
    estimatedProcessingTime: {
      min: 2,
      max: 4,
      unit: "weeks",
      display: "2 to 4 weeks",
    },
    commonMistakes: [
      "Trying to renew online when an in-person requirement applies.",
      "Forgetting REAL ID residency documents.",
      "Ignoring a required vision or knowledge test notice.",
    ],
    tips: [
      "Start renewal before the expiration date to avoid driving with an expired license.",
      "Verify your mailing address before payment.",
      "Check whether a temporary license is valid for your planned use.",
    ],
    faq: [
      {
        question: "Can every California driver renew online?",
        answer: "No. Eligibility depends on DMV rules, license status, and renewal history.",
      },
      {
        question: "Do I need REAL ID documents for a standard renewal?",
        answer: "Usually only if upgrading or correcting identity details, but confirm with DMV instructions.",
      },
    ],
    officialSourceLinks: [
      {
        title: "Renew driver license",
        publisher: "California DMV",
        url: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/driver-licenses-dl/",
      },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["driver license", "california", "renewal"],
    status: "published",
  },
  {
    slug: "uk-provisional-driving-licence",
    title: "Apply for a UK Provisional Driving Licence",
    category: "Government services",
    location: {
      countryCode: "GB",
      countryName: "United Kingdom",
    },
    summary:
      "Prepare identity details, addresses, eyesight confirmation, payment, and application steps for a provisional driving licence.",
    audience: "UK residents preparing to learn to drive.",
    eligibility: [
      {
        label: "Minimum age",
        description: "Applicants must meet the age requirement for the vehicle category.",
      },
      {
        label: "Residency",
        description: "Applicants generally need to be a resident of Great Britain.",
      },
      {
        label: "Eyesight",
        description: "You must be able to meet the eyesight standard for driving.",
      },
    ],
    requiredDocuments: [
      {
        name: "Identity document",
        description: "Passport or another accepted identity document.",
        required: true,
      },
      {
        name: "Address history",
        description: "Addresses where you lived during the period requested by the application.",
        required: true,
      },
      {
        name: "National Insurance number",
        description: "Useful if available, depending on application route.",
        required: false,
      },
    ],
    instructions: [
      {
        order: 1,
        title: "Check eligibility",
        description: "Confirm age, residency, eyesight, and identity requirements.",
      },
      {
        order: 2,
        title: "Gather identity and address details",
        description: "Prepare the accepted identity document and address history.",
      },
      {
        order: 3,
        title: "Apply through the official service",
        description: "Complete the online or postal application and pay the required fee.",
      },
      {
        order: 4,
        title: "Wait for licence delivery",
        description: "Keep confirmation details until the licence arrives.",
      },
    ],
    fees: [
      {
        label: "Online application fee",
        amount: 34,
        currency: "GBP",
        required: true,
        notes: "Postal application fees may differ.",
      },
    ],
    estimatedProcessingTime: {
      min: 1,
      max: 3,
      unit: "weeks",
      display: "1 to 3 weeks",
    },
    commonMistakes: [
      "Applying through unofficial lookalike services.",
      "Entering address history inconsistently.",
      "Missing identity document details.",
    ],
    tips: [
      "Use the official GOV.UK service to avoid unnecessary third-party fees.",
      "Prepare address history before starting.",
      "Confirm current fees before submitting.",
    ],
    faq: [
      {
        question: "Can I apply before I start lessons?",
        answer: "Yes. You generally need the provisional licence before learning to drive on public roads.",
      },
      {
        question: "Is the online fee the same as postal?",
        answer: "Not always. Check GOV.UK for the current route-specific fee.",
      },
    ],
    officialSourceLinks: [
      {
        title: "Apply for your first provisional driving licence",
        publisher: "GOV.UK",
        url: "https://www.gov.uk/apply-first-provisional-driving-licence",
      },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["driving", "uk", "licence"],
    status: "published",
  },
  {
    slug: "open-bank-account-au",
    title: "Open a Bank Account in Australia",
    category: "Banking",
    location: { countryCode: "AU", countryName: "Australia" },
    summary: "Gather identity documents, choose an account type, and complete in-branch or online verification to open a personal bank account in Australia.",
    audience: "New residents, international students, and first-time account holders in Australia.",
    eligibility: [
      { label: "Age", description: "Must be at least 18, or have a parent or guardian co-sign for minors." },
      { label: "Identity", description: "Must pass the 100-point identity check using accepted documents." },
    ],
    requiredDocuments: [
      { name: "Primary ID", description: "Passport or Australian driver licence.", required: true },
      { name: "Secondary ID", description: "Medicare card, utility bill, or bank card with your name.", required: true },
      { name: "Tax File Number", description: "Optional but withholding tax applies at the highest rate without it.", required: false },
    ],
    instructions: [
      { order: 1, title: "Choose account type", description: "Compare everyday, savings, and student accounts for fees and interest rates." },
      { order: 2, title: "Gather identity documents", description: "Prepare documents totalling 100 identity points as required by the bank." },
      { order: 3, title: "Apply online or in branch", description: "Complete the application and submit identity verification." },
      { order: 4, title: "Activate and set up", description: "Enable internet banking, set up alerts, and link your TFN to avoid tax withholding." },
    ],
    fees: [{ label: "Account opening", amount: 0, currency: "AUD", required: false, notes: "Most everyday accounts have no opening fee; monthly fees may apply." }],
    estimatedProcessingTime: { min: 1, max: 3, unit: "days", display: "Same day to 3 days" },
    commonMistakes: [
      "Not providing enough identity points.",
      "Forgetting to supply a TFN, causing tax to be withheld at the highest rate.",
      "Not comparing monthly fee structures before choosing an account.",
    ],
    tips: [
      "Many Australian banks let you open an account from overseas before you arrive.",
      "Look for accounts that waive monthly fees for students or low balances.",
      "Link a savings account to automate transfers on payday.",
    ],
    faq: [
      { question: "Can I open an account before arriving in Australia?", answer: "Yes. Several major banks offer pre-arrival online account opening for migrants and students." },
      { question: "What is the 100-point identity check?", answer: "A points-based system where different documents carry different point values totalling 100." },
    ],
    officialSourceLinks: [
      { title: "ASIC MoneySmart – Bank accounts", publisher: "Australian Securities and Investments Commission", url: "https://moneysmart.gov.au/banking/bank-accounts" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["banking", "australia", "identity"],
    status: "published",
  },
  {
    slug: "nhs-gp-registration-uk",
    title: "Register with an NHS GP",
    category: "Healthcare",
    location: { countryCode: "GB", countryName: "United Kingdom" },
    summary: "Find a local GP practice, confirm it is accepting new patients, and complete registration to access NHS primary care services.",
    audience: "UK residents, new arrivals, and anyone who has moved or never registered with a GP.",
    eligibility: [
      { label: "Residency", description: "You should live within the practice catchment area." },
      { label: "NHS entitlement", description: "Most people living in the UK are entitled to register regardless of immigration status." },
    ],
    requiredDocuments: [
      { name: "Proof of address", description: "Utility bill, bank statement, or tenancy agreement.", required: false, notes: "Practices cannot refuse registration solely because you lack documents." },
      { name: "Photo ID", description: "Passport or driving licence if available.", required: false },
    ],
    instructions: [
      { order: 1, title: "Find a local practice", description: "Use the NHS website to search for GP surgeries accepting new patients near your postcode." },
      { order: 2, title: "Contact the practice", description: "Call or visit to confirm they are accepting patients and request a registration form." },
      { order: 3, title: "Complete registration form", description: "Fill in your personal details, health history, and contact information." },
      { order: 4, title: "Attend new patient check", description: "Some practices offer an optional health check appointment for new registrants." },
    ],
    fees: [{ label: "Registration fee", amount: 0, currency: "GBP", required: false, notes: "NHS GP registration is free for eligible residents." }],
    estimatedProcessingTime: { min: 1, max: 7, unit: "days", display: "1 to 7 days" },
    commonMistakes: [
      "Assuming you are still registered at a previous address after moving.",
      "Not registering until you are ill, causing delays when urgent care is needed.",
      "Thinking a lack of documents means you cannot register.",
    ],
    tips: [
      "Register as soon as you move to a new area — do not wait until you are sick.",
      "Bring any repeat prescription details or medical history summaries.",
      "If no local practice has capacity, NHS England can assign one.",
    ],
    faq: [
      { question: "Can I be refused registration without documents?", answer: "No. NHS guidance says practices should not refuse registration solely due to lack of proof of address or ID." },
      { question: "Can I choose any GP in the country?", answer: "Generally you must register near where you live, but some practices accept out-of-area patients." },
    ],
    officialSourceLinks: [
      { title: "How to register with a GP surgery", publisher: "NHS", url: "https://www.nhs.uk/nhs-services/gps/how-to-register-with-a-gp-surgery/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["healthcare", "nhs", "uk", "gp"],
    status: "published",
  },
  {
    slug: "us-birth-certificate-copy",
    title: "Request a Certified Birth Certificate Copy",
    category: "Family",
    location: { countryCode: "US", countryName: "United States", region: "State-specific" },
    summary: "Order a certified copy of a birth certificate from the state vital records office for use in passports, IDs, school enrollment, and legal processes.",
    audience: "Adults requesting their own certificate, parents requesting for a child, and authorized legal representatives.",
    eligibility: [
      { label: "Relationship", description: "Requesters are typically the subject, parent, legal guardian, or authorized representative." },
      { label: "State of birth", description: "Order from the vital records office of the state where the birth was registered." },
    ],
    requiredDocuments: [
      { name: "Government-issued photo ID", description: "Driver licence, passport, or state ID of the requester.", required: true },
      { name: "Request form", description: "State vital records order form with full name, date, and place of birth.", required: true },
      { name: "Authorization letter", description: "Required when requesting on behalf of someone else.", required: false },
    ],
    instructions: [
      { order: 1, title: "Identify the correct state office", description: "Find the vital records office for the state where the birth was registered." },
      { order: 2, title: "Choose your request method", description: "Online, mail, or in-person options vary by state." },
      { order: 3, title: "Complete the form and pay the fee", description: "Fill in all required birth details and include payment." },
      { order: 4, title: "Receive the certificate", description: "Mail delivery takes 1–4 weeks; in-person may be same day." },
    ],
    fees: [{ label: "Certified copy fee", amount: 25, currency: "USD", required: true, notes: "Fees range from roughly $10–$45 depending on the state." }],
    estimatedProcessingTime: { min: 1, max: 4, unit: "weeks", display: "1 to 4 weeks" },
    commonMistakes: [
      "Ordering from the wrong state or county office.",
      "Providing incomplete birth details such as parents' full legal names.",
      "Using an unofficial third-party service that charges excess fees.",
    ],
    tips: [
      "VitalChek is an official state partner and offers online ordering for many states.",
      "Order at least one extra certified copy — many processes require an original.",
      "Confirm whether an apostille is also needed for international use.",
    ],
    faq: [
      { question: "Is a photocopy of a birth certificate accepted?", answer: "No. Most agencies require a certified copy with an official seal or stamp." },
      { question: "How long does it take?", answer: "Online expedited services can deliver within days; standard mail takes 1–4 weeks." },
    ],
    officialSourceLinks: [
      { title: "Where to write for vital records", publisher: "CDC", url: "https://www.cdc.gov/nchs/w2w/index.htm" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["family", "birth certificate", "identity", "vital records"],
    status: "published",
  },
  {
    slug: "first-home-buyer-ca",
    title: "Apply for First Home Buyer Assistance in Canada",
    category: "Housing",
    location: { countryCode: "CA", countryName: "Canada" },
    summary: "Understand eligibility for Canada's First Home Savings Account, Home Buyers' Plan, and federal rebates before purchasing your first property.",
    audience: "Canadian residents buying their first home or qualifying property.",
    eligibility: [
      { label: "First-time buyer", description: "You or your spouse must not have owned a qualifying home in the past four calendar years." },
      { label: "Residency", description: "Must be a Canadian resident for tax purposes." },
    ],
    requiredDocuments: [
      { name: "T1 tax return or Notice of Assessment", description: "Previous year's tax return to confirm income and residency.", required: true },
      { name: "Purchase agreement", description: "Signed agreement of purchase and sale for the property.", required: true },
      { name: "FHSA statements", description: "First Home Savings Account statements if withdrawing FHSA funds.", required: false },
      { name: "RRSP statements", description: "Required if using the Home Buyers' Plan RRSP withdrawal.", required: false },
    ],
    instructions: [
      { order: 1, title: "Confirm eligibility", description: "Check first-time buyer definitions under each program separately." },
      { order: 2, title: "Open an FHSA if eligible", description: "Contribute up to $8,000 per year (lifetime $40,000) tax-free toward a qualifying home." },
      { order: 3, title: "Apply for rebates at closing", description: "Your lawyer or notary applies the First-Time Home Buyers' Tax Credit and provincial rebates." },
      { order: 4, title: "File tax forms", description: "Report FHSA withdrawals and HBP amounts on your tax return in the year of purchase." },
    ],
    fees: [{ label: "Program application", amount: 0, currency: "CAD", required: false, notes: "Programs are free; standard legal, land transfer, and mortgage costs still apply." }],
    estimatedProcessingTime: { min: 4, max: 12, unit: "weeks", display: "4 to 12 weeks (purchase process)" },
    commonMistakes: [
      "Withdrawing RRSP funds without filing the Home Buyers' Plan form.",
      "Missing the HBP re-contribution deadline (15 years starting two years after withdrawal).",
      "Assuming all programs apply automatically without filing the correct tax schedules.",
    ],
    tips: [
      "Open an FHSA as early as possible to start accumulating contribution room.",
      "Combine the FHSA and HBP for a larger tax-free down payment.",
      "Consult a mortgage broker about current provincial first home programs.",
    ],
    faq: [
      { question: "Can I use both the FHSA and the Home Buyers' Plan?", answer: "Yes. You can combine both for a qualifying first home purchase, subject to each program's rules." },
      { question: "Is the First-Time Home Buyers' Tax Credit refundable?", answer: "No, it is a non-refundable tax credit worth up to $1,500 on your federal tax return." },
    ],
    officialSourceLinks: [
      { title: "Home buyers' programs", publisher: "Canada Revenue Agency", url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-time-home-buyer.html" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["housing", "canada", "first home", "mortgage"],
    status: "published",
  },
  {
    slug: "global-entry-us",
    title: "Apply for U.S. Global Entry",
    category: "Travel",
    location: { countryCode: "US", countryName: "United States" },
    summary: "Complete the CBP online application, background check, and in-person interview to gain expedited U.S. customs clearance as a trusted traveler.",
    audience: "Frequent international travelers who are U.S. citizens, lawful permanent residents, or eligible foreign nationals.",
    eligibility: [
      { label: "Criminal history", description: "Applicants with certain convictions or customs violations are ineligible." },
      { label: "Customs compliance", description: "No known customs, immigration, or agriculture violations." },
    ],
    requiredDocuments: [
      { name: "Valid passport or LPR card", description: "Must be valid for the full membership period.", required: true },
      { name: "TTP online application", description: "Completed application via the CBP Trusted Traveler Programs website.", required: true },
    ],
    instructions: [
      { order: 1, title: "Create a TTP account", description: "Register at the official CBP Trusted Traveler Programs website." },
      { order: 2, title: "Complete and submit application", description: "Fill in personal, travel, and background details and pay the fee." },
      { order: 3, title: "Wait for conditional approval", description: "CBP reviews your background; this can take several weeks to months." },
      { order: 4, title: "Schedule and attend interview", description: "Book an enrollment center appointment and bring required identity documents." },
    ],
    fees: [{ label: "Global Entry application", amount: 100, currency: "USD", required: true, notes: "Non-refundable; many travel credit cards reimburse this fee." }],
    estimatedProcessingTime: { min: 2, max: 6, unit: "months", display: "2 to 6 months" },
    commonMistakes: [
      "Booking international travel before receiving conditional approval.",
      "Arriving at the interview without the required physical identity documents.",
      "Not checking whether your credit card covers the application fee.",
    ],
    tips: [
      "Global Entry includes TSA PreCheck at no extra cost.",
      "Schedule the interview at an airport enrollment center on a travel day to save a trip.",
      "Renewal applications can be submitted up to a year before expiry.",
    ],
    faq: [
      { question: "Does Global Entry include TSA PreCheck?", answer: "Yes. Global Entry members automatically receive TSA PreCheck benefits." },
      { question: "Can non-U.S. citizens apply?", answer: "Citizens of select countries are eligible through reciprocal programs — check CBP's current country list." },
    ],
    officialSourceLinks: [
      { title: "Global Entry program", publisher: "U.S. Customs and Border Protection", url: "https://www.cbp.gov/travel/trusted-traveler-programs/global-entry" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["travel", "global entry", "trusted traveler", "customs"],
    status: "published",
  },
  {
    slug: "canada-study-permit",
    title: "Apply for a Canadian Study Permit",
    category: "Immigration",
    location: {
      countryCode: "CA",
      countryName: "Canada",
    },
    summary:
      "Prepare acceptance, identity, proof of funds, biometrics, and application steps for a Canadian study permit.",
    audience: "International students planning to study at a designated learning institution in Canada.",
    eligibility: [
      {
        label: "School acceptance",
        description: "You generally need an acceptance letter from a designated learning institution.",
      },
      {
        label: "Proof of funds",
        description: "You must show enough funds for tuition, living expenses, and return travel.",
      },
      {
        label: "Admissibility",
        description: "Applicants may need medical, police, or biometrics steps depending on circumstances.",
      },
    ],
    requiredDocuments: [
      {
        name: "Letter of acceptance",
        description: "Acceptance from a designated learning institution.",
        required: true,
      },
      {
        name: "Proof of identity",
        description: "Valid passport or travel document.",
        required: true,
      },
      {
        name: "Proof of financial support",
        description: "Bank statements, funding letters, scholarship letters, or sponsor evidence.",
        required: true,
      },
      {
        name: "Provincial attestation letter",
        description: "May be required depending on current study permit rules and exemptions.",
        required: false,
      },
    ],
    instructions: [
      {
        order: 1,
        title: "Confirm program eligibility",
        description: "Check that the institution and program meet current study permit requirements.",
      },
      {
        order: 2,
        title: "Prepare supporting documents",
        description: "Gather acceptance, identity, financial, and country-specific documents.",
      },
      {
        order: 3,
        title: "Submit online application",
        description: "Complete the official application and pay required fees.",
      },
      {
        order: 4,
        title: "Complete biometrics or medical steps",
        description: "Follow any additional instructions issued after submission.",
      },
    ],
    fees: [
      {
        label: "Study permit application",
        amount: 150,
        currency: "CAD",
        required: true,
      },
      {
        label: "Biometrics",
        amount: 85,
        currency: "CAD",
        required: false,
      },
    ],
    estimatedProcessingTime: {
      min: 4,
      max: 16,
      unit: "weeks",
      display: "4 to 16 weeks",
    },
    commonMistakes: [
      "Providing unclear proof of funds.",
      "Missing country-specific document requirements.",
      "Waiting too long to book biometrics.",
    ],
    tips: [
      "Start as soon as you receive an acceptance letter.",
      "Check processing times for your country of residence.",
      "Keep copies of every uploaded document.",
    ],
    faq: [
      {
        question: "Do all students need a study permit?",
        answer: "Not always. Short programs and some situations may be exempt, but most longer programs require one.",
      },
      {
        question: "Can processing times change?",
        answer: "Yes. Processing times vary by country, season, and application volume.",
      },
    ],
    officialSourceLinks: [
      {
        title: "Apply for a study permit",
        publisher: "Immigration, Refugees and Citizenship Canada",
        url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html",
      },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "High",
    tags: ["canada", "study", "immigration"],
    status: "published",
  },
  {
    slug: "philsys-national-id-ph",
    title: "Register for the Philippine National ID (PhilSys)",
    category: "Government services",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Complete the two-step PhilSys registration to receive a Philippine System National ID for use in government and private transactions.",
    audience: "Filipino citizens and resident aliens who have not yet registered under PhilSys.",
    eligibility: [
      { label: "Citizenship or residency", description: "Open to all Filipino citizens and resident aliens regardless of age." },
      { label: "No existing registration", description: "Must not be previously registered under PhilSys." },
    ],
    requiredDocuments: [
      { name: "Primary document", description: "PSA birth certificate, passport, or other primary PhilSys-accepted ID.", required: true },
      { name: "Secondary document", description: "Voter's ID, school ID, or other supporting document if the primary document is unavailable.", required: false },
    ],
    instructions: [
      { order: 1, title: "Book a registration slot", description: "Schedule an appointment via the PhilSys online portal or walk in at a registration center." },
      { order: 2, title: "Step 1 – Demographic capture", description: "Provide personal details, supporting documents, and basic household information." },
      { order: 3, title: "Step 2 – Biometric capture", description: "Visit the registration center to have fingerprints, iris scans, and a photo taken." },
      { order: 4, title: "Receive your PhilSys Number and card", description: "A transaction slip with your PhilSys Number is issued immediately; the physical card is delivered later." },
    ],
    fees: [{ label: "Registration fee", amount: 0, currency: "PHP", required: false, notes: "PhilSys registration is free of charge." }],
    estimatedProcessingTime: { min: 1, max: 6, unit: "months", display: "Card delivery within a few months" },
    commonMistakes: [
      "Going to the wrong registration center type for your barangay.",
      "Bringing only photocopies instead of original documents.",
      "Leaving before biometric capture is fully completed.",
    ],
    tips: [
      "Bring your PSA birth certificate as the most widely accepted primary document.",
      "Keep your PhilSys Number (PSN) transaction slip safe — it can be used before the card arrives.",
      "Minors are registered with a parent or guardian present.",
    ],
    faq: [
      { question: "Is registration mandatory?", answer: "Registration is strongly encouraged and is the basis for receiving government benefits and services." },
      { question: "What can the PhilSys ID be used for?", answer: "It is accepted for most government and private transactions requiring proof of identity." },
    ],
    officialSourceLinks: [
      { title: "PhilSys registration portal", publisher: "Philippine Statistics Authority", url: "https://philsys.gov.ph/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["government services", "philippines", "national id", "philsys"],
    status: "published",
  },
  {
    slug: "resume-linkedin-profile-au",
    title: "Build a Job-Ready Resume and LinkedIn Profile",
    category: "Career",
    location: { countryCode: "AU", countryName: "Australia" },
    summary: "Create a tailored resume and LinkedIn profile that meet Australian employer expectations, including correct formatting, referees, and a professional headline.",
    audience: "Job seekers in Australia, including new graduates, career changers, and migrants entering the local market.",
    eligibility: [
      { label: "Work authorization", description: "Confirm you hold a valid Australian work visa or citizenship before applying to roles." },
    ],
    requiredDocuments: [
      { name: "Resume", description: "Two-page reverse-chronological resume in PDF or Word format.", required: true },
      { name: "Cover letter template", description: "A customizable cover letter for each application.", required: false },
      { name: "Referee details", description: "Two or three professional referees who have agreed to be contacted.", required: false },
    ],
    instructions: [
      { order: 1, title: "Research Australian resume conventions", description: "Omit age, photo, and marital status; limit to two pages; use Australian spelling." },
      { order: 2, title: "Write strong bullet points", description: "Start with action verbs and quantify achievements where possible." },
      { order: 3, title: "Optimize your LinkedIn profile", description: "Add a professional headline, summary, experience, and a clear profile photo." },
      { order: 4, title: "Connect and apply", description: "Use LinkedIn Easy Apply and SEEK to submit applications and request informational connections." },
    ],
    fees: [{ label: "Application costs", amount: 0, currency: "AUD", required: false, notes: "Legitimate job applications in Australia are free." }],
    estimatedProcessingTime: { min: 1, max: 14, unit: "days", display: "1 to 14 days per application" },
    commonMistakes: [
      "Including a photo or date of birth on the resume.",
      "Writing a resume longer than two pages for non-executive roles.",
      "Using a generic objective statement instead of a targeted profile summary.",
    ],
    tips: [
      "Use Australian spelling throughout (e.g. 'organised', 'recognised').",
      "Contact referees before listing them so they are not caught off guard.",
      "Tailor your resume keywords to each job description to pass ATS filters.",
    ],
    faq: [
      { question: "Should I include a photo on my Australian resume?", answer: "No. Australian conventions advise against including a photo to reduce unconscious bias." },
      { question: "How many referees do I need?", answer: "Most Australian employers request two or three professional referees." },
    ],
    officialSourceLinks: [
      { title: "Job search advice", publisher: "Australian Government – JobSearch", url: "https://www.jobsearch.gov.au/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["career", "resume", "linkedin", "australia"],
    status: "published",
  },
  {
    slug: "university-admission-in",
    title: "Apply for University Admission in India (UG)",
    category: "Education",
    location: { countryCode: "IN", countryName: "India" },
    summary: "Prepare entrance exam scores, Class 12 marksheets, application forms, and category certificates for undergraduate university admission in India.",
    audience: "Class 12 students and recent graduates applying to central or state universities in India.",
    eligibility: [
      { label: "Class 12 completion", description: "Must have completed or be appearing in the Class 12 board examination." },
      { label: "Entrance exam", description: "Qualifying scores in CUET, JEE, NEET, or the relevant state entrance exam may be required." },
    ],
    requiredDocuments: [
      { name: "Class 12 marksheet or admit card", description: "Board result or admit card if results are pending.", required: true },
      { name: "Entrance exam scorecard", description: "CUET, JEE, NEET, or other applicable scorecard.", required: true },
      { name: "Category certificate", description: "SC/ST/OBC/EWS certificate if claiming a reserved category seat.", required: false },
      { name: "Passport-size photographs", description: "Recent photos in the size and background specified by the institution.", required: true },
    ],
    instructions: [
      { order: 1, title: "Appear in the relevant entrance exam", description: "Register and sit for CUET, JEE, NEET, or the state entrance exam relevant to your course." },
      { order: 2, title: "Monitor counselling schedules", description: "Check the centralized or institution-specific counselling dates after results are declared." },
      { order: 3, title: "Fill the application form", description: "Register on the university or counselling portal and enter academic and personal details." },
      { order: 4, title: "Upload documents and pay the fee", description: "Upload scanned copies of all required documents and pay the application or counselling fee." },
    ],
    fees: [{ label: "Application and counselling fee", amount: 1000, currency: "INR", required: true, notes: "Fees vary by university and category; reserved category applicants may pay less." }],
    estimatedProcessingTime: { min: 4, max: 12, unit: "weeks", display: "4 to 12 weeks (counselling process)" },
    commonMistakes: [
      "Missing counselling registration deadlines after entrance results.",
      "Uploading documents in the wrong file size or format.",
      "Not applying for a category certificate early enough.",
    ],
    tips: [
      "Apply to multiple universities across different counselling rounds to maximize your chances.",
      "Keep scanned copies of all documents ready in the required size before portals open.",
      "Track seat allotment results on the official counselling portal, not third-party sites.",
    ],
    faq: [
      { question: "Is CUET mandatory for all central universities?", answer: "CUET is the common entrance test for most central universities; check your target institution's current policy." },
      { question: "Can I apply without entrance exam scores?", answer: "Some state or private universities admit on Class 12 merit alone; check individual institution requirements." },
    ],
    officialSourceLinks: [
      { title: "CUET information portal", publisher: "National Testing Agency", url: "https://cuet.samarth.ac.in/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["education", "india", "university", "entrance exam"],
    status: "published",
  },
  {
    slug: "germany-job-seeker-visa",
    title: "Apply for a Germany Job Seeker Visa",
    category: "Immigration",
    location: { countryCode: "DE", countryName: "Germany" },
    summary: "Prepare qualifications, financial proof, and language evidence to apply for the German Job Seeker Visa and search for skilled employment for up to six months.",
    audience: "Non-EU nationals with a recognized university degree or equivalent vocational qualification seeking employment in Germany.",
    eligibility: [
      { label: "Qualification recognition", description: "A foreign university degree or vocational qualification recognized or comparable to a German qualification." },
      { label: "Financial support", description: "Sufficient funds to cover living costs for the full six-month stay." },
      { label: "Language ability", description: "German or English language skills relevant to your professional field." },
    ],
    requiredDocuments: [
      { name: "Valid passport", description: "Must be valid for at least the full intended stay.", required: true },
      { name: "Degree or qualification certificate", description: "With a statement of comparability from anabin or the KMK if applicable.", required: true },
      { name: "Proof of financial means", description: "Bank statements showing sufficient funds or a blocked account confirmation.", required: true },
      { name: "Health insurance", description: "Travel or international health insurance valid for the duration of the stay.", required: true },
      { name: "Curriculum vitae", description: "Detailed CV in German or English.", required: true },
      { name: "Biometric passport photo", description: "Recent photo meeting German visa photo requirements.", required: true },
    ],
    instructions: [
      { order: 1, title: "Check qualification recognition", description: "Use the anabin database or apply to the Central Office for Foreign Education to assess comparability." },
      { order: 2, title: "Gather financial and insurance proof", description: "Open a blocked account (Sperrkonto) or gather bank statements totalling the required monthly amount." },
      { order: 3, title: "Book a visa appointment", description: "Schedule an appointment at the German embassy or consulate in your home country." },
      { order: 4, title: "Attend the appointment and submit documents", description: "Bring all originals and copies; pay the visa fee at the consulate." },
    ],
    fees: [{ label: "National visa application fee", amount: 75, currency: "EUR", required: true, notes: "Fee confirmed at the consulate; paid in local currency equivalent in some countries." }],
    estimatedProcessingTime: { min: 4, max: 12, unit: "weeks", display: "4 to 12 weeks" },
    commonMistakes: [
      "Applying without a qualified degree recognized under German standards.",
      "Providing bank statements that do not cover the full six-month requirement.",
      "Missing the biometric photo specification for the consulate.",
    ],
    tips: [
      "Research the anabin database early — recognition checks can take weeks.",
      "A blocked account (Sperrkonto) is a straightforward way to prove financial means.",
      "Learn basic German before arriving; most jobs will require it even for English-friendly roles.",
    ],
    faq: [
      { question: "Can I work while on a Job Seeker Visa?", answer: "No. The visa is for job searching only; you must apply for a work permit after securing employment." },
      { question: "Can it be extended?", answer: "No. The Job Seeker Visa is granted for up to six months and cannot be extended." },
    ],
    officialSourceLinks: [
      { title: "Job Seeker Visa information", publisher: "Federal Foreign Office Germany", url: "https://www.auswaertiges-amt.de/en/visa-service/buerger/jobsuche" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "High",
    tags: ["immigration", "germany", "job seeker", "visa"],
    status: "published",
  },
  {
    slug: "business-registration-sg",
    title: "Register a Business in Singapore",
    category: "Business",
    location: { countryCode: "SG", countryName: "Singapore" },
    summary: "Register a sole proprietorship, partnership, or private limited company with ACRA using BizFile+, and set up required tax and employer accounts.",
    audience: "Entrepreneurs and founders registering a new business entity in Singapore.",
    eligibility: [
      { label: "Residency or local director", description: "At least one locally resident director is required for a private limited company." },
      { label: "Registered address", description: "A Singapore registered address is required for all business entities." },
    ],
    requiredDocuments: [
      { name: "Director or owner NRIC/FIN or passport", description: "Identity document for all directors, shareholders, or owners.", required: true },
      { name: "Registered office address", description: "A Singapore address that can receive official mail.", required: true },
      { name: "Business activity description", description: "Singapore Standard Industrial Classification (SSIC) code for your business activity.", required: true },
    ],
    instructions: [
      { order: 1, title: "Choose the business structure", description: "Decide between sole proprietorship, partnership, or private limited company (Pte. Ltd.) based on liability and tax needs." },
      { order: 2, title: "Register on BizFile+", description: "Log in to ACRA's BizFile+ portal using Singpass and complete the online registration." },
      { order: 3, title: "Pay the registration fee", description: "Pay via credit card or other accepted methods on BizFile+." },
      { order: 4, title: "Set up tax and employer accounts", description: "Register for GST if turnover will exceed S$1 million, and open a CPF employer account if hiring." },
    ],
    fees: [{ label: "ACRA registration fee", amount: 315, currency: "SGD", required: true, notes: "Fee is S$315 for a private limited company; lower for simpler structures." }],
    estimatedProcessingTime: { min: 1, max: 3, unit: "days", display: "Same day to 3 days" },
    commonMistakes: [
      "Choosing the wrong business structure for your liability needs.",
      "Using a personal residential address without checking HDB or URA home office rules.",
      "Forgetting to register for GST once turnover crosses the threshold.",
    ],
    tips: [
      "Private limited companies offer limited liability and are preferred by investors.",
      "Use a corporate secretary service from day one to manage statutory filings.",
      "Open a dedicated business bank account before your first transaction.",
    ],
    faq: [
      { question: "Can a foreigner register a business in Singapore?", answer: "Yes, but a foreigner must appoint at least one locally resident director for a Pte. Ltd." },
      { question: "Is GST registration mandatory from day one?", answer: "Only if your taxable turnover exceeds S$1 million in a 12-month period." },
    ],
    officialSourceLinks: [
      { title: "BizFile+ business registration", publisher: "Accounting and Corporate Regulatory Authority", url: "https://www.bizfile.gov.sg/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["business", "singapore", "registration", "acra"],
    status: "published",
  },
  {
    slug: "tenant-rental-application-us",
    title: "Complete a Rental Application in the U.S.",
    category: "Housing",
    location: { countryCode: "US", countryName: "United States" },
    summary: "Prepare income proof, credit history, references, and ID to submit a competitive residential rental application.",
    audience: "Prospective tenants applying for an apartment or house rental in the United States.",
    eligibility: [
      { label: "Income", description: "Most landlords require gross monthly income of at least 2.5–3 times the monthly rent." },
      { label: "Credit history", description: "A credit check is standard; low scores or no credit history may require a co-signer or larger deposit." },
    ],
    requiredDocuments: [
      { name: "Government-issued photo ID", description: "Driver licence, passport, or state ID.", required: true },
      { name: "Proof of income", description: "Pay stubs (last 2–3 months), bank statements, or offer letter for new employment.", required: true },
      { name: "Rental history or references", description: "Contact details for previous landlords or personal references.", required: false },
      { name: "Credit authorization", description: "Signed consent for the landlord to run a credit and background check.", required: true },
    ],
    instructions: [
      { order: 1, title: "Review your credit report", description: "Check your credit score and resolve any errors before applying." },
      { order: 2, title: "Gather income documents", description: "Collect recent pay stubs, tax returns, or bank statements showing sufficient income." },
      { order: 3, title: "Complete the application form", description: "Fill in all fields accurately including employment, rental history, and emergency contacts." },
      { order: 4, title: "Pay the application fee and follow up", description: "Pay the screening fee if required and confirm the timeline for a decision." },
    ],
    fees: [{ label: "Application/screening fee", amount: 50, currency: "USD", required: false, notes: "Typically $25–$75; some states cap or restrict these fees." }],
    estimatedProcessingTime: { min: 1, max: 7, unit: "days", display: "1 to 7 days" },
    commonMistakes: [
      "Leaving fields blank instead of writing N/A.",
      "Not notifying references before listing them.",
      "Applying to units well outside the income qualification range.",
    ],
    tips: [
      "Prepare a renter's resume with your credit score, income, and references ready to send quickly.",
      "Offer to pay a larger security deposit if your credit is thin.",
      "Check state rules on application fee limits before paying.",
    ],
    faq: [
      { question: "Can a landlord reject me for bad credit?", answer: "Yes, though some states restrict the use of credit history. A co-signer may help." },
      { question: "Is the application fee refundable?", answer: "Usually not. Confirm refund policy before paying." },
    ],
    officialSourceLinks: [
      { title: "Tenant rights resources", publisher: "Consumer Financial Protection Bureau", url: "https://www.consumerfinance.gov/consumer-tools/renting/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["housing", "rental", "tenant", "united states"],
    status: "published",
  },
  {
    slug: "nzeta-visitor-nz",
    title: "Apply for a New Zealand ETA (NZeTA)",
    category: "Travel",
    location: { countryCode: "NZ", countryName: "New Zealand" },
    summary: "Apply for a New Zealand Electronic Travel Authority online or via the official app before travelling to New Zealand as a visa-waiver country citizen.",
    audience: "Citizens of visa-waiver countries (excluding Australian citizens) travelling to New Zealand for tourism, transit, or short visits.",
    eligibility: [
      { label: "Nationality", description: "You must hold a passport from a country eligible for the NZeTA visa waiver scheme." },
      { label: "Passport validity", description: "Your passport must be valid for the full intended stay." },
    ],
    requiredDocuments: [
      { name: "Valid passport", description: "The same passport you will travel with.", required: true },
      { name: "Digital passport photo", description: "A clear photo taken via the NZeTA app or uploaded during the online application.", required: true },
      { name: "Payment card", description: "Credit or debit card to pay the NZeTA and International Visitor Conservation and Tourism Levy.", required: true },
    ],
    instructions: [
      { order: 1, title: "Check eligibility", description: "Confirm your nationality is eligible for the NZeTA on the Immigration New Zealand website." },
      { order: 2, title: "Apply via the app or online", description: "Use the official NZeTA app or the Immigration New Zealand website to submit your application." },
      { order: 3, title: "Pay fees", description: "Pay the NZeTA application fee and the International Visitor Conservation and Tourism Levy (IVL)." },
      { order: 4, title: "Wait for approval", description: "Most applications are approved within 72 hours; apply well before travel." },
    ],
    fees: [
      { label: "NZeTA fee (app)", amount: 17, currency: "NZD", required: true, notes: "App applications cost NZ$17; website applications cost NZ$23." },
      { label: "International Visitor Conservation and Tourism Levy", amount: 100, currency: "NZD", required: true },
    ],
    estimatedProcessingTime: { min: 1, max: 3, unit: "days", display: "Within 72 hours" },
    commonMistakes: [
      "Using an unofficial third-party website that charges higher fees.",
      "Applying with a passport that differs from the one used at the border.",
      "Leaving the application until the day before travel.",
    ],
    tips: [
      "The official app is cheaper than the website; use it if possible.",
      "Apply at least 72 hours before departure to allow processing time.",
      "The NZeTA is linked to your passport — if you renew your passport, apply for a new one.",
    ],
    faq: [
      { question: "How long is an NZeTA valid?", answer: "An NZeTA is valid for multiple trips over two years, or until your passport expires, whichever comes first." },
      { question: "Do Australian citizens need an NZeTA?", answer: "No. Australian citizens do not need an NZeTA or visa to visit New Zealand." },
    ],
    officialSourceLinks: [
      { title: "NZeTA application", publisher: "Immigration New Zealand", url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/nzeta" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["travel", "new zealand", "eta", "visa waiver"],
    status: "published",
  },
  {
    slug: "medicaid-application-us",
    title: "Apply for Medicaid Coverage",
    category: "Healthcare",
    location: { countryCode: "US", countryName: "United States", region: "State-specific" },
    summary: "Determine eligibility, gather income and household documents, and submit a Medicaid application through your state marketplace or social services agency.",
    audience: "Low-income individuals, families, pregnant people, and qualifying adults in the United States.",
    eligibility: [
      { label: "Income", description: "Eligibility is based on household income relative to the federal poverty level; thresholds vary by state." },
      { label: "Residency and status", description: "Must be a U.S. citizen or qualifying immigration status and a resident of the applying state." },
    ],
    requiredDocuments: [
      { name: "Proof of identity", description: "Birth certificate, passport, or state ID.", required: true },
      { name: "Proof of income", description: "Pay stubs, tax returns, or employer letter for all household earners.", required: true },
      { name: "Proof of residency", description: "Utility bill, lease, or other document showing current state address.", required: true },
      { name: "Immigration documents", description: "Green card, visa, or other status document for non-citizens.", required: false },
    ],
    instructions: [
      { order: 1, title: "Check your state's eligibility rules", description: "Visit your state Medicaid agency or Healthcare.gov to review income limits for your household size." },
      { order: 2, title: "Gather documents", description: "Collect identity, income, residency, and any immigration documents for all household members." },
      { order: 3, title: "Submit your application", description: "Apply online at Healthcare.gov, through your state portal, by phone, or in person at a local office." },
      { order: 4, title: "Respond to requests and activate coverage", description: "Reply promptly to any requests for additional information and enroll once approved." },
    ],
    fees: [{ label: "Application fee", amount: 0, currency: "USD", required: false, notes: "Medicaid applications are free; premiums and copays depend on the program type." }],
    estimatedProcessingTime: { min: 1, max: 4, unit: "weeks", display: "1 to 4 weeks" },
    commonMistakes: [
      "Underreporting or omitting household income sources.",
      "Not including all household members on the application.",
      "Missing requests for additional documents, which can result in denial.",
    ],
    tips: [
      "Apply even if you are unsure you qualify — eligibility rules are complex and you may be surprised.",
      "Coverage can be retroactive to the first day of the application month in many states.",
      "Keep copies of everything you submit in case follow-up is needed.",
    ],
    faq: [
      { question: "Can I apply for Medicaid at any time?", answer: "Yes. Medicaid has no open enrollment period; you can apply year-round." },
      { question: "What if my income changes after approval?", answer: "Report income changes to your state agency promptly to avoid coverage issues or overpayment." },
    ],
    officialSourceLinks: [
      { title: "Medicaid.gov", publisher: "Centers for Medicare and Medicaid Services", url: "https://www.medicaid.gov/medicaid/eligibility/index.html" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["healthcare", "medicaid", "united states", "health insurance"],
    status: "published",
  },
  {
    slug: "child-passport-uk",
    title: "Apply for a Child's First UK Passport",
    category: "Family",
    location: { countryCode: "GB", countryName: "United Kingdom" },
    summary: "Gather identity documents, parental consent, and a compliant photo to apply online or by post for a child's first UK passport.",
    audience: "Parents or legal guardians applying for a passport for a child under 16 in the United Kingdom.",
    eligibility: [
      { label: "Nationality", description: "The child must be a British citizen by birth, descent, or registration." },
      { label: "Parental consent", description: "All people with parental responsibility must consent to the passport application." },
    ],
    requiredDocuments: [
      { name: "Child's birth certificate", description: "Full birth certificate showing parent details.", required: true },
      { name: "Passport photo", description: "Recent photo meeting HMPO size, background, and expression requirements.", required: true },
      { name: "Parent or guardian's passport or ID", description: "To confirm identity and nationality entitlement.", required: true },
      { name: "Countersignature", description: "A professional countersignatory may be required to confirm the child's identity if no previous passport exists.", required: false },
    ],
    instructions: [
      { order: 1, title: "Confirm nationality entitlement", description: "Check that the child qualifies for a British passport based on birth circumstances and parents' status." },
      { order: 2, title: "Prepare the photo and documents", description: "Get a compliant passport photo and gather the birth certificate and parent documents." },
      { order: 3, title: "Apply online or by post", description: "Use the HMPO online service or complete a paper form (PD2) for a first child passport." },
      { order: 4, title: "Track and receive the passport", description: "Use the online tracker once submitted and keep the reference number safe." },
    ],
    fees: [{ label: "Child passport (online)", amount: 53, currency: "GBP", required: true, notes: "Post office check-and-send and premium services carry additional charges." }],
    estimatedProcessingTime: { min: 3, max: 10, unit: "weeks", display: "3 to 10 weeks" },
    commonMistakes: [
      "Submitting a photo where the child's eyes are closed or expression is not neutral.",
      "Forgetting to get all parental responsibility holders to consent.",
      "Applying too close to a planned travel date.",
    ],
    tips: [
      "Apply well in advance — processing times increase during school holiday periods.",
      "Use the online photo checker tool before printing or submitting the photo.",
      "Keep the child's birth certificate — it is returned but takes time.",
    ],
    faq: [
      { question: "Can one parent apply without the other's consent?", answer: "All those with parental responsibility must consent; the HMPO may contact other parties to confirm." },
      { question: "How long is a child's passport valid?", answer: "Five years, compared to ten years for an adult passport." },
    ],
    officialSourceLinks: [
      { title: "Apply for a child's first UK passport", publisher: "HM Passport Office", url: "https://www.gov.uk/apply-first-adult-passport/child" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["family", "passport", "uk", "child"],
    status: "published",
  },
  {
    slug: "mykad-renewal-my",
    title: "Renew a Malaysian MyKad (National Identity Card)",
    category: "Government services",
    location: { countryCode: "MY", countryName: "Malaysia" },
    summary: "Visit a National Registration Department (JPN) counter with your current MyKad and supporting documents to renew or replace your Malaysian identity card.",
    audience: "Malaysian citizens whose MyKad is damaged, lost, or needs updating due to address or name changes.",
    eligibility: [
      { label: "Citizenship", description: "Must be a Malaysian citizen." },
      { label: "Renewal reason", description: "Scheduled renewal, damage, loss, or change of personal particulars." },
    ],
    requiredDocuments: [
      { name: "Current MyKad", description: "Existing card (if still in possession); bring even if damaged.", required: false },
      { name: "Police report", description: "Required if the MyKad has been lost or stolen.", required: false },
      { name: "Supporting documents for changes", description: "Marriage certificate, deed poll, or court order if name or particulars have changed.", required: false },
    ],
    instructions: [
      { order: 1, title: "Determine the type of application", description: "Identify whether it is a renewal, replacement for loss, or update for changed particulars." },
      { order: 2, title: "Gather required documents", description: "Collect the current card, police report if lost, and any supporting documents for changes." },
      { order: 3, title: "Visit a JPN counter", description: "Go to the nearest National Registration Department office or mobile JPN counter." },
      { order: 4, title: "Collect the new MyKad", description: "Processing is often same-day; confirm collection method at the counter." },
    ],
    fees: [
      { label: "First renewal", amount: 10, currency: "MYR", required: true, notes: "RM10 for first renewal; subsequent renewals and replacements may differ." },
      { label: "Loss replacement", amount: 100, currency: "MYR", required: false, notes: "Higher fee applies for replacement due to loss; confirm at JPN." },
    ],
    estimatedProcessingTime: { min: 1, max: 3, unit: "days", display: "Same day to 3 days" },
    commonMistakes: [
      "Not bringing a police report when replacing a lost card.",
      "Forgetting supporting documents for name or address changes.",
      "Visiting the wrong JPN branch for your registered home state.",
    ],
    tips: [
      "Check JPN's website for mobile counter schedules in your area.",
      "Renew well before travel — your MyKad may be required for domestic flights.",
      "Update your address at JPN whenever you move permanently.",
    ],
    faq: [
      { question: "Can I renew at any JPN office?", answer: "Yes. You can renew at any JPN counter nationwide, not just in your registered state." },
      { question: "Is the MyKad needed for domestic travel?", answer: "Yes. The MyKad is required for identity verification at Malaysian airports and checkpoints." },
    ],
    officialSourceLinks: [
      { title: "JPN MyKad services", publisher: "Jabatan Pendaftaran Negara Malaysia", url: "https://www.jpn.gov.my/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["government services", "malaysia", "mykad", "identity"],
    status: "published",
  },
  {
    slug: "ucas-university-application-uk",
    title: "Apply to University Through UCAS",
    category: "Education",
    location: { countryCode: "GB", countryName: "United Kingdom" },
    summary: "Register on UCAS, write a personal statement, select up to five courses, and submit your application before the relevant deadline.",
    audience: "Students in the UK and internationally applying for undergraduate university courses starting in the UK.",
    eligibility: [
      { label: "Qualifications", description: "Must meet or expect to meet the entry requirements set by each chosen university." },
      { label: "Age", description: "No minimum age, but most applicants are 17–18 at the time of application." },
    ],
    requiredDocuments: [
      { name: "Academic qualifications or predicted grades", description: "A-levels, IB, Scottish Highers, or international equivalent.", required: true },
      { name: "Personal statement", description: "Up to 4,000 characters explaining your motivation and suitability for the subject.", required: true },
      { name: "Academic reference", description: "Written by a teacher, tutor, or adviser — submitted through UCAS on your behalf.", required: true },
    ],
    instructions: [
      { order: 1, title: "Create a UCAS account", description: "Register at ucas.com and link your account if your school has a UCAS centre number." },
      { order: 2, title: "Research and choose courses", description: "Select up to five courses at different universities." },
      { order: 3, title: "Write your personal statement", description: "Explain your passion for the subject, relevant experience, and future goals in under 4,000 characters." },
      { order: 4, title: "Submit before the deadline", description: "Submit by the January 29 deadline for most courses; October 15 for Oxford, Cambridge, and medicine." },
    ],
    fees: [{ label: "UCAS application fee", amount: 28, currency: "GBP", required: true, notes: "£28 for multiple choices; £13 for a single choice." }],
    estimatedProcessingTime: { min: 4, max: 16, unit: "weeks", display: "4 to 16 weeks for decisions" },
    commonMistakes: [
      "Missing the earlier deadline for medicine, dentistry, Oxford, or Cambridge.",
      "Writing a personal statement that describes activities rather than demonstrating academic motivation.",
      "Submitting before your referee has completed their reference.",
    ],
    tips: [
      "Draft your personal statement early and ask teachers for feedback before submitting.",
      "Research entry requirements carefully — grades needed differ significantly by course and university.",
      "Track all offers in the UCAS portal and respond to decisions by the stated deadline.",
    ],
    faq: [
      { question: "Can I apply to more than five universities?", answer: "No. UCAS limits applications to a maximum of five course choices." },
      { question: "What happens through Clearing?", answer: "If you do not receive an offer or miss your grades, Clearing allows you to apply for remaining vacancies after results day." },
    ],
    officialSourceLinks: [
      { title: "How to apply through UCAS", publisher: "UCAS", url: "https://www.ucas.com/undergraduate/applying-to-university/how-to-apply" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["education", "ucas", "uk", "university"],
    status: "published",
  },
  {
    slug: "gst-hst-registration-ca",
    title: "Register for GST/HST in Canada",
    category: "Business",
    location: { countryCode: "CA", countryName: "Canada" },
    summary: "Register your Canadian business for GST/HST with the CRA once revenue exceeds $30,000 in four consecutive calendar quarters or voluntarily from the start.",
    audience: "Small business owners, freelancers, and self-employed individuals operating in Canada.",
    eligibility: [
      { label: "Revenue threshold", description: "Mandatory registration once taxable supplies exceed C$30,000 in any four consecutive calendar quarters." },
      { label: "Voluntary registration", description: "Businesses below the threshold can register voluntarily to claim input tax credits." },
    ],
    requiredDocuments: [
      { name: "Business Number (BN)", description: "Your CRA Business Number — obtained when you register your business with the CRA.", required: true },
      { name: "Business information", description: "Legal name, operating name, business address, and fiscal year-end.", required: true },
    ],
    instructions: [
      { order: 1, title: "Check if registration is required", description: "Review whether your taxable supplies have crossed the $30,000 threshold in any four consecutive quarters." },
      { order: 2, title: "Register online with CRA My Business Account", description: "Log in to My Business Account and add a GST/HST account to your Business Number." },
      { order: 3, title: "Choose your reporting period", description: "Select annual, quarterly, or monthly filing based on revenue level." },
      { order: 4, title: "Start collecting and remitting", description: "Begin charging GST/HST on taxable supplies and remit net tax by the filing deadline." },
    ],
    fees: [{ label: "Registration fee", amount: 0, currency: "CAD", required: false, notes: "GST/HST registration is free." }],
    estimatedProcessingTime: { min: 1, max: 5, unit: "days", display: "1 to 5 business days" },
    commonMistakes: [
      "Waiting too long after crossing the $30,000 threshold — registration is required within 29 days.",
      "Not tracking input tax credits on business purchases from day one.",
      "Mixing HST (harmonized provinces) and GST rates incorrectly across provinces.",
    ],
    tips: [
      "Register voluntarily early so you can claim input tax credits on startup expenses.",
      "Use CRA's My Business Account to file and remit online to avoid mailing delays.",
      "Set aside GST/HST collected in a separate account to avoid spending it before remittance.",
    ],
    faq: [
      { question: "Do I charge GST or HST?", answer: "It depends on the province of supply. Harmonized provinces use HST; others use GST, sometimes alongside provincial sales tax." },
      { question: "What are input tax credits?", answer: "ITCs allow you to recover the GST/HST paid on business-related purchases and expenses." },
    ],
    officialSourceLinks: [
      { title: "Register for a GST/HST account", publisher: "Canada Revenue Agency", url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/account-register.html" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["business", "canada", "gst", "hst", "tax"],
    status: "published",
  },
  {
    slug: "green-card-marriage-us",
    title: "Apply for a Green Card Through Marriage (U.S.)",
    category: "Immigration",
    location: { countryCode: "US", countryName: "United States" },
    summary: "Complete the petition, adjustment of status or consular processing, biometrics, and interview steps to obtain lawful permanent residence through a U.S. citizen or LPR spouse.",
    audience: "Foreign nationals married to a U.S. citizen or lawful permanent resident seeking permanent residence.",
    eligibility: [
      { label: "Valid marriage", description: "The marriage must be legally valid in the jurisdiction where it took place and entered in good faith." },
      { label: "Petitioner status", description: "The petitioning spouse must be a U.S. citizen or lawful permanent resident." },
    ],
    requiredDocuments: [
      { name: "Form I-130", description: "Petition for Alien Relative, filed by the U.S. citizen or LPR spouse.", required: true },
      { name: "Marriage certificate", description: "Official certified marriage certificate.", required: true },
      { name: "Evidence of bona fide marriage", description: "Joint lease, bank statements, photos, and correspondence showing a genuine relationship.", required: true },
      { name: "Form I-485 (if in the U.S.)", description: "Application to Register Permanent Residence for adjustment of status.", required: false },
      { name: "Medical examination (Form I-693)", description: "Completed by a USCIS-designated civil surgeon.", required: true },
    ],
    instructions: [
      { order: 1, title: "File Form I-130", description: "The U.S. citizen or LPR spouse files the petition with USCIS." },
      { order: 2, title: "Choose adjustment of status or consular processing", description: "If the applicant is already in the U.S., file I-485. If abroad, proceed through a U.S. embassy." },
      { order: 3, title: "Complete biometrics and medical exam", description: "Attend a biometrics appointment and complete the medical examination with a designated civil surgeon." },
      { order: 4, title: "Attend the interview", description: "Both spouses typically attend an interview at USCIS or the U.S. consulate to verify the relationship." },
    ],
    fees: [
      { label: "Form I-130 filing fee", amount: 675, currency: "USD", required: true },
      { label: "Form I-485 filing fee", amount: 1440, currency: "USD", required: false, notes: "For adjustment of status applicants inside the U.S." },
    ],
    estimatedProcessingTime: { min: 8, max: 24, unit: "months", display: "8 to 24 months" },
    commonMistakes: [
      "Submitting insufficient evidence of a bona fide marriage.",
      "Missing required translations for foreign-language documents.",
      "Filing the wrong form based on whether the applicant is inside or outside the U.S.",
    ],
    tips: [
      "Include a wide variety of evidence — joint financials, photos over time, and communications.",
      "Hire an immigration attorney if there are any prior visa violations or complex circumstances.",
      "Check USCIS processing times regularly as they change frequently.",
    ],
    faq: [
      { question: "Does the marriage need to happen before filing?", answer: "Yes. The marriage must be legally complete before you file the I-130 petition." },
      { question: "Is a conditional green card different?", answer: "If married less than two years at approval, you may receive a two-year conditional green card and must file I-751 to remove conditions." },
    ],
    officialSourceLinks: [
      { title: "Green card for a spouse", publisher: "USCIS", url: "https://www.uscis.gov/green-card/green-card-eligibility/green-card-for-immediate-relatives-of-us-citizen" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "High",
    tags: ["immigration", "green card", "marriage", "united states"],
    status: "published",
  },
  {
    slug: "jan-dhan-account-in",
    title: "Open a Pradhan Mantri Jan Dhan Yojana Account",
    category: "Banking",
    location: { countryCode: "IN", countryName: "India" },
    summary: "Open a zero-balance bank account under India's financial inclusion scheme at any participating bank branch with basic identity and address proof.",
    audience: "Indian residents who are unbanked or seeking a no-frills basic savings account under the PMJDY scheme.",
    eligibility: [
      { label: "Age", description: "Must be at least 10 years old; minors need a parent or guardian to operate jointly." },
      { label: "Existing account status", description: "Intended for individuals who do not already hold a PMJDY account." },
    ],
    requiredDocuments: [
      { name: "Aadhaar card", description: "Preferred identity and address document for PMJDY accounts.", required: true, notes: "If Aadhaar is unavailable, other officially valid documents may be accepted." },
      { name: "Officially Valid Document (OVD)", description: "Voter ID, NREGA job card, driving licence, or passport as alternative identity proof.", required: false },
      { name: "Passport-size photograph", description: "Recent photograph for the account opening form.", required: true },
    ],
    instructions: [
      { order: 1, title: "Visit any participating bank branch", description: "All public sector banks, select private banks, and regional rural banks participate in PMJDY." },
      { order: 2, title: "Fill the account opening form", description: "Complete the PMJDY form with personal and nominee details." },
      { order: 3, title: "Submit documents", description: "Provide Aadhaar or an OVD and a passport-size photograph." },
      { order: 4, title: "Receive passbook and RuPay debit card", description: "The account is opened immediately; the RuPay card and passbook are issued." },
    ],
    fees: [{ label: "Account opening fee", amount: 0, currency: "INR", required: false, notes: "PMJDY accounts are zero-balance with no minimum balance requirement." }],
    estimatedProcessingTime: { min: 1, max: 3, unit: "days", display: "Same day to 3 days" },
    commonMistakes: [
      "Providing an Aadhaar address that does not match your current residence.",
      "Not nominating a beneficiary, which is important for the accidental insurance benefit.",
      "Assuming a PMJDY account cannot be used for government benefit transfers.",
    ],
    tips: [
      "Link your Aadhaar to the account immediately to receive direct benefit transfers (DBT).",
      "The RuPay card includes accidental insurance cover — keep it active with at least one transaction every 45 days.",
      "You can convert the account to a regular savings account later once you build a banking history.",
    ],
    faq: [
      { question: "Is there a minimum balance requirement?", answer: "No. PMJDY accounts are zero-balance accounts with no penalty for a nil balance." },
      { question: "What benefits come with a PMJDY account?", answer: "Benefits include RuPay debit card, accidental insurance, overdraft facility after satisfactory use, and eligibility for government scheme transfers." },
    ],
    officialSourceLinks: [
      { title: "PMJDY scheme details", publisher: "Department of Financial Services, Government of India", url: "https://pmjdy.gov.in/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["banking", "india", "jan dhan", "financial inclusion"],
    status: "published",
  },
  {
    slug: "singapore-tourist-visa",
    title: "Apply for a Singapore Tourist Visa",
    category: "Travel",
    location: { countryCode: "SG", countryName: "Singapore" },
    summary: "Check visa-free eligibility or apply for a Singapore tourist visa through an accredited Singapore visa agent, embassy, or online e-VISA channel.",
    audience: "International visitors planning a leisure or short-stay trip to Singapore who require a visa.",
    eligibility: [
      { label: "Visa-free check", description: "Over 160 nationalities can enter Singapore visa-free; confirm your passport's status on the ICA website first." },
      { label: "Passport validity", description: "Passport must be valid for at least six months beyond your intended date of entry." },
    ],
    requiredDocuments: [
      { name: "Valid passport", description: "With at least six months' validity and at least one blank page.", required: true },
      { name: "Completed visa application form", description: "Form 14A submitted through an accredited agent or e-VISA portal.", required: true },
      { name: "Passport photo", description: "Recent photo meeting Singapore ICA specifications.", required: true },
      { name: "Proof of accommodation", description: "Hotel booking confirmation or invitation letter from a Singapore resident.", required: true },
      { name: "Return flight ticket", description: "Confirmed onward or return travel booking.", required: true },
      { name: "Proof of sufficient funds", description: "Bank statements or credit card statement for the duration of your stay.", required: true },
    ],
    instructions: [
      { order: 1, title: "Confirm whether you need a visa", description: "Check the ICA website for your passport's visa requirement before applying." },
      { order: 2, title: "Apply through an accredited agent or e-VISA", description: "Use an ICA-accredited Singapore visa agent or the official e-VISA portal if eligible." },
      { order: 3, title: "Submit documents and pay the fee", description: "Provide all required documents and pay the visa application fee." },
      { order: 4, title: "Wait for approval and travel", description: "Processing typically takes three to five business days; print the approved visa before travel." },
    ],
    fees: [{ label: "Singapore visa application fee", amount: 30, currency: "SGD", required: true, notes: "Fee is non-refundable; paid to the agent or portal." }],
    estimatedProcessingTime: { min: 3, max: 7, unit: "days", display: "3 to 7 business days" },
    commonMistakes: [
      "Not checking visa-free eligibility before paying for a visa application.",
      "Submitting an application with a passport that has less than six months' validity.",
      "Using an unofficial agent and paying inflated or fraudulent fees.",
    ],
    tips: [
      "Most Western passport holders are visa-free for 30–90 days — always check the ICA list first.",
      "Book flexible accommodation to avoid losing deposits if the visa is delayed.",
      "The Singapore arrival card (SGAC) must be completed online within three days before arrival.",
    ],
    faq: [
      { question: "Can I extend my stay in Singapore?", answer: "Short extensions may be granted at the ICA Building; this is not guaranteed and depends on your circumstances." },
      { question: "Is Singapore safe for solo travelers?", answer: "Singapore consistently ranks as one of the safest countries in the world for all travelers." },
    ],
    officialSourceLinks: [
      { title: "Visit pass and visa information", publisher: "Immigration and Checkpoints Authority", url: "https://www.ica.gov.sg/enter-transit-depart/entering-singapore/visa-requirements" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["travel", "singapore", "tourist visa", "tourism"],
    status: "published",
  },
  {
    slug: "apply-birth-certificate-copy",
    title: "Apply for a Birth Certificate Copy",
    category: "Family",
    location: { countryCode: "US", countryName: "United States", region: "State-specific" },
    summary: "Request a certified copy of a birth certificate from your state vital records office for identification, passport applications, and school enrollment.",
    audience: "Adults applying for their own birth certificate, or parents applying for a child's certificate.",
    eligibility: [
      { label: "Authorized requester", description: "You must be the person on the certificate, their parent, child, or legal representative." },
    ],
    requiredDocuments: [
      { name: "Government-issued ID", description: "Driver's license, passport, or state ID.", required: true },
      { name: "Application form", description: "State-specific vital records request form.", required: true },
      { name: "Proof of relationship", description: "Required if applying on behalf of a family member.", required: false },
    ],
    instructions: [
      { order: 1, title: "Locate the correct office", description: "Find the vital records office in the state or county where the birth occurred." },
      { order: 2, title: "Choose request method", description: "Decide whether to apply online, by mail, or in person." },
      { order: 3, title: "Submit application and fee", description: "Provide all required personal details and pay the processing fee." },
      { order: 4, title: "Receive the certificate", description: "Wait for the certificate to be mailed, or receive it same-day if applying in person." },
    ],
    fees: [{ label: "Certified copy fee", amount: 20, currency: "USD", required: true, notes: "Fees vary by state, typically between $15 and $30." }],
    estimatedProcessingTime: { min: 1, max: 4, unit: "weeks", display: "1 to 4 weeks" },
    commonMistakes: [
      "Applying to the wrong state or county office.",
      "Providing incorrect parents' full maiden names on the application.",
      "Using an unofficial third-party service with hidden fees.",
    ],
    tips: [
      "Order multiple copies at once, as many official processes require an original certified copy.",
      "Online services like VitalChek are authorized by many states but charge additional processing fees.",
    ],
    faq: [
      { question: "Can anyone order a copy of my birth certificate?", answer: "No, birth records are restricted to the individual, immediate family, and legal representatives." },
      { question: "Is a hospital-issued birth certificate valid?", answer: "Usually no. You need a certified copy issued by the state or county government." },
    ],
    officialSourceLinks: [
      { title: "Where to Write for Vital Records", publisher: "CDC", url: "https://www.cdc.gov/nchs/w2w/index.htm" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["family", "birth certificate", "vital records", "identity"],
    status: "published",
  },
  {
    slug: "apply-marriage-certificate-copy",
    title: "Apply for a Marriage Certificate Copy",
    category: "Family",
    location: { countryCode: "US", countryName: "United States", region: "County-specific" },
    summary: "Obtain a certified copy of your marriage certificate from the county clerk or state vital records office for legal, name change, or tax purposes.",
    audience: "Spouses needing a certified record of their marriage.",
    eligibility: [
      { label: "Authorized requester", description: "Generally restricted to the spouses named on the certificate, immediate family, or legal representatives." },
    ],
    requiredDocuments: [
      { name: "Government-issued ID", description: "Driver's license, state ID, or passport.", required: true },
      { name: "Application form", description: "Marriage record request form.", required: true },
    ],
    instructions: [
      { order: 1, title: "Identify the issuing office", description: "Locate the county clerk or state vital records office where the marriage license was issued." },
      { order: 2, title: "Gather information", description: "Provide full names of both spouses (including maiden names) and the date of marriage." },
      { order: 3, title: "Submit request and payment", description: "Apply online, via mail, or in person, and pay the required fee." },
      { order: 4, title: "Receive the certificate", description: "The certified copy will be mailed to you or provided at the counter." },
    ],
    fees: [{ label: "Certified copy fee", amount: 15, currency: "USD", required: true, notes: "Usually $10 to $25 depending on the county and state." }],
    estimatedProcessingTime: { min: 1, max: 3, unit: "weeks", display: "1 to 3 weeks" },
    commonMistakes: [
      "Requesting the certificate from the state where you currently live, rather than where the marriage took place.",
      "Confusing a decorative marriage certificate with the official government-issued certified copy.",
    ],
    tips: [
      "If you are changing your name, you will likely need 2-3 certified copies to update your Social Security, driver's license, and bank accounts.",
      "In-person requests at the county clerk's office are often processed the same day.",
    ],
    faq: [
      { question: "Is my marriage certificate a public record?", answer: "In some states yes, but certified copies are usually restricted to the spouses and authorized individuals." },
      { question: "How long after the wedding is the certificate available?", answer: "Typically 1 to 3 weeks after the officiant returns the signed license to the county." },
    ],
    officialSourceLinks: [
      { title: "Where to Write for Vital Records", publisher: "CDC", url: "https://www.cdc.gov/nchs/w2w/index.htm" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["family", "marriage certificate", "vital records", "name change"],
    status: "published",
  },
  {
    slug: "register-to-vote-us",
    title: "Register to Vote",
    category: "Government services",
    location: { countryCode: "US", countryName: "United States", region: "State-specific" },
    summary: "Register to vote in federal, state, and local elections by submitting a voter registration application online, by mail, or in person.",
    audience: "U.S. citizens aged 18 and older who have not yet registered or need to update their registration.",
    eligibility: [
      { label: "Citizenship", description: "Must be a U.S. citizen." },
      { label: "Age", description: "Must be 18 years old on or before Election Day (some states allow pre-registration at 16 or 17)." },
      { label: "Residency", description: "Must meet your state's residency requirements." },
    ],
    requiredDocuments: [
      { name: "State ID or Driver's License", description: "Required for online registration in most states.", required: true },
      { name: "Social Security Number", description: "The last 4 digits are often required if you don't have a state ID.", required: false },
    ],
    instructions: [
      { order: 1, title: "Check your state's deadline", description: "Voter registration deadlines vary from 30 days before the election to Election Day itself." },
      { order: 2, title: "Choose your registration method", description: "Use Vote.gov to find your state's online portal, or print a National Mail Voter Registration Form." },
      { order: 3, title: "Complete the application", description: "Fill out your name, address, date of birth, and ID information." },
      { order: 4, title: "Verify your registration", description: "Check your voter status online a few weeks after submitting to ensure you are active." },
    ],
    fees: [{ label: "Registration fee", amount: 0, currency: "USD", required: false, notes: "Voter registration is always free." }],
    estimatedProcessingTime: { min: 1, max: 4, unit: "weeks", display: "1 to 4 weeks" },
    commonMistakes: [
      "Missing the voter registration deadline before an upcoming election.",
      "Forgetting to update registration after moving to a new address or changing names.",
      "Assuming registration at the DMV is automatic without confirming.",
    ],
    tips: [
      "If you moved recently, update your registration immediately.",
      "Many states allow you to register online in less than 5 minutes.",
      "Check your state's absentee or mail-in voting rules if you cannot vote in person.",
    ],
    faq: [
      { question: "Do I have to declare a political party?", answer: "In some states, you must register with a party to vote in its primary election. In general elections, you can vote for anyone." },
      { question: "Can I register on Election Day?", answer: "Some states offer Same-Day Voter Registration, but many require you to register weeks in advance." },
    ],
    officialSourceLinks: [
      { title: "Register to Vote", publisher: "Vote.gov", url: "https://vote.gov/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["government services", "voting", "elections", "civic duty"],
    status: "published",
  },
  {
    slug: "apply-tax-id-number-us",
    title: "Apply for a Tax Identification Number",
    category: "Business",
    location: { countryCode: "US", countryName: "United States" },
    summary: "Apply for an Employer Identification Number (EIN) from the IRS to identify your business entity for tax, banking, and employment purposes.",
    audience: "New business owners, freelancers forming an LLC, and organizations needing a federal tax ID.",
    eligibility: [
      { label: "Principal business location", description: "The principal business must be located in the U.S. or U.S. Territories." },
      { label: "Valid taxpayer ID", description: "The person applying must have a valid SSN, ITIN, or existing EIN." },
    ],
    requiredDocuments: [
      { name: "Owner's SSN or ITIN", description: "Social Security Number or Individual Taxpayer Identification Number.", required: true },
      { name: "Business formation details", description: "Legal structure, date of formation, and state of incorporation.", required: true },
    ],
    instructions: [
      { order: 1, title: "Determine your eligibility", description: "Ensure your business is legally formed and you have the required personal tax ID." },
      { order: 2, title: "Access the IRS online tool", description: "Use the IRS EIN Assistant available Monday to Friday." },
      { order: 3, title: "Complete the application", description: "Answer questions about your business structure, ownership, and reason for applying." },
      { order: 4, title: "Receive your EIN immediately", description: "Upon successful submission, you will receive your EIN and a confirmation notice instantly." },
    ],
    fees: [{ label: "EIN application fee", amount: 0, currency: "USD", required: false, notes: "The IRS issues EINs for free." }],
    estimatedProcessingTime: { min: 0, max: 0, unit: "minutes", display: "Immediate (online)" },
    commonMistakes: [
      "Paying a third-party website to get an EIN when the IRS provides it for free.",
      "Applying for an EIN before the state has approved the LLC or corporation formation.",
      "Losing the initial confirmation letter (CP575).",
    ],
    tips: [
      "The IRS online application is only available during specific hours (usually 7 AM - 10 PM EST, Monday-Friday).",
      "Save the PDF confirmation notice immediately, as you cannot retrieve it online later.",
      "You will need an EIN to open a business bank account or hire employees.",
    ],
    faq: [
      { question: "Do sole proprietors need an EIN?", answer: "Not always, you can often use your SSN. However, getting an EIN helps protect your SSN and is required if you hire employees." },
      { question: "Can I get an EIN if I am an international applicant?", answer: "Yes, but you cannot use the online tool; you must apply by fax or mail." },
    ],
    officialSourceLinks: [
      { title: "Apply for an Employer Identification Number (EIN) Online", publisher: "Internal Revenue Service", url: "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["business", "taxes", "ein", "irs"],
    status: "published",
  },
  {
    slug: "open-student-bank-account",
    title: "Open a Student Bank Account",
    category: "Money",
    location: { countryCode: "CA", countryName: "Canada" },
    summary: "Open a student checking account with no monthly fees by providing proof of enrollment and identity to a Canadian bank.",
    audience: "Post-secondary students attending college or university in Canada.",
    eligibility: [
      { label: "Student status", description: "Must be enrolled full-time in a qualifying post-secondary institution." },
      { label: "Age", description: "Typically must be the age of majority in your province, or apply with a parent/guardian." },
    ],
    requiredDocuments: [
      { name: "Government ID", description: "Passport, driver's license, or provincial ID.", required: true },
      { name: "Proof of enrollment", description: "Student ID card, acceptance letter, or current class schedule.", required: true },
      { name: "Study permit", description: "Required if you are an international student.", required: false },
    ],
    instructions: [
      { order: 1, title: "Compare bank offers", description: "Look for accounts with zero monthly fees and unlimited transactions." },
      { order: 2, title: "Gather required documents", description: "Ensure your proof of enrollment clearly shows the current academic year." },
      { order: 3, title: "Apply online or in-branch", description: "Many banks allow online opening, but international students often must visit a branch." },
      { order: 4, title: "Set up the account", description: "Activate your debit card, download the mobile app, and set up e-Transfers." },
    ],
    fees: [{ label: "Monthly maintenance fee", amount: 0, currency: "CAD", required: false, notes: "Student accounts generally waive the monthly fee while you are enrolled." }],
    estimatedProcessingTime: { min: 1, max: 2, unit: "days", display: "Same day to 2 days" },
    commonMistakes: [
      "Forgetting to renew student status with the bank each year, resulting in unexpected monthly fees.",
      "Ignoring limits on e-Transfers or ATM withdrawals from other banks.",
      "Opening an account without checking if there is an ATM on campus.",
    ],
    tips: [
      "Many Canadian banks offer sign-up bonuses (like cash or points) for students in August and September.",
      "Ask if the bank offers a student credit card to help build credit early.",
      "Set up alerts to avoid overdraft fees.",
    ],
    faq: [
      { question: "What happens when I graduate?", answer: "The bank will typically transition your account to a standard checking account with monthly fees, or a 'recent graduate' account for a year." },
      { question: "Can international students get a credit card?", answer: "Yes, many banks offer unsecured student credit cards for international students without Canadian credit history." },
    ],
    officialSourceLinks: [
      { title: "Opening a bank account", publisher: "Financial Consumer Agency of Canada", url: "https://www.canada.ca/en/financial-consumer-agency/services/banking/opening-bank-account.html" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["banking", "student", "money", "canada"],
    status: "published",
  },
  {
    slug: "apply-scholarship-us",
    title: "Apply for a Scholarship",
    category: "Education",
    location: { countryCode: "US", countryName: "United States" },
    summary: "Search, prepare essays, and submit applications for college scholarships to help fund your higher education.",
    audience: "High school seniors, current college students, and adult learners seeking financial aid.",
    eligibility: [
      { label: "Specific criteria", description: "Varies widely based on merit, financial need, demographics, or intended major." },
    ],
    requiredDocuments: [
      { name: "Academic Transcripts", description: "Official or unofficial high school or college transcripts.", required: true },
      { name: "Personal Essay", description: "A tailored essay responding to the scholarship prompt.", required: true },
      { name: "Letters of Recommendation", description: "Usually from teachers, employers, or community leaders.", required: false },
      { name: "FAFSA/Financial Information", description: "Proof of financial need, if applying for a need-based scholarship.", required: false },
    ],
    instructions: [
      { order: 1, title: "Search for opportunities", description: "Use databases like Fastweb, College Board, and local community foundations to find matching scholarships." },
      { order: 2, title: "Gather application materials", description: "Request transcripts and recommendation letters well in advance." },
      { order: 3, title: "Draft and refine essays", description: "Write essays that directly address the prompt and highlight your unique experiences." },
      { order: 4, title: "Submit before the deadline", description: "Double-check all requirements and submit the application package on time." },
    ],
    fees: [{ label: "Application fee", amount: 0, currency: "USD", required: false, notes: "Legitimate scholarships should never charge an application fee." }],
    estimatedProcessingTime: { min: 4, max: 12, unit: "weeks", display: "1 to 3 months for a decision" },
    commonMistakes: [
      "Paying a fee to apply for a 'guaranteed' scholarship (often a scam).",
      "Reusing a generic essay without tailoring it to the specific scholarship prompt.",
      "Missing the deadline by waiting until the last minute to request recommendation letters.",
    ],
    tips: [
      "Local scholarships often have fewer applicants, increasing your chances of winning.",
      "Create a spreadsheet to track deadlines, requirements, and submission status.",
      "Proofread your essay multiple times and have someone else read it before submitting.",
    ],
    faq: [
      { question: "Can I use scholarship money for living expenses?", answer: "It depends on the scholarship terms. Some restrict funds to tuition and books, while others allow room and board." },
      { question: "Are scholarships taxable?", answer: "Generally, scholarship money used for tuition and required fees is not taxable, but money used for room and board may be." },
    ],
    officialSourceLinks: [
      { title: "Federal Student Aid: Scholarships", publisher: "U.S. Department of Education", url: "https://studentaid.gov/understand-aid/types/scholarships" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["education", "scholarship", "financial aid", "college"],
    status: "published",
  },
  {
    slug: "enroll-college-freshman",
    title: "Enroll in College as a Freshman",
    category: "Education",
    location: { countryCode: "US", countryName: "United States" },
    summary: "Complete the post-acceptance enrollment steps, including submitting deposits, attending orientation, and registering for classes.",
    audience: "Recently accepted high school seniors preparing for their first year of college.",
    eligibility: [
      { label: "Acceptance", description: "Must have received an official offer of admission." },
      { label: "High school graduation", description: "Must complete high school and submit final transcripts before classes begin." },
    ],
    requiredDocuments: [
      { name: "Final High School Transcript", description: "Official transcript showing graduation date.", required: true },
      { name: "Immunization Records", description: "Proof of required vaccinations.", required: true },
      { name: "Financial Aid Acceptance", description: "Signed award letter accepting federal and institutional aid.", required: true },
    ],
    instructions: [
      { order: 1, title: "Accept the offer and pay deposit", description: "Notify the college of your decision and submit the enrollment deposit by the deadline (usually May 1)." },
      { order: 2, title: "Apply for housing", description: "Submit your housing application and deposit if living on campus." },
      { order: 3, title: "Register for orientation", description: "Sign up for a summer orientation session where you will meet an advisor and register for classes." },
      { order: 4, title: "Submit final documents", description: "Send final high school transcripts and immunization records." },
    ],
    fees: [{ label: "Enrollment deposit", amount: 200, currency: "USD", required: true, notes: "Typically $100 to $500, often credited toward first-semester tuition." }],
    estimatedProcessingTime: { min: 2, max: 4, unit: "months", display: "2 to 4 months (Spring to late Summer)" },
    commonMistakes: [
      "Missing the May 1st National College Decision Day deadline.",
      "Forgetting to submit the final high school transcript, which can block class registration.",
      "Waiting too long to apply for housing, resulting in less desirable dorm assignments.",
    ],
    tips: [
      "Check your new college email address regularly; important updates will be sent there.",
      "Take placement exams (math, language) early so you can register for the correct classes at orientation.",
      "Review your financial aid package carefully and only accept the loans you actually need.",
    ],
    faq: [
      { question: "Is the enrollment deposit refundable?", answer: "Usually not. It secures your spot in the incoming class." },
      { question: "When do I pick my classes?", answer: "Typically during summer orientation, after meeting with an academic advisor." },
    ],
    officialSourceLinks: [
      { title: "Checklist for New College Students", publisher: "Federal Student Aid", url: "https://studentaid.gov/articles/college-checklist/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["education", "college", "enrollment", "freshman"],
    status: "published",
  },
  {
    slug: "transfer-another-school-au",
    title: "Transfer to Another School",
    category: "Education",
    location: { countryCode: "AU", countryName: "Australia", region: "State-specific" },
    summary: "Transfer your child to a new primary or secondary school by completing an enrollment application and providing academic records.",
    audience: "Parents or guardians relocating or seeking a different school environment for their child.",
    eligibility: [
      { label: "Catchment zone", description: "For public schools, you generally need to reside within the school's local intake area." },
    ],
    requiredDocuments: [
      { name: "Proof of residence", description: "Utility bill, lease agreement, or council rates notice.", required: true },
      { name: "Child's birth certificate", description: "To verify age and identity.", required: true },
      { name: "Immunisation History Statement", description: "Printout from the Australian Immunisation Register (AIR).", required: true },
      { name: "Previous school reports", description: "Recent academic reports and NAPLAN results.", required: false },
    ],
    instructions: [
      { order: 1, title: "Find the local school", description: "Use your state education department's 'School Finder' tool to confirm your catchment school." },
      { order: 2, title: "Contact the new school", description: "Call or visit the school to express interest and request an enrollment package." },
      { order: 3, title: "Submit the application", description: "Provide the completed forms and all required documents to the school administration." },
      { order: 4, title: "Notify the current school", description: "Inform your child's current school of the departure date so they can prepare exit paperwork." },
    ],
    fees: [{ label: "Voluntary contribution", amount: 60, currency: "AUD", required: false, notes: "Public schools may request a voluntary contribution; private schools will charge tuition fees." }],
    estimatedProcessingTime: { min: 1, max: 2, unit: "weeks", display: "1 to 2 weeks" },
    commonMistakes: [
      "Assuming enrollment in out-of-catchment public schools is guaranteed.",
      "Not providing the official AIR Immunisation History Statement (blue book records are often not accepted).",
      "Moving schools in the middle of a term without a plan for uniform and textbook changes.",
    ],
    tips: [
      "Arrange a school tour before deciding to ensure it's a good fit for your child.",
      "Give the current school at least a few weeks' notice to finalize reports and say goodbyes.",
      "Keep copies of the child's last school report to help the new teachers understand their academic level.",
    ],
    faq: [
      { question: "Can I enroll my child in a school outside our local area?", answer: "Yes, but non-local enrollments are subject to the school having available space and are not guaranteed." },
      { question: "Is school attendance compulsory?", answer: "Yes, children from age 6 until 17 (varies slightly by state) must be enrolled in school or registered for homeschooling." },
    ],
    officialSourceLinks: [
      { title: "Enrolling in a public school", publisher: "NSW Department of Education", url: "https://education.nsw.gov.au/public-schools/going-to-a-public-school/enrolment" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["education", "transfer", "school", "australia"],
    status: "published",
  },
  {
    slug: "apply-part-time-job",
    title: "Apply for a Part-Time Job",
    category: "Career",
    location: { countryCode: "US", countryName: "United States" },
    summary: "Prepare a resume, submit applications to retail or service roles, and ace your interview to secure part-time employment.",
    audience: "Students, teenagers, and adults looking for flexible, non-full-time work.",
    eligibility: [
      { label: "Age requirements", description: "Must be legally allowed to work (often 14 or 16+ depending on state child labor laws)." },
      { label: "Work authorization", description: "Must be a U.S. citizen or hold valid work authorization." },
    ],
    requiredDocuments: [
      { name: "Resume", description: "A simple 1-page document outlining education, skills, and any previous experience or volunteering.", required: false },
      { name: "Identification for I-9", description: "Passport, or a combination of state ID and Social Security Card, needed upon hiring.", required: true },
      { name: "Work Permit", description: "Required in some states for applicants under age 18.", required: false },
    ],
    instructions: [
      { order: 1, title: "Prepare a basic resume", description: "List your contact info, education, and any relevant skills like customer service or technical abilities." },
      { order: 2, title: "Search and apply", description: "Look for 'hiring' signs locally or apply online through company portals and job boards." },
      { order: 3, title: "Follow up", description: "Call or visit the manager a few days after applying to express your interest." },
      { order: 4, title: "Interview and onboard", description: "Attend the interview, provide your availability, and complete hiring paperwork if offered the job." },
    ],
    fees: [{ label: "Application fee", amount: 0, currency: "USD", required: false, notes: "Applying for a job is free." }],
    estimatedProcessingTime: { min: 1, max: 3, unit: "weeks", display: "1 to 3 weeks" },
    commonMistakes: [
      "Providing a completely open availability schedule but later retracting it.",
      "Wearing overly casual clothes (like sweatpants) to an interview for a customer-facing role.",
      "Not checking email or voicemail for interview invitations.",
    ],
    tips: [
      "If you have no work experience, highlight school clubs, sports, volunteering, or relevant coursework.",
      "Be honest about your availability, especially regarding school hours or extracurriculars.",
      "A positive attitude and reliability are often more important than experience for entry-level part-time roles.",
    ],
    faq: [
      { question: "Do I need a resume for a fast-food or retail job?", answer: "Not always, many use standard online applications. However, bringing a simple printed resume to an interview shows initiative." },
      { question: "How many hours is part-time?", answer: "Usually under 30-35 hours per week, but it varies by employer." },
    ],
    officialSourceLinks: [
      { title: "YouthRules! (Child Labor Laws)", publisher: "U.S. Department of Labor", url: "https://www.youthrules.gov/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["career", "part-time", "jobs", "students"],
    status: "published",
  },
  {
    slug: "freelance-client-onboarding-checklist",
    title: "Build a Freelance Client Onboarding Checklist",
    category: "Business",
    location: { countryCode: "US", countryName: "United States" },
    summary: "Establish a professional workflow to intake new freelance clients, including contracts, deposits, and setting project expectations.",
    audience: "Freelance writers, designers, developers, and consultants.",
    eligibility: [
      { label: "Business readiness", description: "You should have a portfolio, a way to accept payments, and standard contract terms." },
    ],
    requiredDocuments: [
      { name: "Freelance Contract", description: "A legally binding agreement outlining scope, timelines, and payment terms.", required: true },
      { name: "Intake Questionnaire", description: "A form to gather project requirements and client goals.", required: false },
      { name: "Initial Invoice", description: "Invoice for the upfront deposit.", required: true },
    ],
    instructions: [
      { order: 1, title: "Send the intake questionnaire", description: "Have the client define their exact needs, target audience, and brand guidelines." },
      { order: 2, title: "Draft and sign the contract", description: "Clearly outline the scope of work, revision limits, and deadlines. Use digital signature software." },
      { order: 3, title: "Request an upfront deposit", description: "Send an invoice for 25% to 50% of the project total before beginning any work." },
      { order: 4, title: "Schedule a kickoff call", description: "Review the timeline, communication preferences, and next steps with the client." },
    ],
    fees: [{ label: "Software costs", amount: 15, currency: "USD", required: false, notes: "Optional costs for digital signature or invoicing software." }],
    estimatedProcessingTime: { min: 1, max: 3, unit: "days", display: "1 to 3 days per client" },
    commonMistakes: [
      "Starting work before the contract is signed and the deposit is paid.",
      "Failing to define how many revisions are included in the flat rate.",
      "Not establishing clear communication boundaries (e.g., answering texts on weekends).",
    ],
    tips: [
      "Use templates for your contract and intake forms to save time.",
      "Always require a deposit; it secures the client's commitment and protects your cash flow.",
      "Include a 'kill fee' clause in your contract in case the client cancels the project midway.",
    ],
    faq: [
      { question: "How much should I charge for a deposit?", answer: "Standard deposits range from 25% to 50% of the total estimated cost." },
      { question: "Do I really need a written contract?", answer: "Yes, absolutely. A contract protects both you and the client and prevents scope creep." },
    ],
    officialSourceLinks: [
      { title: "Self-Employed Individuals Tax Center", publisher: "IRS", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["business", "freelance", "onboarding", "contract"],
    status: "published",
  },
  {
    slug: "register-sole-proprietorship-ca",
    title: "Register a Sole Proprietorship",
    category: "Business",
    location: { countryCode: "CA", countryName: "Canada", region: "Ontario" },
    summary: "Register your sole proprietorship with the Ontario Business Registry to legally operate under a business name.",
    audience: "Entrepreneurs and freelancers in Ontario starting a business without incorporating.",
    eligibility: [
      { label: "Business Structure", description: "You are the sole owner of the business and have not incorporated." },
    ],
    requiredDocuments: [
      { name: "My Ontario Account", description: "A digital account to access the Ontario Business Registry.", required: true },
      { name: "Proposed Business Name", description: "The name you wish to register.", required: true },
      { name: "Personal ID and Address", description: "Your legal name and the physical address for the business.", required: true },
    ],
    instructions: [
      { order: 1, title: "Search the proposed name", description: "Use the registry search tool to ensure your desired business name is not already taken." },
      { order: 2, title: "Log in to the Ontario Business Registry", description: "Access the portal using your My Ontario Account." },
      { order: 3, title: "Complete the registration form", description: "Enter your personal details, business address, and describe the business activity." },
      { order: 4, title: "Pay the fee and receive your Master Business License", description: "Submit payment online to instantly receive your registration document." },
    ],
    fees: [{ label: "Registration Fee", amount: 60, currency: "CAD", required: true, notes: "Fee for registering a sole proprietorship for 5 years." }],
    estimatedProcessingTime: { min: 0, max: 0, unit: "minutes", display: "Immediate (online)" },
    commonMistakes: [
      "Assuming a registered business name gives you trademark protection (it does not).",
      "Using a P.O. Box as the primary business address instead of a physical address.",
      "Forgetting to renew the registration every 5 years.",
    ],
    tips: [
      "If you operate the business under your exact legal name (e.g., John Doe), you do not legally have to register the name in Ontario.",
      "You will need this registration document to open a business bank account.",
    ],
    faq: [
      { question: "Is a sole proprietorship a separate legal entity?", answer: "No, you and the business are legally the same. You are personally liable for all business debts." },
      { question: "Do I need a separate tax return for a sole proprietorship?", answer: "No, you report the business income on your personal T1 income tax return." },
    ],
    officialSourceLinks: [
      { title: "Register a business name", publisher: "Government of Ontario", url: "https://www.ontario.ca/page/register-business-name-limited-partnership" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["business", "sole proprietorship", "ontario", "canada"],
    status: "published",
  },
  {
    slug: "apply-local-clearance-ph",
    title: "Apply for a Local Clearance",
    category: "Government services",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Obtain a Barangay Clearance from your local barangay hall, which is required for employment, business permits, and other government IDs.",
    audience: "Residents of the Philippines needing proof of residency and good moral character in their community.",
    eligibility: [
      { label: "Residency", description: "Must be a resident of the barangay where you are applying." },
      { label: "No derogatory record", description: "Must not have any pending cases or bad records in the barangay." },
    ],
    requiredDocuments: [
      { name: "Recent Cedula (Community Tax Certificate)", description: "Obtained from the barangay hall or city hall.", required: true },
      { name: "Valid ID", description: "Any government-issued ID showing your address.", required: true },
    ],
    instructions: [
      { order: 1, title: "Secure a Cedula", description: "If you don't have a current year's Cedula, purchase one at the barangay hall or city hall." },
      { order: 2, title: "Go to your Barangay Hall", description: "Visit the barangay hall during office hours and inform the desk officer you need a clearance." },
      { order: 3, title: "Fill out the application form", description: "Provide your name, address, and the purpose of the clearance (e.g., employment)." },
      { order: 4, title: "Pay the fee and wait for issuance", description: "Pay the processing fee to the cashier and wait for the clearance to be printed and signed by the Barangay Captain." },
    ],
    fees: [{ label: "Clearance Fee", amount: 50, currency: "PHP", required: true, notes: "Usually ranges from 50 to 150 PHP depending on the barangay and purpose." }],
    estimatedProcessingTime: { min: 1, max: 2, unit: "hours", display: "Same day (usually 1-2 hours)" },
    commonMistakes: [
      "Going to the barangay hall without a valid Cedula for the current year.",
      "Not knowing the specific purpose of the clearance (the form requires you to state why you need it).",
    ],
    tips: [
      "Bring exact change for the fees.",
      "A Barangay Clearance is usually a prerequisite for getting a Police Clearance or Mayor's Permit.",
    ],
    faq: [
      { question: "How long is a Barangay Clearance valid?", answer: "It is typically valid for 6 months from the date of issuance." },
      { question: "Can someone else claim my clearance?", answer: "Yes, but they will need an authorization letter and a copy of your valid ID." },
    ],
    officialSourceLinks: [
      { title: "Barangay Clearance", publisher: "Department of the Interior and Local Government", url: "https://dilg.gov.ph/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["government", "philippines", "clearance", "barangay"],
    status: "published",
  },
  {
    slug: "apply-police-clearance-au",
    title: "Apply for a Police Clearance",
    category: "Government services",
    location: { countryCode: "AU", countryName: "Australia" },
    summary: "Apply for a National Police Check (NPC) required for employment, volunteer work, or visa applications in Australia.",
    audience: "Individuals in Australia needing an official record of their criminal history.",
    eligibility: [
      { label: "Identity", description: "Must be able to provide 100 points of identification." },
    ],
    requiredDocuments: [
      { name: "100 Points of ID", description: "A combination of primary (passport, birth certificate) and secondary (driver's licence, Medicare card) documents.", required: true },
      { name: "Completed Application Form", description: "Submitted online or in person.", required: true },
    ],
    instructions: [
      { order: 1, title: "Choose the application route", description: "Apply online via the Australian Federal Police (AFP) portal, a state police force, or an accredited third-party provider." },
      { order: 2, title: "Gather ID documents", description: "Scan or photograph your 100 points of ID." },
      { order: 3, title: "Complete the online application", description: "Enter your details, upload your ID, and provide consent for the background check." },
      { order: 4, title: "Pay the fee and wait", description: "Submit payment online. The certificate will be mailed or emailed to you." },
    ],
    fees: [{ label: "AFP National Police Check", amount: 42, currency: "AUD", required: true, notes: "State police and accredited providers may charge different fees." }],
    estimatedProcessingTime: { min: 1, max: 15, unit: "days", display: "1 to 15 business days" },
    commonMistakes: [
      "Using an unaccredited third-party website.",
      "Providing ID documents that do not add up to exactly 100 points.",
      "Applying for a standard check when a specific type (e.g., Working with Children) is required by the employer.",
    ],
    tips: [
      "If you need the check for immigration or visa purposes, you must apply directly through the AFP, not a state police force or third party.",
      "Most online checks are processed within 48 hours, but manual referrals can take up to 15 days.",
    ],
    faq: [
      { question: "How long is a National Police Check valid?", answer: "There is no standard expiry date. It is a point-in-time check. Employers usually request one that is less than 3-6 months old." },
      { question: "Can I get a police check if I live overseas?", answer: "Yes, the AFP provides online applications for individuals residing outside Australia." },
    ],
    officialSourceLinks: [
      { title: "National Police Checks", publisher: "Australian Federal Police", url: "https://www.afp.gov.au/what-we-do/national-police-checks" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["government", "police check", "australia", "background check"],
    status: "published",
  },
  {
    slug: "renew-vehicle-registration-us",
    title: "Renew a Vehicle Registration",
    category: "Government services",
    location: { countryCode: "US", countryName: "United States", region: "State-specific" },
    summary: "Renew your vehicle's registration with the state DMV online, by mail, or in person to receive your new license plate sticker and registration card.",
    audience: "Vehicle owners whose annual registration is about to expire.",
    eligibility: [
      { label: "Valid Insurance", description: "Must have active auto insurance meeting state minimums." },
      { label: "Smog/Emissions", description: "Must pass an emissions test if required by your state or county." },
    ],
    requiredDocuments: [
      { name: "Renewal Notice or Current Registration", description: "Contains your VIN and license plate number.", required: true },
      { name: "Proof of Insurance", description: "Current auto insurance card or policy declaration.", required: true },
      { name: "Emissions Certificate", description: "If applicable in your jurisdiction.", required: false },
    ],
    instructions: [
      { order: 1, title: "Check requirements", description: "Review your renewal notice to see if a smog check or property tax payment is required." },
      { order: 2, title: "Complete emissions test", description: "If required, take your vehicle to an authorized testing center." },
      { order: 3, title: "Submit renewal and payment", description: "Go to your state's DMV website, enter your plate and VIN, and pay the registration fee." },
      { order: 4, title: "Apply new sticker", description: "Once received in the mail, place the new sticker on your rear license plate and keep the registration card in your glovebox." },
    ],
    fees: [{ label: "Registration Fee", amount: 50, currency: "USD", required: true, notes: "Varies drastically by state and vehicle weight/value, ranging from $30 to over $400." }],
    estimatedProcessingTime: { min: 1, max: 2, unit: "weeks", display: "Instant online; 1-2 weeks for mail delivery" },
    commonMistakes: [
      "Waiting until the end of the month to get an emissions test, when testing centers are busiest.",
      "Renewing online too close to the expiration date and driving with expired tags while waiting for the mail.",
      "Forgetting to update your address with the DMV before renewing.",
    ],
    tips: [
      "Many states offer DMV kiosks in grocery stores where you can renew and print your sticker instantly.",
      "Set a calendar reminder for your renewal month, as some states no longer mail paper reminders.",
    ],
    faq: [
      { question: "Is there a grace period if my tags expire?", answer: "Some states offer a brief grace period for late fees, but law enforcement can ticket you the day after expiration." },
      { question: "Can someone else drive my car if the registration is expired?", answer: "No, a vehicle with expired registration cannot legally be driven on public roads by anyone." },
    ],
    officialSourceLinks: [
      { title: "Motor Vehicle Services", publisher: "USA.gov", url: "https://www.usa.gov/motor-vehicle-services" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["driving", "vehicle", "registration", "dmv", "united states"],
    status: "published",
  },
  {
    slug: "apply-travel-visa-uk",
    title: "Apply for a Travel Visa",
    category: "Travel",
    location: { countryCode: "GB", countryName: "United Kingdom" },
    summary: "Apply for a UK Standard Visitor visa online, attend a biometrics appointment, and submit your passport for processing.",
    audience: "Tourists, business visitors, and family visitors who are visa nationals coming to the UK for up to 6 months.",
    eligibility: [
      { label: "Visa National", description: "You are from a country that requires a visa to enter the UK." },
      { label: "Intention to leave", description: "You must prove you will leave the UK at the end of your visit." },
    ],
    requiredDocuments: [
      { name: "Valid Passport", description: "Must have at least one blank page.", required: true },
      { name: "Proof of Funds", description: "Bank statements showing you can support yourself during the trip.", required: true },
      { name: "Details of Employment or Studies", description: "A letter from your employer or school confirming your status.", required: true },
      { name: "Accommodation Details", description: "Where you plan to stay (hotel bookings or letter from a host).", required: false },
    ],
    instructions: [
      { order: 1, title: "Apply online", description: "Fill in the application form on the GOV.UK website and pay the visa fee." },
      { order: 2, title: "Book a biometrics appointment", description: "Schedule an appointment at a visa application centre (VAC) in your home country." },
      { order: 3, title: "Upload documents", description: "Upload scanned copies of your supporting documents to the VAC portal before your appointment." },
      { order: 4, title: "Attend appointment and wait", description: "Provide your fingerprints and photograph at the VAC, and hand over your passport for processing." },
    ],
    fees: [{ label: "Standard Visitor Visa", amount: 115, currency: "GBP", required: true, notes: "Fee for a 6-month visa. Longer-term visas cost more." }],
    estimatedProcessingTime: { min: 3, max: 6, unit: "weeks", display: "3 to 6 weeks" },
    commonMistakes: [
      "Providing bank statements that show large, unexplained deposits immediately before applying.",
      "Booking non-refundable flights before the visa is approved.",
      "Failing to translate documents that are not in English or Welsh.",
    ],
    tips: [
      "Apply up to 3 months before your intended date of travel.",
      "A strong application clearly demonstrates ties to your home country (job, property, family) to prove you will return.",
    ],
    faq: [
      { question: "Can I work in the UK on a Visitor visa?", answer: "No. You cannot do paid or unpaid work, although some specific business activities (like attending meetings) are allowed." },
      { question: "Is the application fee refundable if I am refused?", answer: "No, the visa fee is non-refundable regardless of the outcome." },
    ],
    officialSourceLinks: [
      { title: "Standard Visitor visa", publisher: "GOV.UK", url: "https://www.gov.uk/standard-visitor" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "High",
    tags: ["travel", "visa", "uk", "tourism"],
    status: "published",
  },
  {
    slug: "rent-apartment-checklist-us",
    title: "Rent an Apartment Checklist",
    category: "Housing",
    location: { countryCode: "US", countryName: "United States" },
    summary: "Follow this comprehensive checklist to find, tour, evaluate, and sign a lease for a new apartment.",
    audience: "First-time renters or anyone looking for a new apartment in the US.",
    eligibility: [
      { label: "Financial readiness", description: "You should have first month's rent and a security deposit saved." },
    ],
    requiredDocuments: [
      { name: "Proof of Income", description: "Recent pay stubs or bank statements showing 3x the monthly rent.", required: true },
      { name: "Government ID", description: "Driver's license or passport for background checks.", required: true },
      { name: "References", description: "Contact information for previous landlords.", required: false },
    ],
    instructions: [
      { order: 1, title: "Determine your budget", description: "Calculate 30% of your gross monthly income as your maximum rent." },
      { order: 2, title: "Tour properties", description: "Visit apartments and check water pressure, cell reception, and natural light." },
      { order: 3, title: "Submit applications", description: "Provide your application, application fee, and consent for a credit check." },
      { order: 4, title: "Review and sign the lease", description: "Read the lease carefully to understand pet policies, maintenance responsibilities, and early termination rules." },
    ],
    fees: [{ label: "Application fee", amount: 50, currency: "USD", required: false, notes: "Non-refundable fee to cover credit and background checks." }],
    estimatedProcessingTime: { min: 1, max: 4, unit: "weeks", display: "1 to 4 weeks" },
    commonMistakes: [
      "Not reading the lease before signing and missing hidden fees for parking, trash, or pets.",
      "Renting an apartment sight-unseen without a video tour or a trusted friend visiting.",
      "Failing to ask about the typical cost of utilities in the building.",
    ],
    tips: [
      "Drive by the apartment at night to get a sense of the neighborhood's noise level and safety.",
      "Negotiate the rent or ask for move-in specials, especially during winter months when fewer people move.",
    ],
    faq: [
      { question: "What is a guarantor or co-signer?", answer: "Someone with good credit and high income who signs the lease with you, guaranteeing payment if you default." },
      { question: "Do I need renter's insurance?", answer: "Most landlords require it. Even if they don't, it is highly recommended to protect your belongings." },
    ],
    officialSourceLinks: [
      { title: "Consumer Financial Protection Bureau - Renting", publisher: "CFPB", url: "https://www.consumerfinance.gov/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["housing", "apartment", "renting", "checklist"],
    status: "published",
  },
  {
    slug: "move-into-rental-home",
    title: "Move Into a New Rental Home",
    category: "Housing",
    location: { countryCode: "US", countryName: "United States" },
    summary: "Complete the move-in inspection, set up utilities, and update your address when moving into a new rental property.",
    audience: "Tenants who have just signed a lease and are preparing to move in.",
    eligibility: [
      { label: "Signed lease", description: "You must have a fully executed lease agreement and have paid all deposits." },
    ],
    requiredDocuments: [
      { name: "Move-in Inspection Form", description: "Document to record existing damages.", required: true },
      { name: "Lease Agreement", description: "Your copy of the signed lease.", required: true },
      { name: "Renter's Insurance Policy", description: "Proof of active insurance coverage.", required: true },
    ],
    instructions: [
      { order: 1, title: "Set up utilities", description: "Transfer or set up electricity, water, gas, and internet in your name prior to move-in day." },
      { order: 2, title: "Conduct a move-in inspection", description: "Walk through the empty apartment with the landlord. Take photos of any existing damage." },
      { order: 3, title: "Complete the change of address", description: "Update your address with the USPS, your bank, employer, and the DMV." },
      { order: 4, title: "Test all systems", description: "Check smoke detectors, appliances, locks, and plumbing on your first day." },
    ],
    fees: [{ label: "Utility setup fees", amount: 50, currency: "USD", required: false, notes: "Utility companies may charge connection or deposit fees." }],
    estimatedProcessingTime: { min: 1, max: 7, unit: "days", display: "1 to 7 days" },
    commonMistakes: [
      "Failing to document existing damages with photos, leading to unfair charges against your security deposit later.",
      "Forgetting to switch utilities into your name, resulting in the landlord shutting off the power.",
      "Not locating the main water shut-off valve and circuit breaker panel upon moving in.",
    ],
    tips: [
      "Email the photos of the move-in inspection to yourself and your landlord so they are time-stamped.",
      "Pack an 'essentials' box with toilet paper, a shower curtain, a phone charger, and snacks for the first night.",
    ],
    faq: [
      { question: "Can I change the locks?", answer: "Usually no, unless you give a copy of the new key to the landlord immediately. Check your lease." },
      { question: "What if something is broken when I move in?", answer: "Report it in writing immediately and request a timeline for repairs." },
    ],
    officialSourceLinks: [
      { title: "USPS Change of Address", publisher: "USPS", url: "https://moversguide.usps.com/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["housing", "moving", "renting", "checklist"],
    status: "published",
  },
  {
    slug: "enroll-national-health-insurance-jp",
    title: "Enroll in National Health Insurance",
    category: "Healthcare",
    location: { countryCode: "JP", countryName: "Japan" },
    summary: "Register for Japan's National Health Insurance (NHI) at your local municipal office to cover 70% of your medical costs.",
    audience: "Foreign residents staying in Japan for more than 3 months who are not covered by employee health insurance (Shakai Hoken).",
    eligibility: [
      { label: "Visa status", description: "Must have a visa valid for more than 3 months (e.g., student, working holiday, dependent)." },
    ],
    requiredDocuments: [
      { name: "Residence Card (Zairyu Card)", description: "Your official ID card issued at the airport or immigration office.", required: true },
      { name: "Passport", description: "Your valid passport.", required: true },
      { name: "My Number Card or Notification Card", description: "Your Japanese social security number.", required: false },
    ],
    instructions: [
      { order: 1, title: "Register your address", description: "First, you must register your residential address at the local ward or city office within 14 days of moving in." },
      { order: 2, title: "Go to the NHI counter", description: "In the same municipal office, proceed to the National Health Insurance division." },
      { order: 3, title: "Submit application", description: "Fill out the NHI enrollment form and show your Residence Card." },
      { order: 4, title: "Receive your NHI card", description: "You will receive your health insurance card (Hokensho) immediately or by mail a few days later." },
    ],
    fees: [{ label: "Monthly premium", amount: 2000, currency: "JPY", required: true, notes: "Premiums are based on your previous year's income in Japan. Students and new arrivals pay the minimum." }],
    estimatedProcessingTime: { min: 1, max: 2, unit: "hours", display: "Same day" },
    commonMistakes: [
      "Delaying enrollment past 14 days, which can result in you being billed for back-premiums to the date of your arrival.",
      "Forgetting to notify the NHI office when moving to a new city, as NHI is administered locally.",
      "Not carrying the physical Hokensho card when visiting a clinic.",
    ],
    tips: [
      "If your income is very low (e.g., as a student), apply for a premium reduction at the counter.",
      "Keep the NHI payment slips mailed to you and pay them at any convenience store before the deadline.",
    ],
    faq: [
      { question: "What does NHI cover?", answer: "It covers 70% of most medical, dental, and prescription costs. You pay the remaining 30% out of pocket." },
      { question: "Is enrollment mandatory?", answer: "Yes, it is legally required for all residents not covered by a company health plan." },
    ],
    officialSourceLinks: [
      { title: "National Health Insurance Information", publisher: "Tokyo Metropolitan Government", url: "https://www.metro.tokyo.lg.jp/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["healthcare", "insurance", "japan", "nhi"],
    status: "published",
  },
  {
    slug: "apply-parental-leave-ca",
    title: "Apply for Parental Leave Documents",
    category: "Family",
    location: { countryCode: "CA", countryName: "Canada" },
    summary: "Apply for Employment Insurance (EI) maternity and parental benefits after the birth or adoption of a child.",
    audience: "Expectant parents or newly adoptive parents in Canada seeking income replacement while away from work.",
    eligibility: [
      { label: "Insurable hours", description: "You must have accumulated at least 600 hours of insurable employment in the 52 weeks before the start of your claim." },
      { label: "Earnings reduction", description: "Your normal weekly earnings must be reduced by more than 40%." },
    ],
    requiredDocuments: [
      { name: "Record of Employment (ROE)", description: "Issued by your employer directly to Service Canada.", required: true },
      { name: "Social Insurance Number (SIN)", description: "Your SIN and the SIN of the other parent (if sharing benefits).", required: true },
      { name: "Child's expected or actual date of birth", description: "Or the date the adopted child is placed with you.", required: true },
      { name: "Banking information", description: "For direct deposit of benefits.", required: true },
    ],
    instructions: [
      { order: 1, title: "Determine the leave type", description: "Decide whether to choose standard parental benefits (up to 40 weeks at 55%) or extended (up to 69 weeks at 33%)." },
      { order: 2, title: "Stop working", description: "You can only apply once you have stopped working." },
      { order: 3, title: "Apply online", description: "Complete the online EI application on the Service Canada website as soon as possible." },
      { order: 4, title: "Wait for the access code", description: "Receive a 4-digit access code in the mail to track your claim status." },
    ],
    fees: [{ label: "Application fee", amount: 0, currency: "CAD", required: false, notes: "Applying for EI benefits is free." }],
    estimatedProcessingTime: { min: 1, max: 4, unit: "weeks", display: "1 to 4 weeks for the first payment" },
    commonMistakes: [
      "Waiting too long to apply. Apply right after your last day of work, even if your employer hasn't issued the ROE yet.",
      "Choosing standard vs extended benefits without discussing it with the other parent (the choice is irrevocable once benefits begin).",
    ],
    tips: [
      "Set up a My Service Canada Account beforehand to track your application online.",
      "Check if your employer offers 'top-up' benefits and what documents they need to trigger those payments.",
    ],
    faq: [
      { question: "Can parents share the leave?", answer: "Yes, parents can share parental benefits. If they do, they get access to extra weeks (e.g., 5 extra weeks for standard leave)." },
      { question: "Can I work while on parental leave?", answer: "Yes, but your benefits will be reduced by 50 cents for every dollar you earn, up to a certain limit." },
    ],
    officialSourceLinks: [
      { title: "EI maternity and parental benefits", publisher: "Government of Canada", url: "https://www.canada.ca/en/services/benefits/ei/ei-maternity-parental.html" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["family", "parental leave", "ei", "canada"],
    status: "published",
  },
  {
    slug: "report-lost-government-id-us",
    title: "Report a Lost Government ID",
    category: "Government services",
    location: { countryCode: "US", countryName: "United States" },
    summary: "Take immediate steps to report a lost or stolen Driver's License, Passport, or Social Security card to prevent identity theft and request a replacement.",
    audience: "Anyone who has lost an important government-issued identification document.",
    eligibility: [
      { label: "Identity Verification", description: "You must be able to prove your identity using secondary documents to get a replacement." },
    ],
    requiredDocuments: [
      { name: "Secondary IDs", description: "Birth certificate, W-2 form, or utility bills (requirements vary by the ID being replaced).", required: true },
      { name: "Police Report (Optional)", description: "Helpful if you suspect the ID was stolen and want to protect against identity theft.", required: false },
    ],
    instructions: [
      { order: 1, title: "File a police report (if stolen)", description: "Contact the local non-emergency police line to file a report. Keep a copy for your records." },
      { order: 2, title: "Place a fraud alert", description: "Contact one of the three major credit bureaus to place a free fraud alert on your credit report." },
      { order: 3, title: "Report to the issuing agency", description: "Contact the DMV for a license, the State Department for a passport, or the SSA for a Social Security card." },
      { order: 4, title: "Apply for a replacement", description: "Gather the required secondary documents and pay the replacement fee to obtain a new ID." },
    ],
    fees: [{ label: "Replacement fee", amount: 30, currency: "USD", required: false, notes: "Varies depending on the ID. SSN cards are free; passports and driver's licenses require a fee." }],
    estimatedProcessingTime: { min: 1, max: 6, unit: "weeks", display: "1 to 6 weeks for replacement" },
    commonMistakes: [
      "Assuming a lost Social Security card needs immediate reporting to the police (it doesn't, but placing a credit freeze is vital).",
      "Finding the lost ID after ordering a replacement and trying to use the old one (especially with passports, the old one is permanently invalidated).",
    ],
    tips: [
      "If you lose your passport while traveling abroad, contact the nearest U.S. embassy or consulate immediately.",
      "Keep photocopies or digital photos of your IDs in a secure password manager for easy reference if they are lost.",
    ],
    faq: [
      { question: "Can I replace my driver's license online?", answer: "Many states allow you to order a replacement license online if you know your license number and it is not near its expiration date." },
      { question: "Is it possible to replace an SSN card online?", answer: "Yes, if you have a 'my Social Security' account and meet certain state requirements, you can request a replacement card online." },
    ],
    officialSourceLinks: [
      { title: "Replace your vital records", publisher: "USA.gov", url: "https://www.usa.gov/replace-vital-documents" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["government", "id", "lost document", "identity theft"],
    status: "published",
  },
  {
    slug: "apply-philippine-passport",
    title: "Apply for a Philippine Passport",
    category: "Government services",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Schedule an appointment with the DFA and prepare your PSA documents to apply for your first Philippine ePassport.",
    audience: "Filipino citizens applying for their first passport.",
    eligibility: [
      { label: "Citizenship", description: "Must be a Filipino citizen by birth, naturalization, or election." },
      { label: "Personal appearance", description: "Applicants must appear in person at the DFA Consular Office for data capturing." },
    ],
    requiredDocuments: [
      { name: "Confirmed Online Appointment", description: "Printed copy of your confirmed appointment packet from the DFA website.", required: true },
      { name: "PSA Birth Certificate", description: "Original PSA-authenticated birth certificate on security paper.", required: true },
      { name: "Valid Government ID", description: "One acceptable valid ID (e.g., UMID, Driver’s License, PhilSys ID) and a photocopy.", required: true },
      { name: "Marriage Certificate (if applicable)", description: "Original PSA-authenticated marriage certificate for married women wishing to use their spouse's surname.", required: false },
    ],
    instructions: [
      { order: 1, title: "Book an appointment online", description: "Visit the DFA Passport Appointment portal to secure a slot at your preferred consular office." },
      { order: 2, title: "Pay the processing fee", description: "Pay the passport fee through authorized payment centers within the given timeframe to confirm your slot." },
      { order: 3, title: "Gather required documents", description: "Prepare all original documents and their photocopies as stated in your appointment packet." },
      { order: 4, title: "Attend your DFA appointment", description: "Show up at the DFA office on your scheduled date and time for verification and biometric data capture." },
    ],
    fees: [
      { label: "Regular Processing", amount: 950, currency: "PHP", required: true, notes: "Takes approximately 12 working days (Metro Manila)." },
      { label: "Expedited Processing", amount: 1200, currency: "PHP", required: false, notes: "Takes approximately 7 working days (Metro Manila)." }
    ],
    estimatedProcessingTime: { min: 7, max: 20, unit: "days", display: "7 to 20 working days" },
    commonMistakes: [
      "Wearing colored contact lenses or heavy makeup during the biometric photo capture.",
      "Bringing blurred or unreadable PSA certificates.",
      "Missing the payment window for the online appointment, which cancels the slot."
    ],
    tips: [
      "Book your appointment months in advance, as slots run out quickly.",
      "Dress appropriately (with collar and sleeves) for your appointment photo.",
      "Opt for the courier delivery service if you don't want to return to the DFA office to claim your passport."
    ],
    faq: [
      { question: "Do minors need a valid ID to apply?", answer: "Minors don't strictly need a government ID, but a School ID or Certificate of Enrollment helps. Their parents must present valid IDs." },
      { question: "Can I walk in without an appointment?", answer: "Walk-ins are strictly for Courtesy Lane eligible applicants only (Senior Citizens, PWDs, Pregnant Women, Solo Parents, Minors under 7)." }
    ],
    officialSourceLinks: [
      { title: "DFA Passport Application", publisher: "Department of Foreign Affairs", url: "https://passport.gov.ph/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["passport", "travel", "dfa", "philippines"],
    status: "published",
  },
  {
    slug: "renew-philippine-passport",
    title: "Renew a Philippine Passport",
    category: "Government services",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Book a DFA appointment and bring your expiring or expired passport to renew your Philippine ePassport.",
    audience: "Filipino citizens holding an expiring or expired ePassport.",
    eligibility: [
      { label: "Passport Status", description: "Your current passport must be an ePassport (with the chip logo on the cover)." },
      { label: "No changes in data", description: "If changing your name (e.g., due to marriage), additional documents are required." },
    ],
    requiredDocuments: [
      { name: "Confirmed Online Appointment", description: "Printed copy of the appointment packet.", required: true },
      { name: "Current ePassport", description: "Your original current or expired ePassport.", required: true },
      { name: "Photocopy of Passport Data Page", description: "A clear photocopy of the page containing your personal information.", required: true },
    ],
    instructions: [
      { order: 1, title: "Book a renewal appointment online", description: "Secure a slot via the DFA Passport Appointment System." },
      { order: 2, title: "Pay the renewal fee", description: "Settle the payment through recognized channels to finalize the booking." },
      { order: 3, title: "Prepare your old passport", description: "Ensure you bring the physical passport and a photocopy of its data page." },
      { order: 4, title: "Show up for biometrics", description: "Go to your chosen DFA Consular Office for the biometric capture process." },
    ],
    fees: [
      { label: "Regular Processing", amount: 950, currency: "PHP", required: true, notes: "Around 12 working days in NCR." },
      { label: "Expedited Processing", amount: 1200, currency: "PHP", required: false, notes: "Around 7 working days in NCR." }
    ],
    estimatedProcessingTime: { min: 7, max: 20, unit: "days", display: "7 to 20 working days" },
    commonMistakes: [
      "Assuming PSA birth certificates are required for standard ePassport renewals (they are usually only required for first-time applicants or data changes).",
      "Showing up late to the DFA appointment, which can result in denial of entry."
    ],
    tips: [
      "You can renew your passport up to one year before it expires to avoid travel disruptions.",
      "Check if you are eligible for the DFA's Passport Renewal Center (PaRC) at select malls or the Courtesy Lane."
    ],
    faq: [
      { question: "Is a PSA Birth Certificate needed for renewal?", answer: "For adult ePassport renewals with no changes in name or details, a PSA Birth Certificate is generally not required." },
      { question: "Can I keep my old passport?", answer: "Yes, the DFA will cancel your old passport by punching holes in it and return it to you." }
    ],
    officialSourceLinks: [
      { title: "DFA Passport Renewal Requirements", publisher: "Department of Foreign Affairs", url: "https://consular.dfa.gov.ph/services/passport/requirements/passport-adult/adult-renewal-epassport" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["passport", "renewal", "dfa", "philippines"],
    status: "published",
  },
  {
    slug: "apply-psa-birth-certificate-ph",
    title: "Apply for a PSA Birth Certificate Copy",
    category: "Government services",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Request a certified copy of your birth certificate from the Philippine Statistics Authority (PSA) online or at a Serbilis Center.",
    audience: "Filipinos needing official proof of birth for passports, enrollment, or employment.",
    eligibility: [
      { label: "Authorized Requester", description: "Must be the document owner, parent, spouse, direct descendant, or authorized representative." },
    ],
    requiredDocuments: [
      { name: "Valid ID", description: "One government-issued ID of the requester.", required: true },
      { name: "Authorization Letter", description: "If requesting for someone else (who is not a direct relative).", required: false },
    ],
    instructions: [
      { order: 1, title: "Choose your application method", description: "Apply online via PSA Serbilis/PSAHelpline, or walk-in at a PSA CRS Outlet or SM Business Center." },
      { order: 2, title: "Fill out the application form", description: "Provide the complete name, birth date, birthplace, and parents' names." },
      { order: 3, title: "Pay the processing fee", description: "Pay via credit card/GCash for online requests, or at the cashier for walk-ins." },
      { order: 4, title: "Receive the certificate", description: "Wait for delivery (if online) or wait for your number to be called at the outlet." },
    ],
    fees: [
      { label: "Online Delivery (PSAHelpline/Serbilis)", amount: 365, currency: "PHP", required: false, notes: "Includes delivery fee within the Philippines." },
      { label: "Walk-in (PSA CRS Outlet)", amount: 155, currency: "PHP", required: false, notes: "Base price for a single copy when obtained in person." }
    ],
    estimatedProcessingTime: { min: 1, max: 7, unit: "days", display: "Same day (Walk-in) to 7 days (Delivery)" },
    commonMistakes: [
      "Providing incorrect spelling of the mother's maiden name.",
      "Not leaving an authorization letter and ID copy if someone else will receive the delivery at home."
    ],
    tips: [
      "Requesting online is highly recommended to save time and avoid long queues.",
      "If born recently or late-registered, it may take months before the local civil registrar endorses the record to the PSA."
    ],
    faq: [
      { question: "Does a PSA Birth Certificate expire?", answer: "No, PSA birth certificates do not expire. However, some agencies (like DFA) may require a recently printed copy for clarity." },
      { question: "Can I get a copy if my birth was never registered?", answer: "No. You must undergo Late Registration of Birth at the Local Civil Registry where you were born first." }
    ],
    officialSourceLinks: [
      { title: "PSA Serbilis", publisher: "Philippine Statistics Authority", url: "https://www.psaserbilis.com.ph/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["birth certificate", "psa", "civil registry", "philippines"],
    status: "published",
  },
  {
    slug: "apply-psa-marriage-certificate-ph",
    title: "Apply for a PSA Marriage Certificate Copy",
    category: "Government services",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Request a certified true copy of your marriage certificate on security paper from the PSA for legal and ID update purposes.",
    audience: "Married individuals needing proof of marriage in the Philippines.",
    eligibility: [
      { label: "Authorized Requester", description: "Husband, wife, children, or an authorized representative." },
    ],
    requiredDocuments: [
      { name: "Valid Government ID", description: "Required for the requester.", required: true },
      { name: "Authorization Letter & ID of Owner", description: "Required if a representative is applying on behalf of the spouses.", required: false },
    ],
    instructions: [
      { order: 1, title: "Select application channel", description: "Use PSAHelpline/Serbilis online or visit a local PSA outlet or SM Business Center." },
      { order: 2, title: "Provide marriage details", description: "Input the names of the spouses, date of marriage, and place of marriage." },
      { order: 3, title: "Settle the fee", description: "Pay via over-the-counter channels, e-wallets, or online banking." },
      { order: 4, title: "Claim or receive delivery", description: "Wait for the courier or claim it at the releasing window if walk-in." },
    ],
    fees: [
      { label: "Online Request (Delivered)", amount: 365, currency: "PHP", required: false },
      { label: "Walk-in Request", amount: 155, currency: "PHP", required: false }
    ],
    estimatedProcessingTime: { min: 1, max: 7, unit: "days", display: "Same day to 7 days" },
    commonMistakes: [
      "Requesting the document too soon after the wedding (it usually takes 1-3 months for the local registry to transmit it to the PSA).",
      "Using nicknames instead of the exact legal names on the marriage license."
    ],
    tips: [
      "If you need it urgently after a wedding, ask the Local Civil Registrar for an 'advance endorsement' to the PSA.",
      "Order at least two copies if you plan to update your passport and bank accounts simultaneously."
    ],
    faq: [
      { question: "What if the PSA has no record of my marriage?", answer: "You will receive a Negative Certification. You must then ask the Local Civil Registrar where you were married to endorse the document to the PSA." }
    ],
    officialSourceLinks: [
      { title: "PSA Helpline - Marriage Certificate", publisher: "Philippine Statistics Authority", url: "https://psahelpline.ph/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["marriage certificate", "psa", "philippines"],
    status: "published",
  },
  {
    slug: "apply-nbi-clearance-ph",
    title: "Apply for an NBI Clearance",
    category: "Government services",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Register online, pay the fee, and attend a photo/fingerprint appointment to get your National Bureau of Investigation (NBI) Clearance.",
    audience: "Filipinos needing a nationwide criminal background check for employment, travel, or government requirements.",
    eligibility: [
      { label: "Age", description: "Applicants generally must be 18 or older, though minors can apply for specific official purposes." },
    ],
    requiredDocuments: [
      { name: "Valid Government IDs", description: "Two valid IDs (e.g., UMID, Passport, PhilSys ID, Postal ID).", required: true },
      { name: "Printed NBI Reference Number", description: "Generated after online registration.", required: true },
    ],
    instructions: [
      { order: 1, title: "Register an account online", description: "Visit the NBI Clearance website and fill in your personal details." },
      { order: 2, title: "Schedule an appointment", description: "Select the NBI branch, date, and time for your personal appearance." },
      { order: 3, title: "Pay the clearance fee online", description: "Choose a payment option (GCash, PayMaya, online banking, or over-the-counter) and pay using the reference number." },
      { order: 4, title: "Attend the NBI appointment", description: "Go to the NBI branch for biometrics (photo and fingerprinting) and claim your clearance." },
    ],
    fees: [
      { label: "Multi-purpose Clearance", amount: 130, currency: "PHP", required: true, notes: "Plus an additional e-payment service fee of roughly PHP 25 to 30." }
    ],
    estimatedProcessingTime: { min: 1, max: 14, unit: "days", display: "Same day (if no HIT) to 2 weeks (if HIT)" },
    commonMistakes: [
      "Showing up at the NBI center without paying the fee online first.",
      "Wearing inappropriate clothing (sleeveless shirts, shorts, slippers) to the branch.",
      "Assuming a 'HIT' means you have a criminal record (it often just means someone has the same name as you)."
    ],
    tips: [
      "If you receive a 'HIT', you will be asked to return after 1 to 2 weeks for the Quality Control interview before the clearance is released.",
      "NBI now offers a completely online renewal delivery service for those who already have an NBI clearance issued after 2014 and no changes to their data."
    ],
    faq: [
      { question: "How long is the NBI Clearance valid?", answer: "It is valid for six (6) months to one (1) year depending on the requesting agency's acceptance." },
      { question: "What is a 'HIT'?", answer: "A HIT simply means your name matches another person in the NBI database. A manual verification is needed to clear it." }
    ],
    officialSourceLinks: [
      { title: "NBI Clearance Online Services", publisher: "National Bureau of Investigation", url: "https://clearance.nbi.gov.ph/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["nbi", "clearance", "background check", "philippines"],
    status: "published",
  },
  {
    slug: "apply-police-clearance-ph",
    title: "Apply for a Police Clearance",
    category: "Government services",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Secure a National Police Clearance online and present yourself at a local police station for biometric capture to prove you have no criminal record.",
    audience: "Filipinos needing a police clearance for employment, business permits, or other local requirements.",
    eligibility: [
      { label: "Age", description: "Typically for adults 18 and above, but minors may apply for valid reasons." },
    ],
    requiredDocuments: [
      { name: "Valid IDs", description: "Two (2) valid government-issued IDs.", required: true },
      { name: "Reference Number", description: "Obtained after registering on the NPCS website.", required: true },
      { name: "Barangay Clearance", description: "Sometimes required depending on the local police station.", required: false },
    ],
    instructions: [
      { order: 1, title: "Register on NPCS", description: "Go to the National Police Clearance System (NPCS) website to set up an account and schedule an appointment." },
      { order: 2, title: "Pay the fee online", description: "Select Landbank/BancNet, GCash, or over-the-counter to settle the processing fee before your appointment." },
      { order: 3, title: "Go to the Police Station", description: "Visit your chosen police station on the date of your appointment for photo, fingerprinting, and signature." },
      { order: 4, title: "Claim your clearance", description: "If there's no 'hit', your clearance will be printed and handed to you immediately." },
    ],
    fees: [
      { label: "Clearance Fee", amount: 150, currency: "PHP", required: true, notes: "Plus a convenience fee of around PHP 10-30 depending on the payment channel." }
    ],
    estimatedProcessingTime: { min: 1, max: 2, unit: "hours", display: "Same day (if no HIT)" },
    commonMistakes: [
      "Going to the police station without an online appointment or without paying first.",
      "Wearing inappropriate attire (e.g., sando, slippers) for the ID photo capture."
    ],
    tips: [
      "Select a police station that is most convenient for you; the clearance is national in scope.",
      "Bring extra cash for any unforeseen printing or photocopying needs near the station."
    ],
    faq: [
      { question: "What is the difference between NBI and Police Clearance?", answer: "NBI Clearance covers records nationwide across all courts, while Police Clearance traditionally relied on local police records, though it is now part of a national database." },
      { question: "How long is it valid?", answer: "A National Police Clearance is valid for six (6) months from the date of issue." }
    ],
    officialSourceLinks: [
      { title: "National Police Clearance System", publisher: "Philippine National Police", url: "https://pnpclearance.ph/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["police clearance", "background check", "pnp", "philippines"],
    status: "published",
  },
  {
    slug: "apply-barangay-clearance-ph",
    title: "Apply for a Barangay Clearance",
    category: "Government services",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Visit your local barangay hall to obtain a Barangay Clearance, certifying your residency and good standing in the community.",
    audience: "Residents needing to submit proof of address and good moral character for work or government transactions.",
    eligibility: [
      { label: "Residency", description: "Must be an official resident of the barangay." },
      { label: "Good standing", description: "Must not have any pending complaints or derogatory records in the barangay blotter." },
    ],
    requiredDocuments: [
      { name: "Recent Cedula", description: "Community Tax Certificate for the current year.", required: true },
      { name: "Valid ID", description: "Any valid ID bearing your address.", required: true },
    ],
    instructions: [
      { order: 1, title: "Obtain a Cedula", description: "If you don't have one, get a Cedula from the barangay hall or city hall." },
      { order: 2, title: "Request the clearance", description: "Approach the barangay desk officer and state the purpose of your clearance (e.g., local employment, bank requirements)." },
      { order: 3, title: "Pay the fee", description: "Settle the barangay clearance fee at the cashier." },
      { order: 4, title: "Wait for the document", description: "Wait for the document to be drafted, signed by the Barangay Captain, and dry-sealed." },
    ],
    fees: [
      { label: "Clearance Fee", amount: 50, currency: "PHP", required: true, notes: "Fee varies by barangay, typically ranging from PHP 30 to PHP 150." }
    ],
    estimatedProcessingTime: { min: 15, max: 60, unit: "minutes", display: "15 to 60 minutes" },
    commonMistakes: [
      "Forgetting to indicate the specific purpose, as some barangays issue different formats depending on the need.",
      "Assuming someone else can get it for you without an authorization letter."
    ],
    tips: [
      "Bring your own pen and exact change.",
      "If you are a new resident, bring proof of billing or a lease contract to prove your address."
    ],
    faq: [
      { question: "How long is a Barangay Clearance valid?", answer: "Usually 6 months from the date of issue, or depending on the receiving agency's rules." }
    ],
    officialSourceLinks: [
      { title: "Barangay Services", publisher: "DILG", url: "https://dilg.gov.ph/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["barangay", "clearance", "residency", "philippines"],
    status: "published",
  },
  {
    slug: "apply-barangay-indigency-ph",
    title: "Apply for a Barangay Indigency Certificate",
    category: "Government services",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Request a Certificate of Indigency from your barangay to avail of financial, medical, or legal assistance from government agencies.",
    audience: "Low-income residents who need proof of their financial status to access social welfare services.",
    eligibility: [
      { label: "Income Status", description: "Must fall below a certain income threshold or have no regular source of income." },
      { label: "Residency", description: "Must be a recognized resident of the barangay." },
    ],
    requiredDocuments: [
      { name: "Valid ID", description: "Any ID showing your address.", required: true },
      { name: "Proof of Income (if applicable)", description: "Sometimes requested to verify low-income status.", required: false },
    ],
    instructions: [
      { order: 1, title: "Visit the Barangay Hall", description: "Go to your barangay hall and inform the clerk that you need a Certificate of Indigency." },
      { order: 2, title: "State your purpose", description: "Explain why you need it (e.g., for DSWD medical assistance, PAO legal assistance, or scholarship)." },
      { order: 3, title: "Undergo an interview", description: "A barangay official may briefly interview you to verify your financial situation." },
      { order: 4, title: "Claim the certificate", description: "Once approved, wait for the certificate to be printed and signed." },
    ],
    fees: [
      { label: "Certificate Fee", amount: 0, currency: "PHP", required: false, notes: "Often free or incurs a minimal fee of PHP 20-50, but many barangays waive fees for genuine indigents." }
    ],
    estimatedProcessingTime: { min: 15, max: 60, unit: "minutes", display: "15 to 60 minutes" },
    commonMistakes: [
      "Not knowing the exact agency you will submit the certificate to, as the barangay usually writes 'This is issued for [Specific Purpose]'."
    ],
    tips: [
      "Be honest during the assessment; barangay officials usually know the residents in their area.",
      "If you need multiple copies for different agencies, ask for them at the same time."
    ],
    faq: [
      { question: "What is this certificate used for?", answer: "It is used to get free medicine, hospital discounts, scholarships, or free legal representation from the Public Attorney's Office (PAO)." }
    ],
    officialSourceLinks: [
      { title: "DSWD Assistance Guidelines", publisher: "Department of Social Welfare and Development", url: "https://www.dswd.gov.ph/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["barangay", "indigency", "social welfare", "philippines"],
    status: "published",
  },
  {
    slug: "register-philsys-national-id-ph",
    title: "Register for a PhilSys National ID",
    category: "Government services",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Complete your demographic data online or via walk-in, and provide your biometrics to obtain the Philippine Identification System (PhilSys) ID.",
    audience: "Filipinos and resident aliens who have not yet secured a National ID.",
    eligibility: [
      { label: "Target registrants", description: "Open to all Filipino citizens and resident aliens. Children under 5 can also be registered but without full biometrics." },
    ],
    requiredDocuments: [
      { name: "Primary Document", description: "PSA Birth Certificate, DFA Passport, or GSIS/SSS/UMID.", required: true },
      { name: "Secondary Document (if primary is unavailable)", description: "Driver's License, Voter's ID, or Postal ID with a birth certificate.", required: false },
    ],
    instructions: [
      { order: 1, title: "Proceed to a registration center", description: "Walk in at any designated PhilSys registration center (often found in malls or municipal halls)." },
      { order: 2, title: "Step 1: Demographic capture", description: "Fill out the registration form with your personal and address details." },
      { order: 3, title: "Step 2: Biometric capture", description: "Undergo fingerprint scanning, iris scanning, and a front-facing photograph." },
      { order: 4, title: "Keep the transaction slip", description: "You will receive a transaction slip with your PhilSys Number (PSN). Keep this safe." },
    ],
    fees: [
      { label: "Registration Fee", amount: 0, currency: "PHP", required: false, notes: "The initial registration and ID issuance are completely free." }
    ],
    estimatedProcessingTime: { min: 3, max: 12, unit: "months", display: "A few weeks to several months for card delivery" },
    commonMistakes: [
      "Losing the transaction slip, which is needed to check the status or print an ePhilID.",
      "Wearing heavy makeup or colored contacts during the biometric capture."
    ],
    tips: [
      "While waiting for the physical card, you can use your transaction slip to generate a printable 'ePhilID' online which has the same validity.",
      "Check the PhilSys website or your local LGU page for mobile registration drives in your barangay."
    ],
    faq: [
      { question: "Is the National ID mandatory?", answer: "No, but it is highly encouraged as it serves as the primary valid ID for government and financial transactions." },
      { question: "How do I track my ID delivery?", answer: "You can track it using the PHLPost tracking site by entering the transaction number from your slip." }
    ],
    officialSourceLinks: [
      { title: "PhilSys Portal", publisher: "Philippine Statistics Authority", url: "https://philsys.gov.ph/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["national id", "philsys", "psa", "philippines"],
    status: "published",
  },
  {
    slug: "apply-tin-ph",
    title: "Apply for a TIN",
    category: "Government services",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Register with the Bureau of Internal Revenue (BIR) to get your Taxpayer Identification Number (TIN) for employment or business purposes.",
    audience: "New employees, freelancers, and business owners in the Philippines.",
    eligibility: [
      { label: "Need for a TIN", description: "Required for individuals earning income, opening businesses, or transacting with government agencies under E.O. 98." },
    ],
    requiredDocuments: [
      { name: "BIR Form 1902 or 1904", description: "Form 1902 for employees earning pure compensation. Form 1904 for one-time taxpayers or E.O. 98.", required: true },
      { name: "Valid ID", description: "Birth Certificate, Passport, or Driver’s License.", required: true },
      { name: "Employer documents (for Form 1902)", description: "Company ID or Certificate of Employment.", required: false },
    ],
    instructions: [
      { order: 1, title: "Determine your taxpayer type", description: "Identify if you are a local employee (Form 1902), self-employed (Form 1901), or securing a TIN for one-time transactions/E.O. 98 (Form 1904)." },
      { order: 2, title: "Use ORUS (Online Registration and Update System)", description: "You or your employer can register you online via the BIR ORUS portal." },
      { order: 3, title: "Visit the RDO (if required)", description: "If you cannot apply online, go to the Revenue District Office (RDO) that covers your residence or employer." },
      { order: 4, title: "Receive your TIN", description: "You will be assigned a 9 to 12 digit TIN. You may also request a digital TIN ID via ORUS." },
    ],
    fees: [
      { label: "TIN Issuance", amount: 0, currency: "PHP", required: false, notes: "Getting a TIN is free. Do not pay fixers." }
    ],
    estimatedProcessingTime: { min: 1, max: 3, unit: "days", display: "Same day (Walk-in) or 1-3 days (Online)" },
    commonMistakes: [
      "Getting a second TIN. Having multiple TINs is illegal and carries penalties.",
      "Paying a 'fixer' on Facebook to get a TIN, which often results in a fake or stolen number."
    ],
    tips: [
      "If you forgot your old TIN, you can use the BIR Mobile TIN Verifier app or call the BIR hotline to retrieve it.",
      "If you are a new employee, HR usually processes the Form 1902 for you."
    ],
    faq: [
      { question: "Can I get a physical TIN Card?", answer: "The BIR is shifting towards the Digital TIN ID which you can access via ORUS. Physical cards are subject to availability of ID stock at the RDO." }
    ],
    officialSourceLinks: [
      { title: "BIR Online Registration and Update System (ORUS)", publisher: "Bureau of Internal Revenue", url: "https://orus.bir.gov.ph/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["tin", "bir", "taxes", "philippines"],
    status: "published",
  },
  {
    slug: "register-philhealth-ph",
    title: "Register for PhilHealth",
    category: "Healthcare",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Register with the Philippine Health Insurance Corporation (PhilHealth) to get medical coverage and benefits.",
    audience: "All citizens of the Philippines needing basic health insurance coverage.",
    eligibility: [
      { label: "Universal Health Care", description: "Every Filipino citizen is eligible for PhilHealth under the Universal Health Care Law." },
    ],
    requiredDocuments: [
      { name: "PMRF (PhilHealth Member Registration Form)", description: "Filled out and signed.", required: true },
      { name: "Valid ID or Birth Certificate", description: "To prove identity.", required: true },
      { name: "1x1 Photo", description: "Two copies for the PMRF and the ID.", required: true },
    ],
    instructions: [
      { order: 1, title: "Fill out the PMRF", description: "Download the form online or get it at any PhilHealth office." },
      { order: 2, title: "Submit documents", description: "Go to the nearest Local Health Insurance Office (LHIO) or PhilHealth Express." },
      { order: 3, title: "Wait for processing", description: "The officer will verify your details and register you in the system." },
      { order: 4, title: "Receive your ID and PIN", description: "You will be given your PhilHealth Identification Number (PIN) and a Member Data Record (MDR)." },
    ],
    fees: [
      { label: "Registration Fee", amount: 0, currency: "PHP", required: false, notes: "Registration is free, though members may need to pay their first premium depending on their membership category." }
    ],
    estimatedProcessingTime: { min: 1, max: 2, unit: "hours", display: "Same day (Walk-in)" },
    commonMistakes: [
      "Not declaring dependents correctly on the PMRF, which can cause issues if they need hospitalization.",
      "Losing the Member Data Record (MDR) – this is often required by hospitals."
    ],
    tips: [
      "If you are formally employed, your HR usually processes this for you.",
      "You can access your PhilHealth records and pay premiums via the PhilHealth Member Portal."
    ],
    faq: [
      { question: "How much is the premium contribution?", answer: "It depends on your income and membership type (e.g., Direct Contributor vs Indirect Contributor)." }
    ],
    officialSourceLinks: [
      { title: "PhilHealth Registration", publisher: "Philippine Health Insurance Corporation", url: "https://www.philhealth.gov.ph/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["health", "insurance", "philhealth", "philippines"],
    status: "published",
  },
  {
    slug: "register-pag-ibig-ph",
    title: "Register for Pag-IBIG Membership",
    category: "Government services",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Register with the Home Development Mutual Fund (Pag-IBIG) to start your savings and gain access to housing loans.",
    audience: "Employees, self-employed individuals, OFWs, and voluntary members.",
    eligibility: [
      { label: "Membership", description: "Mandatory for all employees covered by SSS/GSIS; voluntary for others at least 18 years old." },
    ],
    requiredDocuments: [
      { name: "Valid ID", description: "Any government-issued ID for verification.", required: true },
      { name: "Proof of Income", description: "For self-employed and voluntary members, if applicable.", required: false },
    ],
    instructions: [
      { order: 1, title: "Register Online", description: "Visit the Virtual Pag-IBIG portal and select 'Register as a New Member'." },
      { order: 2, title: "Fill out the online form", description: "Input your personal information, employment details, and contact info." },
      { order: 3, title: "Save your RTN", description: "After successful submission, you will receive a Registration Tracking Number (RTN) via SMS." },
      { order: 4, title: "Get your MID", description: "Wait 2-3 working days for a text message containing your permanent Pag-IBIG Membership ID (MID) number." },
    ],
    fees: [
      { label: "Registration Fee", amount: 0, currency: "PHP", required: false, notes: "Registration is free." }
    ],
    estimatedProcessingTime: { min: 2, max: 3, unit: "days", display: "2-3 working days online" },
    commonMistakes: [
      "Providing an inactive mobile number; your MID will be sent there via SMS.",
      "Applying multiple times and generating multiple MIDs."
    ],
    tips: [
      "You can use your RTN to pay your first contribution while waiting for your official MID.",
      "Once you have an MID, create a Virtual Pag-IBIG account to easily check your savings."
    ],
    faq: [
      { question: "Is Pag-IBIG only for housing loans?", answer: "No, it is primarily a savings program that earns dividends. They also offer multi-purpose (cash) loans." }
    ],
    officialSourceLinks: [
      { title: "Virtual Pag-IBIG", publisher: "Home Development Mutual Fund", url: "https://www.pagibigfundservices.com/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["pag-ibig", "hdmf", "savings", "housing", "philippines"],
    status: "published",
  },
  {
    slug: "register-sss-ph",
    title: "Register for SSS Membership",
    category: "Government services",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Secure your Social Security System (SSS) number to access social security benefits like sickness, maternity, disability, and retirement.",
    audience: "Private sector employees, self-employed individuals, and voluntary members.",
    eligibility: [
      { label: "Age Requirement", description: "Must be at least 15 years old." },
    ],
    requiredDocuments: [
      { name: "Valid ID or Birth Certificate", description: "Original PSA birth certificate or a valid ID like a passport.", required: true },
      { name: "Email Address", description: "An active email for online registration.", required: true },
    ],
    instructions: [
      { order: 1, title: "Register Online", description: "Go to the SSS website and use the 'No SS Number Yet?' facility." },
      { order: 2, title: "Fill in the details", description: "Input your basic information accurately as it appears on your birth certificate." },
      { order: 3, title: "Receive your SS Number", description: "You will receive your SS Number and instructions via email." },
      { order: 4, title: "Change status to permanent", description: "Submit your birth certificate or valid ID via your My.SSS account or at an SSS branch to finalize your membership." },
    ],
    fees: [
      { label: "Registration Fee", amount: 0, currency: "PHP", required: false, notes: "Registration is free." }
    ],
    estimatedProcessingTime: { min: 1, max: 2, unit: "days", display: "Same day (Online generation)" },
    commonMistakes: [
      "Failing to submit the required supporting documents to change the status from 'Temporary' to 'Permanent'.",
      "Forgetting your My.SSS login credentials."
    ],
    tips: [
      "Your SS Number is a lifetime number; never apply for another one even if you switch employers.",
      "A permanent status is required before you can apply for loans or benefits."
    ],
    faq: [
      { question: "What if I am a government employee?", answer: "Government employees are covered by the GSIS, not SSS, but you can still be a voluntary SSS member." }
    ],
    officialSourceLinks: [
      { title: "SSS Online Registration", publisher: "Social Security System", url: "https://www.sss.gov.ph/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["sss", "social security", "benefits", "philippines"],
    status: "published",
  },
  {
    slug: "apply-postal-id-ph",
    title: "Apply for a Postal ID",
    category: "Government services",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Apply for a valid government ID recognized for most transactions by submitting documents to the Philippine Postal Corporation (PHLPost).",
    audience: "Filipinos needing an accessible primary ID.",
    eligibility: [
      { label: "Residency", description: "Open to all Filipinos residing in the Philippines and foreigners living in the country for at least 6 months." },
    ],
    requiredDocuments: [
      { name: "Duly Accomplished PID Application Form", description: "Two (2) copies of the form.", required: true },
      { name: "Proof of Identity", description: "PSA Birth Certificate, GSIS/SSS UMID, Driver's License, or Passport.", required: true },
      { name: "Proof of Address", description: "Barangay Certificate of Residency, utility bill, or bank statement.", required: true },
    ],
    instructions: [
      { order: 1, title: "Prepare your documents", description: "Fill out the application form and secure your proofs of identity and address." },
      { order: 2, title: "Go to any PHLPost branch", description: "Submit your documents to the nearest post office or Postal ID capture station." },
      { order: 3, title: "Undergo Data Capture", description: "Have your photo, fingerprints, and signature taken." },
      { order: 4, title: "Pay the fee and wait", description: "Pay the fee at the cashier. Your ID will be delivered to your mailing address." },
    ],
    fees: [
      { label: "Regular Processing", amount: 504, currency: "PHP", required: true, notes: "Includes delivery fee and VAT." },
      { label: "Rush Processing", amount: 650, currency: "PHP", required: false, notes: "Available only in select Metro Manila post offices for next-day release." }
    ],
    estimatedProcessingTime: { min: 1, max: 30, unit: "days", display: "1 day (Rush) to 30 days (Regular Provincial)" },
    commonMistakes: [
      "Providing an incorrect mailing address.",
      "Wearing glasses or colored contact lenses during the photo capture."
    ],
    tips: [
      "The Postal ID is widely accepted by banks and government agencies because of its security features.",
      "Check PHLPost announcements, as issuance of new Postal IDs is sometimes suspended."
    ],
    faq: [
      { question: "How long is the Postal ID valid?", answer: "It is valid for three (3) years for Filipinos and foreign residents with Diplomatic Visas. For other foreigners, it is valid for 1 year." }
    ],
    officialSourceLinks: [
      { title: "Postal ID", publisher: "PHLPost", url: "https://postalidph.com/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["postal id", "phlpost", "id", "philippines"],
    status: "published",
  },
  {
    slug: "open-bank-account-ph",
    title: "Open a Bank Account in the Philippines",
    category: "Banking",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Prepare your valid IDs and initial deposit to open a savings or checking account with a Philippine bank.",
    audience: "Individuals who need a secure place to store their funds or receive their salary.",
    eligibility: [
      { label: "Age Requirement", description: "Usually 18 years old for regular accounts; kids/teens accounts require a guardian." },
    ],
    requiredDocuments: [
      { name: "Valid IDs", description: "Usually one (1) primary ID or two (2) secondary IDs (e.g., Passport, PhilSys ID, Driver's License).", required: true },
      { name: "Proof of Billing", description: "A utility bill under your name or with an authorization letter if not under your name.", required: false },
      { name: "Initial Deposit", description: "Cash required to fund the account upon opening.", required: true },
    ],
    instructions: [
      { order: 1, title: "Choose a bank and account type", description: "Decide whether you need a passbook, ATM card, or a checking account based on the maintaining balance." },
      { order: 2, title: "Visit the branch or apply online", description: "Many banks now offer fully digital account opening via their mobile apps." },
      { order: 3, title: "Fill out the forms", description: "Provide your personal info, specimen signatures, and source of income." },
      { order: 4, title: "Make the initial deposit", description: "Hand over the initial deposit to the teller or transfer it online." },
    ],
    fees: [
      { label: "Initial Deposit", amount: 3000, currency: "PHP", required: true, notes: "Varies by bank and account type (ranges from zero for digital banks to PHP 10,000 for checking)." }
    ],
    estimatedProcessingTime: { min: 1, max: 7, unit: "days", display: "Same day for digital accounts; 5-7 days to receive an ATM card" },
    commonMistakes: [
      "Using an inconsistent signature across your IDs and bank forms.",
      "Forgetting to maintain the Average Daily Balance (ADB), resulting in penalty fees."
    ],
    tips: [
      "Digital banks offer zero maintaining balance and higher interest rates but lack physical branches.",
      "If opening a payroll account, secure an endorsement letter from your employer's HR."
    ],
    faq: [
      { question: "What is an ADB?", answer: "Average Daily Balance is the minimum amount of money you must keep in your account over a month to avoid penalty charges." }
    ],
    officialSourceLinks: [
      { title: "Financial Consumer Protection", publisher: "Bangko Sentral ng Pilipinas", url: "https://www.bsp.gov.ph/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["banking", "savings", "finance", "philippines"],
    status: "published",
  },
  {
    slug: "apply-student-permit-ph",
    title: "Apply for a Student Permit for Driving",
    category: "Government services",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Take a theoretical driving course and apply for a student permit at the LTO before learning how to drive.",
    audience: "Filipinos aged 16 and above who want to learn how to drive a motor vehicle.",
    eligibility: [
      { label: "Age", description: "Must be at least 16 years old for motorcycles/light vehicles." },
      { label: "Course Requirement", description: "Must have completed the mandatory 15-hour Theoretical Driving Course (TDC)." },
    ],
    requiredDocuments: [
      { name: "TDC Certificate", description: "Certificate of Completion for the Theoretical Driving Course electronically transmitted by an accredited driving school.", required: true },
      { name: "PSA Birth Certificate", description: "Original and photocopy to prove age and identity.", required: true },
      { name: "Medical Certificate", description: "Issued by an LTO-accredited clinic.", required: true },
      { name: "Parent's Consent", description: "Required for applicants below 18 years old, along with the parent's valid ID.", required: false },
    ],
    instructions: [
      { order: 1, title: "Take the TDC", description: "Enroll in and complete a 15-hour Theoretical Driving Course at an LTO-accredited driving school or LTO Driver's Education Center." },
      { order: 2, title: "Get a Medical Exam", description: "Undergo a medical evaluation at an LTO-accredited clinic." },
      { order: 3, title: "Create an LTMS Account", description: "Register for an account on the LTO Land Transportation Management System (LTMS) portal." },
      { order: 4, title: "Submit and pay at LTO", description: "Visit an LTO office, submit your documents, have your biometrics taken, and pay the fee to receive your student permit." },
    ],
    fees: [
      { label: "Student Permit Fee", amount: 317.63, currency: "PHP", required: true, notes: "Excludes the cost of the TDC and Medical Exam, which vary." }
    ],
    estimatedProcessingTime: { min: 1, max: 2, unit: "days", display: "Same day at LTO (after completing TDC)" },
    commonMistakes: [
      "Driving alone with only a student permit. You must be accompanied by a licensed driver at all times.",
      "Waiting too long to apply for a Non-Professional license, as the student permit expires in 1 year."
    ],
    tips: [
      "Some LTO Driver's Education Centers offer the TDC for free, though slots are highly limited.",
      "Bring your own pen and arrive early at the LTO office."
    ],
    faq: [
      { question: "How soon can I get a Non-Professional license?", answer: "You can apply for a Non-Professional license 31 days after the issuance of your student permit, provided you complete a Practical Driving Course." }
    ],
    officialSourceLinks: [
      { title: "LTO LTMS Portal", publisher: "Land Transportation Office", url: "https://portal.lto.gov.ph/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["driving", "lto", "student permit", "philippines"],
    status: "published",
  },
  {
    slug: "renew-drivers-license-ph",
    title: "Renew a Driver’s License",
    category: "Government services",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Pass the online exam and undergo a medical check to renew your Philippine driver's license with the LTO.",
    audience: "Drivers holding an LTO driver's license that is expiring or recently expired.",
    eligibility: [
      { label: "License Status", description: "License must not be expired for more than 2 years (otherwise, you must retake the practical exam)." },
    ],
    requiredDocuments: [
      { name: "Current Driver's License", description: "Your physical expiring/expired license card.", required: true },
      { name: "CDE Certificate", description: "Comprehensive Driver's Education (CDE) Certificate of Completion.", required: true },
      { name: "Medical Certificate", description: "Electronically transmitted by an LTO-accredited clinic.", required: true },
    ],
    instructions: [
      { order: 1, title: "Take the CDE Online Exam", description: "Log in to your LTMS account, take the free CDE course and exam, and print the certificate." },
      { order: 2, title: "Get a Medical Exam", description: "Visit an LTO-accredited clinic near the LTO office for a vision and physical check." },
      { order: 3, title: "Submit application via LTMS or Walk-in", description: "You can start the renewal via your LTMS portal or go directly to an LTO branch/renewal center." },
      { order: 4, title: "Pay and claim your card", description: "Pay the renewal fee and wait for your new card to be printed." },
    ],
    fees: [
      { label: "License Renewal Fee", amount: 585, currency: "PHP", required: true, notes: "Plus penalty fees if expired." }
    ],
    estimatedProcessingTime: { min: 1, max: 3, unit: "hours", display: "1 to 3 hours" },
    commonMistakes: [
      "Paying 'fixers' to take the CDE exam for you. The online exam is free and easy to pass on the LTMS portal.",
      "Renewing a license with unsettled traffic violations (alarms)."
    ],
    tips: [
      "If you have no traffic violations during the validity of your license, you are eligible for a 10-year validity upon renewal.",
      "You can renew your license up to 60 days before its expiration date."
    ],
    faq: [
      { question: "Can I renew at a mall?", answer: "Yes, many malls have LTO Driver's License Renewal Centers (DLRC) which are often faster than district offices." }
    ],
    officialSourceLinks: [
      { title: "LTMS Portal", publisher: "Land Transportation Office", url: "https://portal.lto.gov.ph/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["driving", "lto", "license renewal", "philippines"],
    status: "published",
  },
  {
    slug: "register-sole-proprietorship-ph",
    title: "Register a Sole Proprietorship Business",
    category: "Business",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Register your business name with the DTI to gain legal right to use it for your sole proprietorship.",
    audience: "Freelancers, online sellers, and small business owners establishing a single-owner enterprise.",
    eligibility: [
      { label: "Citizenship", description: "Must be a Filipino citizen, at least 18 years old." },
    ],
    requiredDocuments: [
      { name: "Valid ID", description: "One government-issued ID for online verification.", required: true },
      { name: "Proposed Business Names", description: "At least 3 options in case your first choice is taken.", required: true },
    ],
    instructions: [
      { order: 1, title: "Go to the BNRS Website", description: "Access the DTI Business Name Registration System (BNRS) online." },
      { order: 2, title: "Search and Register Name", description: "Verify if your desired name is available. Select the territorial scope (Barangay, City, Regional, or National)." },
      { order: 3, title: "Fill out the application", description: "Provide your personal details, business address, and contact info." },
      { order: 4, title: "Pay the fee online", description: "Settle the payment via GCash, PayMaya, or Credit Card. You can then download your DTI Certificate." },
    ],
    fees: [
      { label: "Barangay Scope", amount: 200, currency: "PHP", required: false, notes: "Plus PHP 30 Documentary Stamp Tax (DST)." },
      { label: "National Scope", amount: 2000, currency: "PHP", required: false, notes: "Plus PHP 30 DST." }
    ],
    estimatedProcessingTime: { min: 1, max: 2, unit: "hours", display: "Same day (Online)" },
    commonMistakes: [
      "Assuming DTI registration means you can start operating immediately. You still need Mayor's Permit and BIR registration.",
      "Choosing 'National' scope for a small sari-sari store, which unnecessarily increases the fee."
    ],
    tips: [
      "The DTI certificate is valid for 5 years. Set a reminder to renew it early to avoid losing the name.",
      "Print the digital certificate in color and display it prominently in your physical store."
    ],
    faq: [
      { question: "Is DTI registration required for freelancers?", answer: "If you operate under your given name (e.g., 'Juan Dela Cruz'), DTI is not strictly required. If you use a trade name (e.g., 'Juan's Graphics'), you must register." }
    ],
    officialSourceLinks: [
      { title: "DTI Business Name Registration", publisher: "Department of Trade and Industry", url: "https://bnrs.dti.gov.ph/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["business", "dti", "sole proprietorship", "philippines"],
    status: "published",
  },
  {
    slug: "apply-mayors-permit-ph",
    title: "Apply for a Mayor’s Permit for a Small Business",
    category: "Business",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Secure a Mayor's Permit (Business Permit) from your local municipal or city hall to legally operate your business.",
    audience: "Business owners who have completed DTI/SEC registration and are ready to open a physical or online store.",
    eligibility: [
      { label: "Prior Registrations", description: "You must have your DTI (for sole prop) or SEC (for corp) and Barangay Business Clearance first." },
    ],
    requiredDocuments: [
      { name: "DTI/SEC Registration", description: "Proof of registered business name.", required: true },
      { name: "Barangay Business Clearance", description: "Obtained from the barangay where the business is located.", required: true },
      { name: "Contract of Lease or Proof of Ownership", description: "To prove you have the right to use the commercial space.", required: true },
      { name: "Other Clearances", description: "Sanitary, Fire, and Zoning clearances (often processed simultaneously at the city hall).", required: true },
    ],
    instructions: [
      { order: 1, title: "Get a Barangay Business Clearance", description: "Visit your barangay hall, present your DTI/SEC, and pay the local fee." },
      { order: 2, title: "Go to the City Hall BPLO", description: "Proceed to the Business Permits and Licensing Office (BPLO) and submit the unified application form." },
      { order: 3, title: "Secure ancillary clearances", description: "Depending on your city's setup, you may need to visit the Zoning, Fire, and Health departments for their respective stamps." },
      { order: 4, title: "Pay the assessment and claim permit", description: "Pay the local business taxes and regulatory fees at the City Treasurer's Office. Claim your Mayor's Permit and official plate/sticker." },
    ],
    fees: [
      { label: "Permit and Tax Assessment", amount: 5000, currency: "PHP", required: true, notes: "Varies wildly based on the city, size of business, and nature of operations. Can range from a few thousand to tens of thousands." }
    ],
    estimatedProcessingTime: { min: 1, max: 7, unit: "days", display: "1 to 7 days" },
    commonMistakes: [
      "Operating without a permit while waiting for approval, which can lead to closure and heavy fines.",
      "Forgetting to renew the permit every January."
    ],
    tips: [
      "Many cities now use a Business One-Stop Shop (BOSS) system, especially in January, making the process much faster.",
      "Ensure you also register with the BIR within 30 days of getting your Mayor's Permit."
    ],
    faq: [
      { question: "Do online sellers need a Mayor's Permit?", answer: "Yes, local government units require online businesses operating from a residence within their jurisdiction to secure a permit." }
    ],
    officialSourceLinks: [
      { title: "Anti-Red Tape Authority", publisher: "ARTA", url: "https://arta.gov.ph/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "High",
    tags: ["business", "mayor's permit", "bplo", "philippines"],
    status: "published",
  },
  {
    slug: "prepare-college-enrollment-ph",
    title: "Prepare Requirements for College Enrollment",
    category: "Education",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Gather your high school credentials, pass the entrance exams, and submit your documents to enroll in a Philippine university.",
    audience: "Incoming college freshmen in the Philippines.",
    eligibility: [
      { label: "High School Graduate", description: "Must be a graduate of the K-12 program or an equivalent bridging program." },
    ],
    requiredDocuments: [
      { name: "Form 138 (Report Card)", description: "Original Grade 12 report card signed by the principal.", required: true },
      { name: "Form 137 (Permanent Record)", description: "Usually requested school-to-school, but you may need to provide a request letter.", required: false },
      { name: "Certificate of Good Moral Character", description: "Issued by your high school guidance counselor or principal.", required: true },
      { name: "PSA Birth Certificate", description: "Original copy for identity verification.", required: true },
      { name: "2x2 ID Pictures", description: "Usually 2-4 copies with a white background.", required: true },
    ],
    instructions: [
      { order: 1, title: "Pass the entrance exam", description: "Apply, take, and pass the specific university's college entrance test (e.g., UPCAT, ACET, DCAT)." },
      { order: 2, title: "Gather clearance and credentials", description: "Clear any pending obligations at your high school to get your Form 138 and Good Moral certificate." },
      { order: 3, title: "Submit documents", description: "Follow the university's enrollment schedule and submit your physical or digital documents." },
      { order: 4, title: "Pay the tuition fee", description: "Settle the enrollment or downpayment fee (if enrolling in a private university) to be officially registered." },
    ],
    fees: [
      { label: "Enrollment Downpayment", amount: 5000, currency: "PHP", required: false, notes: "Applies to private universities. State Universities and Colleges (SUCs) are generally free under the Free Tertiary Education Law." }
    ],
    estimatedProcessingTime: { min: 1, max: 4, unit: "weeks", display: "Varies by university schedule" },
    commonMistakes: [
      "Submitting the only original copy of your PSA Birth Certificate without keeping extras for yourself.",
      "Missing the deadline for confirming your slot after passing the entrance exam."
    ],
    tips: [
      "Have multiple photocopies of all your documents ready before going to the enrollment center.",
      "Keep your original Form 138 safe; it is the most critical document for college admission and cannot be easily replaced."
    ],
    faq: [
      { question: "Is college free in the Philippines?", answer: "Yes, tuition and miscellaneous fees are free in SUCs and Local Universities and Colleges (LUCs) for eligible Filipino students." }
    ],
    officialSourceLinks: [
      { title: "CHED Free Higher Education", publisher: "Commission on Higher Education", url: "https://ched.gov.ph/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Medium",
    tags: ["education", "college", "enrollment", "philippines"],
    status: "published",
  },
  {
    slug: "apply-part-time-job-ph",
    title: "Apply for a Local Part-Time Job",
    category: "Career",
    location: { countryCode: "PH", countryName: "Philippines" },
    summary: "Prepare your resume, secure government numbers, and ace the interview to land a part-time job in retail, BPO, or food service.",
    audience: "Working students and individuals seeking flexible income in the Philippines.",
    eligibility: [
      { label: "Age", description: "Generally 18 and above, though some establishments accept 15-17 year olds with parental consent and DOLE restrictions." },
    ],
    requiredDocuments: [
      { name: "Resume", description: "A one-page summary of your education, skills, and any experience.", required: true },
      { name: "Government Numbers", description: "TIN, SSS, PhilHealth, and Pag-IBIG numbers (often required upon hiring).", required: false },
      { name: "Pre-employment Clearances", description: "NBI Clearance or Police Clearance.", required: false },
    ],
    instructions: [
      { order: 1, title: "Create a tailored resume", description: "Highlight your communication skills, availability, and willingness to learn." },
      { order: 2, title: "Search for openings", description: "Look for 'Hiring' signs in malls or check online platforms like JobStreet, Indeed, or Facebook groups." },
      { order: 3, title: "Submit your application", description: "Walk in to submit your resume to the store manager or apply online." },
      { order: 4, title: "Attend the interview", description: "Show up on time, dress neatly, and emphasize your reliability and flexible schedule." },
    ],
    fees: [
      { label: "Pre-employment requirements", amount: 500, currency: "PHP", required: false, notes: "Estimated cost for securing clearances and a medical exam if required by the employer." }
    ],
    estimatedProcessingTime: { min: 1, max: 3, unit: "weeks", display: "1 to 3 weeks" },
    commonMistakes: [
      "Overcommitting hours and compromising your studies if you are a working student.",
      "Paying a recruiter or agency a 'placement fee' for a local retail job (this is often a scam)."
    ],
    tips: [
      "Many fast-food chains have specific 'working student' programs with flexible shifts designed around class schedules.",
      "Start processing your government numbers (SSS, PhilHealth, Pag-IBIG) even before you get hired to speed up your onboarding."
    ],
    faq: [
      { question: "Do part-time workers get benefits?", answer: "Yes, under the Labor Code, part-time workers are entitled to pro-rated statutory benefits like 13th-month pay and holiday pay." }
    ],
    officialSourceLinks: [
      { title: "Bureau of Local Employment", publisher: "Department of Labor and Employment", url: "https://ble.dole.gov.ph/" },
    ],
    lastReviewedDate: "2026-04-27",
    reviewStatus: "reviewed",
    difficulty: "Low",
    tags: ["career", "part-time", "jobs", "philippines"],
    status: "published",
  },
];

export function getProcessBySlug(slug: string) {
  return processGuides.find((process) => process.slug === slug);
}

export function getProcessesByCountry(countryCode: string) {
  return processGuides.filter(
    (process) => process.location.countryCode.toLowerCase() === countryCode.toLowerCase(),
  );
}

export function formatFeeRange(fees: ProcessGuide["fees"]) {
  const requiredFees = fees.filter((fee) => fee.required && fee.amount !== null);

  if (requiredFees.length === 0) {
    return "Usually free";
  }

  const currencies = Array.from(new Set(requiredFees.map((fee) => fee.currency)));
  const amounts = requiredFees.map((fee) => fee.amount ?? 0);
  const min = Math.min(...amounts);
  const max = Math.max(...amounts);
  const currency = currencies.length === 1 ? currencies[0] : "";
  const formatter = new Intl.NumberFormat("en", {
    style: currency ? "currency" : "decimal",
    currency: currency || undefined,
    maximumFractionDigits: 0,
  });

  return min === max
    ? formatter.format(min)
    : `${formatter.format(min)} to ${formatter.format(max)}`;
}

export const processCategories = Array.from(
  new Set(processGuides.map((process) => process.category)),
);

export const processCountries = Array.from(
  new Map(
    processGuides.map((process) => [
      process.location.countryCode,
      {
        code: process.location.countryCode,
        name: process.location.countryName,
      },
    ]),
  ).values(),
);

export const processSeedRecords: ProcessSeedRecord[] = processGuides.map((process) => ({
  slug: process.slug,
  title: process.title,
  category: process.category,
  country_code: process.location.countryCode,
  country_name: process.location.countryName,
  region: process.location.region ?? null,
  city: process.location.city ?? null,
  summary: process.summary,
  audience: process.audience,
  eligibility: process.eligibility,
  required_documents: process.requiredDocuments,
  instructions: process.instructions,
  fees: process.fees,
  estimated_processing_time: process.estimatedProcessingTime,
  common_mistakes: process.commonMistakes,
  tips: process.tips,
  faq: process.faq,
  official_source_links: process.officialSourceLinks,
  last_reviewed_date: process.lastReviewedDate,
  review_status: process.reviewStatus,
  difficulty: process.difficulty,
  tags: process.tags,
  status: process.status,
  published: process.status === "published",
}));
