"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [displayText, setDisplayText] = useState("UI/UX Designer");
  const [showCursor, setShowCursor] = useState(true);
  
  // Track mouse position for parallax only
  const handleMouseMove = (e: MouseEvent) => {
    if (!sectionRef.current || !imageRef.current) return;
    
    // Get section dimensions and mouse position
    const rect = sectionRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate mouse position relative to center of section
    const relativeX = (e.clientX - rect.left - centerX) / centerX;
    const relativeY = (e.clientY - rect.top - centerY) / centerY;
    
    // Move image in the opposite direction of mouse movements (inverted parallax)
    if (imageRef.current) {
      imageRef.current.style.transform = `translate(${relativeX * -25}px, ${relativeY * -25}px)`;
    }
  };
  
  // Custom typing animation effect
  useEffect(() => {
    const titles = [
      "UI/UX Designer",
      "Frontend Developer"
    ];
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    
    // Toggle cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    // Typing effect
    const typeText = () => {
      const currentTitle = titles[currentIndex];
      
      if (isDeleting) {
        // Deleting text
        setDisplayText(currentTitle.substring(0, charIndex - 1));
        charIndex--;
        typingSpeed = 80; // Delete faster
      } else {
        // Typing text
        setDisplayText(currentTitle.substring(0, charIndex + 1));
        charIndex++;
        typingSpeed = 150; // Type slower
      }
      
      // Handle state transitions
      if (!isDeleting && charIndex === currentTitle.length) {
        // Finished typing current word
        isDeleting = false;
        setTimeout(() => {
          isDeleting = true;
        }, 1500); // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting
        isDeleting = false;
        currentIndex = (currentIndex + 1) % titles.length;
      }
      
      setTimeout(typeText, typingSpeed);
    };
    
    // Start the typing effect
    const typingTimer = setTimeout(typeText, 1000);
    
    return () => {
      clearTimeout(typingTimer);
      clearInterval(cursorInterval);
    };
  }, []);
  
  useEffect(() => {
    // Animation entrance timing
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 500);
    
    // Add mouse move listener for parallax effect
    if (sectionRef.current) {
      sectionRef.current.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      clearTimeout(timer);
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Darker Gradient Background with New Styling */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-black via-gray-950 to-indigo-950"
      >
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-purple-600/20 blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-60 h-60 rounded-full bg-indigo-600/20 blur-3xl animate-float-medium"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-blue-600/20 blur-3xl animate-float-fast"></div>
      </div>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 z-5 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950/10 to-purple-950/20 opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black to-black opacity-70"></div>
        
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-40"></div>
      </div>
      
      {/* Glowing animated particles */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index}
            className="absolute w-1 h-1 rounded-full bg-white opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 7}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 relative z-20">
        {/* Text content - with fade-in and slide animations */}
        <div 
          className={`w-full md:w-3/5 text-center md:text-left transform transition-all duration-1000 ease-out ${
            hasLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight text-white">
            <span className="inline">Hello, I'm </span>
            <span className="text-primary inline-block w-full font-extrabold">
              Edwin Shaju M
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-8 h-8">
            <span className="text-primary relative inline-block">
              {displayText}
              <span className={`ml-1 inline-block w-2 h-5 bg-primary ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
              <span className="absolute inset-0 blur-lg bg-primary/30 -z-10 rounded-lg"></span>
            </span>
          </h2>
          <div className="mt-8">
            <Link 
              href="#work" 
              className="bg-primary text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105 transform duration-300 group"
            >
              <span className="relative z-10 inline-block group-hover:animate-bounce-subtle">View My Work</span>
              <span className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 blur-lg"></span>
            </Link>
          </div>
        </div>
        
        {/* Profile Image with inverse parallax effect */}
        <div 
          ref={imageRef} 
          className={`w-full md:w-2/5 flex justify-center transform transition-all duration-1000 ease-out ${
            hasLoaded ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-10 opacity-0 rotate-6'
          }`}
          style={{ 
            transitionDelay: '400ms',
            transition: 'transform 0.2s ease-out, opacity 1s ease-out'
          }}
        >
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
            {/* Rotating border effect */}
            <div className="absolute inset-0 rounded-full border-4 border-white/30"></div>
            <div className="absolute inset-2 rounded-full border-2 border-primary"></div>
            
            {/* Circular frame */}
            <div className="relative w-full h-full rounded-full p-1">
              <div className="w-full h-full overflow-hidden rounded-full bg-white">
                <Image
                  src="/images/edwin.png"
                  alt="Edwin Shaju - UI/UX Designer & Frontend Developer"
                  width={450}
                  height={450}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 