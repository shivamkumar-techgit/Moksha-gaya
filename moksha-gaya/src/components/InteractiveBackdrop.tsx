"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MandalaSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-current" strokeWidth="0.4">
    <circle cx="100" cy="100" r="90" strokeDasharray="3 3" />
    <circle cx="100" cy="100" r="85" />
    <circle cx="100" cy="100" r="60" strokeDasharray="1 4" strokeWidth="0.8" />
    <circle cx="100" cy="100" r="40" />
    <circle cx="100" cy="100" r="20" strokeDasharray="2 2" />
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * Math.PI) / 4;
      const x1 = 100 + 90 * Math.cos(angle);
      const y1 = 100 + 90 * Math.sin(angle);
      const x2 = 100 - 90 * Math.cos(angle);
      const y2 = 100 - 90 * Math.sin(angle);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.25" className="stroke-[#b17a20]" />;
    })}
    {Array.from({ length: 6 }).map((_, i) => {
      const angle = (i * Math.PI) / 3;
      const cx = 100 + 30 * Math.cos(angle);
      const cy = 100 + 30 * Math.sin(angle);
      return <circle key={i} cx={cx} cy={cy} r="30" opacity="0.3" className="stroke-[#b17a20]" />;
    })}
  </svg>
);

export default function InteractiveBackdrop() {
  const [mounted, setMounted] = useState(false);
  
  // Track mouse coordinates for interactive glow (Option B)
  const mouseX = useMotionValue(-500); // Start off-screen
  const mouseY = useMotionValue(-500);

  // Smooth springs for natural lag/inertia
  const springConfig = { damping: 45, stiffness: 150, mass: 1.2 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half the width of the follower (200px for a 400px width)
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Static fallback for SSR */}
        <div className="fixed top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#b17a20]/12 blur-[130px]" />
        <div className="fixed bottom-[-15%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#efe9de]/70 blur-[150px]" />
        
        {/* Dotted Grid Overlay */}
        <div 
          className="fixed inset-0 opacity-[0.06] z-0" 
          style={{ 
            backgroundImage: "radial-gradient(#b17a20 1.5px, transparent 1.5px)", 
            backgroundSize: "28px 28px" 
          }} 
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 1. Ambient Drifting Glows (Option A) */}
      <div className="fixed top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#b17a20]/12 blur-[130px] animate-ambient-drift-1" />
      <div className="fixed bottom-[-15%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#efe9de]/70 blur-[150px] animate-ambient-drift-2" />
      <div className="fixed top-[45%] left-[25%] w-[50vw] h-[50vw] rounded-full bg-[#f0c38e]/18 blur-[120px] animate-ambient-drift-3" />
      <div className="fixed bottom-[20%] left-[-15%] w-[55vw] h-[55vw] rounded-full bg-[#e8dcc4]/35 blur-[140px] animate-ambient-drift-4" />

      {/* 2. Interactive Mouse-Follower Glow (Option B) */}
      <motion.div 
        className="fixed w-[400px] h-[400px] rounded-full bg-[#b17a20]/15 blur-[100px] z-10 hidden md:block pointer-events-none"
        style={{
          x: glowX,
          y: glowY,
        }}
      />

      {/* 3. Dotted Grid Overlay (Option A - Higher Opacity for Visibility) */}
      <div 
        className="fixed inset-0 opacity-[0.07] z-0" 
        style={{ 
          backgroundImage: "radial-gradient(#b17a20 1.5px, transparent 1.5px)", 
          backgroundSize: "28px 28px" 
        }} 
      />

      {/* 4. Rotating Mandala Watermarks (Option A - Higher Opacity for Visibility) */}
      <div className="fixed top-[15%] right-[-15vw] w-[60vw] h-[60vw] max-w-[650px] opacity-[0.06] text-[#b17a20] animate-super-slow-spin z-0">
        <MandalaSVG />
      </div>
      <div 
        className="fixed bottom-[-10%] left-[-15vw] w-[50vw] h-[50vw] max-w-[500px] opacity-[0.05] text-[#b17a20] animate-super-slow-spin z-0"
        style={{ animationDirection: "reverse" }}
      >
        <MandalaSVG />
      </div>
    </div>
  );
}
