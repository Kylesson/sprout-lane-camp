# Moodboard: Sprout Lane English, Winter Camp 2027 (Fiverr concept sample)

## Assumptions (thin brief, correct anything)
- **Concept project, fictional school.** Name: **Sprout Lane English / 豆芽巷美語**. A quick web search found no school using it (one search only, not a trademark check). Footer disclaimer: "Concept project. School, teachers and prices are invented."
- **Event:** a 2-week **Winter English Camp** for ages 6-11, Mon-Fri, 20-31 Jan 2027 (Taiwan winter break). Small groups of 8, two age groups (6-8 and 9-11). Fits the gig: "registration event page for your cram school or kids class".
- **Place:** Da'an District, Taipei, a short walk from an MRT station. No real street address. The map is a drawn CSS map, not a Google embed.
- **Prices (invented, NT$):** Half day NT$9,800 · Full day NT$16,800 · Full day + after-care NT$19,800. Sibling discount line: NT$1,000 off the second child.
- **Languages:** zh-Hant first (parents in Taipei), EN switch. The page opens in the browser language and saves the choice (Northlight pattern).
- **Main action:** sign-up form (demo, sends nothing, labelled as a demo). Secondary: "Ask us on LINE" button with no real LINE ID (a dead `#` link, marked as a demo).
- **Photos:** 4-5 royalty-free photos (Unsplash or Pexels: kids' hands on crafts, a whiteboard, books, kids seen from behind, no clear faces), with sources noted in NOTES.md. Fallback if nothing good turns up: FLUX-schnell images with no faces. No mascot.
- **No testimonials, no stats** (none are real). Teachers are 3 invented people with illustrated initial avatars, not photos.
- **Reuse from `C:\Sites\fiverr-event`:** language switch + one copy object, schedule tabs (roving tabindex, arrow keys), "pick a plan fills the form", form validation + success state, mobile dock that hides when the form is on screen, FAQ accordion, `tools/func-test.js`, `tools/export.js`, `tools/build.sh`. New look, new copy, new content.

## Strategy
- **Offer:** no `offer.md` (skipped `/sell-page` for a concept sample; the gig text is the brief).
- **Business / library category:** a kids' English cram school (補習班) running a holiday camp → `kids education` (5 sites), with `events` (6 sites) for the plan and registration patterns.
- **Visitors:** Taipei parents (mostly mothers, 30-45) on a phone, often reading in LINE's built-in browser after a link from a class group chat or a friend. They're in the evening after work, comparing 2-3 camps and asking themselves: is it safe, what do they actually do all day, how much is it, does it fit my work hours? They are tired and in a hurry, and they decide on trust, not on fun.
- **Actions:** 1) Sign up (form) → conversion anchor. 2) Ask a question on LINE. 3) Save or share the page with a partner (clear dates and price on the first screen).
- **Style directions:**
  - **A. Warm classroom notebook.** Cream page, rounded type, real photos in tilted rounded frames, one tomato-red action colour, schedule as a timetable on ruled lines. *Why:* reads as a real, organised school to a parent, with only a light kids' touch. Layout: centred headline + photo collage, then fact cards, then a timetable.
  - **B. Playful game world.** Bright mascot, chunky 3D buttons, game-style progress (Duolingo or Blooket). *Why:* kids love it. *Against:* parents pay, and a game look reads as an app, not a supervised camp. Layout: illustrated full-bleed hero, floating objects.
  - **C. Calm premium academy.** Serif headings, lots of white, one photo per screen, sold like a private school. *Why:* signals quality for higher prices. *Against:* cold for ages 6-11 and harder to show as a "kids class" gig sample.
  - **Recommended: A.** It answers the parent's real questions (safe, organised, clear price) and still looks like it's for kids. It also differs from Northlight (dark cobalt poster) so the portfolio shows range.
- **Vague wishes into decisions:** "friendly but trustworthy" = rounded display at modest size (max ~3.5rem, not poster type), body 17px, low density (one idea per screen on a phone), motion only as feedback, real photos over illustration.
- **Theme from the use scene:** light. Parents read in the evening at home or on the MRT, often in LINE's in-app browser, and a light page reads like a school notice they trust. Dark would feel like an event or nightlife page.
- **Library coverage:** kids education = 5 sites (classdojo, duolingo, blooket, prodigygame, theepicadventurers). Enough. Cross-category: **2027.uxlondon.com (events)** for the plan pitch panel and fact cards right after the hero, because no kids site sells a dated, priced event.

**Brief:** sign-up page for a fictional Taipei kids' English winter camp, zh-Hant + EN, parents on phones · **Mood:** warm, playful, light · **Sources (3):** classdojo.com, prodigygame.com, 2027.uxlondon.com. ClassDojo brings the parent-facing warmth (rounded heavy type, photo collage), Prodigy the calm parent tone (cream band, one burnt-orange action colour), UX London the clear event logic (format cards, one plan sold by value). All three are light, rounded and friendly, so they read as one design.

## Palette (light theme, one accent)
| Role | Hex | Note |
|---|---|---|
| Background | `#FFF8EE` | warm paper cream (not white) |
| Text / ink | `#1F2340` | deep ink navy, 14.5:1 on bg |
| Muted text | `#4A4F6A` | 7.6:1 on bg; on sky, secondary text uses `#3A4A66` (tinted) |
| Accent (only action colour) | `#C93F1A` | tomato red: buttons, picked plan, focus ring. White label 4.9:1, as text on bg 4.7:1 |
| Surface 2 | `#CFE6FA` | sky blue band (schedule, map); ink on it 11.9:1 |
| Highlight (surface, not action) | `#FFE08A` | sun yellow: picked-plan stamp, final CTA disc; ink on it 11.9:1 |
ui-ux-pro-max suggested learning blue + play yellow + pink accent on pale blue. I kept the blue + yellow idea as surfaces and swapped pink for one warm tomato action colour (Prodigy-like warmth, better contrast). None of the sources' exact palettes are used.

## Fonts
- Display: **Fredoka 600** (rounded, friendly, firm at large sizes) · Text: **Figtree 400/600** · zh-Hant display: **jf Open Huninn (jf open 粉圓, OFL)**, rounded so it matches Fredoka · zh-Hant body: **Noto Sans TC 400/700**, subset to the page's characters.
- ui-ux-pro-max suggested Baloo 2 + Comic Neue. I didn't take it: Comic Neue reads childish to the parent who pays. Its second result (Nunito + DM Sans) is close in spirit; Fredoka has more character for the headline.
- Not any source's exact pairing (ClassDojo: Melun/Ginto, Prodigy: Figtree only).
- All self-hosted as subset WOFF2.

## Conversion anchor
- **Primary action:** 立即報名 / Sign up → the form.
- **Phone:** after the hero CTA scrolls away, a bottom dock slides up: "Winter Camp · from NT$9,800 · [Sign up]" (tomato pill, 48px tall, inside the safe area). It hides while the form is on screen (Northlight's dock logic). The header keeps a small sign-up pill too.
- **Desktop:** sticky header pill + a CTA at the end of plans and the final band.
- Every plan card's button fills the form's plan field and scrolls to it.
- **Secondary:** "Ask us on LINE" outlined pill in the venue section and the final band, never next to the primary in the hero (one intent per screen).
- ui-ux-pro-max ux check returned only "sticky nav must not cover content" and "use inputmode": add bottom padding equal to the dock, `inputmode="tel"` on the phone field, `autocomplete` on every field.

## Sections

### 1. Header
- **Job:** brand + language + a way to sign up from anywhere.
- **Element:** sticky white header, logo left, ghost "Log in" and solid "Sign up" pill right.
- **Source:** classdojo.com, `classdojo.com/el-cards-points-skills.png`
- **Picked for:** a calm 64px bar where the only coloured thing is the sign-up pill; the parent always sees where to act.
- **Breakdown:** almost no chrome (hairline under the bar), centred links kept quiet in grey-ink, one saturated pill as the only colour, plus a ghost button for the less important action.
- **Remix:** cream bar with a hairline, a simple sprout wordmark (drawn SVG), language switch `中 / EN` as the ghost button, tomato "報名 / Sign up" pill. No nav links on phones (one-page, the dock does the job).
- **Motion:** none.
- **Upgrade:** clarity: the language switch is visible, not hidden in a menu (ClassDojo hides it as "US") · conversion: the pill sits in the header and the dock, so a CTA is always on screen · bilingual: the switch shows the target language in its own script.

### 2. Hero
- **Job:** in 3 seconds: what (English winter camp), who (ages 6-11), when, where, and the button.
- **Element:** centred two-line heavy rounded headline + subline, with rotated rounded photos scattered below.
- **Source:** classdojo.com, `classdojo.com/section-01-where-classrooms-become-comm.png`
- **Picked for:** big friendly type with real photos that show actual kids and classrooms, which is what builds parent trust.
- **Breakdown:** 2-line heavy rounded headline (~80px, tight leading) with all the weight on top; a lighter coloured subline; the photos sit low, are rotated a few degrees with large radius, and bleed off the edges, so the page feels real and human without a hero image fighting the headline.
- **Remix:** headline "寒假英語營，兩週說出口" / "Two weeks of winter English camp" (copy drafted at build). Subline = facts: "1/20-1/31 · 6-11 歲 · 大安區" in one line. One tomato CTA "立即報名" with "NT$9,800 起" beside it. Below: 4 rounded tilted photos (crafts, reading, whiteboard game, snack time). Drop ClassDojo's role tiles and stars (no fake reviews). Phone: headline, facts, CTA, then a horizontal row of 3 photos peeking off the right edge, all inside 390x650.
- **Motion:** the one authored moment's partner: photos settle from flat to their tilt (rotate + slight blur to sharp) once on load, 0.8s ease-out, staggered. Says "these are real snapshots being dealt onto the table". Reduced motion: tilted and still.
- **Upgrade:** clarity: dates, ages and place are in the hero (ClassDojo hides "what is it") · conversion: price anchor next to the CTA so parents don't scroll to find cost · speed: photos are WebP at 2 sizes (`srcset`), the first is preloaded, the rest lazy.

### 3. Camp at a glance (fact cards)
- **Job:** answer "does it fit my week?" before anything else.
- **Element:** 3 day-format cards directly under the hero, so the format is clear before scrolling.
- **Source:** 2027.uxlondon.com, `2027.uxlondon.com/el-hero-day-cards.png` (cross-category, see Strategy)
- **Picked for:** puts the shape of the event (days, times) right after the promise, which is the parent's first practical question.
- **Breakdown:** a short row of cards with the same structure (label, date, one line), placed tight under the headline so they read as part of the hero; large rounded corners and one strong colour make them feel like tickets, not a table.
- **Remix:** 4 small fact tiles in a 2x2 grid on phones / row on desktop: Dates (1/20-1/31, Mon-Fri) · Hours (9:00-12:00 or 9:00-16:00, after-care to 18:00) · Group (max 8 kids, 2 age groups) · Level (beginners welcome, short placement chat). One tile in sky, three in cream with a hairline, so it's not a grid of equal boxes (the "Hours" tile is double width on desktop since it carries the plan logic). No icons in squares; a small drawn number or clock line per tile.
- **Motion:** none.
- **Upgrade:** clarity: answers the 4 practical questions in one glance (UX London only shows days) · bilingual: each tile has a short label + a value, so CJK and EN stay one line at 390 · accessibility: a `<dl>` list, so screen readers hear label/value pairs.

### 4. What your child takes home (3 outcomes)
- **Job:** why this camp: outcomes a parent cares about (speaks up in class, reads a short book, finishes a project in English), not features.
- **Element:** feature rows alternating photo and text, linked by a dashed doodle path, each headed by a solid round badge.
- **Source:** classdojo.com, `classdojo.com/section-02-stay-connected-instantly.png`
- **Picked for:** the dashed path turns 3 points into a little journey, which suits "two weeks from shy to speaking".
- **Breakdown:** generous alternating rows; a solid coloured circle badge above each heading; heavy 2-line heading + 4-line body; the dashed line loops between rows so the eye travels down; images sit on a soft blob.
- **Remix:** 3 rows: "第一週：敢開口 / Week 1: speaks up", "讀完一本小書 / Reads a little book", "Final day: presents a project to family" (the camp ends with a parents' show, which is also a reason to sign up). Badge = a sprout at 3 growth stages (drawn SVG, one stroke weight), not icons. Dashed path in tomato at 40% opacity. Phone: stacked, photo above text, path becomes a short vertical dash between rows.
- **Motion:** the dashed path draws in (stroke-dashoffset) as the section scrolls into view, one time. Says "progress over two weeks". Phone: same, short. Reduced motion: drawn.
- **Upgrade:** clarity: outcomes are dated (week 1, final day), so parents see a plan, not a promise · meaningful motion: the path is the only scroll motion on the page, tied to the story · bilingual: headings max 2 lines in both languages at 390.

### 5. A day at camp (schedule)
- **Job:** "what do they actually do all day?" and "is it real English time or babysitting?"
- **Element:** original, reusing Northlight's tabbed schedule. Tabs = age group (6-8 / 9-11), slots = a day timetable (8-10 slots: 9:00 circle time, phonics game, snack, story, craft in English, lunch, outdoor play, project time, show and tell, pickup / after-care).
- **Source:** original, no reference (code from `C:\Sites\fiverr-event`).
- **Picked for:** n/a, original.
- **Breakdown:** n/a, original.
- **Remix:** sky-blue band. A timetable on faint ruled lines like a school notebook: time in tabular numbers left, activity + one plain line right. Half-day slots end at 12:00 with a small "半天班到這裡 / Half-day ends here" marker line, so the plans make sense visually.
- **Motion:** tab switch crossfades the list (150ms). No scroll motion.
- **Upgrade:** clarity: the half-day line shows plan differences inside the schedule · accessibility: proper tablist with arrow keys (already tested in Northlight) · bilingual: times stay `tabular-nums`, activity names short enough for one line in zh-Hant.

### 6. Teachers
- **Job:** "who is with my child?" (safety and quality).
- **Element:** original, no reference. 3 teachers, each: initial avatar (cream circle, ink initials, drawn sprout leaf), name, role, one line ("8 years teaching ages 6-10"), languages spoken.
- **Source:** original, no reference.
- **Picked for:** n/a, original.
- **Breakdown:** n/a, original.
- **Remix:** horizontal row of 3 on desktop, a swipeable row on phones with the next card peeking. Plus one plain line: "每組最多 8 位孩子，2 位老師 / Max 8 kids per group, 2 teachers". Background checks and first-aid training are a claim a real client would have to confirm, so they're written as `[client to confirm]` placeholders in the concept and listed in NOTES.md.
- **Motion:** none.
- **Upgrade:** clarity: ratio stated plainly · honesty: no stock "teacher" faces pretending to be real.

### 7. Plans and price
- **Job:** "how much, and which one fits my work hours?" Push the full day.
- **Element:** ticket pitch panel that sells one pass by value, one yellow button, a team-discount line, photo on the right.
- **Source:** 2027.uxlondon.com, `2027.uxlondon.com/section-01-join-us-for-all-three-days-and.png` (cross-category)
- **Picked for:** sells the best-value option in plain sentences instead of a 3-column feature grid, plus a small discount line, which is exactly how parents compare.
- **Breakdown:** a large two-tone headline where the value words take the accent colour; one short paragraph of reasoning; one fat rounded button; a small discount line under it; a real photo beside the text so it feels human, not like a pricing table.
- **Remix:** headline "全天班最划算 / Full day is the best value" with the plan word in tomato. Under it, 3 plan rows (not equal cards): Full day as the big highlighted row (sun yellow, "最多人選 / Most picked" label as styling only), Half day and Full day + after-care as slimmer rows. Each row: name, hours, price in tabular numbers, "選這個 / Choose" button. Sibling line under it: "兄弟姊妹第二位折 NT$1,000". Lunch and materials included line. Photo right on desktop, gone on phones.
- **Motion:** the authored moment: picking a plan drops a round sun-yellow stamp "已選 / Picked" onto that row (scale 1.15 to 1 with a blur-to-sharp, 0.5s exponential ease-out), the form's plan field fills, the page scrolls to the form. Says "your choice was recorded". Reduced motion: the stamp appears without movement.
- **Upgrade:** conversion: choosing a plan pre-fills the form (Northlight logic, tested) · clarity: hours sit next to price so parents match plans to their work day · no fake scarcity counters.

### 8. Sign-up form
- **Job:** finish the action in under a minute on a phone.
- **Element:** original, reusing Northlight's form logic.
- **Source:** original, no reference (code from `C:\Sites\fiverr-event`).
- **Picked for:** n/a, original.
- **Breakdown:** n/a, original.
- **Remix:** white card on cream (no nested cards). Fields: child's name, child's age (6-11 select), parent's name, phone (`inputmode="tel"`, Taiwan 09xx format check), email, plan (pre-filled), allergies or notes (optional), consent checkbox. A sticky-to-card summary: chosen plan + price. Success state: "收到了！我們會在 1 個工作天內聯絡你 / Got it! We'll contact you within 1 working day" + "Demo: nothing was sent" note.
- **Motion:** success state swaps in with a short clip-path reveal. Reduced motion: instant.
- **Upgrade:** conversion: 7 fields, one column, big 48px inputs, errors in plain words next to the field · accessibility: labels, `aria-describedby` errors, focus moves to the first error · bilingual: errors switch language mid-form (tested in Northlight).

### 9. Where we are
- **Job:** "how do I get there and pick up?"
- **Element:** original, no reference. A drawn CSS map card (streets as soft lines, MRT dot, a tomato pin) on the sky band + address line ("near MRT Da'an Station, exit 6, 3 min walk", invented) + pickup note + "Ask us on LINE" outlined pill.
- **Source:** original, no reference.
- **Picked for:** n/a, original.
- **Breakdown:** n/a, original.
- **Remix:** n/a.
- **Motion:** none.
- **Upgrade:** speed: no map embed (0 KB of third-party JS) · clarity: MRT exit and walking time, which is how Taipei parents think about distance.

### 10. FAQ
- **Job:** clear the last doubts: refunds, sick days, lunch, level, what to bring.
- **Element:** a full-width cream band with one centred heading and white content inside; the accordion rows themselves are Northlight's existing code.
- **Source:** prodigygame.com, `prodigygame.com/section-02-91-of-parents-said-their-chi.png`
- **Picked for:** a calm, warm band that makes the practical part feel friendly.
- **Breakdown:** Prodigy's band works by a full-width cream (#F7E9DB-like) surface change with a single centred heading, white cards inside and an orange detail as the only colour.
- **Remix:** one centred heading, 6 questions as rows (not cards) with a round tomato plus that turns into a minus; the open row gets a short tomato rule. Two columns on desktop (Northlight polish fix).
- **Motion:** row height opens with `interpolate-size` / grid-rows trick, 0.3s ease-out. Reduced motion: instant.
- **Upgrade:** accessibility: `<button aria-expanded>` rows, keyboard tested · clarity: refund and sick-day answers are first, because they block the payment decision.

### 11. Final CTA + footer
- **Job:** last push for parents who read to the bottom.
- **Element:** final CTA with a mascot rising from a yellow sun disc beside a headline and an orange pill.
- **Source:** prodigygame.com, `prodigygame.com/section-08-ready-to-kickstart-a-learnin.png` (this screenshot is covered by a modal; the INDEX line and notes describe the band)
- **Picked for:** one warm closing image and one button, no clutter.
- **Breakdown:** a single colour band with a big sun disc as the focal shape, the character rising out of it; headline + one pill to the side; nothing else competes.
- **Remix:** no mascot: a large sun-yellow disc with a rounded photo of a craft table rising from it, headline "名額每組 8 位 / 8 spots per group", primary "立即報名" and secondary "LINE 詢問". Footer: wordmark, invented address line, concept disclaimer, language switch.
- **Motion:** none (the disc is static).
- **Upgrade:** honesty: the group size is a real constraint, not a fake "only 3 left" · conversion: both actions here, after the parent has read everything.

## Objections covered
- "Is it safe? Who watches them?" → 3 facts, 6 teachers (ratio), 9 pickup note.
- "Is it real learning or babysitting?" → 4 outcomes, 5 schedule.
- "Does it fit my work hours?" → 3 facts (hours), 7 plans (hours next to price), after-care plan.
- "How much, any discount?" → hero price anchor, 7 plans, sibling line.
- "My child is a beginner / too shy" → 3 Level tile, 4 Week 1 outcome, FAQ.
- "What if they get sick / I need a refund?" → FAQ, first two rows.
- **Not covered:** social proof (no real reviews, left out on purpose). A real client would add approved parent quotes.

## Motion & performance
- **Library:** none. CSS + Web Animations API only, like Northlight. This breaks the "long page = Lenis + GSAP" rule on purpose: parents in LINE's in-app browser on mid-range phones, motion is only 3 small moments, and 0 KB of library JS keeps Lighthouse 90+.
- **Moments:** hero photos settle (load), outcome path draws (scroll, once), plan stamp (feedback, the authored moment), form success reveal.
- **Phones:** same moments, shorter distances; no parallax anywhere.
- **Reduced motion:** everything in its end state, no transitions except instant state changes.
- **Weight budget:** 350 KB total (fonts ~150 KB with CJK subsets, photos ~150 KB WebP, CSS+JS ~40 KB). Check at the end.
