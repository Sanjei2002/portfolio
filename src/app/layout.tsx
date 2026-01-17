import type { Metadata } from "next";
import "./globals.css";
import portfolioData from "@/data/info.json";
import { ThemeProvider } from "@/components/ThemeProvider";

const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export const metadata: Metadata = {
  title: portfolioData.meta.siteTitle,
  description: portfolioData.meta.siteDescription,
  
  // SEO Keywords
  keywords: [
    "Sanjei Pranav",
    "Sanjei Pranav S",
    "Windows Application Engineer",
    "WinUI 3 Developer",
    "UWP Developer",
    ".NET Developer",
    "Windows App SDK",
    "MVVM",
    "C# Developer",
    "Desktop Application Developer",
    "Chennai Developer",
    "Enterprise Software Engineer",
  ],
  
  // Author information
  authors: [{ name: "Sanjei Pranav", url: "https://sanjei2002.github.io/portfolio" }],
  creator: "Sanjei Pranav",
  publisher: "Sanjei Pranav",
  
  // Favicon
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
    apple: `${basePath}/favicon.svg`,
  },
  
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sanjei2002.github.io/portfolio",
    siteName: "Sanjei Pranav | Portfolio",
    title: portfolioData.meta.siteTitle,
    description: portfolioData.meta.siteDescription,
    images: [
      {
        url: `https://sanjei2002.github.io/portfolio/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Sanjei Pranav - Windows Application Engineer",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: portfolioData.meta.siteTitle,
    description: portfolioData.meta.siteDescription,
    images: [`https://sanjei2002.github.io/portfolio/og-image.svg`],
    creator: "@sanjeipranav",
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification (add your verification codes when you have them)
  // verification: {
  //   google: "your-google-verification-code",
  // },
  
  // Canonical URL
  alternates: {
    canonical: "https://sanjei2002.github.io/portfolio",
  },
  
  // Category
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="text-dracula-fg antialiased overflow-x-hidden">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
