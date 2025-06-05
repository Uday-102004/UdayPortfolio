
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
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
      // Default to dark mode
      document.documentElement.classList.add('dark');
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
        ? 'backdrop-blur-md shadow-lg border-b border-white/10' 
        : 'bg-transparent'
    }`}
    style={{ 
      background: scrolled ? 'rgba(var(--navy-blue), 0.9)' : 'transparent' 
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="text-xl font-bold text-white dark:text-white hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-200"
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
                    : 'text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Enhanced Dark/Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="relative p-3 rounded-xl text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-200 hover:scale-110 border border-white/10 hover:border-white/20"
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
              className="p-2 rounded-lg text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-200"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white p-2 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden backdrop-blur-md animate-fade-in border-t border-white/10" style={{ background: 'rgba(var(--navy-blue), 0.95)' }}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                    location.pathname === item.path
                      ? 'text-blue-400 dark:text-blue-400 bg-white/10'
                      : 'text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-white/5'
                  }`}
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
