
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border border-blue-400"></div>
          ))}
        </div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-purple-400/20 animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse"></div>
    </div>
  );
};

export default AnimatedBackground;
