
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database } from 'lucide-react';
import TypeWriter from '../components/TypeWriter';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
  const typewriterTexts = [
    "Pentapalli Uday Kumar"
  ];

  return (
    <div className="min-h-screen theme-transition relative overflow-hidden" style={{ background: `rgb(var(--navy-blue))` }}>
      <AnimatedBackground />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading with enhanced animations */}
          <div className="mb-6 md:mb-8 animate-text-reveal">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="text-white dark:text-white">Hi, I am </span>
              <TypeWriter 
                texts={typewriterTexts}
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                speed={120}
                deleteSpeed={80}
                delayBetween={3000}
              />
            </h1>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4 md:mb-6 animate-underline"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Python Developer | AI Enthusiast
            </p>
          </div>

          {/* Description */}
          <div className="mb-8 md:mb-12 animate-slide-up px-4" style={{ animationDelay: '0.3s' }}>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              I build interactive, data-driven, and modern applications that solve real-world problems using 
              <span className="text-blue-400 dark:text-blue-400 font-semibold"> Python</span>, 
              <span className="text-green-400 dark:text-green-400 font-semibold"> SQL</span>, and 
              <span className="text-purple-400 dark:text-purple-400 font-semibold"> AI technologies</span>.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12 animate-fade-in px-4" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl p-4 md:p-6 border border-gray-300/20 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-200 hover:scale-105 hover-lift">
              <Code className="w-6 md:w-8 h-6 md:h-8 text-blue-400 dark:text-blue-400 mb-3 md:mb-4 mx-auto" />
              <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-900 dark:text-white">Python Development</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Building robust applications with clean, efficient code</p>
            </div>
            
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl p-4 md:p-6 border border-gray-300/20 dark:border-white/10 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-200 hover:scale-105 hover-lift">
              <Database className="w-6 md:w-8 h-6 md:h-8 text-purple-400 dark:text-purple-400 mb-3 md:mb-4 mx-auto" />
              <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-900 dark:text-white">AI & Data Analytics</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Leveraging AI and data to create intelligent solutions</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in px-4" style={{ animationDelay: '0.9s' }}>
            <Link
              to="/projects"
              className="group bg-gray-900 dark:bg-white text-white dark:text-slate-900 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 hover-lift text-sm md:text-base"
            >
              View Projects
              <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link
              to="/contact"
              className="group bg-transparent border-2 border-blue-500 dark:border-blue-500 text-blue-500 dark:text-blue-400 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 hover-lift text-sm md:text-base"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 text-center animate-fade-in px-4" style={{ animationDelay: '1.2s' }}>
        <p className="text-gray-600 dark:text-gray-500 text-xs md:text-sm">© 2025 Uday Kumar. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
