// Projects.tsx - Enhanced Projects Section with Animations
"use client";
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "SFEASEISC", tech: ["Quantum AI", "VR Metaverse"], image: "/project1.gif" },
  { id: 2, title: "RAEFAST", tech: ["AI", "Blockchain", "Automation"], image: "/project2.gif" },
  { id: 3, title: "EduVerse Kids", tech: ["Quantum Computing", "Web3", "AI"], image: "/project3.gif" },
  { id: 4, title: "LOTCHAN'S QUALUYIR", tech: ["Longevity", "AI", "Luxury Tech"], image: "/project4.gif" },
  { id: 5, title: "LOVFIS", tech: ["OmniBrain AI", "Automation"], image: "/project5.gif" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white text-center">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-4xl font-bold"
      >
        My Projects
      </motion.h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            className="relative p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition"
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
            <div className="mt-2 flex flex-wrap gap-2 justify-center">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 text-sm bg-blue-500 rounded-lg font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;