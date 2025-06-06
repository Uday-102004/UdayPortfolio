
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Gandhi Institute of Technology and Management, Visakhapatnam, Andhra Pradesh",
      duration: "2022-2026",
      description: "Focused on Data Analytics, Python Programming, and SQL. Engaged in projects involving data visualization with Power BI, real-time analytics using Pandas and Matplotlib, and end-to-end solutions for budget tracking and financial insights.",
      icon: "🎓",
      status: "Current"
    },
    {
      degree: "Intermediate (Class 12)",
      institution: "Apex Junior College",
      duration: "2020-2022",
      description: "Studied core subjects including Mathematics, Physics, and Chemistry with a focus on competitive engineering preparation.",
      icon: "📚",
      status: "Completed"
    },
    {
      degree: "Schooling (Class 5-10)",
      institution: "Fort City School",
      duration: "2014-2020",
      description: "Gained strong academic fundamentals and developed an early interest in computers, problem-solving, and innovation.",
      icon: "🏫",
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white relative overflow-hidden transition-colors duration-500">
      <AnimatedBackground />
      
      <div className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Education
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              My academic journey and continuous learning path in technology and engineering
            </p>
          </div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={edu.degree}
                className="group bg-gray-100 dark:bg-slate-800/50 backdrop-blur-md rounded-xl border border-gray-300 dark:border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                        {edu.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl lg:text-2xl font-bold text-black dark:text-white group-hover:text-blue-400 transition-colors">
                            {edu.degree}
                          </h3>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm lg:text-base">{edu.institution}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 text-blue-400">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm font-medium">{edu.duration}</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'Current' 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                              : 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Learning */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-8 text-center">Continuous Learning</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-100 dark:bg-slate-800/30 rounded-xl p-6 border border-gray-300 dark:border-slate-700/50">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">Technical Skills Development</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    Python Programming & Data Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Database Management & SQL
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Power BI & Data Visualization
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 dark:bg-slate-800/30 rounded-xl p-6 border border-gray-300 dark:border-slate-700/50">
                <h3 className="text-lg font-semibold text-purple-400 mb-4">Research Interests</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Drone Technology & Autonomous Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    Robotics & IoT Applications
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    Machine Learning & AI
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
