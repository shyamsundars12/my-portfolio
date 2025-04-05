import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants for page transitions
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-600 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white text-4xl font-display font-bold"
            >
              Loading...
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative"
          >
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
            <main>
              <Hero setActiveSection={setActiveSection} />
              <About setActiveSection={setActiveSection} />
              <Projects setActiveSection={setActiveSection} />
              <Contact setActiveSection={setActiveSection} />
            </main>
            <footer className="py-6 text-center text-primary-700 font-sans">
              <p>© {new Date().getFullYear()} Shyam Sundar. All rights reserved.</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
