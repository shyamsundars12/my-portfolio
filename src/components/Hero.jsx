import { motion } from 'framer-motion';

const Hero = ({ setActiveSection }) => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const techVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center py-20 px-4 relative overflow-hidden bg-gradient-to-br from-primary-200/30 via-secondary-200/20 to-accent-200/30">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-300/50 rounded-full filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary-300/50 rounded-full filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-300/50 rounded-full filter blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-left"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium font-mono">
                Welcome to my portfolio
              </span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-display font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-primary-500 to-secondary-600 bg-clip-text text-transparent">
                Hi, I'm Shyam
              </span>
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-display font-semibold mb-6 text-primary-900"
            >
              A passionate full-stack developer
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-primary-700 max-w-2xl mb-8 font-sans"
            >
              I'm experienced in building responsive and user-friendly applications using technologies like React, Node.js, MongoDB, and Flutter. I love turning ideas into real-world applications, learning new technologies, and solving logical problems.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg font-sans"
            >
              View My Work
            </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-primary-500 text-primary-700 font-medium rounded-lg hover:bg-primary-100/50 transition-colors font-sans"
              >
                Contact Me
              </motion.button>
        </motion.div>

        <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4"
            >
              <span className="text-primary-700 font-medium font-sans">Connect with me:</span>
              <div className="flex space-x-4">
                {['github', 'linkedin', 'twitter'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ y: -5, color: "#0284c7" }}
                    className="text-primary-700 hover:text-primary-900"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="w-full h-96 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-white text-center p-8"
                  >
                    <h3 className="text-3xl font-bold mb-4 font-display">Creative Developer</h3>
                    <p className="text-lg opacity-90 font-sans">Turning ideas into reality</p>
                  </motion.div>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-400 rounded-full shadow-lg z-0"
            />
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -top-6 -left-6 w-24 h-24 bg-primary-400 rounded-full shadow-lg z-0"
            />
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20"
        >
          <h3 className="text-xl font-semibold text-primary-900 mb-6 text-center font-display">Technologies I work with</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {['React', 'Node.js', 'TypeScript', 'Tailwind CSS'].map((tech, index) => (
              <motion.div
                key={tech}
                variants={techVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.3)",
                }}
                className="p-4 bg-white rounded-lg text-center shadow-md"
              >
                <span className="text-primary-700 font-medium font-mono">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
