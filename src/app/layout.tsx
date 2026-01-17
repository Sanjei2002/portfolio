import type { Metadata } from "next";
import "./globals.css";
import portfolioData from "@/data/info.json";
import { ThemeProvider } from "@/components/ThemeProvider";

const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

// Extract data from info.json
const { profile, meta, socials } = portfolioData;

export const metadata: Metadata = {
  title: meta.siteTitle,
  description: meta.siteDescription,
  
  // SEO Keywords from info.json
  keywords: meta.keywords,
  
  // Author information from info.json
  authors: [{ name: profile.name, url: meta.siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  
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
    url: meta.siteUrl,
    siteName: `${profile.name} | Portfolio`,
    title: meta.siteTitle,
    description: meta.siteDescription,
    images: [
      {
        url: `${meta.siteUrl}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: `${profile.name} - ${profile.title}`,
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: meta.siteTitle,
    description: meta.siteDescription,
    images: [`${meta.siteUrl}/og-image.svg`],
    creator: meta.twitterHandle || undefined,
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
  
  // Canonical URL
  alternates: {
    canonical: meta.siteUrl,
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
