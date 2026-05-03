import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: '1st Year', path: '/year-1' },
    { name: '2nd Year', path: '/year-2' },
    { name: '3rd Year', path: '/year-3' },
    { name: 'About', path: '/about' }
  ];

  const handleNavClick = (e, path) => {
    // If it's a hash link on the home page, scroll to it
    if (path.startsWith('/#')) {
      e.preventDefault();
      const targetId = path.substring(2);
      if (location.pathname !== '/') {
        navigate(path);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10 shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white tracking-tight flex items-center gap-3 group" title="Internal Marks Calculator">
          <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#logo-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
              <defs>
                <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <rect x="7" y="7" width="4" height="4" />
              <rect x="13" y="7" width="4" height="4" />
              <rect x="7" y="14" width="10" height="3" />
            </svg>
          </div>
          <span className="font-extrabold tracking-wide group-hover:text-glow transition-all duration-300">MarksCalc</span>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (location.pathname === '/' && item.path === '/');
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-primary)] rounded-full transition-all duration-300 transform origin-center ${
                  isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                }`} />
              </Link>
            );
          })}
        </div>

        <div>
          <a
            href="https://www.instagram.com/mrdnobody"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-300 hover:text-white hover:border-pink-400/50 hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300 group"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-4 h-4 group-hover:scale-110 transition-transform"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="text-sm font-medium hidden sm:block">Instagram</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
