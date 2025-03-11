"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Logo centered on mobile, left on desktop */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <Link 
            href="/" 
            className="text-xl font-bold text-white mb-4 md:mb-0"
          >
            <span className="font-bold">Edwin</span> Shaju
          </Link>
          
          {/* Navigation - centered and larger */}
          <nav className="flex justify-center space-x-8">
            <Link 
              href="#home" 
              className="nav-link text-white text-lg font-medium hover:text-white/80"
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className="nav-link text-white text-lg font-medium hover:text-white/80"
            >
              About
            </Link>
            <Link 
              href="#work" 
              className="nav-link text-white text-lg font-medium hover:text-white/80"
            >
              Work
            </Link>
            <Link 
              href="#projects" 
              className="nav-link text-white text-lg font-medium hover:text-white/80"
            >
              Projects
            </Link>
            <Link 
              href="#contact" 
              className="nav-link text-white text-lg font-medium hover:text-white/80"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 