"use client";

import Image from 'next/image';
import Link from 'next/link';

const ProjectsSection = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'Medical Dashboard',
      description: 'A comprehensive dashboard for healthcare professionals to monitor patient data and medical records.',
      bgColor: 'from-blue-500 to-indigo-600',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      demoLink: 'https://example.com/demo1',
      githubLink: 'https://github.com/example/project1',
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with product management, cart functionality, and payment processing.',
      bgColor: 'from-pink-500 to-purple-600',
      icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
      techStack: ['Next.js', 'MongoDB', 'Stripe', 'Vercel'],
      demoLink: 'https://example.com/demo2',
      githubLink: 'https://github.com/example/project2',
    },
    {
      id: 3,
      title: 'Social Media App',
      description: 'Mobile-first social networking application with real-time chat and content sharing features.',
      bgColor: 'from-green-500 to-teal-600',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      techStack: ['React Native', 'Firebase', 'Redux', 'Socket.io'],
      demoLink: 'https://example.com/demo3',
      githubLink: 'https://github.com/example/project3',
    },
  ];

  const designGallery = [
    { id: 1, title: 'Mobile App UI', bgColor: 'from-indigo-500 to-purple-600', category: 'Mobile' },
    { id: 2, title: 'Web Dashboard', bgColor: 'from-blue-500 to-cyan-600', category: 'Web' },
    { id: 3, title: 'E-commerce UI Kit', bgColor: 'from-pink-500 to-rose-600', category: 'UI Kit' },
    { id: 4, title: 'Landing Page', bgColor: 'from-amber-500 to-orange-600', category: 'Web' },
    { id: 5, title: 'Brand Identity', bgColor: 'from-emerald-500 to-teal-600', category: 'Branding' },
    { id: 6, title: 'App Icon Set', bgColor: 'from-violet-500 to-purple-600', category: 'Icon Design' },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Projects</h2>
        
        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12`}
            >
              {/* Project Image */}
              <div className="md:w-1/2">
                <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bgColor} flex items-center justify-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={project.icon} />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project Links */}
                <div className="flex gap-4">
                  <Link 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
                  >
                    Live Demo
                  </Link>
                  <Link 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-gray-200 dark:bg-gray-700 rounded-full font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Design Gallery */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">Design Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {designGallery.map((design) => (
              <div 
                key={design.id} 
                className="relative group aspect-square overflow-hidden rounded-lg"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${design.bgColor} flex items-center justify-center`}>
                  <span className="text-white text-lg font-medium">{design.title}</span>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white">
                  <h4 className="text-lg font-semibold text-center mb-2">{design.title}</h4>
                  <span className="px-3 py-1 bg-primary/80 rounded-full text-sm">{design.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 