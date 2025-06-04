
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Zap } from 'lucide-react';
import TypeWriter from '../components/TypeWriter';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
  const typewriterTexts = [
    "Pentapalli Uday Kumar",
    "Python Developer",
    "Data Analyst",
    "Drone Technology Enthusiast",
    "Robotics Engineer"
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">Hi, I'm </span>
              <TypeWriter 
                texts={typewriterTexts}
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent"
                speed={150}
                deleteSpeed={100}
                delayBetween={2000}
              />
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Aspiring Data Analyst | Python Developer
            </p>
          </div>

          {/* Description */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              I build interactive, data-driven, and modern applications that solve real-world problems using 
              <span className="text-blue-400 font-semibold"> Python</span>, 
              <span className="text-green-400 font-semibold"> SQL</span>, and 
              <span className="text-purple-400 font-semibold"> data visualization tools</span>.
              Passionate about <span className="text-cyan-400 font-semibold">Drone Technology</span> and 
              <span className="text-orange-400 font-semibold"> Robotics</span>.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="bg-slate-800/50 backdrop-blur-md rounded-lg p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <Code className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Python Development</h3>
              <p className="text-gray-400 text-sm">Building robust applications with clean, efficient code</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-md rounded-lg p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <Database className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Data Analytics</h3>
              <p className="text-gray-400 text-sm">Transforming data into actionable insights</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-md rounded-lg p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <Zap className="w-8 h-8 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Drone & Robotics</h3>
              <p className="text-gray-400 text-sm">Exploring autonomous systems and IoT solutions</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <Link
              to="/projects"
              className="group bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/contact"
              className="group bg-transparent border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 text-center animate-fade-in" style={{ animationDelay: '2s' }}>
        <p className="text-gray-500 text-sm">© 2025 Uday Kumar. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
