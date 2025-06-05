
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Navy Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001f3f] via-[#002a5c] to-[#001122] dark:from-[#001f3f] dark:via-[#002a5c] dark:to-[#001122]"></div>
      
      {/* Light mode gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-gray-100 dark:hidden"></div>
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div 
          className="w-full h-full navy-pattern"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      {/* Animated Glowing Particles - Enhanced for navy theme */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              background: `rgba(${59 + Math.random() * 100}, ${130 + Math.random() * 50}, ${246}, ${0.4 + Math.random() * 0.6})`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              boxShadow: `0 0 ${6 + Math.random() * 10}px rgba(59, 130, 246, 0.6)`
            }}
          ></div>
        ))}
      </div>

      {/* Larger Glowing Orbs */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              background: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.2) 40%, transparent 70%)`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          ></div>
        ))}
      </div>

      {/* Elegant Moving Lines */}
      <div className="absolute inset-0 opacity-30 dark:opacity-15">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"
            style={{
              top: `${15 + i * 12}%`,
              left: '-50%',
              right: '-50%',
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${6 + Math.random() * 3}s`,
              transform: `rotate(${-3 + Math.random() * 6}deg)`
            }}
          ></div>
        ))}
      </div>

      {/* Floating Geometric Shapes - Enhanced */}
      <div className="absolute top-20 left-10 w-40 h-40 border border-blue-400/20 rotate-45 animate-spin opacity-20" style={{ animationDuration: '30s' }}></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 border border-purple-400/20 animate-bounce opacity-15" style={{ animationDuration: '5s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse opacity-30"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-blue-300/20 rounded-lg rotate-12 animate-pulse opacity-25"></div>
      
      {/* Enhanced Twinkling Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-blue-400 dark:bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 4}s infinite`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: 0.4 + Math.random() * 0.6
            }}
          ></div>
        ))}
      </div>

      {/* Subtle Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-500/5 to-transparent"></div>
    </div>
  );
};

export default AnimatedBackground;
