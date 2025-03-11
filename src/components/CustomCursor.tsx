"use client";

import { useState, useEffect } from 'react';
import { useCursor } from '../context/CursorContext';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const { cursorType } = useCursor();

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Get cursor size based on type
  const getCursorSize = () => {
    switch (cursorType) {
      case 'button':
        return isClicking ? 65 : 55;
      case 'link':
        return isClicking ? 55 : 45;
      case 'text':
        return isClicking ? 35 : 25;
      default:
        return isClicking ? 45 : 35;
    }
  };

  const size = getCursorSize();
  const halfSize = size / 2;

  // Color inverting cursor with mix-blend-mode: difference
  const cursorOuterStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9999,
    mixBlendMode: 'difference',
    backgroundColor: '#ffffff',
    transition: 'width 0.3s, height 0.3s, transform 0.1s',
    transform: `translate(${position.x - halfSize}px, ${position.y - halfSize}px)`,
    opacity: isVisible ? 1 : 0,
  } as React.CSSProperties;

  return (
    <>
      {/* Single circle cursor with color inversion effect */}
      <div style={cursorOuterStyle} />
    </>
  );
};

export default CustomCursor; 