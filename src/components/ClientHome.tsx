"use client";

import { useState, useEffect } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import WorkSection from './WorkSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import ChatBot from './ChatBot';
import LoadingScreen from './LoadingScreen';
import CustomCursor from './CustomCursor';

const ClientHome = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure minimum loading time for visual effect
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen finishLoading={() => setLoading(false)} />
      ) : (
        <>
          <CustomCursor />
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <WorkSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
          <ChatBot />
        </>
      )}
    </>
  );
};

export default ClientHome; 