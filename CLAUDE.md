# KemKnightRanger Academy (KRA) — Project Memory

> **Start here every session.** This document is the single source of truth for the KRA project — its identity, its decisions, its assets, and its direction. Read it before doing anything else.

---

## What KRA Actually Is

KemKnightRanger Academy is not a school, a tutoring program, or a workshop series.

It is a **living academy with a full progression system** — part scouts unit, part ancient order of scholars, part strategic gaming guild, part creative arts collective. Students do not just learn — they advance, earn, and belong to something that grows alongside them.

The closest reference points are **Hogwarts** (initiation, earned advancement, a world that feels alive with meaning) and **Timbuktu's Sankore University** (one of the oldest centers of organized learning on earth — African scholarly tradition as the origin, not the footnote). KRA is neither of those things. It is something new, grown from both.

**On the website:** The Hogwarts + Timbuktu framing is *implicit* in design and experience, *explicit* in a labeled callout for educators and supporters.

---

## The Emotional Experience

The site is designed to produce three feelings in sequence as someone scrolls:

1. **"An adventure I didn't know I was allowed to go on"** — the opening. Wonder, surprise, something that feels slightly impossible. The hero speaks *to* the student, not *about* the program.
2. **"I've been waiting for this place my whole life"** — the recognition. They see themselves reflected. Their background honored. Their questions taken seriously.
3. **"This feels serious and important — I want to earn my place"** — the invitation. Used sparingly. Communicates that KRA has weight, that commitment will be met with something real.

Never let the design become cold, gatekeeping, or elite-coded. The gravity should feel like an *invitation upward*, not a barrier.

---

## Core Philosophy

- **Ma'at** — an ancient philosophy popularly known as Ma'at (balance, truth, and order). This is the philosophical spine of everything. Always introduce it this way — accessible, not assumed.
- **The student is the researcher** — especially in the Lineage Program. KRA never curates a list of acceptable cultural examples. Discovery belongs to the student.
- **Earned, not given** — every level, every tool, every sleeve means something. The progression system is sacred to the identity.
- **Inclusive gravity** — serious without being exclusive. Every student can earn their way here. The standard elevates, it does not exclude.

### The Six C Framework

KRA helps install six qualities that students carry across school, strategy, community, and life:

- **Confidence** — trusting your abilities and meeting challenge with courage
- **Creativity** — generating new ideas, connections, and solutions
- **Character** — honesty, bravery, discipline, and integrity when no one is watching
- **Cooperation** — working with others toward something larger than yourself
- **Compassion** — understanding and caring about other people's needs and feelings
- **Comprehension** — deeply understanding what is taught, read, and practiced

On the site, this framework belongs wherever KRA explains what kind of person the Academy helps shape, especially in the Courtyard / about section.

---

## Language Rules

| Instead of... | Use... |
|---|---|
| "The Order" | "The Academy," "The Community," "The Organization" |
| "Rooted in Kemetic philosophy" | "Rooted in an ancient philosophy popularly known as Ma'at" |
| "Join the Order" | "Enter the Academy," "Join the Community," "Begin Your Journey" |
| Listing cultural examples (Vedic, Yoruba, etc.) | Open-ended questions that invite student discovery |
| "Sign up" | "Enroll," "Begin," "Enter," "Join the Founding Community" |

The site speaks in **campus language** — every section is named as a location within the academy, not a generic web section label.

---

## Site Architecture

### Campus Section Names

| Section ID | Campus Name | Purpose |
|---|---|---|
| `#gates` | The Gates | Hero / arrival |
| `#courtyard` | The Courtyard | About / philosophy / origin story |
| `#halls` | The Halls | Programs overview |
| `#progression` | The Path | Badge + MTG sleeve hierarchy |
| `#archives` | The Archives | Lineage Research Program |
| `#canon` | The Canon | Anime & Animation curriculum |
| `#maproom` | The Map Room | Vision / roadmap / crowdfunding teaser |
| `#enrollment` | Enrollment | Email capture / teacher recruitment |

## Design System

### Palette

```css
--ink:       #0C0E18   /* Page background — deepest */
--deep:      #101422   /* Section backgrounds */
--chamber:   #161C2E   /* Card backgrounds */
--panel:     #1C2438   /* Panel surfaces */
--ember:     #C17D2A   /* Primary accent — warm amber/gold */
--ember-lt:  #DFA455   /* Hover states */
--ember-dim: #7A4E18   /* Subtle ember accents */
--terra:     #7C3B1E   /* Secondary accent — terracotta */
--parch:     #E8DFC8   /* Primary text — warm parchment */
--parch-dim: #B8A882   /* Secondary text */
--parch-dk:  #7A6E56   /* Muted text / labels */
--star:      #C8D8F0   /* Star field / accent highlights */
--star-dim:  #6888B0   /* Subdued star accent */
```

### Typography

| Role | Font | Notes |
|---|---|---|
| Display / Headings | Cinzel | Geometric, ancient-feeling — section titles |
| Hero / Ceremonial | Cinzel Decorative | Reserved for the hero title only |
| Body / Serif | Cormorant Garamond | Warm, manuscript-adjacent — all body copy |
| UI / Labels | Jost | Light weight (200–400) — nav, tags, buttons |

### Visual Identity Signatures
- **Celestial ring** — animated Kemetic geometric SVG in the hero, slow rotation, very low opacity
- **Timbuktu arch** — earthen arch silhouette behind hero text, opacity ~6%
- **Star field** — 120 JS-generated star dots with randomized twinkle animation
- **Grain overlay** — full-page SVG noise texture, z-index 999, pointer-events none
- **Reveal animation** — `.reveal` class, IntersectionObserver-driven, translateY(18px) → 0

---

## The Progression System

This is one of KRA's most important identity markers. Never remove or downplay it.

### Tool Hierarchy (Physical Advancement)

| Year | Rank | Tool |
|---|---|---|
| Year I | Initiate | Plastic compass + ruler |
| Year II | Apprentice | Upgraded compass + ruler |
| Year III | Journeyman | Bronze/gold compass + ruler |
| Beyond | Advanced ranks | Engraved, ceremonial, mentor's kit |

The compass and ruler carry Kemetic resonance — sacred geometry, Ma'at as measurement — without needing to say it explicitly. The tools speak the philosophy.

### MTG Sleeve Progression (Strategic Advancement)

| Level | Sleeve Color | Meaning |
|---|---|---|
| I | White | Beginner — MTG basics, assigned learning decks |
| II | Blue | Novice — basic deck-building skills |
| III | Green | Intermediate — game mechanics deepen |
| IV | Red | Advanced — strategic gameplay, original decks |
| V | Black | Expert — mastery, complex strategies |
| VI | Gold | Master — leadership and mentoring within KRA |

Like a karate belt system. The sleeve a student carries tells the community exactly where they are. Students begin on assigned decks, earn the right to build their own as mastery grows.

---

## The Six Disciplines

KRA develops the whole person across six interconnected areas:

| Discipline | Program |
|---|---|
| Intellectual | STEAM of SELF curriculum, Grimora digital platform |
| Strategic | MTG gameplay, sleeve advancement (White → Gold) |
| Physical | Outdoor survival skills; self-defense (future) |
| Creative | Art of Expression, personal deck-building |
| Ancestral | Lineage Research Program, Hall of Ma'at |
| Communal | Badge hierarchy, sleeve uniform, peer progression, Gold-level mentorship |

---

## STEAM of SELF Curriculum

Five units, each two weeks, semester-long. Every unit has a "Lineage Lens" reflection prompt woven in.

| Letter | Unit | Core Focus |
|---|---|---|
| S | Science of Self-Understanding | Biological + psychological foundations of personality and emotion |
| T | Technology of Personal Growth | Tools, techniques, and methods for self-improvement |
| E | Engineering Your Future | Design thinking, SMART goals, personal prototyping |
| A | Art of Expression | Self-expression, creativity, artistic identity |
| M | Mathematics of Personal Success | Growth mindset, habit math, measuring progress |

**Key texts:** *The Four Agreements* (personal conduct framework) and *Real Alchemy* (metaphor for personal transformation).

---

## The Anime & Animation Canon

### Tier I — Foundational Series

**Dr. Stone** — assigned throughout all KRA courses. Not supplementary — active curriculum. The entire series mirrors KRA's ethos: rebuilding science from scratch, real scientific method in real-time, ancient and modern knowledge in harmony.

### Tier II — Case Study Series

| Series | Role | Primary KRA Connection |
|---|---|---|
| Naruto | Case Study | Engineering Your Future, MTG Strategy — grit, iteration |
| One Piece | Case Study | Technology of Growth, Mathematics — distributed intelligence |
| Dragon Ball Z | Selective Case Study | Science of Self, Art — key arcs only, age-appropriate care |
| Avatar: The Last Airbender | Deep Case Study | Hall of Ma'at, Lineage Research, all STEAM units |

Avatar receives extended treatment because of its alignment with Ma'at (four-element balance), real-world cultural traditions per nation, and Sokka as the non-bender engineer archetype.

---

## The Lineage Research Program

### Critical Design Principle

**Never list examples.** No named cultural traditions, no curated examples, no "Vedic mathematics / Yoruba Ori / Celtic knotwork" style lists. Those choices — however well-intentioned — apply a Eurocentric curatorial lens to the very program designed to escape it.

The Lineage Lens prompts are **open questions only**. The student's curiosity is the compass.

### The Five Lineage Lens Prompts

| STEAM Unit | Primary Question | Follow-up |
|---|---|---|
| S | How did the people who came before you understand themselves — emotion, purpose, the inner life? | What do you wish you knew that you don't yet? |
| T | How did the people in your lineage solve problems — in building, healing, growing, creating, surviving? | What questions does this raise about what "technology" really means? |
| E | Who in your lineage built something, overcame something, or created under difficult circumstances? | What of their strength do you feel you carry? |
| A | How did the people of your lineage express themselves — in sound, movement, image, word, ceremony? | Is any of that tradition alive in you, even if you have never named it? |
| M | How did your ancestral people measure, count, track, or navigate the world — formally named or not? | What might their way of measuring the world say about what they valued most? |

### On Students With Obscured Lineage

Students whose lineage has been obscured by slavery, colonization, forced migration, or cultural erasure are **not at a disadvantage** — they are at the center of one of the program's most important inquiries. The absence of information is itself a place to begin. Any thread that calls to them is the right thread.

---

## Roadmap

| Phase | Status | Description |
|---|---|---|
| Phase I — The Gathering | **Now** | Building founding community, email collection, teacher recruitment |
| Phase II — Crowdfunding | Next | Community-powered fundraising campaign — tools, sleeves, curriculum, Grimora |
| Phase III — First Halls | Future | First workshop cohort, STEAM of SELF pilot, Grimora launch, Year I tools distributed |
| Phase IV — Expansion | Horizon | Deeper levels, certified educators, outdoor/self-defense programming, national alumni community |

---

## Key Decisions Log

> Record significant decisions here so future sessions don't relitigate them.

| Decision | Rationale |
|---|---|
| "Order" removed from all copy | Implies hierarchy, exclusivity, potential cult-adjacent reading — wrong signal for an inclusive community |
| No cultural examples in Lineage Program | Curating examples applies the same Eurocentric lens the program is designed to escape |
| Hogwarts + Timbuktu — implicit in design, explicit for educators | Students feel it; supporters and teachers understand the reference explicitly |
| Ma'at introduced as "an ancient philosophy popularly known as Ma'at" | Accessible entry point — invites rather than assumes prior knowledge |
| Dr. Stone as foundational series (not supplementary) | Most aligned anime to KRA's philosophy — assigned curriculum, not background viewing |
| Single HTML file for MVP website | Easiest to deploy, share, and host before infrastructure is in place |
| Campus section naming (Gates, Courtyard, Halls...) | Site should feel like moving through a place, not scrolling a webpage |
| Warm amber/terracotta palette | Timbuktu earthen warmth alongside Kemetic midnight depth — away from cool/imperial aesthetic |

---

## What Doesn't Exist Yet (Future Build Targets)

- Individual lesson pages within Grimora (routing + content display)
- A formal teacher application backend (currently form is UI-only)
- Email capture integration (Mailchimp / ConvertKit / Airtable)
- Badge and sleeve visual assets (photography / illustration)
- Crowdfunding campaign page
- Self-defense program details (acknowledged as future — no structure yet)
- Mobile nav menu (hamburger) — currently nav links hidden on mobile
- `memory.md` — session-by-session learnings log (create alongside this file)

---

## Contact & Repository

**Founder:** Olu "AnuAkin" Akinyemi  
**Email:** olutakinyemi@gmail.com  
**GitHub:** github.com/Olu-AnuAkin-Akinyemi/Grimora  

---

*This document should be updated at the end of every working session. If a decision is made, a section is added, or a file changes — log it here.*