# GitHub Copilot Instructions

This document provides context for GitHub Copilot to better assist with this project.

## Project Overview

This is a **Windows Desktop Engineer Portfolio** website built with Next.js 15, TailwindCSS, and TypeScript. It showcases enterprise Windows application development experience, featuring an interactive galaxy reveal effect. The portfolio is specifically designed for a Windows platform specialist working on enterprise desktop applications.

## Target Persona

Enterprise Windows Application Engineer with experience building large-scale corporate applications using:
- Windows App SDK (WinUI 3)
- UWP
- .NET Desktop
- MVVM Architecture
- System-level engineering

## Tech Stack

- **Next.js 15.1.3** - React framework with App Router
- **TailwindCSS 3.4** - Utility-first CSS
- **TypeScript 5** - Type safety
- **Lucide React** - Icon library
- **react-icons** - Extended icon library for Windows/enterprise tech icons

## Key Components

### `src/components/UniverseBackground.tsx`
The main visual effect component. Uses CSS `mask-image` with `radial-gradient` to create a spotlight effect that follows the mouse cursor, revealing a galaxy image underneath.

### `src/app/page.tsx`
The main portfolio page with a two-column layout:
- Left (35%): Fixed profile section with glassmorphism effect
- Right (65%): Scrollable content area with:
  - Platform Focus section
  - Engineering Stack (skills)
  - Experience with bullet-point descriptions
  - Case Studies (enterprise projects)

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

### Customizing portfolio content
All personal data is stored in `src/data/info.json`. Edit this file to update:
- Profile: name, initials, title, bio, avatar URL
- Contact: email, location, phone
- Socials: GitHub, LinkedIn, Twitter, website URLs
- Skills: categories with icons, colors, and skill items
- Experience: job history with title, company, period, description (string or array of bullets)
- Platform Focus: array of engineering focus areas
- Case Studies: enterprise project showcases with techStack, keySystems, and challenges
- Meta: site title and description for SEO

### Adding a new skill category
Edit `src/data/info.json` and add a new category under `skills`:
```json
"frontend": {
  "icon": "Globe",
  "color": "pink",
  "items": [
    { "name": "React", "color": "cyan" },
    { "name": "Next.js", "color": "purple" }
  ]
}
```

Available icons: `Braces`, `Server`, `Cloud`, `Code`, `Database`, `Globe`, `Terminal`, `Layers`, `Cpu`, `Smartphone`

Available colors: `cyan`, `green`, `orange`, `pink`, `purple`, `red`, `yellow`

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
