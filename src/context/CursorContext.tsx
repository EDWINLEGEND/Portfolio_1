"use client";

import React, { createContext, useContext, useState } from 'react';

type CursorContextType = {
  cursorType: string;
  setCursorType: (type: string) => void;
};

const CursorContext = createContext<CursorContextType>({
  cursorType: 'default',
  setCursorType: () => {},
});

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorType, setCursorType] = useState('default');

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  return useContext(CursorContext);
} 