
import React from 'react';
import { ExternalLink, Calendar, Award } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const Certificates = () => {
  const certificates = [
    {
      title: "Python Foundation Certification",
      issuer: "TechCorp Academy",
      description: "Covers basic Python programming concepts and foundational coding skills.",
      issueDate: "August 2024",
      category: "Programming",
      link: "#"
    },
    {
      title: "Database Management System",
      issuer: "DataTech Institute",
      description: "A certification covering core DBMS concepts like data models, ER diagrams, normalization, and basic SQL.",
      issueDate: "August 2024",
      category: "Database",
      link: "#"
    },
    {
      title: "TCS iON Career Edge – Young Professional",
      issuer: "TCS iON",
      description: "Covers essential employability skills including communication, soft skills, and digital literacy for young professionals.",
      issueDate: "April 2025",
      category: "Professional Development",
      link: "#"
    },
    {
      title: "Software Engineering and Agile Software Development",
      issuer: "AgileLearn Platform",
      description: "A certification covering software engineering principles and Agile methodologies for efficient and adaptive software development.",
      issueDate: "August 2024",
      category: "Software Engineering",
      link: "#"
    },
    {
      title: "AI using Python",
      issuer: "Infosys Springboard",
      description: "Comprehensive certification covering artificial intelligence concepts and implementation using Python programming language.",
      issueDate: "Completed",
      category: "AI & Machine Learning",
      link: "#"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Programming': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'Database': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'Professional Development': return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      case 'Software Engineering': return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      case 'AI & Machine Learning': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming': return '💻';
      case 'Database': return '🗄️';
      case 'Professional Development': return '🎯';
      case 'Software Engineering': return '⚙️';
      case 'AI & Machine Learning': return '🤖';
      default: return '📜';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white relative overflow-hidden transition-colors duration-500">
      <AnimatedBackground />
      
      <div className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Certificates
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Professional certifications and achievements that demonstrate my commitment to continuous learning and skill development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <div 
                key={cert.title}
                className="group bg-gray-100 dark:bg-slate-800/50 backdrop-blur-md rounded-xl border border-gray-300 dark:border-slate-700/50 hover:border-blue-500/50 transition-all duration-200 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-xl shadow-lg">
                        {getCategoryIcon(cert.category)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-blue-400 transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.issuer}</p>
                      </div>
                    </div>
                    
                    <a 
                      href={cert.link}
                      className="p-2 bg-gray-200 dark:bg-slate-700/50 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600/50 transition-colors opacity-0 group-hover:opacity-100"
                      title="View Certificate"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(cert.category)}`}>
                      {cert.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-blue-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Issued: {cert.issueDate}</span>
                    </div>
                    
                    <a 
                      href={cert.link}
                      className="flex items-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-blue-500/50"
                    >
                      <Award className="w-4 h-4" />
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="mt-16 grid md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-center p-6 bg-gray-100 dark:bg-slate-800/30 rounded-xl border border-gray-300 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-blue-400 mb-2">5</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Total Certificates</div>
            </div>
            
            <div className="text-center p-6 bg-gray-100 dark:bg-slate-800/30 rounded-xl border border-gray-300 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-green-400 mb-2">4</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Technical Skills</div>
            </div>
            
            <div className="text-center p-6 bg-gray-100 dark:bg-slate-800/30 rounded-xl border border-gray-300 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-purple-400 mb-2">1</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Professional Development</div>
            </div>
            
            <div className="text-center p-6 bg-gray-100 dark:bg-slate-800/30 rounded-xl border border-gray-300 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-orange-400 mb-2">2024</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Most Recent Year</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Always Learning</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                I'm committed to continuous learning and professional development. Currently pursuing certifications in AI using Python and Prompt Engineering.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <span className="px-4 py-2 bg-green-600/20 text-green-400 rounded-lg text-sm border border-green-500/50">✅ AI using Python – Infosys Springboard (Completed)</span>
                <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg text-sm border border-blue-500/50">🔄 Prompt Engineering – In Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
