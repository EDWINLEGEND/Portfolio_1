"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const WorkSection = () => {
  const [activeTab, setActiveTab] = useState('ui-ux');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Use intersection observer to trigger animations when the section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const uiUxProjects = [
    {
      id: 1,
      title: 'E-commerce Mobile App',
      description: 'A complete UI redesign of an e-commerce mobile application focusing on user experience and conversion optimization.',
      image: '/placeholder-uiux-1.jpg',
      bgColor: 'from-purple-500 to-indigo-600',
      tools: ['Figma', 'Prototyping', 'User Research'],
    },
    {
      id: 2,
      title: 'Banking Dashboard',
      description: 'User-friendly interface for a banking dashboard that simplifies complex financial data visualization.',
      image: '/placeholder-uiux-2.jpg',
      bgColor: 'from-blue-500 to-indigo-600',
      tools: ['Adobe XD', 'Wireframing', 'User Testing'],
    },
    {
      id: 3,
      title: 'Travel Booking Platform',
      description: 'End-to-end design for a travel booking platform with focus on intuitive booking process and personalized recommendations.',
      image: '/placeholder-uiux-3.jpg',
      bgColor: 'from-teal-500 to-blue-600',
      tools: ['Sketch', 'Figma', 'Information Architecture'],
    },
  ];

  const webDevProjects = [
    {
      id: 1,
      title: 'E-learning Platform',
      description: 'Responsive web application for online learning with video courses, quizzes, and progress tracking.',
      image: '/placeholder-webdev-1.jpg',
      bgColor: 'from-orange-500 to-red-600',
      tools: ['React.js', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Real Estate Website',
      description: 'Feature-rich property listing website with search, filters, and interactive maps.',
      image: '/placeholder-webdev-2.jpg',
      bgColor: 'from-red-500 to-pink-600',
      tools: ['Next.js', 'Tailwind CSS', 'Mapbox'],
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team workspace.',
      image: '/placeholder-webdev-3.jpg',
      bgColor: 'from-green-500 to-teal-600',
      tools: ['Vue.js', 'Firebase', 'Vuetify'],
    },
  ];

  const mobileApps = [
    {
      id: 1,
      title: 'Fitness Tracking App',
      description: 'Mobile application for tracking workouts, nutrition, and progress with personalized recommendations.',
      image: '/placeholder-mobile-1.jpg',
      bgColor: 'from-cyan-500 to-blue-600',
      tools: ['React Native', 'Redux', 'Firebase'],
    },
    {
      id: 2,
      title: 'Social Media App',
      description: 'Feature-rich social networking app with real-time messaging, posts, and user interactions.',
      image: '/placeholder-mobile-2.jpg',
      bgColor: 'from-indigo-500 to-purple-600',
      tools: ['Flutter', 'Firebase', 'GetX'],
    },
    {
      id: 3,
      title: 'Food Delivery App',
      description: 'On-demand food delivery application with real-time order tracking and payment integration.',
      image: '/placeholder-mobile-3.jpg',
      bgColor: 'from-yellow-500 to-orange-600',
      tools: ['Swift', 'Core Data', 'Stripe'],
    },
  ];

  const projects = {
    'ui-ux': uiUxProjects,
    'web': webDevProjects,
    'mobile': mobileApps,
  };

  return (
    <section 
      id="work" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gray-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-blue-600/30 blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-purple-600/30 blur-3xl animate-float-medium"></div>
          <div className="absolute top-3/4 left-2/3 w-32 h-32 rounded-full bg-cyan-600/30 blur-3xl animate-float-fast"></div>
        </div>
      </div>

      <div className={`container mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white relative inline-block">
            My Work
            <span className="absolute -z-10 inset-0 bg-primary/20 blur-xl"></span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A selection of my recent projects showcasing my skills and expertise
          </p>
        </div>
        
        {/* Tabs with animation */}
        <div className="flex justify-center mb-12 relative">
          <div className="flex space-x-2 p-1 bg-gray-900/50 backdrop-blur-sm rounded-full">
            <button
              onClick={() => setActiveTab('ui-ux')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 relative ${
                activeTab === 'ui-ux' 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="relative z-10">UI/UX Design</span>
              {activeTab === 'ui-ux' && (
                <span className="absolute inset-0 bg-primary rounded-full animate-pulse-slow -z-0"></span>
              )}
            </button>
            
            <button
              onClick={() => setActiveTab('web')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 relative ${
                activeTab === 'web' 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="relative z-10">Web Development</span>
              {activeTab === 'web' && (
                <span className="absolute inset-0 bg-primary rounded-full animate-pulse-slow -z-0"></span>
              )}
            </button>
            
            <button
              onClick={() => setActiveTab('mobile')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 relative ${
                activeTab === 'mobile' 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="relative z-10">Mobile Apps</span>
              {activeTab === 'mobile' && (
                <span className="absolute inset-0 bg-primary rounded-full animate-pulse-slow -z-0"></span>
              )}
            </button>
          </div>
        </div>
        
        {/* Projects Grid with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[activeTab as keyof typeof projects].map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-xl group relative"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animation: isVisible ? `fadeInUp ${0.3 + index * 0.1}s ease forwards` : 'none',
                opacity: 0,
                transform: 'translateY(20px)',
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgColor} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
              
              {/* Project Image Placeholder (with animated overlay) */}
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10"></div>
                <div 
                  className="absolute inset-0 bg-gray-800 flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: hoveredCard === project.id ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.5s ease-out'
                  }}
                >
                  <div className="text-center text-white">
                    {!project.image && <span>Image Placeholder</span>}
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tools Used */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tools.map((tool, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full inline-block hover:bg-primary hover:text-white transition-colors duration-300"
                      style={{
                        animation: hoveredCard === project.id 
                          ? `fadeInRight ${0.3 + i * 0.1}s ease forwards` 
                          : 'none',
                        opacity: hoveredCard === project.id ? 1 : 0.6,
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                {/* View Project Button (slides in on hover) */}
                <div 
                  className="mt-6 overflow-hidden relative h-8"
                >
                  <button 
                    className="absolute inset-0 bg-primary text-white px-4 py-1 rounded-md text-sm transition-all duration-300 group-hover:translate-y-0 translate-y-full hover:bg-primary-dark"
                  >
                    View Project
                  </button>
                  <div className="absolute top-0 left-0 w-10 h-10 bg-primary/30 rounded-br-full blur-lg"></div>
                  <div className="absolute bottom-0 right-0 w-10 h-10 bg-primary/30 rounded-tl-full blur-lg"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Work button with animation */}
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-block bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 relative group"
          >
            <span className="relative z-10">View All Projects</span>
            <span className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 bg-primary opacity-0 group-hover:opacity-100"></span>
          </a>
        </div>
      </div>
      
      {/* Add keyframes for fadeInUp and fadeInRight animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WorkSection; 