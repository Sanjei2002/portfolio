# Digital Resume - Personal Portfolio

A modern, interactive personal portfolio website built with Next.js, featuring a stunning mouse-tracking galaxy reveal effect and Dracula color theme.

![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black?logo=next.js)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)

## ✨ Features

- **Galaxy Reveal Effect**: Interactive mouse-tracking spotlight that reveals a stunning galaxy background
- **Dracula Theme**: Beautiful dark color palette with purple, cyan, and pink accents
- **Glassmorphism UI**: Frosted glass effect on the profile section
- **Responsive Design**: Fully responsive layout for mobile and desktop
- **Hover Animations**: Smooth transitions on interactive elements
- **Static Export**: Can be deployed to any static hosting platform

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Dev_DogTag.git
   cd Dev_DogTag
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

The static output will be in the `out/` directory.

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
Dev_DogTag/
├── public/
│   └── images/
│       └── galaxy.jpg          # Galaxy background image
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles & Tailwind
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Main portfolio page
│   └── components/
│       └── UniverseBackground.tsx  # Galaxy reveal effect
├── tailwind.config.ts          # Tailwind with Dracula colors
├── next.config.ts              # Next.js configuration
└── package.json
```

## 🎨 Customization

### Updating Personal Information

Edit `src/app/page.tsx` to update:
- Name and title
- Bio/description
- Contact information (email, location)
- Social links (GitHub, LinkedIn)
- Skills and technologies
- Work experience

### Changing Colors

The Dracula color palette is defined in `tailwind.config.ts`:

```typescript
colors: {
  dracula: {
    bg: '#282a36',
    current: '#44475a',
    fg: '#f8f8f2',
    comment: '#6272a4',
    cyan: '#8be9fd',
    green: '#50fa7b',
    orange: '#ffb86c',
    pink: '#ff79c6',
    purple: '#bd93f9',
    red: '#ff5555',
    yellow: '#f1fa8c',
  }
}
```

### Galaxy Background

Replace `public/images/galaxy.jpg` with your own space/galaxy image for a different look.

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript
- **Deployment**: Static export (Vercel, Netlify, GitHub Pages)

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

- Galaxy image from [Unsplash](https://unsplash.com/)
- Inspired by [Brittany Chiang's Portfolio](https://brittanychiang.com/)
- Dracula Theme by [Dracula](https://draculatheme.com/)
