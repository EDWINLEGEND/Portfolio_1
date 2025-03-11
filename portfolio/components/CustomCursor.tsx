"use client";

import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorSize, setCursorSize] = useState(40);

  // Track mouse position
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    
    // Handle hovering interactive elements
    const handleElementMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive');
      
      if (isInteractive) {
        setIsHovering(true);
        setCursorSize(70);
      }
    };
    
    const handleElementMouseLeave = () => {
      setIsHovering(false);
      setCursorSize(40);
    };

    // Add event listeners to the document
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleElementMouseEnter);
    document.addEventListener('mouseout', handleElementMouseLeave);

    return () => {
      // Clean up event listeners
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementMouseEnter);
      document.removeEventListener('mouseout', handleElementMouseLeave);
    };
  }, [isVisible, isHovering]);

  // Color inverting cursor with mix-blend-mode: difference
  const cursorStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: `${cursorSize}px`,
    height: `${cursorSize}px`,
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9999,
    mixBlendMode: 'difference',
    backgroundColor: '#ffffff',
    transition: 'width 0.3s, height 0.3s, transform 0.1s',
    transform: `translate(${position.x - cursorSize/2}px, ${position.y - cursorSize/2}px)`,
    opacity: isVisible ? 1 : 0,
  } as React.CSSProperties;

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none !important;
        }
        
        a, button, [role="button"], .interactive {
          cursor: none !important;
        }
      `}</style>
      <div style={cursorStyle} />
    </>
  );
};

export default CustomCursor; 