/** Single source for identity, links and headline numbers used across pages. */
export const SITE = {
  name: "Kshitiz Trigunayat",
  title: "Kshitiz Trigunayat | AI Product Engineer & Growth Strategist",
  description:
    "AI product engineer in Bengaluru building LLM-powered products and zero-CAC growth engines. Built Planiva, co-founder of DnC Ventures, currently at Ctruh.",
  location: "Bengaluru, India",
  email: "kshitiz52.525@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/kshitiz-trigunayat/",
    github: "https://github.com/kshitiz52525",
    medium: "https://medium.com/@kshitiz52.525",
    /** Drop the current PDF at public/resume.pdf. */
    resume: "/resume.pdf",
    /** Intro motion-graphics video. Paste an embed URL (YouTube/Vimeo) or "/intro.mp4" to replace the hero placeholder. */
    introVideo: "/intro.mp4",
  },
} as const;

export const HERO_STATS = [
  { value: "13,456", label: "Players, Campus Clash India" },
  { value: "750K+", label: "On-ground footfall" },
  { value: "14M+", label: "Digital impressions" },
  { value: "300+", label: "Campus ambassadors, 200+ institutions" },
];
