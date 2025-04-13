import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

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
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
        damping: 12,
      },
    },
  };

  const techVariants = {
    hidden: { scale: 0.9, opacity: 0 },
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

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Flutter', icon: '📱' },
    { name: 'Tailwind CSS', icon: '🎨' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center py-24 relative overflow-hidden bg-gradient-to-bl from-slate-50 via-primary-50 to-secondary-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary-200/30 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary-200/30 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, 15, 0],
            y: [0, 15, 0],
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-200/30 rounded-full filter blur-3xl"
        />
      </div>

      {/* Grid patterns for modern aesthetic */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="md:col-span-7 text-left"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium font-mono ring-1 ring-primary-200">
                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
                Welcome to my portfolio
              </span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight tracking-tight"
            >
              <span className="inline-block bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                Hi, I'm Shyam Sundar S
              </span>
            </motion.h1>
            
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-display font-semibold mb-6 text-slate-800"
            >
              A <span className="text-primary-600">passionate</span> full-stack developer
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8 font-sans leading-relaxed"
            >
              I'm experienced in building responsive and user-friendly applications using modern technologies. I love turning ideas into real-world applications, learning new technologies, and solving logical problems.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('projects')}
                className="group px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-lg shadow-lg shadow-primary-600/20 hover:shadow-xl hover:shadow-primary-600/30 transition-all duration-300 flex items-center gap-2"
              >
                View My Work
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </motion.span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border-2 border-primary-500 text-primary-700 font-medium rounded-lg hover:bg-primary-50 transition-colors duration-300"
              >
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-6"
            >
              <span className="text-slate-600 font-medium">Connect with me:</span>
              <div className="flex space-x-5">
                <motion.a
                  href="#"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-slate-700 hover:text-primary-600 transition-colors duration-300"
                >
                  <Github size={22} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-slate-700 hover:text-primary-600 transition-colors duration-300"
                >
                  <Linkedin size={22} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-slate-700 hover:text-primary-600 transition-colors duration-300"
                >
                  <Twitter size={22} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-5 relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-white to-slate-50 p-1 rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
              <div className="w-full aspect-[4/5] overflow-hidden rounded-xl">
                <div className="w-full h-full bg-gradient-to-tr from-primary-600 via-secondary-500 to-accent-500 rounded-xl overflow-hidden relative">
                  {/* Abstract code pattern overlay */}
                  <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                    <div className="h-full w-full" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }}></div>
                  </div>
                
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8"
                  >
                    <div className="w-24 h-24 mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                      <span className="text-4xl">👨‍💻</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 font-display">Creative Developer</h3>
                    <p className="text-lg text-white/90 font-sans max-w-xs">Turning complex ideas into elegant solutions</p>
                    
                    <div className="mt-8 flex flex-wrap justify-center gap-2">
                      {["Web", "Mobile", "UI/UX"].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-400 rounded-full shadow-lg z-0 opacity-70"
            />
            <motion.div
              initial={{ opacity: 0, x: -40, y: -40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -top-6 -left-6 w-24 h-24 bg-primary-400 rounded-full shadow-lg z-0 opacity-70"
            />
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-slate-800 mb-8 text-center font-display flex items-center gap-2">
              <span className="inline-block w-12 h-px bg-slate-300"></span>
              Technologies I work with
              <span className="inline-block w-12 h-px bg-slate-300"></span>
            </h3>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={techVariants}
                  whileHover={{ 
                    scale: 1.08,
                    y: -5,
                    boxShadow: "0 15px 30px -10px rgba(14, 165, 233, 0.2)",
                  }}
                  className="p-4 bg-white rounded-xl text-center shadow-md border border-slate-100 hover:border-primary-200 transition-all duration-300"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-2xl mb-2">{tech.icon}</span>
                    <span className="text-primary-800 font-medium font-mono text-sm">{tech.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-16 text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('about')}
                className="flex items-center gap-2 mx-auto text-primary-600 font-medium group"
              >
                <span>Scroll to learn more</span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="h-8 w-8 rounded-full border border-primary-200 flex items-center justify-center group-hover:border-primary-400 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                  </svg>
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;