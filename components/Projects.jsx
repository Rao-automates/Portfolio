'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: "HouseMate",
    description: "A comprehensive construction cost estimator and housing management platform. Includes a Kotlin XML front-end and a robust Python API backend.",
    type: "Featured System",
    year: "2024",
    tech: "Kotlin • Python • FastAPI",
    links: [
      { label: "Frontend", url: "https://github.com/Rao-automates/HouseMate-Kotlin-XML-Front-end" },
      { label: "Backend", url: "https://github.com/Rao-automates/HouseMate-Api-Backend" }
    ]
  },
  {
    title: "LinkedIn Automation",
    description: "Automated Lead Qualification & Scheduling Workflow. An intelligent n8n workflow that automates the entire process from Google Sheets to calendar booking.",
    type: "Autonomous Agent",
    year: "2024",
    tech: "n8n • AI • G-Suite",
    links: [{ label: "View Architecture", url: "https://github.com/Rao-automates/LinkedIn-Content-Automation-System" }]
  },
  {
    title: "Socket Arcade",
    description: "A real-time multiplayer game server built with Flask and Socket.IO. Transforms your local network into a gaming party hub for seamless Wi-Fi play.",
    type: "Real-time Network",
    year: "2023",
    tech: "Python • Flask • Socket.IO",
    links: [{ label: "Repository", url: "https://github.com/Rao-automates/Socket-Arcade-" }]
  },
  {
    title: "Music Automaton",
    description: "A procedural melody generator built with React and Web Audio API. Uses Finite State Automata principles to generate sequences in real-time.",
    type: "Generative Audio",
    year: "2023",
    tech: "React • Web Audio API • FSA",
    links: [{ label: "Repository", url: "https://github.com/Rao-automates/Music-Automaton-Composer" }]
  },
  {
    title: "N8N AI Chat",
    description: "Two interconnected n8n workflows creating a complete RAG pipeline for document analysis and intelligent querying.",
    type: "RAG Pipeline",
    year: "2023",
    tech: "n8n • LLM • Vector DB",
    links: [{ label: "Repository", url: "https://github.com/Rao-automates/N8N-AI-Document-Processing-Chat-System" }]
  },
  {
    title: "DrChrono Automator",
    description: "An n8n workflow automating patient discharge sheets from DrChrono EHR. Fetches data, generates PDF, and uploads it to the patient's chart.",
    type: "EHR Integration",
    year: "2024",
    tech: "n8n • Healthcare API",
    links: [{ label: "Repository", url: "https://github.com/Rao-automates/DrChrono-Discharge-Sheet-Generator" }]
  },
  {
    title: "FlowPlan",
    description: "Industrial-Grade Project Management Suite. Features a robust workspace architecture for managing sprints, databases, and canvases.",
    type: "Native Mobile App",
    year: "2023",
    tech: "Kotlin • Jetpack Compose",
    links: [{ label: "Repository", url: "https://github.com/Rao-automates/FlowPlan" }]
  }
]

export function Projects() {
  return (
    <section className="py-32 md:py-48 px-6 relative z-10" id="projects">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 pb-12 relative">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 origin-left"
          />
          <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter uppercase mb-6 md:mb-0">
            Selected <br className="hidden md:block"/> Works
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-light max-w-sm">
            High-performance architecture, autonomous workflows, and distributed systems.
          </p>
        </div>

        <div className="flex flex-col w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer relative"
            >
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 origin-left"
              />
              
              {/* Left side: Number & Title */}
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 w-full md:w-1/2">
                <span className="text-sm font-mono text-neutral-600 hidden md:block">
                  0{index + 1}
                </span>
                <h3 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter group-hover:italic transition-all duration-500 transform group-hover:translate-x-4">
                  {project.title}
                </h3>
              </div>

              {/* Right side: Meta & Description */}
              <div className="flex flex-col md:flex-row justify-between w-full md:w-1/2 mt-8 md:mt-0 gap-8">
                <div className="flex flex-col max-w-xs">
                  <span className="text-xs font-mono text-white uppercase tracking-widest mb-2">
                    {project.type}
                  </span>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-col justify-between items-start md:items-end h-full min-h-[100px]">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-4">
                    {project.tech} — {project.year}
                  </span>
                  
                  <div className="flex flex-col gap-2 w-full items-start md:items-end">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                      >
                        {link.label}
                        <ArrowUpRight size={16} className="transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
