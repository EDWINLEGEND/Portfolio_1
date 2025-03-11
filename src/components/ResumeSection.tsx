"use client";

import Link from 'next/link';
import { useCursorHandlers } from '../hooks/useCursorHandlers';

const ResumeSection = () => {
  const buttonCursorHandlers = useCursorHandlers('button');
  
  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">My Resume</h2>
        
        {/* Resume Container */}
        <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-lg">
          
          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Edwin Shaju</h1>
            <h2 className="text-xl text-primary mb-4">UI/UX Designer & Frontend Developer</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hello@edwinshaju.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+123 456 7890</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          {/* Summary */}
          <div className="mb-10">
            <h3 className="text-xl font-bold border-b-2 border-primary pb-2 mb-4">Professional Summary</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Passionate UI/UX Designer and Frontend Developer with over 5 years of experience creating beautiful, 
              functional digital experiences. I combine design thinking with technical expertise to build products 
              that users love. My approach focuses on understanding user needs and translating them into intuitive 
              interfaces that solve real problems.
            </p>
          </div>
          
          {/* Experience */}
          <div className="mb-10">
            <h3 className="text-xl font-bold border-b-2 border-primary pb-2 mb-4">Work Experience</h3>
            
            <div className="mb-6">
              <div className="flex flex-wrap justify-between mb-1">
                <h4 className="text-lg font-semibold">Senior UI/UX Designer</h4>
                <span className="text-primary font-medium">2023 - Present</span>
              </div>
              <div className="flex flex-wrap justify-between mb-2">
                <h5 className="text-primary font-medium">Creative Agency</h5>
                <span className="text-gray-600 dark:text-gray-400">San Francisco, CA</span>
              </div>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Led design solutions for enterprise clients with focus on user experience and accessibility</li>
                <li>Managed a team of 3 junior designers, providing mentorship and guidance</li>
                <li>Conducted user research to inform design decisions and improve product usability</li>
                <li>Created design systems and style guides for consistent user experiences</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <div className="flex flex-wrap justify-between mb-1">
                <h4 className="text-lg font-semibold">Frontend Developer</h4>
                <span className="text-primary font-medium">2021 - 2023</span>
              </div>
              <div className="flex flex-wrap justify-between mb-2">
                <h5 className="text-primary font-medium">Tech Solutions Inc.</h5>
                <span className="text-gray-600 dark:text-gray-400">San Francisco, CA</span>
              </div>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Developed responsive web applications using React.js and modern frontend technologies</li>
                <li>Collaborated with UI/UX designers to implement pixel-perfect designs</li>
                <li>Optimized application performance and loading speeds</li>
                <li>Participated in code reviews and mentored junior developers</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <div className="flex flex-wrap justify-between mb-1">
                <h4 className="text-lg font-semibold">UI Designer</h4>
                <span className="text-primary font-medium">2019 - 2021</span>
              </div>
              <div className="flex flex-wrap justify-between mb-2">
                <h5 className="text-primary font-medium">Digital Studio</h5>
                <span className="text-gray-600 dark:text-gray-400">San Francisco, CA</span>
              </div>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Created user interfaces for mobile applications and websites, focusing on user-centered design</li>
                <li>Designed wireframes, mockups, and prototypes for client approval</li>
                <li>Collaborated with developers to ensure design implementation accuracy</li>
                <li>Participated in user testing and iterative design improvements</li>
              </ul>
            </div>
          </div>
          
          {/* Education */}
          <div className="mb-10">
            <h3 className="text-xl font-bold border-b-2 border-primary pb-2 mb-4">Education</h3>
            
            <div className="mb-4">
              <div className="flex flex-wrap justify-between mb-1">
                <h4 className="text-lg font-semibold">Bachelor of Science in Computer Science</h4>
                <span className="text-primary font-medium">2015 - 2019</span>
              </div>
              <div className="flex flex-wrap justify-between">
                <h5 className="text-primary font-medium">University of California, Berkeley</h5>
                <span className="text-gray-600 dark:text-gray-400">Berkeley, CA</span>
              </div>
            </div>
            
            <div>
              <div className="flex flex-wrap justify-between mb-1">
                <h4 className="text-lg font-semibold">UI/UX Design Certificate</h4>
                <span className="text-primary font-medium">2019</span>
              </div>
              <div className="flex flex-wrap justify-between">
                <h5 className="text-primary font-medium">Design Academy</h5>
                <span className="text-gray-600 dark:text-gray-400">Online</span>
              </div>
            </div>
          </div>
          
          {/* Skills */}
          <div className="mb-10">
            <h3 className="text-xl font-bold border-b-2 border-primary pb-2 mb-4">Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">UI/UX Design</h4>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'Wireframing', 'User Research'].map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Frontend Development</h4>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'].map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Download Button */}
          <div className="text-center">
            <a 
              href="#" 
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              {...buttonCursorHandlers}
            >
              Download PDF Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection; 