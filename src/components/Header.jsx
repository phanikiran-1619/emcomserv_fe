import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/#about', section: 'about' },
    { name: 'Services', path: '/#services', section: 'services' },
    { name: 'Contact', path: '/contact', section: 'contact', isRoute: true }
  ];

  const scrollToSection = (sectionId, isRoute = false) => {
    if (isRoute) {
      window.location.href = '/contact';
      return;
    }
    
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-6">
      <div 
        className={`bg-white/90 backdrop-blur-md rounded-xl border border-gray-200/60 shadow-lg transition-all duration-500 ${
          isScrolled ? 'shadow-blue-500/20 border-blue-200/50 bg-white/95' : ''
        }`}
        style={{ minHeight: '60px' }}
      >
        <div className="flex items-center justify-between px-6 py-2">
          {/* Logo Image */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="EMCOMSERV Logo" 
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">
              EMCOMSERV
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.section, link.isRoute)}
                className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 hover:scale-105 relative group px-3 py-1 rounded-md hover:bg-gradient-to-r from-blue-50 to-purple-50"
              >
                {link.name}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-6 transition-all duration-300"></div>
              </button>
            ))}
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:shadow-blue-300/40 transform hover:scale-105 transition-all duration-300 animate-pulse-slow">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-1 text-gray-700 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200/60">
            <nav className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.section, link.isRoute)}
                  className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-md hover:bg-gradient-to-r from-blue-50 to-purple-50 transition-all duration-300"
                >
                  {link.name}
                </button>
              ))}
              <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-2 px-3 rounded-lg font-medium mt-2 shadow-md hover:shadow-blue-300/40">
                Login
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;