// Hero.tsx - Enhanced Hero Section
"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold tracking-wide">
        Hi, I&apos;m Lotchan Kumar – A Lifelong Learner Shaping the Future Through Innovations. 
        </h1>
        <p className="mt-4 text-lg opacity-80">
        Full-Stack Developer | DS & ML Expert | AI Developer & Prompt Engineer | VR & Metaverse Architect | Quantum Computing Expertise | Robotics & Automation Expert | Bioengineering & Longevity Research Expertise
        </p>
        <motion.a
          href="#projects"
          className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition"
          whileHover={{ scale: 1.1 }}
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;