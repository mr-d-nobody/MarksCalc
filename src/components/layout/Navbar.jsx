import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const featureItems = [
    { name: '2029 Passout', path: '/2029-passout', desc: 'Hybrid, Theory & Practical' },
    { name: '2028 Passout', path: '/2028-passout', desc: 'Hybrid, Theory, Practical & Aptitude' },
    { name: '2027 Passout', path: '/2027-passout', desc: 'Advanced Calculations' },
    { name: 'SGPA Calculator', path: '/sgpa', desc: 'Coming Soon', badge: 'Soon' },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  const isFeatureActive = featureItems.some(item => location.pathname === item.path);

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10 shadow-lg py-4'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left Side: Back Button + Logo */}
        <div className="flex items-center gap-2 md:gap-4">
          <AnimatePresence>
            {location.pathname !== '/' && (
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onClick={handleBack}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center group"
                title="Go Back"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
              </motion.button>
            )}
          </AnimatePresence>

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
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {/* Home */}
          <Link
            to="/"
            className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
              location.pathname === '/' ? 'text-white' : 'text-white/60 hover:text-white'
            }`}
          >
            Home
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-primary)] rounded-full transition-all duration-300 transform origin-center ${
              location.pathname === '/' ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
            }`} />
          </Link>

          {/* Features Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group flex items-center gap-1.5 ${
                isFeatureActive ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              Features
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-primary)] rounded-full transition-all duration-300 transform origin-center ${
                isFeatureActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
              }`} />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden"
                >
                  <div className="p-2">
                    {featureItems.map((item, index) => {
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all duration-200 group/item ${
                            isActive
                              ? 'bg-white/10 text-white'
                              : 'text-white/70 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <div className="flex flex-col">
                            <span className="font-medium">{item.name}</span>
                            <span className="text-xs text-white/40 mt-0.5">{item.desc}</span>
                          </div>
                          {item.badge && (
                            <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                              {item.badge}
                            </span>
                          )}
                          {isActive && !item.badge && (
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shadow-[0_0_6px_var(--color-primary)]" />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* About */}
          <Link
            to="/about"
            className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
              location.pathname === '/about' ? 'text-white' : 'text-white/60 hover:text-white'
            }`}
          >
            About
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-primary)] rounded-full transition-all duration-300 transform origin-center ${
              location.pathname === '/about' ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
            }`} />
          </Link>
        </div>

        {/* Right Side: Instagram + Mobile Toggle */}
        <div className="flex items-center gap-3">
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

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-white/80 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 bg-white/80 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-white/80 rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#0f172a]/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="container mx-auto px-6 py-4 space-y-1">
              <Link
                to="/"
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === '/' ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                Home
              </Link>

              <div className="px-4 py-2">
                <span className="text-xs uppercase text-white/30 font-semibold tracking-wider">Features</span>
              </div>
              {featureItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ml-2 ${
                    location.pathname === item.path ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div>
                    <span>{item.name}</span>
                    <span className="block text-xs text-white/30 mt-0.5">{item.desc}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}

              <Link
                to="/about"
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === '/about' ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                About
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
