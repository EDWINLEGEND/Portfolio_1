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
          ? 'bg-black/20 backdrop-blur-md shadow-lg py-3 border-b border-white/10' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Logo centered on mobile, left on desktop */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <Link 
            href="/" 
            className="text-xl font-bold text-white mb-4 md:mb-0 hover:text-primary transition-colors"
          >
            <span className="font-bold">Edwin</span> Shaju
          </Link>
          
          {/* Navigation - centered and larger */}
          <nav className="flex justify-center space-x-8">
            <Link 
              href="#home" 
              className="nav-link text-white text-lg font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className="nav-link text-white text-lg font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              href="#work" 
              className="nav-link text-white text-lg font-medium hover:text-primary transition-colors"
            >
              Work
            </Link>
            <Link 
              href="#projects" 
              className="nav-link text-white text-lg font-medium hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="#contact" 
              className="nav-link text-white text-lg font-medium hover:text-primary transition-colors"
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