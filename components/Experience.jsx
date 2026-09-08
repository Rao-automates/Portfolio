'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: "Full-stack Automation Freelancer",
    company: "Upwork",
    date: "2025 — Present",
    description: "Delivering custom automation solutions involving LLM orchestration, RAG pipelines, and complex API integrations with real-time Firebase dashboards."
  },
  {
    title: "Founding Partner & Lead Engineer",
    company: "AI Automation Agency",
    date: "2024",
    description: "Launched an agency focused on business process optimization via n8n and FastAPI. Architected autonomous workflows for client lead qualification and CRM synchronization."
  },
  {
    title: "Senior Business Developer",
    company: "Winklin",
    date: "2023 — 2024",
    description: "Spearheaded technical lead qualification, aligning complex service offerings with enterprise requirements and optimizing outreach funnels."
  },
  {
    title: "Founder & Lead Strategist",
    company: "Content Writing Startup",
    date: "2023",
    description: "Managed a cross-functional team to deliver technical content, building internal automation to streamline the entire production pipeline."
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-32 md:py-48 px-6 md:px-10 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-[#c9f24d] uppercase tracking-[0.2em]">02</span>
          <div className="w-12 h-px bg-white/20" />
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-[0.2em]">Experience</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-20">
          Professional History
        </h2>

        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-14 border-t border-white/[0.06] first:border-t-0 hover:bg-white/[0.015] transition-colors duration-500 cursor-default px-2 -mx-2 rounded-lg"
            >
              <div className="md:col-span-2">
                <span className="text-xs font-mono text-neutral-600 uppercase tracking-wider">{exp.date}</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-lg font-display font-bold text-foreground tracking-tight">{exp.company}</h3>
              </div>
              <div className="md:col-span-3">
                <h4 className="text-base text-neutral-400 font-medium">{exp.title}</h4>
              </div>
              <div className="md:col-span-4">
                <p className="text-sm text-neutral-500 leading-relaxed font-light">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
