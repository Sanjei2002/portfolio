"use client";

import { useEffect, useState } from "react";

const basePath = process.env.NODE_ENV === "production" ? "/Dev_DogTag" : "";

export default function UniverseBackground() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Deep Space Base - The "Acrylic Curtain" */}
      <div 
        className="fixed inset-0 -z-20"
        style={{ backgroundColor: "#050510" }}
      />

      {/* The Hidden Universe - Revealed by mouse */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none hidden md:block overflow-hidden"
        style={{
          maskImage: `radial-gradient(450px circle at ${position.x}px ${position.y}px, black 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.15) 85%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(450px circle at ${position.x}px ${position.y}px, black 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.15) 85%, transparent 100%)`,
        }}
      >
        {/* High-quality stock galaxy image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${basePath}/images/galaxy.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Subtle Dracula theme color overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 200% 100% at 30% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 150% 100% at 70% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)
            `,
            mixBlendMode: "overlay",
          }}
        />
      </div>

      {/* Mobile fallback - static galaxy with lower opacity */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none md:hidden"
        style={{
          backgroundImage: `url(${basePath}/images/galaxy.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.35,
        }}
      />
    </>
  );
}
