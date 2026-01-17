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
│   ├── components/
│   │   └── UniverseBackground.tsx  # Galaxy reveal effect
│   ├── data/
│   │   └── info.json           # ⭐ All portfolio content (edit this!)
│   └── types/
│       └── portfolio.ts        # TypeScript type definitions
├── tailwind.config.ts          # Tailwind with Dracula colors
├── next.config.ts              # Next.js configuration
└── package.json
```

## 🎨 Customization

### Updating Personal Information

**All content is centralized in `src/data/info.json`**. Edit this single file to update:

```json
{
  "profile": {
    "initials": "JD",
    "name": "Your Name",
    "title": "Your Title",
    "bio": "Your bio description",
    "avatarUrl": "/images/avatar.jpg"  // or null for initials
  },
  "contact": {
    "email": "your@email.com",
    "location": "Your City, Country",
    "phone": "+1 234 567 890"
  },
  "socials": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "https://twitter.com/yourusername",
    "website": "https://yourwebsite.com"
  },
  "skills": { ... },
  "experience": [ ... ],
  "meta": {
    "siteTitle": "Your Name | Portfolio",
    "siteDescription": "Your SEO description"
  }
}
```

### Available Skill Icons

Use these icon names in your skill categories:
- `Braces` - Programming languages
- `Server` - Backend technologies
- `Cloud` - Cloud services
- `Code` - General coding
- `Database` - Databases
- `Globe` - Web/Frontend
- `Terminal` - CLI tools
- `Layers` - Frameworks
- `Cpu` - System/Hardware
- `Smartphone` - Mobile

### Available Colors

Use these color names for skills:
`cyan`, `green`, `orange`, `pink`, `purple`, `red`, `yellow`

## 🚀 Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

1. **Enable GitHub Pages in your repository**
   - Go to Settings → Pages
   - Under "Build and deployment", select **GitHub Actions** as the source

2. **Push to main branch**
   - The GitHub Actions workflow will automatically build and deploy your site
   - Find the workflow at `.github/workflows/deploy.yml`

3. **Access your site**
   - Your portfolio will be available at `https://<username>.github.io/Dev_DogTag`

4. **Custom domain (optional)**
   - Add a `CNAME` file to the `public/` folder with your domain
   - Configure DNS settings with your domain provider

### Manual Deployment

```bash
npm run build
```

The static output will be in the `out/` directory. Upload this folder to any static hosting provider.

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
