"use client";

import { useEffect, useState } from "react";

export default function MouseSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Dynamic spotlight - desktop only */}
      <div
        className="fixed inset-0 -z-30 hidden md:block pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(189, 147, 249, 0.12), transparent 80%)`,
        }}
      />
      {/* Static fallback - mobile only */}
      <div
        className="fixed inset-0 -z-30 md:hidden pointer-events-none"
        style={{
          background: `radial-gradient(600px at 10% 10%, rgba(189, 147, 249, 0.1), transparent 80%)`,
        }}
      />
    </>
  );
}
