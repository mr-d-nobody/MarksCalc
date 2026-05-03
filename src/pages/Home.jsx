import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Library, GraduationCap, BarChart3, ArrowRight, Zap } from 'lucide-react';

const heroButtons = [
  {
    title: '2029 Passout',
    path: '/2029-passout',
    icon: <BookOpen className="w-6 h-6" />,
    gradient: 'from-emerald-500 to-teal-600',
    shadow: 'shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]'
  },
  {
    title: '2028 Passout',
    path: '/2028-passout',
    icon: <Library className="w-6 h-6" />,
    gradient: 'from-[var(--color-primary)] to-blue-600',
    shadow: 'shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]'
  },
  {
    title: '2027 Passout',
    path: '/2027-passout',
    icon: <GraduationCap className="w-6 h-6" />,
    gradient: 'from-purple-500 to-pink-600',
    shadow: 'shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]'
  },
];

const featureCards = [
  {
    title: 'Internal Marks of 2029 Passout',
    desc: 'Internal + external marks calculation for Hybrid, Theory, and Practical subjects.',
    path: '/2029-passout',
    icon: <BookOpen className="w-7 h-7" />,
    gradient: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-400',
    borderGlow: 'hover:border-emerald-500/30',
    shadowGlow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
  },
  {
    title: 'Internal Marks of 2028 Passout',
    desc: 'Hybrid, Theory, Practical, and Aptitude calculators with weighted scoring.',
    path: '/2028-passout',
    icon: <Library className="w-7 h-7" />,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
    borderGlow: 'hover:border-blue-500/30',
    shadowGlow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
  },
  {
    title: 'Internal Marks of 2027 Passout',
    desc: 'Advanced year calculations for Hybrid, Theory, Practical, and Aptitude.',
    path: '/2027-passout',
    icon: <GraduationCap className="w-7 h-7" />,
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400',
    borderGlow: 'hover:border-purple-500/30',
    shadowGlow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
  },
  {
    title: 'SGPA Calculator',
    desc: 'Calculate semester GPA with precision. Track your academic performance.',
    path: '/sgpa',
    icon: <BarChart3 className="w-7 h-7" />,
    gradient: 'from-blue-500/20 to-purple-500/20',
    iconColor: 'text-blue-400',
    borderGlow: 'hover:border-blue-500/30',
    shadowGlow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
    badge: 'Available Soon',
  },
];

const Home = () => {
  return (
    <div className="flex flex-col items-center relative z-10">
      {/* ─── Hero ─── */}
      <div className="flex flex-col items-center justify-center min-h-[75vh] w-full relative">
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
          {heroButtons.map((btn, index) => (
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

      {/* ─── Features Section ─── */}
      <section id="features" className="w-full max-w-6xl mt-20 mb-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-glow">
            Features
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Everything you need to calculate and track your academic performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featureCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={card.path} className="block group">
                <div className={`relative glass-panel rounded-2xl p-8 border border-white/10 transition-all duration-500 ${card.borderGlow} ${card.shadowGlow}`}>
                  {/* Badge */}
                  {card.badge && (
                    <div className="absolute top-6 right-6">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase px-3 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/25">
                        <Zap className="w-3 h-3" />
                        {card.badge}
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className={card.iconColor}>{card.icon}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-glow transition-all duration-300">
                    {card.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">
                    {card.desc}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-medium text-white/50 group-hover:text-white/80 transition-colors duration-300">
                    <span>{card.badge ? 'Explore' : 'Open'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
