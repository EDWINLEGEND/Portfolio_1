"use client";

import { useCursor } from '../context/CursorContext';

export const useCursorHandlers = (cursorType: string) => {
  const { setCursorType } = useCursor();

  const handleMouseEnter = () => {
    setCursorType(cursorType);
  };

  const handleMouseLeave = () => {
    setCursorType('default');
  };

  return {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
}; 