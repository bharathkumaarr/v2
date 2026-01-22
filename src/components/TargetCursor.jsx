import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function TargetCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  // Spring settings for that "weighted" feel
  const springConfig = { stiffness: 400, damping: 40, mass: 0.1 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const manageMouseMove = (e) => {
      const { clientX, clientY } = e;
      // Centering logic based on the 32px (w-8) size
      mouseX.set(clientX - 16); 
      mouseY.set(clientY - 16);
    };

    const handleMouseOver = (e) => {
      // Detect if the target is a link, button, or has a 'data-magnetic' attribute
      const target = e.target.closest('a, button, [role="button"]');
      setIsHovering(!!target);
    };

    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ left: mouseX, top: mouseY }}
      className="fixed z-[9999] pointer-events-none w-8 h-8 flex items-center justify-center"
      animate={{
        scale: isHovering ? 1.5 : 1, // Expands when over links
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* The Rotating Corners */}
      <motion.div
        animate={{ 
          rotate: 360,
          opacity: isHovering ? 1 : 0.4, // Becomes brighter on interaction
        }}
        transition={{ 
          rotate: { duration: isHovering ? 2 : 6, repeat: Infinity, ease: "linear" },
          opacity: { duration: 0.3 }
        }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-zinc-100">
          <path d="M25 10H10V25" strokeWidth="3" />
          <path d="M75 10H90V25" strokeWidth="3" />
          <path d="M25 90H10V75" strokeWidth="3" />
          <path d="M75 90H90V75" strokeWidth="3" />
        </svg>
      </motion.div>

      {/* The Static Center Dot - Turns into a crosshair on hover */}
      <motion.div 
        animate={{
          scale: isHovering ? 0.5 : 1,
          backgroundColor: isHovering ? "#fff" : "#71717a"
        }}
        className="w-1.5 h-1.5 rounded-full" 
      />
    </motion.div>
  );
}