# Intro video: detailed shot-by-shot script

60 seconds · 1920×1080 · 30 fps · **120 BPM**, so 1 beat = 0.5 s and 1 bar = 2 s. Every scene starts on a bar line so cuts land on the music.
Structure: **A**ttention (0:00–0:10) → **I**nterest (0:10–0:33) → **D**esire (0:33–0:50) → **A**ction (0:50–1:00).
Summary plan and storyboard: see [INTRO_VIDEO_PLAN.md](INTRO_VIDEO_PLAN.md).

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
| Default exit | 6 frames (0.2 s), fade only, never slide out (keeps it calm) |
| Count-ups | 24 frames, ease-out quart, tabular numerals |
| Captions | Burned in, cream on a 60% black bar, max 2 lines, 42 chars per line |

Rule of thumb: one idea per scene, one big number or word on screen, everything else small.

---

## 1. Scene-by-scene script

### SCENE 1 · Attention · 0:00–0:02 (bar 1)
- **VO:** "One crore in revenue."
- **On screen:** `₹0` → **₹1Cr+** (centred, ~320 px). Small label above: `REVENUE`.
- **Visual:** Black frame. Grid paper fades in under the number.
- **Animation:** Number counts up 0 → 1 over 24 frames. On the last frame the **+** pops in with a 110% overshoot and settles. A thin orange underline draws left to right beneath it.
- **Sound:** A single low "thump" on frame 0. Music starts: kick only.
- **Out:** Hard cut on beat 4.

### SCENE 2 · Attention · 0:02–0:04 (bar 2)
- **VO:** "Zero funding."
- **On screen:** **0** (huge, orange) and the words `external funding`.
- **Visual:** The ₹1Cr+ shrinks to the top-left corner as a small tag, so the two facts sit together.
- **Animation:** "0" scales from 140% to 100% with a quick shake (4 px, 6 frames) like a stamp landing.
- **Sound:** Stamp hit. Hi-hat enters.
- **Out:** Hard cut.

### SCENE 3 · Attention · 0:04–0:08 (bars 3–4)
- **VO:** "Thirteen thousand, four hundred fifty-six players, in a single tournament."
- **On screen:** **13,456** (counting up) and label `PLAYERS · ONE TOURNAMENT`.
- **Visual:** 2,988 tiny dots (one per team) fill the background in a scatter, in 10% cream. Sub-label: `2,988 teams`.
- **Animation:** Dots pop in randomly over 2 s, in time with the count. The number lands at 0:06. Dots then slowly drift to form a loose ring around the number.
- **Sound:** Rising riser for the last beat.
- **Out:** Riser cuts to silence for 3 frames (the "gap"), then Scene 4.

### SCENE 4 · Attention · 0:08–0:10 (bar 5)
- **VO:** "I'm Kshitiz. Here's how."
- **On screen:** **Kshitiz Trigunayat** on two lines, large; orange full stop after "Trigunayat".
- **Visual:** Clean, nothing else. The dots from Scene 3 have gone.
- **Animation:** Each line slides up from behind a mask (like the site's headline). The orange full stop drops in last with a small bounce.
- **Sound:** Music drops in full: bass + drums + melody. This is the hook payoff.
- **Out:** Name slides up and out as the next scene's grid slides in.

---

### SCENE 5 · Interest · 0:10–0:13 (1.5 bars; ends on beat 2 of bar 7)
- **VO:** "I'm an AI product engineer from Bengaluru."
- **On screen:** `AI PRODUCT ENGINEER` (mono label), **Bengaluru, India** (large).
- **Visual:** Simple dark map outline of India in the right half. Bengaluru is a small orange pin.
- **Animation:** The map outline draws itself (stroke animation, 18 frames). The pin drops from above and lands with a small ripple ring that expands and fades.
- **Sound:** Soft "pluck" on the pin landing.

### SCENE 6 · Interest · 0:13–0:21 (4 bars) — DnC Ventures
- **VO:** "I co-founded DnC Ventures: five divisions, three hundred-plus campus ambassadors, campaigns for Infinix, MSI, Swish and Krafton."
- **On screen (builds in 3 beats):**
  1. **DnC Ventures** + `CO-FOUNDER` (0:13–0:15)
  2. Five tiles: `Tech & AI`, `Media`, `Esports`, `Entertainment`, `Creatives`; then **300+ ambassadors · 200+ institutions** (0:15–0:18)
  3. Logos: Infinix · MSI India · Swish · Krafton (0:18–0:21)
- **Visual:** The map from Scene 5 stays faint in the background. Dots spread from Bengaluru across it as ambassadors.
- **Animation:**
  - Tiles slide in from alternating sides and snap into a 5-block strip, 3 frames apart.
  - Ambassador dots ripple outward from the pin until they cover the map (about 300 dots, density only, no need to be exact).
  - Logos fade up one by one, 6 frames apart, desaturated to cream.
- **Sound:** A "click" on each tile; a soft whoosh as dots spread; light "tick" per logo.
- **Asset needed:** Four logos (with permission).

### SCENE 7 · Interest · 0:21–0:27 (3 bars) — Campus Clash India
- **VO:** "Then we launched our own esports IP: Campus Clash India. Grand Finals at IIT Kharagpur."
- **On screen:** `OWN IP`, **Campus Clash India**, then `GRAND FINALS · IIT KHARAGPUR`, then `7,500+ in the crowd`.
- **Visual:** A photo or clip from the finals, full-bleed, darkened 40%. Title sits over it. If no footage: tournament bracket graphic.
- **Animation:** Photo reveals with a left-to-right wipe (14 frames) and slow 5% push-in for the whole scene. Title types on in mono for the label and slides up for the name. The "7,500+" counts up at the end.
- **Sound:** Crowd roar sample, low in the mix, rising under the VO and cut at the scene end.
- **Asset needed:** Finals photo or 5–10 s clip.

### SCENE 8 · Interest · 0:27–0:33 (3 bars) — Planiva
- **VO:** "And Planiva: an AI that drafts a full event plan in fifteen minutes, not sixteen hours."
- **On screen:** **Planiva**, `AGENTIC AI FOR EVENTS`, then `16–22 hrs` (struck through) → **15 min**.
- **Visual:** Left: a screenshot of the Planiva product in a simple browser frame. Right: a large analogue clock.
- **Animation:**
  - The screenshot slides in with a slight 3D tilt.
  - The clock hand spins fast (a few full turns) while "16–22 hrs" appears. A strike-through line draws across it.
  - The hand snaps to a quarter turn, the number flips to **15 min** in orange (card-flip, 10 frames).
- **Sound:** Fast ticking that speeds up, then a satisfying "ding" at 15 min.
- **Asset needed:** 2–3 Planiva screenshots or a short screen recording.

---

### SCENE 9 · Desire · 0:33–0:38 (2.5 bars)
- **VO:** "TiE Global finalist. Top three percent of five thousand."
- **On screen:** `TiE GLOBAL UNIVERSITY ACCELERATOR` + **Finalist**; then **Top 3%** `of 5,000+ · Tavastra Startup Village`.
- **Visual:** A round badge on the left; on the right a horizontal bar of 100 small blocks.
- **Animation:** The badge stamps in with a small rotation (−6° to 0°). The 100-block bar fills left to right; the last 3 blocks light up orange and pulse.
- **Sound:** Stamp hit, then a rising shimmer as the bar fills.
- **Asset needed:** TiE Global badge or certificate (optional, can be drawn).

### SCENE 10 · Desire · 0:38–0:46 (4 bars) — Ctruh and Desportz
- **VO:** "Now I'm an Associate Product Manager at Ctruh. Our marketplace shipped with zero critical bugs. I also teach esports marketing at Desportz."
- **On screen:** Two cards, left then right:
  - `NOW` · **Ctruh Technologies** · Associate Product Manager · **0 critical bugs**
  - `FACULTY` · **Desportz** · Esports Marketing & Business Development
- **Visual:** Cards sit on the grid paper. The Ctruh card has a small green-free status line: `MARKETPLACE: SHIPPED` with an orange tick.
- **Animation:** Ctruh card slides in from the left (0:38), the orange tick draws itself and "0" pulses once. Desportz card slides in from the right at 0:42. Both hold, slightly floating (2 px, slow sine).
- **Sound:** Two soft "whoosh + tick" pairs.
- **Note:** Say the Desportz dates only on the website, not in the video.

### SCENE 11 · Desire · 0:46–0:50 (2 bars) — The line that sums you up
- **VO:** "Engineer by training. Operator by habit."
- **On screen:** "Engineer by training." (cream) then "*Operator* by habit." with *Operator* in orange Instrument Serif italic.
- **Visual:** Pure typography on the grid. Nothing else.
- **Animation:** Each word lands on its own beat (4 words per line, so 2 per beat): scale from 120% to 100% with fade. A short pause before "Operator" so it lands as the punchline.
- **Sound:** Music drops to bass only for this line, then rebuilds on the last beat.

---

### SCENE 12 · Action · 0:50–0:56 (3 bars)
- **VO:** "Got a zero-to-one problem? Let's build it."
- **On screen:** **Got a zero-to-one problem?** (cream), then **Let's build it.** (orange).
- **Visual:** The grid lines converge toward the centre like a vanishing point.
- **Animation:** The first line types in; a 6-frame beat of nothing; then the second line slams in bigger. The grid lines slide inward over the whole scene.
- **Sound:** Music builds to its peak; a short riser into the end card.

### SCENE 13 · Action · 0:56–1:00 (2 bars) — End card
- **VO:** "Kshitiz Trigunayat. Say hello."
- **On screen:** **KT/** logo mark centred; below it: `kshitiz52.525@gmail.com` · `linkedin.com/in/kshitiz-trigunayat` · `[your-site-url]`.
- **Visual:** Dark clean frame. The orange slash in "KT/" is the only colour.
- **Animation:** Logo fades up (12 frames). Links stagger in 4 frames apart. The orange slash pulses gently twice. Hold the last 1.5 s with no motion so people can read the links.
- **Sound:** Final hit on the downbeat of 0:56, music rings out and fades by 1:00.

---

## 2. Clean voiceover (read straight through, about 135 words)

> One crore in revenue. Zero funding. Thirteen thousand, four hundred fifty-six players, in a single tournament. I'm Kshitiz. Here's how.
>
> I'm an AI product engineer from Bengaluru. I co-founded DnC Ventures: five divisions, three hundred-plus campus ambassadors, campaigns for Infinix, MSI, Swish and Krafton. Then we launched our own esports IP: Campus Clash India. Grand Finals at IIT Kharagpur. And Planiva: an AI that drafts a full event plan in fifteen minutes, not sixteen hours.
>
> TiE Global finalist. Top three percent of five thousand. Now I'm an Associate Product Manager at Ctruh. Our marketplace shipped with zero critical bugs. I also teach esports marketing at Desportz. Engineer by training. Operator by habit.
>
> Got a zero-to-one problem? Let's build it. Kshitiz Trigunayat. Say hello.

Delivery notes: calm, confident, not salesy. Pause a full half-second after "Zero funding" and after "Here's how." Lift your voice slightly on "Top three percent." Slow down on the final line.

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
00:00:33,000 --> 00:00:38,000
TiE Global finalist. Top 3% of 5,000.

10
00:00:38,000 --> 00:00:46,000
Now I'm an Associate Product Manager at Ctruh. Our marketplace shipped with zero critical bugs. I also teach esports marketing at Desportz.

11
00:00:46,000 --> 00:00:50,000
Engineer by training. Operator by habit.

12
00:00:50,000 --> 00:00:56,000
Got a zero-to-one problem? Let's build it.

13
00:00:56,000 --> 01:00,000
Kshitiz Trigunayat. Say hello.
```

---

## 4. Music map (120 BPM)

| Time | Bars | Music |
|---|---|---|
| 0:00–0:04 | 1–2 | Kick and sub only, sparse |
| 0:04–0:08 | 3–4 | Add hi-hats, build with a riser |
| 0:08–0:10 | 5 | Full drop (bass, drums, lead) |
| 0:10–0:33 | 6–16 | Steady groove, light melody, duck −6 dB under voice |
| 0:33–0:46 | 17–23 | Slightly brighter, add pads |
| 0:46–0:50 | 24–25 | Drop to bass only, rebuild on the last beat |
| 0:50–0:56 | 26–28 | Build to peak |
| 0:56–1:00 | 29–30 | Final hit, then ring out and fade |

Use royalty-free electronic or lo-fi-pop (Artlist, Epidemic Sound, or YouTube Audio Library). Check the licence covers commercial use.

---

## 5. Asset checklist per scene

| Scene | Needs |
|---|---|
| 3 | Nothing (generated dots) |
| 5 | India map outline (SVG, free) |
| 6 | **Logos: Infinix, MSI India, Swish, Krafton (permission needed)** |
| 7 | **Campus Clash India finals photo or clip** |
| 8 | **2–3 Planiva screenshots or a screen recording** |
| 9 | TiE Global badge (optional) |
| 10 | Ctruh logo (check you can use it); Desportz logo |
| 13 | KT/ logo mark, final website URL |

## 6. Facts to double-check before recording

These are used in the video and should match the site: ₹1Cr+ revenue, zero external funding, 13,456 players and 2,988 teams, 300+ ambassadors across 200+ institutions, 7,500+ footfall at the finals, 15 minutes vs 16–22 hours (Planiva), TiE Global finalist, top 3% of 5,000+, zero critical bugs at Ctruh.
Also confirm you are cleared to show the Ctruh name and the four client logos publicly.
