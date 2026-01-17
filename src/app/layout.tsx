import type { Metadata } from "next";
import "./globals.css";
import portfolioData from "@/data/info.json";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: portfolioData.meta.siteTitle,
  description: portfolioData.meta.siteDescription,
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
