'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: "Socket Arcade",
    description: "A real-time multiplayer game server built with Flask and Socket.IO. Transforms your local network into a gaming party hub.",
    type: "Real-time Network",
    year: "2023",
    tech: ["Python", "Flask", "Socket.IO"],
    url: "https://github.com/Rao-automates/Socket-Arcade-"
  },
  {
    title: "Music Automaton",
    description: "A procedural melody generator using Finite State Automata principles to create generative audio sequences in real-time.",
    type: "Generative Audio",
    year: "2023",
    tech: ["React", "Web Audio API", "FSA"],
    url: "https://github.com/Rao-automates/Music-Automaton-Composer"
  }
]

export function Projects() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-10 relative z-10" id="projects">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-[#c9f24d] uppercase tracking-[0.2em]">05</span>
          <div className="w-12 h-px bg-white/20" />
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-[0.2em]">Other Work</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-20">
          Selected Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-8 md:p-10 rounded-2xl border border-white/[0.06] hover:border-white/[0.12] bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-xs font-mono text-neutral-600 uppercase tracking-wider">{project.type}</span>
                <ArrowUpRight size={18} className="text-neutral-600 group-hover:text-[#c9f24d] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4 group-hover:text-[#c9f24d] transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-sm text-neutral-500 leading-relaxed mb-8 max-w-sm">
                {project.description}
              </p>
              
              <div className="flex items-center gap-2 flex-wrap">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 rounded-full border border-white/[0.06] text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                    {t}
                  </span>
                ))}
                <span className="text-[11px] font-mono text-neutral-600 ml-2">{project.year}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
