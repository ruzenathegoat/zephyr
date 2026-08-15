# Client-Side UI/UX Design System Values

Dokumen ini merangkum nilai-nilai utama yang memberikan kualitas estetika, fungsional, dan pengalaman pengguna pada desain sistem client-side untuk website. Whitespace dan negative space hanya salah satu bagian; kualitas UI/UX yang matang muncul dari hubungan antara struktur visual, hierarchy, interaction, motion, accessibility, dan consistency.

---

## 1. Visual Hierarchy

Visual hierarchy menentukan urutan perhatian pengguna terhadap elemen di dalam interface.

Hierarchy dapat dibentuk melalui:

- Font size
- Font weight
- Contrast
- Position
- Spacing
- Color
- Scale
- Visual weight

Contoh hierarchy typography:

```text
Display       72–96px
H1            48–64px
H2            36–48px
H3            24–32px
Body          16–18px
Caption       13–14px
Metadata      11–13px
```

Prinsip utama:

> Tidak semua elemen harus memiliki tingkat kepentingan visual yang sama.

---

## 2. Spacing Rhythm

Whitespace adalah area kosong, sedangkan spacing rhythm adalah sistem jarak yang konsisten antar elemen.

Contoh spacing scale:

```text
space-1   4px
space-2   8px
space-3   12px
space-4   16px
space-6   24px
space-8   32px
space-12  48px
space-16  64px
space-24  96px
space-32  128px
```

Contoh hubungan spacing:

```text
label → heading       12px
heading → paragraph   24px
paragraph → CTA       32px

card item → item      16px
section → section     128px
```

Spacing sebaiknya berdasarkan hubungan semantik, bukan angka acak.

---

## 3. Information Density

Information density menentukan seberapa banyak informasi yang berada dalam satu area visual.

Tiga kondisi umum:

- Too dense
- Balanced
- Over-spaced

Whitespace sebaiknya memiliki fungsi seperti:

- Separation
- Emphasis
- Grouping
- Pacing
- Interaction
- Visual tension

Jangan mengisi whitespace hanya karena terlihat kosong, tetapi jangan pula menciptakan ruang kosong tanpa tujuan.

---

## 4. Grid & Alignment

Grid merupakan infrastruktur visual yang menjaga hubungan geometris antar elemen.

Contoh desktop grid:

```text
| 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 |
```

Contoh pembagian:

```text
Heading       cols 1–5
Description   cols 7–10
Metadata      cols 11–12
```

Alignment harus memiliki anchor yang konsisten meskipun komposisi bersifat asimetris.

---

## 5. Proportion & Scale

Perbedaan ukuran membentuk hierarchy, emphasis, dan visual tension.

Kontras seperti:

```text
large ↔ small
dominant ↔ supporting
massive heading ↔ compact metadata
```

lebih efektif daripada memberikan ukuran hampir sama pada seluruh elemen.

Scale harus memiliki fungsi, bukan sekadar dekorasi.

---

## 6. Visual Weight

Visual weight menentukan seberapa berat suatu objek terasa dalam komposisi.

Visual weight dipengaruhi oleh:

- Size
- Font weight
- Color
- Contrast
- Background
- Border
- Density
- Position
- Motion

Ukuran bukan satu-satunya faktor. Elemen kecil dengan contrast tinggi dapat lebih dominan daripada elemen besar dengan contrast rendah.

---

## 7. Contrast

Contrast tidak terbatas pada warna.

Jenis contrast antara lain:

```text
large     ↔ small
bold      ↔ regular
dense     ↔ empty
static    ↔ moving
image     ↔ typography
filled    ↔ outlined
vertical  ↔ horizontal
serif     ↔ sans
```

Contrast membantu menciptakan hierarchy, focus, dan visual rhythm.

---

## 8. Typography System

Typography harus diperlakukan sebagai bagian dari layout system.

Role typography dapat terdiri dari:

```text
Display
Heading
Subheading
Body
Label
Caption
Technical / Mono
```

Setiap role sebaiknya memiliki aturan:

```text
font-family
font-size
font-weight
line-height
letter-spacing
max-width
case
```

Contoh:

```text
Display
96px / 0.92
-0.04em

Body
17px / 1.6
0

Technical
12px / 1.2
0.08em
uppercase
```

---

## 9. Content Measure

Content measure mengatur panjang baris agar teks tetap mudah dibaca.

Contoh:

```css
max-width: 60ch;
```

Body copy sebaiknya tidak membentang terlalu lebar di viewport besar.

Measure yang tepat meningkatkan:

- Readability
- Scanning
- Visual composition
- Information hierarchy

---

## 10. Grouping & Proximity

Elemen yang memiliki hubungan semantik harus memiliki hubungan visual.

Contoh:

```text
[01]
Efficiency
97.4%

[02]
Capacity
38 GW
```

Jarak antar elemen harus membantu pengguna memahami kelompok informasi.

Terlalu banyak spacing dapat memutus hubungan antara label, data, dan konteksnya.

---

## 11. Repetition & Visual Rhythm

Repetition membentuk konsistensi, sedangkan variation menjaga interface tidak monoton.

Contoh rhythm:

```text
TEXT → IMAGE
IMAGE → TEXT
TEXT → DATA
FULL IMAGE
TEXT → IMAGE
```

Visual rhythm dapat dibangun menggunakan:

- Layout
- Image scale
- Section height
- Typography
- Background
- Density
- Motion
- Repetition

---

## 12. Asymmetry

Asymmetry memberikan visual tension dan karakter.

Namun:

> Asymmetry bukan random positioning.

Komposisi asimetris yang baik tetap memiliki:

- Grid
- Alignment anchors
- Balance
- Visual hierarchy
- Structural relationship

---

## 13. Affordance

Affordance menunjukkan bagaimana sebuah elemen dapat digunakan.

Contoh:

- Button terlihat clickable
- Input terlihat editable
- Link terlihat actionable
- Card clickable berbeda dengan card informatif
- Navigation mudah dikenali

Affordance memberikan nilai estetika sekaligus fungsional.

---

## 14. Interaction States

Komponen tidak hanya memiliki kondisi default.

Design system sebaiknya mendefinisikan:

```text
default
hover
focus
active
disabled
loading
success
error
```

State tersebut perlu diterapkan secara konsisten pada:

- Button
- Input
- Link
- Card
- Navigation
- Dropdown
- Filter
- Table
- Accordion

---

## 15. Motion Hierarchy

Motion harus memiliki tingkat kepentingan.

Contoh hierarchy:

```text
Level 0
Static

Level 1
Micro interaction
100–200ms

Level 2
Component transition
200–400ms

Level 3
Section reveal
400–800ms

Level 4
Narrative / scroll choreography
```

Motion idealnya memiliki fungsi seperti:

- Orient
- Reveal
- Confirm
- Transition
- Direct attention
- Show relationship

Tidak semua elemen membutuhkan animasi.

---

## 16. Responsive Composition

Responsive design bukan sekadar mengubah semua layout desktop menjadi stack vertikal.

Design system sebaiknya menentukan:

```text
desktop composition
tablet composition
mobile composition
```

Responsive behavior dapat mencakup:

- Reflow
- Reorder
- Resize
- Hide/show
- Density adjustment
- Typography scaling
- Interaction adjustment

Urutan konten sebaiknya mengikuti hierarchy informasi.

---

## 17. Consistency vs Controlled Variation

Design system membutuhkan consistency dalam:

- Spacing
- Typography
- Buttons
- Radius
- Border
- Color
- Motion
- States

Namun, setiap section tidak harus memiliki layout yang sama.

Prinsip utama:

> Consistent rules, variable compositions.

Consistency menjaga usability. Controlled variation menjaga identitas visual.

---

## 18. Accessibility

Accessibility merupakan bagian dari kualitas UX, bukan fitur tambahan.

Design system minimal perlu mempertimbangkan:

- Contrast
- Focus states
- Keyboard navigation
- Semantic hierarchy
- Touch target
- Reduced motion
- Responsive typography
- Readability

UI yang estetis tetapi tidak accessible tetap memiliki kualitas UX yang rendah.

---

# Design System Foundation

Struktur foundation yang direkomendasikan:

```text
01. GRID
    container
    columns
    gutters
    margins

02. SPACING
    spacing scale
    section spacing
    component spacing
    content proximity

03. TYPOGRAPHY
    font roles
    scale
    line-height
    tracking
    measure

04. COLOR
    surfaces
    text hierarchy
    accent
    semantic states

05. SCALE & PROPORTION
    display scale
    image scale
    component scale

06. DENSITY
    compact
    default
    editorial

07. VISUAL HIERARCHY
    primary
    secondary
    tertiary
    metadata

08. COMPOSITION
    alignment
    asymmetry
    balance
    visual weight

09. COMPONENT BEHAVIOR
    hover
    focus
    active
    disabled

10. MOTION
    duration
    easing
    hierarchy
    choreography

11. RESPONSIVE BEHAVIOR
    reflow
    reorder
    resize
    hide/show

12. ACCESSIBILITY
    contrast
    focus
    keyboard
    reduced motion
```

---

# Core Aesthetic Values

Nilai estetika utama dapat dirumuskan sebagai:

```text
Hierarchy
× Grid
× Spacing
× Scale
× Density
× Typography
× Contrast
× Rhythm
× Motion
× Interaction
```

---

# Core Functional Values

Nilai fungsional utama dapat dirumuskan sebagai:

```text
Clarity
× Affordance
× Feedback
× Predictability
× Accessibility
× Responsiveness
```

---

# Principle

Desain sistem yang matang tidak membutuhkan dekorasi berlebihan.

Kualitas visual dan UX sebaiknya berasal dari hubungan yang konsisten antara:

- Hierarchy
- Grid
- Spacing
- Typography
- Density
- Composition
- Interaction
- Motion
- Accessibility

Setiap elemen harus memiliki alasan keberadaan yang jelas, baik secara visual maupun fungsional.
