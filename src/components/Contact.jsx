'use client';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Link as LinkIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

const Contact = ({ setActiveSection }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_brkphjh',
        'template_m6wm2lq',
        formRef.current,
        'KbGJxP_edtYjocVrM'
      )
      .then(
        () => {
          toast.success('Message sent successfully! ✅');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          toast.error('Failed to send message. Try again later. ❌');
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-indigo-50 to-blue-50">
      <Toaster position="top-right" reverseOrder={false} />
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
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-indigo-900 mb-6 font-display">
                Contact Information
              </h3>
              <div className="space-y-6">
                {/* Email */}
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

                {/* Location */}
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

                {/* Social Links */}
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
                        {/* GitHub Icon */}
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12..." />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/shyam-sundar-s-13b297211/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-indigo-600 transition-colors"
                      >
                        {/* LinkedIn Icon */}
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239..." />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
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
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                required
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                required
                placeholder="Type your message here..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
