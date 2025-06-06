
import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

const Skills = () => {
  const programmingLanguages = [
    { name: 'Python', level: 90, color: 'bg-blue-500' },
    { name: 'SQL', level: 85, color: 'bg-green-500' },
    { name: 'Excel', level: 80, color: 'bg-emerald-500' }
  ];

  const librariesTools = [
    { name: 'NumPy', level: 85, color: 'bg-blue-600' },
    { name: 'Pandas', level: 92, color: 'bg-purple-500' },
    { name: 'Matplotlib', level: 82, color: 'bg-orange-500' }
  ];

  const webTechnologies = [
    { name: 'HTML', level: 75, color: 'bg-orange-600' },
    { name: 'CSS', level: 70, color: 'bg-blue-400' },
    { name: 'GitHub', level: 80, color: 'bg-gray-600' }
  ];

  const renderSkillSection = (title: string, skills: any[], icon: string) => (
    <div className="bg-gray-100 dark:bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-300 dark:border-slate-700/50 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="text-2xl">{icon}</div>
        <h3 className="text-xl font-semibold text-black dark:text-white">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 dark:text-gray-300 font-medium">{skill.name}</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-300 dark:bg-slate-700 rounded-full h-2.5">
              <div 
                className={`${skill.color} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white relative overflow-hidden transition-colors duration-500">
      <AnimatedBackground />
      
      <div className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Core programming languages I work with
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Skills Sections */}
            <div className="space-y-8">
              {renderSkillSection("Programming Languages", programmingLanguages, "💻")}
              {renderSkillSection("Libraries/Tools", librariesTools, "🛠️")}
              {renderSkillSection("Web Technologies", webTechnologies, "🌐")}
            </div>

            {/* Skills Distribution Chart */}
            <div className="bg-gray-100 dark:bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-300 dark:border-slate-700/50 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-2xl">📊</div>
                <h3 className="text-xl font-semibold text-black dark:text-white">Skills Distribution</h3>
              </div>
              
              <div className="relative w-64 h-64 mx-auto">
                {/* Donut Chart Placeholder */}
                <div className="w-full h-full rounded-full border-8 border-gray-300 dark:border-slate-700 relative overflow-hidden">
                  <div className="absolute inset-0 rounded-full" style={{
                    background: `conic-gradient(
                      from 0deg,
                      #3b82f6 0deg 126deg,
                      #10b981 126deg 216deg,
                      #f59e0b 216deg 288deg,
                      #6366f1 288deg 360deg
                    )`
                  }}>
                    <div className="absolute inset-4 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-black dark:text-white">90%</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Average</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Programming</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Tools</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Web</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-purple-500 rounded"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Other</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            <div className="text-center p-6 bg-gray-100 dark:bg-slate-800/30 rounded-lg border border-gray-300 dark:border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-3xl mb-3">🤖</div>
              <h4 className="font-semibold text-black dark:text-white mb-2">Drone Technology</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Autonomous flight systems</p>
            </div>
            
            <div className="text-center p-6 bg-gray-100 dark:bg-slate-800/30 rounded-lg border border-gray-300 dark:border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-3">🔧</div>
              <h4 className="font-semibold text-black dark:text-white mb-2">Robotics</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Embedded systems & IoT</p>
            </div>
            
            <div className="text-center p-6 bg-gray-100 dark:bg-slate-800/30 rounded-lg border border-gray-300 dark:border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
              <div className="text-3xl mb-3">📈</div>
              <h4 className="font-semibold text-black dark:text-white mb-2">Data Analytics</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Statistical analysis & ML</p>
            </div>
            
            <div className="text-center p-6 bg-gray-100 dark:bg-slate-800/30 rounded-lg border border-gray-300 dark:border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-3xl mb-3">☁️</div>
              <h4 className="font-semibold text-black dark:text-white mb-2">Cloud Computing</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">AWS & Azure basics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
