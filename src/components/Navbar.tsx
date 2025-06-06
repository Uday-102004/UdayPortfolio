
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Default to light mode
      document.documentElement.classList.remove('dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Save preference to localStorage
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    
    // Toggle dark class on document
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 theme-transition ${
      scrolled 
        ? 'backdrop-blur-md shadow-lg border-b border-white/10 dark:border-white/10' 
        : 'bg-transparent'
    }`}
    style={{ 
      background: scrolled 
        ? darkMode 
          ? 'rgba(0, 31, 63, 0.9)' 
          : 'rgba(255, 255, 255, 0.9)'
        : 'transparent' 
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="text-xl font-bold text-white dark:text-white hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-200"
            style={{
              color: darkMode ? 'white' : '#3b82f6'
            }}
          >
            DevPortfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  location.pathname === item.path
                    ? 'text-blue-400 dark:text-blue-400 active'
                    : ''
                }`}
                style={{
                  color: darkMode 
                    ? location.pathname === item.path 
                      ? '#60a5fa' 
                      : '#d1d5db'
                    : '#3b82f6'
                }}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Enhanced Dark/Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="relative p-3 rounded-xl transition-all duration-200 hover:scale-110 border"
              style={{
                color: darkMode ? '#d1d5db' : '#3b82f6',
                backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(59, 130, 246, 0.1)',
                borderColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(59, 130, 246, 0.2)'
              }}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <div className="relative">
                {darkMode ? (
                  <Sun size={18} className="transform rotate-0 transition-transform duration-300" />
                ) : (
                  <Moon size={18} className="transform rotate-180 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg transition-all duration-200"
              style={{
                color: darkMode ? '#d1d5db' : '#3b82f6',
                backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(59, 130, 246, 0.1)'
              }}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-colors duration-200"
              style={{
                color: darkMode ? '#d1d5db' : '#3b82f6'
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            className="md:hidden backdrop-blur-md animate-fade-in border-t"
            style={{ 
              background: darkMode ? 'rgba(0, 31, 63, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              borderColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(59, 130, 246, 0.2)'
            }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                    location.pathname === item.path
                      ? 'bg-white/10 dark:bg-white/10'
                      : 'hover:bg-white/5 dark:hover:bg-white/5'
                  }`}
                  style={{
                    color: darkMode 
                      ? location.pathname === item.path 
                        ? '#60a5fa' 
                        : '#d1d5db'
                      : '#3b82f6'
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
