import { motion } from 'framer-motion';
import { Award, Briefcase, Code, CheckCircle, ArrowRight } from 'lucide-react';

const About = ({ setActiveSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        damping: 10,
      },
    },
  };

  const skillVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 15px 30px -10px rgba(14, 165, 233, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const statsVariants = {
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

  const stats = [
    { label: 'Years Experience', value: '1+', icon: Award },
    { label: 'Projects Completed', value: '5+', icon: Briefcase },
    { label: 'Technologies', value: '10+', icon: Code },
  ];

  const skillCategories = [
    { 
      name: 'Frontend', 
      icon: '🖥️',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'] 
    },
    { 
      name: 'Backend', 
      icon: '⚙️',
      skills: ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'PHP'] 
    },
    { 
      name: 'Databases', 
      icon: '🗄️',
      skills: ['MongoDB', 'MySQL', 'Firebase'] 
    },
    { 
      name: 'Mobile', 
      icon: '📱',
      skills: ['Flutter (Dart)', 'Jetpack Compose (Kotlin)'] 
    },
    { 
      name: 'Tools', 
      icon: '🔧',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Android Studio'] 
    },
  ];

  const timeline = [
    {
      title: 'Probationary Clerk',
      company: 'Tamilnad Mercantile Bank Ltd',
      period: '2022 - 2024',
      description: 'Worked as a Probationary clerk at Shenkottai branch for one year and handled cash transaction ,CASA,  Account opening , Jewel loans, and other banking activities.',
      icon: <Briefcase size={20} />
    },
  ];

  const goals = [
    'Master full-stack development',
    'Build production-ready apps',
    'Contribute to open-source',
    'Crack tech interviews and internships',
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-bl from-slate-50 via-primary-50 to-secondary-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 15, 0],
            y: [0, -15, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary-200/30 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary-200/30 rounded-full filter blur-3xl"
        />
      </div>

      {/* Grid patterns for modern aesthetic */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium font-mono ring-1 ring-primary-200">
              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              About Me
            </span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight tracking-tight"
          >
            <span className="inline-block bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
              Passionate Developer
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto font-sans leading-relaxed"
          >
            I'm a full-stack developer with a passion for creating beautiful, functional, and user-friendly applications. I'm currently working on academic and personal projects that help sharpen my skills in both frontend and backend development.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Left Column - Stats & Timeline */}
          <div className="md:col-span-5 space-y-8">
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={statsVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden group hover:border-primary-200 transition-all duration-300"
                  >
                    <div className="p-5 text-center">
                      <div className="w-12 h-12 rounded-full bg-primary-100 mx-auto mb-3 flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                        <Icon size={22} className="text-primary-600" />
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 200, 
                          damping: 15,
                          delay: 0.2 + index * 0.1
                        }}
                        className="text-3xl font-display font-bold text-primary-700 mb-1"
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-slate-600 font-medium text-sm">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md border border-slate-100 p-6 hover:border-primary-200 transition-all duration-300"
            >
              <h3 className="text-xl font-display font-bold text-slate-800 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                  <Briefcase size={18} className="text-primary-600" />
                </span>
                My Journey
              </h3>
              
              <div className="space-y-6 relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-primary-100"></div>
                
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.2 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-2 border-primary-200 flex items-center justify-center z-10">
                      {item.icon}
                    </div>
                    
                    <div className="bg-slate-50 rounded-lg p-4 hover:bg-primary-50 transition-colors duration-300">
                      <h4 className="text-lg font-display font-semibold text-slate-800">{item.title}</h4>
                      <p className="text-primary-700 text-sm font-medium">
                        {item.company} • <span className="text-slate-500">{item.period}</span>
                      </p>
                      <p className="text-slate-600 mt-2 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Goals */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl shadow-md border border-primary-100 p-6"
            >
              <h3 className="text-xl font-display font-bold text-slate-800 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                  <CheckCircle size={18} className="text-primary-600" />
                </span>
                Professional Goals
              </h3>
              
              <div className="space-y-3">
                {goals.map((goal, index) => (
                  <motion.div
                    key={goal}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="w-6 h-6 rounded-full flex-shrink-0 bg-primary-100 flex items-center justify-center mr-3 group-hover:bg-primary-200 transition-colors">
                      <CheckCircle size={14} className="text-primary-600" />
                    </div>
                    <p className="text-slate-700 font-medium">{goal}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills */}
          <div className="md:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-md border border-slate-100 p-6 hover:border-primary-200 transition-all duration-300"
            >
              <h3 className="text-xl font-display font-bold text-slate-800 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                  <Code size={18} className="text-primary-600" />
                </span>
                Technical Skills
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover="hover"
                    className="bg-slate-50 rounded-lg p-5 border border-slate-100 hover:border-primary-200 transition-all duration-300"
                  >
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{category.icon}</span>
                      <h4 className="text-lg font-display font-semibold text-slate-800">{category.name}</h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="bg-white px-3 py-1.5 rounded-md text-sm text-primary-700 font-mono shadow-sm border border-slate-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills progress chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md border border-slate-100 p-6 hover:border-primary-200 transition-all duration-300"
            >
              <h3 className="text-xl font-display font-bold text-slate-800 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                  <Award size={18} className="text-primary-600" />
                </span>
                Core Expertise
              </h3>
              
              <div className="space-y-5">
                {[
                  { name: 'React', level: 90 },
                  { name: 'Node.js', level: 85 },
                  { name: 'TypeScript', level: 80 },
                  { name: 'Tailwind CSS', level: 95 },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <span className="text-primary-600 font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Special component */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-tr from-primary-600 to-secondary-600 rounded-xl shadow-lg p-8 text-white overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full filter blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold mb-4">Looking for a developer?</h3>
                <p className="text-white/90 mb-6 max-w-xl">
                  I'm currently available for freelance work and open to new opportunities. If you have a project that needs to be built or a position that needs to be filled, I'd love to hear about it!
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveSection('contact')}
                  className="group px-6 py-3 bg-white text-primary-700 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  Get in Touch
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;