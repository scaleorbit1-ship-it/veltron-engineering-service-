# Veltron Engineering Service Limited Design System & Brand Guidelines

All UI components and additions for Veltron Engineering Service Limited must strictly adhere to these visual and spatial guidelines:

## 1. Brand Identity & Typography
- **Company Name**: Veltron Engineering Service Limited
- **Motto**: Quality That Counts
- **Business Model**: 100% Mobile On-Site Engineering Service. No physical customer drop-off shop. Certified field engineers dispatch directly to client plant sites, docklands, and industrial facilities upon call.
- **Primary Typeface**: `Archivo` (400 Regular, 500 Medium, 600 SemiBold, 700 Bold).
- **Tone**: Corporate, technical, dependable, high-precision industrial engineering.
- **Letter Spacing**:
  - Headings: tight tracking (`-0.01em` to `-0.02em`), line height `1.08` to `1.15`.
  - Labels & Technical Metadata: uppercase wide tracking (`0.03em` to `0.08em`).

## 2. Color Palette
- **Canvas / Background**: `#f4f5f7` (light neutral industrial canvas)
- **Primary Industrial Navy**: `#0b1a2e` / `#102a45`
- **Engineering Blue Accent**: `#1d588f` / `#2b6cb0`
- **Steel Dark / Charcoal**: `#0c0c0c` / `#1a202c`
- **Muted Borders & Dividers**: `#d0d7de` / `rgba(0,0,0,0.08)`
- **Card Backgrounds**: `#ffffff` (light card), `#0b1a2e` (dark technical highlight card).

## 3. Component Patterns
- **Buttons**:
  - Primary Industrial Dark: `#0b1a2e` background, white text, 12px, 600 weight, 12px 20px padding with direction icon (`↗`, `→`).
  - Engineering Accent: `#1d588f` background, white text.
  - Light Outline: `#ffffff` background, `#0b1a2e` text, 1px solid `#c0c8d0`.
- **Floating Navigation Bar**:
  - `position: fixed`, top `16px`, centered with `transform: translateX(-50%)`.
  - Backdrop blur filter (`backdrop-filter: blur(12px)`), high contrast, active state markers.
- **Interactive Service Accordion & Process Steps**:
  - Clean numbered steps (01 to 05) with active inspection/diagnosis details.
  - Synchronous image transition on selection with `referrerPolicy="no-referrer"`.

## 4. Layout & Spacing
- **Full Width Frame**: Canvas spans `100%` with responsive padding (`padding: 96px 6% 44px`).
- **Mobile Responsive**: Floating navbar collapses smoothly to mobile drawer button; touch targets at least 44px high; inputs `font-size: 16px` to prevent iOS zoom.

