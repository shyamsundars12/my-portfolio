import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MapPin, Link as LinkIcon } from 'lucide-react';

const Contact = ({ setActiveSection }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-2 px-4 py-1 bg-blue-100 rounded-full text-sm font-medium text-blue-800">
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-900 font-display">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
            I'm always open to discussing new projects and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-indigo-900 mb-6 font-display">Contact Information</h3>
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-indigo-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-900">Email</h3>
                    <a href="mailto:shyamsundar41550@gmail.com" className="text-gray-700 hover:text-indigo-600 transition-colors">
                      shyamsundar41550@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-indigo-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-900">Location</h3>
                    <p className="text-gray-700">India</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-indigo-600">
                    <LinkIcon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-900">Social Links</h3>
                    <div className="flex space-x-4 mt-2">
                      <a
                        href="https://github.com/shyamsundars12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-indigo-600 transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/shyam-sundar-s-13b297211/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-indigo-600 transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 font-medium mb-2">Name</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-800 font-medium mb-2">Email</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Your email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-800 font-medium mb-2">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Your message"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all shadow-md"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;