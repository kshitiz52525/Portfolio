export interface TimelineChapter {
  year: string;
  place: string;
  title: string;
  body: string;
  tag: "Origin" | "School" | "College" | "Work" | "Build" | "Now";
  highlight?: boolean;
}

export const timelineChapters: TimelineChapter[] = [
  {
    year: "2004",
    place: "Soron, Uttar Pradesh",
    title: "Born in Soron.",
    body: "The journey began in a small town in Uttar Pradesh, India.",
    tag: "Origin",
  },
  {
    year: "2008",
    place: "Kasganj, Uttar Pradesh",
    title: "St Joseph School.",
    body: "School years began at St Joseph School, Kasganj.",
    tag: "School",
  },
  {
    year: "2012 onward",
    place: "Gurgaon, Haryana",
    title: "Lt. Atul Kataria Memorial School.",
    body: "Continued school in Gurgaon at Lt. Atul Kataria Memorial School.",
    tag: "School",
  },
  {
    year: "2017–2022",
    place: "Bhiwadi, Rajasthan",
    title: "Modern Public School, Bhiwadi.",
    body: "Completed school through Class 12 at Modern Public School, Bhiwadi.",
    tag: "School",
  },
  {
    year: "2023–2027",
    place: "Bengaluru, Karnataka",
    title: "Atria University.",
    body: "B.Tech in Digital Transformations (AI/ML), with a minor in Business. Moved to Bengaluru, captained the college cricket team and led the fest committee.",
    tag: "College",
  },
  {
    year: "Sep 2024–Present",
    place: "India",
    title: "Co-founded DnC Ventures.",
    body: "Co-founded a five-division execution company with no outside funding, built a network of 300+ campus ambassadors across 200+ institutions, and delivered 750K+ on-ground footfall for Tier-1 brands.",
    tag: "Work",
    highlight: true,
  },
  {
    year: "2024–Present",
    place: "Bengaluru, India",
    title: "Founded Planiva.",
    body: "Building an agentic event-planning platform. TiE Global University Accelerator finalist, and rated in the top 3% of 5,000+ at Tavastra Startup Village.",
    tag: "Build",
    highlight: true,
  },
  {
    year: "May–Oct 2025",
    place: "Remote",
    title: "Zordie AI.",
    body: "Worked as Product Engineer, AI Systems, on a resume intelligence product and its B2C launch GTM.",
    tag: "Work",
  },
  {
    year: "Aug–Nov 2025",
    place: "IIT Kharagpur and campuses across India",
    title: "Campus Clash India.",
    body: "Led GTM and operations for a four-month collegiate BGMI tournament: 13,456 players, 2,988 teams, and Grand Finals at IIT Kharagpur.",
    tag: "Build",
    highlight: true,
  },
  {
    year: "Feb–Mar 2026",
    place: "Delhi NCR",
    title: "Jio Games Good Game Show auditions.",
    body: "Led outreach across 20+ colleges and operations for a 40+ person ground team, with zero critical failures.",
    tag: "Work",
  },
  {
    year: "Mar–May 2026",
    place: "India",
    title: "NASSCOM AI in Manufacturing course.",
    body: "Designed four modules with Naxxatra Sciences for NASSCOM FutureSkills Prime, covering Predictive Maintenance, Computer Vision QC, and Digital Twins.",
    tag: "Work",
  },
  {
    year: "Jul–Aug 2026",
    place: "India",
    title: "Faculty Member at Desportz.",
    body: "Freelance faculty member for the Esports Management Program at Desportz, Institute of Esports Training & Academics, teaching the Esports Marketing and Business Development modules.",
    tag: "Work",
  },
  {
    year: "Jul 2026–Present",
    place: "Bengaluru, India",
    title: "Ctruh Technologies.",
    body: "Associate Product Manager, designing product experiences and agentic marketing systems.",
    tag: "Now",
    highlight: true,
  },
];