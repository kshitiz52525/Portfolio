# Intro video plan — "Meet Kshitiz in 60 seconds"

Goal: someone who has never heard of you watches 60 seconds, with sound off or on, and knows who you are, what you have done, and how to reach you.
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

## 2. Main script: 60 seconds (about 145 words, 150 wpm)

Voiceover in first person. On-screen text carries the story if sound is off.

### A — Attention (0:00–0:08)
**VO:** "One crore in revenue. Zero funding. Thirteen thousand, four hundred fifty-six players in a single tournament. I'm Kshitiz. Here's how."

### I — Interest (0:08–0:32)
**VO:** "I'm an AI product engineer from Bengaluru. I co-founded DnC Ventures: five divisions, three hundred campus ambassadors, campaigns for Infinix, MSI, Swish and Krafton. We launched Campus Clash India, with Grand Finals at IIT Kharagpur. And I'm building Planiva, an AI that drafts a full event plan in fifteen minutes, not sixteen hours."

### D — Desire (0:32–0:50)
**VO:** "TiE Global finalist. Top three percent of five thousand. Today I'm an Associate Product Manager at Ctruh, where our marketplace shipped with zero critical bugs. I also teach esports marketing at Desportz. Engineer by training. Operator by habit."

### A — Action (0:50–1:00)
**VO:** "If you have a zero-to-one problem, let's build it. Kshitiz Trigunayat. Say hello."

---

## 3. Storyboard

Visual language = the site: near-black `#0f0f0d`, cream `#f1ede4`, orange `#ff6a2b`; Clash Display for big words, Instrument Serif *italic* for emphasis, JetBrains Mono for small labels; faint grid-paper background throughout.

| # | Time | On-screen | Motion |
|---|---|---|---|
| 1 | 0:00–0:03 | Huge **₹1Cr+**, then **0 funding** | Numbers count up from 0, hard cut on the beat |
| 2 | 0:03–0:08 | **13,456 players** then name card: **Kshitiz Trigunayat.** | Count-up, then the orange period slams in at the end of the name |
| 3 | 0:08–0:13 | "AI Product Engineer · Bengaluru" with map pin | Grid paper slides in, pin drops on Bengaluru |
| 4 | 0:13–0:22 | **DnC Ventures**: 5 division tiles snap together; **300+** ambassadors as dots spreading across a map of India; logos Infinix · MSI · Swish · Krafton | Tiles snap into a 5-block grid, dots ripple out from one point, logos stagger in |
| 5 | 0:22–0:27 | **Campus Clash India**: finals photo/clip, **IIT Kharagpur** label | Photo reveals with a wipe, label types on |
| 6 | 0:27–0:32 | **Planiva**: UI screenshot; clock spins 16 hrs then collapses to **15 min** | Clock hand whips round, number swaps with a flip |
| 7 | 0:32–0:38 | **TiE Global Finalist** badge + **Top 3% of 5,000+** | Badge stamps in; a bar fills to 97% |
| 8 | 0:38–0:46 | **Ctruh** — "Marketplace: 0 critical bugs" and **Desportz** — "Esports Marketing faculty" | Two cards slide in from the sides, "0" pulses |
| 9 | 0:46–0:50 | "Engineer by training. *Operator* by habit." | Words land one at a time; *Operator* in orange serif italic |
| 10 | 0:50–0:56 | "Zero-to-one problem? Let's build it." | Big type, grid lines converge to centre |
| 11 | 0:56–1:00 | Email, LinkedIn, URL, **KT/** logo | Links fade up; logo mark holds on the final beat |

Sound: one instrumental track around 100–110 BPM, cuts on the beat. Subtle whoosh on transitions, a "tick" on each count-up. Duck the music 6 dB under the voiceover.

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
