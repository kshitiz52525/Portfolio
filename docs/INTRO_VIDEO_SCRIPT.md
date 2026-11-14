# Intro video: detailed shot-by-shot script (v2)

76 seconds · 1920×1080 · 30 fps · **120 BPM**, so 1 beat = 0.5 s and 1 bar = 2 s. Every scene starts on a bar line so cuts land on the music.
Structure: **A**ttention (0:00–0:10) → **I**nterest (0:10–0:39) → **D**esire (0:39–1:06) → **A**ction (1:06–1:16).
Summary plan: see [INTRO_VIDEO_PLAN.md](INTRO_VIDEO_PLAN.md).

**What changed in v2:** added the NASSCOM AI in Manufacturing course (new Scene 9, with all four modules); rewrote the Ctruh scene to match what you actually did (Academy, CMS, Studio v1 incl. AI Marketing Studio, and IRIS end to end, plus social media and launch events; the marketplace is no longer claimed as yours); added "APM by role, generalist problem solver by work"; length grew from 60 s to 76 s.

**Constraint:** real Ctruh product screens cannot be shown publicly. Scene 11 therefore uses original abstract illustrations and icons, never actual Ctruh UI. NASSCOM and Naxxatra Sciences names may be used.

---

## 0. Global style sheet

| Item | Value |
|---|---|
| Background | `#0f0f0d` with faint grid paper (48 px squares, 6% cream lines) |
| Text | Cream `#f1ede4` |
| Accent | Orange `#ff6a2b`, used for ONE hero element per scene only |
| Muted text | `#9b968b` |
| Big type | Clash Display Semibold, tight tracking (−4%) |
| Emphasis words | Instrument Serif *italic*, orange |
| Labels | JetBrains Mono, uppercase, +14% tracking, 28 px |
| Safe margins | 120 px all sides; captions sit in the bottom 150 px |
| Default ease | `cubic-bezier(0.22, 1, 0.36, 1)` (same as the website) |
| Default entrance | 12 frames (0.4 s), slide up 40 px + fade in |
| Default exit | 6 frames (0.2 s), fade only, never slide out |
| Count-ups | 24 frames, ease-out quart, tabular numerals |
| Captions | Burned in, cream on a 60% black bar, max 2 lines, 42 chars per line |

Rule of thumb: one idea per scene, one big number or word on screen, everything else small.

---

## 1. Scene-by-scene script

### SCENE 1 · Attention · 0:00–0:02
- **VO:** "One crore in revenue."
- **On screen:** `₹0` → **₹1Cr+** (centred, ~320 px). Small label above: `REVENUE`.
- **Visual:** Black frame. Grid paper fades in under the number.
- **Animation:** Counts up 0 → 1 over 24 frames. On the last frame the **+** pops in with a 110% overshoot and settles. A thin orange underline draws left to right.
- **Sound:** A single low "thump" on frame 0. Music starts: kick only.
- **Out:** Hard cut on beat 4.

### SCENE 2 · Attention · 0:02–0:04
- **VO:** "Zero funding."
- **On screen:** **0** (huge, orange) and `external funding`.
- **Visual:** The ₹1Cr+ shrinks to the top-left as a small tag, so both facts sit together.
- **Animation:** "0" scales from 140% to 100% with a quick shake (4 px, 6 frames) like a stamp landing.
- **Sound:** Stamp hit. Hi-hat enters.
- **Out:** Hard cut.

### SCENE 3 · Attention · 0:04–0:08
- **VO:** "Thirteen thousand, four hundred fifty-six players, in a single tournament."
- **On screen:** **13,456** (counting up) and `PLAYERS · ONE TOURNAMENT`.
- **Visual:** 2,988 tiny dots (one per team) scatter in the background in 10% cream. Sub-label: `2,988 teams`.
- **Animation:** Dots pop in randomly over 2 s, in time with the count. The number lands at 0:06. Dots then drift into a loose ring around the number.
- **Sound:** Riser on the last beat.
- **Out:** Riser cuts to silence for 3 frames (the "gap"), then Scene 4.

### SCENE 4 · Attention · 0:08–0:10
- **VO:** "I'm Kshitiz. Here's how."
- **On screen:** **Kshitiz Trigunayat** on two lines, large; orange full stop after "Trigunayat".
- **Visual:** Clean, nothing else. The dots have gone.
- **Animation:** Each line slides up from behind a mask (like the site's headline). The orange full stop drops in last with a small bounce.
- **Sound:** Music drops in full: bass + drums + melody. The hook payoff.
- **Out:** Name slides up and out as the next scene's grid slides in.

---

### SCENE 5 · Interest · 0:10–0:13
- **VO:** "I'm an AI product engineer from Bengaluru."
- **On screen:** `AI PRODUCT ENGINEER` (mono label), **Bengaluru, India** (large).
- **Visual:** Simple dark outline map of India in the right half. Bengaluru is a small orange pin.
- **Animation:** The map outline draws itself (stroke animation, 18 frames). The pin drops from above and lands with a ripple ring that expands and fades.
- **Sound:** Soft "pluck" on the pin landing.

### SCENE 6 · Interest · 0:13–0:21 — DnC Ventures
- **VO:** "I co-founded DnC Ventures: five divisions, three hundred-plus campus ambassadors, campaigns for Infinix, MSI, Swish and Krafton."
- **On screen (builds in 3 beats):**
  1. **DnC Ventures** + `CO-FOUNDER` (0:13–0:15)
  2. Five tiles: `Tech & AI`, `Media`, `Esports`, `Entertainment`, `Creatives`; then **300+ ambassadors · 200+ institutions** (0:15–0:18)
  3. Logos: Infinix · MSI India · Swish · Krafton (0:18–0:21)
- **Visual:** The map from Scene 5 stays faint in the background. Dots spread from Bengaluru across it as ambassadors.
- **Animation:**
  - Tiles slide in from alternating sides and snap into a 5-block strip, 3 frames apart.
  - About 300 ambassador dots ripple outward from the pin until they cover the map (density only, no need to be exact).
  - Logos fade up one by one, 6 frames apart, desaturated to cream.
- **Sound:** A "click" on each tile; a soft whoosh as dots spread; a light "tick" per logo.
- **Asset needed:** Four logos (with permission).

### SCENE 7 · Interest · 0:21–0:27 — Campus Clash India
- **VO:** "Then we launched our own esports IP: Campus Clash India. Grand Finals at IIT Kharagpur."
- **On screen:** `OWN IP`, **Campus Clash India**, then `GRAND FINALS · IIT KHARAGPUR`, then `7,500+ in the crowd`.
- **Visual:** A photo or clip from the finals, full-bleed, darkened 40%. If no footage: a tournament bracket graphic.
- **Animation:** Photo reveals with a left-to-right wipe (14 frames) and a slow 5% push-in for the whole scene. The label types on in mono; the name slides up. "7,500+" counts up at the end.
- **Sound:** Crowd roar sample, low in the mix, rising under the VO and cut at the scene end.
- **Asset needed:** Finals photo or 5–10 s clip.

### SCENE 8 · Interest · 0:27–0:33 — Planiva
- **VO:** "And Planiva: an AI that drafts a full event plan in fifteen minutes, not sixteen hours."
- **On screen:** **Planiva**, `AGENTIC AI FOR EVENTS`, then `16–22 hrs` (struck through) → **15 min**.
- **Visual:** Left: a Planiva screenshot in a simple browser frame. Right: a large analogue clock.
- **Animation:**
  - The screenshot slides in with a slight 3D tilt.
  - The clock hand spins fast (a few turns) while "16–22 hrs" appears; a strike-through line draws across it.
  - The hand snaps to a quarter turn and the number flips to **15 min** in orange (card flip, 10 frames).
- **Sound:** Fast ticking that speeds up, then a "ding" at 15 min.
- **Asset needed:** 2–3 Planiva screenshots or a short screen recording.

### SCENE 9 · Interest · 0:33–0:39 — NASSCOM course *(new)*
- **VO:** "I also designed four modules of NASSCOM's AI in Manufacturing course, from predictive maintenance to connecting factory hardware with ERP and SCADA. Now live on FutureSkills Prime."
- **On screen:**
  - `NASSCOM FUTURESKILLS PRIME` (label)
  - **AI in Manufacturing** (large)
  - Four module chips: `Predictive Maintenance` · `Computer Vision QC` · `Digital Twins` · `Edge-to-Enterprise Integration`
  - **4 modules designed** and a small orange **LIVE** badge
  - Small credit line: `with Naxxatra Sciences`
- **Visual:** A stylised factory line across the lower third: a conveyor belt with boxes moving left to right.
- **Animation:**
  - Beat 1 (0:33): title slides up while the conveyor starts moving.
  - Beat 2 (0:34–0:37): each chip lights up in turn, and a mini-visual plays above it. Predictive Maintenance: a vibration waveform that spikes, then flat-lines to "alert". Computer Vision QC: a scanning box drawn around a conveyor item, which flashes orange on a defect. Digital Twins: a wireframe cube that duplicates itself into a ghost copy. Edge-to-Enterprise Integration: an Arduino board and a Jetson Nano board (simple line icons) connected by an animated line to an ERP table and a SCADA dashboard, with data pulses travelling along the line.
  - Beat 3 (0:37–0:39): "4 modules designed" counts up 0 → 4 and the **LIVE** badge pulses once.
- **Sound:** Soft machine hum under the VO, a "beep" on the defect, soft digital "blips" as data pulses travel, a short "ding" on LIVE.
- **Asset needed:** Screenshot of the public course page (futureskillsprime.in/course/ai-in-manufacturing) for a 1-second cutaway on the LIVE beat. NASSCOM and Naxxatra Sciences names may be used; check logo use separately.

---

### SCENE 10 · Desire · 0:39–0:44
- **VO:** "TiE Global finalist. Top three percent of five thousand."
- **On screen:** `TiE GLOBAL UNIVERSITY ACCELERATOR` + **Finalist**; then **Top 3%** `of 5,000+ · Tavastra Startup Village`.
- **Visual:** A round badge on the left; on the right a horizontal bar of 100 small blocks.
- **Animation:** The badge stamps in with a small rotation (−6° to 0°). The 100-block bar fills left to right; the last 3 blocks light up orange and pulse.
- **Sound:** Stamp hit, then a rising shimmer as the bar fills.
- **Asset needed:** TiE Global badge or certificate (optional, can be drawn).

### SCENE 11 · Desire · 0:44–0:58 — Ctruh *(rewritten)*
- **VO:** "At Ctruh, I'm an Associate Product Manager by role, and a generalist problem solver by work. I've taken Ctruh Academy, our CMS, Studio v1 and IRIS end to end, and I run social media and launch events."
- **On screen (builds in 4 beats):**
  1. Split title: `APM` **by role** / `GENERALIST PROBLEM SOLVER` **by work** (0:44–0:47)
  2. Four product cards, each with an `END TO END` tag: **Ctruh Academy** (learning platform) · **Ctruh CMS** (internal tool) · **Ctruh Studio v1** (incl. AI Marketing Studio) · **IRIS** (AR try-on mirror) (0:47–0:53)
  3. Two chips below: `Social media marketing` · `Launch event management` (0:53–0:56)
  4. Hold with a small line: `Ctruh Technologies · Bengaluru` (0:56–0:58)
- **Visual:** Cards sit on the grid paper. Each card shows an **original abstract illustration**, not real Ctruh UI (Academy: a book and play icon; CMS: a table-and-pencil icon; Studio: a cube with a spark for AI marketing; IRIS: a mirror outline with a shirt silhouette and AR corner brackets).
- **Animation:**
  - Beat 1: "by role" and "by work" flip like a split-flap display, to show the two sides of the job.
  - Beat 2: four cards slide up one by one, 6 frames apart; each `END TO END` tag stamps in.
  - Beat 3: chips pop in with a small bounce.
  - Cards float gently (2 px sine) during the hold.
- **Sound:** Split-flap clatter on beat 1; soft "pop" per card and chip.
- **Do not claim:** the marketplace as yours. If you want it mentioned, keep it small, as `QA on the marketplace`.
- **Asset needed:** Ctruh logo only if cleared. No product screenshots (not public).

### SCENE 12 · Desire · 0:58–1:02 — Desportz
- **VO:** "I also teach esports marketing at Desportz."
- **On screen:** `FACULTY` · **Desportz** · `Esports Marketing & Business Development`.
- **Visual:** A single card centred on the grid.
- **Animation:** Card slides in from the right; a small whistle-style underline draws beneath "Desportz".
- **Sound:** "Whoosh + tick".
- **Note:** Mention the dates on the website only, not in the video.

### SCENE 13 · Desire · 1:02–1:06 — The line that sums you up
- **VO:** "Engineer by training. Operator by habit."
- **On screen:** "Engineer by training." (cream), then "*Operator* by habit." with *Operator* in orange Instrument Serif italic.
- **Visual:** Pure typography on the grid. Nothing else.
- **Animation:** Words land on the beat (two per beat): scale from 120% to 100% with fade. A short pause before "Operator" so it lands as the punchline.
- **Sound:** Music drops to bass only for this line, then rebuilds on the last beat.

---

### SCENE 14 · Action · 1:06–1:12
- **VO:** "Got a zero-to-one problem? Let's build it."
- **On screen:** **Got a zero-to-one problem?** (cream), then **Let's build it.** (orange).
- **Visual:** The grid lines converge toward the centre like a vanishing point.
- **Animation:** The first line types in; a 6-frame pause; the second line slams in bigger. The grid lines slide inward over the whole scene.
- **Sound:** Music builds to its peak; a short riser into the end card.

### SCENE 15 · Action · 1:12–1:16 — End card
- **VO:** "Kshitiz Trigunayat. Say hello."
- **On screen:** **KT/** logo mark centred; below it `kshitiz52.525@gmail.com` · `linkedin.com/in/kshitiz-trigunayat` · `[your-site-url]`.
- **Visual:** Dark clean frame. The orange slash in "KT/" is the only colour.
- **Animation:** Logo fades up (12 frames). Links stagger in 4 frames apart. The slash pulses gently twice. Hold the last 1.5 s with no motion so people can read the links.
- **Sound:** Final hit on the downbeat of 1:12; music rings out and fades by 1:16.

---

## 2. Clean voiceover (read straight through, about 200 words)

> One crore in revenue. Zero funding. Thirteen thousand, four hundred fifty-six players, in a single tournament. I'm Kshitiz. Here's how.
>
> I'm an AI product engineer from Bengaluru. I co-founded DnC Ventures: five divisions, three hundred-plus campus ambassadors, campaigns for Infinix, MSI, Swish and Krafton. Then we launched our own esports IP: Campus Clash India. Grand Finals at IIT Kharagpur. And Planiva: an AI that drafts a full event plan in fifteen minutes, not sixteen hours. I also designed four modules of NASSCOM's AI in Manufacturing course, from predictive maintenance to connecting factory hardware with ERP and SCADA. Now live on FutureSkills Prime.
>
> TiE Global finalist. Top three percent of five thousand. At Ctruh, I'm an Associate Product Manager by role, and a generalist problem solver by work. I've taken Ctruh Academy, our CMS, Studio v1 and IRIS end to end, and I run social media and launch events. I also teach esports marketing at Desportz. Engineer by training. Operator by habit.
>
> Got a zero-to-one problem? Let's build it. Kshitiz Trigunayat. Say hello.

Delivery notes: calm, confident, not salesy. Pause a full half-second after "Zero funding" and after "Here's how." Lift your voice slightly on "Top three percent." Slow down on "by role" and "by work". Slow down on the final line.

---

## 3. Captions (SRT)

```
1
00:00:00,000 --> 00:00:02,000
One crore in revenue.

2
00:00:02,000 --> 00:00:04,000
Zero funding.

3
00:00:04,000 --> 00:00:08,000
13,456 players, in a single tournament.

4
00:00:08,000 --> 00:00:10,000
I'm Kshitiz. Here's how.

5
00:00:10,000 --> 00:00:13,000
I'm an AI product engineer from Bengaluru.

6
00:00:13,000 --> 00:00:21,000
I co-founded DnC Ventures: five divisions, 300+ campus ambassadors, campaigns for Infinix, MSI, Swish and Krafton.

7
00:00:21,000 --> 00:00:27,000
Then we launched our own esports IP: Campus Clash India. Grand Finals at IIT Kharagpur.

8
00:00:27,000 --> 00:00:33,000
And Planiva: an AI that drafts a full event plan in 15 minutes, not 16 hours.

9
00:00:33,000 --> 00:00:39,000
I also designed four modules of NASSCOM's AI in Manufacturing course, from predictive maintenance to connecting factory hardware with ERP and SCADA. Now live on FutureSkills Prime.

10
00:00:39,000 --> 00:00:44,000
TiE Global finalist. Top 3% of 5,000.

11
00:00:44,000 --> 00:00:58,000
At Ctruh, I'm an Associate Product Manager by role, and a generalist problem solver by work. I've taken Ctruh Academy, our CMS, Studio v1 and IRIS end to end, and I run social media and launch events.

12
00:00:58,000 --> 00:01:02,000
I also teach esports marketing at Desportz.

13
00:01:02,000 --> 00:01:06,000
Engineer by training. Operator by habit.

14
00:01:06,000 --> 00:01:12,000
Got a zero-to-one problem? Let's build it.

15
00:01:12,000 --> 00:01:16,000
Kshitiz Trigunayat. Say hello.
```

(For burned-in captions, split the long lines in 6, 11 and 9 into two 2-line blocks so they stay under 42 characters per line.)

---

## 4. Music map (120 BPM)

| Time | Bars | Music |
|---|---|---|
| 0:00–0:04 | 1–2 | Kick and sub only, sparse |
| 0:04–0:08 | 3–4 | Add hi-hats, build with a riser |
| 0:08–0:10 | 5 | Full drop (bass, drums, lead) |
| 0:10–0:39 | 6–19 | Steady groove, light melody, duck −6 dB under voice |
| 0:39–1:02 | 20–31 | Slightly brighter, add pads |
| 1:02–1:06 | 32–33 | Drop to bass only, rebuild on the last beat |
| 1:06–1:12 | 34–36 | Build to peak |
| 1:12–1:16 | 37–38 | Final hit, then ring out and fade |

Use royalty-free electronic or lo-fi-pop (Artlist, Epidemic Sound, YouTube Audio Library). Check the licence covers commercial use.

---

## 5. Asset checklist per scene

| Scene | Needs |
|---|---|
| 3 | Nothing (generated dots) |
| 5 | India map outline (SVG, free) |
| 6 | **Logos: Infinix, MSI India, Swish, Krafton (permission needed)** |
| 7 | **Campus Clash India finals photo or clip** |
| 8 | **2–3 Planiva screenshots or a screen recording** |
| 9 | NASSCOM course page screenshot (public page); NASSCOM FutureSkills Prime and Naxxatra Sciences names OK, check logo use; Arduino and Jetson Nano line icons (free/simple) |
| 10 | TiE Global badge (optional) |
| 11 | **No Ctruh screenshots (not public).** Original icons/illustrations only; Ctruh logo if cleared |
| 12 | Desportz logo |
| 15 | KT/ logo mark, final website URL |

## 6. Facts to double-check before recording

- ₹1Cr+ revenue, zero external funding, 13,456 players and 2,988 teams, 300+ ambassadors across 200+ institutions, 7,500+ footfall at the finals.
- Planiva: 15 minutes for a first draft vs 16–22 hours manual.
- NASSCOM: four modules designed, live on FutureSkills Prime. Fourth module is named **Edge-to-Enterprise Integration** (suggested name; confirm or change). Alternatives: "Connecting the Shop Floor" or "Industrial IoT Integration".
- TiE Global finalist, top 3% of 5,000+.
- Ctruh: Academy, CMS, Studio v1 (incl. AI Marketing Studio) and IRIS end to end; social media marketing; launch event management.
- You are cleared to show the Ctruh name (no product screens), the NASSCOM and Naxxatra Sciences names, and the four client logos publicly.
