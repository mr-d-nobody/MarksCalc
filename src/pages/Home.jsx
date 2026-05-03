import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Library, GraduationCap } from 'lucide-react';

const buttons = [
  {
    title: '1st Year',
    path: '/year-1',
    icon: <BookOpen className="w-6 h-6" />,
    gradient: 'from-emerald-500 to-teal-600',
    shadow: 'shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]'
  },
  {
    title: '2nd Year',
    path: '/year-2',
    icon: <Library className="w-6 h-6" />,
    gradient: 'from-[var(--color-primary)] to-blue-600',
    shadow: 'shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]'
  },
  {
    title: '3rd Year',
    path: '/year-3',
    icon: <GraduationCap className="w-6 h-6" />,
    gradient: 'from-purple-500 to-pink-600',
    shadow: 'shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]'
  },
];

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] relative z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-[var(--color-primary)]/10 blur-[100px] pointer-events-none rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight text-glow">
          Internal Marks Calculator
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          Calculate your exact internal and final marks instantly without manual effort
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl justify-center items-center relative z-10">
        {buttons.map((btn, index) => (
          <Link key={btn.title} to={btn.path} className="w-full md:w-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r ${btn.gradient} text-white font-semibold text-lg transition-all duration-300 ${btn.shadow}`}
            >
              {btn.icon}
              {btn.title}
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
