
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
    <div className="min-h-screen bg-slate-900 dark:bg-slate-900 text-white dark:text-white relative overflow-hidden page-transition">
      <AnimatedBackground />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white dark:text-white">Hi, I am </span>
              <TypeWriter 
                texts={typewriterTexts}
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent"
                speed={150}
                deleteSpeed={100}
                delayBetween={2000}
              />
            </h1>
            <p className="text-lg md:text-xl text-gray-300 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Python Developer | AI Enthusiast
            </p>
          </div>

          {/* Description */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-base md:text-lg text-gray-400 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              I build interactive, data-driven, and modern applications that solve real-world problems using 
              <span className="text-blue-400 dark:text-blue-400 font-semibold"> Python</span>, 
              <span className="text-green-400 dark:text-green-400 font-semibold"> SQL</span>, and 
              <span className="text-purple-400 dark:text-purple-400 font-semibold"> AI technologies</span>.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-slate-800/50 dark:bg-slate-800/50 backdrop-blur-md rounded-lg p-6 border border-slate-700/50 dark:border-slate-700/50 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-150 hover:scale-105 hover-lift">
              <Code className="w-8 h-8 text-blue-400 dark:text-blue-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2 text-white dark:text-white">Python Development</h3>
              <p className="text-gray-400 dark:text-gray-400 text-sm">Building robust applications with clean, efficient code</p>
            </div>
            
            <div className="bg-slate-800/50 dark:bg-slate-800/50 backdrop-blur-md rounded-lg p-6 border border-slate-700/50 dark:border-slate-700/50 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-150 hover:scale-105 hover-lift">
              <Database className="w-8 h-8 text-purple-400 dark:text-purple-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2 text-white dark:text-white">AI & Data Analytics</h3>
              <p className="text-gray-400 dark:text-gray-400 text-sm">Leveraging AI and data to create intelligent solutions</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <Link
              to="/projects"
              className="group bg-white dark:bg-white text-slate-900 dark:text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-100 transition-all duration-150 flex items-center justify-center gap-2 hover:scale-105 hover-lift"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
            </Link>
            
            <Link
              to="/contact"
              className="group bg-transparent border-2 border-blue-500 dark:border-blue-500 text-blue-400 dark:text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-all duration-150 flex items-center justify-center gap-2 hover:scale-105 hover-lift"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 text-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <p className="text-gray-500 dark:text-gray-500 text-sm">© 2025 Uday Kumar. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
