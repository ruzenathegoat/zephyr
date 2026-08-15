---
name: Zephyr
document: design-system
version: 2.3.0
status: production-redesign
product-type: "Renewable energy / wind turbine company profile"
style-direction: "Industrial Swiss Editorial + Brutalist Craft"
visual-tone: "Technical, infrastructural, authentic, tactile, editorial, engineered"
mode: light
primary-background: "#FFFFFF"
accent: "#003BFF"
ink: "#000000"
tech-stack:
  - React 19
  - TypeScript
  - Tailwind CSS v4
  - Motion (motion/react v13)
  - Radix UI Primitives (@radix-ui/react-dialog, @radix-ui/react-accordion)
  - Lucide React
performance-target: "Snappy low-latency interaction (≤450ms motion duration) with 60fps budget"
responsive-targets:
  - desktop
  - tablet
  - mobile
---

# Zephyr — Design System & UI/UX Redesign Specification

## 1. Project Intent

Zephyr is a renewable-energy company profile focused on wind-turbine systems, engineering capability, project delivery, operational performance, and long-term energy infrastructure.

The redesign moves Zephyr decisively away from generic green-tech clichés, template-driven corporate aesthetics, and modern **AI slop monoculture** (fake sequential numbering, forced blue dots, pseudo-blueprint lines, and unbounded shouting clamp scales).

The definitive Zephyr visual identity is:

> **Industrial Swiss Editorial + Brutalist Craft**

This design system establishes a high-craft engineering presence: rigid Swiss grid systems, **authentic full-color documentary infrastructure photography**, high-contrast black/white panels, crisp tactile interactive feedback, structured technical metadata, and a restrained signal color in Zephyr Blue (`#003BFF`).

The website feels like an engineering and infrastructure company first, with renewable energy expressed through authentic photography, verifiable telemetry, and deep progressive disclosure rather than decorative sustainability gimmicks.

Core qualities:

- engineered & authentic
- tactile & responsive
- precise & verifiable
- infrastructural
- confident
- editorial & disciplined
- restrained
- high-contrast (WCAG AA compliant)
- system-driven
- de-slopped (free from AI scaffolding)
- performant (motion duration ≤ 450ms)

---

# 2. Design Direction

## 2.1 Primary Style

The Zephyr redesign combines four major visual systems:

### Industrial
Express engineering, infrastructure, energy production, manufacturing, turbine scale, structural systems, and real-world operations.

### Swiss
Use disciplined grids, typographic hierarchy, alignment, whitespace, modular organization, and strict visual order.

### Editorial
Use large typography, asymmetric compositions, image-led storytelling, generous breathing room, unexpected text placement, and magazine-like pacing.

### Brutalist
Use sharp geometry, visible structural boundaries, unapologetic contrast, oversized typography, strong blocks, hard edges, and minimal ornamental polish.

The resulting formula is:

```text
SWISS GRID
+
EDITORIAL TYPOGRAPHY
+
INDUSTRIAL PHOTOGRAPHY
+
BRUTALIST GEOMETRY
+
TECHNICAL DATA
+
ENGINEERING ANNOTATIONS
+
ELECTRIC BLUE SIGNAL COLOR
+
RESTRAINED MECHANICAL MOTION
```

---

# 3. Explicit Anti-Goals

Do not design Zephyr as a generic clean-energy startup, nor degrade it with modern **AI slop / template tropes**.

### 3.1 AI Slop & Template Monoculture Bans (Strictly Forbidden)
- **Sequential Numerical Section Scaffolding**: Do NOT prefix non-chronological section headers with arbitrary sequential numbers like `00 / ...`, `01 / ...`, up to `08 / ...`. Use semantic domain badges (e.g., `Active Fleet Portfolio`, `Platform Architecture`, `Governance & Methodology`). Only chronological processes (e.g. 4-step deployment lifecycle) may use step numbering.
- **Forced Blue Punctuation Dots**: Do NOT append `<span className="text-primary">.</span>` or blue periods at the end of every main display headline.
- **Pseudo-Blueprint Coordinate Noise**: Do NOT litter images and headings with arbitrary floating CAD coordinate lines, fake hairline angle brackets, or empty blueprint tags that lack genuine technical meaning.
- **Typographic Shouting / Unbounded Clamps**: Do NOT use excessive viewport clamp sizes (such as `9.5rem` or `-0.055em` letter-spacing) that cause letters to collide or text lines to wrap into illegible fragments on laptop/tablet screens.
- **Single-Column Overflowing Modals**: Do NOT build giant single-column popup modals that require users to zoom out the browser to view the content.
- **Fragile Clip-Path States**: Do NOT use `clipPath: inset(...)` initial animation states near the bottom of pages that fail to trigger when reaching the footer.

### 3.2 Visual Cliché Bans
- green gradients
- leaf icons as a primary sustainability metaphor
- glassmorphism & excessive transparency
- glow effects & neon cyberpunk styling
- oversized rounded cards (`rounded-2xl` / `rounded-3xl`)
- generic SaaS card grids (3-card feature templates repeated everywhere)
- decorative dashboards with meaningless charts
- random 3D spheres & particle backgrounds
- playful spring/bounce motion
- scroll hijacking

---

# 4. Color System

Zephyr uses a deliberately restricted, high-contrast palette verified for **WCAG AA Compliance ($\ge 4.5:1$)**.

## 4.1 Core Palette

| Token | Value | Purpose | Contrast Status |
|---|---|---|---|
| `--color-canvas` | `#FFFFFF` | Main canvas background | Base |
| `--color-ink` | `#000000` | Main text, dark sections, structural boundaries | 21:1 (AAA) |
| `--color-signal` | `#003BFF` | CTA, status, active states, data highlights | 4.6:1 (AA) |
| `--color-surface-soft` | `#F5F5F3` | Secondary neutral surface | Neutral |
| `--color-border` | `rgba(0,0,0,0.16)` | Grid and structural dividers | Structural |
| `--color-border-strong` | `rgba(0,0,0,0.38)` | Emphasized structural boundaries | Structural |
| `--color-text-secondary` | `rgba(0,0,0,0.72)` | Body copy & secondary explanations | 5.8:1 (AA) |
| `--color-text-tertiary` | `rgba(0,0,0,0.58)` | Metadata & technical labels | 4.5:1 (AA) |
| `--color-dark-muted` | `rgba(255,255,255,0.72)` | Secondary copy on dark backgrounds | 6.2:1 (AA) |

Suggested visual balance:

```text
White   70–80%
Black   15–20%
Blue     5–10%
```

## 4.2 Accent Usage

`#003BFF` is a signal color, not a default section background.

Use it for:

- primary CTA
- active navigation state
- section index
- data highlights
- metric emphasis
- turbine technical annotation
- line diagrams
- current slide marker
- selected accordion state
- graph line
- map coordinate indicator
- focus ring
- hover state
- status label
- project category marker

Avoid:

- large blue gradients
- glowing blue shadows
- filling every button and card with blue
- making every section blue

---

# 5. Typography System

Zephyr uses exactly three typography roles.

```text
ENCODE SANS
→ brand voice / structural display

MONTSERRAT
→ readable information / interface

SPACE MONO
→ engineering language / instrumentation
```

---

## 5.1 Encode Sans — Display & Structural Headings

Use for:

- hero display
- H1
- H2
- H3
- major section statements
- project titles
- large editorial statements
- oversized footer statements

Desired characteristics:

- uppercase preferred for major display
- medium to semi-bold weight
- tight tracking
- compressed line-height
- strong geometric block composition

### Hero Display

```css
font-family: "Encode Sans", sans-serif;
font-size: clamp(3.25rem, 6.5vw, 6.75rem);
font-weight: 600;
line-height: 0.92;
letter-spacing: -0.035em;
text-transform: uppercase;
```

Recommended ranges:

| Viewport | Size |
|---|---:|
| Desktop | 88–108px |
| Tablet | 64–80px |
| Mobile | 48–56px |

*Note: Headings must remain strictly bounded to prevent text shouting and letter collisions.*

### H1 / Primary Section Title

```css
font-family: "Encode Sans", sans-serif;
font-size: clamp(2.5rem, 5.5vw, 4.85rem);
font-weight: 500;
line-height: 0.94;
letter-spacing: -0.035em;
text-transform: uppercase;
```

### H2

```css
font-family: "Encode Sans", sans-serif;
font-size: clamp(2rem, 3.8vw, 3.75rem);
font-weight: 500;
line-height: 0.96;
letter-spacing: -0.03em;
text-transform: uppercase;
```

### H3

```css
font-family: "Encode Sans", sans-serif;
font-size: clamp(1.5rem, 2.4vw, 2.25rem);
font-weight: 500;
line-height: 1;
letter-spacing: -0.025em;
text-transform: uppercase;
```

---

## 5.2 Montserrat — Body, Navigation & UI

Use for:

- paragraphs
- explanatory copy
- navigation
- buttons
- form labels
- supporting text
- long-form reading
- accessible UI copy

### Body Large

```css
font-family: "Montserrat", sans-serif;
font-size: clamp(1rem, 1.2vw, 1.125rem);
font-weight: 400;
line-height: 1.6;
letter-spacing: -0.01em;
```

### Body

```css
font-family: "Montserrat", sans-serif;
font-size: 0.9375rem; /* 15px */
font-weight: 400;
line-height: 1.65;
color: rgba(0, 0, 0, 0.72);
```

### Navigation

```css
font-family: "Montserrat", sans-serif;
font-size: 0.8125rem; /* 13px - comfortable touch/click target */
font-weight: 600;
line-height: 1;
letter-spacing: 0.025em;
text-transform: uppercase;
```

### Button Label

```css
font-family: "Montserrat", sans-serif;
font-size: 0.75rem; /* 12px */
font-weight: 600;
line-height: 1;
letter-spacing: 0.025em;
text-transform: uppercase;
```

---

## 5.3 Space Mono — Technical Layer & Semantic Badges

Space Mono gives Zephyr its instrumentation and engineering language.

Use for:

- semantic domain badges (e.g. `Active Fleet Portfolio`)
- coordinates and timestamps
- metrics and engineering telemetry
- project status and foundation depths
- turbine specifications
- labels, annotations, captions

### Semantic Domain Eyebrow Badge

```tsx
<div className="flex items-center gap-2">
  <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
  <p className="font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-black">
    Active Fleet Portfolio
  </p>
</div>
```

---

# 11. Photography Direction

Photography is central to Zephyr.

Preferred subjects:

- offshore wind farms in oceanic environments
- deepwater turbine installations & floating platforms
- rotor blades & direct-drive nacelles
- installation vessels & marine logistics
- offshore substations & subsea cabling

### 11.1 Natural Full-Color Treatment (Rule Mandate)
- **Authentic Natural Color**: All infrastructure and offshore photography MUST be presented in full natural color.
- **NO Grayscale / Over-Contrast Filters**: Do NOT apply CSS `grayscale`, `contrast-125`, or dark desaturation filters that strip the realism of marine atmospheric skies, blue water, and turbine scale.
- **Documentary Fidelity**: Natural exposure, crisp detail, sharp focus, authentic environmental color.

---

# 12. Industrial Image & Composition Language

Zephyr's image system derives from industrial documentary photography and structural composition.

The formula is:

```text
AUTHENTIC FULL-COLOR INFRASTRUCTURE PHOTOGRAPHY
+
RIGID SWISS GRID CROPPING
+
HIGH-CONTRAST BLACK / WHITE PANELS
+
PROGRESSIVE DISCLOSURE VIA MODAL DRAWERS
+
CRISP SIGNAL BLUE ACCENTS
```

## 12.1 Image Composition

- high-impact turbine or wind-farm photography
- 16:10 or 4:3 aspect ratios bordered with clean 1px structural rules
- split image/text blocks
- authentic documentary captions (e.g. `Verified Fleet Plate`) instead of pseudo-blueprint lines

## 12.2 Image Interaction

- subtle image scale `1 → 1.03` with snappy curve `cubic-bezier(0.23, 1, 0.32, 1)`
- interactive click triggers with clear affordance (`Inspect Specs ↗`)
- progressive disclosure of engineering telemetry via Radix UI dialog modal
- no synthetic grayscale-to-color hover gimmicks

---


# 13. Technical Annotation Language

Annotations should make the interface feel engineered.

Examples:

```text
ROTOR / 236M
NACELLE / ZP-14
AIRFLOW / 12.4 M/S
GRID / 50HZ
STATUS / OPERATIONAL
FIG. 02
LAT / 52°14'31"N
LONG / 03°48'17"E
```

Visual tools:

- hairline connectors
- crosshair symbols
- measurement ticks
- thin blue lines
- numeric index labels
- figure IDs
- status markers
- directional arrows

Annotations must never overpower the main content.

---

# 14. Iconography

Icons are secondary.

Use:

- arrows
- plus/minus
- chevrons
- simple industrial line symbols
- minimal status markers
- map / coordinate symbols
- functional shadcn icons only where necessary

Avoid:

- icon inside every card
- colorful illustrations
- filled cartoon icons
- oversized decorative icons

Prefer typography and geometry over iconography.

---

# 15. Navigation

## Desktop

Recommended structure:

```text
[ ZEPHYR ]     TECHNOLOGY   PROJECTS   IMPACT   COMPANY   INSIGHTS     CONTACT →
```

Behavior:

- fixed or sticky only if it remains visually lightweight
- strong structural bottom border
- no glass blur navbar
- compact height
- high contrast
- active section may use `#003BFF`

Alternative industrial composition:

```text
[ Z ]
---------------------------------------------
MENU / TECHNOLOGY / PROJECTS / COMPANY
---------------------------------------------
CONTACT →
```

Use Space Mono for micro-labels and Montserrat for navigation labels.

## Mobile

Use shadcn `Sheet` as interaction primitive.

Customize heavily:

- white or black full-height panel
- no default large rounded container
- large Encode Sans navigation titles
- Space Mono section numbering
- thin structural separators

---

# 16. Buttons

## Primary

```text
EXPLORE TECHNOLOGY →
```

Properties:

- rectangular
- sharp edge
- blue background
- white text
- Montserrat Semibold
- no shadow
- minimal vertical movement on hover
- arrow movement permitted

## Secondary

```text
VIEW PROJECTS →
```

Properties:

- transparent
- black border
- black text
- blue hover/focus signal

## Micro Control

```text
FIG. 03 →
NEXT →
VIEW DATA +
```

Use Space Mono.

Do not use pill buttons.

---

# 17. shadcn/ui Rules

shadcn/ui is a functional primitive layer, not Zephyr's visual identity.

Recommended primitives:

- Accordion
- Dialog
- Sheet
- Tabs
- Tooltip
- Dropdown Menu
- Navigation Menu
- Drawer where appropriate

Customization rules:

```text
radius → 0–4px
shadow → none
border → structural
background → white / black
accent → #003BFF
typography → Zephyr hierarchy
```

Avoid retaining default shadcn appearance when# 18. Motion Philosophy

Motion must feel:

- mechanical & snappy
- controlled & direct
- deliberate & low-latency (durations $\le 450\text{ms}$)
- architectural
- tactile (`:active:scale-[0.97]`)
- restrained

Motion must not feel:

- slow or sluggish ($>600\text{ms}$ scroll reveals)
- playful, bouncy, or elastic
- floaty or decorative
- overproduced

Core easing:

```ts
export const zephyrEase = [0.23, 1, 0.32, 1] as const;
```

Recommended entrance:

```text
opacity: 0 → 1
y: 16–20px → 0
duration: 0.35–0.45s
stagger: 0.05s
```

---

# 19. Motion & Tactile System

Use Motion (`motion/react`) as the primary component motion system.

Recommended patterns:

## Text & Card Reveal

- short Y translation (`y: 16px → 0`)
- fast duration (`0.4s – 0.45s`)
- trigger once with low threshold (`amount: 0.1` – `0.2`) to prevent hidden clipping near footers

## Structural Line Reveal

```text
scaleX: 0 → 1
transform-origin: left
duration: 0.45s
```

## Tactile Active Feedback (`.btn-tactile`)

All buttons, navigation triggers, and interactive cards must implement tactile press feedback:

```css
.btn-tactile {
  transition: transform 120ms cubic-bezier(0.23, 1, 0.32, 1),
              background-color 150ms ease,
              border-color 150ms ease;
}
.btn-tactile:active {
  transform: scale(0.97);
}
```

## Accordion Interaction

Use a single `Plus` icon that smoothly rotates $45^\circ$ into an "X":

```tsx
<Plus className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-45" strokeWidth={2} />
```

---

# 20. Lenis Rules

Lenis is used only for smooth scroll interpolation.

Goals:

- natural momentum
- no visible input lag
- preserve expected browser interaction

Disable when `prefers-reduced-motion: reduce`.

---

# 21. Performance Rules — 60fps Target

The design must be implementable with a sustained smooth interaction target.

Prefer animation of:

```text
transform
opacity
```

Avoid animating:

```text
width, height, top, left, large blur(), box-shadow, backdrop-filter, expensive clip-path chains
```

---

# 22. Accessibility (WCAG 2.2 AA)

- Minimum contrast $\ge 4.5:1$ for body copy (`rgba(0,0,0,0.72)`) and metadata (`rgba(0,0,0,0.58)`).
- Full keyboard navigation (Tab, Space, Enter, Escape on dialogs).
- Visible focus styles: `outline: 2px solid #003BFF; outline-offset: 2px;`.
- Semantic headings and ARIA roles for dialogs (`Dialog.Root`, `Dialog.Portal`, `Dialog.Content`).
- Support `prefers-reduced-motion`.

---

# 23. Streamlined Production Landing Page Architecture

The production company profile is engineered into a punchy, 6-section visual flow that balances high-impact visual proof, mechanical interactive hotspots, and conversion without documentation bloat:

## 25.1 Hero Command Center
- **Badge**: `Offshore Wind Infrastructure`
- **Layout**: Side-by-side 6/6 balanced grid with prominent marine turbine visual above-the-fold, live grid synchronizer ticker, and 4-metric proof strip.

## 25.2 Platform Architecture (Z-Class Direct-Drive)
- **Badge**: `Platform Architecture`
- **Interactive Asset**: 4 interactive hotspots `[01—04]` directly on the deepwater turbine plate (Rotor, Direct-Drive PM Generator, Monopile Base, Optical SCADA Sensors) revealing real-time subsystem specs.

## 25.3 Verified Fleet Metrics & Global Dispatch
- **Badge**: `Verified Fleet Metrics`
- **Interactive Asset**: Regional Grid Dispatch Explorer with tabs for *North Sea Cluster (2,400 MW)*, *Baltic Interconnect (1,100 MW)*, and *US Atlantic Basin (750 MW)*, live power baseload curves, and dynamic visual plate switching.

## 25.4 Active Fleet Portfolio
- **Badge**: `Active Fleet Portfolio`
- **Cards**: Flagship project plates with `"Inspect Specs ↗"` triggers opening the **Compact 2-Column Split Modal Dialog** ($\approx 440\text{px}$ height, fits all laptop screens without zoom-out).

## 25.5 Deployment Lifecycle
- **Badge**: `Deployment Lifecycle`
- **Interactive Asset**: 4-phase maritime sequence stepper (*01 Site Assessment, 02 System Design, 03 Marine Deployment, 04 Asset Operations*) with dynamic heavy-lift logistics plates and deliverable milestones.

## 25.6 Organization & Track Record
- **Badge**: `Organization & Track Record`
- **Interactive Asset**: Milestone timeline explorer (*2018, 2021, 2024, 2026*) with historical fleet growth curves and Oslo corporate governance registry.

## 25.7 Partnership & Intake Desk (Final CTA)
- **Badge**: `Partnership & Project Intake`
- **Layout**: Balanced 2-column intake desk with direct engineering (`partners@zephyr-energy.com`) and compliance contacts.

---

## 25.8 Technical & Regulatory Appendix (Documentary Reference)
*Note: Deep regulatory methodologies (DNV-ST-0145 verification basis, ISO 14064 GHG Scope 1-3 math, EN 15804 circular BOM, and all-in LCOE formulations) are preserved in internal dossiers and made available via the compliance request channels rather than bloating the public landing page.*

---

# 30. Design Tokens

```css
:root {
  --color-canvas: #ffffff;
  --color-ink: #000000;
  --color-primary: #003bff;
  --color-surface-soft: #f5f5f3;

  --color-border: rgba(0, 0, 0, 0.16);
  --color-border-strong: rgba(0, 0, 0, 0.38);

  --color-text-secondary: rgba(0, 0, 0, 0.72);
  --color-text-tertiary: rgba(0, 0, 0, 0.58);
  --color-dark-muted: rgba(255, 255, 255, 0.72);

  --radius-none: 0px;
  --radius-xs: 2px;
  --radius-sm: 4px;

  --ease-zephyr: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-out-snappy: cubic-bezier(0.23, 1, 0.32, 1);

  --duration-fast: 150ms;
  --duration-base: 280ms;
  --duration-reveal: 420ms;
}
```

---

# 41. Final Visual Signature

Zephyr is defined by this synthesis:

```text
WHITE INDUSTRIAL CANVAS
+
BLACK STRUCTURAL TYPOGRAPHY
+
ELECTRIC BLUE ENGINEERING SIGNAL
+
ENCODE SANS BOUNDED DISPLAY
+
MONTSERRAT READABLE INFORMATION (13PX NAV)
+
SPACE MONO INSTRUMENTATION & SEMANTIC BADGES
+
12-COLUMN SWISS EDITORIAL GRID
+
BRUTALIST HARD GEOMETRY (0-2PX RADIUS)
+
AUTHENTIC FULL-COLOR DOCUMENTARY PHOTOGRAPHY
+
COMPACT 2-COLUMN MODAL DRAWERS FOR TECHNICAL METRICS
+
BALANCED 2-COLUMN COLLABORATION INTAKE DESK
+
SNAPPY TACTILE MOTION (≤450MS / :ACTIVE:SCALE-[0.97])
+
# 40. QA Checklist

Before a section is accepted, verify:

### Visual & Craft
- Is the Swiss grid visible in the composition?
- Is whitespace intentional and disciplined?
- Is the blue accent restrained as a signal marker rather than a background flood?
- Is photography presented in authentic full natural color without artificial grayscale or over-contrast?
- Are borders structural (1px solid) rather than decorative drop shadows?
- Are rounded corners hard (0–2px radius)?

### De-slopping
- No sequential numerical section scaffolding (`00/` - `08/`) on non-chronological sections?
- No forced blue punctuation dots at the end of headings?
- No fake CAD blueprint coordinates or floating decorative lines?
- Are heading clamps bounded so letters do not collide on laptop viewports?

### Typography & Contrast
- Encode Sans used only for structural display with bounded clamp scales?
- Montserrat navigation at 13px with comfortable touch targets?
- Space Mono used strictly for technical metadata, telemetry, and semantic badges?
- Contrast tokens meet WCAG AA standards ($\ge 4.5:1$)?

### Motion & Interactions
- Motion duration $\le 450\text{ms}$ with snappy curve `cubic-bezier(0.23, 1, 0.32, 1)`?
- Tactile press feedback (`:active:scale-[0.97]`) applied to interactive triggers?
- Accordion uses single rotate-$45^\circ$ plus icon?
- Project cards open compact 2-column split modal dialogs that fit completely in standard laptop viewports without zooming out?
- No fragile `clipPath` states that fail near the bottom of pages?

### Responsive & Accessibility
- Touch targets $\ge 44\text{px}$?
- Full keyboard navigation supported (Tab, Space, Enter, Escape)?
- `prefers-reduced-motion` supported?

---

# 41. Final Visual Signature

Zephyr is defined by this synthesis:

```text
WHITE INDUSTRIAL CANVAS
+
BLACK STRUCTURAL TYPOGRAPHY
+
ELECTRIC BLUE ENGINEERING SIGNAL
+
ENCODE SANS BOUNDED DISPLAY
+
MONTSERRAT READABLE INFORMATION (13PX NAV)
+
SPACE MONO INSTRUMENTATION & SEMANTIC BADGES
+
12-COLUMN SWISS EDITORIAL GRID
+
BRUTALIST HARD GEOMETRY (0-2PX RADIUS)
+
AUTHENTIC FULL-COLOR DOCUMENTARY PHOTOGRAPHY
+
COMPACT 2-COLUMN MODAL DRAWERS FOR TECHNICAL METRICS
+
BALANCED 2-COLUMN COLLABORATION INTAKE DESK
+
SNAPPY TACTILE MOTION (≤450MS / :ACTIVE:SCALE-[0.97])
+
WCAG AA HIGH-CONTRAST ACCESSIBILITY
```

The impression is:

> **“An engineering organization building large-scale offshore wind infrastructure with measurable performance, technical rigor, and long-term operational credibility.”**
