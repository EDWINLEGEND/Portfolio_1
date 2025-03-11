"use client";

import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  finishLoading: () => void;
}

const LoadingScreen = ({ finishLoading }: LoadingScreenProps) => {
  const [counter, setCounter] = useState(0);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  
  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setCounter(prevCounter => {
        if (prevCounter >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevCounter + 1;
      });
    }, 20);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    // When counter reaches 100, fade out loader and finish loading
    if (counter === 100) {
      const timeout = setTimeout(() => {
        setIsLoaderVisible(false);
        setTimeout(finishLoading, 500); // Wait for fade-out animation
      }, 500);
      
      return () => clearTimeout(timeout);
    }
  }, [counter, finishLoading]);

  return (
    <div 
      className={`fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50 transition-opacity duration-500 ${
        isLoaderVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="w-full max-w-md px-8 flex flex-col items-center">
        {/* Logo or Name */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-2">
            <span className="text-primary">Edwin</span> Shaju M
          </h1>
          <p className="text-gray-400 text-lg">UI/UX Designer & Frontend Developer</p>
        </div>
        
        {/* Enhanced Animated Loader */}
        <div className="w-64 h-64 mb-8 relative flex items-center justify-center">
          {/* Spinning circle */}
          <div className="absolute w-32 h-32 border-4 border-t-primary border-r-primary/50 border-b-primary/30 border-l-primary/10 rounded-full animate-spin"></div>
          
          {/* Secondary spinning circle (opposite direction) */}
          <div className="absolute w-40 h-40 border-2 border-t-transparent border-r-primary/30 border-b-primary/50 border-l-primary/20 rounded-full animate-spin" 
               style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
          
          {/* Pulsing inner circle */}
          <div className="absolute w-24 h-24 bg-primary/20 rounded-full animate-pulse"></div>
          
          {/* Floating dots around the circle */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-3 h-3 bg-white rounded-full animate-bounce-subtle"
              style={{ 
                transform: `rotate(${i * 30}deg) translateY(-50px)`,
                animationDelay: `${i * 0.15}s`,
                opacity: 0.7
              }}
            ></div>
          ))}
          
          {/* Counter in the middle */}
          <div className="text-3xl font-bold text-white z-10 flex items-center justify-center bg-gray-900/50 w-16 h-16 rounded-full backdrop-blur-sm">
            {counter}%
          </div>
        </div>
        
        {/* Loading Bar */}
        <div className="w-full h-3 bg-gray-800 rounded-full mb-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-100 ease-out"
            style={{ width: `${counter}%` }}
          ></div>
        </div>
        
        {/* Loading Text with animation */}
        <div className="text-gray-400 font-medium relative">
          <span className="inline-block animate-pulse-slow">Loading</span>
          <span className="inline-block mx-0.5 animate-bounce" style={{ animationDelay: '0.1s' }}>.</span>
          <span className="inline-block mx-0.5 animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
          <span className="inline-block mx-0.5 animate-bounce" style={{ animationDelay: '0.3s' }}>.</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 