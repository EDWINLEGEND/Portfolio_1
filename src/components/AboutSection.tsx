"use client";

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const AboutSection = () => {
  // Add refs for animation elements
  const sectionRef = useRef<HTMLElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  // Animation visibility states
  const [bioVisible, setBioVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);

  // Set up intersection observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        // Check which element is intersecting
        if (entry.target === bioRef.current && entry.isIntersecting) {
          setBioVisible(true);
        } else if (entry.target === experienceRef.current && entry.isIntersecting) {
          setExperienceVisible(true);
        } else if (entry.target === skillsRef.current && entry.isIntersecting) {
          setSkillsVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all the elements
    if (bioRef.current) observer.observe(bioRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const skills = [
    { 
      category: 'UI/UX Design', 
      items: ['Figma', 'Photoshop', 'Sketch', 'Prototyping', 'Wireframing', 'User Research', 'Information Architecture', 'Usability Testing']
    },
    { 
      category: 'Frontend Development', 
      items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS', 'GSAP', 'Framer Motion']
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'GitHub','Cursor', 'VS Code', 'Jira', 'Notion', 'Slack', 'Responsive Design', 'Web Accessibility']
    }
  ];

  const experiences = [
    {
      year: '2023 - Present',
      title: 'Intern UI Designer',
      company: 'Gtech Mulearn',
      description: 'Leading design solutions for enterprise clients with focus on user experience and accessibility. Working with a team of designers and working closely with developers to ensure seamless implementation of designs.'
    },
    {
      year: '2024 - 2024',
      title: 'Frontend Developer',
      company: 'Greenink.pro',
      description: 'My job was to learn more on using AI tools, React, Tailwind, Html, CSS basics'
    },
    {
      year: '2025 - 2025',
      title: 'UI Designer',
      company: 'Rablo.in',
      description: 'Created user interfaces for mobile applications and websites, focusing on user-centered design. Conducted user research and testing to improve product usability and user satisfaction metrics.'
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science Engineering',
      institution: 'Christ College of Engineering and Technology',
      year: '2023 - 2027'
    },
    {
      degree: 'UI/UX Design Certificate',
      institution: 'Google/Coursera',
      year: '2024'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
        
        {/* Bio Section with animation */}
        <div 
          ref={bioRef}
          className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 ease-out ${
            bioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            I'm a passionate UI/UX Designer and Frontend Developer with over 2 years of experience creating beautiful, 
            functional digital experiences. I combine design thinking with technical expertise to build products that users love.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            My approach focuses on understanding user needs and translating them into intuitive interfaces that solve real problems. 
            I'm constantly learning and exploring new technologies to enhance my skill set and deliver cutting-edge solutions.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            When I'm not designing or coding, you can find me exploring new design trends, contributing to open-source projects, 
            or sharing my knowledge through writing and mentoring aspiring designers and developers.
          </p>
        </div>
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Experience Timeline with animation */}
          <div 
            ref={experienceRef}
            className={`transition-all duration-1000 ease-out ${
              experienceVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">Experience & Education</h3>
            
            {/* Experience Timeline */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Work Experience</h4>
              <div className="space-y-8 relative">
                {/* Timeline line */}
                <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
                
                {experiences.map((exp, index) => (
                  <div 
                    key={index} 
                    className="ml-8 relative transition-all duration-700"
                    style={{ 
                      transitionDelay: `${200 + index * 100}ms`, 
                      opacity: experienceVisible ? 1 : 0,
                      transform: experienceVisible ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-10 top-1.5 w-4 h-4 rounded-full bg-primary"></div>
                    
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{exp.year}</div>
                    <h4 className="text-lg font-semibold mb-1">{exp.title}</h4>
                    <div className="text-primary font-medium mb-2">{exp.company}</div>
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Education */}
            <div>
              <h4 className="text-xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Education</h4>
              <div className="space-y-6 relative">
                {/* Timeline line */}
                <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
                
                {education.map((edu, index) => (
                  <div 
                    key={index} 
                    className="ml-8 relative transition-all duration-700"
                    style={{ 
                      transitionDelay: `${500 + index * 100}ms`, 
                      opacity: experienceVisible ? 1 : 0,
                      transform: experienceVisible ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-10 top-1.5 w-4 h-4 rounded-full bg-primary"></div>
                    
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{edu.year}</div>
                    <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                    <div className="text-primary font-medium">{edu.institution}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Skills with animation */}
          <div 
            ref={skillsRef}
            className={`transition-all duration-1000 ease-out ${
              skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">My Skills</h3>
            
            <div className="space-y-8">
              {skills.map((skillGroup, index) => (
                <div 
                  key={index}
                  className="transition-all duration-700"
                  style={{ 
                    transitionDelay: `${200 + index * 150}ms`, 
                    opacity: skillsVisible ? 1 : 0,
                    transform: skillsVisible ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  <h4 className="text-xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <div 
                        key={i} 
                        className="px-4 py-2 bg-white dark:bg-gray-800 shadow-md rounded-lg flex items-center transition-all duration-500"
                        style={{ 
                          transitionDelay: `${400 + i * 50}ms`, 
                          opacity: skillsVisible ? 1 : 0,
                          transform: skillsVisible ? 'scale(1)' : 'scale(0.8)'
                        }}
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        <span className="font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Stats/Achievements Section with animation */}
            <div 
              className="mt-12 transition-all duration-700"
              style={{ 
                transitionDelay: '700ms', 
                opacity: skillsVisible ? 1 : 0,
                transform: skillsVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <h3 className="text-xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Achievements</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center transition-all duration-500" style={{ transitionDelay: '800ms', opacity: skillsVisible ? 1 : 0 }}>
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-gray-700 dark:text-gray-300">Projects Completed</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center transition-all duration-500" style={{ transitionDelay: '900ms', opacity: skillsVisible ? 1 : 0 }}>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-gray-700 dark:text-gray-300">Happy Clients</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center transition-all duration-500" style={{ transitionDelay: '1000ms', opacity: skillsVisible ? 1 : 0 }}>
                  <div className="text-3xl font-bold text-primary mb-2">2+</div>
                  <div className="text-gray-700 dark:text-gray-300">Years Experience</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center transition-all duration-500" style={{ transitionDelay: '1100ms', opacity: skillsVisible ? 1 : 0 }}>
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <div className="text-gray-700 dark:text-gray-300">Design Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 