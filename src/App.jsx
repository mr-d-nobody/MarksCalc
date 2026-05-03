import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Year1 from './pages/Year1';
import Year2 from './pages/Year2';
import Year3 from './pages/Year3';
import SGPAPage from './pages/SGPAPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#020617]">
        {/* Background decorations */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--color-primary)]/10 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--color-secondary)]/10 blur-[150px] pointer-events-none" />

        <Navbar />

        <main className="flex-grow container mx-auto px-4 pt-32 pb-16 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/2029-passout" element={<Year1 />} />
            <Route path="/2028-passout" element={<Year2 />} />
            <Route path="/2027-passout" element={<Year3 />} />
            <Route path="/sgpa" element={<SGPAPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
