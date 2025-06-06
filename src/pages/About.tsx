
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white relative overflow-hidden transition-colors duration-500">
      <AnimatedBackground />
      
      <div className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </h1>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Hello! I'm <span className="text-blue-400 font-semibold">Uday Kumar Pentapalli</span>, a passionate Python Developer and aspiring 
                  Data Analyst with a strong foundation in Computer Science. I'm currently 
                  pursuing my B.Tech in Computer Science and Engineering at GITAM University, 
                  Visakhapatnam.
                </p>
                
                <p>
                  My journey into technology began during my university years, where I developed 
                  a keen interest in programming and data analytics. Over time, I've worked on 
                  various projects, including a Budget Tracker web application, that helped me 
                  strengthen my skills in Python, SQL, HTML, and CSS. I'm also learning Power BI to 
                  expand my data visualization capabilities.
                </p>
                
                <p>
                  I enjoy using technology to solve real-world problems and create meaningful, 
                  user-friendly applications. With hands-on experience from an internship at 
                  Infosys and multiple certifications in Python, databases, and career development, 
                  I'm continuously working to improve both my technical and professional skills.
                </p>
                
                <p className="text-blue-400 font-semibold">
                  Passionate about Drone Technology and Robotics, I'm exploring innovative ways 
                  to integrate autonomous systems with data analytics to create next-generation solutions.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6 mt-8">
                <a 
                  href="https://linkedin.com/in/udaykumar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-100 dark:bg-slate-800/50 backdrop-blur-md rounded-lg px-4 py-2 border border-gray-300 dark:border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                
                <a 
                  href="https://github.com/Uday" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-100 dark:bg-slate-800/50 backdrop-blur-md rounded-lg px-4 py-2 border border-gray-300 dark:border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-5 h-5 text-purple-400" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-gray-300 dark:border-slate-600/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">UK</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">Python Developer</p>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full px-6 py-3 text-white font-semibold shadow-xl">
                  Python Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
