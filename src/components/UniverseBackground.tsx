"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "./ThemeProvider";

const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export default function UniverseBackground() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [smoothPosition, setSmoothPosition] = useState({ x: -1000, y: -1000 });
  const [scrollY, setScrollY] = useState(0);
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

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Track scroll for parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax calculations - background moves at 0.3x scroll speed
  const backgroundParallax = scrollY * 0.3;

  // Dark theme spotlight mask
  const darkMask = `radial-gradient(450px circle at ${smoothPosition.x}px ${smoothPosition.y}px, black 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.15) 85%, transparent 100%)`;

  // Light theme spotlight mask - 6 layer smooth falloff, min opacity 20%
  const lightMask = `radial-gradient(380px circle at ${smoothPosition.x}px ${smoothPosition.y}px, black 0%, rgba(0,0,0,0.85) 15%, rgba(0,0,0,0.65) 30%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.2) 80%, transparent 100%)`;

  if (theme === "light") {
    return (
      <>
        {/* Light Theme Base - Layered Engineering Desk Surface with Parallax */}
        <div 
          className="fixed -z-30"
          style={{ 
            top: "-50vh",
            left: 0,
            right: 0,
            height: "200vh",
            background: `
              radial-gradient(ellipse 120% 80% at 20% 10%, rgba(56,189,248,0.08), transparent 50%),
              radial-gradient(ellipse 100% 60% at 80% 30%, rgba(14,165,233,0.06), transparent 55%),
              radial-gradient(ellipse 80% 50% at 50% 100%, rgba(148,163,184,0.08), transparent 60%),
              #eef2f7
            `,
            transform: `translateY(${-backgroundParallax * 0.5}px)`,
          }}
        />

        {/* Subtle Engineering Grid Overlay - with parallax */}
        <div
          className="fixed -z-25 pointer-events-none"
          style={{
            top: "-50vh",
            left: 0,
            right: 0,
            height: "200vh",
            backgroundImage: `
              linear-gradient(to right, rgba(203,213,225,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(203,213,225,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px",
            transform: `translateY(${-backgroundParallax * 0.4}px)`,
          }}
        />

        {/* Secondary grid layer for depth */}
        <div
          className="fixed -z-24 pointer-events-none"
          style={{
            top: "-50vh",
            left: 0,
            right: 0,
            height: "200vh",
            backgroundImage: `
              linear-gradient(to right, rgba(56,189,248,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(56,189,248,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "96px 96px",
            transform: `translateY(${-backgroundParallax * 0.2}px)`,
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
          
          {/* Blueprint SVG with parallax */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${basePath}/images/blueprint.svg)`,
              backgroundSize: "cover",
              backgroundPosition: `center ${-backgroundParallax * 0.1}px`,
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

        {/* Ambient Light Glow - adds depth */}
        <div
          className="fixed inset-0 -z-20 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at ${smoothPosition.x}px ${smoothPosition.y}px, rgba(56,189,248,0.03), transparent 60%)
            `,
          }}
        />

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

  // Dark Theme (galaxy effect with ambient depth and parallax)
  return (
    <>
      {/* Deep Space Base with ambient lighting for depth - with parallax */}
      <div 
        className="fixed -z-30"
        style={{ 
          top: "-50vh",
          left: 0,
          right: 0,
          height: "200vh",
          background: `
            radial-gradient(ellipse 100% 80% at 30% 20%, rgba(139, 92, 246, 0.06), transparent 50%),
            radial-gradient(ellipse 80% 60% at 70% 70%, rgba(59, 130, 246, 0.04), transparent 50%),
            radial-gradient(ellipse 120% 100% at 50% 50%, rgba(15, 23, 42, 0.8), transparent 80%),
            #050510
          `,
          transform: `translateY(${-backgroundParallax * 0.3}px)`,
        }}
      />

      {/* Star field grid - background layer with slow parallax */}
      <div
        className="fixed -z-25 pointer-events-none"
        style={{
          top: "-50vh",
          left: 0,
          right: 0,
          height: "200vh",
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.15), transparent),
            radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.1), transparent),
            radial-gradient(1px 1px at 50px 160px, rgba(255,255,255,0.12), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.08), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.1), transparent),
            radial-gradient(1px 1px at 160px 120px, rgba(255,255,255,0.06), transparent)
          `,
          backgroundSize: "200px 200px",
          transform: `translateY(${-backgroundParallax * 0.2}px)`,
        }}
      />

      {/* Subtle grid for system feel */}
      <div
        className="fixed -z-24 pointer-events-none opacity-30"
        style={{
          top: "-50vh",
          left: 0,
          right: 0,
          height: "200vh",
          backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          transform: `translateY(${-backgroundParallax * 0.15}px)`,
        }}
      />

      {/* Subtle vignette for depth */}
      <div
        className="fixed inset-0 -z-20 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 80% at 50% 50%, transparent 0%, rgba(0,0,0,0.4) 100%)`,
        }}
      />

      {/* The Hidden Universe - Revealed by mouse with parallax */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none hidden md:block overflow-hidden"
        style={{
          maskImage: darkMask,
          WebkitMaskImage: darkMask,
        }}
      >
        {/* High-quality stock galaxy image with parallax */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${basePath}/images/galaxy.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: `center ${-backgroundParallax * 0.1}px`,
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

      {/* Ambient glow following mouse - adds depth perception */}
      <div
        className="fixed inset-0 -z-15 pointer-events-none hidden md:block"
        style={{
          background: `
            radial-gradient(500px circle at ${smoothPosition.x}px ${smoothPosition.y}px, rgba(139, 92, 246, 0.03), transparent 60%)
          `,
        }}
      />

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
