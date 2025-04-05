import { motion } from 'framer-motion';

const Projects = ({ setActiveSection }) => {
  const projects = [
    {
      title: "BookMyService",
      description: "A service booking platform connecting users with local professionals like electricians and plumbers. Includes real-time availability, admin dashboard, and role-based access.",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3250a8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["MERN Stack", "MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/shyamsundars12",
      demo: "#"
    },
    {
      title: "EV Charging Station Finder",
      description: "Allows users to locate EV charging stations, book slots, and view reservations. Includes roles like user, owner, and admin.",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Flutter", "Firebase", "Google Maps API", "Dart"],
      github: "https://github.com/shyamsundars12/eco-charge",
      demo: "#"
    },
    {
      title: "Academic Resource Manager",
      description: "Manages academic content with admin, teacher, and student modules. Teachers upload resources, and students access them based on login.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      tags: ["Spring Boot", "React", "MySQL", "Java"],
      github: "https://github.com/shyamsundars12",
      demo: "#"
    }
  ];

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

  const imageVariants = {
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

  const tagVariants = {
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
    <section id="projects" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-primary-200/30 via-secondary-200/20 to-accent-200/30">
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
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 font-display"
          >
            <span className="bg-gradient-to-r from-primary-500 to-secondary-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-primary-700 max-w-3xl mx-auto font-sans"
          >
            Here are some of the projects I've worked on. Each one represents a unique challenge
            and learning experience.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <motion.div 
                variants={imageVariants}
                className="relative h-64 overflow-hidden"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </motion.div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary-900 mb-2 font-display">{project.title}</h3>
                <p className="text-primary-700 mb-4 font-sans">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      variants={tagVariants}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(14, 165, 233, 0.1)",
                      }}
                      className="px-3 py-1 bg-primary-100 rounded-full text-sm text-primary-700 font-mono"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                <motion.a
                  href={project.demo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-6 py-2 bg-gradient-to-r from-primary-500 to-secondary-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-md font-sans"
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
