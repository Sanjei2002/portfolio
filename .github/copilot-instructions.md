# GitHub Copilot Instructions

This document provides context for GitHub Copilot to better assist with this project.

## Project Overview

This is a personal portfolio/digital resume website built with Next.js 15, TailwindCSS, and TypeScript. It features an interactive galaxy reveal effect where moving the mouse reveals a space background behind a dark overlay.

## Tech Stack

- **Next.js 15.1.3** - React framework with App Router
- **TailwindCSS 3.4** - Utility-first CSS
- **TypeScript 5** - Type safety
- **Lucide React** - Icon library

## Key Components

### `src/components/UniverseBackground.tsx`
The main visual effect component. Uses CSS `mask-image` with `radial-gradient` to create a spotlight effect that follows the mouse cursor, revealing a galaxy image underneath.

### `src/app/page.tsx`
The main portfolio page with a two-column layout:
- Left (35%): Fixed profile section with glassmorphism effect
- Right (65%): Scrollable content area for skills and experience

### `tailwind.config.ts`
Extended with custom Dracula color palette for consistent theming.

## Design System

### Colors (Dracula Theme)
- Background: `#282a36`
- Foreground: `#f8f8f2`
- Purple: `#bd93f9`
- Cyan: `#8be9fd`
- Pink: `#ff79c6`
- Green: `#50fa7b`

### Effects
- **Glassmorphism**: `bg-slate-950/80 backdrop-blur-md`
- **Spotlight**: 450px radius radial gradient mask
- **Hover states**: Scale transforms and color transitions

## Common Tasks

### Adding a new skill
Edit the skills array in `src/app/page.tsx`. Skills are rendered as badge-style tags.

### Modifying the galaxy effect
Edit `src/components/UniverseBackground.tsx`:
- Change spotlight size: Modify the `450px` value in the radial gradient
- Adjust fade: Modify the opacity stops in the gradient
- Change image: Replace `/images/galaxy.jpg`

### Adding new sections
Add new `<section>` elements in the right column of `page.tsx`.

## File Conventions

- React components: PascalCase (`UniverseBackground.tsx`)
- Use `"use client"` directive for components with hooks/interactivity
- Tailwind classes preferred over custom CSS
- All images in `public/images/`

## Build Commands

```bash
npm run dev      # Development server on :3000
npm run build    # Production build to /out
npm run lint     # ESLint check
```

## Notes for Copilot

- This project uses Next.js App Router (not Pages Router)
- Static export is configured - no server-side features
- Prefer Tailwind utilities over inline styles
- Keep the Dracula color theme consistent
- The left profile pane should remain fixed on desktop
