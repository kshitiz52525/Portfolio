export type ProjectSize = "large" | "medium" | "small";

export interface OutcomeMetric {
  value: string;
  label: string;
}

export interface MediaPlaceholderItem {
  event: string;
  place: string;
  date: string;
}

export interface CaseStudy {
  problem: string;
  approach: { title: string; body: string }[];
  decisions: { title: string; body: string }[];
  outcomes: OutcomeMetric[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  metric: string;
  description: string;
  stack: string[];
  size: ProjectSize;
  client: string;
  role: string;
  /** Cards shown on the homepage work grid. Campus Clash is reached via DnC. */
  featured: boolean;
  caseStudy: CaseStudy;
  /** Labeled placeholders for event photos / screenshots, per the content brief. */
  media?: MediaPlaceholderItem[];
}

export const projects: Project[] = [
  {
    slug: "planiva",
    title: "Planiva — Agentic AI for Event Management",
    category: "AI Product / Project",
    year: "2024–Present",
    metric: "First draft of an ₹8L, 150-guest wedding plan ready in 15 minutes vs 16–22 hours manually",
    description:
      "A multi-agent platform that sources vendors, builds budget and timeline, creates tasks, and automates stakeholder communication across email, WhatsApp and calls. TiE Global University Accelerator finalist.",
    stack: ["Python", "LangGraph", "Postgres + pgvector", "MCP", "Twilio", "Redis", "FastAPI"],
    size: "large",
    client: "Personal project",
    role: "Product Lead",
    featured: true,
    media: [
      {
        event: "Planiva product demo screenshots",
        place: "Bengaluru, India",
        date: "2025",
      },
    ],
    caseStudy: {
      problem:
        "Planning a mid-sized Indian event means weeks of vendor DMs, spreadsheet budget math and endless follow-up calls. A ₹8L, 150-guest wedding took planners 16–22 hours of manual coordination — and that repeats for every event.",
      approach: [
        {
          title: "Plan the whole event, not a chat",
          body: "Multi-agent pipeline built on LangGraph: vendor sourcing, budget and timeline construction, task creation, and stakeholder communication run as coordinated agents with human approval gates.",
        },
        {
          title: "Automate stakeholder communication",
          body: "The platform reaches out over email, WhatsApp and calls via Twilio — confirming vendors, nudging stakeholders and logging every response back into the plan.",
        },
        {
          title: "Retrieval that remembers every vendor",
          body: "Postgres + pgvector stores vendor profiles and past negotiations; MCP servers expose the right tools to each agent; Redis keeps hot planning state fast.",
        },
        {
          title: "Take it to investors",
          body: "Translated the working product into a TiE Global University Accelerator pitch and finished as a finalist. Separately rated in the top 3% of 5,000+ at Tavastra Startup Village.",
        },
      ],
      decisions: [
        {
          title: "LangGraph for the agent core",
          body: "We chose LangGraph over ad-hoc chains because event planning needs stateful, resumable loops — a vendor that replies two days later shouldn't break the plan.",
        },
        {
          title: "Postgres + pgvector over a separate vector DB",
          body: "One database for relational event state and vendor embeddings kept the stack deployable and cheap while retrieval quality stayed high.",
        },
        {
          title: "Human-in-the-loop by default",
          body: "Every agent action surfaces an approve/edit step. Planners trust the tool faster when they stay in command of vendor outreach.",
        },
      ],
      outcomes: [
        { value: "15 mins", label: "First draft ready for an ₹8L / 150-guest plan, vs 16–22 hrs manual" },
        { value: "Finalist", label: "TiE Global University Accelerator" },
        { value: "Top 3%", label: "Of 5,000+ at Tavastra Startup Village" },
      ],
    },
  },
  {
    slug: "ctruh",
    title: "Ctruh Technologies — Associate Product Manager",
    category: "Product / Generalist",
    year: "Jul 2026–Present",
    metric: "3 products taken end to end: Academy, CMS and Studio v1 · plus social media and launch events",
    description:
      "APM by role, generalist problem solver by work. At Ctruh I own Ctruh Academy (learning platform), the internal Ctruh CMS and Ctruh Studio v1 end to end, manage social media marketing, run launch events, and contribute QA on the marketplace.",
    stack: ["Product", "Figma", "PRD", "QA", "Social Media", "Event Management"],
    size: "large",
    client: "Ctruh Technologies",
    role: "Associate Product Manager",
    featured: true,
    caseStudy: {
      problem:
        "Ctruh builds immersive 3D and AR products. A small team needed products shipped and launched fast, and needed someone who would pick up whatever was blocking progress, from product specs to marketing to launch day.",
      approach: [
        {
          title: "Three products, end to end",
          body: "Took Ctruh Academy (a learning platform), the internal Ctruh CMS and Ctruh Studio v1 from problem definition and PRD through design, developer handoff and launch.",
        },
        {
          title: "Own the go-to-market too",
          body: "Managed Ctruh's social media marketing and the launch event management, so the products had an audience when they shipped.",
        },
        {
          title: "Quality on the marketplace",
          body: "Contributed structured testing to the Ctruh marketplace. The product was not mine end to end, but QA was my part of getting it out cleanly.",
        },
      ],
      decisions: [
        {
          title: "PRD-first, not ticket-first",
          body: "Writing full PRDs before handoff kept a fast-moving team aligned on edge cases and scope.",
        },
        {
          title: "Generalist over specialist",
          body: "On a small team the highest-value work moves between product, marketing and operations, so I chose to cover all three rather than stay in one lane.",
        },
      ],
      outcomes: [
        { value: "3", label: "Products end to end: Academy · CMS · Studio v1" },
        { value: "Social + Launch", label: "Marketing and launch event management" },
        { value: "QA", label: "Testing contribution on the marketplace" },
      ],
    },
  },
  {
    slug: "dnc-ventures",
    title: "DnC Ventures — Co-founder, Tech & Business Lead",
    category: "Company Building / GTM",
    year: "Sep 2024–Present",
    metric: "₹1Cr+ revenue · 5 divisions · zero external funding · clients incl. Infinix, MSI India, Swish, Krafton",
    description:
      "Co-founded a full-stack execution company across Tech & AI, Media, Esports, Entertainment and Creatives. Built a 300+ campus ambassador network across 200+ institutions, delivered 750K+ footfall for Tier-1 partners, and launched our own esports IP — Campus Clash India. Clients include Infinix Mobiles, MSI India, Swish, Krafton and many more.",
    stack: ["GTM", "Brand Activation", "AI Products", "Operations", "Distribution Network"],
    size: "large",
    client: "Self-founded",
    role: "Co-Founder, Tech & Business Lead",
    featured: true,
    media: [
      {
        event: "Bharati Vidyapeeth and ILM University campus events",
        place: "Place TBC",
        date: "2025",
      },
      {
        event: "Infinix and MSI brand activations",
        place: "Delhi and Mumbai, India",
        date: "2025–2026",
      },
      {
        event: "DnC ground team photo",
        place: "India",
        date: "2025",
      },
    ],
    caseStudy: {
      problem:
        "Indian brands targeting Gen-Z campus audiences had no high-trust, fast-moving execution partner. Agencies were slow and expensive; freelancers couldn't scale across geographies.",
      approach: [
        {
          title: "Five sharp divisions, one ops backbone",
          body: "Stood up Tech & AI, Media, Esports, Entertainment and Creatives as independent P&Ls sharing a single CRM, finance stack and ambassador layer.",
        },
        {
          title: "Ambassador network as moat",
          body: "Built a 300+ ambassador network across 200+ institutions — turning every campus into an activation node with near-zero CAC.",
        },
        {
          title: "50+ activations in six months",
          body: "Delivered 50+ activations across 125+ colleges for Infinix Mobiles, MSI India, Swish, Krafton, Strike World and many more, with 750K+ on-ground footfall for Tier-1 partners.",
        },
        {
          title: "Launch our own IP: Campus Clash India",
          body: "Rather than only executing for others, we launched our own collegiate esports IP — GTM and ops led by me, Aug–Nov 2025.",
        },
      ],
      decisions: [
        {
          title: "Bootstrap over raise",
          body: "We chose to bootstrap to ₹1Cr+ over taking external capital because services revenue compounds faster than dilution when distribution is the moat.",
        },
        {
          title: "Vertical brand architecture",
          body: "Each division got its own brand identity so clients in different categories never felt like a side project.",
        },
      ],
      outcomes: [
        { value: "₹1Cr+", label: "Revenue, zero external funding" },
        { value: "Infinix · MSI India · Swish · Krafton", label: "Clients, and many more" },
        { value: "300+", label: "Campus ambassadors · 200+ institutions" },
        { value: "750K+", label: "On-ground footfall delivered" },
      ],
    },
  },
  {
    slug: "campus-clash",
    title: "Campus Clash India",
    category: "Esports IP / GTM & Ops",
    year: "Aug–Nov 2025",
    metric: "13,456 players · 2,988 teams · Grand Finals at IIT Kharagpur",
    description:
      "Our own collegiate BGMI tournament under DnC Ventures — bootstrapped over four months. 13,456 players and 2,988 teams (2,374 online, 614 offline) from 17+ institutions, with 7,500+ footfall at the IIT Kharagpur Grand Finals and 5M+ impressions.",
    stack: ["Esports", "Event Ops", "Partnerships", "Broadcast"],
    size: "medium",
    client: "DnC Ventures",
    role: "GTM & Operations Lead",
    featured: false,
    media: [
      {
        event: "Campus Clash Grand Finals — trophy and crowd",
        place: "IIT Kharagpur, West Bengal",
        date: "Nov 2025",
      },
    ],
    caseStudy: {
      problem:
        "India lacked a credible, large-scale collegiate esports event. Existing tournaments either capped at single campuses or felt like brand activations stapled onto gameplay.",
      approach: [
        {
          title: "Build the pipeline before the prizes",
          body: "Seeded 17+ institutions through the DnC ambassador network. Discord ops and a structured registration funnel turned interest into 2,988 teams — 2,374 online and 614 offline.",
        },
        {
          title: "Hybrid format, physical finals",
          body: "Online qualifiers kept entry free and national; a LAN Grand Final at IIT Kharagpur drew 7,500+ footfall and sponsor budgets pure-online formats couldn't unlock.",
        },
        {
          title: "Broadcast that compounds",
          body: "A live broadcast and creator content drove 5M+ impressions across socials during the four-month run.",
        },
      ],
      decisions: [
        {
          title: "Bootstrap the whole event",
          body: "We ran the tournament on our own revenue and partner deals rather than waiting for a title sponsor — distribution first, budget follows.",
        },
        {
          title: "Discord as the source of truth",
          body: "Centralized refs, broadcast and player ops on Discord so a small team could run a 13K-player event.",
        },
      ],
      outcomes: [
        { value: "13,456", label: "Players · 2,988 teams" },
        { value: "5M+", label: "Impressions" },
        { value: "7,500+", label: "Footfall at IIT KGP finals" },
      ],
    },
  },
  {
    slug: "wrestlefan",
    title: "WrestleFan Entertainment — Shark Tank India",
    category: "Consulting / Finance & GTM",
    year: "2025",
    metric: "Financials & GTM for Shark Tank India Season 5",
    description:
      "Built the financials, revenue projections and go-to-market narrative behind WrestleFan Entertainment's Shark Tank India Season 5 run.",
    stack: ["Financial Modeling", "Revenue Projections", "GTM", "Pitch Narrative"],
    size: "small",
    client: "WrestleFan Entertainment",
    role: "Consultant",
    featured: true,
    caseStudy: {
      problem:
        "WrestleFan Entertainment needed an investor-grade story for Shark Tank India Season 5 — real numbers, credible projections and a GTM plan that survived investor scrutiny.",
      approach: [
        {
          title: "Model the business",
          body: "Built the financials and revenue projections from unit economics, not wishful growth curves.",
        },
        {
          title: "Shape the GTM",
          body: "Translated the model into a go-to-market plan investors could pressure-test, then packaged both for the Season 5 pitch.",
        },
      ],
      decisions: [
        {
          title: "Bottom-up projections",
          body: "We chose bottom-up unit economics over top-down market math because Shark Tank investors interrogate the first, not the second.",
        },
      ],
      outcomes: [
        { value: "Season 5", label: "Shark Tank India pitch readiness" },
        { value: "Full", label: "Financials + projections + GTM built" },
      ],
    },
  },
  {
    slug: "zordie-ai",
    title: "Resume Intelligence System — Zordie AI",
    category: "LLM Engineering",
    year: "May–Oct 2025",
    metric: "30% faster hiring · 60% better B2C candidate success",
    description:
      "End-to-end LLM + NLP pipeline at Zordie AI for candidate scoring, ranking and shortlisting. Replaced a multi-day manual process with sub-hour turnaround, and co-owned the B2C launch GTM.",
    stack: ["Python", "spaCy", "GPT-3.5", "Sentence Transformers"],
    size: "large",
    client: "Zordie AI",
    role: "Product Engineer, AI Systems",
    featured: true,
    caseStudy: {
      problem:
        "Recruiters were spending 2–3 days per role manually scanning resumes against JDs. Quality varied by reviewer and strong candidates routinely fell to the bottom of the stack.",
      approach: [
        {
          title: "Decompose the JD",
          body: "Used spaCy + GPT-3.5 to extract structured requirements (must-have, nice-to-have, seniority signal) from messy job descriptions.",
        },
        {
          title: "Embed and align",
          body: "Encoded resume sections and JD requirements with Sentence Transformers, then computed asymmetric semantic alignment per requirement.",
        },
        {
          title: "Score, explain, rank",
          body: "Combined alignment with rule-based seniority and role-fit signals. Every score ships with an LLM-written rationale so decisions stay auditable.",
        },
        {
          title: "Own the B2C launch GTM",
          body: "Co-owned the go-to-market for the B2C launch, driving a 60% improvement in candidate success on the consumer side.",
        },
      ],
      decisions: [
        {
          title: "Asymmetric embeddings over keyword matching",
          body: "We chose semantic alignment over keyword overlap because JDs and resumes describe the same skills in different vocabularies.",
        },
        {
          title: "GPT-3.5 only for rationales",
          body: "Kept the heavy lift in deterministic models; used the LLM strictly for explanations to keep cost and latency predictable.",
        },
      ],
      outcomes: [
        { value: "30%", label: "Faster hiring cycle" },
        { value: "60%", label: "Better B2C candidate success" },
        { value: "< 1h", label: "Turnaround per role" },
      ],
    },
  },
  {
    slug: "nasscom-ai-curriculum",
    title: "AI in Manufacturing — NASSCOM",
    category: "Curriculum Design / EdTech",
    year: "Mar–May 2026",
    metric: "4 modules designed · lectures & platform submission",
    description:
      "Designed four modules of NASSCOM's AI in Manufacturing course with Naxxatra Sciences — Predictive Maintenance, Computer Vision QC and Digital Twins — including lectures and the FutureSkills Prime platform submission.",
    stack: ["Python", "Scikit-learn", "TensorFlow", "Computer Vision"],
    size: "medium",
    client: "NASSCOM FutureSkills Prime",
    role: "Curriculum Designer, Naxxatra Sciences",
    featured: true,
    caseStudy: {
      problem:
        "NASSCOM needed a credible AI in Manufacturing course for FutureSkills Prime. Existing material was either too academic or too vendor-specific to scale nationwide.",
      approach: [
        {
          title: "Four industry-grade modules",
          body: "Authored Predictive Maintenance, Computer Vision QC and Digital Twins modules with code-ready examples in Python, Scikit-learn and TensorFlow.",
        },
        {
          title: "Lectures and platform submission",
          body: "Delivered lectures and completed the full FutureSkills Prime platform submission, so the course went live for learners across India.",
        },
      ],
      decisions: [
        {
          title: "Open-source tooling only",
          body: "We chose Scikit-learn and TensorFlow over vendor SDKs because public-college labs across India had to be able to run every example.",
        },
      ],
      outcomes: [
        { value: "4", label: "Modules designed" },
        { value: "Live", label: "On FutureSkills Prime" },
        { value: "Course", label: "futureskillsprime.in/course/ai-in-manufacturing" },
      ],
    },
  },
  {
    slug: "jio-games",
    title: "Jio Games — Good Game Show Auditions",
    category: "Operations / Brand",
    year: "Feb–Mar 2026",
    metric: "20+ colleges · 40+ person team · zero critical failures",
    description:
      "Led institutional outreach across 20+ Delhi NCR colleges for Jio Games' Good Game Show auditions, and ran a 40+ person ground team with zero critical failures.",
    stack: ["CRM", "Team Management", "Ops Dashboards", "Offline Marketing"],
    size: "small",
    client: "Jio Games (Freelance)",
    role: "Ops & Marketing Lead",
    featured: true,
    caseStudy: {
      problem:
        "Jio Games needed dense, high-quality student registration across Delhi NCR for the Good Game Show auditions in a compressed window — without a permanent regional ops team.",
      approach: [
        {
          title: "Tier the colleges",
          body: "Segmented 20+ institutions by reach and esports density, then prioritized partnership outreach against that ranking.",
        },
        {
          title: "Stand up an ops layer fast",
          body: "Recruited and trained a 40+ person ground team on a single ops dashboard so auditions ran consistently across campuses.",
        },
        {
          title: "Zero critical failures",
          body: "Ran the whole window with zero critical failures — outreach, registration flow and ground ops held under load.",
        },
      ],
      decisions: [
        {
          title: "Centralized dashboard over local chats",
          body: "We chose one ops dashboard over WhatsApp threads because volunteer churn would have destroyed knowledge continuity otherwise.",
        },
      ],
      outcomes: [
        { value: "20+", label: "Colleges activated" },
        { value: "40+", label: "Person ground team" },
        { value: "0", label: "Critical failures" },
      ],
    },
  },
  {
    slug: "desportz",
    title: "Desportz — Esports Marketing & Business Development",
    category: "Teaching / Esports Education",
    year: "Jul–Aug 2026",
    metric: "Freelance faculty · Esports Marketing and Business Development modules",
    description:
      "Freelance faculty member for the Esports Management Program at Desportz, Institute of Esports Training & Academics, teaching the Esports Marketing and Business Development modules.",
    stack: ["Esports Marketing", "Business Development", "Brand Partnerships", "Curriculum Delivery"],
    size: "small",
    client: "Desportz — Institute of Esports Training & Academics",
    role: "Faculty Member (Freelance), Esports Management Program",
    featured: true,
    media: [
      {
        event: "Desportz classroom and teaching session photos",
        place: "Place TBC",
        date: "2026",
      },
    ],
    caseStudy: {
      problem:
        "Esports is a fast-growing industry, but most aspiring managers learn marketing and business development on the job. Desportz needed faculty who had actually sold into the industry, not only studied it.",
      approach: [
        {
          title: "Teach from real campaigns",
          body: "Built the Esports Marketing module around work I have delivered: brand activations for Infinix, MSI India, Swish and Krafton, and Campus Clash India's go-to-market.",
        },
        {
          title: "Business Development as a repeatable process",
          body: "Taught how to find, pitch and close brand partners in esports, from sponsor targeting to proposals and activation delivery, drawing on DnC Ventures' ₹1Cr+ of revenue built with no outside funding.",
        },
        {
          title: "Practice over theory",
          body: "Used live case studies and applied exercises so students leave with frameworks they can use in their first industry role.",
        },
      ],
      decisions: [
        {
          title: "Practitioner cases over textbook cases",
          body: "I chose examples from my own campus-esports and brand-activation work over generic frameworks, because the Indian esports market behaves differently from the case studies in standard marketing books.",
        },
      ],
      outcomes: [
        { value: "2", label: "Modules taught: Marketing and Business Development" },
        { value: "Jul–Aug 2026", label: "Freelance engagement" },
        { value: "Esports Mgmt", label: "Program at Desportz" },
      ],
    },
  },
];

/** Brand activations delivered through DnC Ventures (2025–2026). */
export const dncActivations: { name: string; result: string }[] = [
  {
    name: "Infinix Campus Connect",
    result: "30K+ on-ground audience, 500+ X Club signups",
  },
  {
    name: "MSI store activations",
    result: "Delhi and Mumbai, creator-led UGC campaign",
  },
  {
    name: "Swish",
    result: "Delhi NCR college activation",
  },
  {
    name: "Strike World",
    result: "Mumbai college championship",
  },
];
