"use client";

import { useState, useRef, useEffect } from 'react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for glow effects
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset form and show success message
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
    setSubmitMessage('Your message has been sent successfully!');
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setSubmitMessage('');
    }, 5000);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="py-20 relative bg-gray-950 overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black opacity-90 z-0"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, index) => (
          <div 
            key={index}
            className="absolute w-1 h-1 rounded-full bg-white opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 7}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Moving gradient highlight */}
      <div 
        className="absolute w-1/3 h-1/3 rounded-full blur-3xl opacity-10 z-0 bg-primary"
        style={{
          left: `${mousePosition.x - 150}px`,
          top: `${mousePosition.y - 150}px`,
          transition: 'left 0.5s ease-out, top 0.5s ease-out',
        }}
      ></div>
      
      <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white relative inline-block">
            Get In Touch
            <span className="absolute -z-10 inset-0 bg-primary/20 blur-xl"></span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's discuss your project or just say hello! I'm always open to new opportunities and collaborations.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div 
            className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:border-primary/30 transition-colors duration-500 shadow-xl relative overflow-hidden group"
            style={{
              animation: isVisible ? 'fadeInLeft 0.8s ease forwards 0.2s' : 'none',
              opacity: 0,
            }}
          >
            {/* Background glow effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/0 via-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6 relative">
              Contact Information
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group/item">
                <div className="bg-gray-800 p-3 rounded-lg text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-400 font-medium">Email</h4>
                  <a href="mailto:edwin@example.com" className="text-white hover:text-primary transition-colors group-hover/item:text-primary">
                    edwin@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group/item">
                <div className="bg-gray-800 p-3 rounded-lg text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-400 font-medium">Phone</h4>
                  <a href="tel:+1234567890" className="text-white hover:text-primary transition-colors group-hover/item:text-primary">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group/item">
                <div className="bg-gray-800 p-3 rounded-lg text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-400 font-medium">Location</h4>
                  <p className="text-white group-hover/item:text-primary transition-colors">
                    New York, NY, United States
                  </p>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-10">
              <h4 className="text-white font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-primary transition-all duration-300 transform hover:scale-110 ${
                      hoveredSocial === social.name ? 'bg-primary text-white animate-pulse-slow' : ''
                    }`}
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div 
            className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-xl"
            style={{
              animation: isVisible ? 'fadeInRight 0.8s ease forwards 0.4s' : 'none',
              opacity: 0,
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 relative">
              Send Me a Message
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></span>
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    required
                    className={`w-full bg-gray-800/50 border ${
                      focusedField === 'name' ? 'border-primary' : 'border-gray-700'
                    } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 ring-primary/50 transition-all duration-300`}
                    placeholder="Your Name"
                  />
                  {focusedField === 'name' && (
                    <span className="absolute inset-0 rounded-lg bg-primary/10 -z-10 animate-pulse-slow"></span>
                  )}
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    required
                    className={`w-full bg-gray-800/50 border ${
                      focusedField === 'email' ? 'border-primary' : 'border-gray-700'
                    } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 ring-primary/50 transition-all duration-300`}
                    placeholder="Your Email"
                  />
                  {focusedField === 'email' && (
                    <span className="absolute inset-0 rounded-lg bg-primary/10 -z-10 animate-pulse-slow"></span>
                  )}
                </div>
              </div>
              
              <div className="mb-6 relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={handleBlur}
                  required
                  className={`w-full bg-gray-800/50 border ${
                    focusedField === 'subject' ? 'border-primary' : 'border-gray-700'
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 ring-primary/50 transition-all duration-300`}
                  placeholder="Subject"
                />
                {focusedField === 'subject' && (
                  <span className="absolute inset-0 rounded-lg bg-primary/10 -z-10 animate-pulse-slow"></span>
                )}
              </div>
              
              <div className="mb-6 relative">
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  required
                  rows={5}
                  className={`w-full bg-gray-800/50 border ${
                    focusedField === 'message' ? 'border-primary' : 'border-gray-700'
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 ring-primary/50 transition-all duration-300 resize-none`}
                  placeholder="Your Message"
                />
                {focusedField === 'message' && (
                  <span className="absolute inset-0 rounded-lg bg-primary/10 -z-10 animate-pulse-slow"></span>
                )}
              </div>
              
              <div className="relative">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 relative overflow-hidden group"
                >
                  <span className="relative z-10 inline-flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>Send Message</>
                    )}
                  </span>
                  <span className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-500 bg-gradient-to-r from-primary-dark to-primary rounded-lg -z-0"></span>
                </button>
                
                {/* Success message */}
                {submitMessage && (
                  <div className="mt-4 bg-green-900/30 border border-green-500 text-green-500 px-4 py-3 rounded-lg animate-fadeIn">
                    {submitMessage}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Add keyframes for fadeIn animations */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection; 