"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "./ThemeProvider";

const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export default function UniverseBackground() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [smoothPosition, setSmoothPosition] = useState({ x: -1000, y: -1000 });
  const animationRef = useRef<number | null>(null);
  const { theme } = useTheme();

  // Smooth interpolation for 60fps animation
  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, position.x, 0.15),
        y: lerp(prev.y, position.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [position]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Dark theme spotlight mask
  const darkMask = `radial-gradient(450px circle at ${smoothPosition.x}px ${smoothPosition.y}px, black 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.15) 85%, transparent 100%)`;

  // Light theme spotlight mask - 6 layer smooth falloff, min opacity 20%
  const lightMask = `radial-gradient(380px circle at ${smoothPosition.x}px ${smoothPosition.y}px, black 0%, rgba(0,0,0,0.85) 15%, rgba(0,0,0,0.65) 30%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.2) 80%, transparent 100%)`;

  if (theme === "light") {
    return (
      <>
        {/* Light Theme Base - Layered Engineering Desk Surface */}
        <div 
          className="fixed inset-0 -z-30"
          style={{ 
            background: `
              radial-gradient(ellipse 120% 80% at 20% 10%, rgba(56,189,248,0.08), transparent 50%),
              radial-gradient(ellipse 100% 60% at 80% 30%, rgba(14,165,233,0.06), transparent 55%),
              radial-gradient(ellipse 80% 50% at 50% 100%, rgba(148,163,184,0.08), transparent 60%),
              #eef2f7
            `
          }}
        />

        {/* Subtle Engineering Grid Overlay - page background only */}
        <div
          className="fixed inset-0 -z-20 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(203,213,225,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(203,213,225,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "16px 16px",
          }}
        />

        {/* Blueprint Layer - Revealed by mouse - DARK blueprint on light background */}
        <div
          className="fixed inset-0 -z-10 pointer-events-none hidden md:block overflow-hidden"
          style={{
            maskImage: lightMask,
            WebkitMaskImage: lightMask,
          }}
        >
          {/* Dark blueprint background for contrast */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#0a1628",
            }}
          />
          
          {/* Blueprint SVG */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${basePath}/images/blueprint.svg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Blueprint grid lines overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(56,189,248,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(56,189,248,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        {/* Mobile fallback - static blueprint with very low opacity */}
        <div
          className="fixed inset-0 -z-10 pointer-events-none md:hidden"
          style={{
            backgroundImage: `url(${basePath}/images/blueprint.svg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.85,
          }}
        />
      </>
    );
  }

  // Dark Theme (galaxy effect with ambient depth)
  return (
    <>
      {/* Deep Space Base with ambient lighting for depth */}
      <div 
        className="fixed inset-0 -z-20"
        style={{ 
          background: `
            radial-gradient(ellipse 100% 80% at 30% 20%, rgba(139, 92, 246, 0.06), transparent 50%),
            radial-gradient(ellipse 80% 60% at 70% 70%, rgba(59, 130, 246, 0.04), transparent 50%),
            radial-gradient(ellipse 120% 100% at 50% 50%, rgba(15, 23, 42, 0.8), transparent 80%),
            #050510
          `
        }}
      />

      {/* Subtle vignette for depth */}
      <div
        className="fixed inset-0 -z-15 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 80% at 50% 50%, transparent 0%, rgba(0,0,0,0.4) 100%)`,
        }}
      />

      {/* The Hidden Universe - Revealed by mouse */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none hidden md:block overflow-hidden"
        style={{
          maskImage: darkMask,
          WebkitMaskImage: darkMask,
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
