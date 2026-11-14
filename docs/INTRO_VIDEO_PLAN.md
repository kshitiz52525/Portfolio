# Intro video plan — "Meet Kshitiz"

Goal: someone who has never heard of you watches about 75 seconds, with sound off or on, and knows who you are, what you have done, and how to reach you.
Format: motion graphics (type, numbers, logos, UI clips). No talking head needed. Facts come from the portfolio, so the video and the site never disagree.

---

## 1. AIDA audit of the portfolio

| Stage | Where it lives on the site | Verdict | Gap |
|---|---|---|---|
| **Attention** | Hero: name, "AI products and the distribution to scale them", scorecard | Strong | Nothing in the hero shows *you*. The new video slot fixes this. |
| **Interest** | Selected Work cards, About, Timeline | Strong | The 8 work cards are dense. The video should pick only 3 proof points. |
| **Desire** | Scorecards (₹1Cr+, 13,456, 750K+), TiE finalist | Good | **Testimonials are empty.** No third-party voice yet. |
| **Action** | Contact, Resume | Weak | `resume.pdf` is missing (404). No single obvious next step. |

The video follows the same arc: hook, proof, credibility, one clear ask.

---

## 2. Main script and storyboard

The full shot-by-shot script (15 scenes, about 76 seconds) lives in **[INTRO_VIDEO_SCRIPT.md](INTRO_VIDEO_SCRIPT.md)**. It includes the exact voiceover, on-screen text, animation timings, sound, music map and captions.

| AIDA | Time | Scenes |
|---|---|---|
| **Attention** | 0:00–0:10 | ₹1Cr+ · zero funding · 13,456 players · name card |
| **Interest** | 0:10–0:39 | Bengaluru · DnC Ventures · Campus Clash India · Planiva · NASSCOM AI in Manufacturing |
| **Desire** | 0:39–1:06 | TiE Global finalist · Ctruh (APM by role, generalist problem solver by work; Academy, CMS, Studio v1; social media and launch events) · Desportz · "Engineer by training. Operator by habit." |
| **Action** | 1:06–1:16 | "Zero-to-one problem? Let's build it." · end card with contact links |

Visual language = the site: near-black `#0f0f0d`, cream `#f1ede4`, orange `#ff6a2b`; Clash Display for big words, Instrument Serif *italic* for emphasis, JetBrains Mono for small labels; grid-paper background.

---

## 4. 15-second teaser (for LinkedIn and Instagram, loops, no voiceover)

| Time | On-screen |
|---|---|
| 0:00–0:03 | **₹1Cr+** · **0 funding** |
| 0:03–0:06 | **13,456 players** · **IIT Kharagpur** |
| 0:06–0:09 | **15 min** vs 16 hrs · Planiva |
| 0:09–0:12 | **TiE Global Finalist** |
| 0:12–0:15 | **Kshitiz Trigunayat.** AI products + distribution. kshitiz52.525@gmail.com |

---

## 5. How to make it

Easiest to hardest:
1. **Remotion** (React-based video, same stack as this site, reuse the fonts and colours). Best fit if you want it tweakable by changing numbers in code.
2. **After Effects** or **Figma + Rive**. More freedom, more manual work.
3. **Canva Video**. Fastest, least on-brand.

Voiceover: record your own voice (a phone in a quiet room works) or use an AI voice. Your own voice is more personal.
Captions: burn in subtitles (most people watch muted) and export an `.srt`.

Exports:
- 1920×1080 MP4 (H.264), under 15 MB, for the website hero.
- 1080×1350 vertical cut for LinkedIn and Instagram.
- 1080×1920 for Reels and Shorts (optional).
- A poster image (JPG) of the best frame, shown before play.

---

## 6. What I need from you to produce it

- A clean headshot (optional cameo at the end).
- Logos of Infinix, MSI India, Swish and Krafton, **and permission to show them**.
- A Campus Clash India Grand Finals photo or 5–10 second clip.
- 2–3 Planiva UI screenshots or a short screen recording.
- A TiE Global badge or certificate image.
- Your voiceover (or approval to use an AI voice).
- Confirmation that every number in the script is current and publishable.

## 7. Putting it on the site

The hero already has a placeholder where the video goes. When the file is ready, set `introVideo` in `src/lib/site.ts` to a YouTube/Vimeo embed URL, or put the MP4 in `public/` and set it to `"/intro.mp4"`. The placeholder is replaced by the player automatically.
