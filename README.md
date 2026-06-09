# Axion Studio

High-end design agency crafting digital experiences for brands ready to dominate their category online.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS 3.4** (styling)
- **Shaders** (WebGL compositing)
- **Lucide React** (icons)

## Getting Started

```bash
npm install
npm run dev
```

Dev server runs at http://localhost:5173.

## Build

```bash
npm run build
```

Produces a production build in `dist/`.

## Project Structure

```
src/
├── components/
│   ├── hero/         # Hero section with shader background
│   ├── navigation/   # Pill navbar with London clock + mobile menu
│   ├── sections/     # About, Case Studies, and other sections
│   └── shared/       # Types, hooks, utilities
├── App.tsx           # Main app component
├── index.css         # Tailwind + .liquid-glass utilities
└── main.tsx          # Entry point
```

## Design System

- Custom Axion color palette (black/dark/orange)
- `.liquid-glass` glassmorphism utility classes
- Inter font family
- Custom animations: text-roll, fade-in, slide-up
- Transition timing: `cubic-bezier(0.25, 0.1, 0.25, 1)`