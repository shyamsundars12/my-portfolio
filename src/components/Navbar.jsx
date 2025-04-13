import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center mr-3 shadow-sm">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h1 className="text-xl md:text-2xl font-semibold text-neutral-800">Shyam Sundar</h1>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-sm'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-purple-100/40'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-neutral-800 hover:bg-purple-100/40 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial="closed"
          animate={mobileMenuOpen ? 'open' : 'closed'}
          variants={mobileMenuVariants}
          className="md:hidden overflow-hidden"
        >
          <div className="px-4 pt-3 pb-5 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg text-base font-medium ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                    : 'text-gray-700 hover:bg-purple-100/40'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;
