"use client";

import { useEffect, useState, useRef, ReactNode } from "react";

interface ParallaxContainerProps {
  children: ReactNode;
  speed?: number; // 0 = no parallax, 1 = full scroll speed
  className?: string;
}

export default function ParallaxContainer({
  children,
  speed = 0.7,
  className = "",
}: ParallaxContainerProps) {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollTop = window.scrollY;
      const rect = containerRef.current.getBoundingClientRect();
      const elementTop = rect.top + scrollTop;
      const viewportHeight = window.innerHeight;
      
      // Only apply parallax when element is in view
      if (scrollTop + viewportHeight > elementTop && scrollTop < elementTop + rect.height) {
        const relativeScroll = scrollTop - elementTop + viewportHeight;
        const parallaxOffset = relativeScroll * (1 - speed);
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`will-change-transform ${className}`}
      style={{
        transform: `translateY(${offset * 0.1}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  );
}

// Hook for parallax scroll value
export function useParallaxScroll(speed: number = 0.3) {
  const [scrollY, setScrollY] = useState(0);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setScrollY(scroll);
      setParallaxY(scroll * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { scrollY, parallaxY };
}
