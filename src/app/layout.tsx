import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Doe | Senior Software Engineer",
  description: "Digital Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-dracula-fg antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
