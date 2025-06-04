
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const Projects = () => {
  const projects = [
    {
      title: "Drone Navigation System",
      description: "An autonomous drone navigation system using computer vision and machine learning for obstacle detection and path planning.",
      techStack: ["Python", "OpenCV", "TensorFlow", "ROS"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Robotics"
    },
    {
      title: "Budget Tracker Web App",
      description: "A comprehensive budget tracking application with data visualization, expense categorization, and financial insights.",
      techStack: ["Python", "Flask", "SQL", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Web Development"
    },
    {
      title: "IoT Smart Agriculture",
      description: "IoT-based smart agriculture system with sensors for soil moisture, temperature monitoring, and automated irrigation.",
      techStack: ["Python", "Arduino", "MQTT", "Raspberry Pi"],
      githubUrl: "#",
      liveUrl: "#",
      category: "IoT"
    },
    {
      title: "Stock Price Predictor",
      description: "Machine learning model for stock price prediction using historical data and technical indicators.",
      techStack: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Data Science"
    },
    {
      title: "Robotic Arm Control",
      description: "A 6-DOF robotic arm control system with inverse kinematics and real-time motion planning.",
      techStack: ["Python", "NumPy", "PyBullet", "ROS"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Robotics"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Interactive dashboard for weather data analysis with predictive modeling and visualization.",
      techStack: ["Python", "Dash", "Plotly", "API Integration"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Data Analytics"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Robotics': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50';
      case 'Web Development': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'IoT': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'Data Science': return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      case 'Data Analytics': return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getTechStackColor = (tech: string) => {
    switch (tech) {
      case 'Python': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'SQL': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'NumPy': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50';
      case 'Pandas': return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      case 'Matplotlib': return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/50';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my work in drone technology, robotics, data analytics, and software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="group bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a 
                        href={project.githubUrl}
                        className="p-2 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors"
                        title="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a 
                        href={project.liveUrl}
                        className="p-2 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className={`px-2 py-1 rounded text-xs font-medium border ${getTechStackColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="px-6 pb-6">
                  <div className="flex gap-3">
                    <a 
                      href={project.githubUrl}
                      className="flex-1 bg-slate-700/50 hover:bg-slate-600/50 text-center py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a 
                      href={project.liveUrl}
                      className="flex-1 bg-blue-600/50 hover:bg-blue-500/50 text-center py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Interested in collaborating?</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <a 
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
