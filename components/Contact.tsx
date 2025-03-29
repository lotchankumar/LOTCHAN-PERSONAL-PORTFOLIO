"use client";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-center text-white">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-4xl font-bold"
      >
        Get in Touch
      </motion.h2>
      <p className="mt-4 text-lg">I’d love to connect! Whether it's collaboration, a question, or just to say hi, feel free to reach out.</p>
      <motion.a
        href="mailto:contact@yourdomain.com"
        className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-green-500 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition"
        whileHover={{ scale: 1.1 }}
      >
        Say Hello
      </motion.a>
    </section>
  );
};

export default Contact;
