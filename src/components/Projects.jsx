import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = ({ setActiveSection }) => {
  const projects = [
    {
      title: "ServiceSync",
      description: "A service booking platform connecting users with local professionals like electricians and plumbers. Includes real-time availability, admin dashboard, and role-based access.",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3250a8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["MERN Stack", "MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/shyamsundars12/servicesync-frontend",
      demo: "https://servicesync-frontend.vercel.app/",
      color: "#4F46E5"
    },
    {
      title: "EV Charging Station Finder",
      description: "Allows users to locate EV charging stations, book slots, and view reservations. Includes roles like user, owner, and admin.",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Flutter", "Firebase", "Google Maps API", "Dart"],
      github: "https://github.com/shyamsundars12/eco-charge",
      demo: "#",
      color: "#0EA5E9"
    },
    {
      title: "Academic Resource Manager",
      description: "Manages academic content with admin, teacher, and student modules. Teachers upload resources, and students access them based on login.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      tags: ["Spring Boot", "React", "MySQL", "Java"],
      github: "https://github.com/shyamsundars12",
      demo: "#",
      color: "#8B5CF6"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        damping: 15,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-2 px-4 py-1 bg-blue-100 rounded-full text-sm font-medium text-blue-800">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-900 font-display">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge
            and learning experience in my professional journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all text-sm"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 px-4 py-2 text-white font-medium rounded-lg hover:opacity-90 transition-all text-sm"
                    style={{ backgroundColor: project.color }}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all shadow-md"
          >
            <span>Get in touch</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;