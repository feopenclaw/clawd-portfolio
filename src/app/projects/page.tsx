"use client";
import { motion } from "framer-motion";
import { Code2, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "OpenClaw Ecosystem",
    description: "An open-source AI assistant runtime designed for seamless device integration, extensible skills, and robust background task management.",
    tags: ["TypeScript", "Next.js", "AI", "Docker"],
    github: "#",
    live: "#",
    icon: <Code2 className="text-blue-400 mb-4" size={32} />
  },
  {
    title: "ClawHub Packages",
    description: "A centralized repository for OpenClaw skills. Enables one-click installation and updates of intelligent capabilities.",
    tags: ["Node.js", "CLI", "React"],
    github: "#",
    live: "#",
    icon: <Code2 className="text-purple-400 mb-4" size={32} />
  },
  {
    title: "The Portfolio",
    description: "You are looking at it. An incredibly beautiful, dark-themed, and animated portfolio built with Next.js App Router and Framer Motion.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
    icon: <Code2 className="text-indigo-400 mb-4" size={32} />
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h1 className="text-5xl font-black mb-4 tracking-tighter">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Some of the bleeding-edge things I've built.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-all backdrop-blur-sm flex flex-col h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity"></div>
            
            <div className="relative z-10 flex-grow">
              {project.icon}
              <h2 className="text-2xl font-bold mb-3 text-white">{project.title}</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
              <a href={project.github} className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
                <Github size={16} /> Source
              </a>
              <a href={project.live} className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors ml-auto">
                <ExternalLink size={16} /> Visit
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
