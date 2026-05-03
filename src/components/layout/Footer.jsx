import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-[#0f172a]/50 backdrop-blur-md py-8 mt-auto relative z-10">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center space-y-4">
        
        {/* Footer Logo */}
        <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default" title="Internal Marks Calculator">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#footer-logo-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <defs>
              <linearGradient id="footer-logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
          <span className="text-lg font-bold tracking-tight text-white">MarksCalc</span>
        </div>

        <div className="flex flex-col items-center space-y-1">
          <p className="text-white/40 text-sm font-medium">
            © {new Date().getFullYear()} MrDnobody | Built for CU Students
          </p>
          <p className="text-white/20 text-xs">
            Built by <span className="text-[var(--color-primary)]/50">MrDnobody</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
