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
        return isClicking ? 55 : 45;
    }
  };

  const size = getCursorSize();
  const halfSize = size / 2;

  // Cursor styles
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
    transition: 'width 0.2s, height 0.2s, transform 0.1s',
    transform: `translate(${position.x - halfSize}px, ${position.y - halfSize}px)`,
    opacity: isVisible ? 1 : 0,
  } as React.CSSProperties;

  const cursorInnerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 10000,
    backgroundColor: '#ffffff',
    mixBlendMode: 'difference',
    transform: `translate(${position.x - 5}px, ${position.y - 5}px)`,
    opacity: isVisible ? 1 : 0,
  } as React.CSSProperties;

  // Add cursor trail effect with animation
  const [trail, setTrail] = useState<Array<{ x: number, y: number, opacity: number, size: number }>>([]);

  useEffect(() => {
    if (position.x === 0 && position.y === 0) return;
    
    // Add current position to trail with smaller sizes
    const newTrail = [...trail, { 
      x: position.x, 
      y: position.y, 
      opacity: 0.4,
      size: Math.max(6, halfSize * 0.15)
    }];
    
    // Keep only the last 4 positions (reduced from 5)
    if (newTrail.length > 4) {
      newTrail.shift();
    }
    
    // Update opacity for all trail points
    const updatedTrail = newTrail.map((point, index) => {
      const factor = index / newTrail.length;
      return {
        ...point,
        opacity: 0.4 * (1 - factor)
      };
    });
    
    setTrail(updatedTrail);
  }, [position, halfSize]);

  return (
    <>
      {/* Trail dots */}
      {trail.map((point, index) => (
        <div
          key={index}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: `${point.size}px`,
            height: `${point.size}px`,
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9998,
            backgroundColor: '#ffffff',
            mixBlendMode: 'difference',
            transform: `translate(${point.x - point.size/2}px, ${point.y - point.size/2}px)`,
            opacity: point.opacity,
          }}
        />
      ))}
      
      {/* Main cursor elements */}
      <div style={cursorOuterStyle} />
      <div style={cursorInnerStyle} />
    </>
  );
};

export default CustomCursor; 