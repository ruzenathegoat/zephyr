# ZEPHYR — Offshore Wind Infrastructure & Energy Systems

<div align="center">

[![Live Deployment](https://img.shields.io/badge/Vercel-Live%20Demo-000000?style=flat&logo=vercel&logoColor=white)](https://zephyr-three-xi.vercel.app/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-v13-EA4C89?style=flat&logo=framer&logoColor=white)](https://motion.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**Utility-scale direct-drive offshore wind platforms engineered for predictable baseload power in the world’s harshest marine environments.**

[🌐 **Explore Live Demo**](https://zephyr-three-xi.vercel.app/) · [Platform Architecture](#key-features--interactive-systems) · [Documentation Portal](https://zephyr-three-xi.vercel.app/#docs) · [Design System](#design-philosophy--aesthetic-foundation)

</div>

---

## Overview

**Zephyr** is a modern, high-performance company profile and technical engineering portal for an industrial marine energy enterprise. Built with a **Swiss Industrial Editorial** design philosophy, it blends brutalist structural clarity with cutting-edge interactive SVG vector simulations, physical kinematics, and an integrated engineering documentation system.

- **Live Production URL**: [https://zephyr-three-xi.vercel.app/](https://zephyr-three-xi.vercel.app/)
- **Technical Documentation Dossier**: [https://zephyr-three-xi.vercel.app/#docs](https://zephyr-three-xi.vercel.app/#docs)

---

## Key Features & Interactive Systems

### 1. Interactive Subsystem Explorer & Kinematic Turbine Simulator
- **Aerodynamic Rotor Assembly (01)**: Fully interactive 3-blade SVG rotor powered by `requestAnimationFrame` with real-time continuous 360° rotation and animated airflow streamlines based on a dynamic wind velocity input ($0 - 25\text{ m/s}$).
- **Permanent Magnet Direct-Drive Cross-Section (02)**: Cutaway schematic showing the 96-phase stator coil array and continuous 8-pole permanent magnet rotor rotation with electromagnetic flux field pulses.
- **Deepwater Monopile Structural Profile (03)**: Marine engineering depth profile illustrating $\varnothing 10.5\text{m}$ steel monopile embedment through geological strata (clay/till to chalk/rock) with scour protection and animated wave kinematics.
- **Optical SCADA Sensor Array (04)**: Dynamic fiber-optic network topology with 10 sensor nodes, live data packet routing, and real-time pulse rings.

### 2. "Trusted by Industry Leaders" Interactive Marquee
- High-performance, hardware-accelerated infinite horizontal marquee driven by the **Web Animations API**.
- Clean inline SVG partner logomarks (**Shell, Siemens Gamesa, Ørsted, DNV, Equinor, Vattenfall, RWE, TenneT**).
- Gentle hover deceleration (slows down to 12% speed) and reveals role descriptors.

### 3. Regional Grid Dispatch Network & HVDC Telemetry
- Interactive transmission dispatch schematic showing offshore array collector substations feeding subsea $\pm 525\text{ kV}$ HVDC lines to onshore grid interconnects.
- Real-time switching across **North Sea Cluster (2,400 MW)**, **Baltic Interconnect (1,100 MW)**, and **US Atlantic Basin (750 MW)** with 24-hour P50 baseload power curves.

### 4. Active Fleet Portfolio & Modal Spec Inspector
- Flagship projects (*Vanguard Alpha Array, Øresund Stream, Atlantic Ridge, Dogger Bank Extension*).
- Compact, responsive 2-column modal detail inspector with comprehensive engineering specifications (annual yield, foundation type, turbine model, environmental compliance) and Lenis scroll prevention.

### 5. 4-Stage Marine Deployment Lifecycle Simulator
- Interactive engineering sequence from **01 Site Assessment**, **02 System Design**, **03 Marine Deployment**, to **04 Asset Operations** with synchronized technical SVGs.

### 6. Dedicated Technical Documentation & Compliance Portal
- Complete standalone documentation reader accessible via `#docs` or the **`Docs ↗`** header/footer links.
- Instant search filter, structured specifications matrix, and 5 comprehensive engineering dossiers:
  1. *Platform Engineering & Z-Class Architecture*
  2. *Telemetry & Grid Dispatch Specifications*
  3. *Governance, DNV Audits & ISO 14064 GHG Accounting*
  4. *Marine Operations & Offshore O&M Manual*
  5. *Corporate Register & Entity Governance*

---

## Design Philosophy & Aesthetic Foundation

- **Industrial Swiss Editorial Style**: Architectural grid discipline, high-contrast monochrome foundations, bold structural typography, and zero decorative clutter.
- **Color Palette**:
  - `Primary Accent`: Industrial Electric Cobalt (`#003BFF`)
  - `Background`: Pristine Canvas (`#FFFFFF`) & Subsea Soft Grey (`#F5F5F5`)
  - `Dark Elements`: Deep Marine Onyx (`#000000` / `#0A0A0A`)
- **Typography Pairing**:
  - *Display*: `Encode Sans` & `Montserrat` (Grand uppercase geometry)
  - *Telemetry / Mono*: `Space Mono` (Engineering data precision)
  - *Body*: `Inter` (Legibility & strict line measure)
- **Spatial Rhythm**: Generous whitespace hierarchy (`py-20 tablet:py-28 desktop:py-32`) adhering to strict UX design system principles.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Bundler & Dev Server** | [Vite 8](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Motion & Physics** | [Motion](https://motion.dev/) + Native `requestAnimationFrame` + Web Animations API |
| **Components & Modals** | [@radix-ui/react-dialog](https://www.radix-ui.com/primitives/docs/components/dialog) |
| **Smooth Scrolling** | [Lenis Smooth Scroll](https://github.com/darkroomengineering/lenis) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## Getting Started

### Prerequisites
- Node.js `18.x` or higher
- npm / yarn / pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ruzenathegoat/zephyr.git
   cd zephyr
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 📂 Project Structure

```text
zephyr/
├── public/                     # Static assets, official cubic favicon & icons
├── src/
│   ├── assets/                 # High-resolution photographic plates & media
│   ├── components/
│   │   ├── docs/
│   │   │   └── DocumentationPage.tsx   # Dedicated technical documentation portal
│   │   ├── layout/
│   │   │   ├── SiteHeader.tsx          # Top navigation with docs & intake triggers
│   │   │   └── SiteFooter.tsx          # Minimalist brutalist footer
│   │   ├── providers/
│   │   │   ├── SmoothScrollProvider.tsx
│   │   │   └── smoothScrollContext.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx         # 6/6 editorial hero with live telemetry
│   │   │   ├── TrustedBySection.tsx    # Infinite SVG partner logomark marquee
│   │   │   ├── EnergySystemsSection.tsx # Interactive 4-subsystem SVG kinematic simulator
│   │   │   ├── EvidenceGrid.tsx        # Subsea HVDC transmission grid & power curve
│   │   │   ├── ProjectGrid.tsx         # Active fleet portfolio cards
│   │   │   ├── ProcessSection.tsx      # 4-stage maritime deployment sequence
│   │   │   ├── CompanyProfileSection.tsx # Milestone timeline & corporate governance
│   │   │   └── FinalCta.tsx            # B2B partnership intake desk
│   │   └── ui/
│   │       ├── Container.tsx           # Responsive layout container
│   │       └── ProjectDetailsModal.tsx # Compact 2-column Radix UI modal dialog
│   ├── App.tsx                         # Main view router (Landing vs. Docs portal)
│   ├── index.css                       # Design tokens, typography & Tailwind v4
│   └── main.tsx                        # Application entry point
├── client-side-ui-ux-design-system-values.md # Core UX design values & spacing rules
├── zephyr-design-2.0.md                # Comprehensive design guidelines
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📄 License

Proprietary & Confidential © Zephyr Energy Systems AS. All rights reserved.
