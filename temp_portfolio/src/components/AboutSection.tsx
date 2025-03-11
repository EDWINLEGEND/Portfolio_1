"use client";

import Image from 'next/image';

const AboutSection = () => {
  const skills = [
    { 
      category: 'UI/UX Design', 
      items: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'Wireframing', 'User Research', 'Information Architecture', 'Usability Testing']
    },
    { 
      category: 'Frontend Development', 
      items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS', 'GSAP', 'Framer Motion']
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'GitHub', 'VS Code', 'Jira', 'Notion', 'Slack', 'Responsive Design', 'Web Accessibility']
    }
  ];

  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior UI/UX Designer',
      company: 'Creative Agency',
      description: 'Leading design solutions for enterprise clients with focus on user experience and accessibility. Managing a team of junior designers and working closely with developers to ensure seamless implementation of designs.'
    },
    {
      year: '2021 - 2023',
      title: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      description: 'Developed responsive web applications using React.js and modern frontend technologies. Collaborated with designers to implement pixel-perfect interfaces and optimized performance for high-traffic web applications.'
    },
    {
      year: '2019 - 2021',
      title: 'UI Designer',
      company: 'Digital Studio',
      description: 'Created user interfaces for mobile applications and websites, focusing on user-centered design. Conducted user research and testing to improve product usability and user satisfaction metrics.'
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of California, Berkeley',
      year: '2015 - 2019'
    },
    {
      degree: 'UI/UX Design Certificate',
      institution: 'Design Academy',
      year: '2019'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
        
        {/* Bio Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            I'm a passionate UI/UX Designer and Frontend Developer with over 5 years of experience creating beautiful, 
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
          {/* Left Column: Experience Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Experience & Education</h3>
            
            {/* Experience Timeline */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Work Experience</h4>
              <div className="space-y-8 relative">
                {/* Timeline line */}
                <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
                
                {experiences.map((exp, index) => (
                  <div key={index} className="ml-8 relative">
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
                  <div key={index} className="ml-8 relative">
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

          {/* Right Column: Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">My Skills</h3>
            
            <div className="space-y-8">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="text-xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <div 
                        key={i} 
                        className="px-4 py-2 bg-white dark:bg-gray-800 shadow-md rounded-lg flex items-center"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        <span className="font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Stats/Achievements Section */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Achievements</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-gray-700 dark:text-gray-300">Projects Completed</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-gray-700 dark:text-gray-300">Happy Clients</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-gray-700 dark:text-gray-300">Years Experience</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
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