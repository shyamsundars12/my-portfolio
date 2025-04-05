import { motion } from 'framer-motion';

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
    hidden: { scale: 0.8, opacity: 0 },
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
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const statsVariants = {
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

  const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'MongoDB', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'Next.js', level: 85 },
    { name: 'GraphQL', level: 75 },
  ];

  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Technologies', value: '15+' },
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-primary-200/30 via-secondary-200/20 to-accent-200/30">
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

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-medium text-sm mb-4"
          >
            About Me
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-display font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary-500 to-secondary-600 bg-clip-text text-transparent">
              Passionate Developer
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-primary-700 max-w-3xl mx-auto font-sans leading-relaxed"
          >
            I'm a full-stack developer with a passion for creating beautiful, functional, and user-friendly applications. I'm currently working on academic and personal projects that help sharpen my skills in both frontend and backend development.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={statsVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md text-center"
                >
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
                    className="text-3xl font-display font-bold text-primary-600 mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-primary-700 font-sans">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-display font-bold text-primary-900 mb-6">
                My Journey
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-semibold text-primary-900">Senior Developer</h4>
                    <p className="text-primary-700 font-sans">Tech Company • 2020 - Present</p>
                    <p className="text-primary-600 font-sans mt-2">Leading development teams and architecting scalable solutions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-semibold text-primary-900">Full Stack Developer</h4>
                    <p className="text-primary-700 font-sans">Startup • 2018 - 2020</p>
                    <p className="text-primary-600 font-sans mt-2">Built and maintained multiple web applications from scratch.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-display font-bold text-primary-900 mb-6">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'] },
                  { name: 'Backend', skills: ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'PHP'] },
                  { name: 'Databases', skills: ['MongoDB', 'MySQL', 'Firebase'] },
                  { name: 'Mobile', skills: ['Flutter (Dart)', 'Jetpack Compose (Kotlin)'] },
                  { name: 'Tools', skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Android Studio'] },
                ].map((category) => (
                  <motion.div
                    key={category.name}
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover="hover"
                    className="bg-primary-50 p-4 rounded-lg"
                  >
                    <h4 className="text-primary-900 font-display font-semibold mb-2">{category.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span key={skill} className="bg-white px-2 py-1 rounded-md text-sm text-primary-700 font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-500/10 to-secondary-500/10 p-8 rounded-xl border border-primary-100 shadow-md">
              <h3 className="text-2xl font-display font-bold text-primary-900 mb-6">
                Goals
              </h3>
              <div className="space-y-4">
                {[
                  'Master full-stack development',
                  'Build production-ready apps',
                  'Contribute to open-source',
                  'Crack tech interviews and internships',
                ].map((goal, index) => (
                  <motion.div
                    key={goal}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-primary-900 font-sans">{goal}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
